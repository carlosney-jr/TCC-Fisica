import jsPDF from 'jspdf';


import { Component, OnInit } from '@angular/core';

import { ServicoPDFService } from './../../servico-pdf.service';
import { PerguntasRespostas } from '../PerguntaRespostas';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PDFComponent implements OnInit {
  listaAlunos: string;
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  nomeExperimento: string
  constructor(private servicoPDF: ServicoPDFService) {
    this.listaAlunos = '';
    this.listaPerguntasRespostas = [];
    this.nomeExperimento = ''
  }

  ngOnInit(): void {
    this.servicoPDF.obsPDF.subscribe((valor) => {
      if (valor) {
        this.definirAtributos();
        setTimeout(this.exportarPDF,1000, this.nomeExperimento);
      }
    });
  }

  tratarLista(listaAlunos: string[]): string {
    let alunosTratado: string = ''
    for (let aluno of listaAlunos) {
      alunosTratado = alunosTratado.concat(aluno + ', ')
    }
    alunosTratado = alunosTratado.slice(0, alunosTratado.lastIndexOf(','))
    return alunosTratado;
  }


  exportarPDF(ExpNM: string) {
    let doc = new jsPDF();
    let divParaClonar = document.getElementById("pdfExportado") as HTMLElement;
    let div = divParaClonar.cloneNode(true) as HTMLElement;
    div.style.display = 'block'
    let nomeExperimento: string = ExpNM;
    doc.html(div, {
      callback: function(doc) {
        doc.save(`Experimento ${nomeExperimento}.pdf`)
      },
      margin: [10,10,10,10],
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 190,
      windowWidth: 675
    })
  }
  

  definirAtributos() {
    this.listaAlunos = this.tratarLista(this.servicoPDF.listaAlunos);
    this.listaPerguntasRespostas = this.servicoPDF.listaPerguntasRespostas;
    this.nomeExperimento = this.servicoPDF.nomeExperimento
  }
}