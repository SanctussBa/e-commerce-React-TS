using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace API.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public int ProductId { get; set; } 
    
    public string? Name { get; set; }
    public string? Category { get; set; }
    public double Price { get; set; }
    public int Stock { get; set; }
    public string? Description { get; set;}
    public byte[]? Image { get; set; }
    
}

public class Pic
{
    [NotMapped]
    public IFormFile? Picture { get; set; }
}