import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from '../reactive-demos/support/securityService';
import { validateGroup } from './validate-group';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.scss'],
  providers: [ SecurityService]
})
export class AsyncValidatorComponent implements OnInit {


  // https://www.concretepage.com/angular-2/angular-custom-async-validator-example
  validateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private securityService: SecurityService) { }

  ngOnInit() {

    this.validateForm = this.formBuilder.group({
      groupName: ['PowerBuilder', Validators.required, validateGroup(this.securityService)],

    });

  } // this.validateForm.controls.groupName.errors  either .required == true or validateGroup == true

  onFormSubmit() {
    const data = JSON.stringify(this.validateForm.value);

  }

}
