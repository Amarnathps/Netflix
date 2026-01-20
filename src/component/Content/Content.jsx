import "./Content.css";

function Content() {
  return (
    <div className="BG">
      <div className="overlay">

      <div className="Container">
        <h1>Unlimited movies, shows and more</h1>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="content-input">
          <input type="email" placeholder="Email address" />
          <button>
            Get Started <span>›</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Content;