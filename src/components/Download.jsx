import React from 'react'
import './Download.scss'
function Download() {

    const appImages = [
        "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png",
        "https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
    ]

  return (
    <div className="download">
        <span>Uygulamayı indir</span>
        <div className="download__logo">                    
        {appImages.map((item, key) => (
            <img key={key} src={item} alt=""/>
        ))}               
        </div>
    </div>
  )
}

export default Download