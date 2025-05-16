import './footer.css';
import './App.css'; // Adjust path as needed

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./components/ui/menubar"

function App() {
  return (
    <>
      {/* Navigation bar on the left */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Navigate</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => window.location.href='music.html'}>Music</MenubarItem>
              <MenubarItem onClick={() => window.location.href='about.html'}>About</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

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