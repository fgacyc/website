import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArrowLink from "~/components/ArrowLink";
import ExperienceGallery from "~/components/ExperienceImages";

const HomeSection1 = () => {
  return (
    <section className="relative flex h-screen w-full items-center bg-[url(/images/landing/bg_landing_1.png)] bg-cover text-white">
      <div className="pl-[30px] sm:pl-[59px] md:pl-[165px] lg:pl-[243px]">
        <h4>/ FGA CYC</h4>
        <h1 className="mt-[25px] font-bold sm:mt-[53px]">
          Welcome
          <br />
          Home
        </h1>
      </div>
      <div className="absolute bottom-0 right-[30px] top-[80%] w-[1px] -translate-y-[70px] transform sm:right-[59px] sm:-translate-y-[115px]">
        {/* todo: get sf pro display thin */}
        <p className="-rotate-90 whitespace-nowrap font-thin uppercase tracking-widest">
          SCROLL TO BEGIN YOUR JOURNEY
        </p>
        <div className="mt-4 w-[1px]">
          <div className="h-[27px] bg-[#919191]"></div>
          <div className="h-[62px] bg-white"></div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-[85%] z-[1] flex h-[165px] w-[295px] -translate-x-1/2 transform 
          flex-col items-center justify-center bg-[#703fd1] sm:h-[310px] sm:w-[550px] md:h-[390px] md:w-[700px] lg:h-[531px]
          lg:w-[954px]"
      >
        <iframe
          className="h-full w-full px-7 py-5 sm:px-14 sm:py-10 lg:px-24 lg:py-14"
          src="https://www.youtube.com/embed/fb8KBFs6bEg?si=VOkdLU_5LJcZD8L2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
};

const HomeSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 sm:py-[73px]">
      <div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`sf-pro-family user-select-none text-center text-[44px] font-bold uppercase leading-none sm:text-7xl md:text-8xl lg:text-9xl xl:text-[170px] ${
              index === 3 ? "text-black" : "text-white"
            } truncate drop-shadow-[0_0.35px_0.35px_rgba(0,0,0,1)] sm:drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]`}
          >
            Get Connected
          </div>
        ))}
      </div>
      <ArrowLink
        href="/get-connected"
        text="GET CONNECTED"
        bg_color="bg-[#3AFFAC]"
        arrow_color="black"
        className="absolute mt-[42px] h-[50px] rounded-[90px] px-[30px] sm:mt-[72px] sm:h-[75px] sm:px-[55px] 
                  md:mt-[95px] md:h-[100px] md:px-[65px] lg:mt-[125px] xl:mt-[170px] xl:h-[132px]"
      />
    </section>
  );
};

const HomeSection3 = () => {
  return (
    <section
      className="flex min-h-screen flex-col justify-center bg-[url(/images/landing/bg_landing_3.png)] 
  bg-cover py-[169px] text-white"
    >
      <h1 className="mx-[30px] mb-[62px] font-bold sm:mx-[59px] md:mx-[165px] lg:mx-[243px]">
        The FGA Experience
      </h1>
      <ExperienceGallery className="border-[#3AFFAC] text-white" />
      <div className="mx-[30px] mt-[135px] sm:mx-[59px] md:mx-[165px] lg:mx-[243px]">
        <h1 className="font-bold">Our Vision</h1>
        <div className="mt-1.5 w-[270px] font-bold leading-tight sm:w-[530px] md:w-[463px] lg:w-[602px] xl:w-[805px]">
          <h4>Antioch Church —</h4>
          <h4>An apostolic and prophetic cell-based church.</h4>
        </div>
        <div
          className="relative mt-10 h-[180px] w-[270px] rounded-bl-[35px] border-[6px] border-[#00EDC2] 
    sm:mt-[80px] sm:h-[353px] sm:w-[530px] sm:rounded-bl-[60px] sm:border-[12px] md:h-[309px] md:w-[463px]
    md:rounded-bl-[70px] lg:h-[401px] lg:w-[602px] lg:rounded-bl-[96px] xl:h-[541px] xl:w-[805px]"
        >
          <Image
            src="/images/landing/our_vision.png"
            alt="Our Vision Image"
            width={804}
            height={536}
            className="absolute bottom-[10.5px] left-[10px] sm:bottom-[18.5px] sm:left-[18px] md:bottom-[29px] md:left-[28px]"
          />
          <ArrowLink
            href="/locations"
            text="Visit FGA"
            text_color="text-black"
            arrow_color="black"
            bg_color="bg-[#00EDC2]"
            className="absolute bottom-[18px] right-[-60px] h-[50px] rounded-[50px] px-[30px] sm:bottom-[30px] sm:h-[75px] sm:px-[55px]
                      md:bottom-[40px] md:right-[-140px] md:mt-[95px] md:h-[100px] md:px-[65px] lg:bottom-[65px] lg:right-[-160px]"
          />
        </div>
      </div>
    </section>
  );
};

