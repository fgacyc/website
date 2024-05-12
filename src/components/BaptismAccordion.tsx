import Head from "next/head";
// import Image from "next/image";
import { useState } from "react";
import { Image } from "@nextui-org/image";
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

  const accordionTextClass = "py-5 px-10 lg:text-lg text-sm	font-semibold ";
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
              Water baptism is a public declaration of a believer’s faith and{" "}
              commitment in Jesus Christ. It is the next step after one has{" "}
              received salvation from Christ through faith and repentance and is
              an important foundation for the Christian life.
            </p>{" "}
            <p className={accordionTextClass}>
              Baptism by immersion symbolically identifies us with Jesus’ death
              on the cross, His burial, and His resurrection from the dead.
            </p>
            <p className={accordionTextClass}>
              &quot;For we died and were buried with Christ by baptism. And just
              as Christ was raised from the dead by the glorious power of the
              Father, now we also may live new lives.” (ROMANS 6:4).
            </p>
            <p className={accordionTextClass}>
              Water baptism does not make us a believer, it shows that we are
              already one! Water baptism does not ‘save’ us; only our faith in
              Jesus Christ does that.
            </p>
            <p className={accordionTextClass}>
              “God saved you by his grace when you believed.” (EPHESIANS 2:8a).
            </p>
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
              Water baptism is a public declaration of a believer’s faith and{" "}
              commitment in Jesus Christ. It is the next step after one has{" "}
              received salvation from Christ through faith and repentance and is
              an important foundation for the Christian life.
            </p>{" "}
            <p className={accordionTextClass}>
              Baptism by immersion symbolically identifies us with Jesus’ death
              on the cross, His burial, and His resurrection from the dead.
            </p>
            <p className={accordionTextClass}>
              &quot;For we died and were buried with Christ by baptism. And just
              as Christ was raised from the dead by the glorious power of the
              Father, now we also may live new lives.” (ROMANS 6:4).
            </p>
            <p className={accordionTextClass}>
              Water baptism does not make us a believer, it shows that we are
              already one! Water baptism does not ‘save’ us; only our faith in
              Jesus Christ does that.
            </p>
            <p className={accordionTextClass}>
              “God saved you by his grace when you believed.” (EPHESIANS 2:8a).
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
              Water baptism is a public declaration of a believer’s faith and{" "}
              commitment in Jesus Christ. It is the next step after one has{" "}
              received salvation from Christ through faith and repentance and is
              an important foundation for the Christian life.
            </p>{" "}
            <p className={accordionTextClass}>
              Baptism by immersion symbolically identifies us with Jesus’ death
              on the cross, His burial, and His resurrection from the dead.
            </p>
            <p className={accordionTextClass}>
              &quot;For we died and were buried with Christ by baptism. And just
              as Christ was raised from the dead by the glorious power of the
              Father, now we also may live new lives.” (ROMANS 6:4).
            </p>
            <p className={accordionTextClass}>
              Water baptism does not make us a believer, it shows that we are
              already one! Water baptism does not ‘save’ us; only our faith in
              Jesus Christ does that.
            </p>
            <p className={accordionTextClass}>
              “God saved you by his grace when you believed.” (EPHESIANS 2:8a).
            </p>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
