import React from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const history = useHistory();
  const handleRedirect = () => {
    // Redirect to the desired path
    history.push("/RegisterdUser/registerdUser");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="c-holder">
      <h2 className="regtitle" onClick={handleRedirect}>
        Registered User
      </h2>
      <Slider {...settings}>
        <div>
          <img
            src="img/carousel-logo/sony.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/enclustra.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/intel.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/uni-auth.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/york.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/nyu.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/rapid-silicon.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/wisig.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/valcomelton.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
        <div>
          <img
            src="img/carousel-logo/blackrock.png"
            alt="logo"
            onClick={handleRedirect}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
