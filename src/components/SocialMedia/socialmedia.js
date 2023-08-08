import React from "react";
import "./socialmedia.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faSquareXTwitter,
  faFacebookSquare,
  faInstagram,
  faYoutubeSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faLinkedin,
  faSquareXTwitter,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare
);

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/company/72451319/"
        title="Linkdin"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/RapidSilicon"
        title="Twitter"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
      <a
        href="https://www.facebook.com/people/Rapid-Silicon/100078483576601/"
        title="Facebook"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        href="https://www.instagram.com/rapid_silicon/"
        title="Instagram"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCykBQJMQCIjLuQ7gO2V3M_g"
        title="Youtube"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </a>
    </div>
  );
};

export default SocialMedia;
