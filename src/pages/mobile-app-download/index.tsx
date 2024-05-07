import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function MobileAppDownload() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-[140px] flex w-[85%] lg:w-[70%]">
          <div className="w-[46%] text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Looking for your church?
            <div className="mt-1 text-[10px] font-normal sm:text-xs lg:mt-[35px] lg:text-xl">
              Get the FGA App now.
            </div>
          </div>
          <div className="w-[55%]">
            <div>
              <Image
                alt=""
                src={"/images/mobile-app-download/phone.png"}
                width={550}
                height={490}
              ></Image>
            </div>
            <div className="ms-6 flex lg:ms-[80px]">
              <div className="mt-[6px] w-1/2 sm:mt-2 md:mt-3 lg:mt-[21px] lg:w-[203px]">
                <Image
                  alt=""
                  src={"/images/mobile-app-download/app-store.png"}
                  width={203}
                  height={68}
                ></Image>
              </div>

              <div className="w-[60%]">
                <Image
                  alt=""
                  src={"/images/mobile-app-download/google-play.png"}
                  width={261}
                  height={103}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
