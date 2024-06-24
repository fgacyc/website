import FormInput from "~/components/Form/FormInput";
import FormCombobox from "~/components/Form/FormCombobox";
import {cgLocations} from "~/data/locations";
import ArrowButton from "~/components/ArrowButton";
import React, {useState} from "react";
import FormTextArea from "~/components/Form/FormTextArea";

const PrayerRequest: React.FC = () => {
    const [name, setName] = React.useState<string>("");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");
    const [location, setLocation] = React.useState<string>("");
    const [comment, setComment] = React.useState<string>("");

    const [nameError, setNameError] =  useState<boolean>(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
    const [commentError, setCommentError] = useState<boolean>(false);



    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({
            name,
            phoneNumber,
            location
        })
    }


    return (
        <div className={"py-[100px]"}>
            <form
                onSubmit={(e) => void handleSubmit(e)}
                className={`mx-auto  flex sm:w-4/5 w-11/12 flex-col items-center justify-center rounded-[20px] bg-[#00edc2] 
                py-[63px] text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
            >
                <div className="sf-pro-display-black mb-[76px] w-4/5 text-left text-[33px]">
                    I Have a Prayer Request
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
                    label="Share your prayer request below"
                    placeholder="Your request here"
                    name="message"
                    id="message"
                    className="w-4/5"
                    value={comment}
                    onInputChange={(value) => setComment(value)}
                    error={commentError}
                    setError={setCommentError}
                />


                <ArrowButton
                    text="Share prayer request"
                    text_color="text-white"
                    arrow_color="white"
                    bg_color="bg-black"
                    className="mt-[50px] w-4/5 sm:w-auto"
                />
            </form>
        </div>
    )
};

export default PrayerRequest;