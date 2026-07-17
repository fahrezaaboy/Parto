import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { products } from '../data/products';
import './BestSelling.css';

const CATEGORIES = ['Chair', 'Beds', 'Sofa', 'Lamp'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ProductCard({ product, delay }) {
  return (
    <motion.article
      className="product-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <div className="product-card__image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.title}</h3>

        <div className="product-card__rating">
          {Array.from({ length: product.rating }).map((_, i) => (
            <FaStar key={i} className="product-card__star" />
          ))}
        </div>

        <div className="product-card__bottom">
          <p className="product-card__price">
            <span className="product-card__currency">$</span>
            {product.price}
          </p>
          <button className="product-card__add" aria-label={`Add ${product.title} to cart`}>
            <FiPlus />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function BestSelling() {
  const [activeCategory, setActiveCategory] = useState('Chair');

  const currentIndex = CATEGORIES.indexOf(activeCategory);
  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handlePrevCategory = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setActiveCategory(CATEGORIES[prevIndex]);
    }
  };

  const handleNextCategory = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < CATEGORIES.length) {
      setActiveCategory(CATEGORIES[nextIndex]);
    }
  };

  return (
    <motion.section
      className="best-selling"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.h2
          className="best-selling__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.1}
        >
          Best Selling Product
        </motion.h2>

        <motion.div
          className="best-selling__tabs"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`best-selling__tab${
                category === activeCategory ? ' best-selling__tab--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="best-selling__carousel">
          <button
            className="best-selling__arrow best-selling__arrow--left"
            aria-label="Previous products"
            type="button"
            onClick={handlePrevCategory}
            disabled={currentIndex === 0}
          >
            <FiArrowLeft />
          </button>

          <div className="best-selling__grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} delay={0.15 + index * 0.1} />
            ))}
          </div>

          <button
            className="best-selling__arrow best-selling__arrow--right"
            aria-label="Next products"
            type="button"
            onClick={handleNextCategory}
            disabled={currentIndex === CATEGORIES.length - 1}
          >
            <FiArrowRight />
          </button>
        </div>

        <motion.a
          href="#"
          className="best-selling__view-all"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.5}
        >
          View All <span className="best-selling__view-all-arrow">&#10230;</span>
        </motion.a>
      </div>
    </motion.section>
  );
}

export default BestSelling;