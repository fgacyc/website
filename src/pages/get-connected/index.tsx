import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function GetConnected() {
  return (
    <>
      <main className="">
        <div className="bg-[#1d2129] text-white">
          <div className="flex flex-col items-center">
            <Image
              alt=""
              src={"/images/get-connected/banner.png"}
              width={1200}
              height={600}
              // width={100}
              // height={100}
              className="w-[80%] rounded-lg transition delay-150 duration-300 hover:-translate-y-7"
            ></Image>
            <div className="absolute inset-0 ms-64 mt-28">
              <h3 className="w-[600px] text-9xl font-bold">Get Connected</h3>
              <h6 className="w-[350px] text-xl">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation."
              </h6>
            </div>
          </div>
          <div className="mt-[150px] flex flex-col items-center">
            <div className="w-[929px]">
              <div className="w-[787px] transition delay-150 duration-300 hover:-translate-y-7">
                <h3 className="text-9xl font-bold">How to Get Connect?</h3>
                <h6 className="mt-[28px] text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </div>
              <Divider className="mb-[88px] mt-[73px] bg-white"></Divider>
              <div className="flex">
                <h3 className="text-9xl font-bold transition delay-150 duration-300 hover:-translate-y-7">
                  What is Connect Group?
                </h3>
                <div className="ms-[52px] flex items-center text-xl">
                  <div>
                    <h6 className="mb-12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h6>
                    <button className="mt-5 flex items-center justify-between rounded-[35px] bg-[#00EDC2] px-10 py-3.5 font-bold text-black md:mt-0">
                      Find a ConnectGroup{" "}
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className="ml-3"
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
