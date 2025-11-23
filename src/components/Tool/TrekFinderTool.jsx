import React, { useState } from "react";
import "../../Style/Tool/trekFinder.css";

export default function TrekFinderTool({ onClose }) {
  const questions = [
    {
      q: "How do you want this trek to feel?",
      options: [
        "Like a soulful reset.",
        "Like a physical challenge.",
        "Like a fun escape with friends.",
        "Like something wild and raw."
      ]
    },
    {
      q: "What kind of views are you dreaming of?",
      options: [
        "Snow covered peaks.",
        "Forests & meadows.",
        "High altitude lakes.",
        "Sunrise / Sunset from the top."
      ]
    },
    {
      q: "What’s your fitness level?",
      options: [
        "Beginner",
        "Intermediate",
        "Regular trekker",
        "Mountain goat"
      ]
    },
    {
      q: "How much time do you have?",
      options: [
        "Just a weekend (2–3 days)",
        "4–5 days",
        "1 week or more",
        "Doesn't matter – I’m disappearing into the hills."
      ]
    },
    {
      q: "Which season are you planning this trek for?",
      options: [
        "Summer",
        "Autumn",
        "Winter",
        "Monsoon",
        "Not sure yet"
      ]
    }
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (answer) => {
    const updated = [...answers];
    updated[step] = answer;
    setAnswers(updated);

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setStep("result");
      }
    }, 300);
  };

  // Simple Logic Engine (customize later)
  const calculateResult = () => {
    const a1 = answers[0];
    const a2 = answers[1];
    const a3 = answers[2];
    const a4 = answers[3];
    const a5 = answers[4];

    // SAMPLE mapping from the PDF :contentReference[oaicite:0]{index=0}
    if (
      a1.includes("soulful") &&
      a2.includes("Forests") &&
      a3.includes("Beginner")
    ) {
      return {
        name: "Dodi Taal",
        difficulty: "Easy",
        duration: "3 Days",
        region: "Uttarakhand",
        season: "All seasons"
      };
    }

    if (
      a1.includes("fun") &&
      a2.includes("Meadows") &&
      a3.includes("Intermediate")
    ) {
      return {
        name: "Dayara Bugyal",
        difficulty: "Moderate",
        duration: "4 Days",
        region: "Uttarakhand",
        season: "Summer / Autumn"
      };
    }

    if (
      a1.includes("challenge") &&
      a2.includes("Snow") &&
      a3.includes("Regular")
    ) {
      return {
        name: "Kedarkantha",
        difficulty: "Moderate",
        duration: "5 Days",
        region: "Uttarakhand",
        season: "Winter"
      };
    }

    return {
      name: "Hampta Pass",
      difficulty: "Moderate",
      duration: "5 Days",
      region: "Himachal Pradesh",
      season: "Summer"
    };
  };

  const result = step === "result" ? calculateResult() : null;

  return (
    <div className="quiz-overlay">
      <div className="quiz-box">
        <button className="close-btn" onClick={onClose}>×</button>

        {step !== "result" ? (
          <>
            <h2 className="quiz-question">{questions[step].q}</h2>

            <div className="quiz-options">
              {questions[step].options.map((opt, i) => (
                <button key={i} className="quiz-option" onClick={() => handleSelect(opt)}>
                  {opt}
                </button>
              ))}
            </div>

            <div className="quiz-progress">
              Question {step + 1} / {questions.length}
            </div>
          </>
        ) : (
          <div className="quiz-result">
            <h1>Trail Found: {result.name}</h1>
            <p>This is the trail your soul needs right now.</p>

            <ul>
              <li><strong>Difficulty:</strong> {result.difficulty}</li>
              <li><strong>Duration:</strong> {result.duration}</li>
              <li><strong>Region:</strong> {result.region}</li>
              <li><strong>Best Season:</strong> {result.season}</li>
            </ul>

            <button className="quiz-primary-btn">Read More</button>
            <button className="quiz-secondary-btn">Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
}
