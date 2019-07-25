import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EmployeesService {
    private url = 'http://localhost:8080/api/employees';
    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.url);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.url, employee, httpOptions);
    }
}