import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import { ClickAwayListener } from "@material-ui/core";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const PressModal = ({ setPressOpen, activePress }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="press-modal"
    >
      <ClickAwayListener onClickAway={() => setPressOpen(false)}>
        <div className="card">
          <div onClick={() => setPressOpen(false)} className="close-icon">
            <CloseIcon />
          </div>
          <div className="text">
            <span>
              Dear Friend My wife Leah and I are pleased to be the Patrons of
              the Julia Tree Challenge.
            </span>
            <span>
              This is a truly inspiring project that marries the beautiful story
              of Julia and Valentine to the visionary goals of educating girls
              and empowering women, the work of promoting justice and peace, and
              the growing Africa's Great Green Wall.
            </span>
            <span>
              Legend tells us that Julia was the blind daughter of young
              Valentine's jailer. After Valentine had agreed to bless her, the
              jailer asked Valentine to become Julia’s teacher. He agreed. We do
              not know how long their relationship lasted. We do know that when
              he learned his execution was imminent Valentine hastily wrote a
              note to Julia. He signed it with the immortal words, 'from your
              Valentine'. The grieving Julia planted a pink almond tree as a
              testimony to their love.
            </span>
            <span>
              We can grow Julia Trees on Africa's Great Green Wall as testament
              to our love: for our very own Valentine’s and Julia’s, for the
              special people in our lives, for those who need our support, and
              for our planet
            </span>
            <span>
              There is still a long way to go … and this vision can only be
              realized if we all work together to create a better tomorrow.
            </span>
            <span>
              Leah and I are now in the twilight of our lives and our travelling
              days are, evermore, restricted. But our love for each other and
              our passion for Africa and for a world at peace with itself has
              never diminished. We yearn for human beings to learn to coexist
              with each other and with the biodiversity of our Earth.
            </span>
            <span>
              In the words of a great son of Africa, Thomas Sankara: We must
              dare to invent the future. Everything we can imagine, we can
              create.
            </span>
            <span>
              The Julia Tree Challenge introduces us to one of the most
              inspiring and imaginative projects ever to emanate from my
              continent – Africa's Great Green Wall – a wall the whole world can
              believe in! It’s a bold and ambitious project that will green an
              enormous swathe of the Sahel stretching from coast to coast, and
              branching into the drylands of Southern Africa, improving the
              lives of millions of people.
            </span>
            <span>
              Without embracing projects like this we face the prospect of what
              some are terming ecological apartheid, in which the rich pay to
              protect themselves, while the poor suffer the worst impacts of
              climate change.
            </span>
            <span>
              But let us not forget that real power lies with us, the people. We
              must use our power boldly and wisely.{" "}
            </span>
            <span>
              The Julia Tree Challenge is an African initiative with a truly
              global outreach. It is an initiative that can arouse within all
              humanity the transformative power of HOPE and IMAGINATION.
            </span>
            <span>
              I implore you, join us, in proving Thomas Sankara right:
            </span>
            <br />
            <span>Everything we can imagine, we can create. </span>

            <span>
              Let us dare to imagine a future that our children can believe in.
              Together we can grow a million Julia Trees, together we can green
              the future. Archbishop Emeritus Desmond and Mrs. Leah Tutu
            </span>
            <div>
              <img src="/assets/img/tutu-teach.jpeg"/>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default PressModal;
