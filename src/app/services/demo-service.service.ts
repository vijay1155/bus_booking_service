import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private http : HttpClient) { }

  getdata()
  {
    return this.http.get('https://dummyjson.com/products')

  }
}
