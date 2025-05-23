import React from "react";

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

export default ArrowLinkButton;