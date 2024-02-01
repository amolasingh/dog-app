import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BreedDetailService {
    
    constructor(private http: HttpClient) {}

    getBreedDetail(): Observable<any> {
        const breedId: string = "hound";
        return this.http.get(`http://localhost:3000/breeds/detail/${breedId}`);
    }
}