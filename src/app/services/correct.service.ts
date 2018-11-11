import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CorrectService {

    private url = 'assets/correct.json';

    constructor(private http: HttpClient) {}

    getData (): Observable<TicketModel[]> {
        return this.http.get<TicketModel[]>(this.url);
    }
}
