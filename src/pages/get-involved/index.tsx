import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import FormCombobox from "~/components/Form/FormCombobox";
import FormInput from "~/components/Form/FormInput";
import CompletedForm from "~/components/Form/CompletedForm";
import Banner from "~/components/Banner";
import { ministry_data, team_data } from "~/data/ministry";
import Link from "next/link";
import ArrowLink from "~/components/ArrowLink";
import FormCascader, {
  convertDataToOptions,
} from "~/components/Form/FormCascader";
import { satellite_pastoralTeam } from "~/data/pastoral";

interface TeamDescCardProps {
  index: number;
  title: string;
  subtitle?: string;
  desc1: string;
  desc2: string;
  setIsFormVisible: (value: boolean) => void;
  onLearnMoreClick: () => void;
}

const TeamDescCard = ({
  index,
  title,
  subtitle,
  desc1,
  desc2,
  setIsFormVisible,
  onLearnMoreClick,
}: TeamDescCardProps) => {
  return (
    <div className="sf-pro-display mb-32 text-xl lg:w-1/2">
      <div className="sf-pro-display-black mb-7 text-[33px]">{title}</div>
      {subtitle && <div className="sf-pro-display-black">{subtitle}</div>}
      <div className="microsoft-yahei mt-7">{desc1} </div>
      <div className="microsoft-yahei mt-10">{desc2}</div>
      <div className="mt-5 items-center justify-between md:flex">
        <Link href={`#ministry_${index}`} onClick={onLearnMoreClick}>
          <div className="flex w-[140px] items-center justify-between border-b-[3px] border-black pb-1.5 font-semibold">
            Learn More{" "}
            <Image
              src={"/icons/right_arrow.svg"}
              width={32}
              height={32}
              alt="right arrow icon"
              className="ml-3"
            />
          </div>
        </Link>
        <ArrowLink
          href="#get_involved_form"
          text="Get involved now"
          arrow_color="black"
          bg_color="bg-[#00EDC2]"
          className="mt-5 md:mt-0"
          onClick={() => setIsFormVisible(true)}
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
  const ministry_list = ministry_data;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id={`ministry_${index}`}
      className={`relative h-screen bg-[#241F20] px-10 pt-11`}
    >
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 transform md:block"
        >
          <Image
            src={"/icons/carousel_left_arrow.svg"}
            alt="Right Arrow"
            width={40}
            height={67}
          />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-auto scrollbar-hide"
        >
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
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 transform md:block"
        >
          <Image
            src={"/icons/carousel_right_arrow.svg"}
            alt="Right Arrow"
            width={40}
            height={67}
          />
        </button>
      </div>
      <div className="absolute bottom-10 left-10 flex items-center md:hidden">
        <div className="mr-3 whitespace-nowrap text-[10px] font-thin uppercase tracking-widest text-white">
          SWIPE LEFT FOR MORE
        </div>
        <div className="h-[1px] w-[50px] bg-[#919191]"></div>
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

interface ExploreProps {
  setIsFormVisible: (value: boolean) => void;
}

const Explore = ({ setIsFormVisible }: ExploreProps) => {
  const teamDescCards = team_data;

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
              index={index}
              {...teamDescCard}
              setIsFormVisible={setIsFormVisible}
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

interface FormProps {
  isFormVisible: boolean;
  setIsFormVisible: (value: boolean) => void;
}

const Form = ({ isFormVisible, setIsFormVisible }: FormProps) => {
  const ministry_list = ministry_data;

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
  const [pastoralTeam, setPastoralTeam] = useState(
    satellite_pastoralTeam["Kuchai YW"][0]
  );
  const [ministry, setMinistry] = useState(ministry_options[0]!.value);
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const resetForm = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
    setPastoralTeam(satellite_pastoralTeam["Kuchai YW"][0]);
    setMinistry(ministry_options[0]!.value);
    setNameError(false);
    setPhoneNumberError(false);
    setEmailError(false);
  };

  const handleValidation = () => {
    let valid = true;

    if (
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      !nameError ||
      !phoneNumberError ||
      !emailError
    ) {
      valid = false;
    }

    return valid;
  };

  // todo: add validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) {
      alert("Please fill in the form correctly");
      return;
    }

    const res = await fetch("/api/get_involved", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone_number: phoneNumber,
        email,
        pastoral: pastoralTeam,
        ministry,
      }),
    });

    if (res.status === 200) {
      setIsSubmitted(true);
      resetForm();
    } else {
      alert("Failed to submit");
    }
  };

  return (
    <div id="get_involved_form" className={isFormVisible ? "block" : "hidden"}>
      {isSubmitted ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <CompletedForm
            bg_color="bg-[#00EDC2]"
            tick_bg="bg-white"
            tick_color="#00EDC2"
            button_color="bg-black"
            text="COMPLETED!"
            button_text="Yay!"
            desc="We have received your submission, and we will be in touch soon!"
            onClick={() => {
              setIsSubmitted(false), setIsFormVisible(false);
            }}
          />
        </div>
      ) : (
        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="mx-auto my-[82px] flex w-4/5 flex-col items-center justify-center rounded-[20px] 
          bg-[#F5F5F8] py-[63px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
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

          <FormCascader
            label="Pastoral Team"
            name="pastoral_team"
            id="pastoral_team"
            options={convertDataToOptions(satellite_pastoralTeam)}
            className="w-4/5"
            selectedValue={pastoralTeam!}
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
    </div>
  );
};

const GetInvolved = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="bg-[url('/images/get-involved/bg_white.png')] pt-[68px]">
      <div className="bg-white">
        <Banner
          text="Build our home together"
          desc='"Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
          img_url="/images/get-involved/get_involved.png"
          img_width={1258}
          img_height={622}
        />
      </div>
      <Explore setIsFormVisible={setIsFormVisible} />
      <Form isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
    </div>
  );
};

export default GetInvolved;
