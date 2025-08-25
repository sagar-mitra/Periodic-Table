import { useState } from "react";
import CloseButton from "./CloseButton";
import InnerCard from "./InnerCard";
import Information from "./Information";

const ElementCard = ({ setCardClicked, cardData }) => {
  const [close, setClose] = useState(false);

  const handleCloseButton = () => {
    setClose(true);
    setCardClicked(false);
  };

  const { textColor, cardBG } = cardData;

  return (
    <div
      className={`bg-[#121212]/80  max-w-[1400px] w-full max-h-screen p-4 flex flex-col items-center justify-center fixed inset-0 mx-auto z-10 ${
        close && "hidden"
      }`}
      onClick={handleCloseButton}
    >
      {/* Close Button */}
      <CloseButton handleCloseButton={handleCloseButton} />

      <div
        style={{ backgroundColor: cardBG, color: textColor }}
        className="max-w-[980px] w-[980px] h-[620px] font-(family-name:--font-inter) rounded-2xl p-[60px] flex items-center justify-between "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner Card  */}
        <InnerCard cardData={cardData} />

        {/* Information */}
        <Information cardData={cardData} />
      </div>
    </div>
  );
};

export default ElementCard;

/**
 *  "fixed inset-0 flex items-center justify-center" → centers card on screen regardless of scroll.
 *  "inset-0" means top-0, bottom-0, right-0; left-0
 *
 *  Best semantic choice for information → <dl> (description list) with <dt> (term/label) and <dd> (definition/value).
 *
 *  onClick on the overlay closes the modal.
 *  onClick={(e) => e.stopPropagation()} on the card prevents the modal from closing if you click inside it.
 */
