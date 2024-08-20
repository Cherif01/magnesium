import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { RouterModule } from '@angular/router'
import { DemoMaterialModule } from 'src/demo-material-module'
import { homeRouting } from './home.routing';
import { MagasinComponent } from './_components/magasin/magasin.component';
import { EntrepotComponent } from './_components/entrepot/entrepot.component'

@NgModule({
  declarations: [
    MagasinComponent,
    EntrepotComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(homeRouting),
    DemoMaterialModule
  ]
})
export class HomeModule {}
