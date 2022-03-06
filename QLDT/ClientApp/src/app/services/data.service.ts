import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url_str!: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url_str = baseUrl;
  }
  get(uri: string) {
    const link = this.url_str + 'api/' + uri;
    return this.http.get(link).pipe();
  }
  getbykey(uri: string) {
    const link = this.url_str + 'api/' + uri;
    return this.http.get(link).pipe();
  }
}
