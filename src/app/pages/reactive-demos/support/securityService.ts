import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

// import 'rxjs/Rx'; // for all
// https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
// https://netbasal.com/rxjs-six-operators-that-you-must-know-5ed3b6e238a0
// http://blog.danieleghidoli.it/2016/10/22/http-rxjs-observables-angular/
// https://stackoverflow.com/questions/36984059/rxjs-array-of-observable-to-array

import 'rxjs/add/operator/mergeMap'; // this puts mergeMap onto observable
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Rx'; // NOT from 'rxjs/Rx/Observable
import { User, Group, UserWithApps, Applications } from './security.interfaces';

@Injectable()
export class SecurityService {

    private readonly URL_BASE = environment.securityAPIURL; // users/all

    constructor(private _http: Http) { }


    getAllGroups(): Observable<Group[]> {
        return this._http.get(this.URL_BASE + 'groups/all')
            .map(res => res.json())
    }



    getAllUsers(): Observable<User[]> {

        // the map call turns string to json object
        const me = this;
        return this._http.get(this.URL_BASE + 'users/all')
            .map(res => res.json())


    }


    getAllUsersWithStuff(): Observable<UserWithApps[]> {

        // the map call turns string to json object
        const me = this;
        return this._http.get(this.URL_BASE + 'users/all')
            .map(res => res.json()) // turn result into json object
            .flatMap((result: User[]) => {
                // flatmap will take the users array and for each of those call takes every observable inside from the forkjoin and
                // calls it its own
                return Observable.forkJoin(   // forkJoin waits for all to complete, that is three calls
                    result // this is the array of users
                    .filter(u => u.userid < 3) // takes forever so just do 3
                    .map((user: User) => me.getApplicationForUser(user)) // do a for each that is a call that creates an observable

                );
            })



    }


    getUsersApplications(): Observable<UserWithApps> {
        const me = this;
        return this._http.get(this.URL_BASE + 'users/all')
            .map(res => res.json())


    }

    private getApplicationForUser(user: User): Observable<UserWithApps> {
       // console.log(user.userid)
        return this._http.get(this.URL_BASE + `users/authorized/apps/${user.userid}`)
            .map(res => res.json())
            .map((res: Applications[]) => {
                const ua: UserWithApps = new UserWithApps;
                ua.username = user.username;
                ua.applications = res;
                ua.mappedId = user.userid
                return ua;
            })
    }
}

