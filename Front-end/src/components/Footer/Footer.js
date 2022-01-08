import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div id="footer" className="footer-main">
      <div className="footer-box pad-top-70">
        <div className="container">
          <div className="row">
            <div className="footer-in-main">
              <div className="footer-logo">
                <div className="text-center">
                  <img src="/images/logo_01.png" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box-d">
                  <h3>
                    <Link to="/" className="orange-red">Начало</Link>
                  </h3>
                  <div className="white-color">
                    Защото обичаме да готвим за вас!
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box-b">
                  <h3>
                    <Link to="/recipes" className="orange-red">Рецепти</Link>
                  </h3>
                  <div className="white-color">Основни, Супи, Аламинути, Десерти</div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box-a">
                  <h3>
                    <Link to="/about" className="orange-red">За нас</Link>
                  </h3>
                   <div className="white-color">Ние готвим с много любов и творим.</div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-box-c">
                  <h3>Свържете се с нас</h3>
                  <p>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>we-love-cooking@gmail.com</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;