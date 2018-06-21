import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BirtService } from '../support/birtService';
import { Office , CustomersForEmployees} from './../support/birt.interfaces';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-birt-demo',
  templateUrl: './birt-demo.component.html',
  styleUrls: ['./birt-demo.component.scss']
})
export class BirtDemoComponent implements OnInit {
  // https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21
  // https://netbasal.com/angular-2-deal-with-different-form-controls-cheat-sheet-template-vs-model-4c77864cc16b
  // this is for checkboxes in dynamic forms links to template forms

  @ViewChild('employeeForm') employeeForm: NgForm;
  selectedOffice: Office;
  selectedOfficeCode = null;
  officeList: Office[] = [];
  birtTitle = null;
  loading = true;
  employeeSelector = [];
  selectedEmployees: CustomersForEmployees[] = [];

  constructor(private birtService: BirtService, private route: ActivatedRoute) {

  }


  ngOnInit() {

    // https://seegatesite.com/how-to-load-all-data-before-rendering-view-component-in-angular-4/
    // https://shermandigital.com/blog/wait-for-data-before-rendering-views-in-angular-2/
    this.route.data
      .subscribe((data) => {
        this.officeList = data.officeList;
        this.selectedOffice = JSON.parse(JSON.stringify(this.officeList[0]));
        this.selectedOfficeCode = this.officeList[0].officeCode;
        this.generateEmployeeSelector();
        this.loading = false;
        this.birtTitle = data['birtTitle'] // passed in on the route only after resolve
      });

  }


  generateEmployeeSelector() {
    this.employeeSelector = this.selectedOffice.employees.map(e => {
      return { selected: false, firstName: e.firstName, lastName: e.lastName, employeeNumber: e.employeeNumber }
    });
    this.selectedEmployees = [];
  }

  onEmployee(id, event) {

  }

  checkEmployeeSubmitButton() {
    let disabledText = 'disabled';
    const checkValue = this.employeeSelector.filter(e => e.selected === true);
    if (checkValue && checkValue.length > 0) {
      disabledText = '';
    }

    return disabledText;
  }



  onEmpSubmit() {
    console.log('on submit ');
    this.selectedEmployees = [];
    const selectedIds = this.employeeSelector
      .filter(e => e.selected === true)
      .map(e => e.employeeNumber);



    // this will make a separate async call for each selected employee


    if (selectedIds.length > 0) {
      this.birtService.getCustomerForEmployees(selectedIds).subscribe(

        (data) => {
         // console.log(data)
        // if (data.customers.length > 0) {
          this.selectedEmployees.push(data);
        // }

        },

        (error) => {
          console.log(error)
        }



      );
    }
    this.employeeForm.reset();
  }

  changeOffice(event) {

    this.selectedOfficeCode = event.target.value;
    // const idx = this.officeList.findIndex(off => off.officeCode === this.selectedOfficeCode);
    this.selectedOffice = this.officeList.filter(o => o.officeCode === this.selectedOfficeCode)[0];
    // this.selectedOffice = this.officeList[idx];
    this.generateEmployeeSelector();
  }



  getEmployeeDisplay(id) {
    const qEmp =  this.employeeSelector.find(e => e.employeeNumber === id);
    return `${qEmp.firstName} ${qEmp.lastName}`
  }

}



// https://blog.angularindepth.com/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293
// concatMap from a list of variables
// this sends out an async call for each item