const HomeSection4 = () => {
  return (
    <section className="my-[92px]">
      <div className="flex flex-col px-[30px] sm:pl-[59px] md:pl-[165px] lg:pl-[243px] xl:flex-row xl:pr-0">
        <div className="relative ml-[12px] h-[474px] w-[316px] sm:h-[748px] sm:w-[498px]">
          <div
            className="absolute bottom-0 right-0 z-0 h-[326px] w-[184px] rounded-br-[60px] border-[12px]
        border-[#00EDC2] sm:h-[551px] sm:rounded-br-[83px]"
          ></div>
          <Image
            src={"/images/landing/our_pastor.png"}
            alt={"Our Pastor Image"}
            width={498}
            height={748}
            className="absolute bottom-[12px] right-[12px] z-10"
          />
        </div>
        <div className="xl:px-0">
          <div className="relative z-20 mt-10 flex font-bold xl:ml-[-173px] xl:mt-0">
            <h1 className="xl:text-white">Ou</h1>
            <h1>r Pastors</h1>
          </div>
          <h6 className="mt-[52px] sm:w-[491px] xl:ml-[49px] xl:w-[425px] 2xl:w-[491px]">
            Ps Jonathan and Priscilla carry a vision and a burning heart to see
            generations being transformed by the love and power of God.
            <br />
            <br />
            <br />
            Upon receiving a mandate from God to win Malaysia for Jesus 18 years
            ago, they planted themselves in FGA and started a revival movement.
            Since then, what started as a 50 people youth gathering grew into a
            multi-generational and multi-location church of 3,000 strong.
          </h6>
        </div>
      </div>

      <hr className="mx-auto mb-[57px] mt-[67px] w-4/5 border-[3px] border-[#919191]" />

      <div className="relative mx-auto h-[575px] w-4/5 xl:h-[360px]">
        <div className="absolute bottom-[-12px] right-[-12px] z-0 h-[575px] w-[300px] rounded-br-[88px] border-[12px] border-[#00EDC2] md:w-[405px] xl:h-[360px]"></div>
        <div className="relative z-10 flex h-full w-full flex-col justify-center rounded-br-[70px] bg-[#241F20] pl-[60px] text-white">
          <h1 className="mr-[30px] font-bold">Ways We Give</h1>
          <h6 className="mr-[30px] mt-[20px]">
            Offering our finances to God is our worship to Him.
          </h6>
          <Link href={"/giving"} className="mt-[33px] w-[194px]">
            <h5 className="flex items-center justify-between border-b-[3px] border-[#00EDC2] pb-1.5 font-bold text-[#00EDC2]">
              Give Now{" "}
              <svg
                width="44"
                height="24"
                viewBox="0 0 44 24"
                fill="#00EDC2"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
                  fill="#00EDC2"
                />
              </svg>
            </h5>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>FGA CYC</title>
        <meta name="description" content="FGA CYC Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sf-pro-display pt-[68px overflow-x-hidden">
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </main>
    </>
  );
}
