import React from 'react'
import '../cards/cards.css'


function Card({title, imageSource, price}) {
    return (
        <div className='card'>
            <img className='images' src={imageSource} alt="" />
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <a href="#!" className='btn btn-outline-info rounded-0'>
                    Comprar
                </a>
                <a className='card-price'>
                    {price}
                </a>

            </div>

        </div>
    )
}

export default Card
