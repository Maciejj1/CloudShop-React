import React from 'react'

const SliderBar = () => {
    return (
        <div className='slider-bar'>
           <label for="search">Szukaj</label>
           <input type="text" id="search" name="search" />
           <div className='sliderbar-buttons'>
               <button className='Promotions'>Promocje</button>
               <button className="Boxs">Boxy</button>
               <button className='Premix'>Premixy</button>
               <button className='Kity'>Kity Startowe</button>
           </div>
            
        </div>
    )
}

export default SliderBar
