import React from 'react'
import Banner from '../../components/Banner/Banner'
import { texts } from '../../utils/apptexts/texts'

import image from '../../assets/images/home_banner.png'

function Home() {
  return (
    <div>
      <Banner image={image} title={texts.main_title} />
    </div>
  )
}

export default Home
