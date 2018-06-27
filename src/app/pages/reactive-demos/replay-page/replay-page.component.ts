import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subject } from 'rxjs/Subject';
import { Team } from '../../udemy/support/team';

@Component({
  selector: 'app-replay-page',
  templateUrl: './replay-page.component.html',
  styleUrls: ['./replay-page.component.scss']
})
export class ReplayPageComponent implements OnInit, OnDestroy {


  private unsubscribe = new Subject<void>();
  team: Team;
  teamList: Team[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.teamObservable
    .takeUntil(this.unsubscribe)
    .subscribe(team => {
      this.team = team;
      this.teamList.push(team);
     // console.log('got data ' + JSON.stringify(team))
    });
  }

  ngOnDestroy() {
    console.log('destroy')
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.unsubscribe.unsubscribe();
  }

}
