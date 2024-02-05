import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TService {
  constructor(
    private toastr: ToastrService) { };

  showSuccessToast(msg) {
      this.toastr.success(msg);
  }

  showErrorToast(msg) {
      this.toastr.error(msg);
  }

  showInfoToast(msg) {
      this.toastr.info(msg);
  }
}