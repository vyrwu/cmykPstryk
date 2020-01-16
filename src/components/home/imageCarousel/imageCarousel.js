import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {testImage1, testImage2} from './images/images'

// TODO: Render an array of images passed down the prop, to have multiple themes.
const ImageCarousel = (props) => (
    <Carousel {...props} >
        <div>
            <img src={testImage1} alt='Metin 2 Test 1' />
        </div>
        <div>
            <img src={testImage2} alt='Metin 2 Test 2' />
        </div>
    </Carousel>
)

export default ImageCarousel
