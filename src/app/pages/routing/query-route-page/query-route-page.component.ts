import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const NOT_FOUND = 'N/A';

@Component({
  selector: 'app-query-route-page',
  templateUrl: './query-route-page.component.html',
  styleUrls: ['./query-route-page.component.scss']
})
export class QueryRoutePageComponent implements OnInit, AfterContentChecked {


  public alphaValue: string = NOT_FOUND;
  public betaValue: string = NOT_FOUND;
  public fragmentInfo: string = null;
  public source = '';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngAfterContentChecked() {
    // this.alphaValue = NOT_FOUND;
    // this.betaValue = NOT_FOUND;
  }

  ngOnInit() {




    this.route.fragment.subscribe(q => {

      this.fragmentInfo = '"' + JSON.stringify(q) + '"';

    }, error => { })

    this.route.params.subscribe(q => {

      if (this.isEmptyObj(q)) {
        return;
      }


      this.alphaValue = q.alpha;
      // +"_"+this.route.snapshot.params['alpha'];;
      this.betaValue = q.beta;
      console.log('routes stuff ' + JSON.stringify(q))
      if (this.alphaValue !== NOT_FOUND) {
        this.source = '(Route Params aka Path Params)'
      }
    },
      error => { });

    this.route.queryParams.subscribe(q => {

      if (this.isEmptyObj(q)) {
        return;
      }

      this.alphaValue = q.alpha;
      this.betaValue = q.beta;
      console.log('query param stuff ' + JSON.stringify(q))
      if (this.alphaValue !== NOT_FOUND) {
        this.source = '(Query Params)'
      }
    },
      error => { });



  }

  isEmptyObj(q: object): boolean {
    return Object.keys(q).length === 0 && q.constructor === Object;
  }

}
