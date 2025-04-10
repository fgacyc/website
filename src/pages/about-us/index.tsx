import Head from "next/head";
import ExperienceGallery from "~/components/ExperienceImages";

export default function AboutUs() {
  const hallowTxtStyle =
    "-1px -1px 0 #f8fafc, 1px -1px 0 #f8fafc, -1px 1px 0 #f8fafc, 1px 1px 0 #f8fafc";
  const coreValueTxtStyle =
    "text-sm sm:text-2xl lg:text-4xl -translate-y-4 sm:-translate-y-4 ";
  const coreValueNumStyle =
    "text-[#241F20] text-2xl sm:text-4xl lg:text-8xl -translate-y-3 sm:-translate-y-4 lg:-translate-y-7 border-t-8 border-white-500";

  return (
    <>
      <Head>
        <title>About Us | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden">
        {/* VISION && MISSION */}
        <div className="min-w-screen  h-120 relative flex w-screen items-center justify-center bg-[url('/images/about-us/About-us-top-bg.png')] bg-cover lg:h-screen">
          <div className="top-30 lg:top-50 absolute left-20 font-extrabold leading-10 sm:left-40 sm:top-40 lg:left-60	">
            <h1 className="text-2xl sm:text-4xl lg:text-7xl"> Our Vision </h1>
            <h1 className="sm:text-1xl my-1 text-sm lg:text-2xl">
              Antioch Church{" "}
              <span className="relative top-[5px] tracking-tighter lg:top-[10px]">
                &#x2015;&#x2015;
              </span>{" "}
            </h1>
            <h1 className="sm:text-1xl mb-5 text-sm lg:text-2xl">
              An apostolic and prophetic cell-based church{" "}
            </h1>

            <h1 className="my-2 text-2xl sm:text-4xl lg:text-7xl">& Mission</h1>
            <h1 className="mb-5 text-sm sm:text-2xl">
              100 strong local churches, 100,000 disciples.{" "}
            </h1>
          </div>
          {/* <Image
            src="/About-us-top-bg.png"
            alt="aboutUs"
            width={100}
            height={800}
            layout="responsive"
            className="min-w-0"
          /> */}
        </div>

        {/* CORE VALUE */}
        <div className="h-120  relative  w-screen bg-[url('/images/about-us/About-us-middle-bg.png')] bg-cover font-bold text-white lg:h-screen">
          <div className="absolute left-10 top-40 sm:top-40 md:left-10 lg:left-40 lg:top-80">
            <span className="text-2xl -tracking-[.25em] sm:text-5xl lg:text-8xl ">
              {" "}
            </span>
            <p
              className={coreValueNumStyle}
              style={{ textShadow: hallowTxtStyle }}
            >
              {" "}
              02{" "}
            </p>
            <h1 className={coreValueTxtStyle}> HUMILITY</h1>
          </div>

          <div className="absolute right-10 top-10 sm:right-20 sm:top-20 lg:right-40 lg:top-40">
            {/* <span className="-tracking-[.25em] text-2xl sm:text-5xl lg:text-8xl "> &#x2015; &#x2015;  &#x2015;</span> */}
            <p
              className={coreValueNumStyle}
              style={{ textShadow: hallowTxtStyle }}
            >
              {" "}
              01{" "}
            </p>
            <h1 className={coreValueTxtStyle}> PASSIONATE</h1>
          </div>

          <div className="text-1xl absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
            <div className="my-10">
              <h1 className="text-2xl sm:text-5xl lg:text-8xl">Core</h1>
              <h1 className="text-2xl sm:text-5xl lg:text-8xl">Values</h1>
            </div>

            <div className="m-0 ">
              {/* <span className="-tracking-[.25em] text-2xl sm:text-5xl lg:text-8xl hidden "> &#x2015;</span> */}
              <p
                className={coreValueNumStyle}
                style={{ textShadow: hallowTxtStyle }}
              >
                {" "}
                03{" "}
              </p>
              <h1 className={coreValueTxtStyle}> INTEGRITY</h1>
            </div>
          </div>
          {/* <Image
            src="/About-us-middle-bg.png"
            alt="about-middle-bg"
            width={100}
            height={600}
            layout="responsive"
          /> */}
        </div>

        <div className="text-1xl relative my-10  flex h-full w-full flex-col items-center justify-center font-extrabold">
          <h1 className="text-2xl sm:text-7xl"> The FGA Experience </h1>
        </div>

        <ExperienceGallery className="border-black text-black" />
      </main>
    </>
  );
}
