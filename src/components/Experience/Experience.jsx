import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import EXPERIENCE_IMG from "../../assets/images/Experiences/e1.png";
import GALLERY_TALL from "../../assets/images/Experiences/e2.png";
import GALLERY_TOP from "../../assets/images/Experiences/e3.png";
import GALLERY_BOTTOM from "../../assets/images/Experiences/e4.png";
import "./Experience.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] } },
};

function MoreInfo() {
  return (
    <button className="more-info" type="button">
      <span>More Info</span>
      <span className="arrow" aria-hidden="true">
        <HiArrowLongRight size={22} />
      </span>
    </button>
  );
}

export default function Experience() {
  return (
    <section className="experience-section" aria-label="Experience and Materials">
      <div className="experience-container">
        {/* Block 1: Experiences */}
        <div className="exp-block">
          <motion.div
            className="exp-visual"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="exp-shape exp-shape-1" aria-hidden="true" />
            <span className="exp-shape exp-shape-2" aria-hidden="true" />
            <div className="exp-image-wrap">
              <img src={EXPERIENCE_IMG} alt="Modern living room interior" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="exp-label">Experiences</span>
            <h2 className="exp-heading">
              We Provide You The
              <br />
              Best Experience
            </h2>
            <p className="exp-paragraph">
              You don't have to worry about the result because all of these interiors are
              made by people who are professionals in their fields with an elegant and
              luxurious style and with premium quality materials.
            </p>
            <MoreInfo />
          </motion.div>
        </div>

        {/* Block 2: Materials */}
        <div className="materials-block">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="exp-label">Materials</span>
            <h2 className="materials-heading">
              Very Serious
              <br />
              Materials For Making
              <br />
              Furniture
            </h2>
            <p className="materials-paragraph">
              Because panto was very serious about designing furniture for our environment,
              using a very expensive and famous capital but at a relatively low price.
            </p>
            <MoreInfo />
          </motion.div>

          <motion.div
            className="gallery"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="gallery-deco gallery-deco-1" aria-hidden="true" />
            <span className="gallery-deco gallery-deco-2" aria-hidden="true" />

            <div className="gallery-left">
              <div className="img-card img-card-top">
                <img src={GALLERY_TOP} alt="Chair detail" />
              </div>
              <div className="img-card img-card-bottom">
                <img src={GALLERY_BOTTOM} alt="Sofa detail" />
              </div>
            </div>

            <div className="gallery-right">
              <div className="img-card img-card-tall">
                <img src={GALLERY_TALL} alt="Dining chairs" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
