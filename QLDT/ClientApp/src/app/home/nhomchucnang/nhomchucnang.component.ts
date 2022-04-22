import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { nhomchucnang } from 'src/app/models/nhomchucnang';
import { GETALL_NHOMCHUCNANG } from 'src/app/states/actions/nhomchucnang.action';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-nhomchucnang',
  templateUrl: './nhomchucnang.component.html',
  styleUrls: ['./nhomchucnang.component.css']
})
export class NhomchucnangComponent implements OnInit {
  constructor(private _fb: FormBuilder, private store: Store<AppState>) {
  }
  data = {} as Observable<nhomchucnang[]>;
  loading$!: Observable<Boolean>;
  rowSelect!: number;
  nhomcnForm!: FormGroup;
  showModal = false;
  ngOnInit(): void {
    this.store.dispatch(GETALL_NHOMCHUCNANG());
    this.data = this.store.select(store => store.nhomchucnang.list);
    this.loading$ = this.store.select(store => store.dm_baocao.loadding);
  }
  selectRow(row: nhomchucnang) {
    this.rowSelect = row.nhomchucnangid;
    this.nhomcnForm.setValue(row);
  }
  addmew_nhomcn(){

  }
  update_nhomcn(){

  }
  delete_nhomcn(){

  }
}
