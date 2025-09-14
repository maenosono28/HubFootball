using HubFootball.Enums;

namespace HubFootball.Models;

public class Player
{
    public int Id { get; set; }

    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public string FullName => $"{FirstName} {LastName}";

    public Position Position { get; set; }

    public int jerseyNumber { get; set; }
}