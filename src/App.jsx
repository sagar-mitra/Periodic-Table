import React from "react";
import PeriodicTable from "./components/PeriodicTable";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="max-w-screen min-h-screen bg-[#121212] ">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay:0.2, ease:"linear" }}
        className=" lg:w-[1024px] 2xl:w-[1400px] mx-auto pt-10 lg:pt-24"
      >
        {/* Heading  */}
        <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-md:px-4 max-lg:px-20">
          <h1 className="text-[#e0e0e0] text-3xl md:text-4xl 2xl:text-[40px] font-(family-name:--font-inter) tracking-wide">
            the
            <span className="ml-2 font-(family-name:--font-dm) italic tracking-normal">
              periodic table
            </span>
          </h1>

          <div className="w-[60%] lg:h-20 lg:w-3 max-lg:border-t md:border-r border-[#2a2a2a]"></div>

          <div className="w-full lg:w-[40rem] 2xl:w-[53rem] px-2">
            <p className="text-[#c7c7c7] text-base md:text-lg max-lg:text-center 2xl:text-xl lg:leading-6 2xl:leading-normal ">
              The periodic table is a tabular arrangement of chemical elements,
              organized by atomic number, electron configuration, and recurring
              chemical properties, providing a framework for understanding the
              relationships and trends among elements.
            </p>
          </div>
        </div>
      </motion.div>

      <PeriodicTable />

      <Footer />
    </div>
  );
};

export default App;
