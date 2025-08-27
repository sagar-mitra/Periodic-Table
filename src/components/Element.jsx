import React from "react";
import { motion } from "framer-motion";

const Element = ({ data }) => {
  const {index, symbol, name, atomicNumber, bg, textColor } = data;
  return (
    <motion.div
      whileHover={name === "" ? undefined : {scale: 1.08, boxShadow: "inset 0px 0px 70px rgba(255, 255, 255, 0.12)"}}
      transition={{duration: 0.2, ease:"linear"}}
      style={{
        backgroundColor: bg,
        color: textColor,
      }}
      className={`w-[3.3rem] h-[3.8rem] xl:w-[3.6rem] xl:h-[4rem] 2xl:w-[4.3rem] 2xl:h-[4.8rem] rounded p-1 mb-2 cursor-pointer border-[1px]  ${index === 20 || index === 38 ? "mr-1" :"mr-0"}`}
    >
      <p className="text-right text-[10px] 2xl:text-[13px] opacity-80 font-(family-name:--font-space) ">
        {atomicNumber}
      </p>
      <div className="flex flex-col items-center -mt-1.5 md:-mt-2.5">
        <h2 className={`${name === "" ? "2xl:text-[20px] text-center mt-4": "text-[20px] 2xl:text-[30px]"}  font-(family-name:--font-space)`}>
          {symbol}
        </h2>
        <p className="text-[9px] 2xl:text-[11px] opacity-80 font-(family-name:--font-IBM) -mt-0.5">
          {name.length > 9  ? name.slice(0, 9) + ".." : name}
        </p>
      </div>

      
    </motion.div>
  );
};

export default Element;
