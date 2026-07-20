import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import slide1 from '../../assets/images/Testimoni/1.png';
import slide2 from '../../assets/images/Testimoni/2.png';
import slide3 from '../../assets/images/Testimoni/3.png';
import './Testimonials.css';

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const titleFade = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const slides = [slide1, slide2, slide3];

function TestimonialCard({ src, delay }) {
  return (
    <motion.article
      className="testimonial-card"
      variants={cardFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
      whileHover={{ y: -10 }}
    >
      <img className="testimonial-card__bg" src={src} alt="Client testimonial" />
    </motion.article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [slideSize, setSlideSize] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let newVisibleCount = 3;
      let gap = 32;

      if (width <= 600) {
        newVisibleCount = 1;
        gap = 0;
      } else if (width <= 900) {
        newVisibleCount = 2;
        gap = 24;
      } else {
        newVisibleCount = 3;
        gap = 32;
      }

      setVisibleCount(newVisibleCount);

      if (sliderRef.current) {
        const card = sliderRef.current.querySelector('.testimonial-card');
        if (card) {
          const cardWidth = card.offsetWidth;
          setSlideSize(cardWidth + gap);
        }
      }
    };

    updateLayout();
    const resizeTimer = setTimeout(updateLayout, 100);
    window.addEventListener('resize', updateLayout);
    return () => {
      window.removeEventListener('resize', updateLayout);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, slides.length - visibleCount);
    if (activeIndex > maxIndex) {
      setActiveIndex(0);
    }
  }, [visibleCount]);

  const maxIndex = Math.max(0, slides.length - visibleCount);
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < maxIndex;

  const handlePrev = () => {
    if (canPrev) {
      setActiveIndex((current) => current - 1);
    }
  };

  const handleNext = () => {
    if (canNext) {
      setActiveIndex((current) => current + 1);
    }
  };

  return (
    <motion.section
      className="testimonials-section"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="testimonials-container">
        <motion.span className="testimonials-label" variants={titleFade}>
          TESTIMONIALS
        </motion.span>

        <motion.h2 className="testimonials-title" variants={titleFade}>
          Our Client Reviews
        </motion.h2>

        <div className="testimonials-carousel">
          <button
            className="testimonials-arrow testimonials-arrow--left"
            type="button"
            onClick={handlePrev}
            disabled={!canPrev}
            aria-label="Previous testimonials"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="testimonials-slider-wrapper">
            <motion.div
              className="testimonials-slider"
              ref={sliderRef}
              animate={{ x: -activeIndex * slideSize }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {slides.map((src, index) => (
                <TestimonialCard key={src} src={src} delay={0.15 + index * 0.15} />
              ))}
            </motion.div>
          </div>

          <button
            className="testimonials-arrow testimonials-arrow--right"
            type="button"
            onClick={handleNext}
            disabled={!canNext}
            aria-label="Next testimonials"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
