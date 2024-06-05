import Head from "next/head";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function GivingAccordion() {
  const openAndCloseIcon = (isOpen: boolean | undefined) => {
    if (isOpen)
      return (
        <XMarkIcon className="text-bold  size-6  -translate-y-10 text-white" />
      );
    else
      return (
        <ArrowLongRightIcon className="text-bold size-6 -translate-x-10 text-white" />
      );
  };
  // const rightArrowIcon
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden ">
        <Accordion className="" isCompact={true}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            className="my-5 h-1/5"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 lg:text-1xl border-t-8 pt-5 text-white xl:text-2xl">
                Giving Online
              </h1>
            }
          >
            <div className="grid grid-cols-3  justify-items-center rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="col-span-1">
                {/* QR CODE */}
                <Image
                  src="/images/giving/bank-qr.png"
                  alt="bank-qr"
                  width={100}
                  height={600}
                />
                {/* TnG  */}
                <Image
                  src="/images/giving/tng.png"
                  alt="tng"
                  width={60}
                  height={250}
                  className="my-2 ml-5"
                />
              </div>

              {/* </div> */}
              <div className="col-span-2">
                <h1 className=" text-[20px] font-normal">
                  Full Gospel Assembly
                  <br /> 2920 0020 960
                  <br />
                  <span className="text-gray-500	"> HONG LEONG BANK</span>
                </h1>
              </div>
            </div>
          </AccordionItem>

          {/* ACCORDION 2  */}
          <AccordionItem
            key="2"
            className="mt-10"
            aria-label="Accordion 1"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 lg:text-1XL border-t-8 pt-5 text-white xl:text-2xl">
                &quot;Love Our Home&quot;
                <br />
                Building Fund
              </h1>
            }
          >
            <div className="grid grid-cols-3  justify-items-center rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="col-span-1">
                {/* QR CODE */}
                <Image
                  src="/images/giving/bank-qr.png"
                  alt="bank-qr"
                  width={100}
                  height={600}
                />
                {/* TnG  */}
                <Image
                  src="/images/giving/tng.png"
                  alt="tng"
                  width={60}
                  height={250}
                  className="my-2 ml-5"
                />
              </div>

              {/* </div> */}
              <div className="col-span-2">
                <h1 className=" text-[20px] font-normal">
                  Full Gospel Assembly
                  <br /> 2920 0020 960
                  <br />
                  <span className="text-gray-500	"> HONG LEONG BANK</span>
                  <br />
                  <span className="text-[#FF0000]">
                    {" "}
                    REF: M100 CHINESE FUND{" "}
                  </span>
                </h1>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
