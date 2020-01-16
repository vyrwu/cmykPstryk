import React from 'react'
import Facebook from './icons/facebook'
import Instagram from './icons/instagram'

const mockUris = {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com'
}

const icons = {
    facebook: <Facebook size={32}/>,
    instagram: <Instagram size={32} />
}

const SocialButton = ({type, uri}) => Object.keys(mockUris).includes(type) && (
    <a href={uri}>
        {icons[type]}
    </a>
)

SocialButton.options = ['facebook', 'instagram']

export default SocialButton
