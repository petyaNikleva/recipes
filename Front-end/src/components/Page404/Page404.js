function Page404 () {
    return(
        <div id="blog" className="blog-main pad-top-100 pad-bottom-100 parallax">
        <div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
            <div className="container">
                <div className="row">
                    <div className="form-reservations-box">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 className="block-title text-center">
                                    Възникна грешка.
                                </h2>
                            </div>

                            <p style={{ color: "orangered" }}>СТРАНИЦАТА НЕ МОЖЕ ДА БЪДЕ НАМЕРЕНА</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Page404;