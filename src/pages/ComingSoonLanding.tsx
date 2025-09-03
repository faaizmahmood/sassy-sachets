import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gif1 from '../assets/gifs/Lip_Animation.gif'
import gif2 from '../assets/gifs/Character_Animation.gif'

const ComingSoonLanding = () => {
  return (
    <div className="coming-soon-wrapper">
      <Swiper spaceBetween={30} slidesPerView={1} style={{ width: "100%", height: "100%" }}>

        {/* First GIF - Black Background */}
        <SwiperSlide className="slide-black">
          <div className="slide-content">
            <motion.img
              src={gif1}
              alt="Intro GIF"
              className="first_gif"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            {/* <motion.p
              className="swipe-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              👉 Swipe to see what’s coming
            </motion.p> */}
          </div>
        </SwiperSlide>

        {/* Second GIF - Green Background */}
        <SwiperSlide className="slide-green">
          <div className="slide-content">

            <motion.img
              src={gif2}
              alt="Coming Soon GIF"
              initial={{ opacity: 0, y: 60 }}   // start hidden + lower
              whileInView={{ opacity: 1, y: 0 }} // fade in + rise up when slide in view
              viewport={{ once: true }}          // only animate once
              transition={{
                duration: 2,
                ease: [0.25, 0.25, 0.75, 1],      // smooth cubic easing
              }}
            />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ComingSoonLanding;
