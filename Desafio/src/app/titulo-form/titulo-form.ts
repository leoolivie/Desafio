import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TituloService } from '../titulo.service';

interface Parcela {
  numero: number;
  dataVencimento: string;
  valor: number;
}

interface Titulo {
  numeroTitulo: string;
  nomeDevedor: string;
  cpfDevedor: string;
  percentualJuros: number;
  percentualMulta: number;
  parcelas: Parcela[];
}

@Component({
  selector: 'app-titulo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './titulo-form.html',
  styleUrl: './titulo-form.css',
})
export class TituloForm {
  titulo: Titulo = {
    numeroTitulo: '',
    nomeDevedor: '',
    cpfDevedor: '',
    percentualJuros: 0,
    percentualMulta: 0,
    parcelas: [],
  };

  parcela: Parcela = { numero: 1, dataVencimento: '', valor: 0 };

  constructor(private tituloService: TituloService) {}

  adicionarParcela() {
    if (this.parcela.valor <= 0) {
      alert('Preencha a data de vencimento e um valor maior que zero.');

      return;
    }

    const vencimentoFormatado = new Date(this.parcela.dataVencimento).toISOString();

    this.titulo.parcelas.push({
      numero: this.parcela.numero,
      dataVencimento: vencimentoFormatado,
      valor: this.parcela.valor,
    });

    this.parcela = { numero: this.parcela.numero + 1, dataVencimento: '', valor: 0 };
  }

  salvar() {
    const parcelasValidas = this.titulo.parcelas.every((p) => p.dataVencimento && p.valor > 0);

    if (parcelasValidas === false) {
      alert('Todas as parcelas devem ter data de vencimento e valor maior que zero.');

      return;
    }

    this.tituloService.adicionarTitulo(this.titulo).subscribe(() => {
      alert('Título salvo!');

      this.titulo = {
        numeroTitulo: '',
        nomeDevedor: '',
        cpfDevedor: '',
        percentualJuros: 0,
        percentualMulta: 0,
        parcelas: [],
      };

      this.parcela = { numero: 1, dataVencimento: '', valor: 0 };
    });
  }
}
