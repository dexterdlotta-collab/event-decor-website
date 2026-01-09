import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

export default function Home() {
  return (
         <div className="hero">
      <h1>M Square Event</h1>
      <p>Wedding • Birthday • Balloon • Stage Decoration</p>
      <a href="/book" className="btn">Book Decoration</a>
      <WhatsAppButton />
       <CallButton />
    </div>
  );


    <>
      {/* HERO */}
      <section className="hero">
        <div className="brand">
          <img
            src="/logo/m2.png"
            alt="M Square Events Logo"
            className="brand-logo"
          />
          <h1>M Square Events</h1>
        </div>

        <p>
          Creating Beautiful Wedding, Birthday & Event Decorations
        </p>

        <div className="hero-buttons">
          <a href="/gallery" className="btn">View Gallery</a>
          <a href="/book" className="btn outline">Book Decor</a>
        </div>

        <WhatsAppButton />
        <CallButton />
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2 className="section-title">Our Decoration Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Wedding Decoration</h3>
            <p>Stage, Mandap, Flower & Lighting Decoration</p>
          </div>

          <div className="card">
            <h3>Birthday Decoration</h3>
            <p>Balloon Themes, Kids & Surprise Decor</p>
          </div>

          <div className="card">
            <h3>Event & Party Decor</h3>
            <p>Corporate, Engagement & Special Events</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section light">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why">
          <div>✔ Premium Quality Decor</div>
          <div>✔ Affordable Pricing</div>
          <div>✔ On-Time Setup</div>
          <div>✔ Experienced Team</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let’s Make Your Event Beautiful</h2>
        <p>Contact us today for stunning decorations</p>
        <a href="/book" className="btn">Contact Now</a>
      </section>
    </>
  
}


