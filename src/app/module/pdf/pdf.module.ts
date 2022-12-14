import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PDFComponent } from './pdf.component';
import { QuestaoComponent } from './questao/questao.component';
import { QuestaoPDFComponent } from './questao-pdf/questao-pdf.component';



@NgModule({
  declarations: [
    FormularioComponent,
    PDFComponent,
    QuestaoComponent,
    QuestaoPDFComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PDFComponent,
    FormularioComponent
  ]
})
export class PdfModule { }
