import {useNavigate} from "react-router";
import { useAuthContext } from '../context/AuthContext.js';
import { useNotificationContext, types } from '../context/NotificationContext.js';

import * as authService from '../services/authService.js'

function Register () {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let { username, email, password, repeatPassword } = Object.fromEntries(new FormData(e.currentTarget));
    if (password !== repeatPassword) {
      addNotification('Паролите не съвпадат!', types.danger);
      return;
    }

    authService.register( username, email, password, repeatPassword )
      .then((authData) => {
        login(authData);
        addNotification('Успешна регисрация!', types.success);
        navigate('/');
      })
      .catch(err => {
        err.message === 'Failed to fetch'
        ? addNotification('Възникна грешка. Опитайте по-късно.', types.danger)
        : addNotification('Потребитеското име вече е заето.', types.danger)
      }) 
    
  }

    return (
        <div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="form-reservations-box">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <h2 className="block-title text-center">
                    РЕГИСТРАЦИЯ
                  </h2>
                </div>
                
                <p>ВСИЧКИ ПОЛЕТА СА ЗАДЪЛЖИТЕЛНИ</p>

                <form id="register-form" method="POST" onSubmit={registerSubmitHandler} className="reservations-box" name="refiter-form">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="username" id="username" placeholder="ПОТРЕБИТЕЛСКО ИМЕ" required="required" data-error="Потребителското име е задължително." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="email" name="email" id="email" placeholder="ИМЕЙЛ" required="required" data-error="Имейлът е задължителен." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="password" id="password" placeholder="ПАРОЛА" required="required" data-error="Паролата е задължителна"  />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="repeatPassword" id="repeatPassword" placeholder="ПОВТОРИ ПАРОЛА" required="required" data-error="Повтори същата парола-задължително поле" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="reserve-book-btn text-center">
                      <button className="hvr-underline-from-center">СЪЗДАЙ НОВ ПРОФИЛ </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Register;