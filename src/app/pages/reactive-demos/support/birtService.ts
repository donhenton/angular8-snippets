import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

// https://seegatesite.com/how-to-load-all-data-before-rendering-view-component-in-angular-4/
// https://shermandigital.com/blog/wait-for-data-before-rendering-views-in-angular-2/

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import 'rxjs/Rx'; // for all
// https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
// https://netbasal.com/rxjs-six-operators-that-you-must-know-5ed3b6e238a0
// http://blog.danieleghidoli.it/2016/10/22/http-rxjs-observables-angular/
// https://stackoverflow.com/questions/36984059/rxjs-array-of-observable-to-array

import 'rxjs/add/operator/mergeMap'; // this puts mergeMap onto observable
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Rx'; // NOT from 'rxjs/Rx/Observable
import { Office, Employee, Customer, CustomersForEmployees } from './birt.interfaces';

@Injectable()
export class BirtService implements Resolve<any> {

  private readonly URL_BASE = environment.birtAPIURL; // users/all

  constructor(private _http: Http) { }


  getAllOffices(): Observable<Office[]> {

    return this._http.get(this.URL_BASE + 'offices/all')
      .map(res => res.json())

  }

  getEmployeesForOffice(office: Office): Observable<any> {

    /*
    return this._http.get(this.URL_BASE + `users/authorized/apps/${user.userid}`)
                .map(res => res.json())
                .map((res: Applications[]) => {
                    const ua: UserWithApps = new UserWithApps;
                    ua.username = user.username;
                    ua.applications = res;
                    ua.mappedId = user.userid
                    return ua;
                })
    */


    return this._http.get(this.URL_BASE + `employees/office/${office.officeCode}`)
      .map(res => res.json())
      .map((res: Employee[]) => {
        office.employees = res;
        return office;
      }
      );
    // return null;
  }



  getCustomerForEmployees(ids: any ): Observable<CustomersForEmployees> {
     return Observable.from(ids).mergeMap(id => {

            return this._http.get(this.URL_BASE + `employees/${id}`)
            .map(res => res.json())
            .map((emp) => {

                return {id: id, customers: emp.customers};
            })


     })
  }



  //////////////////////////////////////////
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const me = this;
    return this.getAllOffices()
      .flatMap((offices: Office[]) => {
        return Observable.forkJoin(
          // forkJoin waits for all to complete
          // the observable list is one call for the first office
          // then 'resolved' observables for all other offices
          offices
            .map((office: Office, idx) => {
             // if (idx === 0) {
                return me.getEmployeesForOffice(office)
              // } else {
              //  office.employees = [];
                // this is a kind of 'resolved' observable
              //  return Observable.of(office);
              // }

            })

        );
      })

      ;
  }

}
