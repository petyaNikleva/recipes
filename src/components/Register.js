function Register () {
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

                <form id="contact-form" method="post" className="reservations-box" name="contactform">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="form_name" id="form_name" placeholder="ПОТРЕБИТЕЛСКО ИМЕ" required="required" data-error="Firstname is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="email" name="email" id="email" placeholder="ИМЕЙЛ" required="required" data-error="E-mail id is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="phone" id="phone" placeholder="ПАРОЛА" />
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="no_of_persons" id="no_of_persons" className="selectpicker">
                        <option value="0" disabled>No. Of persons</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="date-picker" id="date-picker" placeholder="ПОВТОРИ ПАРОЛА" required="required" data-error="Date is required." />
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="time-picker" id="time-picker" placeholder="Time" required="required" data-error="Time is required." />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="preferred_food" id="preferred_food" className="selectpicker">
                        <option value="1" disabled>preferred food</option>
                        <option value="2">Indian</option>
                        <option value="3">Continental</option>
                        <option value="4">Mexican</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="occasion" id="occasion" className="selectpicker">
                        <option value="1" disabled>Occasion</option>
                        <option value="2">Wedding</option>
                        <option value="3">Birthday</option>
                        <option value="4">Anniversary</option>
                      </select>
                    </div>
                  </div> */}

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="reserve-book-btn text-center">
                      <button className="hvr-underline-from-center" type="submit" value="SEND" id="submit">СЪЗДАЙ НОВ ПРОФИЛ </button>
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