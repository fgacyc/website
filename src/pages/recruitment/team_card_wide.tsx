import type {Team} from "~/pages/recruitment/ministries_data";
import React from "react";
import ArrowLinkButton from "~/pages/recruitment/arrow_link_button";

const TeamCardWide = (props: { team: Team }) => {
    const {team} = props;

    return (
        <div className={"md:block hidden mr-4 text-white sticky top-0 md:max-w-[250px] w-full z-20"}>
            <img src={team?.img ?? ""} alt="team image"
                 className={"md:rounded-xl rounded-t-3xl md:aspect-[7/8] aspect-[16/9] w-full object-cover z-30"}/>
            <div className={"z-10 md:bg-transparent bg-black md:p-0 p-4 relative"}>
                <div className={"text-2xl font-semibold md:mt-4"}>{team?.team_name_en}</div>
                <div className={"mt-3 text-sm"}>{team?.department.combination}</div>
                <div className={"mt-3 text-gray-300"}>{team?.description_short}</div>
                <ArrowLinkButton text={"Get involved now"} className={"mt-4"}/>
            </div>
        </div>
    )

}
export default TeamCardWide;