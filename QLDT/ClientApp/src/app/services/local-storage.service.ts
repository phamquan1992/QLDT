import { Inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { LOCAL_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';
import { nguoidung } from '../models/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private numberStorage!: StorageService<number>;
  private stringStorage!: StorageService<string>;
  public UI: string = '996F1E39-17E2-4171-963A-F21B92E1228A';
  private SK = '2FA7DCC4-0E8B-461E-AD06-120C7A9E6D59';
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.numberStorage = storage.withDefaultTranscoder(StorageTranscoders.NUMBER);
    this.stringStorage = storage.withDefaultTranscoder(StorageTranscoders.STRING);
  }
  public encrypt(data: any): string {
    data = JSON.stringify(data);
    data = CryptoJS.AES.encrypt(data, this.SK);
    return data.toString();
  }

  public decrypt(data: any): string {
    data = CryptoJS.AES.decrypt(data, this.SK);
    return data.toString(CryptoJS.enc.Utf8);
  }
  public getUserInfo(): nguoidung {
    let user = this.stringStorage.get(this.UI);
    if (user) {
      let userInfo = this.decrypt(user);
      return JSON.parse(JSON.parse(userInfo));
    }
    else {
      return undefined as unknown as nguoidung;
    }
  }

  public setUserInfo(user: nguoidung): void {
    return this.stringStorage.set(this.UI, this.encrypt(JSON.stringify(user)));
  }

  public getStringValue(key: string): string {
    return this.stringStorage.get(key) || '';
  }

  public removeUserValue(): void {
    return this.storage.remove(this.UI);
  }

  public setStringValue(key: string, value: string): void {
    return this.stringStorage.set(key, value);
  }

  public getNumberValue(key: string): number {
    return this.numberStorage.get(key) || 0;
  }

  public setNumberValue(key: string, value: number): void {
    return this.numberStorage.set(key, value);
  }

  public getAnyValue(key: string): any {
    return this.storage.get(key);
  }

  public setAnyValue(key: string, value: any): void {
    return this.storage.set(key, value);
  }

  public clear(): void {
    return this.storage.clear();
  }
}
