using FB_CRUDMuebles.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FB_CRUDMuebles.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class MueblesController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public MueblesController(AplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            try
            {
                var listMuebles = await _context.Muebles.ToListAsync();
                return Ok(listMuebles);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }


        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {

            try
            {
                var muebles = _context.Muebles.FindAsync(id);
                return Ok(muebles);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message); 
            }
            return Ok();
        }
    }
}
