using HubFootball.Models;
using Microsoft.AspNetCore.Mvc;

namespace HubFootball.Controllers;

[ApiController]
[Route("api/{controller}")]
public class PlayersController : ControllerBase
{
    private static readonly List<Player> Players = new()
    {
        new Player { Id = 1, FirstName = "前之園", LastName = "友貴", Position = Enums.Position.DF, jerseyNumber = 6 },
        new Player { Id = 2, FirstName = "田中", LastName = "太郎", Position = Enums.Position.GK, jerseyNumber = 1 }
    };

    [HttpGet]
    public IEnumerable<Player> Get()
    {
        return Players;
    }
}