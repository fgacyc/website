import Image from "next/image";
import Head from "next/head";
import { locations } from "../../data/locations";
import Location from "~/components/Location";
import Link from "next/link";

export default function Locations() {
  return (
    <>
      <Head>
        <title>Visit FGA | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sf-display-pro overflow-x-hidden">
        <div>
          {/* First section - black bg */}
          <div className="h-[40vw] bg-[#1d2129]"></div>
          {/* <div className="h-52 bg-[#1d2129] sm:h-[320px] md:h-[350px] xl:h-[625px]"></div> */}

          {/* absolute-positioned banner */}
          <div className="absolute top-0 mx-[8%] mt-[15%] flex flex-col items-center sm:mx-[6%] sm:mt-[10%]">
            <Image
              alt=""
              src={"/images/locations/banner.png"}
              width={1258}
              height={622}
              className="rounded-lg"
            ></Image>
            <div className="absolute left-[9%] mt-5 text-white sm:left-14 sm:mt-12 md:left-[60px] lg:left-[8.4vw] lg:mt-[6vw]">
              <h3 className="sf-pro-display w-[30vw] text-2xl font-bold leading-6 sm:w-[230px] sm:text-5xl md:w-[300px] md:text-6xl lg:w-[470px] lg:text-8xl xl:w-[45vw] xl:text-9xl">
                We can&apos;t wait to meet you
              </h3>
              <h6 className="mt-2 text-[8px] sm:text-[10px] md:mt-4 lg:mt-5 lg:text-xl">
                It would be an absolute joy to encounter God and experience
                church together with you.
              </h6>
            </div>
          </div>

          {/* Locations */}
          <div className="mb-20 lg:mb-[28vw]">
            <div className="ms-10 mt-[18vw] sm:ms-36 sm:mt-36 lg:ms-[20vw] lg:mt-40 xl:mt-60">
              <div className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                Locations
              </div>

              <table className="mt-7 lg:mt-16 xl:mt-28">
                <tbody>
                  {locations.map((l) => {
                    return (
                      <>
                        <Location
                          name={l.name}
                          addr={l.addr}
                          services={l.services}
                        ></Location>
                      </>
                    );
                  })}
                </tbody>
              </table>

              {/* <div className="mt-7 lg:mt-16 xl:mt-28">
                {locations.map((l) => {
                  return (
                    <>
                      <div className="mt-3 border-2 border-solid lg:mt-8 xl:mt-11">
                        <Location
                          key={l.name}
                          name={l.name}
                          addr={l.addr}
                          services={l.services}
                        ></Location>
                      </div>
                    </>
                  );
                })}
              </div> */}
            </div>
          </div>

          {/* Our Pastor */}
          <div className="relative bg-[#1d2129] pb-9 ps-10 pt-12 text-white sm:pb-64 lg:ps-[20vw] lg:pt-36 xl:pb-[30vw] 2xl:pb-[35vw]">
            <div className="absolute -top-14 right-5 w-[45%] lg:right-20 lg:top-[-222px] 2xl:w-2/5">
              <div className="relative flex w-full justify-end">
                <Image
                  src={"/images/locations/CG.png"}
                  width={627 * 2}
                  height={418 * 2}
                  alt={""}
                  className="z-10 rounded-bl-[22px] lg:rounded-bl-[50px]"
                />
                <div className="absolute -left-2 top-2 z-0 h-full w-full rounded-bl-[30px] border-3 border-solid border-[#00edc2] md:rounded-bl-[6vw] lg:-left-7 lg:top-6 lg:rounded-bl-[80px] lg:border-[12px] xl:rounded-bl-[90px]"></div>
              </div>
            </div>
            <div>
              <div className="w-2/5 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                We&apos;re expecting you!
              </div>
              <div className="sf-display-pro mt-3 w-[41vw] text-[8px] sm:text-[10px] lg:mt-7 lg:text-xl">
                Not sure how to make your way to any of our service locations?
                Our team is ready to help you get your way here with ease.
              </div>
            </div>
            <div className="relative mt-10 flex lg:mt-[151px]">
              <div className="absolute w-[125px] sm:w-[260px] lg:w-[35vw]">
                <Image
                  alt=""
                  src={"/images/locations/pastor.png"}
                  width={498 * 2}
                  height={748 * 2}
                ></Image>
              </div>
              <div className="absolute left-[88px] top-1 text-3xl font-bold sm:left-[174px] sm:top-5 sm:text-5xl md:text-6xl lg:left-[23vw] lg:text-8xl xl:text-9xl">
                Our Pastor
              </div>
              {/* <div className="absolute left-[74px] top-[55px] h-[137px] w-[55px] rounded-br-[28px] border-b-4 border-r-4 border-solid border-[#00edc2] sm:left-[172px] sm:top-[108px] sm:h-[290px] sm:w-[96px] sm:rounded-br-[44px] sm:border-b-[8px] sm:border-r-[8px] lg:left-[23vw] lg:top-[16vw] lg:h-[38vw] lg:w-[13vw] lg:rounded-br-[85px] lg:border-b-[16px] lg:border-r-[16px] xl:top-[213px] xl:h-[551px]"></div> */}
              <div className="absolute left-[74px] top-[55px] h-[137px] w-[55px] rounded-br-[28px] border-b-4 border-r-4 border-solid border-[#00edc2] sm:left-[172px] sm:top-[108px] sm:h-[290px] sm:w-[96px] sm:rounded-br-[44px] sm:border-b-[8px] sm:border-r-[8px] lg:left-[23vw] lg:top-[15.5vw] lg:h-[38.3vw] lg:w-[13vw] lg:rounded-br-[85px] lg:border-b-[16px] lg:border-r-[16px] xl:rounded-br-[90px] xl:border-b-[18px] xl:border-r-[18px] 2xl:rounded-br-[110px] 2xl:border-b-[20px] 2xl:border-r-[20px]"></div>

              <div className="me-4 ms-36 mt-12 w-auto text-[8px] sm:me-16 sm:ms-[300px] sm:mt-28 sm:text-[10px] lg:ms-[40vw] lg:mt-[14vw] lg:text-xl xl:mt-52">
                Ps Jonathan and Priscilla carry a vision and a burning heart to
                see generations being transformed by the love and power of God.
                <br />
                <br />
                Upon receiving a mandate from God to win Malaysia for Jesus 18
                years ago, they planted themselves in FGA and started a revival
                movement. Since then, what started as a 50 people youth
                gathering grew into a multi-generational and multi-location
                church of 3,000 strong.
              </div>
            </div>
          </div>

          {/* WK */}
          <div className="relative ms-10 mt-8 flex pb-8 lg:ms-[13.4vw] lg:mt-[100px] lg:pb-12">
            <div>
              <div className="w-[43%] text-3xl font-bold sm:text-5xl md:text-6xl lg:w-[400px] lg:text-8xl xl:text-9xl">
                What about my kids?
              </div>
              <div className="mt-[7px] w-2/5 text-[8px] sm:text-[10px] md:text-xl lg:mt-7 lg:w-[35vw]">
                We provide a full kids program for your child, not as a
                babysitting facility, but to raise them up as God-fearing
                leaders and disciples of Jesus that changes the world.
              </div>
              <div className="mt-4 lg:mt-[52px]">
                <Link href={"wonderkids"}>
                  <button className="border-b-solid mt-1 flex items-center border-b-2 border-black text-xs font-bold text-black md:mt-0 lg:mt-5 lg:border-b-4 lg:text-xl xl:pb-2 xl:text-[33px]">
                    Learn More
                    <div className="w-5 lg:w-7 xl:w-auto">
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className="ml-3"
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="absolute right-0 z-10 w-[150px] sm:w-[295px] lg:w-[450px] xl:w-[618px]">
              <Image
                src={"/images/locations/WK.png"}
                width={617}
                height={534}
                alt={""}
                className="rounded-bl-[22px] lg:rounded-bl-[70px]"
              />
            </div>
            <div className="absolute right-[6px] top-[5px] z-0 h-[130px] w-[150px] rounded-bl-[25px] border-3 border-solid border-[#00edc2] sm:right-[12px] sm:top-[12px] sm:h-[255px] sm:w-[295px] sm:rounded-bl-[30px] sm:border-[6px] lg:right-[24px] lg:top-[24px] lg:h-[389px] lg:w-[450px] lg:rounded-bl-[84px] lg:border-[12px] xl:right-[24px] xl:top-[24px] xl:h-[534px] xl:w-[617px] xl:rounded-bl-[90px] xl:border-[12px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
