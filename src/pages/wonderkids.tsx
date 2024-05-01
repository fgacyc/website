import Header from "src/layouts/header";
import wonderkidsBg from "src/assets/WK-BG.png";
import wonderkidLogo from "src/assets/WK-Logo.png"

export default function Wonderkids() {

  return (
    <>
    <main role="main" className={``}>
      <section style={{backgroundImage: `url(${wonderkidsBg.src})`}} >
        <Header />

        <div className={`mt-[210px] ml-[243px]`}>
          <img src={`${wonderkidLogo.src}`} alt="" className={`w-6/12 h-auto md:w-auto md:h-auto`}/>
          <p className={`max-w-[450px] mt-10 font-normal font-hairline text-base leading-6 tracking-tight`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="flex items-center gap-3 mt-10">
            <a href="https://www.facebook.com/FGACYC" target='_blank'>
              <svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_234_162)">
                <path d="M14.0185 16.3115L14.7942 11.0656H9.93404V7.65574C9.93404 6.22131 10.6148 4.81967 12.7916 4.81967H15V0.352459C15 0.352459 12.9894 0 11.0739 0C7.0686 0 4.44855 2.51639 4.44855 7.06557V11.0656H0V16.3115H4.44855V29H9.92612V16.3115H14.0106H14.0185Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_234_162">
                <rect width="15" height="29" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://instagram.com/fgacyc" target='_blank' className='ms-5'>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_234_164)">
                <path d="M22.1801 5.18066C21.2375 5.18066 20.4834 5.94296 20.4834 6.87739C20.4834 7.81181 21.2457 8.57411 22.1801 8.57411C23.1145 8.57411 23.8768 7.81181 23.8768 6.87739C23.8768 5.94296 23.1145 5.18066 22.1801 5.18066Z" fill="black"/>
                <path d="M14.6227 7.36035C10.6883 7.36035 7.4834 10.5653 7.4834 14.4997C7.4834 18.4341 10.6883 21.639 14.6227 21.639C18.5572 21.639 21.7621 18.4341 21.7621 14.4997C21.7621 10.5653 18.5572 7.36035 14.6227 7.36035ZM14.6227 19.0735C12.0982 19.0735 10.049 17.0243 10.049 14.4997C10.049 11.9751 12.0982 9.92593 14.6227 9.92593C17.1473 9.92593 19.1965 11.9751 19.1965 14.4997C19.1965 17.0243 17.1473 19.0735 14.6227 19.0735Z" fill="black"/>
                <path d="M20.2868 29H8.70481C3.90154 29 -0.00830078 25.0902 -0.00830078 20.2869V8.70492C-0.00010406 3.90984 3.90973 0 8.71301 0H20.295C25.0983 0 29.0081 3.90984 29.0081 8.71311V20.2951C29.0081 25.0984 25.0983 29.0082 20.295 29.0082L20.2868 29ZM8.71301 2.72951C5.41793 2.72951 2.7294 5.40984 2.7294 8.71311V20.2951C2.7294 23.5902 5.40973 26.2787 8.71301 26.2787H20.295C23.5901 26.2787 26.2786 23.5984 26.2786 20.2951V8.71311C26.2786 5.41803 23.5983 2.72951 20.295 2.72951H8.71301Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_234_164">
                <rect width="29" height="29" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.youtube.com/user/fgacyc" target='_blank' className='ms-5'>
            <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_234_168)">
              <path d="M29 6.58284C29 2.94517 26.1524 0 22.6353 0H6.36467C2.84757 0 0 2.94517 0 6.58284V14.4172C0 18.0548 2.84757 21 6.36467 21H22.6353C26.1524 21 29 18.0548 29 14.4172V6.58284ZM19.4328 11.0882L12.1324 14.826C11.8501 14.9845 10.874 14.7759 10.874 14.4338V6.76639C10.874 6.42431 11.8501 6.21573 12.1405 6.3826L19.1263 10.3123C19.4167 10.4875 19.7232 10.9213 19.4328 11.0882Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_234_168">
              <rect width="29" height="21" fill="white"/>
              </clipPath>
              </defs>
            </svg>

            </a>
          </div>
        </div>

      </section>
    </main>

    </>
  )
}