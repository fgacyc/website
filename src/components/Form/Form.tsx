import FormInput from "./FormInput";
import { useState } from "react";
import CompletedForm from "./CompletedForm";
import FormCombobox from "./FormCombobox";
import FormCheckList from "./FormCheckList";
import { Button } from "@nextui-org/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const handleNavigation = async () => {
    try {
      await router.push("/");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };
  const pastoral_status = [
    { value: "new_believer", label: "New Believer" },
    { value: "member", label: "Member" },
    { value: "small_group_leader", label: "Small Group Leader" },
    { value: "cgLeader", label: "CG Leader" },
    { value: "coach", label: "Coach" },
  ];

  const service_location_list = [
    { value: "fgaCycKuchaiLama", label: "FGA CYC Kuchai Lama" },
    { value: "fgaCycSetapak", label: "FGA CYC Setapak" },
    { value: "fgaCycKepong", label: "FGA CYC Kepong" },
    { value: "fgaCycSgLong", label: "FGA CYC Sg. Long" },
    { value: "fgaCycSeremban", label: "FGA CYC Seremban" },
  ];

  const t_shirt_size_list = [
    { value: "xs", label: "Extra Small (XS)" },
    { value: "s", label: "Small (S)" },
    { value: "m", label: "Medium (M)" },
    { value: "l", label: "Large (L)" },
    { value: "xl", label: "Extra Large (XL)" },
    { value: "2xl", label: "2XL" },
    { value: "3xl", label: "3XL" },
  ];

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [icNo, setIcNo] = useState<string>("");

  const [chineseName, setChineseName] = useState<string>("");

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [pastoralStatus, setPastoralStatus] = useState<string>(
    pastoral_status[0]!.value
  );
  const [serviceLocation, setServiceLocation] = useState<string>(
    service_location_list[0]!.value
  );
  //   const [ministry, setMinistry] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [dobError, setDobError] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [cglName, setCglName] = useState<string>("");
  const [pastoralTeam, setPastoralTeam] = useState<string>("");
  const [selectedTShirt, setSelectedTShirt] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      phoneNumber,
      pastoralStatus,
      //   ministry,
    });
    setIsSubmitted(true);
  };

  const setSubmitAndRedirect = async () => {
    try {
      setIsSubmitted(true);
      await handleNavigation();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {isSubmitted ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <CompletedForm
            bg_color="bg-white"
            tick_bg="bg-[#1FC4CF]"
            tick_color="white"
            button_color="bg-black"
            text="COMPLETED!"
            desc="We have received your submission, and we will be in touch soon!"
            onClick={setSubmitAndRedirect}
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-[82px] mt-5 grid w-4/5  grid-cols-2 items-center gap-4 rounded-[20px]	bg-white p-10 py-[63px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <div className="sf-pro-display-black mb-[76px] w-4/5 text-left text-[33px] font-bold ">
            Register For Water Baptism
          </div>
          <div className="sf-pro-display mx-auto flex w-4/5 flex-col text-xl"></div>
          <FormInput
            className="w-full"
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
            className=" w-full"
            label="&nbsp;"
            type="text"
            name="name"
            id="name"
            validate={(inputValue: string) => /^[A-Za-z\s]+$/.test(inputValue)}
            placeholder="Chinese Name"
            value={chineseName}
            onInputChange={(value) => setChineseName(value)}
            error={nameError}
            setError={setNameError}
          />

          <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900">
              Gender
            </legend>

            <div className="mb-3 mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="male"
                  name="male"
                  type="radio"
                  value={gender}
                  checked={gender === "male"}
                  onChange={(e) => {
                    setGender(e.target.name);
                  }}
                  className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="male"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="female"
                  name="female"
                  type="radio"
                  value={gender}
                  checked={gender === "female"}
                  onChange={(e) => {
                    setGender(e.target.name);
                  }}
                  className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="female"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Female
                </label>
              </div>
            </div>
          </fieldset>

          <FormInput
            className="col-span-2 w-full"
            label="Date of Birth"
            type="dob"
            name="dob"
            id="dob"
            validate={(inputValue: string) =>
              /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(
                inputValue
              )
            }
            placeholder="DD/MM/YYYY"
            value={dob}
            onInputChange={(value) => setDob(value)}
            error={dobError}
            setError={setDobError}
            desc={"Date, Month, year"}
          />

          <FormInput
            className="col-span-2 w-full"
            label="I.C No"
            type="text"
            name="icNo"
            id="icNo"
            validate={(inputValue: string) =>
              /^\d{6}-\d{2}-\d{4}$/.test(inputValue)
            }
            placeholder="xxxxxx-xx-xxxx"
            value={icNo}
            onInputChange={(value) => setIcNo(value)}
            error={dobError}
            setError={setDobError}
          />

          <FormInput
            className="col-span-2 w-full"
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

          <FormCombobox
            label="Pastoral Status"
            name="pastoral_status"
            id="pastoral_status"
            options={pastoral_status}
            className="col-span-2 w-full"
            selectedValue={pastoralStatus}
            onValueChange={(value) => setPastoralStatus(value)}
          />

          <FormCombobox
            label="Service Location"
            name="service_location"
            id="service_location"
            options={service_location_list}
            className="col-span-2 w-full"
            selectedValue={serviceLocation}
            onValueChange={(value) => setServiceLocation(value)}
          />

          <FormInput
            className="col-span-2 w-full"
            label="Pastoral Team"
            type="text"
            name="pastoralTeam"
            id="pastoralTeam"
            validate={(inputValue: string) => /^\S+@\S+\.\S+$/.test(inputValue)}
            placeholder="eg. Jason Team"
            value={pastoralTeam}
            onInputChange={(value) => setPastoralTeam(value)}
            error={emailError}
            setError={setEmailError}
          />

          <FormInput
            className="col-span-2 w-full"
            label="CGL Name"
            type="text"
            name="cglName"
            id="cglName"
            validate={(inputValue: string) => /^\S+@\S+\.\S+$/.test(inputValue)}
            placeholder="eg. Albert Mah"
            value={cglName}
            onInputChange={(value) => setCglName(value)}
            error={emailError}
            setError={setEmailError}
          />

          <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900">
              Baptism T-Shirt Size
            </legend>
            <span className="text-xs text-[#B2B2B2] ">
              {" "}
              Delivery will be arranged in a follow-up call.{" "}
            </span>
            {t_shirt_size_list.map((elem, index) => (
              <FormCheckList
                key={index}
                id={elem.value}
                label={elem.label}
                name={elem.value}
                value={selectedTShirt}
                onInputSelect={(value) => setSelectedTShirt(value)}
              />
            ))}
          </fieldset>
          <br />
          <div className="col-span-2 flex justify-center">
            <Button
              color="success"
              type="submit"
              id="baptiseBtn"
              className="mt-5 w-[200px] rounded-full bg-[#1FC4CF] px-5 py-3 text-lg font-bold text-white lg:w-72 lg:text-lg"
            >
              I want to be baptised &nbsp;
              <ArrowLongRightIcon className="size-10 w-24 " />
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
