using Microsoft.AspNetCore.Mvc;
using DesafioApi.Models;

namespace DesafioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TitulosController : ControllerBase
{
    private static readonly List<Titulo> Titulos = new();

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Titulos);
    }

    [HttpPost]
    public IActionResult Post([FromBody] Titulo titulo)
    {
        Titulos.Add(titulo);
        return Ok();
    }
}