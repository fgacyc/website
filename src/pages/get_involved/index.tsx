import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="sf-pro-display relative mx-auto max-w-screen-xl text-white">
      <Image
        src={"/images/get_involved.png"}
        alt="Get Involved"
        width={1258}
        height={622}
      />
      <div className="absolute left-8 top-0 flex h-full flex-col justify-center text-xl sm:left-14 md:left-20 lg:left-24">
        <div className="sf-pro-display w-1/2 text-2xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
          Build our home together
        </div>
        <div className="text-[10px] sm:mt-2 sm:text-xs md:mt-4 md:text-base lg:text-xl">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
        </div>
      </div>
    </div>
  );
};

interface TeamDescCardProps {
  title: string;
  subtitle?: string;
  desc1: string;
  desc2: string;
}

const TeamDescCard = ({ title, subtitle, desc1, desc2 }: TeamDescCardProps) => {
  return (
    <div className="sf-pro-display mb-32 text-xl">
      <div className="mb-7 text-[33px] font-black">{title}</div>
      {subtitle && <div className="font-black">{subtitle}</div>}
      <div className="microsoft-yahei mt-7">{desc1} </div>
      <div className="microsoft-yahei mt-10">{desc2}</div>
      <div className="mt-5 items-center justify-between md:flex">
        <button>
          <div className="flex items-center justify-between border-b-[3px] border-black pb-1.5 font-semibold">
            Learn More{" "}
            <Image
              src={"/icons/right_arrow.svg"}
              width={32}
              height={32}
              alt="right arrow icon"
              className="ml-3"
            />
          </div>
        </button>
        <button className="mt-5 flex items-center justify-between rounded-[35px] bg-[#00EDC2] px-10 py-3.5 font-bold md:mt-0">
          Get involved now{" "}
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
  );
};

const Explore = () => {
  const teamDescCards: TeamDescCardProps[] = [
    {
      title: "People Experience Team",
      subtitle: "People | General Affair | Tech",
      desc1:
        "贵宾体验团队的存在是为了提升每位来到教会的人的整体体验。通过提供良好的体验，相信人更愿意留下联系信息，以便牧养团队能够有效地让人融入我们教会的社群当中。",
      desc2:
        "我们的期待是将牧养过程数据化，以优质的服务态度和数据帮助教会和每个会友在健康的轨道上成长。",
    },
    {
      title: "Communication Team",
      subtitle: "Social Media | Design | Photography",
      desc1:
        "传媒团队存在是为了把神在教会四栋墙内发生的事情带到教会以外的每个角落。我们通过媒体的力量，让那些需要神的人能够找到我们的教会，从网民最终转化为门徒。",
      desc2:
        "我们期待成为一个福音的渠道，让那些不认识耶稣或已经远离神的人回到神的同在里。",
    },
    {
      title: "Creative Team",
      subtitle: "Production | Art | Worship",
      desc1:
        "创意团队存在是为了让每一场聚会都可以承载神的同在。无论是透过舞蹈也好，映像也好，歌曲也好，灯光也好，我们希望能够把神的心意以创意的方式表达出来。",
      desc2:
        "我们期待的不仅仅是让聚会具是有吸引力，更重要的是能够与神配搭，让每一个参与聚会的人都可以被神的爱触摸。",
    },
    {
      title: "Wonderkids",
      desc1:
        "我们相信孩子是天国的宝贝，是上帝所看重的，他们也是下一代的领袖和栋梁！",
      desc2:
        "在这里，我们将帮助孩子们塑造品格，提升孩子们的沟通能力、体能建造、提供创意学习的环境，激发孩子的潜能，以及教导他们如何建立友好关系等。",
    },
  ];

  return (
    <>
      <div
        className="sf-pro-display xl:ml-50 my-8 ml-12 text-2xl font-bold sm:my-14 
               sm:ml-20 sm:text-5xl md:ml-32 md:text-6xl lg:my-20 lg:ml-40 lg:text-8xl xl:text-9xl"
      >
        Explore
      </div>
      <div className="mt-20 justify-between md:mt-32 lg:flex">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2">
          {teamDescCards.map((teamDescCard, index) => (
            <div key={index}>
              <TeamDescCard {...teamDescCard} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const GetInvolved = () => {
  return (
    <div className="mx-10 sm:mx-[90px]">
      <Banner />
      <Explore />
    </div>
  );
};

export default GetInvolved;
