import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);

  const newThisWeek = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLnA5VBnhFh7_NGXVi7R0r2OdY2O9DBneCA&s",
    "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b01c7a241177935.6950e060d82ef.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/be/RDX-_Robert_Dony_Xavier_poster.jpg",
    "data:image/jpeg;base64,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",
    "https://preview.redd.it/what-is-the-best-first-look-poster-ever-for-a-malayalam-v0-jx9csix7wtdd1.jpg?width=600&format=pjpg&auto=webp&s=556d511c147ddfd41d4a7dec656872a734a4c391",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e8e346236519987.69253c4ae1749.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/988f6a199943431.66a235c4bbfe4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCxq1CJEL-OAEfxkVG3sdu_jPnM6UvBG-qQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIfjEO4bcHg9ZR8pj0fiKi7D-fh5xL-z-jQ&s",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9bf7bf125937929.6123b069569f3.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3de3e2182044787.6526948d99cd7.jpg",
  ];


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

  return (
    <>
     
      <nav className={`nav ${show ? "nav-black" : ""}`}>
        <div className="nav-left">
          <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />

          <ul className="nav-menu">
            <li>Home</li>
            <li>Series</li>
            <li>History</li>
            <li>Liked</li>
            <li>My List</li>
            
          </ul>
        </div>

        <div className="nav-right">
          <i className="fa fa-search nav-icon"></i>
         
          <i className="fa fa-bell nav-icon"></i>
          <img
            className="nav-avatar"
            
          />
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

  
    
  
    <section className="row">
  <h2>New this week</h2>
  <div className="posters">
    {newThisWeek.map((p, i) => (
      <img key={i} src={p} alt="poster" />
    ))}
  </div>
</section>

<section className="row">
  <h2>Trending Now</h2>
  <div className="posters">
    {trendingNow.map((p, i) => (
      <img key={i} src={p} alt="poster" />
    ))}
  </div>
</section>

 



      </main>
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








    </>
  );
}

export default Home;
