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
import { EntrepotComponent } from './_components/entrepot/entrepot.component';
import { AddEntrepotComponent } from './_modal/add-entrepot/add-entrepot.component';
import { AddMagasinComponent } from './_modal/add-magasin/add-magasin.component';
import { ListUserComponent } from './_components/_user/list-user/list-user.component';
import { AddListUSerComponent } from './_modal/add-list-user/add-list-user.component';
import { MagasinComponent } from './_components/magasin/magasin.component';
import { MagasinDetailsComponent } from './_details/magasin-details/magasin-details.component';
import { EntrepotDetailsComponent } from './_details/entrepot-details/entrepot-details.component';
import { UserDetailsComponent } from './_details/user-details/user-details.component'

@NgModule({
  declarations: [
  
    EntrepotComponent,
    AddEntrepotComponent,
    AddMagasinComponent,
    ListUserComponent,
    AddListUSerComponent,
    MagasinComponent,
    MagasinDetailsComponent,
    EntrepotDetailsComponent,
    UserDetailsComponent
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
