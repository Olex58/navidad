function CompRegalos()
{
  return(
    <div className="contenido">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.revistaeyn.com/binrepository/1200x675/0c0/0d0/none/26086/DQKT/mejores-consolas-2021_1478165_20220507134217.jpg" class="d-block w-100 card-img-limitada2" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Consolas de videojuegos</h5>
                    <p>Desde un tiempo se han convertido el los objetos más deseados en niños y adultos.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://e01-phantom-expansion.uecdn.es/87d7ae7fe19a27d851e4a43efec8a28e/resize/828/f/webp/assets/multimedia/imagenes/2024/09/24/17271708789498.jpg" class="d-block w-100 card-img-limitada2" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Perfumes</h5>
                    <p>Bastante requeridos para grandes acontecimientos. Disponible tanto para varones y mujeres.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.internetmatters.org/wp-content/uploads/2016/02/amazon-kindle.webp" class="d-block w-100 card-img-limitada2" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Kindle</h5>
                    <p>Uno de los aparatos estrella de Amazon. Para grandes lectores </p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}

export default CompRegalos;