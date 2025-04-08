import React, {useState} from "react";
import {getAllDisplayMinistries, ministriesData, type Ministry, type Team} from "~/pages/recruitment/ministries_data";
import {ministry_data} from "~/data/ministry";
import {satellite_pastoralTeam} from "~/data/pastoral";
import CompletedForm from "~/components/Form/CompletedForm";
import FormInput from "~/components/Form/FormInput";
import FormCascader, {convertDataToOptions} from "~/components/Form/FormCascader";
import FormCombobox from "~/components/Form/FormCombobox";
import ArrowButton from "~/components/ArrowButton";

const ArrowLinkButton = (props: { text: string, className?: string }) => {
    const {text, className,} = props;
    return (
        <button
            className={`flex items-center justify-between rounded-[35px] px-4 py-2 font-bold text-black bg-[#00EDC2] ${className}`}
            onClick={
                () => {
                    const element = document.getElementById("get_involved_form");
                    if (element) {
                        element.scrollIntoView({behavior: "smooth"});
                    }
                }
            }
        >
            {text}
            <svg
                width="44"
                height="24"
                viewBox="0 0 44 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"

            >
                <path
                    d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
                    fill="#000000"/>
            </svg>
        </button>
    )
}


// get
const MinistryCard = (props: { ministry: Ministry }) => {
    const {ministry} = props;
    return (
        <div
            className="flex flex-col items-center justify-between mb-16 bg-gradient-to-b from-black to-[#666666] md:rounded-lg rounded-t-2xl rounded-b-lg max-w-[300px] z-10">
            {/* 从fff 从上到下渐变到fff 20% */}
            <div
                className="text-white flex flex-col justify-start items-start  bg-gradient-to-b from-[#ffffff] to-[#fffff20]  rounded-lg ">
                <img src={ministry.img} alt="team image"
                     className={"md:rounded-lg rounded-2xl object-cover aspect-[16/12]"}/>

                <div className={"p-5"}>
                    <h6 className={"font-bold"}>{ministry.cnMinistryTitle}</h6>
                    <h6 className={"font-bold"}>{ministry.ministry}</h6>
                    <div className={"flex w-full mt-1 mb-2"}>
                        <div className={"flex items-center"}>
                            <img src="/images/get-involved/gear.svg" alt="skill"/>
                            <span className={"md:text-sm text-[12px]"}>技术等级</span>
                            <span className={"text-[#3AFFAC] font-semibold"}>{ministry.rate[0]}</span>
                        </div>
                        <div className={"flex items-center ml-2"}>
                            <img src="/images/get-involved/heart.svg" alt="commit"/>
                            <span className={"md:text-sm text-[12px]"}>委身等级</span>
                            <span className={"text-[#3AFFAC] font-semibold"}>{ministry.rate[1]}</span>
                        </div>
                    </div>
                    <div>{ministry.desc}</div>
                </div>
            </div>
        </div>
    )
}

const TeamCardWide = (props: { team: Team, index: number }) => {
    const {team, index} = props;

    return (
        <div className={"md:block hidden mr-4 text-white sticky top-0 md:max-w-[250px] w-full z-20"}>
            <img src={team.img} alt="team image"
                 className={"md:rounded-xl rounded-t-3xl md:aspect-[7/8] aspect-[16/9] w-full object-cover z-30"}/>
            <div className={"z-10 md:bg-transparent bg-black md:p-0 p-4 relative"}>
                <div className={"text-2xl font-semibold md:mt-4"}>{team.team_name_en}</div>
                <div className={"mt-3 text-sm"}>{team.department.combination}</div>
                <div className={"mt-3 text-gray-300"}>{team.description_short}</div>
                <ArrowLinkButton text={"Get involved now"} className={"mt-4"}/>
            </div>
        </div>
    )

}

function DirectGradientLine() {
    return (
        <div className="w-full h-8 bg-gradient-to-b from-black to-transparent flex items-center justify-center">
            <div className="w-full max-w-lg h-8">
                <svg className="w-full h-full" viewBox="0 0 400 15" preserveAspectRatio="none">
                    <path
                        d="M0,10 L180,10 L200,15 L220,10 L400,10"
                        stroke="#9CA3AF"
                        strokeWidth="1"
                        fill="none"
                    />
                </svg>
            </div>
        </div>
    );
}

interface FormProps {
    isFormVisible: boolean;
    setIsFormVisible: (value: boolean) => void;
}

