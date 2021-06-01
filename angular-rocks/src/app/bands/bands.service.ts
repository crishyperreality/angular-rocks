import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Band, Bands } from '../model/band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private http: HttpClient) { }

  viewList(): Observable<Bands>{
    return this.http.get<Bands>(
      'http://localhost:3000/'
    )
  };

  viewBand(id:number): Observable<Band>{
    return this.http.get<Band>(
      `http://localhost:3000/${id}`
    )
  };
  
  deleteBand(band: Band){
      return this.http.post(
        `http://localhost:3000/delete`, band
      )
  };

  addBand(band: Band):Observable<Band>{
    return this.http.post<Band>(
      'http://localhost:3000/addBand', band
    )
  }


}
