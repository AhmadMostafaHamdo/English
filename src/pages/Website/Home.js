import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import Nav from "../../Component/Website/Nav";

export default function Home () {
  const [t, i18n] = useTranslation();
    return (<>
     <div className="home">
        
            <Nav/>
            <p className="welcome">{t('welcome')}</p>  
            <div className="landing">
              <div className="container">
               <div className="text">
                  <h1>{t('homeh1')}</h1>
                  <p> {t('homep')} </p>
               </div>
               <div className="image">
                <img src= {require('../../images/main.jpg')} alt="image" /> 
               </div>
              </div>  
            </div>   
             {/* start footer  */}
  <section class="footer">
    
    <div class="box-container">

      <div class="box">
        <h3>our branches</h3>
        <a href="#"><i class="fas fa-map-marker-alt"></i>lattakia</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>alhasakh</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>dmascuse</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>allepo</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>Daraa</a>
      </div>
      <div class="box">
        <h3>quick links</h3>
        <Link to="/home"><i class="fas fa-arrow-right"></i><span>Home</span></Link>
        <Link to="/cours"><i class="fas fa-arrow-right"></i>Cours</Link>
        <Link to="/test"><i class="fas fa-arrow-right"></i>Test</Link>
        <Link to="/offers"><i class="fas fa-arrow-right"></i>Offers</Link>
        <Link to="/concat"><i class="fas fa-arrow-right"></i>Concat Us</Link>

      </div>
      <div class="box">
        <h3>quick links</h3>
        <a href="#"><i class="fas fa-phone"></i>0982372141</a>
        <a href="#"><i class="fas fa-phone"></i>0930135216</a>
        <a href="#"><i class="fas fa-envelope"></i>ahmad@gmail.com</a>
        <a href="#"><i class="fas fa-map-marker-alt"></i>lattakia</a>


      </div>
      <div class="box">
        <h3>quick links</h3>
        <a href="#"><i class="fab fa-facebook"></i>facebook</a>
        <a href="#"><i class="fab fa-instagram"></i>instagram</a>
        <a href="#"><i class="fab fa-whatsapp"></i>whatsapp</a>
        <a href="#"><i class="fab fa-twitter"></i>twitter</a>



      </div>


    </div>

  </section>
  {/* end footer  */}
            </div>
</>
    )}