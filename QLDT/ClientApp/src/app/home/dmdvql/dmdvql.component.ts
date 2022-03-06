import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dm_dvql } from '../../models/dm_dvql';
import { FECTH_DMDVQL } from '../../states/actions/dmdvql.action';
import { AppState } from '../../states/app.state';

@Component({
  selector: 'app-dmdvql',
  templateUrl: './dmdvql.component.html',
  styleUrls: ['./dmdvql.component.css']
})
export class DmdvqlComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  listdmdvql!: Observable<dm_dvql[]>;
  obj_dmdvql!: dm_dvql;
  ngOnInit(): void {
    this.store.dispatch(FECTH_DMDVQL());
    this.listdmdvql = this.store.select(store => store.dm_dvql.list);
  }

}
