import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Team } from '../pages/udemy/support/team';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private _teamSubject = new ReplaySubject<Team>(2);

  constructor() { }


  get teamObservable(): Observable<Team> {
    return this._teamSubject;
  }

  emitTeam(team: Team) {
    this._teamSubject.next(team);
  }

}
