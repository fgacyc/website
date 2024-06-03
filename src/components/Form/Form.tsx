import FormInput from "./FormInput";
import { useState } from "react";
import CompletedForm from "./CompletedForm";
import FormCombobox from "./FormCombobox";
import FormCheckList from "./FormCheckList";
import { Button, Tooltip } from "@nextui-org/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
// import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

export default function Form() {
  const router = useRouter();

  interface PastoralTeam {
    value: string;
    label: string;
  }

  const handleNavigation = async () => {
    try {
      await router.push("/");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };
  const defaultPatoralLs = [
    { value: "Move", label: "Move" },
    { value: "Voice", label: "Voice" },
    { value: "Mind", label: "Mind" },
    { value: "Force", label: "Force" },
    { value: "Heart", label: "Heart" },
  ];
  const pastoral_team_with_location_list = {
    KuchaiYW: ["Move", "Voice", "Mind", "Force", "Heart"],
    KuchaiWK: ["GS - Joshua Zone"],
    KuchaiGS: [
      "GS - Daniel Yeo Zone",
      "GS - Ps Jasmine Zone",
      "GS - Ps Melvin Zone",
    ],
    Serdang: ["Adult", "Young Warrior", "Young Professional"],
    Kepong: ["Adult", "Young Warrior", "Young Professional"],
    USJ: ["Young Warrior", "General Service"],
    Setapak: ["Young Warrior", "Young Professional", "Adult"],
    sgLong: ["Young Warrior", "Young Professional", "Young Family"],
    Seremban: ["Young Warrior"],
    Penang: [],
    Johor: [],
  };
  const pastoral_status = [
    { value: "new_believer", label: "New Believer" },
    { value: "member", label: "Member" },
    { value: "small_group_leader", label: "Small Group Leader" },
    { value: "cgLeader", label: "CG Leader" },
    { value: "coach", label: "Coach" },
  ];

  const service_location_list = [
    { value: "kuchaiYw", label: "Kuchai YW" },
    { value: "kuchaiWk", label: "Kuchai WK" },
    { value: "kuchaiGs", label: "Kuchai GS" },
    { value: "Serdang", label: "Serdang" },
    { value: "Kepong", label: "Kepongn" },
    { value: "USJ", label: "USJ" },
    { value: "Setapak", label: "Setapak" },
    { value: "sgLong", label: "SG Long" },
    { value: "Seremban", label: "Seremban" },
    { value: "Penang", label: "Penang" },
    { value: "Johor", label: "Johor" },

    // { value: "fgaCycSeremban", label: "SG Long" },
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

  const [errorArr, setErrorArr] = useState<string[]>([]);

  const [chineseName, setChineseName] = useState<string>("");
  const [pastoralTeamList, setPastoralTeamList] =
    useState<PastoralTeam[]>(defaultPatoralLs);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [pastoralStatus, setPastoralStatus] = useState<string>(
    pastoral_status[0]!.value
  );
  const [serviceLocation, setServiceLocation] = useState<string>(
    service_location_list[0]!.value
  );
  //   const [ministry, setMinistry] = useState<string>("");
  const [tShirtErr, setTShirtErr] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [dobError, setDobError] = useState<boolean>(false);
  const [icNoError, setIcNoError] = useState<boolean>(false);
  const [genderErr, setGenderErr] = useState<boolean>(false);
  const [pastoralStatusError, setPastoralStatusError] =
    useState<boolean>(false);
  const [serviceLocationError, setServiceLocationError] =
    useState<boolean>(false);

  const [cglNameError, setCglNameError] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [cglName, setCglName] = useState<string>("");
  const [pastoralTeam, setPastoralTeam] = useState<string>("");
  const [selectedTShirt, setSelectedTShirt] = useState<string>("");

  const setPastoralTeamAndLoction = (e: string) => {
    const list: PastoralTeam[] = [];
    console.log({ e });
    console.log("changed");
    switch (e) {
      case "kuchaiYw":
        for (const val of pastoral_team_with_location_list.KuchaiYW) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "kuchaiWk":
        for (const val of pastoral_team_with_location_list.KuchaiWK) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "kuchaiGs":
        for (const val of pastoral_team_with_location_list.KuchaiGS) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Serdang":
        for (const val of pastoral_team_with_location_list.Serdang) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Kepong":
        for (const val of pastoral_team_with_location_list.Kepong) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "USJ":
        for (const val of pastoral_team_with_location_list.USJ) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Setapak":
        for (const val of pastoral_team_with_location_list.Setapak) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "sgLong":
        for (const val of pastoral_team_with_location_list.sgLong) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Seremban":
        for (const val of pastoral_team_with_location_list.Seremban) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Penang":
        for (const val of pastoral_team_with_location_list.Penang) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      case "Johor":
        for (const val of pastoral_team_with_location_list.Johor) {
          const locationAndPatoralTeamObj = { value: val, label: val };
          console.log({ val });
          list.push(locationAndPatoralTeamObj);
        }
        setPastoralTeamList(list);
        break;
      default:
    }
    setServiceLocation(e);
  };

  const errorMsgArr: string[] = [];

  const inputFieldChecker = (value: string, errorMsg: string) => {
    if (value.trim().length < 1) {
      errorMsgArr.push(errorMsg);
      return true;
    }
    return false;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(inputFieldChecker(name, "Full Name cannot be empty"));

    setPastoralStatusError(
      inputFieldChecker(pastoralStatus, "Please select pastoral status")
    );
    setGenderErr(inputFieldChecker(gender, "Please select Gender"));

    setDobError(inputFieldChecker(dob, "Date of birth cannot be empty"));
    setPhoneNumberError(
      inputFieldChecker(phoneNumber, "Phone number cannot be empty")
    );
    setPastoralStatusError(
      inputFieldChecker(pastoralStatus, "Please select Pastoral Sattus")
    );

    setServiceLocationError(
      inputFieldChecker(serviceLocation, "Please select Service Location")
    );

    setIcNoError(inputFieldChecker(icNo, "IC No cannot be empty"));
    setCglNameError(inputFieldChecker(cglName, "CGL name cannot be empty"));

    setTShirtErr(
      inputFieldChecker(selectedTShirt, "Please select your t-shirt size")
    );
    setErrorArr(errorMsgArr);

    console.log("errorArr : ", errorArr);
    console.log({
      name,
      chineseName,
      pastoralStatus,
      gender,
      icNo,
      dob,
      phoneNumber,
      pastoralTeam,
      cglName,
      selectedTShirt,
    });

    if (errorArr.length < 1) {
      const res = await fetch("/api/water_baptism", {
        method: "POST",
        body: JSON.stringify({
          name_en: name,
          name_cn: chineseName,
          gender,
          dob,
          ic_no: icNo,
          phone_no: phoneNumber,
          pastoral_status: pastoralStatus,
          service_location: serviceLocation,
          pastoral_team: pastoralTeam,
          cgl_name: cglName,
          t_shirt_size: selectedTShirt,
        }),
      });
      res.status === 200 ? setIsSubmitted(true) : alert("Failed to submit");

      setIsSubmitted(true);
    }
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
            desc="We have received your registration, and we will be in touch soon!"
            button_color="bg-black"
            text="CONGRATULATIONS!"
            button_text="Yay!"
            onClick={() => void setSubmitAndRedirect()}
          />
        </div>
      ) : (
        <form
          onSubmit={(e) => void handleSubmit(e)}
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
            validate={(value: string) => /^[A-Za-z\s]+$/.test(value)}
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
              Gender{" "}
              {genderErr && <span className="ml-1 text-[#FF0000]"> * </span>}
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
            validate={(value: string) =>
              /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/i.test(
                value
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
            validate={(value: string) => /^\d{6}-\d{2}-\d{4}$/.test(value)}
            placeholder="xxxxxx-xx-xxxx"
            value={icNo}
            onInputChange={(value) => setIcNo(value)}
            error={icNoError}
            setError={setIcNoError}
          />
          <FormInput
            className="col-span-2 w-full"
            label="Phone Number"
            type="tel"
            name="phone_number"
            id="phone_number"
            validate={(value: string) =>
              /^\+?[0-9]{1,3}-?[0-9]{3,4}-?[0-9]{4,}$/i.test(value)
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
            onValueChange={(value) => setPastoralTeamAndLoction(value)}
          />
          <FormCombobox
            label="Pastoral Team"
            name="pastoralTeam"
            id="service_location"
            options={pastoralTeamList}
            className="col-span-2 w-full"
            selectedValue={pastoralTeam}
            onValueChange={(value) => setPastoralTeam(value)}
          />
          <FormInput
            className="col-span-2 w-full"
            label="CGL Name"
            type="text"
            name="cglName"
            id="cglName"
            validate={(value: string) => /^[A-Za-z\s]+$/.test(value)}
            placeholder="eg. Albert Mah"
            value={cglName}
            onInputChange={(value) => setCglName(value)}
            error={cglNameError}
            setError={setCglNameError}
          />
          <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900">
              Baptism T-Shirt Size{" "}
              {tShirtErr && <span className="ml-1 text-[#FF0000]"> * </span>}
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
          <div className="col-span-2 w-full">
            {errorArr.map((e, int) => (
              <p className="ml-1 w-full text-[#FF0000]" key={int}>
                {" "}
                * {e}{" "}
              </p>
            ))}
          </div>
        </form>
      )}
    </>
  );
}
