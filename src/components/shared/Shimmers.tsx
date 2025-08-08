"use client";

import React from "react";

interface ShimmerProps {
  className?: string;
}

const ShimmerEffect: React.FC<ShimmerProps> = ({ className }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer w-full h-full rounded-[20px]"></div>
    </div>
  );
};

interface ShimmerBlogCardProps {
  height?: string;
}

export const ShimmerBlogCard: React.FC<ShimmerBlogCardProps> = ({
  height = "h-[300px] md:h-[350px]",
}) => {
  return (
    <div className="flex flex-col w-full">
      <ShimmerEffect
        className={`w-full ${height} rounded-[20px] overflow-hidden`}
      />
      <div className="flexStart my-5 gap-x-4">
        <ShimmerEffect className="h-4 w-20" />
        <ShimmerEffect className="h-4 w-24" />
      </div>
      <ShimmerEffect className="h-8 w-3/4 mb-3" />
      <ShimmerEffect className="h-20 w-full my-3" />
      <ShimmerEffect className="h-10 w-32 mt-4 rounded-full" />
    </div>
  );
};

export const ShimmerSidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-6">
      <div className="bg-white rounded-[20px] p-4 lg:p-7 flex flex-col">
        <ShimmerEffect className="h-6 w-32 mb-3" />
        <div className="border-t border-[#E3DBD8]/60 my-3"></div>
        <ShimmerEffect className="h-12 w-full rounded-full mt-4" />
      </div>

      <div className="bg-white rounded-[20px] p-4 lg:p-7 flex flex-col">
        <ShimmerEffect className="h-6 w-32 mb-3" />
        <div className="border-t border-[#E3DBD8]/60 my-3"></div>
        <div className="flex flex-col gap-y-5 mt-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-x-3">
              <ShimmerEffect className="w-16 h-16 rounded-[20px]" />
              <div className="flex flex-col flex-1">
                <ShimmerEffect className="h-4 w-20 mb-2" />
                <ShimmerEffect className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[20px] p-4 lg:p-7 flex flex-col">
        <ShimmerEffect className="h-6 w-32 mb-3" />
        <div className="border-t border-[#E3DBD8]/60 my-3"></div>
        <div className="flex flex-col gap-y-5 mt-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <ShimmerEffect key={item} className="h-4 w-full" />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[20px] p-4 lg:p-7 flex flex-col">
        <ShimmerEffect className="h-6 w-32 mb-3" />
        <div className="border-t border-[#E3DBD8]/60 my-3"></div>
        <div className="flex flex-wrap gap-2 mt-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ShimmerEffect key={item} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

const ShimmerNewsUpdates: React.FC = () => {
  return (
    <div className="w-full grid md:grid-cols-3 gap-3 lg:gap-7 mt-8 md:mt-14">
      <div className="md:col-span-2 flex flex-col gap-y-10">
        {[1, 2, 3].map((item) => (
          <ShimmerBlogCard key={item} />
        ))}
      </div>
      <div className="md:col-span-1">
        <ShimmerSidebar />
      </div>
    </div>
  );
};

export default ShimmerNewsUpdates;