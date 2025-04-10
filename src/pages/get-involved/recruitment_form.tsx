import {getAllDisplayMinistries} from "~/pages/get-involved/ministries_data";
import React, {useState} from "react";
import {satellite_pastoralTeam} from "~/data/pastoral";
import CompletedForm from "~/components/Form/CompletedForm";
import FormInput from "~/components/Form/FormInput";
import FormCascader, {convertDataToOptions} from "~/components/Form/FormCascader";
import FormCombobox from "~/components/Form/FormCombobox";
import ArrowButton from "~/components/ArrowButton";
interface FormProps {
    isFormVisible: boolean;
    setIsFormVisible: (value: boolean) => void;
}

const RecruitForm = ({isFormVisible, setIsFormVisible}: FormProps) => {
    const ministry_options = getAllDisplayMinistries();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

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
            nameError ||
            phoneNumberError ||
            emailError
        ) {
            valid = false;
        }

        return valid;
    };

    // todo: add validation
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsButtonClicked(true);

        if (!handleValidation()) {
            alert("Please fill in the form correctly");
            setIsButtonClicked(false);
            return;
        }

        const res = await fetch("/api/get_involved", {
            method: "POST",
            body: JSON.stringify({
                name,
                phone_number: phoneNumber.startsWith("0")
                    ? "+60" + phoneNumber.substring(1)
                    : phoneNumber,
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
        setIsButtonClicked(false);
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
                            setIsSubmitted(false)
                            setIsFormVisible(false);
                        }}
                    />
                </div>
            ) : (
                <form
                    onSubmit={(e) => void handleSubmit(e)}
                    className="mx-auto my-[82px] flex md:w-4/5 w-full md:rounded-0 rounded-3xl flex-col items-center justify-center
          bg-[#F5F5F8] py-[42px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                >
                    <h6 className="sf-pro-display-black mb-[42px] w-4/5 text-center text-2xl">Get involved</h6>
                    <h6 className="sf-pro-display mx-auto flex w-4/5 flex-col"></h6>
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
                        isSubmitted={isButtonClicked}
                        className="mt-[111px] w-4/5 sm:w-auto"
                    />
                </form>
            )}
        </div>
    );
};


export default  RecruitForm;