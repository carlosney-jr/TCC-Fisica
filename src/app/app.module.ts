import { PdfModule } from './module/pdf/pdf.module';
import { ExperimentosModule } from './experimentos/experimentos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './module/navbar/navbar.component';
import { HomeComponent } from './module/home/home.component';
import { PDFComponent } from './module/pdf/pdf.component';
import { ExibirPDFComponent } from './module/pdf/exibir-pdf/exibir-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ExperimentosModule,
    PdfModule
  ],
  exports: [
    ExibirPDFComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
