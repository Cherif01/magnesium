import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemoMaterialModule } from 'src/demo-material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
  ]
})
export class LoginModule { }
