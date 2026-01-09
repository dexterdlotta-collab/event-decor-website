import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
export default function Gallery() {
  return (
    <div className="section">
      <h1>Our Decoration Work</h1>

      <div className="gallery">
        <img src="/gallery/decor1.jpg" alt="desing1" />
        <img src="/gallery/decor2.jpg" alt="desing2" />
        <img src="/gallery/decor3.jpg" alt="desing3" />
        <img src="/gallery/decor4.jpg" alt="desing4" />
        <img src="/gallery/decor5.jpg" alt="desing5" />
        <img src="/gallery/decor6.jpg" alt="desing6" />
        <img src="/gallery/decor7.jpg" alt="desing7" />
        <img src="/gallery/decor8.jpg" alt="desing8" />
         <h10>For more desings and details jest connect us.</h10>
         <WhatsAppButton />
               <CallButton />
      </div>
    </div>
  );
}

