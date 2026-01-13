import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMusclesDiagDTO} from "../model/diag";
import {REGIONS} from "../model/regions.data";

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  muscleUrl = environment.apiUrl + "muscles";
  private muscleToAllSymptoms = new Map<
    string,
    { name: string; namePl: string }[]
  >();
  constructor(private http: HttpClient) {
    this.buildMuscleSymptomIndex();
  }

  buildMuscleSymptomIndex() {
    this.muscleToAllSymptoms.clear();

    REGIONS.forEach(region =>
      region.types.forEach(type =>
        type.symptoms.forEach(symptom =>
          symptom.muscles.forEach(muscle => {

            if (!this.muscleToAllSymptoms.has(muscle.name)) {
              this.muscleToAllSymptoms.set(muscle.name, []);
            }

            this.muscleToAllSymptoms.get(muscle.name)!.push({
              name: symptom.name,
              namePl: symptom.namePl
            });

          })
        )
      )
    );

    // opcjonalnie: usuwanie duplikatów
    this.muscleToAllSymptoms.forEach((list, muscle) => {
      this.muscleToAllSymptoms.set(
        muscle,
        Array.from(
          new Map(list.map(s => [s.name, s])).values()
        )
      );
    });
  }

  getDiagnoseResult(symptomsIds: number[]) {
    let params = new HttpParams();
    params = params.append('ids',symptomsIds.toString());
    return this.http.get<IMusclesDiagDTO[]>(this.muscleUrl, {params: params});
  }

}
