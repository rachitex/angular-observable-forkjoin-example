import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  // resourceQuantity: any;

  constructor() {

  }
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
    console.log(this.form.value);
  }

  get resourceQuantity() {
    return this.form.get('resourceQuantity');
  }

  get resources() {
    return this.form.get('resources') as FormArray;
  }
}
