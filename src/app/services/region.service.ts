import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IRegion} from "../model/diag";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  regionUrl = environment.apiUrl + "regions";

  constructor (private http: HttpClient) {}

  getRegions(): Observable<IRegion[]> {
    return this.http.get<IRegion[]>(this.regionUrl);
  }
}
