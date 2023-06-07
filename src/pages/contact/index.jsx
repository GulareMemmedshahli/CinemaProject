import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";
const Contact = () => {
  return (
    <div className='contact'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <div className="telegram">
        <i class="fa-brands fa-telegram fa-2x"></i>
        <a href="https://t.me/seriesazofficial">Telegram:@moviakazofficial</a>
      </div>
      <div className="instagram">
        <i class="fa-brands fa-instagram fa-2x"></i>
        <a href="https://www.instagram.com/series.az_official/">
          Instagram:moviak.az_official
        </a>
      </div>
      <div className="facebook">
        <i class="fa-brands fa-facebook-f fa-2x"></i>
        <a href="https://www.facebook.com/seriesazofficial/">
          Facebook.@moviakazofficial
        </a>
      </div>

      <div className="box">
      <p>WATCH OUR NEW TELEGRAM CHANNEL |
      <a href="https://www.imdb.com/">Moviak.com</a>
      </p>

      </div>

    </div>
  )
}

export default Contact
