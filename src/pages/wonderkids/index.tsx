import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WkFAQAccordion from "src/components/WkFAQAccordion";
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
      img: cradleLandImg,
      css: `bg-[#E05532] text-white`,
    },
    {
      name: "Shining Star",
      ages: "19mo - 3",
      saturday: "7.30PM - 8.45PM",
      sunday: "2.30PM - 3.45PM",
      img: shiningStarImg,
      css: `bg-[#7E32E0] text-white`,
    },
    {
      name: "Super Trooper",
      ages: "4 - 6",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: superTrooperImg,
      css: `bg-[#32E0A1] text-white`,
    },
    {
      name: "Wow Life",
      ages: "7 - 9",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: wowLifeImg,
      css: `bg-[#E0AF32] text-white`,
    },
    {
      name: "Wow Life",
      ages: "10 - 12",
      saturday: "5PM - 6.45PM",
      sunday: "2.30PM - 4.30PM",
      img: warriorImg,
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
      <main role="main" className={`bg-[#fab800]`}>
        <section
          className={"relative z-[0] bg-cover bg-no-repeat bg-center h-[810px]"}
          style={{ backgroundImage: `url(${wonderkidsBg.src})` }}
        >
          <div className={`mx-auto max-w-[1248px] pt-[68px]`}>
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
            className={`max-[929px]:hidden min-[930px]:block min-[930px]:absolute min-[930px]:right-0 min-[930px]:z-[2]`}
            width={`414`}
            height={`430`}
          />
          <div
            className={`relative z-[3] md:ml-[151px] lg:ml-[194px] xl:ml-[237px] 2xl:ml-[280px]`}
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
          {/* Vector 28 */}
          <svg className={`w-full max-[1267px]:hidden min-[1268px]:block min-[1268px]:absolute min-[1268px]:left-0 min-[1268px]:top-[410px] min-[1268px]:z-[1]`} viewBox="0 0 1440 1748" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1199 286C1295 223.6 1257.67 93.3333 1227 36L1271 0C1411.8 99.2 1444.33 232 1443 286V1748H-9V286C71 226.8 181.667 261.333 227 286C787 450.8 1108.33 354.667 1199 286Z" fill="#1C76C9" />
          </svg>
          <div className={`mx-auto mt-12 w-full max-w-[953px] relative z-[3]`}>
            <img src={`https://placehold.co/953x422`} alt="" width={`953`} height={`422`} />
          </div>
        </section>

        <section className={`relative z-[0] h-[1000px]`}>
          <div className={`mx-auto w-full max-w-[961.7px] relative mt-60`}>
            <h2
              className={`text-white text-5xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
            >
              Age Groups
            </h2>
            <div className={`mt-12 w-full px-[30px]`}>
              {/* Star 6 */}
              <svg className={`absolute left-[-30px] top-[300px] z-[0]`} width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1457 2.76992C31.3195 0.167941 35.5529 1.86778 35.3236 5.25055L34.7642 13.506C34.5738 16.3156 36.2141 18.9282 38.8273 19.9774L46.5058 23.0606C49.6522 24.3239 49.3438 28.8754 46.0557 29.7028L38.0314 31.7217C35.3006 32.4089 33.3227 34.7763 33.1323 37.5858L32.5729 45.8413C32.3436 49.224 27.9196 50.3372 26.1167 47.4657L21.7169 40.4581C20.2195 38.0732 17.3568 36.9237 14.6259 37.6108L6.60163 39.6298C3.31357 40.4571 0.887814 36.5936 3.06162 33.9916L8.36668 27.6417C10.1721 25.4806 10.3807 22.4028 8.88333 20.0179L4.4835 13.0103C2.68062 10.1388 5.60546 6.63787 8.75183 7.90123L16.4304 10.9844C19.0435 12.0337 22.0352 11.2809 23.8406 9.11989L29.1457 2.76992Z" stroke="white" strokeWidth="3" />
              </svg>
              <Slider {...settings}>
                {ageGroupData.map((age_group) => (
                  <div
                    key={age_group.name}
                    className={`${age_group.css} h-[616px] rounded-[70px]`}
                  >
                    <div
                      className={`flex items-center justify-center pb-[30px] pt-[30px]`}
                    >
                      <Image src={age_group.img.src} alt="" width={age_group.img.width} height={age_group.img.height} />
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
          {/* Vector 29 */}
          <svg className={`absolute w-full left-0 z-[1]`} viewBox="0 0 1440 2261" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M338.628 209.678C287.037 1.9308 86.0463 -12.718 -8 5.92594V2158C-8 2158 433 2388 717.5 2158C1002 1928 1443 2158 1443 2158V169.727C1420.43 412.631 1277.75 353.503 1209.23 293.576C1107.12 205.683 856.957 71.4462 673.164 237.644C489.371 403.841 373.559 288.249 338.628 209.678Z" fill="url(#paint0_linear_245_311)" />
            <defs>
              <linearGradient id="paint0_linear_245_311" x1="717.5" y1="0" x2="717.5" y2="1588" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FAB800" />
                <stop offset="1" stopColor="#FA8700" />
              </linearGradient>
            </defs>
          </svg>
        </section>

        <section className={`relative z-[0]`}>
          <div className={`mx-auto w-full max-w-[954px] pt-24 relative z-[2]`}>
            <h2
              className={`text-white text-5xl font-bold not-italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`}
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
            {/* Star 3 */}
            <svg className={`absolute right-[40px] top-[200px] z-[1]`} width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6069 2.34348C32.7124 -1.37362 38.7601 1.05472 38.4326 5.88725L37.8026 15.184C37.6561 17.3452 38.9179 19.3549 40.9281 20.162L49.5751 23.6341C54.0699 25.4389 53.6293 31.941 48.9321 33.1229L39.8956 35.3966C37.795 35.9251 36.2736 37.7462 36.1271 39.9074L35.4971 49.2042C35.1696 54.0367 28.8495 55.6269 26.274 51.5248L21.3192 43.6332C20.1673 41.7987 17.9653 40.9145 15.8646 41.443L6.82813 43.7167C2.13092 44.8986 -1.33446 39.3793 1.77098 35.6621L7.7452 28.5112C9.134 26.8489 9.29444 24.4813 8.14263 22.6468L3.18782 14.7552C0.612274 10.6531 4.79062 5.65179 9.28543 7.45659L17.9325 10.9286C19.9426 11.7358 22.2439 11.1568 23.6327 9.49442L29.6069 2.34348Z" fill="white" />
            </svg>
          </div>
          {/* Star 1 */}
          <svg className={`absolute left-[80px] top-[500px] z-[1]`} width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.5287 1.97788C38.6342 -1.73923 44.6819 0.689126 44.3544 5.52166L43.479 18.4388C43.3326 20.5999 44.5944 22.6096 46.6045 23.4168L58.6189 28.2409C63.1138 30.0457 62.6731 36.5478 57.9759 37.7297L45.4205 40.8888C43.3198 41.4173 41.7984 43.2384 41.6519 45.3996L40.7766 58.3167C40.4491 63.1493 34.129 64.7394 31.5535 60.6373L24.6692 49.6726C23.5174 47.8381 21.3153 46.9539 19.2146 47.4825L6.65919 50.6415C1.96198 51.8234 -1.50339 46.3041 1.60205 42.587L9.90274 32.6513C11.2915 30.989 11.452 28.6215 10.3002 26.7869L3.41585 15.8222C0.840312 11.7201 5.01866 6.71881 9.51347 8.52361L21.5279 13.3477C23.538 14.1549 25.8393 13.5759 27.2281 11.9135L35.5287 1.97788Z" fill="white" />
          </svg>
          {/* Star 4 */}
          <svg className={`absolute right-[80px] top-[600px] z-[1]`} width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5422 3.73769C30.716 1.13571 34.9494 2.83556 34.7201 6.21833L34.1607 14.4738C33.9703 17.2833 35.6106 19.8959 38.2238 20.9452L45.9023 24.0284C49.0487 25.2917 48.7403 29.8432 45.4522 30.6705L37.4279 32.6895C34.6971 33.3766 32.7192 35.744 32.5288 38.5536L31.9693 46.809C31.7401 50.1918 27.3161 51.305 25.5132 48.4335L21.1134 41.4258C19.616 39.041 16.7533 37.8915 14.0224 38.5786L5.99811 40.5976C2.71006 41.4249 0.284298 37.5614 2.45811 34.9594L7.76317 28.6094C9.5686 26.4484 9.77718 23.3706 8.27981 20.9857L3.87998 13.978C2.0771 11.1066 5.00195 7.60564 8.14831 8.869L15.8268 11.9522C18.44 13.0014 21.4317 12.2487 23.2371 10.0877L28.5422 3.73769Z" stroke="white" strokeWidth="3" />
          </svg>
          {/* Vector 30 */}
          <svg className={`absolute right-0 top-[500px] z-[1]`} viewBox="0 0 1440 765" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M486 274.058C210.8 344.458 46 154.058 -2 50.0579C92.6667 126.61 310.8 245.784 426 110.058C541.2 -25.6681 850 -7.82794 990 18.0579C1134 43.3912 1414 159.658 1382 422.058C1350 684.458 1454 675.391 1510 638.058V690.058C1434 756.724 1285.2 839.658 1298 638.058C1310.8 436.458 1172.67 340.724 1102 318.058C1011.33 274.058 761.2 203.658 486 274.058Z" fill="white" fillOpacity="0.15" />
          </svg>
          {/* Star 5 */}
          <svg className={`absolute left-0 top-[850px] z-[1]`} width="81" height="107" viewBox="0 0 81 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.7295 2.81191C42.9033 0.209936 47.1367 1.90978 46.9075 5.29255L44.8923 35.029C44.7019 37.8386 46.3422 40.4512 48.9554 41.5004L76.6137 52.6061C79.7601 53.8694 79.4517 58.4209 76.1636 59.2482L47.2598 66.5207C44.529 67.2079 42.5511 69.5753 42.3607 72.3848L40.3455 102.121C40.1163 105.504 35.6922 106.617 33.8893 103.746L18.041 78.5039C16.5437 76.119 13.6809 74.9696 10.9501 75.6567L-17.9537 82.9292C-21.2418 83.7565 -23.6675 79.8929 -21.4937 77.291L-2.38473 54.4182C-0.579297 52.2571 -0.370717 49.1793 -1.86809 46.7944L-17.7164 21.5526C-19.5193 18.6812 -16.5945 15.1802 -13.4481 16.4436L14.2103 27.5492C16.8234 28.5985 19.8151 27.8458 21.6205 25.6847L40.7295 2.81191Z" stroke="white" strokeWidth="3" />
          </svg>
          <div className={`mx-auto max-w-[954px] pt-24 relative z-[2]`}>
            <div className="flex flex-wrap gap-2 py-5 sm:py-8">
              <div className="flex w-auto max-w-[655px] flex-wrap gap-2">
                <Image src={photo1.src} alt="" className="w-full md:w-auto" width={photo1.width} height={photo1.height} />
                <Image src={photo2.src} alt="" className="w-full md:w-auto" width={photo2.width} height={photo2.height} />
                <Image src={photo4.src} alt="" className="w-full md:w-auto" width={photo4.width} height={photo4.height} />
              </div>
              <div className="flex w-auto flex-wrap justify-center gap-2 sm:flex-nowrap lg:max-w-[281px] lg:flex-wrap">
                <Image src={photo3.src} alt="" className="w-full md:w-auto" width={photo3.width} height={photo3.height} />
                <Image
                  src={photo5.src}
                  width={photo5.width}
                  height={photo5.height}
                  alt=""
                  className="w-full sm:object-cover md:w-auto lg:object-none"
                />
              </div>
              <div className="flex w-auto flex-wrap gap-2">
                <Image src={photo7.src} width={photo7.width} height={photo7.height} alt="" className="w-full md:w-auto" />
                <Image src={photo6.src} width={photo6.width} height={photo6.height} alt="" className="w-full md:w-auto" />
                <Image src={photo8.src} width={photo8.width} height={photo8.height} alt="" className="w-full md:w-auto" />
                <Image src={photo9.src} width={photo9.width} height={photo9.height} alt="" className="w-full md:w-auto" />
                <Image src={photo10.src} width={photo10.width} height={photo10.height} alt="" className="w-full md:w-auto" />
              </div>
            </div>
          </div>
          {/* Star 2 */}
          <svg className={`absolute right-[27px] top-[1000px] z-[1]`} width="84" height="86" viewBox="0 0 84 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.8088 2.44749C52.9143 -1.26962 58.962 1.15873 58.6345 5.99126L57.1997 27.1627C57.0533 29.3239 58.3151 31.3336 60.3252 32.1407L80.0171 40.0476C84.5119 41.8524 84.0713 48.3546 79.3741 49.5364L58.7954 54.7142C56.6948 55.2428 55.1734 57.0639 55.0269 59.225L53.5922 80.3965C53.2647 85.2291 46.9446 86.8193 44.3691 82.7172L33.0855 64.7457C31.9337 62.9112 29.7316 62.027 27.631 62.5556L7.05231 67.7334C2.35509 68.9152 -1.11028 63.3959 1.99516 59.6788L15.6002 43.394C16.989 41.7317 17.1494 39.3642 15.9976 37.5296L4.71408 19.5582C2.13853 15.4561 6.31688 10.4548 10.8117 12.2596L30.5036 20.1665C32.5137 20.9736 34.815 20.3946 36.2038 18.7322L49.8088 2.44749Z" fill="white" />
          </svg>
        </section>

        <section className={`relative z-[0]`}>
          <div className={`mx-auto max-w-[955px] pb-56 pt-60 relative z-[1]`}>
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
