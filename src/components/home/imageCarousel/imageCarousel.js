import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {testImage1, testImage2} from './images/images'

// TODO: Render an array of images passed down the prop, to have multiple themes.
const ImageCarousel = (props) => (
    <Carousel {...props} >
        <div>
            <img src={testImage2} alt='Test' />
        </div>
        <div>
            <img src={testImage1} alt='Test' />
        </div>
    </Carousel>
)

export default ImageCarousel
