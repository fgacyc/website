import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { slide as Menu } from "react-burger-menu";
import { IoMdMenu } from "react-icons/io";
interface StateChange {
  isOpen: boolean;
}

export default function Header() {
  const router = useRouter();
  const getHeaderMainMenuCSS = () => {
    if (
      router.pathname === "/" ||
      router.pathname === "/get-connected" ||
      router.pathname === "/locations"
    ) {
      return {
        logo: (
          <svg
            width="48"
            height="18"
            viewBox="0 0 48 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2105 12.1175L32.0064 5.23172C32.0637 5.18138 32.1424 5.15262 32.2211 5.15262L35.0332 5.17419H42.686L42.8541 5.01239H42.8935L47.3299 0.747903L47.5338 0.553736C47.7413 0.355973 47.6018 0 47.3156 0H30.6111L30.3714 0.215741L29.9313 0.55014C29.9313 0.55014 29.917 0.560927 29.9099 0.568119L23.2446 6.55494C22.851 6.91091 22.2464 6.88934 21.8743 6.51179L18.6901 3.27207L15.581 0.00719137H15.488L15.4809 0H5.50971L5.49898 0.00719137H5.46678L0.386396 4.4982L0 4.8362H0.0357774V4.92609H5.42385L13.7564 4.94407C13.8387 4.94407 13.921 4.97643 13.9782 5.03756L26.2677 17.2449C26.5218 17.4966 26.9296 17.2054 26.7829 16.8817L24.3787 12.4483M7.33794 1.35557H6.51506V2.23652H7.2306V2.62845H6.51506V3.87255H6.10004V0.963644H7.33436V1.35557H7.33794ZM9.54182 1.79784H9.12681V1.65042C9.12681 1.54974 9.09818 1.47423 9.04452 1.42749C8.98727 1.38074 8.92287 1.35557 8.84774 1.35557C8.77261 1.35557 8.70463 1.38074 8.65097 1.42749C8.5973 1.47423 8.56868 1.54974 8.56868 1.65042V3.18578C8.56868 3.28646 8.5973 3.36197 8.65097 3.40871C8.70463 3.45545 8.77261 3.48062 8.84774 3.48062C8.92287 3.48062 8.99085 3.45545 9.04452 3.40871C9.10176 3.36197 9.12681 3.28646 9.12681 3.18578V2.63923H8.79765V2.27247H9.54182V3.18578C9.54182 3.30444 9.52036 3.40871 9.481 3.4986C9.44165 3.5885 9.38798 3.66041 9.32 3.71794C9.25203 3.77547 9.18047 3.82221 9.09818 3.85098C9.0159 3.88334 8.93361 3.89772 8.84774 3.89772C8.76188 3.89772 8.67959 3.88334 8.5973 3.85098C8.51501 3.82221 8.43988 3.77547 8.37548 3.71794C8.3075 3.66041 8.25384 3.5849 8.21448 3.4986C8.17513 3.40871 8.15366 3.30444 8.15366 3.18578V1.65042C8.15366 1.53176 8.17513 1.43108 8.21448 1.34119C8.25384 1.2513 8.3075 1.17579 8.37548 1.11826C8.44346 1.06073 8.51501 1.01398 8.5973 0.985218C8.67959 0.956453 8.76188 0.94207 8.84774 0.94207C8.93361 0.94207 9.0159 0.956453 9.09818 0.985218C9.18047 1.01398 9.2556 1.06073 9.32 1.11826C9.38798 1.17579 9.44165 1.2513 9.481 1.34119C9.52036 1.43108 9.54182 1.53536 9.54182 1.65042V1.79784ZM11.5132 3.87255L11.3915 3.2469H10.8262L10.7046 3.87255H10.2896L10.9371 0.963644H11.2842L11.9318 3.87255H11.5167H11.5132Z"
              fill="white"
            />
            <path
              d="M11.1019 1.80176L10.8979 2.85529H11.313L11.109 1.80176H11.1019Z"
              fill="white"
            />
            <path
              d="M5.42372 13.0777V6.6019C5.42372 6.29986 5.17685 6.05176 4.87632 6.05176H0.583038C0.278931 6.05176 0.0356445 6.29986 0.0356445 6.6019V13.5344C0.0356445 13.7034 0.114355 13.8652 0.246731 13.9695L5.27345 17.8816C5.37005 17.9571 5.48812 17.9966 5.60976 17.9966H19.5343C20.0173 17.9966 20.2642 17.4141 19.9279 17.0653L16.7866 13.7969C16.6829 13.689 16.5397 13.6279 16.3931 13.6279H5.97111C5.667 13.6279 5.42372 13.3834 5.42372 13.0777Z"
              fill="white"
            />
            <path
              d="M35.0656 13.1529L35.0406 6.84249C35.0406 6.54405 34.7973 6.29954 34.5003 6.29954L32.6578 6.28516C32.5254 6.28516 32.3966 6.3319 32.2964 6.42179L29.835 8.59718C29.7169 8.70146 29.6489 8.84888 29.6489 9.00709V13.455C29.6489 13.6204 29.7241 13.7786 29.8564 13.8828L34.8867 17.8812C34.9833 17.9568 35.1014 17.9999 35.223 17.9999H46.568C47.0797 17.9999 47.3086 17.3527 46.9115 17.0291L42.9617 13.8217C42.8651 13.7426 42.7434 13.6995 42.6182 13.6995H35.6094C35.3089 13.6995 35.0692 13.455 35.0656 13.1565V13.1529Z"
              fill="white"
            />
          </svg>
        ),
        text_color: "text-white",
      };
    } else {
      return {
        logo: (
          <svg
            width="48"
            height="18"
            viewBox="0 0 48 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2105 12.1175L32.0064 5.23172C32.0637 5.18138 32.1424 5.15262 32.2211 5.15262L35.0332 5.17419H42.686L42.8541 5.01239H42.8935L47.3299 0.747903L47.5338 0.553736C47.7413 0.355973 47.6018 0 47.3156 0H30.6111L30.3714 0.215741L29.9313 0.55014C29.9313 0.55014 29.917 0.560927 29.9099 0.568119L23.2446 6.55494C22.851 6.91091 22.2464 6.88934 21.8743 6.51179L18.6901 3.27207L15.581 0.00719137H15.488L15.4809 0H5.50971L5.49898 0.00719137H5.46678L0.386396 4.4982L0 4.8362H0.0357774V4.92609H5.42385L13.7564 4.94407C13.8387 4.94407 13.921 4.97643 13.9782 5.03756L26.2677 17.2449C26.5218 17.4966 26.9296 17.2054 26.7829 16.8817L24.3787 12.4483M7.33794 1.35557H6.51506V2.23652H7.2306V2.62845H6.51506V3.87255H6.10004V0.963644H7.33436V1.35557H7.33794ZM9.54182 1.79784H9.12681V1.65042C9.12681 1.54974 9.09818 1.47423 9.04452 1.42749C8.98727 1.38074 8.92287 1.35557 8.84774 1.35557C8.77261 1.35557 8.70463 1.38074 8.65097 1.42749C8.5973 1.47423 8.56868 1.54974 8.56868 1.65042V3.18578C8.56868 3.28646 8.5973 3.36197 8.65097 3.40871C8.70463 3.45545 8.77261 3.48062 8.84774 3.48062C8.92287 3.48062 8.99085 3.45545 9.04452 3.40871C9.10176 3.36197 9.12681 3.28646 9.12681 3.18578V2.63923H8.79765V2.27247H9.54182V3.18578C9.54182 3.30444 9.52036 3.40871 9.481 3.4986C9.44165 3.5885 9.38798 3.66041 9.32 3.71794C9.25203 3.77547 9.18047 3.82221 9.09818 3.85098C9.0159 3.88334 8.93361 3.89772 8.84774 3.89772C8.76188 3.89772 8.67959 3.88334 8.5973 3.85098C8.51501 3.82221 8.43988 3.77547 8.37548 3.71794C8.3075 3.66041 8.25384 3.5849 8.21448 3.4986C8.17513 3.40871 8.15366 3.30444 8.15366 3.18578V1.65042C8.15366 1.53176 8.17513 1.43108 8.21448 1.34119C8.25384 1.2513 8.3075 1.17579 8.37548 1.11826C8.44346 1.06073 8.51501 1.01398 8.5973 0.985218C8.67959 0.956453 8.76188 0.94207 8.84774 0.94207C8.93361 0.94207 9.0159 0.956453 9.09818 0.985218C9.18047 1.01398 9.2556 1.06073 9.32 1.11826C9.38798 1.17579 9.44165 1.2513 9.481 1.34119C9.52036 1.43108 9.54182 1.53536 9.54182 1.65042V1.79784ZM11.5132 3.87255L11.3915 3.2469H10.8262L10.7046 3.87255H10.2896L10.9371 0.963644H11.2842L11.9318 3.87255H11.5167H11.5132Z"
              fill="black"
            />
            <path
              d="M11.1019 1.80176L10.8979 2.85529H11.313L11.109 1.80176H11.1019Z"
              fill="black"
            />
            <path
              d="M5.42372 13.0777V6.6019C5.42372 6.29986 5.17685 6.05176 4.87632 6.05176H0.583038C0.278931 6.05176 0.0356445 6.29986 0.0356445 6.6019V13.5344C0.0356445 13.7034 0.114355 13.8652 0.246731 13.9695L5.27345 17.8816C5.37005 17.9571 5.48812 17.9966 5.60976 17.9966H19.5343C20.0173 17.9966 20.2642 17.4141 19.9279 17.0653L16.7866 13.7969C16.6829 13.689 16.5397 13.6279 16.3931 13.6279H5.97111C5.667 13.6279 5.42372 13.3834 5.42372 13.0777Z"
              fill="black"
            />
            <path
              d="M35.0656 13.1529L35.0406 6.84249C35.0406 6.54405 34.7973 6.29954 34.5003 6.29954L32.6578 6.28516C32.5254 6.28516 32.3966 6.3319 32.2964 6.42179L29.835 8.59718C29.7169 8.70146 29.6489 8.84888 29.6489 9.00709V13.455C29.6489 13.6204 29.7241 13.7786 29.8564 13.8828L34.8867 17.8812C34.9833 17.9568 35.1014 17.9999 35.223 17.9999H46.568C47.0797 17.9999 47.3086 17.3527 46.9115 17.0291L42.9617 13.8217C42.8651 13.7426 42.7434 13.6995 42.6182 13.6995H35.6094C35.3089 13.6995 35.0692 13.455 35.0656 13.1565V13.1529Z"
              fill="black"
            />
          </svg>
        ),
        text_color: "text-black",
      };
    }
  };
  const getNavMenuItems = () => {
    if (router.pathname === "/") {
      return {
        "/about-us": "About Us",
        "/get-connected": "Get Connected",
        "/locations": "Visit FGA",
      };
    }

    return {};
  };
  const { logo, text_color } = getHeaderMainMenuCSS();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  // };
  const [menuWidth, setMenuWidth] = useState(300);
  useEffect(() => {
    //     get screen width
    const screenWidth = window.innerWidth;
    if (screenWidth > 1280) {
      setMenuWidth(400);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false); // Set isMenuOpen to false when route changes
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false); // Close menu when "Escape" key is pressed
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router.events]);

  return (
    <nav className="absolute left-0 top-0 z-[1000] w-full bg-transparent dark:bg-transparent">
      <Menu
        right
        customBurgerIcon={false}
        isOpen={isMenuOpen}
        onStateChange={(state: StateChange) => setIsMenuOpen(state.isOpen)}
        width={menuWidth}
      >
        <Link
          href="/about-us"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          About Us
        </Link>
        <Link
          href="/get-connected"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Get Connected
        </Link>
        <Link
          href="/locations"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Visit FGA
        </Link>
        <Link
          href="/wonderkids"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Wonder Kids
        </Link>
        <Link
          href="/get-involved"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Get Involved
        </Link>
        <Link
          href="/giving"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Giving
        </Link>
        <Link
          href="/baptism"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Baptise
        </Link>
        {/*<Link href="https://faithflix.vercel.app/"*/}
        {/*    target="_blank"*/}
        {/*    className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl" >*/}
        {/*    Stream*/}
        {/*</Link>*/}
        <Link
          href="/blog"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Blog
        </Link>
        <Link
          href="/mobile-app-download"
          className="block px-4 py-2 pr-6 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"
        >
          Mobile App
        </Link>
      </Menu>

      <div className="max-w-screen mx-auto flex flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {logo}
        </Link>
        <div className="block w-auto">
          <ul className="flex flex-row rounded-lg bg-transparent font-medium dark:border-none dark:bg-transparent md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent rtl:space-x-reverse">
            {Object.entries(getNavMenuItems()).map(([path, label]) => (
              <li key={path} className="hidden md:block">
                <Link
                  href={path}
                  className={`inline-flex items-center justify-center p-2 text-sm ${text_color}`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/*<li className="">*/}
            {/*  <button*/}
            {/*    onClick={toggleMenu}*/}
            {/*    type="button"*/}
            {/*    className={`hover:bg-tranparent dark:hover:bg-tranparent inline-flex items-center justify-center p-2 text-sm text-black focus:outline-none dark:text-black ${text_color}`}*/}
            {/*    aria-controls="headerDropDownMenu"*/}
            {/*    aria-expanded={isMenuOpen}*/}
            {/*  >*/}
            {/*    <span className="sr-only">Open main menu</span>*/}
            {/*    <svg*/}
            {/*      className="h-5 w-5"*/}
            {/*      aria-hidden="true"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*      fill="none"*/}
            {/*      viewBox="0 0 17 14"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        stroke="currentColor"*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*        strokeWidth="2"*/}
            {/*        d="M1 1h15M1 7h15M1 13h15"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*  {isMenuOpen && (*/}
            {/*    <ul*/}
            {/*      id="headerDropDownMenu"*/}
            {/*      className="absolute right-0 top-0 z-[1000] h-[895px] w-[523px] border bg-white"*/}
            {/*    >*/}
            {/*      <button*/}
            {/*        onClick={toggleMenu}*/}
            {/*        type="button"*/}
            {/*        className="absolute right-8 top-8 mb-8 focus:outline-none"*/}
            {/*      >*/}
            {/*        <svg*/}
            {/*          width="25"*/}
            {/*          height="20"*/}
            {/*          viewBox="0 0 25 20"*/}
            {/*          fill="none"*/}
            {/*          xmlns="http://www.w3.org/2000/svg"*/}
            {/*        >*/}
            {/*          <rect*/}
            {/*            width="28.5854"*/}
            {/*            height="3.43024"*/}
            {/*            transform="matrix(0.780868 -0.624696 0.780868 0.624696 0 17.8571)"*/}
            {/*            fill="black"*/}
            {/*          />*/}
            {/*          <rect*/}
            {/*            width="28.5854"*/}
            {/*            height="3.43024"*/}
            {/*            transform="matrix(0.780868 0.624696 -0.780868 0.624696 2.67871 0)"*/}
            {/*            fill="black"*/}
            {/*          />*/}
            {/*        </svg>*/}
            {/*      </button>*/}
            {/*      <div className="mt-[87px]">*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/about-us"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            About Us*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/get-connected"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Get Connected*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/locations"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Visit FGA*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/wonderkids"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Wonder Kids*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/get-involved"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Get Involved*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/giving"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Giving*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/baptism"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Baptise*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="https://faithflix.vercel.app/"*/}
            {/*            target="_blank"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Stream*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          <Link*/}
            {/*            href="/mobile-app-download"*/}
            {/*            className="block px-4 py-2 pr-32 text-right text-3xl text-black hover:bg-[#00EDC2] lg:text-4xl xl:text-5xl"*/}
            {/*          >*/}
            {/*            Mobile App*/}
            {/*          </Link>*/}
            {/*        </li>*/}
            {/*      </div>*/}
            {/*    </ul>*/}
            {/*  )}*/}
            {/*</li>*/}
            <IoMdMenu
              className={`h-8 w-8 cursor-pointer
                            ${
                              text_color === "text-white"
                                ? "text-white"
                                : "text-black"
                            }
                            
                            `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
