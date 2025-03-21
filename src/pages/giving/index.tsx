import Head from "next/head";
import { useEffect, useState } from "react";
import GivingAccordion from "src/components/GivingAccordion";
import { Button } from "@nextui-org/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function AboutUs() {
  const [screenHeightClass, setScreenHeightClass] = useState("h-screen-lg");
  const wayWeGiveClassStyle =
    "w-screen bg-[url('/images/about-us/About-us-middle-bg.png')] bg-cover  sm:max-md:flex lg:flex " +
    screenHeightClass;

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      setScreenHeightClass(
        (windowHeight < 700 && windowWidth >= 1000) ||
          (windowHeight < 750 && windowWidth < 600)
          ? "h-screen-lg pt-10"
          : "h-screen"
      );

      console.log("screenHeightClass : ", screenHeightClass);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenHeightClass]);

  return (
    <>
      {/*  items-center justify-center */}
      <Head>
        <title>Giving | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden pt-[68px]">
        <div className="min-w-screen  h-120  relative flex w-screen items-center justify-around bg-[url('/images/giving/giving-top-bg.png')] bg-cover lg:h-screen">
          <div className="p-4 font-bold  leading-10 ">
            <h1 className="mb-5 text-xl  md:text-3xl lg:text-5xl xl:text-5xl ">
              {" "}
              A generous person will prosper;{" "}
            </h1>
            <h1 className="my-1 mb-5 text-3xl md:text-5xl lg:text-8xl xl:text-8xl">
              {" "}
              Whoever refreshes
            </h1>
            <h1 className="my-1 mb-5 text-3xl md:text-5xl lg:text-8xl xl:text-8xl">
              {" "}
              Others will be
            </h1>
            <h1 className="mb-5 text-3xl md:text-5xl lg:text-8xl xl:text-8xl">
              {" "}
              refreshed.
            </h1>
            <br />
            <h1 className="mb-5 text-xl md:text-3xl lg:text-4xl xl:text-4xl ">
              Proverbs 11:25{" "}
            </h1>
          </div>
          <div className="flex-none"></div>
        </div>

        <div className=" font-bold text-white">
          <div className={wayWeGiveClassStyle}>
            <div className="xl:mt-44">
              <div className="pl-2 sm:pl-24 xl:mx-24 xl:mt-0 2xl:mx-60 ">
                <div className=" xs:max-md:text-lg pt-20 text-5xl lg:text-9xl xl:pt-0">
                  Ways <br></br> We <br />
                  Give
                  <br />
                </div>
              </div>
            </div>
            <div className="mt-20 w-11/12 xl:mt-44 xl:w-128">
              <GivingAccordion />
            </div>
          </div>
        </div>

        <div className="min-w-screen relative mt-10 w-screen  flex-row items-center justify-center overflow-hidden ">
          <h1 className="lg:text-1xl text-md my-10 justify-center text-center font-bold sm:text-4xl">
            {" "}
            Why Should I tithe?{" "}
          </h1>
          <h1 className="lg:text-1xl text-md my-5 text-center font-bold  sm:text-4xl">
            When you tithe, you’re trusting God with your finances.
          </h1>
          <div className="flex justify-center">
            <p className="lg:text-1xl mb-10 w-screen p-3 text-center text-sm leading-10 sm:text-2xl lg:w-1/2">
              Tithing is a biblical principle. God calls us to give the first
              10% of our income back to Him. We’ve seen God provide abundantly
              in our church, and we know He will provide abundantly for you and
              your family when you put Him first in your finances. In fact, it’s
              the one area in the Bible where God tells you to test Him.
              <br />
              <br />
              Malachi 3:10, God tells us to bring tithe, which is 10% of our
              income, to Him. Later, Jesus affirms this in the New Testament.
            </p>
          </div>
        </div>

        {/* #D9D9D9 */}
        <div className="min-w-screen relative w-screen  items-center justify-center overflow-hidden bg-[#D9D9D9] pb-20 text-center">
          <br />
          <br />
          <h1 className="mt-10 text-3xl font-bold xl:text-8xl ">Need Help?</h1>
          <h1 className="mt-5 text-lg xl:text-xl">
            If you’ve got questions about what you can give and how to give it,
            we’d love to help you figure it out.{" "}
          </h1>

          <Button className=" rounded-none border-b-4	border-b-black bg-[#D9D9D9] p-5">
            <h1 className="  inline-block text-2xl font-bold">
              {" "}
              <a href="mailto:info@fgacyc.com">Let&apos;s Talk </a>
              <ArrowLongRightIcon className="inline-block size-10 w-5" />{" "}
            </h1>
          </Button>
        </div>
      </main>
    </>
  );
}
