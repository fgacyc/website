import Head from "next/head";
import { useState } from "react"; // Import useState hook
import Link from "next/link";
// import Image from "next/image";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function GivingAccordion({ colSpan }: { colSpan: number }) {
  const accordionClass = "col-span-" + colSpan;

  const openAndCloseIcon = (isOpen: boolean | undefined) => {
    console.log("isOpen : ", isOpen);
    if (isOpen) return <XMarkIcon className="size-6  text-bold text-white" />;
    else return <ArrowLongRightIcon className="size-6 text-bold text-white" />;
  };
  // const rightArrowIcon
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="accordionStyle overflow-hidden">
        <Accordion className={accordionClass} isCompact={true}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 border-t-8 text-2xl text-white">
                Giving Online
              </h1>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="grid grid-cols-2 gap-4">
                {/* QR CODE */}
                <Image src="/images/bank-qr.png" width={100} height={600} />
                <h1 className="text-2xl font-normal">
                  Full Gospel Assembly
                  <br /> 2920 0020 960
                  <br />
                  <span className="text-gray-500	"> HONG LEONG BANK</span>
                </h1>
              </div>
              {/* TnG  */}
              <Image
                src="/images/tng.png"
                width={60}
                height={250}
                className="my-2 ml-5"
              />
              {/* </div> */}
            </div>
          </AccordionItem>

          {/* ACCORDION 2  */}
          <AccordionItem
            key="2"
            aria-label="Accordion 1"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 border-t-8 text-2xl text-white">
                &quot;Love Our Home&quot;
                <br />
                Building Fund
              </h1>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/bank-qr.png" width={100} height={600} />
                <h1 className="text-2xl font-normal">
                  Full Gospel Assembly
                  <br /> 2920 0020 960
                  <br />
                  <span className="text-gray-500	"> HONG LEONG BANK</span>
                </h1>
              </div>
              {/* <div> */}
              <Image
                src="/images/tng.png"
                width={60}
                height={250}
                className="my-2 ml-5"
              />
              {/* </div> */}
            </div>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
