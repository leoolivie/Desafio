using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace DesafioApi.Models
{
    public class TituloDetalhado
    {
        public string? NumeroTitulo { get; set; }
        public string? NomeDevedor { get; set; }
        public string? CpfDevedor { get; set; }

        public decimal PercentualJuros { get; set; }     // Ex: 1 = 1% ao mês
        public decimal PercentualMulta { get; set; }     // Ex: 2 = 2% fixo

        public List<Parcela> Parcelas { get; set; } = new();

        [JsonInclude]
        public int QuantidadeParcelas => Parcelas.Count;

        [JsonInclude]
        public decimal ValorOriginal => Parcelas.Sum(p => p.Valor);

        [JsonInclude]
        public int DiasAtraso => Parcelas
            .Where(p => p.DataVencimento < DateTime.Now)
            .Select(p => (DateTime.Now.Date - p.DataVencimento.Date).Days)
            .DefaultIfEmpty(0)
            .Max();

        [JsonInclude]
        public decimal Multa => ValorOriginal * (PercentualMulta / 100m);

        [JsonInclude]
        public decimal Juros => Parcelas
            .Where(p => p.DataVencimento < DateTime.Now)
            .Sum(p =>
            {
                var dias = (DateTime.Now.Date - p.DataVencimento.Date).Days;
                
                return (PercentualJuros / 100m / 30m) * dias * p.Valor;
            });

        [JsonInclude]
        public decimal ValorAtualizado => ValorOriginal + Multa + Juros;
    }
}
