import Link from "next/link";

export const AboutLastBlock = () => {
  return (
    <div className="pb-10 w-10/12 mx-auto flex flex-col items-center gap-y-6 lg:text-left text-center">
      <h1 className="text-[30px] md:text-[50px] lg:text-[80px] text-center font-semibold leading-tight text-green-900">
        Get started
        <span className="font-bold text-black"> Now</span>
      </h1>
      <p className="text-black">
        If you would like to work with us or just want to get in touch,
        <span className="font-bold text-[#5b542b]">
          we’d love to hear from you!
        </span>
      </p>

      <Link href="/contact" className="flex justify-center lg:justify-start">
        <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
          <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
            <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-4 py-2 text-base md:text-xl font-semibold text-white">
              LET'S CONTACT
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
