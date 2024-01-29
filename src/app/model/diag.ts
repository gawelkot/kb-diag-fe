export interface IMuscle {
  name: string;
  namePl: string;
}

export interface ISymptom {
  name: string;
  namePl: string;
  translateName: string;
  muscles: IMuscle[];
}

export interface IType {
  name: string;
  namePl: string;
  translateName: string;
  symptoms: ISymptom[];
}

export interface IRegion {
  name: string;
  namePl: string;
  translateName: string;
  abbreviation: string;
  types: IType[];
}

export interface IMusclesDiagDTO {
  name: string;
  namePl: string;
  symptomsMap: any;
  symptoms: Map<string, string[]>;
  score: number;
}

export interface IValue {
  symptoms: string;
  symptomsMap: any;
  name: string;
  score: number;
}
