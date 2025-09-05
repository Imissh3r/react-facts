import reactLogo from '../assets/react-logo.png'

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={reactLogo} className="nav-bar-logo" alt="React logo" />
        <span className="nav-bar-title">ReactFacts</span>
      </nav>
    </header>
  )
}