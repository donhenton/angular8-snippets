import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],

})
export class TemplateFormComponent implements OnInit {

  @ViewChild('viewChildRefToForm',{ static: true }) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female', 'unknown'];



  userSample = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  user;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(JSON.stringify(this.userSample));
    this.signupForm.valueChanges.subscribe(this.handleFormChanges.bind(this))
  }

  handleFormChanges(data) {
     // console.log(data)
  }

  checkForBozos() {
    if (this.signupForm && this.signupForm.controls
      && this.signupForm.controls['userData']
      && this.signupForm.controls['userData']['controls'].username.errors
      && this.signupForm.controls['userData']['controls'].username.errors) {

       return  this.signupForm.controls['userData']['controls'].username.errors['noBozos'] ;


    }

    return false;
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.userData.gender;
    this.signupForm.reset();
    this.signupForm.form.patchValue({ secret: this.defaultQuestion });
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  resetDemo() {
    console.log('did the reset ')
    this.user = this.userSample;
    this.submitted = false;
  }

}
