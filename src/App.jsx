import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="contact-info">
          <a href="mailto:arabiaou@gmail.com" className="email">
            arabiaou@gmail.com
          </a>
          <span className="separator">/</span>
          <a href="https://wa.me/6282123456789" className="phone">
            +6282123456789
          </a>
        </div>
        <nav className="nav">
          <a href="https://instagram.com" className="nav-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <span className="separator">/</span>
          <a href="https://facebook.com" className="nav-link" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </nav>
      </header>

      <div className="content">
        <div className="logo-container">
          <img
            src="/Logo IBC Revisi (3).png"
            alt="Insha Banyumas Community Logo"
            className="logo"
          />
        </div>

        <div className="main-content">
          <div className="left-character">
            <img
              src="/Haris komiss.png"
              alt="Character"
              className="character character-left"
            />
          </div>

          <div className="center-content">
            <h1 className="title">
              AYO <span className="arrow">→</span>
            </h1>
            <h2 className="subtitle">
              KE RUMAH<br />
              SAKIT JIWA
            </h2>

            <div className="tagline">
              <p>JANGAN MALU</p>
              <p>MOTOR STIKER</p>
              <p>KANTUK MALU LAH</p>
              <p>KALO JADI CEPU</p>
            </div>
          </div>

          <div className="right-character">
            <img
              src="/Tak berjudul300_20231128083528.png"
              alt="Character"
              className="character character-right"
            />
            <div className="character-text">
              <p>AYO KENALAN LEBIH</p>
              <p>DEKAT SAMA IBC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App