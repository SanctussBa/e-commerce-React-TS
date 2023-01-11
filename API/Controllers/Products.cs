using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly DataContext _context;


    public ProductsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAllProducts()
    {
        return Ok(await _context.Products.ToListAsync());
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        if (id == null)
        {
            return NotFound();
        };

        var product = await _context.Products.FindAsync(id);
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return Ok("product deleted");
    }

    [HttpPost]

    public async Task<IActionResult> Create(IFormFile picture, [FromForm] Product product)
    {
        if (product == null)
        {
            return BadRequest("Not all information is filled");
        }

        byte[] fileBytes;

        using (var ms = new MemoryStream())
        {
            picture.CopyTo(ms);
            fileBytes = ms.ToArray();

        }
        var newProduct = new Product
        {
            ProductId = product.ProductId,
            Name = product.Name,
            Category = product.Category,
            Price = product.Price,
            Stock = product.Stock,
            Description = product.Description,
            Image = fileBytes

        };

        _context.Add(newProduct);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Create", new { newProduct });

    }

}
