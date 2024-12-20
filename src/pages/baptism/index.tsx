import { Button } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import BaptismAccordion from "~/components/BaptismAccordion";
import Form from "~/components/Form/Form";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Baptism() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [screenHeightClass, setScreenHeightClass] = useState("h-screen");
  // const wayWeGiveClassStyle = "w-screen bg-[url('/images/about-us/About-us-middle-bg.png')] bg-cover  sm:max-md:flex lg:flex " + screenHeightClass;

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      setScreenHeightClass(
        windowHeight < 700 && windowWidth >= 1000 ? "h-screen-lg" : "h-screen"
      );
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/*  items-center justify-center */}
      <Head>
        <title>Baptism | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden pt-[68px]">
        <div
          className={
            "min-w-screen relative flex w-screen items-center justify-center bg-[url('/images/baptism/baptism-top-bg.png')] bg-cover " +
            screenHeightClass
          }
        >
          <div className=" z-10 pl-2 leading-10 sm:pl-20 xl:pr-40">
            <h1 className="my-1 mb-5 text-5xl font-bold md:text-5xl lg:text-8xl xl:text-9xl">
              {" "}
              The{" "}
            </h1>
            <h1 className="my-1 mb-5 text-5xl font-bold md:text-5xl lg:text-8xl xl:text-9xl">
              {" "}
              old life
            </h1>
            <h1 className="my-1 mb-5 text-5xl font-bold md:text-5xl lg:text-8xl xl:text-9xl">
              {" "}
              is gone.
            </h1>
            <h3 className="lg:text-1xl my-1	 mb-5 text-lg font-medium md:text-lg xl:text-2xl">
              The Bible teaches that we should be baptized in water in the name
              <br />
              of the Father, the Son and of the Holy Spirit. We believe in water
              <br />
              baptism because Jesus himself modeled it for us.{" "}
            </h3>
            <Image
              src="/images/baptism/baptise-img-1.png"
              alt="aboutUs"
              width={550}
              height={0}
              priority={true}
              layout=""
              className="xl:w[-350px] absolute right-0 top-10 mr-5 w-[180px] min-w-0 sm:w-[350px]  xl:right-40 2xl:w-[450px]"
            />

            <Image
              src="/images/baptism/baptise-img-2.png"
              alt="aboutUs"
              width={550}
              height={0}
              priority={true}
              layout=""
              className="absolute bottom-10 right-0 w-[70px] min-w-0  md:w-[150px] xl:w-[100px] 2xl:w-[150px]"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="min-w-screen relative flex max-h-[900px] w-full items-center justify-center lg:h-screen">
          <div className="w-full leading-10 lg:w-10/12">
            <BaptismAccordion />
          </div>
        </div>
        <div className="m-4 flex justify-center">
          <Button
            color="success"
            id="baptiseBtn"
            onClick={() => {
              setOpenForm(true);

              setTimeout(() => {
                document
                  .getElementById("sectionRef")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }}
            className="mt-5 w-[200px] rounded-full bg-[#1FC4CF] px-5 py-3 text-lg font-bold text-white lg:w-72 lg:text-lg"
          >
            I want to be baptised &nbsp;
            <ArrowLongRightIcon className="size-10 w-24 " />
          </Button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        {openForm ? (
          <div
            id="sectionRef"
            className="bg-[url('/images/baptism/baptise-form-bg.png')] bg-cover pt-5 xl:px-20 xl:py-10"
          >
            {" "}
            <Form />{" "}
          </div>
        ) : null}
      </main>
    </>
  );
}
