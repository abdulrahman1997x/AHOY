import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  removeEmpty = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] === Object(obj[key]))
        newObj[key] = this.removeEmpty(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
  };

  getCountries() {
    return this.http.get(`${environment.baseUrl}/countries`);
  }

  getStatistics(country?) {
    let params = {
      country: country,
    };
    return this.http.get(`${environment.baseUrl}/statistics`, {
      params: this.removeEmpty(params),
    });
  }

  getHistory(country?) {
    let params = {
      country: country,
    };
    return this.http.get(`${environment.baseUrl}/history`, {
      params: this.removeEmpty(params),
    });
  }
}
