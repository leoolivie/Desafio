import { Titulo } from './titulo.model';

export interface TituloDetalhado extends Titulo {
  numeroTitulo: string;
  nomeDevedor: string;
  cpfDevedor: string;
  quantidadeParcelas: number;
  valorOriginal: number;
  diasAtraso: number;
  valorAtualizado: number;
}
