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