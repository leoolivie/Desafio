using Microsoft.AspNetCore.Mvc;
using DesafioApi.Models;

namespace DesafioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TitulosController : ControllerBase
{
    private static readonly List<Titulo> Titulos = new();

    [HttpPost]
    public IActionResult Post([FromBody] Titulo titulo)
    {
        Titulos.Add(titulo);

        return Ok();
    }
    
    [HttpGet]
    public IActionResult Get()
    {
        var titulosDetalhado = Titulos.Select(t => new TituloDetalhado
        {
            NumeroTitulo = t.NumeroTitulo,
            NomeDevedor = t.NomeDevedor,
            CpfDevedor = t.CpfDevedor,
            PercentualJuros = t.PercentualJuros,
            PercentualMulta = t.PercentualMulta,
            Parcelas = t.Parcelas
        }).ToList();

        return Ok(titulosDetalhado);
    }
        
}