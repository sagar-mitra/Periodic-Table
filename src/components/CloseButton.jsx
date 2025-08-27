import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({handleCloseButton}) => {
  return (
    <div className="w-[350px] md:w-[700px] lg:max-w-[980px] lg:w-[980px] h-[40px] text-[var(--text-s)] mx-auto mb-2 flex justify-end ">
        <button
          onClick={handleCloseButton}
          className="group/close flex gap-1 items-center cursor-pointer"
        >
          <AiOutlineClose className="w-5 h-5 group-hover/close:text-[var(--text-p)] transition-all duration-300 " />
          <span className="text-[1rem]  group-hover/close:text-[var(--text-p)] transition-all duration-300 ">
            CLOSE
          </span>
        </button>
      </div>
  )
}

export default CloseButton