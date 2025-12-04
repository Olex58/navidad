import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import "./estilo.css"
import CompAds from "./CompAds";
import CompHist from "./CompHist";
import CompCost from "./CompCost";
import CompGast from "./CompGast";
import CompRegalos from "./CompRegalos";
import CompContac from "./CompContac";

function Pag0(){
   return(
     <div className="padre">
         <div className="contenido">
              <h1>Navidad en Bolivia mierdaaaaaaa</h1>
              <br></br>
              <p>La Navidad en Bolivia es una época llena de luz,
                unión y espiritualidad, donde las celebraciones adquieren
                un carácter único gracias a la mezcla de tradiciones andinas
                y la herencia cristiana. Desde principios de diciembre, las ciudades 
                y comunidades se llenan de colores festivos, música y un ambiente de esperanza 
                que anuncia la llegada de una de las fiestas más importantes del año.
              </p>
              <p>En todos el país, las familias se preparan para vivir días de encuentro,
                reflexión y alegría. Las calles, plazas y hogares se iluminan con decoraciones que 
                reflejan el espíritu navideño y la diversidad cultural de Bolivia. La música, los cantos 
                y las reuniones familiares acompañan este tiempo especial, reforzando el sentido de unidad
                y solidaridad que caracteriza a estas fechas.
              </p>
              <p>La Navidad es más que una celebración: es un momento para compartir, renovar
                la fe y fortalecer los lazos entre seres queridos. Una fiesta que llena de calidez cada rincon, desde las alturas
                del altiplano hasta las regiones tropicales del oriente. 
              </p>
            </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <br></br>
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
   );
}
function Pag1()
{
    return(
        <div className="padre">
         <div className="contenido">
             <h1>Historia de Navidad en Bolivia</h1>
             <CompHist></CompHist>
            </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <br></br>
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}

function Pag2()
{
    return(
        <div className="padre">
         <div className="contenido">
             <h1>Costumbres</h1>
             <CompCost></CompCost>    
         </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <br></br>
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}

function Pag3()
{
    return(
        <div className="padre">
         <div className="contenido">
             <h1>Gastronomía</h1>
             <CompGast></CompGast>
             
            </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <br></br>
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}

function Pag4()
{
    return(
        <div className="padre">
         <div className="contenido">
            <h1>Regalos populares</h1>
             <CompRegalos></CompRegalos>
            </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}

function Pag5()
{
    return(
        <div className="padre">
         <div className="contenido">
             <h1>Contactos</h1>
             <CompContac></CompContac>
            </div>

            <div className="ads">
                 <CompAds></CompAds>
            </div>

            <div className="pie">
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}
    

function Principal(props)
{
    return(
            <div className="cabecera">
                 <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand">MENÚ</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/"><a class="nav-link active" aria-current="page">Inicio</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag1"><a class="nav-link">Historia</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag2"><a class="nav-link">Costumbres</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag3"><a class="nav-link">Gastronomía</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag4"><a class="nav-link">Regalos populares</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag5"><a class="nav-link">Contactos</a></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                 </nav>
              <Routes>
                <Route path="/"element={<Pag0></Pag0>}></Route>
                <Route path="/pag1" element={<Pag1></Pag1>}></Route>
                <Route path="/pag2" element={<Pag2></Pag2>}></Route>
                <Route path="/pag3" element={<Pag3></Pag3>}></Route>
                <Route path="/pag4" element={<Pag4></Pag4>}></Route>
                <Route path="/pag5" element={<Pag5></Pag5>}></Route>

              </Routes>
            </div>
     
        
    );
}
export default Principal;