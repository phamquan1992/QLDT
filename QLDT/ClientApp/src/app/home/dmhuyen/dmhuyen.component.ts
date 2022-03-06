import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dm_huyen } from 'src/app/models/dm_huyen';
import { FECTH_DMHUYEN } from 'src/app/states/actions/dmhuyen.action';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-dmhuyen',
  templateUrl: './dmhuyen.component.html',
  styleUrls: ['./dmhuyen.component.css']
})
export class DmhuyenComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  listdmhuyen!: Observable<dm_huyen[]>;
  obj_dmhuyen!: dm_huyen;
  ngOnInit(): void {
    this.store.dispatch(FECTH_DMHUYEN());
    this.listdmhuyen = this.store.select(store => store.dm_huyen.list);
  }

}
