import React from 'react'
import Card from './card'

import image1 from '../img/PedigreeAdulto.png'
import image2 from '../img/PedigreeCachorro.png'
import image3 from '../img/DogChowAdulto.png'
import image4 from '../img/DogChowCachorro.png'
import image5 from '../img/Whiskas.png'
import image6 from '../img/catchow.png'

const cards = [
    {
        id: 1,
        title: 'Pedigree Adulto',
        image: image1,
        price: "$30.000"
        
    },
    {
        id: 2,
        title: 'Pedigree Cachorro',
        image: image2,
        price: "$35.000"        
    },
    {
        id: 3,
        title: 'Dog Chow Adulto',
        image: image3,
        price: "$31.000"        
    },
    {
        id: 4,
        title: 'Dog Chow Cachorro',
        image: image4,
        price: "$37.000"        
    },
    {
        id: 5,
        title: 'Whiskas',
        image: image5,
        price: "$8.000"        
    },
    {
        id: 6,
        title: 'Cat Chow',
        image: image6,
        price: "$8.000"    }
]

function Cards() {
    return (
        <div className="container d-flex  align-items-center pt-5">
            <div className="row">
                {cards.map(({ title, image, id, price }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} price={price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards     