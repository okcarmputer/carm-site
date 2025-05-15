function App() {
  return (
    <>
      {/* Navigation bar on the left */}
      <nav id="left-nav">
        <button onClick={() => window.location.href='music.html'} id="button1">Music</button>
        <button onClick={() => window.location.href='about.html'} id="button4">About</button>
      </nav>

      {/* Buttons on the right */}
      <div className="right">
        <button onClick={() => window.location.href='profile.html'}>Account</button>
      </div>

      <div id="content" style={{ width: "55%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>htmella [html - ella]</h1>
        <div className="banner-container">
          <div className="banner"><span className="animated-text">wake up</span></div>
        </div>
        <div className="large-words-container">
          <div className="large-words">words don't come easy</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="matrix.html">
            <img src="explore.png" alt="explore" className="button-image" />
          </a>
        </div>
        <div className="footer-container">
          <footer>
            <link href="./footer.css" rel="stylesheet" type="text/css" />
            <ul>
              <li><a href="https://www.linkedin.com/in/carmella-hawkins-a920011bb/">L</a></li>
              <li><a href="https://instagram.com/carmellaih">I</a></li>
              <li><a href="https://twitter.com/okcarmputer">T</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;