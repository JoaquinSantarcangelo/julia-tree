import React, {useState, useEffect} from "react";


const faqsDB = [
  [
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
  ],
  [
    {
      question: 'BQue onda bro todo trank?',
      answer: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
    {
      question: 'BEs localhost:3000?',
      answer: 'Si perro'
    },
    {
      question: 'BQue onda bro todo trank?',
      answer: 'Todo trank por suerte'
    },
    {
      question: 'BQue onda bro todo trank?',
      answer: 'Todo trank por suerte'
    }
  ]
]

const FAQ = () => {

  const [faqs, handleFAQS] = useState(faqsDB[0]);
  const [actualpage, handleActualPage] = useState(0);

  useEffect(()=> {
    const changePage = () => {
      handleFAQS(faqsDB[actualpage]);
    }
    changePage();
  }, [actualpage]);

  
  const nextPage = () => {
    const nextPg = actualpage + 1;
    if(nextPg <= faqsDB.length){
      handleActualPage(nextPg);
    }
  }

  const prevPage = () => {
    const prevPg = actualpage - 1;
    if(prevPg < faqsDB.length){
      handleActualPage(prevPg);
    }
  }

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
        {(actualpage === 0) ? null : 
          <button
            onClick={() => prevPage()}
          ><i class="arrow left"></i></button>
        }
        <h2>{actualpage+1}</h2>
        {((actualpage+1) === faqsDB.length) ? null : 
          <button
            onClick={() => nextPage()}
          ><i class="arrow right"></i></button>
        }
      </div>
    </div>
  );
};

export default FAQ;