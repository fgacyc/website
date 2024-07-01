import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function WkFAQAccordion() {
  const openAndCloseIcon = (isOpen: boolean | undefined) => {
    if (isOpen)
      return (
        <XMarkIcon className="text-bold w-auto size-12  -translate-y-10 text-white" />
      );
    else
      return (
        <ArrowLongRightIcon className="text-bold mt-8 w-auto size-12 -translate-x-10 text-white" />
      );
  };

  return (
    <>
      <div className="overflow-hidden">
        <Accordion className="wonderkids" isCompact={true}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            className="my-5"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <p className="border-white-500 border-t-8 pt-5 text-2xl text-white mr-[-1.25rem]">
                How can my kids be a part?
              </p>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
                <p>We have services each week at all of our service locations, specially catered to kids aged 4 - 12 years old. <Link className={`font-bold`} href="/locations"><u>Visit FGACYC</u></Link></p>
              </div>
              {/* </div> */}
            </div>
          </AccordionItem>
          {/* ACCORDION 2  */}
          <AccordionItem
            key="2"
            className="mt-10 "
            aria-label="Accordion 3"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <p className="border-white-500 border-t-8 pt-5 text-2xl text-white mr-[-1.25rem]">
                Where should I send my kids to?
              </p>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
                <p>The Wonderkids service times are as follows:</p>
                <p>Saturday:</p>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-2">5:00 PM
                    <ul className="list-disc list-inside ml-6">
                      <li>Cradle Land (0 - 18 months)</li>
                    </ul>
                  </li>
                  <li className="mb-2">5:30 PM
                    <ul className="list-disc list-inside ml-6">
                      <li>Shining Star (19 months - 3 years)</li>
                      <li>Super Trooper (4-6 years)</li>
                      <li>Wow Life (7-9 years)</li>
                      <li>Warrior (10-12 years)</li>
                    </ul>
                  </li>
                </ul>
                <p>Sunday:</p>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-2">10:30 AM
                    <ul className="list-disc list-inside ml-6">
                      <li>Super Trooper (4-6 years)</li>
                      <li>Wow Life (7-9 years)</li>
                      <li>Warrior (10-12 years)</li>
                    </ul>
                  </li>
                  <li className="mb-2">1:30 PM
                    <ul className="list-disc list-inside ml-6">
                      <li>Super Trooper (4-6 years)</li>
                      <li>Wow Life (7-9 years)</li>
                      <li>Warrior (10-12 years)</li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>
          </AccordionItem>
          {/* ACCORDION 3 */}
          <AccordionItem
            key="3"
            className="mt-10 "
            aria-label="Accordion 2"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <p className="border-white-500 border-t-8 pt-5 text-2xl text-white mr-[-1.25rem]">
                What is WonderKids Online CG?
              </p>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
                <p>Wonderkids Online CG are our kids weekly gatherings online based on their respective age group. These gatherings connect kids together, providing them Godly peers and teach them to honor one another and grow together spiritually.</p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div >
    </>
  );
}