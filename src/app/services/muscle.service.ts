import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMusclesDiagDTO} from "../model/diag";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  muscleUrl = environment.apiUrl + "muscles";

  constructor(private http: HttpClient) {

  }

  getDiagnoseResult(symptomsIds: number[]) {
    let params = new HttpParams();
    params = params.append('ids',symptomsIds.toString());
    return this.http.get<IMusclesDiagDTO[]>(this.muscleUrl, {params: params});
  }

}
