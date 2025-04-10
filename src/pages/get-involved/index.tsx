import React, {useState} from "react";
import {ministriesData} from "~/pages/get-involved/ministries_data";
import RecruitForm from "~/pages/get-involved/recruitment_form";
import ArrowLinkButton from "~/pages/get-involved/arrow_link_button";
import TeamCardWide from "~/pages/get-involved/team_card_wide";
import DirectGradientLine from "~/pages/get-involved/direct_gradient_line";
import MinistryCard from "~/pages/get-involved/ministry_card";



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
                             className="flex md:flex-row flex-col items-start justify-start mb:mb-16 mb-8  md:px-16 md:pt-8 md:rounded-0 rounded-3xl bg-gradient-to-b from-black to-[#666666] relative">

                            <div
                                className={`md:block hidden absolute w-[500px] h-[500px] left-[-80px] top-[40px] z-0 blur-2xl pointer-events-none
                                ${index === 0 && "bg-[radial-gradient(circle,_#FF981A66_10%,_#FF981A00_100%)]"}
                                ${index === 1 && "bg-[radial-gradient(circle,_#1F75FF66_10%,_#1F75FF00_100%)]"}
                                ${index === 2 && "bg-[radial-gradient(circle,_#FF1FA966_10%,_#FF1FA900_100%)]"}
                                ${index === 3 && "bg-[radial-gradient(circle,_#FFC71F66_10%,_#FFC71F00_100%)]"}
                                `}/>

                            <TeamCardWide team={team}/>

                            {/*team card mobile */}
                            <img src={team?.img} alt="team image"
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
                                        <div className={"text-2xl font-semibold md:mt-4 "}>{team?.team_name_en}</div>
                                        <div className={"mt-2 text-sm "}>{team?.department.combination}</div>
                                        <div className={"mt-2 text-white opacity-60 "}>{team?.description_short}</div>
                                        <ArrowLinkButton text={"Get involved now"} className={"mt-2 relative top-2"}/>
                                    </div>

                                </div>
                                {/* 三角 */}
                                <DirectGradientLine/>
                            </div>

                            <div className={"flex flex-col md:pl-4 p-2 md:border-l-2 border-[#6A7079]"}>
                                {
                                    team?.department?.individual.map((department, index) => {
                                        return (
                                            <div key={index}
                                                 className="flex flex-col w-full mb-0 ">
                                                <div
                                                    className={"text-white mb-4 font-semibold text-xl z-10"}>{department?.depTitle}</div>
                                                <div
                                                    className={"grid gap-4 grid-cols-2 xl:grid-cols-3 "}>
                                                    {
                                                        // ministry
                                                        department?.ministry.map((ministry, index) => {
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
            <RecruitForm isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/>
        </div>
    )
}

export default Recruitment;