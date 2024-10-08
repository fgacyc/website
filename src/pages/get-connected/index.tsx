import { Divider } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ArrowButton from "~/components/ArrowButton";
import CompletedForm from "~/components/Form/CompletedForm";
import FormCheckList from "~/components/Form/FormCheckList";
import FormCombobox from "~/components/Form/FormCombobox";
import FormInput from "~/components/Form/FormInput";
import { cgLocations } from "~/data/locations";

export default function GetConnected() {
  const [isNeedHelp, setIsNeedHelp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState(cgLocations[0]!.value);
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  // const [locationError, setLocationError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const router = useRouter();

  const categories_list = [
    { value: "secondary", label: "Secondary Students" },
    { value: "tertiary", label: "College / University" },
    { value: "young_adult", label: "Young Adults" },
    { value: "married", label: "Married" },
    { value: "family", label: "Family" },
    { value: "entrepreneur", label: "Entrepreneur" },
  ];

  const handleValidation = (): boolean => {
    if (name.trim() === "" || nameError) {
      alert("Full Name cannot be empty");
      return false;
    }

    if (phoneNumber.trim() === "" || phoneNumberError) {
      alert("Phone number cannot be empty");
      return false;
    }

    if (age.trim() === "" || ageError) {
      alert("Age cannot be empty");
      return false;
    }

    if (parseInt(age) < 0) {
      alert("Age cannot be smaller than zero");
      return false;
    }

    if (category.trim() === "") {
      alert("Please select a category");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);

    if (!handleValidation()) {
      setIsButtonClicked(false);
      return;
    }

    const api = "find_cg";
    const data = {
      name,
      phone_number: phoneNumber.startsWith("0")
          ? "+60" + phoneNumber.substring(1)
          : phoneNumber,
      location,
      age: parseInt(age),
      kids: false,
      categories: [category],
    }
    await fetch("/api/" + api, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsButtonClicked(false);
        setIsSubmitted(true);
        setTimeout(() => {
          document.getElementById("completedRef")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      })
      .catch((err) => {
        console.log(err);
        setIsButtonClicked(false);
      });

    const newData  = {
      ...data,
      category: data.categories[0],
      type : "fgacyc_web"
    }
    const url = "https://uni.api.fgacyc.com/welcome_miniapp/find_cell_group"
    // const url = "http://127.0.0.1:5000/welcome_miniapp/find_cell_group"
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Get Connected | FGA CYC</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden bg-[#1d2129]">
        <div className="mt-[68px] text-white">
          <div className="relative flex flex-col items-center">
            <Image
              alt=""
              src={"/images/get-connected/banner.png"}
              width={1200}
              height={600}
              // width={100}
              // height={100}
              className="w-[90%] rounded-lg md:w-[80%]"
              // className="w-[90%] rounded-lg transition delay-150 duration-300 hover:-translate-y-7 md:w-[80%]"
            ></Image>
            <div className="absolute inset-0 ms-[15vw] mt-[3vw] h-fit sm:mt-[6.5vw] sm:block flex items-center ">
              <h3 className="w-[44vw] text-3xl font-bold sm:text-5xl md:w-[340px] md:text-6xl lg:w-[44vw] lg:text-8xl xl:text-9xl">
                Get Connected
              </h3>
              <div className="w-[35vw] text-[12px] sm:text-[14px] md:mt-1 md:w-[192px] lg:w-[25vw] lg:text-lg sm:leading-5 xl:text-xl">
                We believe life transformation happens through real and
                authentic relationships, and no one should be alone in their
                journey pursuing God.
              </div>
            </div>
          </div>
          <div className="mb-[16.45vw] mt-[13vw]">
            <div className={"sm:m-auto m-4"}>
              <div className="sm:ms-[20vw] ">
                {/* <div className="ms-[20vw] transition delay-150 duration-300 hover:-translate-y-7"> */}
                <h3 className="sm:w-[55vw] w-full text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl ">
                  How to Get Connect?
                </h3>
                <h6 className="mt-[2vw] sm:w-[52vw]  w-full text-[12px] leading-tight sm:text-[112px] lg:text-xl">
                  Connect Groups are where we pray for each other, learn about
                  the Word, and put our faith into practice. These gatherings
                  happen once a week, and no matter what stage of life you are
                  in, there will be a Connect Group suitable for you!
                </h6>
              </div>
              <div className="flex w-full flex-col items-center">
                <Divider className="mb-[6vw] mt-[5vw] sm:w-3/5 w-full bg-white"></Divider>
              </div>
              <div className="sm:ms-[20vw] sm:flex">
                <h3 className="sm:w-[34vw] w-full text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl mb-3 ">
                  What is Connect Group?
                </h3>
                <div className="sm:ms-[3.6vw] flex items-end">
                  <div>
                    <h6 className="mb-[3.33vw] sm:w-[22vw] w-full text-[12px] leading-tight sm:text-[10px] lg:mb-[2vw] lg:text-lg">
                      Connect Groups is a Godly community where you will find
                      your second (spiritual) family where everyone aims to be
                      more like Jesus.
                    </h6>
                    <button
                      onClick={() => {
                        setIsNeedHelp(true);
                        setTimeout(() => {
                          document.getElementById("formRef")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 100);
                      }}
                      className="flex sm:w-[30vw] items-center justify-between rounded-[35px] bg-[#00EDC2] px-2 py-1 text-[12px] font-bold text-black sm:mt-5  sm:text-[10px] md:mt-0 lg:px-4 lg:py-2 lg:text-xl xl:px-10 xl:py-3.5"
                    >
                      Find a ConnectGroup{" "}
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className="ml-1 w-[2.9vw] sm:ml-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isNeedHelp ? (
            <div className="bg-white bg-[url('/images/get-connected/get-connected-bg.png')] bg-cover pb-[5.83vw] pt-[5.83vw]">
              {isSubmitted ? (
                <div
                  className="flex h-screen flex-col items-center justify-center"
                  id="completedRef"
                >
                  <CompletedForm
                    bg_color="bg-[#00EDC2]"
                    tick_bg="bg-white"
                    tick_color="#00EDC2"
                    button_color="bg-black"
                    button_text="Keep Exploring"
                    text="COMPLETED!"
                    desc="We have received your request."
                    // onClick={() => setIsSubmitted(false)}
                    onClick={() => {
                      void router.push("");
                    }}
                  />
                </div>
              ) : (
                <form
                  onSubmit={(e) => void handleSubmit(e)}
                  className="mx-auto my-[82px] flex w-4/5 flex-col items-center justify-center rounded-[20px] bg-[#00edc2] py-[63px] text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                >
                  <div
                    id="formRef"
                    className="sf-pro-display-black mb-[76px] w-4/5 text-left text-[33px]"
                  >
                    Find a Connect Group
                  </div>
                  <div className="sf-pro-display mx-auto flex w-4/5 flex-col text-xl"></div>
                  <FormInput
                    className="w-4/5"
                    label="Your name"
                    type="text"
                    name="name"
                    id="name"
                    validate={(inputValue: string) =>
                      /^[A-Za-z\s]+$/.test(inputValue)
                    }
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

                  {/* <FormInput
                    className="w-4/5"
                    label="Locations"
                    type="text"
                    name="location"
                    id="location"
                    validate={(inputValue: string) =>
                      /^[A-Za-z\s]+$/.test(inputValue)
                    }
                    placeholder="Your location"
                    value={location}
                    onInputChange={(value) => setLocation(value)}
                    error={locationError}
                    setError={setLocationError}
                  /> */}

                  <FormCombobox
                    label="Service Location"
                    name="service_location"
                    id="service_location"
                    options={cgLocations}
                    className="w-4/5"
                    selectedValue={location}
                    onValueChange={(value) => setLocation(value)}
                  />

                  <FormInput
                    className="w-4/5"
                    label="Age"
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Your age"
                    value={age}
                    onInputChange={(value) => setAge(value)}
                    error={ageError}
                    setError={setAgeError}
                  />

                  <div className="w-4/5">
                    <fieldset>
                      <legend className="sf-pro-display text-xl font-semibold leading-6 text-gray-900">
                        Categories
                      </legend>
                      {categories_list.map((elem, index) => (
                        <FormCheckList
                          key={index}
                          id={elem.value}
                          label={elem.label}
                          name={elem.value}
                          value={category}
                          onInputSelect={(value) => setCategory(value)}
                        />
                      ))}
                    </fieldset>
                  </div>

                  <ArrowButton
                    text="Submit your request"
                    text_color="text-white"
                    arrow_color="white"
                    bg_color="bg-black"
                    isSubmitted={isButtonClicked}
                    className="mt-[111px] w-4/5 sm:w-auto"
                  />
                </form>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-col items-center bg-[#d9d9d9] pb-[8.89vw] pt-[8.89vw] text-black">
            <div>
              <div className="sf-pro-display flex flex-col items-center text-[8.33vw] font-bold">
                Need help?
              </div>
              <div className="mt-[1.18vw] flex flex-col items-center text-[12px] sm:text-[12px] lg:text-lg xl:text-xl">
                Don&#39;t hesitate to reach out to us, we&#39;d love to help
                you!
              </div>
              <div className="mt-[1.94vw] flex flex-col items-center">
                <a href="mailto:info@fgacyc.com">
                  <button className="border-b-solid flex items-center border-b-2 border-black text-xs font-bold text-black lg:border-b-3 lg:pb-[0.625vw] lg:text-[2.29vw] xl:border-b-4">
                    Let&#39;s Talk
                    <div className="w-[1.18vw]"></div>
                    <div className="w-[2.92vw]">
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className=""
                      />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
