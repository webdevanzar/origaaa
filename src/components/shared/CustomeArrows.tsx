import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowProps {
  onClick?: () => void;
}

export const CustomPrevArrow = (props: any) => {
  const { className, onClick, currentSlide } = props;
  const disabled = currentSlide == 0;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 ${
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

export const CustomNextArrow = (props: any) => {
  const {
    className,
    onClick,
    currentSlide,
    slideCount,
    slidesToShow = 3,
  } = props;

  const disabled = currentSlide >= slideCount - slidesToShow;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg  flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 ${
        disabled
          ? "opacity-30 "
          : "opacity-100"
      }`}
    >
      <FaArrowRight size={20} />
    </button>
  );
};
