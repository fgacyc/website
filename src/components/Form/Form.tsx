import FormInput from "./FormInput";
import { useState } from "react";
import CompletedForm from "./CompletedForm";
import FormCombobox from "./FormCombobox";

export default function Form() {
  // todo: add actual pastoral options
  const pastoral_options = [
    { value: "ps._melvin_zone", label: "Ps. Melvin Zone" },
    { value: "ps._daniel_zone", label: "Ps. Daniel Zone" },
    { value: "json_zone", label: "Json Zone" },
    { value: "xxxx1", label: "xxxx1" },
    { value: "xxxx2", label: "xxxx2" },
  ];

  const pastoral_status = [
    { value: "new_believer", label: "New Believer" },
    { value: "member", label: "Member" },
    { value: "small_group_leader", label: "Small Group Leader" },
    { value: "cgLeader", label: "CG Leader" },
    { value: "coach", label: "Coach" },
  ];

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pastoralStatus, setPastoralStatus] = useState<string>(
    pastoral_status[0]!.value
  );
  //   const [ministry, setMinistry] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [dobError, setDobError] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");

  //   const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log("event ", event.target.value);
  //     setGender(event.target.value);

  //     console.log("Gender *** ", gender);
  //   };

  // todo: add validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      phoneNumber,
      email,
      pastoralStatus,
      //   ministry,
    });
    setIsSubmitted(true);
  };

  return (
    <>
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
          className="mx-auto my-[82px]  grid  w-4/5 grid-cols-2 items-center gap-4 rounded-[20px]  py-[63px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
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
            value={name}
            onInputChange={(value) => setName(value)}
            error={nameError}
            setError={setNameError}
          />

          <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900">
              Gender
            </legend>

            <div className="mt-6 space-y-6">
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

          <FormInput
            className="col-span-2"
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
        </form>
      )}
    </>
  );
}
