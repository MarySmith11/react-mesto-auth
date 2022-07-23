import React from 'react'; 

function InfoTooltip(props) { 
    const popupClass = `popup popup_type_info ${props.isOpen ? 'popup_opened' : ''}`; 
    const iconClass = props.isSuccess ? 'popup__info-icon' : 'popup__info-icon popup__info-icon_type_error'; 
  
    return (
      <section className={popupClass}> 
        <div className="popup__container"> 
          <figure className={iconClass}></figure> 
          <p className="popup__info-text">{props.resultText}</p> 
          <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={props.onClose}></button>
        </div> 
      </section> 
    ); 
  } 
  
  export default InfoTooltip; 