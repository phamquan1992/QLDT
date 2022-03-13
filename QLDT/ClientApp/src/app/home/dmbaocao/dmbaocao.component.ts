import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { dm_baocao } from 'src/app/models/dm_baocao';
import { FECTH_DMBAOCAO, GET_OBJ_DMBAOCAO, POST_DMBAOCAO, PUT_DMBAOCAO } from 'src/app/states/actions/dmbaocao.action';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-dmbaocao',
  templateUrl: './dmbaocao.component.html',
  styleUrls: ['./dmbaocao.component.css']
})
export class DmbaocaoComponent implements OnInit {
  listbaocao!: Observable<dm_baocao[]>;
  rowSelect!: number;
  gtcheck!: number;
  showModal = false;
  HederModal_BC = "Danh mục báo cáo";
  result!: Observable<string>;
  trang_thai!: string;
  baocaoForm!: FormGroup;
  loading$!: Observable<Boolean>;
  checkObj = false;
  constructor(private _fb: FormBuilder, private store: Store<AppState>) {
    this.baocaoForm = this._fb.group({
      // employeeId: 0,
      // name: ['', [Validators.required]],
      // gender: ['', [Validators.required]],
      // department: ['', [Validators.required]],
      // city: ['', [Validators.required]]
      id: 0,
      ma_baocao: '',
      noidung: '',
      sohieu: '',
      banhanh: '',
      trang_thai: 0,
      type: null,
      nguoi_tao: '',
      ngay_tao: null,
      nguoi_sua: '',
      ngay_sua: null
    })
  }
  ngOnInit(): void {
    this.store.dispatch(FECTH_DMBAOCAO());
    this.listbaocao = this.store.select(store => store.dm_baocao.list);
    this.loading$ = this.store.select(store => store.dm_baocao.loadding);
  }
  selectRow(row: dm_baocao) {
    this.rowSelect = row.id;
    this.checkObj = row.trang_thai == 1 ? true : false;
    this.baocaoForm.setValue(row);
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  addmew_bc() {
    this.trang_thai = "add";
    this.HederModal_BC = "Thêm mới báo cáo";
    this.rowSelect = -1;
    this.checkObj = false;
    this.toggleModal();
  }
  update_bc() {
    this.trang_thai = "update";
    this.HederModal_BC = "Cập nhật báo cáo";
    this.toggleModal();
  }
  delete_bc(rowdelete: dm_baocao) {
  }
  saveBaocao() {
    this.baocaoForm.value['trang_thai'] = this.checkObj ? 1 : 0;
    if (this.trang_thai === 'add')
      this.store.dispatch(POST_DMBAOCAO({ obj_dmbaocao_add: this.baocaoForm.value }));
    else
      this.store.dispatch(PUT_DMBAOCAO({ obj_dmbaocao_update: this.baocaoForm.value }));
    this.result = this.store.select(t => t.dm_baocao.result);
    this.toggleModal();
    this.rowSelect = -1;
    this.reloadTable();
  }
  reloadTable() {
    setTimeout(() => {
      this.store.dispatch(FECTH_DMBAOCAO());
      this.listbaocao = this.store.select(store => store.dm_baocao.list);
      this.loading$ = this.store.select(store => store.dm_baocao.loadding);
    }, 2000);

  }
}
