import { PerguntasRespostas } from './PerguntaRespostas';
export class Imagem extends PerguntasRespostas<string> {
    override type='imagem';
    override required=false;
}