import FormInput from "~/components/Form/FormInput";
import FormCombobox from "~/components/Form/FormCombobox";
import { cgLocations } from "~/data/locations";
import ArrowButton from "~/components/ArrowButton";
import React from "react";
import FormTextArea from "~/components/Form/FormTextArea";

const ConnectWithOurTeam: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("kuchai");
  const [comment, setComment] = React.useState<string>("");

  const [nameError, setNameError] = React.useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] =
    React.useState<boolean>(false);
  const [commentError, setCommentError] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/mobile", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone_number: phoneNumber,
        location,
        comment,
        type: "connect_with_our_team",
      }),
    })
      .then((r) => {
        console.log(r);
        alert("Thank you for your question. We will get back to you soon.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={"py-[100px]"}>
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className={`mx-auto  flex w-11/12 flex-col items-center justify-center rounded-[20px] bg-[#00edc2] py-[63px] 
                text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:w-4/5`}
      >
        <div className="sf-pro-display-black mb-[76px] w-4/5 text-left text-[33px]">
          Connect with our team
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

        <FormCombobox
          label="Service Location"
          name="service_location"
          id="service_location"
          options={cgLocations}
          className="w-4/5"
          selectedValue={location}
          onValueChange={(value) => setLocation(value)}
        />

        <FormTextArea
          label="Your Question"
          placeholder="Your question here"
          name="message"
          id="message"
          className="w-4/5"
          value={comment}
          onInputChange={(value) => setComment(value)}
          error={commentError}
          setError={setCommentError}
        />

        <ArrowButton
          text="Send Question"
          text_color="text-white"
          arrow_color="white"
          bg_color="bg-black"
          className="mt-[50px] w-4/5 sm:w-auto"
        />
      </form>
    </div>
  );
};

export default ConnectWithOurTeam;
