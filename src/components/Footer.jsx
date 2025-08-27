import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footer = useRef();

  const socialMedia = [
    {
      name: "GitHub",
      href: "https://github.com/sagar-mitra",
    },
    {
      name: "Twitter",
      href: "https://x.com/devwithsagar",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sagar-mitra19/",
    },
  ];
  return (
    <div
      ref={footer}
      className="lg:max-w-[1024px] lg:w-[1024px] xl:max-w-[1200px] xl:w-[1200px] 2xl:max-w-[1400px] 2xl:w-[1400px]  mx-auto pt-6 mt-20 pb-16 flex justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-3 border-t border-gray-600 font-(family-name:--font-sans) text-base lg:text-[1.25rem] text-[#c7c7c7]  "
    >
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        Developed with 💗 by Sagar
      </motion.div>

      <div className="flex gap-4">
        {socialMedia.map((item, index) => {
          return (
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "linear" }}
              key={index}
              className="group flex gap-4"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative"
              >
                <a className=" group-hover:text-[var(--text-p)]" href={item.href}>{item.name}</a>
                <motion.div
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-full h-[0.5px] bg-white bottom-0 left-0 origin-bottom"
                />
              </motion.div>
              {index !== socialMedia.length - 1 && <span>•</span>}
            </motion.div>
          );
        })}
      </div>

  
    </div>
  );
};

export default Footer;
