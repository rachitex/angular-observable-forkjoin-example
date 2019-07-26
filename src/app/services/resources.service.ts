import { Resource } from '../models/resource.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ResourcesService {
    private url = 'http://localhost:8080/api/resources';
    constructor(private http: HttpClient) { }

    getResources(): Observable<Resource[]> {
        return this.http.get<Resource[]>(this.url);
    }

    createResource(resource: Resource): Observable<Resource> {
        return this.http.post<Resource>(this.url, resource, httpOptions);
    }
}