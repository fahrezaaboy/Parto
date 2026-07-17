import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './WhyChoose.css';

const FEATURES = [
  {
    title: 'Luxury Facilities',
    description:
    'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'  },
  {
    title: 'Affordable Price',
    description:
    'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'  },
  {
    title: 'Many Choices',
    description:
    'We provide many unique work space choices so that you can choose the workspace to your liking.'  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container why-choose__grid">
        <motion.div
          className="why-choose__heading"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          <h2>
            Why
            <br />
            Choosing Us
          </h2>
        </motion.div>

        {FEATURES.map((feature, index) => (
          <motion.div
            className="why-choose__card"
            key={feature.title}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.15 * (index + 1)}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="why-choose__link">
              More Info <FiArrowRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
