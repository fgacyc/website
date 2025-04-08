import React from "react";

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


export default DirectGradientLine;