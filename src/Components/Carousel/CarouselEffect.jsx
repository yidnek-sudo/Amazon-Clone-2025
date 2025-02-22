import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'

function CarouselEffect() {
  return (
    <div>
<Carousel
    autoPlay={true}
    infiniteLoop={true}
    showIndicators={true}
    showThumbs={true}
>
    {
        img.map((imageItemLink)=>{
            return <img src={imageItemLink}/>
        })
    }
</Carousel>
    </div>
  )
}

export default CarouselEffect; 