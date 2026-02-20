import React, { useState } from 'react'
import "./Series.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";






function Series() {

  const [show, setShow] = useState(false);


  const trendingNow = [
    "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    "https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDU2ZTAyMDEtZmEyNC00MTMzLWI3ZjQtZGZmOWJlMGJhYmE2XkEyXkFqcGc@._V1_.jpg",
    "https://img.nowrunning.com/content/movie/2021/drish-25274/Stills/drishyam_2_poster_202125.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbee4693-86bc-4245-a2a3-2766faf8080a/de6ew8g-0896360e-ff5c-4962-808b-e9b867936fc2.jpg/v1/fill/w_1280,h_1821,q_75,strp/kurup_malayalam_movie_custom_poster_by_subinraj_de6ew8g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiIvZi9kYmVlNDY5My04NmJjLTQyNDUtYTJhMy0yNzY2ZmFmODA4MGEvZGU2ZXc4Zy0wODk2MzYwZS1mZjVjLTQ5NjItODA4Yi1lOWI4Njc5MzZmYzIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z-aQtviQzPgY_NODVXynDAxnMopUhpx-Ypwl8qRRhpY",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVWTUW71P-l6Dmy2bo73aZ1uyfhi8B4cBqQ&s",
    "https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024.jpg",
    "https://i.pinimg.com/736x/78/01/46/7801469852c113ee048702376fbb9e87.jpg",
    "https://i.pinimg.com/736x/32/05/c9/3205c95e3833f4691e837b7fd7c68464.jpg",
    "https://notesongraphicdesign.wordpress.com/wp-content/uploads/2020/05/mv5byjvjm2fimzutzdmxmy00mwfklwe4zjytnwq4m2i4zdk3mjexxkeyxkfqcgdeqxvymjkxnzq1ndi40._v1_.jpg?w=702",
    "https://i.pinimg.com/736x/71/cb/40/71cb4030817a355a6732c69522f85e16.jpg",

  ];

  const animated = [
    "https://images.ctfassets.net/i5wc420v2vd1/6KxhgsSVomHkWJ4Y7YmIdp/8df55f060a71096955685d068849c13c/EN-US_IYD_Main_Vortex_Vertical_27x40_RGB_PRE.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTPRZ9ZHGPHmGrpl-VDSZIC8jsJWKk03ihA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWw3RLkGyEqd3l7MKhbRsrnPphHShqDECgMg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqW5EHuPO5OnTJxYmqflbUgPiyvc-Fj7lLw&s",
    "https://resizing.flixster.com/yVEZ73fAy6qn6zbenESY4mXH8k4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVlNTYyOTJiLWNjZDItNGEwYi1iNzA0LTI2NTgyNWRlZDNiYy5qcGc=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoLNWd5V1Oi6TjUUNiHxdCulHDuubvjfnOw&s",
    "https://www.femalefirst.co.uk/image-library/port/620/t/the-little-mermaid-movie-poster.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYl-BD8Xttvc9HvYMXfnv88ojFZO1qsuTz9A&s",
    "https://www.tallengestore.com/cdn/shop/products/FromUpOnPoppyHill-GoroMiyazaki-StudioGhibliJapanaeseAnimatedMoviePoster_c7e0a652-ceaa-4190-ab29-ad63fbfebb81.jpg?v=1642160364",

  ];

  const Netflix = [
    "https://image.tmdb.org/t/p/original/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "https://image.tmdb.org/t/p/original/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
    "https://image.tmdb.org/t/p/original/pv5WNnLUo7mpT8k901Lo8UovrqI.jpg",
    "https://image.tmdb.org/t/p/original/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    "https://image.tmdb.org/t/p/original/OvNMzIOJIzDlouhZVqCHRE6HlL.jpg",
    "https://image.tmdb.org/t/p/original/4jSaIqEU8CPBBNn4iVCK6wzPjSx.jpg",
    "https://image.tmdb.org/t/p/original/14k9BfZ2p4rQBMeJ5crKTfUZVwD.jpg",
    "https://image.tmdb.org/t/p/original/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
    "https://image.tmdb.org/t/p/original/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
    "https://image.tmdb.org/t/p/original/1DDE0Z2Y805rqfkEjPbZsMLyPwa.jpg",
    "https://image.tmdb.org/t/p/original/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg",
    "https://image.tmdb.org/t/p/original/oANi0vEE92nuijiZQgPZ88FSxqQ.jpg",

  ];
  return (
    <div>
      <nav className={`nav ${show ? "nav-black" : ""}`}>
        <div className="nav-left">
          <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
          <ul className="nav-menu">
            <li><Link to="/Home" className='nav-menu'>Home</Link></li>
            <li>Series</li>
            <li>History</li>
            <li>Liked</li>
            <li>My List</li>


          </ul>
          <div className='iconss'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <FontAwesomeIcon icon={faCircleUser} className='user-icon' />

          </div>

        </div>
      </nav>



      <main className="main">

        <section className="hero">
          <div className="hero-content">
            <p className="series">N SERIES</p>
            <h1>
              MONEY <span>HEIST</span>
            </h1>
            <p className="part">PART 4</p>

            <div className="meta">
              <span className="imdb">IMDb 8.8/10</span>
              <span className="streams">2B+ Streams</span>
            </div>

            <div className="actions">
              <button className="play">▶ Play</button>
              <button className="trailer">Watch Trailer</button>
            </div>
          </div>
        </section>
      </main>




      <section className="row">
        <h2>Trending </h2>
        <div className="posters">
          {trendingNow.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Animated</h2>
        <div className="posters">
          {animated.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Netflix Orginals</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Trending Series</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Science Fiction</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Upcoming Movies</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Comedy</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Adventure</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <section className="row">
        <h2>Horror</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>
      <section className="row">
        <h2>War</h2>
        <div className="posters">
          {Netflix.map((p, i) => (
            <img key={i} src={p} alt="poster" />
          ))}
        </div>
      </section>

      <footer className="netflix-footer">
        <p className="footer-phone">
          Questions? Call <a href="tel:0008009191743">000-800-919-1743</a>
        </p>

        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>

          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>

          <ul>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-bottom">
          <select className="language-select">
            <option>English</option>
            <option>हिन्दी</option>
          </select>

          <p className="footer-region">Netflix India</p>

          <p className="footer-captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span> Learn more.</span>
          </p>
        </div>
      </footer>




    </div>
  )
}

export default Series
