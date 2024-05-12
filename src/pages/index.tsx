import Head from "next/head";
import Image from "next/image";
import ArrowButton from "~/components/ArrowButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>FGA CYC</title>
        <meta name="description" content="FGA CYC Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="sf-pro-display relative flex h-screen items-center bg-[url(/images/bg_landing_1.png)] bg-cover text-white">
          <div className="pl-[243px]">
            <div className="text-[40px]">/ FGA CYC</div>
            <div className="mt-[53px] text-9xl font-bold">
              Welcome
              <br />
              Home
            </div>
          </div>
          <div className="absolute bottom-0 right-[59px] top-[80%] w-[1px] -translate-y-[115px] transform">
            {/* todo: get sf pro display thin */}
            <div className="-rotate-90 whitespace-nowrap text-[10px] font-thin uppercase tracking-widest">
              SCROLL TO BEGIN YOUR JOURNEY
            </div>
            <div className="mt-4 w-[1px]">
              <div className="h-[27px] bg-[#919191]"></div>
              <div className="h-[62px] bg-white"></div>
            </div>
          </div>
          <div className="absolute left-1/2 top-[85%] z-[1] flex h-[531px] w-[954px] -translate-x-1/2 transform flex-col items-center justify-center bg-[#703fd1]">
            <iframe
              src="https://www.youtube.com/embed/sz4jWhVYt44?si=Olk1o4htn--MyfXX"
              width={711}
              height={400}
            ></iframe>
          </div>
        </section>
        <section className="relative flex flex-col items-center justify-center py-[73px]">
          <div className="h-full w-full bg-white">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`sf-pro-family user-select-none text-center text-[170px] font-bold uppercase leading-none ${
                  index === 3 ? "text-black" : "text-white"
                } drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]`}
              >
                Get Connected
              </div>
            ))}
          </div>
          <ArrowButton
            text="GET CONNECTED"
            bg_color="bg-[#3AFFAC]"
            arrow_color="black"
            className="absolute mt-[192px] h-[123px] rounded-[90px] px-[65px] text-[40px]"
          />
        </section>
        <section className="sf-pro-display bg-[url(/images/bg_landing_3.png)] bg-cover text-white">
          <div className="text-9xl font-bold">Our Vision</div>
          <div className="text-[40px] font-bold">
            Antioch Church — <br />
            An apostolic and prophetic cell-based church.
          </div>
          <div className="relative h-[541px] w-[805px] rounded-bl-[96px] border-[12px] border-[#00EDC2]">
            <Image
              src="/images/our_vision.png"
              alt="Our Vision Image"
              width={804}
              height={536}
              className="absolute bottom-[29px] left-[28px]"
            />
          </div>
        </section>
      </main>
    </>
  );
}
