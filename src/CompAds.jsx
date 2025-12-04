function CompAds()
{
   return(
     <div className="ads">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="./public/pub1.jpg" class="d-block w-100 " alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="./public/pub2.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="./public/pub3.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>
     </div>
   );
}
export default CompAds;