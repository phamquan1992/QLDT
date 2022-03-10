import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dm_baocao } from 'src/app/models/dm_baocao';
import { FECTH_DMBAOCAO } from 'src/app/states/actions/dmbaocao.action';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-dmbaocao',
  templateUrl: './dmbaocao.component.html',
  styleUrls: ['./dmbaocao.component.css']
})
export class DmbaocaoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  listbaocao!: Observable<dm_baocao[]>;
  obj_baocao!: dm_baocao;
  rowSelect!: number;
  ngOnInit(): void {
    this.store.dispatch(FECTH_DMBAOCAO());
    this.listbaocao = this.store.select(store => store.dm_baocao.list);
  }
  selectRow(row: dm_baocao) {
    this.rowSelect = row.id;
  }
}
