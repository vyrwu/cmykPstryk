import React from 'react'
import SocialButton from '../socialButton/socialButton'
import localeData from '../home.lang'

const ConnectCard = ({
    language,
    email,
    facebookUri,
    instagramUri
}) => (
    <>
        <h1>Connect</h1>
        {email && <p>
            <a href={`mailto:${email}`}>
                {email}
            </a>
        </p>}
        {facebookUri && <SocialButton type='facebook' uri={facebookUri} />}
        {instagramUri && <SocialButton type='instagram' uri={instagramUri} />}
        <button>
            {localeData[language].connectButton()}
        </button>
    </>
)

export default ConnectCard
