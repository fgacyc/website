import type {Ministry} from "~/pages/get-involved/ministries_data";
import React from "react";


const MinistryCard = (props: { ministry: Ministry }) => {
    const {ministry} = props;
    return (
        <div
            className="flex flex-col items-center justify-between mb-10 bg-gradient-to-b from-black to-[#666666] md:rounded-lg rounded-t-2xl rounded-b-lg max-w-[300px] z-10">
            {/* 从fff 从上到下渐变到fff 20% */}
            <div
                className="text-white flex flex-col justify-start items-start  bg-gradient-to-b from-[#ffffff] to-[#fffff20]  rounded-lg ">
                <img src={ministry?.img ?? ""} alt="team image"
                     className={"md:rounded-lg rounded-2xl object-cover aspect-[16/12]"}/>

                <div className={"md:p-5 p-3"}>
                    <h6 className={"font-bold"}>{ministry?.cnMinistryTitle}</h6>
                    <h6 className={"font-bold"}>{ministry?.ministry}</h6>
                    <div className={"flex w-full mt-1 mb-2"}>
                        <div className={"flex items-center"}>
                            <img src="/images/get-involved/gear.svg" alt="skill"/>
                            <span className={"md:text-sm text-[12px]"}>技术等级</span>
                            <span className={"text-[#3AFFAC] font-semibold md:text-sm text-[12px]"}>{ministry?.rate[0]}</span>
                        </div>
                        <div className={"flex items-center ml-2"}>
                            <img src="/images/get-involved/heart.svg" alt="commit"/>
                            <span className={"md:text-sm text-[12px]"}>委身等级</span>
                            <span className={"text-[#3AFFAC] font-semibold md:text-sm text-[12px]"}>{ministry?.rate[1]}</span>
                        </div>
                    </div>
                    <div>{ministry?.desc}</div>
                </div>
            </div>
        </div>
    )
}
export default MinistryCard;