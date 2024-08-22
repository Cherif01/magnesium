import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from './home/_components/dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router'
import AppRouting from './app.routing'
import { FooterComponent } from './public/_components/footer/footer.component'
import { SidebarComponent } from './public/_components/sidebar/sidebar.component'
import { TopbarComponent } from './public/_components/topbar/topbar.component'
import { FournisseurComponent } from './pages/_contact/_components/fournisseur/fournisseur.component'
import { ClientComponent } from './pages/_contact/_components/client/client.component'
import { GroupeComponent } from './pages/_contact/_components/groupe/groupe.component'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'
import { DemoMaterialModule } from 'src/demo-material-module'
import { AddComponent } from './pages/_produit/_components/add/add.component'
import { ListComponent } from './pages/_produit/_components/list/list.component'
import { AddClientComponent } from './pages/_contact/_modal/client/add-client/add-client.component'
import { AuthInterceptor } from './core/_interceptor/token.interceptor'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LoginComponent } from './core/components/login/login.component';
import { AddSaleComponent } from './pages/_ventes/_components/add-sale/add-sale.component';
import { ListSaleComponent } from './pages/_ventes/_components/list-sale/list-sale.component';
import { ListPointOfSaleComponent } from './pages/_ventes/_components/list-point-of-sale/list-point-of-sale.component';
import { RetourVenteComponent } from './pages/_ventes/_components/retour-vente/retour-vente.component'

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
    LoginComponent,
    AddClientComponent,
    AddSaleComponent,
    ListSaleComponent,
    ListPointOfSaleComponent,
    RetourVenteComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    CdkAccordionModule,
    DemoMaterialModule,
    HttpClientModule,
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRouting, {relativeLinkResolution:'legacy'})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
