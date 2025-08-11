import { useState, useEffect } from "react";
import "./gallery.css"; 

const images = [
  { id: 1, src: "interior.jpg", category: "interior" },
  { id: 2, src: "interior1.jpg", category: "interior" },
  { id: 3, src: "interior2.jpg", category: "interior" },
  { id: 4, src: "galleryfood.jpg", category: "food" },
  { id: 5, src: "galleryfood2.jpg", category: "food" },
  { id: 6, src: "galleryfood3.jpg", category: "food" },
  { id: 7, src: "event.jpg", category: "events" },
  { id: 8, src: "event1.jpg", category: "events" },
  { id: 9, src: "event2.jpg", category: "events" },
  { id: 10, src: "guest.jpg", category: "vip" },
  { id: 11, src: "guest1.jpg", category: "vip" }
];

export default function Galleryimg() {
  const [filter, setFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(images);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => {
      setFilteredImages(filter === "all" ? images : images.filter(img => img.category === filter));
      setAnimate(true);
    }, 100);
  }, [filter]);

  return (
    <div className="gallerymain">
      <div className="button-container">
        <button onClick={() => setFilter("all")} className="filter-button">ALL PHOTO</button>
        <button onClick={() => setFilter("interior")} className="filter-button">INTERIOR</button>
        <button onClick={() => setFilter("food")} className="filter-button">FOOD</button>
        <button onClick={() => setFilter("events")} className="filter-button">EVENTS</button>
        <button onClick={() => setFilter("vip")} className="filter-button">VIP GUESTS</button>
      </div>
      
      <div className={`image-gallery ${animate ? "fade-in" : ""}`}>
        {filteredImages.map(img => (
          <img key={img.id} src={img.src} alt={img.category} className="gallery-image" />
        ))}
      </div>
    </div>
  );
}
