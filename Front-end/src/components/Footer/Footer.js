import { Link } from 'react-router-dom';
import './Footer.css'

function Footer () {
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
                        Защото обичаме да готвим за вас и с вас!
                      </div>
                  </div>
                </div>

              

                

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-b">
                    <h3>Рецепти</h3>
                    {/* <ul>
                      <li><a href="#">Основни</a></li>
                      <li><a href="#">Аламинути</a></li>
                      <li><a href="#">Десерти</a></li>
                      <li><a href="#">Супи</a></li>

                    </ul> */}
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-a">
                    <h3>За нас</h3>
                    {/* <p>Защото обичаме да готим.</p>
                    <ul className="socials-box footer-socials pull-left">
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa  fa-facebook"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-twitter"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-google-plus"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-pinterest"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-linkedin"></i></div>
                        </a>
                      </li>
                    </ul> */}

                  </div> 
                </div>      


                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-c">
                    <h3>Свържете се с нас</h3>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>we.love.to.cook@gmial.com</span>
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