const Form = ({isFormVisible, setIsFormVisible}: FormProps) => {
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
                    <h6 className="sf-pro-display-black mb-[76px] w-4/5">Get involved</h6>
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

const Recruitment = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);

    return (
        <div className={"pt-16"}>
            <div className={"relative mb-16"}>
                {/* hero image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
                <div
                    className={"absolute ml-4 md:ml-16 inset-0 flex flex-col items-start justify-center z-10 text-left"}>
                    <h1 className="text-5xl md:text-7xl text-[#00EDC2] font-bold text-center pt-16">Build</h1>
                    <h2 className="text-4xl md:text-6xl text-white text-center my-1 font-semibold">this house
                        together</h2>
                    <div className="text-lg md:text-2xl text-white text-left sm:block hidden">Get yourself involved in
                        serving
                        others and witness
                        a <br/> breakthrough in your spiritual growth.
                    </div>
                    <div className="text-lg md:text-2xl text-white text-left sm:hidden block">Get yourself involved in
                        serving
                        others and witness
                        a breakthrough in your spiritual growth.
                    </div>
                    <ArrowLinkButton text={"Get involved now"} className={"mt-2"}/>
                </div>
                {/* hero image */}
                <img src="/images/get-involved/hero_recruitment.jpg" alt="recruitment hero image"
                     className={"rounded-br-[10%] aspect-[1/1] sm:aspect-video object-cover "}/>
            </div>
            {/* ministries section */}
            {
                ministriesData.map((team, index) => {
                    return (
                        <div key={index}
                             className="flex md:flex-row flex-col items-start justify-start mb-16  md:px-16 md:pt-8 md:rounded-0 rounded-3xl bg-gradient-to-b from-black to-[#666666] relative">

                            <div
                                className={`absolute w-[500px] h-[500px] left-[-80px] top-[40px] z-0 blur-2xl pointer-events-none
                                ${index === 0 && "bg-[radial-gradient(circle,_#FF981A66_10%,_#FF981A00_100%)]"}
                                ${index === 1 && "bg-[radial-gradient(circle,_#1F75FF66_10%,_#1F75FF00_100%)]"}
                                ${index === 2 && "bg-[radial-gradient(circle,_#FF1FA966_10%,_#FF1FA900_100%)]"}
                                ${index === 3 && "bg-[radial-gradient(circle,_#FFC71F66_10%,_#FFC71F00_100%)]"}
                                `}/>

                            <TeamCardWide team={team} index={index}/>

                            {/*team card mobile */}
                            <img src={team.img} alt="team image"
                                 className={"md:hidden block md:rounded-xl rounded-t-3xl md:aspect-[7/8] aspect-[16/9] w-full object-cover z-30"}/>

                            {/* sticky box */}
                            <div
                                className={"w-full md:hidden block sticky top-0 z-20 md:bg-transparent text-white"}>
                                {/* content box */}
                                <div className={"bg-black md:p-0 p-4 relative"}>
                                    <div
                                        className={`absolute w-[300px] h-[300px] left-[-90px] top-[-100px]  blur-2xl pointer-events-none
                                        ${index === 0 && "bg-[radial-gradient(circle,_#FF981A66_10%,_#FF981A00_100%)]"}
                                        ${index === 1 && "bg-[radial-gradient(circle,_#1F75FF66_10%,_#1F75FF00_100%)]"}
                                        ${index === 2 && "bg-[radial-gradient(circle,_#FF1FA966_10%,_#FF1FA900_100%)]"}
                                        ${index === 3 && "bg-[radial-gradient(circle,_#FFC71F66_10%,_#FFC71F00_100%)]"}
                                        `}/>
                                    <div className={"relative z-40"}>
                                        <div className={"text-2xl font-semibold md:mt-4 "}>{team.team_name_en}</div>
                                        <div className={"mt-3 text-sm "}>{team.department.combination}</div>
                                        <div className={"mt-3 text-gray-300 "}>{team.description_short}</div>
                                        <ArrowLinkButton text={"Get involved now"} className={"mt-4 relative top-2"}/>
                                    </div>

                                </div>
                                {/* 三角 */}
                                <DirectGradientLine/>
                            </div>

                            <div className={"flex flex-col pl-4 md:border-l-2 border-[#6A7079]"}>
                                {
                                    team.department.individual.map((department, index) => {
                                        return (
                                            <div key={index}
                                                 className="flex flex-col w-full mb-16 ">
                                                <div
                                                    className={"text-white mb-4 font-semibold text-xl z-10"}>{department.depTitle}</div>
                                                <div
                                                    className={"grid gap-4 grid-cols-2 xl:grid-cols-3 "}>
                                                    {
                                                        // ministry
                                                        department.ministry.map((ministry, index) => {
                                                            return (
                                                                <MinistryCard key={index} ministry={ministry}/>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <Form isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
        </div>
    )
}

export default Recruitment;