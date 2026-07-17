import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import sofaScene from '../../assets/images/sofa-scene.png';
import './Hero.css';

const COLORS = [
  { name: 'Orange', hex: '#e8792e' },
  { name: 'Blue', hex: '#40E0D0' },
  { name: 'Gray', hex: '#9a9a9a' },
];

const HOTSPOTS = [
  { label: 'LeftDecor', top: '70%', left: '9%' },    
  { label: 'LeftArm', top: '65%', left: '21%' },     
  { label: 'Table', top: '73%', left: '56%' },       
  { label: 'RightPlant', top: '77%', left: '96%' },  
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={sofaScene} alt="Sofa scene" />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Make Your Interior More
          <br />
          Minimalistic &amp; Modern
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          Turn your room with panto into a lot more minimalist
          <br />
          and modern with ease and speed
        </motion.p>

        <motion.form
          className="hero__search"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search furniture"
            className="hero__search-input"
            aria-label="Search furniture"
          />
          <button type="submit" className="hero__search-btn" aria-label="Search">
            <FiSearch size={20} />
          </button>
        </motion.form>
      </div>

      <motion.div
        className="hero__color-picker"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {COLORS.map((color) => (
          <button
            key={color.name}
            className={`hero__color-swatch${color.name === 'Orange' ? ' hero__color-swatch--selected' : ''}`}
            style={{ backgroundColor: color.hex }}
            aria-label={color.name}
          />
        ))}
      </motion.div>

      <div className="hero__hotspots">
        {HOTSPOTS.map((spot) => (
          <button
            key={spot.label}
            className="hero__hotspot"
            style={{ top: spot.top, left: spot.left }}
            aria-label={spot.label}
          >
            <span className="hero__hotspot-dot" />
          </button>
        ))}
      </div>

      <div className="hero__fade" />
    </section>
  );
}

export default Hero;