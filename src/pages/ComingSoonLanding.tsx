import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gif1 from "../assets/gifs/Lip_Animation.gif";
import gif2 from "../assets/gifs/Character_Animation.gif";

const ComingSoonLanding = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="coming-soon-wrapper">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="slide1"
            className="slide-black slide-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setStep(2)} // 👈 go to second slide on click
          >
            <motion.img
              src={gif1}
              alt="Intro GIF"
              className="first_gif"
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="slide2"
            className="slide-green slide-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={gif2}
              alt="Coming Soon GIF"
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComingSoonLanding;
