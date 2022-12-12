namespace FB_CRUDMuebles.Models
{
    public class Muebless
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Dim { get; set; }
        public string Color { get; set; }
        public float MaterialesId { get; set; }
        public DateTime FechaCreacion { get; set; }

    }
}
