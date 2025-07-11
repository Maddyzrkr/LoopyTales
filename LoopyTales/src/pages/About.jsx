
// import React from 'react';
// import './about.css';
// import FounderImage from '../assets/founder.jpg'; // Replace with your actual image path

// function About() {
//   return (
//     <div className="about-container">
//       <div className="about-image">
//         <img src={FounderImage} alt="Founder" />
//       </div>
//       <div className="about-content">
//         <h1 className="about-title">Hey, I'm Anuradha Maurya</h1>
//         <p className="about-subtitle">
//           I'm the creator of LoopyTales. A crochet enthusiast, creator, and small business dreamer.
//         </p>
//         <h3 className="about-highlight">Creativity has always been important to me..</h3>
//         <p className="about-text">
//           From a young age, I’ve been drawn to all things handmade. I loved working with threads, hooks, and imagination to bring soft, beautiful pieces to life — be it scarves, bags, or cozy tops. Every item I create is a piece of my heart.
//         </p>
//         <p className="about-text">
//           What started as a hobby has slowly turned into a passion project. LoopyTales is more than just a brand — it's a reflection of love for slow fashion, sustainable craftsmanship, and artistic expression.
//         </p>
//         <p className="about-text">
//           Every crochet item you find here is made with patience and care, aiming to bring warmth and joy to your everyday life.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import FounderImage from '../assets/founder.jpg'; // Replace with your actual image path

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={FounderImage} alt="Founder" />
      </motion.div>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h1 className="about-title">Hey, I'm Anuradha Maurya</h1>
        <p className="about-subtitle">
          I'm the creator of LoopyTales. A crochet enthusiast, creator, and small business dreamer.
        </p>
        <h3 className="about-highlight">Creativity has always been important to me..</h3>
        <p className="about-text">
          From a young age, I’ve been drawn to all things handmade. I loved working with threads, hooks, and imagination to bring soft, beautiful pieces to life — be it scarves, bags, or cozy tops. Every item I create is a piece of my heart.
        </p>
        <p className="about-text">
          What started as a hobby has slowly turned into a passion project. LoopyTales is more than just a brand — it's a reflection of love for slow fashion, sustainable craftsmanship, and artistic expression.
        </p>
        <p className="about-text">
          Every crochet item you find here is made with patience and care, aiming to bring warmth and joy to your everyday life.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;