import React from 'react'

function DebitCard() {
  return <div className="cardGroup">
    <img 
    src="https://firebasestorage.googleapis.com/v0/b/food-delivery-8c8c4.appspot.com/o/VisaLogo.png?alt=media&token=18d2430f-3d2b-4edc-80c2-3430f5c607d7" 
    alt="" 
    className="card_logo"
    />
    <img 
    src="https://firebasestorage.googleapis.com/v0/b/food-delivery-8c8c4.appspot.com/o/chip.png?alt=media&token=aec0cb7f-feca-4174-bf7b-bfe6ee1a862b" 
    alt="" 
    className="card_chip"/>

    <div className="card_number">1234 5678 4563 3992</div>
    <div className="card_name">Nikita Kar</div>
    <div className="card_from">10/23</div>
    <div className="card_to">10/27</div>
    <div className="card_ring"></div>
  </div>
}

export default DebitCard