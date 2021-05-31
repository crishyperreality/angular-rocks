import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bands } from '../model/band';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private http: HttpClient) { }

  viewList(): Observable<Bands>{
    return this.http.get<Bands>(
      'http://localhost:3000/'
    )

  }


}
