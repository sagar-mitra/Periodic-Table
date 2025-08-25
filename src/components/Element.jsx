import React from "react";
import { motion } from "framer-motion";

const Element = ({ data }) => {
  const {index, symbol, name, atomicNumber, bg, textColor } = data;
  return (
    <motion.div
      whileHover={{scale: 1.08, boxShadow: "inset 0px 0px 70px rgba(255, 255, 255, 0.12)"}}
      transition={{duration: 0.2, ease:"linear"}}
      style={{
        backgroundColor: bg,
        color: textColor,
      }}
      className={`w-[4.3rem] h-[4.8rem] rounded p-1 mb-2 cursor-pointer border-[1px]  ${index === 20 || index === 38 ? "mr-1" :"mr-0"}`}
    >
      <p className="text-right text-[13px] opacity-80 font-(family-name:--font-space) ">
        {atomicNumber}
      </p>
      <div className="flex flex-col items-center -mt-2.5">
        <h2 className={`${name === "" ? "text-[20px] text-center mt-4": "text-[30px]"}  font-(family-name:--font-space)`}>
          {symbol}
        </h2>
        <p className="text-[11px] opacity-80 font-(family-name:--font-IBM) -mt-0.5">
          {name.length > 9  ? name.slice(0, 9) + ".." : name}
        </p>
      </div>

      
    </motion.div>
  );
};

export default Element;
