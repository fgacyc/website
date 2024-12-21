import Head from "next/head";
import Image from "next/image";

export default function MobileAppDownload() {
  return (
    <>
      <Head>
        <title>Mobile App Download | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sf-pro-display flex flex-col pt-[68px]">
        <div className="mt-3 flex sm:mt-7 lg:mt-[100px] xl:mt-[140px]">
          {/* <div className="flex w-[85%] sm:mt-7 lg:mt-[140px] lg:w-[70%]"> */}
          {/* <div className="w-[46%] text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"> */}
          <div className="absolute ml-4 mt-[5.56vw] text-[6.94vw] font-bold sm:m-0 sm:ms-[16.875vw]">
            <div>Church</div>
            <div>in the palm</div>
            <div>of your hands.</div>
            <div className="mt-1 text-[14px] font-normal sm:mt-3 sm:text-[18px]  md:mt-4 lg:mt-[2vw]">
              {/* <div className="mt-1 text-[10px] font-normal sm:text-xs lg:mt-[35px] lg:text-xl"> */}
              Get the FGA App now.
            </div>
          </div>
          <div>
            <div className="ms-[48.6vw] w-[38.2vw]">
              <Image
                alt=""
                src={"/images/mobile-app-download/phone.png"}
                width={550 * 2}
                height={490 * 2}
              ></Image>
            </div>
            <div className="ml-4 mt-4 flex justify-around sm:hidden">
              <div className="w-[150px] sm:ms-[54.44vw] sm:mt-[3.2639vw] sm:w-[14.1vw]">
                {/* <div className="ms-[54.44vw] mt-[5px] w-[14.1vw] sm:mt-2 md:mt-3 xl:mt-4 2xl:mt-[21px]"> */}
                <Image
                  alt=""
                  src={"/images/mobile-app-download/app-store.png"}
                  width={550 * 2}
                  height={490 * 2}
                ></Image>
              </div>

              <div className="w-[165px] sm:mb-[5.139vw] sm:mt-[2.1vw] sm:w-[18.125vw]">
                <Image
                  alt=""
                  src={"/images/mobile-app-download/google-play.png"}
                  width={261 * 2}
                  height={103 * 2}
                ></Image>
              </div>
            </div>
            <div className="ms-[54.44vw] mt-6 hidden sm:flex">
              <img
                alt=""
                src={"/images/mobile-app-download/app-store.png"}
                className={"w-[150px]"}
              ></img>
              <img
                alt=""
                src={"/images/mobile-app-download/google-play.png"}
                className={"ml-2 w-[150px]"}
              ></img>
            </div>
          </div>
        </div>
        <div className={"h-10"}></div>
      </div>
    </>
  );
}
