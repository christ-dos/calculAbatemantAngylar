import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Child } from "../models/child.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ChildService{
    private apiCalculAbatementUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getAllChildren(): Observable<Child[]>{
        return this.http.get<Child[]>(`${this.apiCalculAbatementUrl}/child/all`);
    }

    public addChild(child: Child): Observable<Child>{
        return this.http.post<Child>(`${this.apiCalculAbatementUrl}/child/add`,child);
    }

    public updateChild(child: Child): Observable<Child>{
        return this.http.put<Child>(`${this.apiCalculAbatementUrl}/child/update`,child);
    }

    public deleteChild(childId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiCalculAbatementUrl}/child/delete/${childId}`);
    }

}