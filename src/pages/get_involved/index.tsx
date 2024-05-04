import Image from "next/image";
import React, { Fragment, useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import FormCombobox from "~/components/FormCombobox";
import FormInput from "~/components/FormInput";
import CompletedForm from "~/components/CompletedForm";

// todo: make it as component
const Banner = () => {
  return (
    <div className="mx-10 sm:mx-[90px]">
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
    </div>
  );
};

interface TeamDescCardProps {
  title: string;
  subtitle?: string;
  desc1: string;
  desc2: string;
  onLearnMoreClick: () => void;
}

const TeamDescCard = ({
  title,
  subtitle,
  desc1,
  desc2,
  onLearnMoreClick,
}: TeamDescCardProps) => {
  return (
    <div className="sf-pro-display mb-32 text-xl lg:w-1/2">
      <div className="sf-pro-display-black mb-7 text-[33px]">{title}</div>
      {subtitle && <div className="sf-pro-display-black">{subtitle}</div>}
      <div className="microsoft-yahei mt-7">{desc1} </div>
      <div className="microsoft-yahei mt-10">{desc2}</div>
      <div className="mt-5 items-center justify-between md:flex">
        <button onClick={onLearnMoreClick}>
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
        <ArrowButton
          text="Get involved now"
          arrow_color="black"
          bg_color="bg-[#00EDC2]"
          className="mt-5 md:mt-0"
          onClick={() => {
            console.log("Get involved now");
          }}
        />
      </div>
    </div>
  );
};

interface RatingProps {
  fill: number;
  text: string;
  text_color: string;
  fill_color: string;
  border_color: string;
}

const Rating = ({
  fill,
  text,
  text_color,
  fill_color,
  border_color,
}: RatingProps) => {
  return (
    <div className="mb-1 flex items-center">
      <div className={`fz-chao-cu-hei mr-4 text-[13px] ${text_color}`}>
        {text}
      </div>
      <div className="inline-flex">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`mr-2 h-3 w-3 rounded-full ${
              i < fill ? fill_color : `border ${border_color} bg-transparent`
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

interface MinistryCardProps {
  image: string;
  titleCn: string;
  titleEn: string;
  desc1: string;
  desc2: string;
  skill_level: number;
  commitment_level: number;
}

interface MinistryDescProps {
  title: string;
  desc: string;
}

const MinistryDesc = ({ title, desc }: MinistryDescProps) => {
  return (
    <div className="mr-[97px] w-[245px] text-white">
      <div className="sf-pro-display sf-pro-display-black text-[33px]">
        {title}
      </div>
      <div className="microsoft-yahei mt-[25px] text-xl">{desc}</div>
    </div>
  );
};

const MinistryCard = ({
  image,
  titleCn,
  titleEn,
  desc1,
  desc2,
  skill_level,
  commitment_level,
}: MinistryCardProps) => {
  return (
    <div className={`relative h-[543px] w-[379px] text-white`}>
      <Image src={image} alt={titleEn} fill={true} />
      <div className="absolute bottom-14 ml-12 w-[236px]">
        <div className="fz-chao-cu-hei text-xl">{titleCn}</div>
        <div className="sf-pro-display sf-pro-display-black text-[40px]">
          {titleEn}
        </div>
        <div className="microsoft-jheng-hei mb-6 mt-3 text-[11px] font-bold">
          {desc1}
          <br />
          {desc2}
        </div>
        <Rating
          fill={skill_level}
          text="技术等级"
          text_color="text-[#3AFFAC]"
          fill_color="bg-[#2DC071]"
          border_color="border-[#2DC071]"
        />
        <Rating
          fill={commitment_level}
          text="委身等级"
          text_color="text-[#FFFFFF]"
          fill_color="bg-[#D9D9D9]"
          border_color="border-[#FFFFFF]"
        />
      </div>
    </div>
  );
};

interface MinistriesProps {
  onCloseClick: () => void;
  index: number;
}

const Ministries = ({ onCloseClick, index }: MinistriesProps) => {
  const ministry_list = [
    [
      {
        title: "People",
        desc: "他们肩负了暖和人心的重任，协助指挥人流和维持聚会的秩序。人流部以友善的接待态度，招待每个来到教会的人，让参加聚会的你感到安全以及受欢迎。",
        ministry: [
          {
            image: "/images/get_involved/usher.png",
            titleCn: "招待",
            titleEn: "Usher",
            desc: [
              "“WELCOME HOME!” 不是一句可有可无的口号，一句温暖的欢迎加上亲切的笑容，是人们对于 FGACYC 这个 “家” 的第一印象。他们背负着维持聚会秩序的重任、提供指导和帮助，小事细至帮助会众找到座位都由他们一手包办。",
            ],
            rate: [2, 3],
          },
          {
            image: "/images/get_involved/security.png",
            titleCn: "保安",
            titleEn: "Security",
            desc: [
              "他们的眼神是专注，不是凶狠；他们的姿态是专业，绝非冷漠，他们的衣着很整齐，却无关黑手党。",
              "他们不只是外表富有安全感，他们也是真材实料的能抗能打，他们是接受过紧急响应、解决冲突、急救或人群管理等领域的专门培训！有了他们，少了凌乱，多了安全感。",
            ],
            rate: [2, 2],
          },
        ],
      },
      {
        title: "General Affair",
        desc: "总务部的责任是确保教会每个星期聚会运营高效、顺利，并支持教会和会友们的一切所需。他们负责管理流程、教会的资源和供应链，分析牧养体系的数据，以及促进教会健康的发展。",
        ministry: [
          {
            image: "/images/get_involved/admin.png",
            titleCn: "行政",
            titleEn: "Admin",
            desc: [
              "“台上三分钟，台下十年工”。这一群或许连三分钟台都未上过的人，日夜用他们精明能干的头脑、牺牲的心肠，在台下应付和整理 FGACYC 大量的资料流量，可说是 FGACYC的支柱！没有了他们的统计，我们可能都没办法透过见证神应许给 FGACYC 爆炸性复兴的时刻！",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/lounge.png",
            titleCn: "膳食",
            titleEn: "Lounge",
            desc: [
              "他们每个星期掌握了几千人的胃！他们不只需要想破脑袋安排每个星期的膳食菜单，还需组织、统筹 FGACYC 聚会每个年龄层的膳食量。如果你是美食达人，对食物有高度的要求，欢迎加入我们！",
            ],
            rate: [2, 3],
          },
          {
            image: "/images/get_involved/shuttle.png",
            titleCn: "接驳服务",
            titleEn: "Shuttle",
            desc: [
              "由于教会的迅速发展，停车问题日益严重，导致会友和新朋友们有时不得不将车辆停放在较远的地方，然后步行到聚会地点。为了改善每个人来教会的体验，他们提供贴心的运送服务，确保每个人都能享受到愉快的教会体验。",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Technology",
        desc: "他们应用计算机科学和通信技术来管理、储存和处理海量信息。技术部由一群科技达人组成，正以无比的热情和执着，用技术的力量促进教会的成长，拓展神的国度。",
        ministry: [
          {
            image: "/images/get_involved/software_development.png",
            titleCn: "软件开发",
            titleEn: "Software Development",
            desc: [
              "软件开发人员负责将软件项目的需求转化为实际可用的软件应用。他们在软件的设计、编码、测试和维护过程中发挥关键作用，确保软件的功能性、可靠性和可扩展性。透过各种科技的应用，让教会有更完善的管理系统和拓展潜能。",
            ],
            rate: [5, 2],
          },
          {
            image: "/images/get_involved/project_management.png",
            titleCn: "项目管理",
            titleEn: "Project Management",
            desc: [
              "项目管理人员负责规划、组织、监督和控制项目的全过程，确保项目按时、按预算和按质量要求完成。他们是技术和需求的桥梁，让教会的需求透过适当的技术和科技能够完善的结合。",
            ],
            rate: [4, 2],
          },
        ],
      },
    ],
    [
      {
        title: "Social Media",
        desc: "现今每个人人手一机，离不开社交媒体平台，而很多的资讯都从社交媒体平台获得。他们的使命就是把神的话语、救恩和正确的价值观在泛滥的资讯中有效地传播出去。",
        ministry: [
          {
            image: "/images/get_involved/content_creation.png",
            titleCn: "内容创作",
            titleEn: "Content Creation",
            desc: [
              "从内容策划到内容创作、多媒体制作到社交媒体管理，他们的目标是通过创作有吸引力和有价值的属灵内容来吸引和保持受众的关注，并让神家里的故事能够被看见和听见。",
            ],
            rate: [3, 3],
          },
          {
            image: "/images/get_involved/editorial.png",
            titleCn: "文字编辑",
            titleEn: "Editorial",
            desc: [
              "文字能够传递信息、影响思想、引发情感共鸣、激发行动和改变的力量。他们透过文字的力量，以及精心编辑的文案，把教会里发生的大小事物赋予重大的意义。",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Design",
        desc: "设计部主要以 “视觉” 作为沟通和表现的方式，透过多种创意的方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉作品。",
        ministry: [
          {
            image: "/images/get_involved/graphic_design.png",
            titleCn: "平面设计",
            titleEn: "Graphic Design",
            desc: [
              "好的视觉设计能够抓住眼球，开启观众对神和教会的好奇心和兴趣。他们能够让让平平无奇的资讯活过来，透过颜色的运用，巧妙的排版和舒服的视觉效果，让人对神感兴趣。",
            ],
            rate: [5, 2],
          },
          {
            image: "/images/get_involved/multimedia_design.png",
            titleCn: "多媒体设计",
            titleEn: "Multimedia Design",
            desc: [
              "在这个数码的时代，设计不再只局限于印刷的应用。数码世界的需求也早已超越了静态的设计。多媒体设计师涉及的范围有网页设计、动画和3D制作。让一片黑漆漆的数码屏幕生动起来。",
            ],
            rate: [4, 2],
          },
        ],
      },
      {
        title: "Photography",
        desc: "摄影部负责捕抓神在这个家里所做的每一个奇妙的工作。无论是从最大型的布道会，或者是日常的各种聚会，他们都会准备就绪，把最珍贵的时刻都记录下来。",
        ministry: [
          {
            image: "/images/get_involved/photography.png",
            titleCn: "摄影",
            titleEn: "Photography",
            desc: [
              "属灵的摄影师拥有敏锐圣灵的能力，并能够即时的捕抓神运行的画面。从构图到拍摄，修图到调色，他们透过摄影的创作传递情绪，让神家里发生的大小事物都能被记录和被传播。",
            ],
            rate: [3, 3],
          },
        ],
      },
    ],

    [
      {
        title: "Production",
        desc: "聚会里所看到的和听到的一切都是制作部背后的精心策划和执行。他们以最专业的态度，把每一场聚会制作好，为的就是让每个来到聚会当中的人都可以经历神。",
        ministry: [
          {
            image: "/images/get_involved/stage_management.png",
            titleCn: "舞台监督",
            titleEn: "Stage Management",
            desc: [
              "每场活动幕后的心脏，努力将每一次聚会或演出的创意实现。通过细致入微打磨每个环节，精心处理、管理舞台的各个方面，包括活动的策划与执行、时间管理、与台前幕后工作人员的协调和配搭等，为的就是创造一个身临其境的沉浸式体验给会众。",
            ],
            rate: [2, 2],
          },
          {
            image: "/images/get_involved/multimedia.png",
            titleCn: "多媒体",
            titleEn: "Multimedia",
            desc: [
              "多媒体影像画面不但能带来霞撼的视觉效果，同时传递了圣灵的工作，也让网络上的体验到现场的震撼，让聚会更完全地被呈献。也同时透过故事、镜头、光影、音效、特效，来呈现美好的故事，用心的制作来传达内容。",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/sound.png",
            titleCn: "音响",
            titleEn: "Sound",
            desc: [
              "若每周信息是我们的粮食，讲员就同等于厨师，那音响就如同餐具，少了他们，山珍海味都没办法送进我们的口中！音响组绝非仅仅调节音量，要让会众听到高音准、中音甜、低音稳，那可是一辈子的学习！",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/lighting.png",
            titleCn: "灯光",
            titleEn: "Lighting",
            desc: [
              "灯光组专为冰冷的舞台涂上层层色彩，是一门不可或缺的艺术。在舞台灯光四射的氛围底下，人们能够更专注投入敬拜神。灯光组员从灯种、色彩温度、亮度到电路，可谓样样精通！",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/translation.png",
            titleCn: "语言翻译",
            titleEn: "Translation",
            desc: [
              "这里是一个语文专才的集聚地，结众人的力量写出强而有力的字句，高度还原并精准表达原文中的含义。这不仅仅是将某一种语文翻译成另一种语文，它还需要考验你的临场反应，大脑里的词汇量等等。",
            ],
            rate: [2, 2],
          },
        ],
      },
      {
        title: "Arts",
        desc: "艺术的表达也是对神的一种敬拜方式。艺术部透过舞蹈，戏剧，视觉美观来传递耶稣的好消息。相信创造我们的神也赋予了每一个人发挥创意的能力。",
        ministry: [
          {
            image: "/images/get_involved/dance.png",
            titleCn: "舞蹈",
            titleEn: "Dance",
            desc: [
              "赞美神，除了言语歌声外，绝对少不了跳舞！激发你内在的潜能，用肢体语言为主发光吧！以超炫的舞蹈结合强劲的音乐，使舞台散发出吸引年轻人来到教会的魅力！",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/fashion_&_image.png",
            titleCn: "形象设计",
            titleEn: "Fashion & Image",
            desc: [
              "他们负责设计人物造型、化妆以及发型，以一双巧手让路人瞬间变成闪亮明星！自认拥有走在时代尖端的时装品味与妆容嗅觉的你，还等什么？这里就是你发挥所长的好地方！",
            ],
            rate: [3, 3],
          },
          {
            image: "/images/get_involved/drama.png",
            titleCn: "戏剧",
            titleEn: "Drama",
            desc: [
              "总觉得自己里面住了一个梁朝伟、吴君如？帅过李现、美过刘亦菲？厉害过陈可辛、红过吴宇森？无论是实力派还是偶像派，高颜值也好、谐星也罢，只要爱演的就过来！",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Worship",
        desc: "以火热渴慕爱神的敬拜把神的爱和同在带到世界每个角落，让更多人在敬拜音乐中认识上帝。兴起敬拜神、敬畏神、热爱神的世代是敬拜部不变的核心价值和异象。",
        ministry: [
          {
            image: "/images/get_involved/vocal.png",
            titleCn: "歌手",
            titleEn: "Vocal",
            desc: [
              "如果将歌曲视为我们对神敬拜的一种表达方式，那么歌声就成为了我们不可或缺的工具。一个真正拥有敬拜生命的歌手，不仅仅是能够演唱一首诗歌，更重要的是能够引领神的子民进入神的同在。",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/musician.png",
            titleCn: "乐手",
            titleEn: "Musician",
            desc: [
              "一个敏锐圣灵运行的乐队，能够转化属灵的气氛，让一个聚会从开始到结束都充满着敬拜的氛围。如果你擅长键盘，吉他，贝斯或者是鼓欢迎加入我们！",
            ],
            rate: [5, 3],
          },
        ],
      },
    ],
    [
      {
        title: "Wonderkids",
        desc: "只要你喜欢和小朋友做朋友，对兴起下一代有负担，有爱心，有耐心，有责任感，我们都欢迎你加入Wonderkids的团队。让我们一起建造更刚强的下一代。",
        ministry: [
          {
            image: "/images/get_involved/children_minister.png",
            titleCn: "神奇王国同工",
            titleEn: "Children Minister",
            desc: [
              "他们充满童真但绝不幼稚，他们善良、友爱、和蔼可亲又温柔，他们肩负培养下一代伟大的使命，喜欢小朋友且愿意耐心教导？来吧！我们需要你！",
            ],
            rate: [2, 4],
          },
        ],
      },
    ],
  ];

  return (
    <div className={`relative h-screen bg-[#241F20] px-10 pt-11`}>
      <div className="flex overflow-auto scrollbar-hide">
        {" "}
        {ministry_list[index]?.map((ministries, index) => (
          <div key={index} className="ml-14 flex">
            <MinistryDesc title={ministries.title} desc={ministries.desc} />
            <div className="mt-10 flex">
              {ministries.ministry.map((item, index) => (
                <MinistryCard
                  key={index}
                  image={item.image}
                  titleCn={item.titleCn}
                  titleEn={item.titleEn}
                  desc1={item.desc[0]!}
                  desc2={item.desc[1] ?? ""}
                  skill_level={item.rate[0]!}
                  commitment_level={item.rate[1]!}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Image
        src={"/icons/cross.svg"}
        alt="Close Icon"
        width={25}
        height={20}
        className="absolute bottom-10 right-10 cursor-pointer"
        onClick={onCloseClick}
      />
    </div>
  );
};

const Explore = () => {
  const teamDescCards = [
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

  const [openMinistryIndex, setOpenMinistryIndex] = useState<number>(-1);

  const handleLearnMoreClick = (index: number) => {
    setOpenMinistryIndex(index);
  };

  return (
    <>
      {/* todo: adjust ml */}
      <div
        className="sf-pro-display xl:ml-50 my-8 ml-12 text-2xl font-bold sm:my-14 
               sm:ml-20 sm:text-5xl md:ml-32 md:text-6xl lg:my-20 lg:ml-40 lg:text-8xl xl:text-9xl"
      >
        Explore
      </div>
      {teamDescCards.map((teamDescCard, index) => (
        <Fragment key={index}>
          <div className="mx-10 mt-20 justify-between sm:mx-[90px] md:mt-32 lg:flex">
            {/* todo: card */}
            <div className="lg:w-1/2"></div>
            <TeamDescCard
              {...teamDescCard}
              onLearnMoreClick={() => handleLearnMoreClick(index)}
            />
          </div>
          {/* to fix: open & close separately */}
          {openMinistryIndex === index && (
            <Ministries
              onCloseClick={() => setOpenMinistryIndex(-1)}
              index={index}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

// todo: add bg
const GetInvolved = () => {
  const pastoral_options = [
    { value: "ps._melvin_zone", label: "Ps. Melvin Zone" },
    { value: "ps._daniel_zone", label: "Ps. Daniel Zone" },
    { value: "json_zone", label: "Json Zone" },
    { value: "xxxx1", label: "xxxx1" },
    { value: "xxxx2", label: "xxxx2" },
  ];

  // todo: make it into data.js file
  const ministry_list = [
    [
      {
        title: "People",
        desc: "他们肩负了暖和人心的重任，协助指挥人流和维持聚会的秩序。人流部以友善的接待态度，招待每个来到教会的人，让参加聚会的你感到安全以及受欢迎。",
        ministry: [
          {
            image: "/images/get_involved/usher.png",
            titleCn: "招待",
            titleEn: "Usher",
            desc: [
              "“WELCOME HOME!” 不是一句可有可无的口号，一句温暖的欢迎加上亲切的笑容，是人们对于 FGACYC 这个 “家” 的第一印象。他们背负着维持聚会秩序的重任、提供指导和帮助，小事细至帮助会众找到座位都由他们一手包办。",
            ],
            rate: [2, 3],
          },
          {
            image: "/images/get_involved/security.png",
            titleCn: "保安",
            titleEn: "Security",
            desc: [
              "他们的眼神是专注，不是凶狠；他们的姿态是专业，绝非冷漠，他们的衣着很整齐，却无关黑手党。",
              "他们不只是外表富有安全感，他们也是真材实料的能抗能打，他们是接受过紧急响应、解决冲突、急救或人群管理等领域的专门培训！有了他们，少了凌乱，多了安全感。",
            ],
            rate: [2, 2],
          },
        ],
      },
      {
        title: "General Affair",
        desc: "总务部的责任是确保教会每个星期聚会运营高效、顺利，并支持教会和会友们的一切所需。他们负责管理流程、教会的资源和供应链，分析牧养体系的数据，以及促进教会健康的发展。",
        ministry: [
          {
            image: "/images/get_involved/admin.png",
            titleCn: "行政",
            titleEn: "Admin",
            desc: [
              "“台上三分钟，台下十年工”。这一群或许连三分钟台都未上过的人，日夜用他们精明能干的头脑、牺牲的心肠，在台下应付和整理 FGACYC 大量的资料流量，可说是 FGACYC的支柱！没有了他们的统计，我们可能都没办法透过见证神应许给 FGACYC 爆炸性复兴的时刻！",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/lounge.png",
            titleCn: "膳食",
            titleEn: "Lounge",
            desc: [
              "他们每个星期掌握了几千人的胃！他们不只需要想破脑袋安排每个星期的膳食菜单，还需组织、统筹 FGACYC 聚会每个年龄层的膳食量。如果你是美食达人，对食物有高度的要求，欢迎加入我们！",
            ],
            rate: [2, 3],
          },
          {
            image: "/images/get_involved/shuttle.png",
            titleCn: "接驳服务",
            titleEn: "Shuttle",
            desc: [
              "由于教会的迅速发展，停车问题日益严重，导致会友和新朋友们有时不得不将车辆停放在较远的地方，然后步行到聚会地点。为了改善每个人来教会的体验，他们提供贴心的运送服务，确保每个人都能享受到愉快的教会体验。",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Technology",
        desc: "他们应用计算机科学和通信技术来管理、储存和处理海量信息。技术部由一群科技达人组成，正以无比的热情和执着，用技术的力量促进教会的成长，拓展神的国度。",
        ministry: [
          {
            image: "/images/get_involved/software_development.png",
            titleCn: "软件开发",
            titleEn: "Software Development",
            desc: [
              "软件开发人员负责将软件项目的需求转化为实际可用的软件应用。他们在软件的设计、编码、测试和维护过程中发挥关键作用，确保软件的功能性、可靠性和可扩展性。透过各种科技的应用，让教会有更完善的管理系统和拓展潜能。",
            ],
            rate: [5, 2],
          },
          {
            image: "/images/get_involved/project_management.png",
            titleCn: "项目管理",
            titleEn: "Project Management",
            desc: [
              "项目管理人员负责规划、组织、监督和控制项目的全过程，确保项目按时、按预算和按质量要求完成。他们是技术和需求的桥梁，让教会的需求透过适当的技术和科技能够完善的结合。",
            ],
            rate: [4, 2],
          },
        ],
      },
    ],
    [
      {
        title: "Social Media",
        desc: "现今每个人人手一机，离不开社交媒体平台，而很多的资讯都从社交媒体平台获得。他们的使命就是把神的话语、救恩和正确的价值观在泛滥的资讯中有效地传播出去。",
        ministry: [
          {
            image: "/images/get_involved/content_creation.png",
            titleCn: "内容创作",
            titleEn: "Content Creation",
            desc: [
              "从内容策划到内容创作、多媒体制作到社交媒体管理，他们的目标是通过创作有吸引力和有价值的属灵内容来吸引和保持受众的关注，并让神家里的故事能够被看见和听见。",
            ],
            rate: [3, 3],
          },
          {
            image: "/images/get_involved/editorial.png",
            titleCn: "文字编辑",
            titleEn: "Editorial",
            desc: [
              "文字能够传递信息、影响思想、引发情感共鸣、激发行动和改变的力量。他们透过文字的力量，以及精心编辑的文案，把教会里发生的大小事物赋予重大的意义。",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Design",
        desc: "设计部主要以 “视觉” 作为沟通和表现的方式，透过多种创意的方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉作品。",
        ministry: [
          {
            image: "/images/get_involved/graphic_design.png",
            titleCn: "平面设计",
            titleEn: "Graphic Design",
            desc: [
              "好的视觉设计能够抓住眼球，开启观众对神和教会的好奇心和兴趣。他们能够让让平平无奇的资讯活过来，透过颜色的运用，巧妙的排版和舒服的视觉效果，让人对神感兴趣。",
            ],
            rate: [5, 2],
          },
          {
            image: "/images/get_involved/multimedia_design.png",
            titleCn: "多媒体设计",
            titleEn: "Multimedia Design",
            desc: [
              "在这个数码的时代，设计不再只局限于印刷的应用。数码世界的需求也早已超越了静态的设计。多媒体设计师涉及的范围有网页设计、动画和3D制作。让一片黑漆漆的数码屏幕生动起来。",
            ],
            rate: [4, 2],
          },
        ],
      },
      {
        title: "Photography",
        desc: "摄影部负责捕抓神在这个家里所做的每一个奇妙的工作。无论是从最大型的布道会，或者是日常的各种聚会，他们都会准备就绪，把最珍贵的时刻都记录下来。",
        ministry: [
          {
            image: "/images/get_involved/photography.png",
            titleCn: "摄影",
            titleEn: "Photography",
            desc: [
              "属灵的摄影师拥有敏锐圣灵的能力，并能够即时的捕抓神运行的画面。从构图到拍摄，修图到调色，他们透过摄影的创作传递情绪，让神家里发生的大小事物都能被记录和被传播。",
            ],
            rate: [3, 3],
          },
        ],
      },
    ],

    [
      {
        title: "Production",
        desc: "聚会里所看到的和听到的一切都是制作部背后的精心策划和执行。他们以最专业的态度，把每一场聚会制作好，为的就是让每个来到聚会当中的人都可以经历神。",
        ministry: [
          {
            image: "/images/get_involved/stage_management.png",
            titleCn: "舞台监督",
            titleEn: "Stage Management",
            desc: [
              "每场活动幕后的心脏，努力将每一次聚会或演出的创意实现。通过细致入微打磨每个环节，精心处理、管理舞台的各个方面，包括活动的策划与执行、时间管理、与台前幕后工作人员的协调和配搭等，为的就是创造一个身临其境的沉浸式体验给会众。",
            ],
            rate: [2, 2],
          },
          {
            image: "/images/get_involved/multimedia.png",
            titleCn: "多媒体",
            titleEn: "Multimedia",
            desc: [
              "多媒体影像画面不但能带来霞撼的视觉效果，同时传递了圣灵的工作，也让网络上的体验到现场的震撼，让聚会更完全地被呈献。也同时透过故事、镜头、光影、音效、特效，来呈现美好的故事，用心的制作来传达内容。",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/sound.png",
            titleCn: "音响",
            titleEn: "Sound",
            desc: [
              "若每周信息是我们的粮食，讲员就同等于厨师，那音响就如同餐具，少了他们，山珍海味都没办法送进我们的口中！音响组绝非仅仅调节音量，要让会众听到高音准、中音甜、低音稳，那可是一辈子的学习！",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/lighting.png",
            titleCn: "灯光",
            titleEn: "Lighting",
            desc: [
              "灯光组专为冰冷的舞台涂上层层色彩，是一门不可或缺的艺术。在舞台灯光四射的氛围底下，人们能够更专注投入敬拜神。灯光组员从灯种、色彩温度、亮度到电路，可谓样样精通！",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/translation.png",
            titleCn: "语言翻译",
            titleEn: "Translation",
            desc: [
              "这里是一个语文专才的集聚地，结众人的力量写出强而有力的字句，高度还原并精准表达原文中的含义。这不仅仅是将某一种语文翻译成另一种语文，它还需要考验你的临场反应，大脑里的词汇量等等。",
            ],
            rate: [2, 2],
          },
        ],
      },
      {
        title: "Arts",
        desc: "艺术的表达也是对神的一种敬拜方式。艺术部透过舞蹈，戏剧，视觉美观来传递耶稣的好消息。相信创造我们的神也赋予了每一个人发挥创意的能力。",
        ministry: [
          {
            image: "/images/get_involved/dance.png",
            titleCn: "舞蹈",
            titleEn: "Dance",
            desc: [
              "赞美神，除了言语歌声外，绝对少不了跳舞！激发你内在的潜能，用肢体语言为主发光吧！以超炫的舞蹈结合强劲的音乐，使舞台散发出吸引年轻人来到教会的魅力！",
            ],
            rate: [3, 2],
          },
          {
            image: "/images/get_involved/fashion_&_image.png",
            titleCn: "形象设计",
            titleEn: "Fashion & Image",
            desc: [
              "他们负责设计人物造型、化妆以及发型，以一双巧手让路人瞬间变成闪亮明星！自认拥有走在时代尖端的时装品味与妆容嗅觉的你，还等什么？这里就是你发挥所长的好地方！",
            ],
            rate: [3, 3],
          },
          {
            image: "/images/get_involved/drama.png",
            titleCn: "戏剧",
            titleEn: "Drama",
            desc: [
              "总觉得自己里面住了一个梁朝伟、吴君如？帅过李现、美过刘亦菲？厉害过陈可辛、红过吴宇森？无论是实力派还是偶像派，高颜值也好、谐星也罢，只要爱演的就过来！",
            ],
            rate: [3, 2],
          },
        ],
      },
      {
        title: "Worship",
        desc: "以火热渴慕爱神的敬拜把神的爱和同在带到世界每个角落，让更多人在敬拜音乐中认识上帝。兴起敬拜神、敬畏神、热爱神的世代是敬拜部不变的核心价值和异象。",
        ministry: [
          {
            image: "/images/get_involved/vocal.png",
            titleCn: "歌手",
            titleEn: "Vocal",
            desc: [
              "如果将歌曲视为我们对神敬拜的一种表达方式，那么歌声就成为了我们不可或缺的工具。一个真正拥有敬拜生命的歌手，不仅仅是能够演唱一首诗歌，更重要的是能够引领神的子民进入神的同在。",
            ],
            rate: [4, 3],
          },
          {
            image: "/images/get_involved/musician.png",
            titleCn: "乐手",
            titleEn: "Musician",
            desc: [
              "一个敏锐圣灵运行的乐队，能够转化属灵的气氛，让一个聚会从开始到结束都充满着敬拜的氛围。如果你擅长键盘，吉他，贝斯或者是鼓欢迎加入我们！",
            ],
            rate: [5, 3],
          },
        ],
      },
    ],
    [
      {
        title: "Wonderkids",
        desc: "只要你喜欢和小朋友做朋友，对兴起下一代有负担，有爱心，有耐心，有责任感，我们都欢迎你加入Wonderkids的团队。让我们一起建造更刚强的下一代。",
        ministry: [
          {
            image: "/images/get_involved/children_minister.png",
            titleCn: "神奇王国同工",
            titleEn: "Children Minister",
            desc: [
              "他们充满童真但绝不幼稚，他们善良、友爱、和蔼可亲又温柔，他们肩负培养下一代伟大的使命，喜欢小朋友且愿意耐心教导？来吧！我们需要你！",
            ],
            rate: [2, 4],
          },
        ],
      },
    ],
  ];

  const ministry_options = ministry_list.flatMap((ministries) =>
    ministries.flatMap((ministryCategory) =>
      ministryCategory.ministry.map((ministry) => ({
        value: ministry.titleEn,
        label: ministry.titleEn,
      }))
    )
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pastoralTeam, setPastoralTeam] = useState(pastoral_options[0]!.value);
  const [ministry, setMinistry] = useState(ministry_options[0]!.value);
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      phoneNumber,
      email,
      pastoralTeam,
      ministry,
    });
    setIsSubmitted(true);
  };

  return (
    <>
      <Banner />
      <Explore />
      {/* todo: make it a component */}
      {isSubmitted ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <CompletedForm
            bg_color="bg-[#00EDC2]"
            tick_bg="bg-white"
            tick_color="#00EDC2"
            button_color="bg-black"
            text="COMPLETED!"
            desc="We have received your submission, and we will be in touch soon!"
            onClick={() => setIsSubmitted(false)}
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-[82px] flex w-4/5 flex-col items-center justify-center rounded-[20px] bg-[#F5F5F8] py-[63px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <div className="sf-pro-display-black mb-[76px] w-4/5 text-left text-[33px]">
            Get involved
          </div>
          <div className="sf-pro-display mx-auto flex w-4/5 flex-col text-xl"></div>
          <FormInput
            className="w-4/5"
            label="Your name"
            type="text"
            name="name"
            id="name"
            validate={(inputValue: string) => /^[A-Za-z\s]+$/.test(inputValue)}
            placeholder="Full name"
            value={name}
            onInputChange={(value) => setName(value)}
            error={nameError}
            setError={setNameError}
          />

          <FormInput
            className="w-4/5"
            label="Phone Number"
            type="tel"
            name="phone_number"
            id="phone_number"
            validate={(inputValue: string) =>
              /^\+?[0-9]{1,3}-?[0-9]{3,4}-?[0-9]{4,}$/i.test(inputValue)
            }
            placeholder="+60xx-xxx-xxxx"
            value={phoneNumber}
            onInputChange={(value) => setPhoneNumber(value)}
            error={phoneNumberError}
            setError={setPhoneNumberError}
          />

          <FormInput
            className="w-4/5"
            label="Email Address"
            type="email"
            name="email"
            id="email"
            validate={(inputValue: string) => /^\S+@\S+\.\S+$/.test(inputValue)}
            placeholder="example@gmail.com"
            value={email}
            onInputChange={(value) => setEmail(value)}
            error={emailError}
            setError={setEmailError}
          />

          <FormCombobox
            label="Pastoral Team"
            name="pastoral_team"
            id="pastoral_team"
            options={pastoral_options}
            className="w-4/5"
            selectedValue={pastoralTeam}
            onValueChange={(value) => setPastoralTeam(value)}
          />

          <FormCombobox
            label="Your Ministry Selection"
            name="ministry"
            id="ministry"
            options={ministry_options}
            className="w-4/5"
            selectedValue={ministry}
            onValueChange={(value) => setMinistry(value)}
          />

          <ArrowButton
            text="Submit your request"
            text_color="text-white"
            arrow_color="white"
            bg_color="bg-black"
            className="mt-[111px] w-4/5 text-lg sm:w-auto sm:text-[25px]"
          />
        </form>
      )}
    </>
  );
};

export default GetInvolved;
