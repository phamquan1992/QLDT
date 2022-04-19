import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { nguoidung } from '../models/nguoidung';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currUser!: nguoidung;
  constructor(private router: Router, private observableServices: ObservableService,) { }
  isShowAcountMenu = false;
  ngOnInit(): void {
    this.observableServices.getUserInfo().subscribe(t => this.currUser = t);
  }
  istoogle: boolean = false;
  showToogle() {
    this.istoogle = !this.istoogle;
  }
  account_click() {
    this.isShowAcountMenu = !this.isShowAcountMenu;
    console.log(this.isShowAcountMenu);
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
