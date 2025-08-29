namespace DesafioApi.Models;

public class Parcela
{
    public int Numero { get; set; }
    public DateTime DataVencimento { get; set; }
    public decimal Valor { get; set; }
}

public class Titulo
{
    public string? NumeroTitulo { get; set; }
    public string? NomeDevedor { get; set; }
    public string? CpfDevedor { get; set; }
    public decimal PercentualJuros { get; set; }
    public decimal PercentualMulta { get; set; }
    public List<Parcela> Parcelas { get; set; } = new();
}

public class TituloDTO
{
    public string? NumeroTitulo { get; set; }
    public string? NomeDevedor { get; set; }
    public string? CpfDevedor { get; set; }
    public int QuantidadeParcelas => Parcelas.Count;
    public decimal ValorOriginal => Parcelas.Sum(p => p.Valor);
    public int DiasAtraso => (DateTime.Now - Parcelas.Min(p => p.DataVencimento)).Days;
    public decimal ValorAtualizado =>
        ValorOriginal +
        (ValorOriginal * PercentualJuros / 100) +
        (ValorOriginal * PercentualMulta / 100);

    public decimal PercentualJuros { get; set; }
    public decimal PercentualMulta { get; set; }
    public List<Parcela> Parcelas { get; set; } = new();
}