import { ClientLogoType } from "@/app/page";
import Image from "next/image";


interface LogoScrollerProps {
  logos: ClientLogoType[];
  className?: string;
}

export const LogoScroller = ({ logos, className = "" }: LogoScrollerProps) => {
  return (
    <>
      {[0, 1].map((_, i) => (
        <div
          key={i}
          className={`flex items-center gap-x-14 ${className}`}
        >
          {logos.map((logo, index) => (
            <div
              key={`${i}-${index}`}
              className="relative flex bg-white rounded-full justify-center items-center w-[88px] h-[88px] p-[15px] border border-gray-500"
            >
              <Image
                src={logo.logo}
                alt={logo.alt as string}
                width={88}
                height={88}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
