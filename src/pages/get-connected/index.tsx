import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function GetConnected() {
  return (
    <>
      <main className="overflow-x-hidden">
        <div className="bg-[#1d2129] text-white">
          <div className="flex flex-col items-center">
            <Image
              alt=""
              src={"/images/get-connected/banner.png"}
              width={1200}
              height={600}
              // width={100}
              // height={100}
              className="w-[90%] rounded-lg transition delay-150 duration-300 hover:-translate-y-7 md:w-[80%]"
            ></Image>
            <div className="absolute inset-0 ms-[15vw] mt-[3vw] sm:mt-[7.9vw]">
              <h3 className="w-[44vw] text-3xl font-bold sm:text-5xl md:w-[340px] md:text-6xl lg:w-[44vw] lg:text-8xl xl:text-9xl">
                Get Connected
              </h3>
              <h6 className="w-[35vw] text-[8px] sm:text-[10px] md:mt-1 md:w-[192px] lg:w-[35vw] lg:text-lg lg:leading-5 xl:text-xl">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.&quot;
              </h6>
            </div>
          </div>
          <div className="mt-[13vw]">
            <div>
              <div className="ms-[20vw] transition delay-150 duration-300 hover:-translate-y-7">
                <h3 className="w-[55vw] text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                  How to Get Connect?
                </h3>
                <h6 className="mt-[2vw] w-[52vw] text-[8px] sm:text-[10px] lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </div>
              <div className="flex w-full flex-col items-center">
                <Divider className="mb-[6vw] mt-[5vw] w-3/5 bg-white"></Divider>
              </div>
              {/* <div className="ms-[20vw] text-white">123123</div> */}
              <div className="ms-[20vw] flex">
                <h3 className="w-[34vw] text-3xl font-bold transition delay-150 duration-300 hover:-translate-y-7 sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
                  What is Connect Group?
                </h3>
                <div className="ms-[3.6vw] flex items-center">
                  <div>
                    <h6 className="mb-[3.33vw] w-[22vw] text-[8px] sm:text-[10px] lg:text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h6>
                    <button className="flex w-[30vw] items-center justify-between rounded-[35px] bg-[#00EDC2] px-2 py-1 text-[2.22vw] font-bold text-black sm:mt-5 sm:w-[27vw] sm:text-[10px] md:mt-0 lg:text-xl xl:px-10 xl:py-3.5">
                      Find a ConnectGroup{" "}
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className="ml-1 w-[2.9vw] sm:ml-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
