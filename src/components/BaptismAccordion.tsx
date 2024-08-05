import Head from "next/head";
// import Image from "next/image";
import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function BaptismAccordion() {
  const [bgColor1, setBgcolor1] = useState<string | undefined>();
  const [bgColor2, setBgcolor2] = useState<string | undefined>();
  const [bgColor3, setBgcolor3] = useState<string | undefined>();

  const openAccordionClass =
    " p-3 lg:p-6 lg:text-2xl text-xl font-bold text-black bg-[#1FC4CF] rounded-lg";
  const closeAccordionClass =
    " p-3 lg:p-6 lg:text-2xl text-xl text-black bg-[#979797] rounded-lg font-bold";

  const accordionTextClass = "py-5 px-10 lg:text-lg text-sm	font-semibold";
  const openAndCloseIcon1 = (isOpen: boolean | undefined) => {
    if (isOpen) {
      setBgcolor1(openAccordionClass);
      return <ChevronRightIcon className="text-bold  size-6  text-black " />;
    }
    setBgcolor1(closeAccordionClass);
    return <ChevronDownIcon className="text-bold  size-6  text-black" />;
  };

  const openAndCloseIcon2 = (isOpen: boolean | undefined) => {
    if (isOpen) {
      setBgcolor2(openAccordionClass);
      return <ChevronRightIcon className="text-bold  size-6  text-black" />;
    }
    setBgcolor2(closeAccordionClass);
    return <ChevronDownIcon className="text-bold  size-6  text-black" />;
  };

  const openAndCloseIcon3 = (isOpen: boolean | undefined) => {
    if (isOpen) {
      setBgcolor3(openAccordionClass);
      return <ChevronRightIcon className="text-bold  size-6  text-black" />;
    }
    setBgcolor3(closeAccordionClass);
    return <ChevronDownIcon className="text-bold  size-6  text-black" />;
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Accordion
          className=""
          isCompact={true}
          id="baptiseAccordion"
          variant="splitted"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            id="accordion1"
            className=""
            indicator={({ isOpen }) => openAndCloseIcon1(isOpen)}
            subtitle=""
            title={
              <h1 className={bgColor1} style={{ width: "110%" }}>
                What is Water Baptism?
              </h1>
            }
          >
            <p className={accordionTextClass}>
              Water baptism doesn&apos;t save you or forgive your sins, but it shows
              that you&apos;ve already turned back to God. It&apos;s a public way for
              believers to show their faith. Baptism symbolizes being united
              with Christ: going under the water represents dying with Him,
              staying under the water represents being buried with Him, and
              coming out of the water represents living a new life with Him.
            </p>{" "}
          </AccordionItem>

          {/* ACCORDION 2  */}
          <AccordionItem
            key="2"
            className=""
            id="accordion2"
            aria-label="Accordion 2"
            indicator={({ isOpen }) => openAndCloseIcon2(isOpen)}
            title={
              <h1 className={bgColor2} style={{ width: "110%" }}>
                Why be baptised?
              </h1>
            }
          >
            <p className={accordionTextClass}>
              A disciple should believe in their heart, confess with their
              mouth, and accept Jesus Christ. Jesus commanded that anyone who
              believes and is baptized will be saved (Mark 16:16). He told His
              followers to make disciples and baptize them in the name of the
              Father, Son, and Holy Spirit (Matthew 28:18-19). This means that
              believing and being baptized go together as one important step in
              following Jesus.
            </p>
          </AccordionItem>

          <AccordionItem
            key="3"
            className=""
            aria-label="Accordion 3"
            id="accordion3"
            indicator={({ isOpen }) => openAndCloseIcon3(isOpen)}
            title={
              <h1 className={bgColor3} style={{ width: "110%" }}>
                Frequently Asked Questions
              </h1>
            }
          >
            <p className={accordionTextClass}>
              After you get baptized, it symbolizes a new life in Christ. Here&apos;s
              what happens:
              <br />
              <br />
              <b> 1. Died with Christ (going into the water):</b> This
              represents leaving behind your old life and bad habits, as if they
              were nailed to the cross with Jesus.
              <br />
              <b> 2. Buried with Christ (immersed in the water) :</b> This
              signifies the end of your old life, like being buried with Jesus.
              <br />
              <b>3. Raised with Christ (coming out of the water): </b> This
              means you start a new life, just like Jesus was raised from the
              dead. You&apos;re now a new person with new behaviors that honor God.
              <br />
              <br />
              Additionally, turning back to God involves:
              <br />
              <br />
              <b>-Confessing your sins:</b>
              Admit the wrong things you&apos;ve done, like lying or jealousy (1 John
              1:9).
              <br />
              <b>-Breaking ties with idols:</b> Stop worshiping anything or
              anyone other than God.
              <br />
              <b>-Living a new life:</b> Avoid sinful behaviors such as smoking,
              drinking, gambling, and sexual immorality. Seek help and guidance
              from church leaders to grow in your faith.
              <br />
              <br />
              By doing these things, you&apos;ll live a life that reflects your new
              faith in Christ.
            </p>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
