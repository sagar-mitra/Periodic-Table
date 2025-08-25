import { motion, transform, useMotionValue, useSpring, useTransform } from "framer-motion";

const InnerCard = ({ cardData }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left; // mouse X inside card
    const mouseY = e.clientY - rect.top; // mouse Y inside card

    const xPercentage = mouseX / width - 0.5;
    const yPercentage = mouseY / height - 0.5;

    x.set(xPercentage);
    y.set(yPercentage);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Destructure the details
  const {
    symbol,
    name,
    category,
    discoveredBy,
    discoveredYear,
    atomicNumber,
    secondCardBG,
    howToPronounce,
  } = cardData;
  return (
    // card wrapper
    <div className="w-[350px] h-[500px]">
      {/* card */}
      <motion.div
        style={{
          backgroundColor: secondCardBG,
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover={{scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full rounded-xl p-[30px] flex flex-col justify-between"
      >
        <div style={{transform: "translateZ(25px)"}} className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{symbol}</h2>

          <div className="border w-full opacity-20 " />

          <div>
            <h3 className="text-[2.5rem] font-bold tracking-tight">
              {name.toLowerCase()}
            </h3>
            <span className="text-sm font-bold opacity-50">
              {howToPronounce.toLowerCase()}
            </span>
          </div>

          <div className="border w-full opacity-20 " />

          <p className="text-[1.38rem] font-bold tracking-tight">{category}</p>
        </div>

        <div style={{transform: "translateZ(25px)"}} className="flex flex-col items-end gap-3">
          <div className="text-xl font-bold text-right tracking-tight">
            <h4>{discoveredYear}</h4>
            <p>{discoveredBy}</p>
          </div>

          <div className="border w-full opacity-20 " />

          <p className="text-[2.5rem] font-extralight">
            #<span className="font-bold">{atomicNumber}</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default InnerCard;


/* 
===============================
📌 TILT CARD EFFECT – SUMMARY
===============================
1. Created motion values (x, y) with springs for smooth animations.

2. Mapped mouse position to rotateX / rotateY using useTransform.
   - rotateX tilts card up/down based on Y.
   - rotateY tilts card left/right based on X.

3. Used handleMouseMove to calculate mouse position inside the card
   and convert it into a percentage offset (-0.5 → 0.5).

4. Reset tilt with handleMouseLeave.

5. Applied rotateX / rotateY styles to the motion.div with 
   transformStyle: "preserve-3d".

6. Added whileHover scale for subtle zoom effect.

7. Pushed inner content forward with translateZ(25px) so text/details
   "float" above the card background for extra depth.
===============================
*/