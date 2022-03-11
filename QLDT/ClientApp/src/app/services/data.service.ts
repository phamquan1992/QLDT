import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url_str!: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url_str = baseUrl+'api/';
  }
  get(uri: string) {
    const link = this.url_str + uri;
    return this.http.get(link).pipe();
  }
  getbykey(uri: string) {
    const link = this.url_str + uri;
    return this.http.get(link).pipe();
  }
  post(uri: string, data?: any) {   
    return this.http.post(this.url_str + uri, data);
  }
  put(uri: string, data?: any) {    
    return this.http.put(this.url_str + uri, data)
  }
  delete(uri: string, key: string, id: string) {  
    return this.http.delete(this.url_str + uri + "/?" + key + "=" + id)
  }
}
