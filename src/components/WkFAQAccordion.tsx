import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function WkFAQAccordion() {
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
  
  return (
    <>
      <div className="overflow-hidden">
        <Accordion className="" isCompact={true}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            className="my-5"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 border-t-8 pt-5 text-2xl text-white">
                How can my kids be a part?
              </h1>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
              </div>
              {/* </div> */}
            </div>
          </AccordionItem>

          {/* ACCORDION 2  */}
          <AccordionItem
            key="2"
            className="mt-10 "
            aria-label="Accordion 2"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 border-t-8 pt-5 text-2xl text-white">
                What is WonderKids Zoom CG?
              </h1>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
              </div>
            </div>
          </AccordionItem>
          {/* ACCORDION 3 */}
          <AccordionItem
            key="3"
            className="mt-10 "
            aria-label="Accordion 3"
            indicator={({ isOpen }) => openAndCloseIcon(isOpen)}
            title={
              <h1 className="border-white-500 border-t-8 pt-5 text-2xl text-white">
                Where should I send my kids to?
              </h1>
            }
          >
            <div className="rounded-br-3xl border-4 border-neutral-50 p-10">
              <div className="">
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}