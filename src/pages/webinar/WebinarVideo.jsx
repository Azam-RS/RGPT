import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const WebinarVideo = ({ show, onClose, videoUrl }) => {
  const dialogRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal-overlay modalVideo"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      open={show}
    >
      <div className="modal-content">
        <button
          className="close-button"
          onClick={onClose}
          tabIndex="0"
          aria-label="Close webinar video"
          >
          &times;
          </button>
        <iframe
          title="Webinars"
          src={videoUrl}
          allowFullScreen
        ></iframe>
      </div>
    </dialog>
  );
};

WebinarVideo.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default WebinarVideo;
