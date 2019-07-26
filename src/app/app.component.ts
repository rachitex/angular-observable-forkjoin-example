import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { EmployeesService } from './services/employees.service';
import { ResourcesService } from './services/resources.service';
import { Employee } from './models/employee.model';
import { Resource } from './models/resource.model';
import { MessagesService } from './services/messages-service/messages.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  // resourceQuantity: any;

  constructor(
    private employeesService: EmployeesService,
    private resourcesService: ResourcesService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      'employeeId': new FormControl(null, { validators: [Validators.required] }),
      'employeeName': new FormControl(null, { validators: [Validators.required] }),
      'resourceQuantity': new FormControl(null, { validators: [Validators.required] }),
      'resources': new FormArray([])
    });

    this.resourceQuantity.valueChanges.subscribe(() => {
      this.generateResourceForm();
    });
  }

  createResource() {
    return new FormGroup({
      'id': new FormControl(null, { validators: Validators.required})
    });
  }

  generateResourceForm() {
    this.resources.clear();
    for (let x = 0; x < this.resourceQuantity.value; x++) {
      this.resources.push(this.createResource());
    }
  }

  add() {
    this.employeesService
    .createEmployee(this.form.value as Employee)
    .subscribe(
        employee=> {
            console.log(employee);
        },
        (err: HttpErrorResponse) => {
            this.messagesService.openDialog('Error', 'Invalid Employee. Try Again!');
        }
    );
    const resources: any = {};
    const employeeId: any = {};
    let wholeData: any = [];
    function makeArray(resourceNumber, id) {
        resources.push(resourceNumber);
        for(var i = 0; i < this.resourceNumber.length; i++) {
            employeeId.push(id);
        }
    }
    wholeData = new makeArray(this.resourceNumbers, employeeId);
    this.resourceNumbersService
    .createResourceNumber(wholeData as Resource)
    .subscribe(
        resourceNumber => {
            console.log(resourceNumber);
        },
        (err: HttpErrorResponse) => {
            this.messagesService.openDialog('Error', 'Invalid Resource Number. Try Again!');
        }
    );
  }

  get resourceQuantity() {
    return this.form.get('resourceQuantity');
  }

  get resources() {
    return this.form.get('resources') as FormArray;
  }
}
