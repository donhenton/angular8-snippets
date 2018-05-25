import { Component, OnInit } from '@angular/core';
import { ReactiveDemosService } from '../support/reactiveDemos.service';
import { SecurityService } from '../support/securityService';

@Component({
  selector: 'app-simple-reactive',
  templateUrl: './simple-reactive.component.html',
  styleUrls: ['./simple-reactive.component.scss'],
  providers: [ReactiveDemosService, SecurityService]
})
export class SimpleReactiveComponent implements OnInit {

  flattenDisplayText = {};
  rxJsDemo = {};
  constructor(private demosService: ReactiveDemosService, private securityService: SecurityService) { }


  ngOnInit() {


  }

  public runRx() {
    console.log('fffffff')
    const success = (data) => {
      this.rxJsDemo =   data;
    }

    const error = (e) => {
      this.rxJsDemo = 'error ' + e;
    }
    this.securityService.getAllUsersWithStuff().subscribe(success, error);
    // this.securityService.getAllUsers().subscribe(success, error);
    // this.securityService.getUsersApplications().subscribe(success, error);
  }

  public runFlatten() {

    const movieLists = this.demosService.getMoviesList();
    let t = '';
    let counter = 0;

    t = movieLists
      .map(m => (m.videos))
      .reduce((a, b) => a.concat(b), [])
      .map(v => v.boxarts)
      .reduce((a, b) => a.concat(b), [])
     // .filter(v => (v.width === 150))
      .reduce((accumulator, b, idx) => {

           accumulator = accumulator + b.width + ',' + idx + ',';
           counter ++;
           return accumulator;

      }, '')

    this.flattenDisplayText = counter + '\n' + t.substring(0, t.length - 1);




  }


}
