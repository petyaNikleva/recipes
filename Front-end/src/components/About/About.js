function About() {
  return (
    <div id="about" className="about-main pad-top-100 pad-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <h2 className="block-title"> КОИ СМЕ НИЕ </h2>
              <h3>Всичко започна с няколко рецепти, а се преверна в нашия кулинарен рай.</h3>
              <p> Ние готвим с много любов и творим. Обичаме здравословната храна, тази, която се приготвя бързо и е вкусна. </p>

              <p> Тук ще намерите много рецепти от традиционната българска кухня, които ние с голямо желание споделяме с ВАС. </p>

              <p> Отворени сме за вашите предложения за невероятни вкусни рецепти. Регистрирайте се и бъдeте част от нашето семeйството.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <div className="about-images">
                <img className="about-main" src="images/about-main.jpg" alt="About Main" />
                <img className="about-inset" src="images/about-inset.jpg" alt="About Inset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;