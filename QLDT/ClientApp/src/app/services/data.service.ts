import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url_str!: string;
  private headers = new HttpHeaders();
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url_str = baseUrl + 'api/';
    this.headers = this.headers.set('Content-Type', 'application/json');
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
    return this.http.post(this.url_str + uri, data, { headers: this.headers }).pipe(
      map((
        response => {
          return response;
        }
      ))
    );
  }
  put(uri: string, data?: any) {
    return this.http.put(this.url_str + uri, data, { headers: this.headers }).pipe(
      map((
        response => {
          return response;
        }
      ))
    );
  }
  delete(uri: string, id: string) {
    return this.http.delete(this.url_str + uri + "/" + id, { headers: this.headers }).pipe(
      map((
        response => {
          return response;
        }
      ))
    );
  }
}
