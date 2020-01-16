import React from 'react'
import localeData from './home.lang'
import SimpleCard from './simpleCard/simpleCard'
import ImageCarousel from './imageCarousel/imageCarousel'
import ConnectCard from './connectCard/connectCard'

const Home = ({language}) => (
  <>
    <ImageCarousel showArrows />
    <SimpleCard
      header={localeData[language].welcomeHeader()}
      paragraphs={localeData[language].welcomeParagraphs()}
    />
    <ConnectCard
      language={language}
      email='email@email.com'
      facebookUri='https://facebook.com/'
      instagramUri='https://instagram.com/'
    />
  </>
)

export default Home
