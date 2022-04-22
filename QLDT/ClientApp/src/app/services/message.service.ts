import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }
  showMessage(type: string, str_thongbao: string) {
    if (type === 'Success')
      this.toastr.success(str_thongbao, 'Thông báo',
        {
          progressBar: true
        });
    if (type === 'Warning')
      this.toastr.warning(str_thongbao, 'Cảnh báo',
        {
          progressBar: true
        });
    if (type === 'Error')
      this.toastr.error(str_thongbao, 'Cảnh báo',
        {
          progressBar: true
        });
  }
}
