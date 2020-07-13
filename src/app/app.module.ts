import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteNewComponent } from './cliente-new/cliente-new.component';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { Interceptor } from 'src/services/interceptors/interceptor.module';
import { LoginComponent } from './login/login.component';
import {AuthService} from 'src/services/auth.service';
import {AuthGuardService} from 'src/services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteDetalhesComponent,
    ClienteUpdateComponent,
    ClienteNewComponent,
    ClienteDeleteComponent,
    LoginComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Interceptor,
    RouterModule.forRoot([
      
     
      
    ])
  ],
  providers: [
    ClienteService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
