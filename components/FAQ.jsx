import React from "react";


const faqs = [
  {
    question: 'Que onda bro todo trank?',
    answer: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  },
  {
    question: 'Es localhost:3000?',
    answer: 'Si perro'
  },
  {
    question: 'Que onda bro todo trank?',
    answer: 'Todo trank por suerte'
  },
  {
    question: 'Que onda bro todo trank?',
    answer: 'Todo trank por suerte'
  }
]

const FAQ = () => {
  return (
    <div className="faq">
      <div className="title">
          <h2 className="question">Questions</h2>
          <h3>&</h3>
          <h2 className="answer">Answers</h2>
      </div>
      <div className="wrapper">
        <div className="faqs-wrapper">
          {
            faqs.map(faq => (
              <div className="item">
                <div className="question">{faq.question}</div>
                <div className="answer">{faq.answer}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="indicator">
        <button><i class="arrow left"></i></button>
        <h2>1</h2>
        <button><i class="arrow right"></i></button>
      </div>
    </div>
  );
};

export default FAQ;