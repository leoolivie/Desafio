import { Parcela } from './parcela.model';

export interface Titulo {
  numeroTitulo: string;
  nomeDevedor: string;
  cpfDevedor: string;
  percentualJuros: number;
  percentualMulta: number;
  parcelas: Parcela[];
}
