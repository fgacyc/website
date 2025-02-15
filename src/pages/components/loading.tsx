import React, { type FC } from "react";
import { Oval } from "react-loader-spinner";

interface LoadingProps {
  page_title: string;
}

const Loading: FC<LoadingProps> = ({ page_title }) => {
  return (
    <div
      className={
        "flex max-w-[1200px] flex-wrap-reverse items-center justify-around px-[50px] pt-[120px] text-[50px] sm:px-[200px]"
      }
    >
      <div
        className={`mb-[120px] flex flex-col 
        justify-center text-center text-[50px]
         font-bold leading-[50px] tracking-[-0.011em] sm:text-[60px] sm:leading-[60px]
         md:text-[80px] md:leading-[80px]   lg:mt-[40px] lg:text-left
          `}
      >
        <div className={"mb-[40px]"}>Redirecting</div>
        <div className={""}>to {page_title}</div>
      </div>
      <div className={"mb-10"}>
        <Oval
          visible={true}
          height="100"
          width="100"
          color="#00EDC2"
          secondaryColor="#3AFFAC"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          strokeWidth={4}
        />
      </div>
    </div>
  );
};

export default Loading;
