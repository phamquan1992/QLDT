import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  istoogle: boolean = false;
  showToogle() {
    this.istoogle = !this.istoogle;
  }
}
