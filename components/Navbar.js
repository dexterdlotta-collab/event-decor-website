export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT SIDE: PROFILE + NAME */}
      <div className="nav-left">
        <img
          src="/profile.jpg"
          className="nav-profile"
          alt="Royal Event Decor"
        />
        <span className="brand-name">Royal Event Decor</span>
      </div>

      {/* RIGHT SIDE: LINKS */}
      <div className="nav-right">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

    </nav>
  );
}