import React, { useState } from "react";
import "./Page3.css";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-icon">{open ? "×" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function Questions() {
  return (
    <section className="section">
      <h2>Frequently Asked Questions</h2>

      <div className="list">
        <FAQItem
          question="What is Netflix?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
        />
        <FAQItem
          question="How much does Netflix cost?"
          answer="Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee."
        />
        <FAQItem
          question="Where can I watch?"
          answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
        />
        <FAQItem
          question="How do I cancel?"
          answer="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks."
        />
        <FAQItem
          question="What can I watch on Netflix?"
          answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more."
        />
        <FAQItem
          question="Is Netflix good for kids?"
          answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies."
        />
      </div>
    </section>




  );
}

export default Questions;