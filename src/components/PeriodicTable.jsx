import { useState } from "react";
import Element from "./Element";
import { actinideElements, lanthanideElements, mainElements } from "../../data";
import ElementCard from "./ElementCard";
import { motion } from "framer-motion";

const PeriodicTable = () => {
  const [cardClicked, setCardClicked] = useState(false);
  const [cardData, setCardData] = useState([]);

  const handleCardButton = (el) => {
    setCardClicked(true);
    setCardData(el);
  };


  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
      className="max-w-[1400px] w-[1400px] mx-auto mt-20"
    >
      {/* Main Elements  */}
      <div className= "grid gap-x-1 place-items-center">
        {mainElements.map((el) => {
          return (
            <button
              onClick={() => handleCardButton(el)}
              style={{
                gridRow: el?.position?.row,
                gridColumn: el?.position?.col >= 3 ? el.position.col + 1 : el.position.col,
              }}
              key={el.index}
            >
              <Element data={el} />
            </button>
          );
        })}
      </div>

      {/* Lanthanide Elements */}
      <div className="grid grid-cols-18 place-items-center mt-8">
        {lanthanideElements.map((el) => {
          return (
            <button
              onClick={() => handleCardButton(el)}
              style={{
                gridRow: el?.position?.row,
                gridColumn: el?.position?.col,
              }}
              className="ml-5"
              key={el.index}
            >
              <Element data={el} />
            </button>
          );
        })}
      </div>

      {/* Actinide Elements */}
      <div className="grid grid-cols-18 place-items-center mt-1">
        {actinideElements.map((el) => {
          return (
            <button
              onClick={() => handleCardButton(el)}
              style={{
                gridRow: el?.position?.row,
                gridColumn: el?.position?.col,
              }}
              className="ml-5"
              key={el.index}
            >
              <Element data={el} />
            </button>
          );
        })}
      </div>

      {cardClicked && (
        <ElementCard setCardClicked={setCardClicked} cardData={cardData} />
      )}
    </motion.div>
  );
};

export default PeriodicTable;
