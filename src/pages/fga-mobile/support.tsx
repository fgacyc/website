import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Support() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <div className="">
            <div className={"h-[70px]"}></div>
            <div className={"max-w-[900px] m-auto p-10"}>
                <div className={"flex items-center justify-between mb-10 flex-wrap-reverse"}>
                    <div className={"sm:text-4xl text-2xl sm:min-w-[400px] my-6"}>
                        <div className={"text-[#4CF2C0] sm:text-[50px] text-4xl font-bold leading-[55px] "}>Stay connected</div>
                        <div className={"leading-[55px]"}>with our</div>
                        <div className={"leading-[55px]"}>church community</div>
                        <div className={"leading-[55px]"}>through the FGA app.</div>
                    </div>
                    <img src="/images/mobile-app-download/mobile_app.jpg" alt="mobile image"
                         className={"md:w-1/2 w-full rounded-3xl"}/>
                </div>

                <section className="mb-10">
                    <h4 className={"mb-2"}>Contact Information</h4>
                    <p>If you have any issues or need assistance, please contact us via the following methods:</p>
                    <ul className={"list-disc ml-5"}>
                        <li>Address: Lot 689, Taman Goodwood, Jalan Kuchai Lama, Off Jalan Kelang Lama, 58200 Kuala Lumpur, Malaysia</li>
                        <li>Email: <a href="mailto:fgacyc.technology@gmail.com" className={"text-blue-500 hover:underline"}
                        >fgacyc.technology@gmail.com</a>
                        </li>
                        <li>Phone: 603-7981 4755</li>
                    </ul>
                </section>

                <h4>Frequently Asked Questions</h4>
                <Accordion>
                    <AccordionItem key="1" aria-label="Accordion1"
                                   title="Who developed this app?">
                        FGA App was developed by the  <a href={"https://www.fgacyc.tech/"} className={"text-blue-500 hover:underline"}>FGA Technology</a>.
                    </AccordionItem>

                    <AccordionItem key="2" aria-label="Accordion2" title="Where do I download this app?" >
                        You can download the app from the App Store or Google Play Store. search for &quot;FGA&quot; and download the app.
                    </AccordionItem>

                    <AccordionItem key="3" aria-label="Accordion3" title="How do I register for an account?" >
                        After downloading the app, you can register for an account by clicking on the &quot;Register&quot; button on the login page.
                    </AccordionItem>

                    <AccordionItem key="4" aria-label="Accordion4" title="What should I do if I forget my password?" >
                        If you forget your password, you can reset it by clicking on the &quot;Forgot Password&quot; link on the login page.
                    </AccordionItem>


                    <AccordionItem key="5" aria-label="Accordion5" title="How do I update my personal information?">
                        After logging into the app, go to the “Account Center” mini app where you can update your personal information such as username, email address and phone number.
                    </AccordionItem>
                    <AccordionItem key="6" aria-label="Accordion6" title="What should I do if the app crashes?">
                        If the app crashes, try restarting it or reinstalling it. If the problem persists, please contact our support team, and we will assist you as soon as possible.
                    </AccordionItem>
                    <AccordionItem key="7" aria-label="Accordion7" title="How can I report issues with the app?">
                        Please send any issues via email to <a
                        href="mailto:fgacyc.technology@gmail.com" className={"text-blue-500 hover:underline"}>fgacyc.technology@gmail.com</a>
                    </AccordionItem>
                    <AccordionItem key="8" aria-label="Accordion8" title="Does the app support multiple languages?">
                        Yes, our app supports multiple languages. You can select your preferred language in the “More-language” section.
                    </AccordionItem>
                    <AccordionItem key="9" aria-label="Accordion9" title="Where can I find the latest version of the app?">
                        he latest version of the app can be updated through the App Store and Google play. Please make sure to check for updates regularly to get the latest features and fixes.
                    </AccordionItem>




                </Accordion>

                {/*<a className="sbom-link" href="[SBOM file download link]">Download Software Bill of Materials (SBOM)</a>*/}
            </div>
        </div>
    )
}