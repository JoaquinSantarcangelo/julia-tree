import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { AnimatePresence, motion } from "framer-motion";
import { ClickAwayListener } from "@material-ui/core";

const faqsDB = [
  {
    id: 0,
    question: "What is the Julia Tree?",
    answer:
      "The Julia Tree is inspired by the legend of St. Valentine's student Julia. Following the execution of Valentine, Julia planted a flowering Almond tree close to his resting place, as an expression of their enduring love." +
      " The Julia Tree Challenge grows trees on Africa’s Great Green Wall. It is an ecosystem that also champions the education of girls, the empowerment of women, and peace and racial justice projects worldwide.",
  },
  {
    id: 1,
    question: "Why the Julia Tree?",
    answer:
      "In a world of increasing division and inequality we aim to create a counterculture that deepens our understanding of the gift of St Valentine’s Day. In the spirit of St. Valentine, we nurture and celebrate LOVE." +
      " Love has no gender. It is all embracing. It is not just a joyful emotion. It is a genuine commitment to act for the wellbeing of all people and our planet. A Julia Tree is both the symbol and a substantive expression of this love.",
  },
  {
    id: 2,
    question: "What is the Julia Tree Challenge?",
    answer:
      "The Julia Tree Challenge aims to grow one million trees along the African Union’s Great Green Wall in partnership with the African NGO, ORGIIS Ghana, who are already involved in growing trees in Ghana and Burkina Faso. With $10, you can grow one tree as part of The Great Green Wall. Your Julia Tree will sequester up to 80,000 pounds of CO2 in its lifetime. Your tree will help to provide food security, jobs and a hospitable environment for communities in Ghana and Burkina Faso.",
  },
  {
    id: 3,
    question: "Who is involved?",
    answer:
      "Backed by the African Union and the United Nations, and endorsed by the 1984 Nobel Peace Prize Laureate, Archbishop Emeritus Desmond Tutu and his wife Leah, the Great Green Wall is an African-led movement with an epic ambition to grow an 8,000km (5000 mile) natural wonder of the world across the entire width of Africa, with branches extending along the northern rim of the continent and extending deep into Africa’s southern drylands. The Julia Tree Challenge is an initiative of the TutuTeach Foundation, ORGIIS Ghana and Hope Initiatives International.",
  },
  {
    id: 4,
    question: "Why does this matter?",
    answer:
      "The Julia Tree Challenge matters because it will grow a significant forest along The Great Green Wall. This living breathing wall contributes to the health and well being of people and our planet.  The trees regenerate degraded land and reverse desertification. Julia Trees enable African people to grow, create and sell products that enhance their food security. This challenge opens the doors of opportunity for women's empowerment and education for girls. By planting Julia Trees we are growing hope for Africa and supporting the work of justice and peace.",
  },
  {
    id: 5,
    question: "What does one Julia Tree do?",
    answer:
      "Your Julia Tree will sequester roughly 80,000 pounds of CO2 during its lifetime and help to provide food security, jobs and a hospitable environment for the communities of northern Ghana and Burkina Faso who will benefit. Each tree is also an ecosystem that supports biodiversity and the regeneration of degraded land. We believe that each tree grows hope for future generations.",
  },
  {
    id: 6,
    question: "Where will the trees be grown?",
    answer:
      "ORGIIS Ghana is based in northern Ghana, close to the border of Burkina Faso and the trees will be grown in this region. The work of ORGIIS is recognized and endorsed by the African Union and the United Nations. Your Julia Tree(s) will be grown on degraded lands by local women-led cooperatives. These people understand the urgent necessity of developing a new and sustainable relationship with nature. The Julia Tree Challenge is not about simply planting trees but GROWING trees. The emphasis here is on the longevity of the project which is intergenerational and focused on providing secure habitats, working environments and food security so that communities, especially their young people, have a reason to stay and build their futures. Each tree, therefore, represents hope in the future." +
      "While we cannot commit to tracking each individual tree, ORGIIS will track plantations of 5,000 and 10,000 trees, and with your permission, we will email you after the planting season (August and September), the Google Maps coordinates so that you can virtually visit the area where your trees are planted and watch them grow over the years.",
  },
  {
    id: 7,
    question: "What is the Great Green Wall?",
    answer:
      "The Great Green Wall is an African led movement with the epic ambition to grow an 8,000km (5000 mile) natural wonder of the world across the entire width of Africa, with branches extending along the northern rim of the continent and extending deep into the southern drylands. A decade in and roughly 18% underway, the initiative is already bringing life back to Africa’s degraded landscapes at an unprecedented scale, providing food security, jobs and a reason to stay for the millions who live along its path. The Wall promises to be a compelling solution to the many urgent threats facing the African Continent, and the global community as a whole—notably climate change, drought, famine, conflict, radicalization and migration. Once complete, the Great Green Wall will be the largest living structure on the planet, three times the size of Australia’s Great Barrier Reef.",
  },
];

const FAQ = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(1);

  //Item Component
  const Item = ({ info }) => {
    return (
      <div
        onClick={() => {
          setActiveFaq(info.id);
          setModalVisible(true);
        }}
        className="item"
      >
        {info.question}
      </div>
    );
  };

  return (
    <div id="faq" className="faq">
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="faq-modal"
          >
            <ClickAwayListener onClickAway={() => setModalVisible(false)}>
              <div className="card">
                <div
                  onClick={() => setModalVisible(false)}
                  className="close-icon"
                >
                  <CloseIcon />
                </div>
                <div className="question">{faqsDB[activeFaq].question}</div>
                <div className="divider"></div>
                <div className="answer">{faqsDB[activeFaq].answer}</div>
              </div>
            </ClickAwayListener>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="title">
        <h2 className="questions">Questions</h2>
        <h3>&</h3>
        <h2 className="answers">Answers</h2>
      </div>
      <div className="wrapper">
        <div className="faqs-wrapper">
          {faqsDB.map((faq, i) => (
            <Item info={faq} />
          ))}
        </div>
      </div>
      <div className="background">
        <img src="/assets/img/faqs.png" alt="" />
      </div>
    </div>
  );
};

export default FAQ;
