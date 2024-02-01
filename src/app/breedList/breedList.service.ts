import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BreedListService {
    
    constructor(private http: HttpClient) {}

    getAllBreedsData(): Observable<any> {
        const pageSize: Number = 10;
        return this.http.get(`http://localhost:3000/breeds/list/all?size=${pageSize}`);
    }
}