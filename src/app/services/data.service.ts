import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
   createDb(){

     let employees = [
      { employeeId: 101, employeeName: 'Employee1', resourceCount: 2 },
      { employeeId: 102, employeeName: 'Employee2', resourceCount: 3 },
      { employeeId: 103, employeeName: 'Employee3', resourceCount: 0 }
    ];
    
    let  resources =  [
      {  resourceId:  101,  employeeId:  101 },
      {  resourceId:  102,  employeeId:  101 },
      {  resourceId:  103,  employeeId:  102 },
      {  resourceId:  104,  employeeId:  102 },
      {  resourceId:  105,  employeeId:  102 }
    ];

   return {employees, resources };
  }
}