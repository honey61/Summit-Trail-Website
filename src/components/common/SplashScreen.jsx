import React, { useEffect, useState } from "react";
import "../../Style/Component/Splashscreen.css";

export default function SplashScreen({ onFinish, hidden }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 2200); // start fade
    const t2 = setTimeout(() => onFinish(), 3200); // finish fade
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div className={`splash ${fade ? "fade-out" : ""} ${hidden ? "hidden" : ""}`}>
      <div className="splash-content">
        <img src="/mountain-logo.png" alt="Summit Trails" className="splash-logo" />
        <h1 className="splash-title">Summit Trails</h1>
      </div>
    </div>
  );
}
