import React, { useEffect, useRef } from "react";
import "./AnimatedCounter.css"; // Import the CSS file

// Custom Hook for animated counter
const useAnimatedCounter = (ref, target, duration = 200) => {
  useEffect(() => {
    if (!ref.current) return;

    const counter = ref.current;
    counter.innerText = "0";

    const updateCounter = () => {
      const current = +counter.innerText;
      const increment = target / duration;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(counter);

    return () => observer.disconnect();
  }, [ref, target, duration]);
};

// CounterBox component for each counter item
const CounterBox = ({ target, label }) => {
  const counterRef = useRef(null);
  useAnimatedCounter(counterRef, target);

  return (
    <div className="counter-box">
      <h2 className="counter" ref={counterRef} data-target={target}>
        0
      </h2>
      <p id="nu">{label}</p>
    </div>
  );
};

// Main AnimatedCounter component
const AnimatedCounter = () => {
  const counters = [
    { target: 150, label: "Happy Couples" },
    { target: 200, label: "Weddings" },
    { target: 350, label: "Galleries" },
    { target: 50, label: "Events Covered" },
  ];

  return (
    <div className="counter-container">
      {counters.map((counter, index) => (
        <CounterBox key={index} target={counter.target} label={counter.label} />
      ))}
    </div>
  );
};

export default AnimatedCounter;
