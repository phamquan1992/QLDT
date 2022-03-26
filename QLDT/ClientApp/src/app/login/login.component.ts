import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FECTH_LOGIN } from '../states/actions/authen.action';
import { AppState } from '../states/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>, private toastr: ToastrService) { }
  loading$!: Observable<boolean>;
  ngOnInit(): void {
  }
  user_value = {
    name_value: '',
    pass_value: '',
  };
  user_error = {
    name_error: false,
    pass_error: false,
  };
  onSubmit() {
    if (this.user_value.name_value == "" || this.user_value.pass_value == "") {
      this.user_error.name_error = false;
      this.user_error.pass_error = false;
      if (this.user_value.name_value == "") {
        this.user_error.name_error = true;
      }
      if (this.user_value.pass_value == "") {
        this.user_error.pass_error = true;
      }
    }
    else {
      this.store.dispatch(FECTH_LOGIN({ user_name: this.user_value.name_value, pass_word: this.user_value.pass_value }));
      this.loading$ = this.store.select(store => store.au_then.loadding);
      setTimeout(() => {        
        this.store.select(t => t.au_then.result).subscribe(res => {
          console.log(res);
          if (res)
            this.router.navigate(['/home']);
          else
            this.toastr.error("Tên đăng nhập hoặc mật khẩu không đúng!", "Cảnh báo");
        });
      }, 1000);
    }
  }
}
