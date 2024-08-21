import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/_components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import AppRouting from './app.routing';
import { FooterComponent } from './public/_components/footer/footer.component';
import { SidebarComponent } from './public/_components/sidebar/sidebar.component';
import { TopbarComponent } from './public/_components/topbar/topbar.component';
import { FournisseurComponent } from './pages/_contact/_components/fournisseur/fournisseur.component';
import { ClientComponent } from './pages/_contact/_components/client/client.component';
import { GroupeComponent } from './pages/_contact/_components/groupe/groupe.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/demo-material-module';
import { AddComponent } from './pages/_produit/_components/add/add.component';
import { ListComponent } from './pages/_produit/_components/list/list.component';
import { AddClientComponent } from './pages/_contact/_modal/client/add-client/add-client.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    FournisseurComponent,
    ClientComponent,
    GroupeComponent,
    AddComponent,
    ListComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DemoMaterialModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
