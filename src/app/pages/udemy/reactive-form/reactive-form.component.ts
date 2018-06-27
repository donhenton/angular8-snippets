import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {DataService} from '../../../services/data.service'
import { TeamManagementService } from './../support/team-management.service';
import { Team, Employee, Department } from './../support/team';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers: [TeamManagementService]
})
export class ReactiveFormComponent implements OnInit {

  teamForm: FormGroup;
  formSubmitted = false;
  allSkills: Observable<any[]>
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }
  ngOnInit() {
    this.allSkills = this.teamMngService.getSkills();
    this.createTeamForm();
    this.addEmployee();
  }
  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      teamManager: '',
      teamDept: this.formBuilder.group(new Department()),
      employees: this.formBuilder.array([])
    });
  }
  get empFormArray(): FormArray {
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
    const fg = this.formBuilder.group(new Employee());
    this.empFormArray.push(fg);
  }
  deleteEmployee(idx: number) {
    this.empFormArray.removeAt(idx);
  }
  loadTeam(name: string) {
    this.teamMngService.getTeamByName(name)
      .subscribe(team => {
        this.createFormWithDefaultData(team);
      });
  }
  createFormWithDefaultData(team: Team) {

    this.teamForm.patchValue({
      teamName: team.teamName,
      teamManager: team.teamManager,
      teamDept: team.teamDept
    });
    const employeeFormGroups = team.employees.map(employee => this.formBuilder.group(employee));
    const employeeFormArray = this.formBuilder.array(employeeFormGroups);
    this.teamForm.setControl('employees', employeeFormArray);
  }
  onFormSubmit() {
    const data = JSON.stringify(this.teamForm.value);
    console.log('-----Team in JSON Format-----');
    console.log(data);
    const team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.formSubmitted = true;
    this.dataService.emitTeam(team);
    this.teamForm.reset();

  }
  resetTeamForm() {
    this.teamForm.reset({
      teamName: 'Java Team',
      teamManager: 'Yogi'
    });
  }

}
