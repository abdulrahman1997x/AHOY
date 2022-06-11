export interface IParameters {
    country: string;
}

export interface ICases {
    new: string;
    active: number;
    critical: number;
    recovered: number;
    '1M_pop': string;
    total: number;
}

export interface IDeaths {
    new: string;
    '1M_pop': string;
    total: number;
}

export interface ITests {
    '1M_pop'?: any;
    total?: any;
}

export interface IResponse {
    continent: string;
    country: string;
    population?: any;
    cases: ICases;
    deaths: IDeaths;
    tests: ITests;
    day: string;
    time: Date;
}

export interface IStatistics {
    get: string;
    parameters: IParameters;
    errors: any[];
    results: number;
    response: Response[];
}

