import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { nguoidung } from '../models/nguoidung';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private userInfo: BehaviorSubject<nguoidung>;
  private isAuthenticated: BehaviorSubject<boolean>;
  private currentPage: BehaviorSubject<string>;

  constructor(
    private storage: LocalStorageService
  ) {
    let currUser = storage.getUserInfo();
    this.userInfo = new BehaviorSubject<nguoidung>(currUser);
    this.isAuthenticated = new BehaviorSubject<boolean>(currUser != undefined);
    this.currentPage = new BehaviorSubject<string>("");
  }

  getCurrentPage(): Observable<string> {
    return this.currentPage.asObservable();
  }

  setCurrentPage(newValue: any): void {
    this.currentPage.next(newValue);
  }

  getUserInfo(): Observable<nguoidung> {
    return this.userInfo.asObservable();
  }

  setUserValue(newValue: nguoidung): void {
    this.userInfo.next(newValue);
    if (newValue == undefined) {
      this.setAuthenState(false);
      this.storage.removeUserValue();
    }
    else {
      this.setAuthenState(true);
      this.storage.setUserInfo(newValue);
    }
  }

  getAuthenState(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  private setAuthenState(newValue: any): void {
    this.isAuthenticated.next(newValue);
  }
}
