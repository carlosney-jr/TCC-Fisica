import { Component, Input } from '@angular/core';
import { PerguntasRespostas } from '../../PerguntaRespostas';

@Component({
  selector: 'app-questao-pdf',
  templateUrl: './questao-pdf.component.html',
  styleUrls: ['./questao-pdf.component.scss']
})
export class QuestaoPDFComponent {

  @Input() questao!: PerguntasRespostas<string>;
}
