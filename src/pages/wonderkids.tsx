import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WkFAQAccordion from "src/components/WkFAQAccordion";
import Header from "src/layouts/header";
import wonderkidsBg from "src/assets/wonderkids/BG.png";
import wonderkidLogo from "src/assets/wonderkids/Logo.png";
import cradleLandImg from "src/assets/wonderkids/agegroups/cradle-land.png";
import shiningStarImg from "src/assets/wonderkids/agegroups/shining-star.png";
import superTrooperImg from "src/assets/wonderkids/agegroups/super-trooper.png";
import wowLifeImg from "src/assets/wonderkids/agegroups/wow-life.png";
import warriorImg from "src/assets/wonderkids/agegroups/warrior.png";
import resCardVector from "src/assets/wonderkids/resource_card_vector.svg";
import photo1 from "src/assets/wonderkids/photo_1.png";
import photo2 from "src/assets/wonderkids/photo_2.png";
import photo3 from "src/assets/wonderkids/photo_3.png";
import photo4 from "src/assets/wonderkids/photo_4.png";
import photo5 from "src/assets/wonderkids/photo_5.png";
import photo6 from "src/assets/wonderkids/photo_6.png";
import photo7 from "src/assets/wonderkids/photo_7.png";
import photo8 from "src/assets/wonderkids/photo_8.png";
import photo9 from "src/assets/wonderkids/photo_9.png";
import photo10 from "src/assets/wonderkids/photo_10.png";
import rocket from "src/assets/wonderkids/rocket.svg";

