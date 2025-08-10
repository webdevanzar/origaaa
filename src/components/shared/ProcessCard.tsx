interface ProcessCardProps {
  step: number;
  duration: string;
  title: string;
  description: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

export const ProcessCard = ({
  step,
  duration,
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
}: ProcessCardProps) => {
  return (
    <div className="px-3 cursor-pointer">
      {/* ${gradientFrom} ${gradientTo} backdrop-blur-sm */}
      <div
        //  bg-[#ffffff33] border border-white
        className={`relative liquid-glass-bg  h-96 rounded-2xl p-8  transition-all duration-300 hover:transform hover:scale-105`}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
          <span className="text-2xl">{icon}</span>
        </div>

        {/* Step info */}
        <div className="mb-4">
          <span className="text-orange-400 font-semibold text-sm">
            Step {step}
          </span>
          <span className="text-white/60 ml-2 text-sm">{duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>

        {/* Description */}
        <p className="text-white text-sm leading-relaxed overflow-y-auto">
          {description}
        </p>
      </div>
    </div>
  );
};
