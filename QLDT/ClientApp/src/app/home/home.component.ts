import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  isShowAcountMenu = false;
  ngOnInit(): void {
  }
  istoogle: boolean = false;
  showToogle() {
    this.istoogle = !this.istoogle;
  }
  account_click(){    
    this.isShowAcountMenu=!this.isShowAcountMenu;
    console.log(this.isShowAcountMenu);
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