export default function Wonderkids() {
  const rcvImgElement = resCardVector as HTMLImageElement;
  const rcvSrcPath: string = rcvImgElement.src;

  const rocketImgElement = rocket as HTMLImageElement;
  const rocketSrcPath: string = rocketImgElement.src;

  const ageGroupData = [
    {
      name: "Cradle Land",
      ages: "0 - 18mo",
      saturday: "7.30PM - 8PM",
      sunday: "2.30PM - 3PM",
      img: `${cradleLandImg.src}`,
      css: `bg-[#E05532] text-white`,
    },
    {
      name: "Shining Star",
      ages: "19mo - 3",
      saturday: "7.30PM - 8.45PM",
      sunday: "2.30PM - 3.45PM",
      img: `${shiningStarImg.src}`,
      css: `bg-[#7E32E0] text-white`,
    },
    {
      name: "Super Trooper",
      ages: "4 - 6",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: `${superTrooperImg.src}`,
      css: `bg-[#32E0A1] text-white`,
    },
    {
      name: "Wow Life",
      ages: "7 - 9",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: `${wowLifeImg.src}`,
      css: `bg-[#E0AF32] text-white`,
    },
    {
      name: "Wow Life",
      ages: "10 - 12",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: `${warriorImg.src}`,
      css: `bg-[#3297E0] text-white`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "wk-age-groups",
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: true
    responsive: [
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main role="main" className={`bg-[#fab800] pt-[68px]`}>
        <section
          className={"relative z-[0] bg-cover"}
          style={{ backgroundImage: `url(${wonderkidsBg.src})` }}
        >
          <div className={`mx-auto max-w-screen-xl`}>
            <svg
              width="9"
              height="189"
              viewBox="0 0 9 189"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 83.832L0.954102 85.7998L0.954102 85.3945L7.35059 83.6563L7.35059 83.6416L0.954102 81.7861L0.954102 81.4102L7.35059 79.5547L7.35059 79.54L0.954102 77.8066L0.954102 77.4014L8 79.3643L8 79.7158L1.65723 81.5908L1.65723 81.6055L8 83.4805L8 83.832ZM8.10254 70.9639C8.10254 72.8926 6.70117 74.1084 4.47461 74.1084L4.46484 74.1084C2.25781 74.1084 0.851563 72.8877 0.851563 70.9687C0.851563 69.04 2.2627 67.8291 4.46484 67.8291L4.47461 67.8291C6.70117 67.8291 8.10254 69.04 8.10254 70.9639ZM7.74121 70.9639C7.74121 69.2793 6.45703 68.2246 4.47461 68.2246L4.46484 68.2246C2.48242 68.2246 1.21289 69.2939 1.21289 70.9687C1.21289 72.6484 2.47754 73.7129 4.46484 73.7129L4.47461 73.7129C6.47168 73.7129 7.74121 72.6436 7.74121 70.9639ZM8 63.877L0.954102 63.877L0.954102 63.4766L7.35059 58.9844L7.35059 58.96L0.954102 58.96L0.954102 58.5742L8 58.5742L8 58.9795L1.60352 63.4766L1.60352 63.4961L8 63.4961L8 63.877ZM8 54.3242L0.954102 54.3242L0.954102 52.1465C0.954102 50.0127 2.2334 48.7871 4.46973 48.7871L4.47949 48.7871C6.7207 48.7871 8 50.0127 8 52.1465L8 54.3242ZM7.64356 53.9385L7.64356 52.1611C7.64356 50.252 6.51074 49.1777 4.48438 49.1777L4.47461 49.1777C2.44336 49.1777 1.31055 50.252 1.31055 52.1611L1.31055 53.9385L7.64356 53.9385ZM8 44.8301L0.954102 44.8301L0.954102 40.7236L1.31055 40.7236L1.31055 44.4443L4.21094 44.4443L4.21094 40.8994L4.5625 40.8994L4.5625 44.4443L7.64356 44.4443L7.64356 40.7236L8 40.7236L8 44.8301ZM8 36.6152L0.954102 36.6152L0.954102 34.3301C0.954102 32.9336 1.72559 32.0693 2.96582 32.0693L2.97559 32.0693C3.98633 32.0693 4.71387 32.6797 4.91895 33.7002L8 31.8887L8 32.3379L4.97754 34.1006C4.98731 34.1738 4.99219 34.2861 4.99219 34.3691L4.99219 36.2295L8 36.2295L8 36.6152ZM4.64063 36.2295L4.64063 34.3496C4.64063 33.1777 4.01563 32.4648 2.98047 32.4648L2.9707 32.4648C1.92578 32.4648 1.30566 33.1826 1.30566 34.3643L1.30566 36.2295L4.64063 36.2295ZM8 28.0098L0.954102 28.0098L0.954102 27.624L4.9043 27.624L4.9043 27.5996L0.954102 23.9717L0.954102 23.4834L4.05957 26.3398L8 23.1563L8 23.6543L4.33301 26.6133L5.42188 27.624L8 27.624L8 28.0098ZM8 19.4727L0.954102 19.4727L0.954102 19.0869L8 19.0869L8 19.4727ZM8 14.832L0.954102 14.832L0.954102 12.6543C0.954102 10.5205 2.2334 9.29492 4.46973 9.29492L4.47949 9.29492C6.7207 9.29492 8 10.5205 8 12.6543L8 14.832ZM7.64356 14.4463L7.64356 12.6689C7.64356 10.7598 6.51074 9.68555 4.48438 9.68555L4.47461 9.68555C2.44336 9.68555 1.31055 10.7598 1.31055 12.6689L1.31055 14.4463L7.64356 14.4463ZM8.10254 3.13086C8.10254 4.59082 7.34082 5.58691 6.15918 5.6748L6.0957 5.67969L6.0957 5.28906L6.15918 5.28418C7.11621 5.19629 7.74121 4.35645 7.74121 3.12109C7.74121 1.90039 7.13086 1.08496 6.20313 1.08496L6.19824 1.08496C5.40234 1.08496 4.97266 1.56836 4.68945 2.81348L4.51367 3.57031C4.20117 4.91797 3.64942 5.50391 2.6875 5.50391L2.67774 5.50391C1.61817 5.49902 0.851563 4.53223 0.851563 3.20898C0.851564 1.87109 1.63281 0.914062 2.79492 0.826172L2.8584 0.821289L2.8584 1.20703L2.79492 1.21191C1.83301 1.30469 1.21289 2.09082 1.21289 3.21387C1.21289 4.32715 1.80859 5.1084 2.67285 5.1084L2.67774 5.1084C3.44434 5.1084 3.88867 4.60547 4.15723 3.44824L4.32813 2.69141C4.65527 1.25586 5.19238 0.694336 6.18359 0.694336L6.18848 0.694336C7.33594 0.694336 8.10254 1.6709 8.10254 3.13086Z"
                fill="black"
              />
              <rect x="3" y="100" width="1" height="89" fill="black" />
            </svg>
          </div>

          <Image
            src={`${rocketSrcPath}`}
            alt=""
            className={`absolute right-0 z-[1]`}
            width={`414`}
            height={`430`}
          />

          <div
            className={`relative z-[2] md:ml-[114px] lg:ml-[157px] xl:ml-[200px] 2xl:ml-[243px]`}
          >
            <Image
              src={`${wonderkidLogo.src}`}
              alt=""
              className={``}
              width={`851`}
              height={`57`}
            />
            <p
              className={`font-hairline mt-14 max-w-[450px] text-base font-normal leading-6 tracking-tight`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <Link href="https://www.facebook.com/FGACYC" target="_blank">
                <svg
                  width="15"
                  height="29"
                  viewBox="0 0 15 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_234_162)">
                    <path
                      d="M14.0185 16.3115L14.7942 11.0656H9.93404V7.65574C9.93404 6.22131 10.6148 4.81967 12.7916 4.81967H15V0.352459C15 0.352459 12.9894 0 11.0739 0C7.0686 0 4.44855 2.51639 4.44855 7.06557V11.0656H0V16.3115H4.44855V29H9.92612V16.3115H14.0106H14.0185Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_234_162">
                      <rect width="15" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://instagram.com/fgacyc"
                target="_blank"
                className="ms-5"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_234_164)">
                    <path
                      d="M22.1801 5.18066C21.2375 5.18066 20.4834 5.94296 20.4834 6.87739C20.4834 7.81181 21.2457 8.57411 22.1801 8.57411C23.1145 8.57411 23.8768 7.81181 23.8768 6.87739C23.8768 5.94296 23.1145 5.18066 22.1801 5.18066Z"
                      fill="black"
                    />
                    <path
                      d="M14.6227 7.36035C10.6883 7.36035 7.4834 10.5653 7.4834 14.4997C7.4834 18.4341 10.6883 21.639 14.6227 21.639C18.5572 21.639 21.7621 18.4341 21.7621 14.4997C21.7621 10.5653 18.5572 7.36035 14.6227 7.36035ZM14.6227 19.0735C12.0982 19.0735 10.049 17.0243 10.049 14.4997C10.049 11.9751 12.0982 9.92593 14.6227 9.92593C17.1473 9.92593 19.1965 11.9751 19.1965 14.4997C19.1965 17.0243 17.1473 19.0735 14.6227 19.0735Z"
                      fill="black"
                    />
                    <path
                      d="M20.2868 29H8.70481C3.90154 29 -0.00830078 25.0902 -0.00830078 20.2869V8.70492C-0.00010406 3.90984 3.90973 0 8.71301 0H20.295C25.0983 0 29.0081 3.90984 29.0081 8.71311V20.2951C29.0081 25.0984 25.0983 29.0082 20.295 29.0082L20.2868 29ZM8.71301 2.72951C5.41793 2.72951 2.7294 5.40984 2.7294 8.71311V20.2951C2.7294 23.5902 5.40973 26.2787 8.71301 26.2787H20.295C23.5901 26.2787 26.2786 23.5984 26.2786 20.2951V8.71311C26.2786 5.41803 23.5983 2.72951 20.295 2.72951H8.71301Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_234_164">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/user/fgacyc"
                target="_blank"
                className="ms-5"
              >
                <svg
                  width="29"
                  height="21"
                  viewBox="0 0 29 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_234_168)">
                    <path
                      d="M29 6.58284C29 2.94517 26.1524 0 22.6353 0H6.36467C2.84757 0 0 2.94517 0 6.58284V14.4172C0 18.0548 2.84757 21 6.36467 21H22.6353C26.1524 21 29 18.0548 29 14.4172V6.58284ZM19.4328 11.0882L12.1324 14.826C11.8501 14.9845 10.874 14.7759 10.874 14.4338V6.76639C10.874 6.42431 11.8501 6.21573 12.1405 6.3826L19.1263 10.3123C19.4167 10.4875 19.7232 10.9213 19.4328 11.0882Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_234_168">
                      <rect width="29" height="21" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section className={``}>
          <div className={`mx-auto w-full max-w-[961.7px] pt-24`}>
            <h2
              className={`text-5xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
            >
              Age Groups
            </h2>
            <div className={`mt-12 w-full px-[30px]`}>
              <Slider {...settings}>
                {ageGroupData.map((age_group) => (
                  <div
                    key={age_group.name}
                    className={`${age_group.css} h-[616px] rounded-[70px]`}
                  >
                    <div
                      className={`flex items-center justify-center pb-[30px] pt-[30px]`}
                    >
                      <img src={age_group.img} alt="" />
                    </div>
                    <div
                      className={`justtify-center flex flex-col items-center`}
                    >
                      <div className={`w-[263px]`}>
                        <p className={`text-3xl font-bold`}>{age_group.name}</p>
                        <p className={`text-2xl font-semibold`}>
                          {age_group.ages}
                        </p>
                        <br />
                        <p className={`text-xl`}>
                          Saturday {age_group.saturday}
                        </p>
                        <p className={`text-xl`}>Sunday {age_group.sunday}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className={``}>
          <div className={`mx-auto w-full max-w-[954px] pt-24`}>
            <h2
              className={`text-5xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
            >
              Resources
            </h2>
            <div className={`mt-12`}>
              <div
                className={`max-[807px]:flex max-[807px]:justify-center min-[808px]:mr-2 min-[808px]:inline-block min-[816px]:mr-4 min-[824px]:mr-6 min-[832px]:mr-8 min-[840px]:mr-10`}
              >
                <div
                  className={`flex max-h-[402px] max-w-[402px] justify-center rounded-3xl bg-[#FFFFFF] bg-opacity-10 p-4`}
                >
                  <div
                    className={`h-[90vw] w-[90vw] bg-cover p-5 min-[380px]:h-[367px] min-[380px]:w-[367px]`}
                    style={{ backgroundImage: `url(${rcvSrcPath})` }}
                  >
                    <b className={`text-[28px] font-bold`}>Verse Cards</b>
                    <p className={`mb-12 text-[20px] font-semibold`}>
                      Scripture memorization cards for your kids
                    </p>
                    <button
                      className={`download-arrow w-[257px] max-w-[300px] items-center rounded-full bg-[#00EDC2] px-4 py-2 font-bold max-[320px]:w-full`}
                    >
                      Download&nbsp;
                      <svg
                        className={`inline-block`}
                        width="22"
                        height="12"
                        viewBox="0 0 44 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`max-[807px]:mt-6 max-[807px]:flex max-[807px]:justify-center min-[808px]:inline-block`}
              >
                <div
                  className={`flex max-h-[402px] max-w-[402px] justify-center rounded-3xl bg-[#FFFFFF] bg-opacity-10 p-4`}
                >
                  <div
                    className={`h-[90vw] w-[90vw] bg-cover p-5 min-[380px]:h-[367px] min-[380px]:w-[367px]`}
                    style={{ backgroundImage: `url(${rcvSrcPath})` }}
                  >
                    <b className={`text-[28px] font-bold`}>
                      Zoom Connect Group
                    </b>
                    <p className={`mb-12 text-[20px] font-semibold`}>
                      Let your kids join our weekly zoom CG.
                    </p>
                    <button
                      className={`download-arrow w-[199px] max-w-[300px] items-center rounded-full bg-[#00EDC2] px-4 py-2 font-bold max-[320px]:w-full`}
                    >
                      Join&nbsp;
                      <svg
                        className={`inline-block`}
                        width="22"
                        height="12"
                        viewBox="0 0 44 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={``}>
          <div className={`mx-auto max-w-[954px] pt-24`}>
            <div className="flex flex-wrap gap-2 py-5 sm:py-8">
              <div className="flex w-auto max-w-[655px] flex-wrap gap-2">
                <img src={photo1.src} alt="" className="w-full md:w-auto" />
                <img src={photo2.src} alt="" className="w-full md:w-auto" />
                <img src={photo4.src} alt="" className="w-full md:w-auto" />
              </div>
              <div className="flex w-auto flex-wrap justify-center gap-2 sm:flex-nowrap lg:max-w-[281px] lg:flex-wrap">
                <img src={photo3.src} alt="" className="w-full md:w-auto" />
                <img
                  src={photo5.src}
                  alt=""
                  className="w-full sm:object-cover md:w-auto lg:object-none"
                />
              </div>
              <div className="flex w-auto flex-wrap gap-2">
                <img src={photo7.src} alt="" className="w-full md:w-auto" />
                <img src={photo6.src} alt="" className="w-full md:w-auto" />
                <img src={photo8.src} alt="" className="w-full md:w-auto" />
                <img src={photo9.src} alt="" className="w-full md:w-auto" />
                <img src={photo10.src} alt="" className="w-full md:w-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className={``}>
          <div className={`mx-auto max-w-[955px] pb-24 pt-24`}>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-4/12">
                <div className="text-8xl font-bold text-white max-lg:text-center lg:text-9xl">
                  FAQ
                </div>
              </div>
              <div className="w-full lg:w-9/12">
                <WkFAQAccordion />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}