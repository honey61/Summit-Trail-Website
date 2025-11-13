
import React, { useEffect, useRef } from "react";
import { FaHiking, FaUsers, FaShieldAlt, FaMapMarkedAlt, FaMountain } from "react-icons/fa";
import "../../Style/Section/WhyTrekSection.css";

// export default function WhyTrekSection() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 } // triggers when 20% of card visible
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const reasons = [
//     {
//       icon: <FaHiking />,
//       title: "Experienced & Caring Guides",
//       desc: "Our trek leaders are not just skilled — they genuinely care and ensure everyone feels safe and confident.",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Small Groups, Real Connections",
//       desc: "We keep our groups small so each trek feels personal — more bonding, more laughter, and zero crowd stress.",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Safety First, Always",
//       desc: "We follow strict safety standards — from equipment checks to altitude precautions — your well-being comes first.",
//     },
//     {
//       icon: <FaMapMarkedAlt />,
//       title: "Trails We Know by Heart",
//       desc: "We only trek routes we’ve explored ourselves — no guesswork, just scenic, well-tested trails you can trust.",
//     },
//     {
//       icon: <FaMountain />,
//       title: "Treks for Every Dreamer",
//       desc: "Whether you’re new or experienced, there’s a Summit Trail waiting for you — easy, moderate, or challenging.",
//     },
//   ];

//   return (
//     <section className="why-trek-section" id="why-trek">
//       <div className="why-trek-container">
//         <h2 className="why-trek-title">Why Trek with Summit Trails</h2>
//         <div className="why-trek-grid">
//           {reasons.map((item, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="why-trek-card hidden"
//             >
//               <div className="icon">{item.icon}</div>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function WhyTrekSection() {
  const reasons = [
    { img: "https://media.istockphoto.com/id/1542956029/photo/happy-couple-of-hikers-holding-hands-while-walking-through-the-woods.jpg?s=612x612&w=0&k=20&c=eue1Xeuflsi-FNpn8e4WoA8gBQqVWAj_zcr6URNmIRI=", text: "Experienced & Caring Guides", size: "tall" },
    { img: "https://media.istockphoto.com/id/1311452628/photo/i-want-to-share-my-journey-with-everyone.jpg?s=612x612&w=0&k=20&c=iLe-8n2dTo5f_Xi1VEowCSapBd9Cv44fKtus-GX7l8E=", text: "TRUSTED lOCAL GUIDS & HIDDEN TRAILS EXPENIENCE", size: "wide" },
    { img: "https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU=", text: "Safety First, Always", size: "square" },
    { img: "https://media.istockphoto.com/id/1917023956/photo/happy-woman-with-a-yellow-hiking-backpack-enjoying-the-mountain-landscape.jpg?s=612x612&w=0&k=20&c=LDh1uRP8kBJ6ko8F6JdQYHiCxi9GvdJxmXS0goOszdA=", text: "Trails We Know by Heart", size: "tall" },
    { img: "https://media.istockphoto.com/id/1478017633/photo/high-angle-view-of-a-lonely-man-walking-throght-the-forest.jpg?s=612x612&w=0&k=20&c=I23v1R5TOF-Zc4NJn0vmBHMOnspfsxIFnaWGtyK3M6w=", text: "Treks for Every Dreamer", size: "tall" },

    // ⭐ NEW IMAGE ADDED
    { img: "data:image/jpeg;base64,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", text: "Adventure With Passion", size: "square" },
  ];

   // 👇 Fade-in animation on scroll
  useEffect(() => {
    const section = document.querySelector(".why-collage-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) section.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }, []);

  return (
    <section className="why-collage-wrapper" id="why-trek">
      <h2 className="why-title">Why Contact Us</h2>
      <p className="Why-paragraph">We Provide acessibility support for all our guest</p>

      <div className="collage-container">
        {reasons.map((item, i) => (
          <div key={i} className={`collage-item ${item.size}`}>
            <img src={item.img} alt={item.text} />
            <div className="collage-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}