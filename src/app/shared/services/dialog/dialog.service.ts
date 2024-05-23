
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class DialogServiceWrapper {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  openLoginDialog() {
    this.ref = this.dialogService.open(LoginComponent, {
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000,
        dismissableMask: true,
    });
  }


  openRegisterDialog() {
    this.ref = this.dialogService.open(RegisterComponent, {
      baseZIndex: 10000,
      dismissableMask: true,
      contentStyle: { "max-height": "660px", "overflow": "auto" }
    });
  }

  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
