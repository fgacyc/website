import Head from "next/head";
import Image from "next/image";

export default function MobileAppDownload() {
    const app_store_url = "https://apps.apple.com/my/app/fga/id6511250079"
    const google_play_url = "https://play.google.com/store/apps/details?id=com.fga.prod"

    function openAppStore() {
        window.location.href = app_store_url
    }
    function openGooglePlay() {
        window.location.href = google_play_url
    }

    return (
        <>
            <Head>
                <title>Mobile App Download | FGA CYC</title>
                <meta name="description" content="Generated by create-t3-app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="sf-pro-display flex flex-col pt-[68px]">
                <div className="mt-3 flex sm:mt-7 lg:mt-[100px] xl:mt-[140px]">
                    {/* <div className="flex w-[85%] sm:mt-7 lg:mt-[140px] lg:w-[70%]"> */}
                    {/* <div className="w-[46%] text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"> */}
                    <div className="absolute sm:ms-[16.875vw] sm:m-0 ml-4 mt-[5.56vw] text-[6.94vw] font-bold">
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
                        <div className="sm:hidden flex mt-4 justify-around ml-4">
                            <div className="sm:ms-[54.44vw] sm:mt-[3.2639vw] sm:w-[14.1vw] w-[150px]">
                                {/* <div className="ms-[54.44vw] mt-[5px] w-[14.1vw] sm:mt-2 md:mt-3 xl:mt-4 2xl:mt-[21px]"> */}
                                <Image
                                    alt=""
                                    src={"/images/mobile-app-download/app-store.png"}
                                    width={550 * 2}
                                    height={490 * 2}
                                    onClick={openAppStore}
                                ></Image>
                            </div>

                            <div className="sm:mb-[5.139vw] sm:mt-[2.1vw] sm:w-[18.125vw] w-[165px]">
                                <Image
                                    alt=""
                                    src={"/images/mobile-app-download/google-play.png"}
                                    width={261 * 2}
                                    height={103 * 2}
                                    onClick={openGooglePlay}
                                ></Image>
                            </div>
                        </div>
                        <div className="sm:flex hidden ms-[54.44vw] mt-6">
                            <img
                                alt=""
                                src={"/images/mobile-app-download/app-store.png"}
                                className={"w-[150px] cursor-pointer"}
                                onClick={openAppStore}
                            ></img>
                            <img
                                alt=""
                                src={"/images/mobile-app-download/google-play.png"}
                                className={"w-[150px] ml-2 cursor-pointer"}
                                onClick={openGooglePlay}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className={"h-10"}></div>
            </div>
        </>
    );
}
