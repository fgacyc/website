import { Divider } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { type FunctionComponent, useState } from "react";
import CompletedForm from "~/components/Form/CompletedForm";
import { cgLocations, type ValueLabelPair } from "~/data/locations";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Formik, Form as FormikForm, useFormikContext } from "formik";
import * as Yup from "yup";
import { type FindCGData } from "../api/find_cg";

type FormikFormType = FindCGData & {
  otherOccupation: string;
  otherHowToKnow: string;
};

export default function GetConnected() {
  const [isNeedHelp, setIsNeedHelp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();

  const yesNoOptions: ValueLabelPair<boolean>[] = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];
  const maritalStatusOption = [
    { label: "Single", value: "Single" },
    { label: "In a Relationship", value: "In a Relationship" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widowed", value: "Widowed" },
  ];
  const occupationOption = [
    { label: "Student", value: "Student" },
    {
      label: "Working Adult / Self-Employed",
      value: "Working Adult / Self-Employed",
    },
    { label: "Unemployed / Retired", value: "Single" },
    { label: "Others", value: "Others" },
  ];

  const knowAboutUsOption = [
    {
      value: "Friends / Family / Colleagues",
      label: "Friends / Family / Colleagues",
    },
    {
      value: "Social Media Ads - Facebook / Instagram / Xiaohongshu",
      label: "Social Media Ads - Facebook / Instagram / Xiaohongshu",
    },
    { value: "Others", label: "Others" },
  ];

  return (
    <>
      <Head>
        <title>Get Connected | FGA CYC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden bg-[#1d2129]">
        <div className="mt-[68px] text-white">
          <div className="relative flex flex-col items-center">
            <Image
              alt=""
              src={"/images/get-connected/banner.png"}
              width={1200}
              height={600}
              // width={100}
              // height={100}
              className="w-[90%] rounded-lg md:w-[80%]"
              // className="w-[90%] rounded-lg transition delay-150 duration-300 hover:-translate-y-7 md:w-[80%]"
            ></Image>
            <div className="absolute inset-0 ms-[15vw] mt-[3vw] flex h-fit items-center sm:mt-[6.5vw] sm:block ">
              <h3 className="w-[44vw] text-3xl font-bold sm:text-5xl md:w-[340px] md:text-6xl lg:w-[44vw] lg:text-8xl xl:text-9xl">
                Get Connected
              </h3>
              <div className="w-[35vw] text-[12px] sm:text-[14px] sm:leading-5 md:mt-1 md:w-[192px] lg:w-[25vw] lg:text-lg xl:text-xl">
                We believe life transformation happens through real and
                authentic relationships, and no one should be alone in their
                journey pursuing God.
              </div>
            </div>
          </div>
          <div className="mb-[16.45vw] mt-[13vw]">
            <div className={"m-4 sm:m-auto"}>
              <div className="sm:ms-[20vw] ">
                {/* <div className="ms-[20vw] transition delay-150 duration-300 hover:-translate-y-7"> */}
                <h3 className="w-full text-3xl font-bold sm:w-[55vw] sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl ">
                  How to Get Connect?
                </h3>
                <h6 className="mt-[2vw] w-full  text-[12px] leading-tight sm:w-[52vw] sm:text-[112px] lg:text-xl">
                  Connect Groups are where we pray for each other, learn about
                  the Word, and put our faith into practice. These gatherings
                  happen once a week, and no matter what stage of life you are
                  in, there will be a Connect Group suitable for you!
                </h6>
              </div>
              <div className="flex w-full flex-col items-center">
                <Divider className="mb-[6vw] mt-[5vw] w-full bg-white sm:w-3/5"></Divider>
              </div>
              <div className="sm:ms-[20vw] sm:flex">
                <h3 className="mb-3 w-full text-3xl font-bold sm:w-[34vw] sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl ">
                  What is Connect Group?
                </h3>
                <div className="flex items-end sm:ms-[3.6vw]">
                  <div>
                    <h6 className="mb-[3.33vw] w-full text-[12px] leading-tight sm:w-[22vw] sm:text-[10px] lg:mb-[2vw] lg:text-lg">
                      Connect Groups is a Godly community where you will find
                      your second (spiritual) family where everyone aims to be
                      more like Jesus.
                    </h6>
                    <button
                      onClick={() => {
                        setIsNeedHelp(true);
                        setTimeout(() => {
                          document.getElementById("formChunk")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 100);
                      }}
                      className="flex items-center justify-between rounded-[35px] bg-[#00EDC2] px-2 py-1 text-[12px] font-bold text-black sm:mt-5 sm:w-[30vw]  sm:text-[10px] md:mt-0 lg:px-4 lg:py-2 lg:text-xl xl:px-10 xl:py-3.5"
                    >
                      Find a ConnectGroup{" "}
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className="ml-1 w-[2.9vw] sm:ml-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isNeedHelp ? (
            <div
              id="formChunk"
              className="bg-white bg-[url('/images/get-connected/get-connected-bg.png')] bg-cover pb-[5.83vw] pt-[5.83vw]"
            >
              {isSubmitted ? (
                <div
                  className="flex h-screen flex-col items-center justify-center"
                  id="completedRef"
                >
                  <CompletedForm
                    bg_color="bg-[#00EDC2]"
                    tick_bg="bg-white"
                    tick_color="#00EDC2"
                    button_color="bg-black"
                    button_text="Keep Exploring"
                    text="COMPLETED!"
                    desc="We have received your request."
                    onReset={() => setIsSubmitted(false)}
                    onClick={() => {
                      void router.push("");
                    }}
                  />
                </div>
              ) : (
                <>
                  <Formik<FormikFormType>
                    initialValues={{
                      age: 0,
                      howToKnow: knowAboutUsOption[0]?.value ?? "",
                      isChristian: false,
                      maritalStatus: maritalStatusOption[0]?.value ?? "",
                      name: "",
                      occupation: occupationOption[0]?.value ?? "",
                      otherOccupation: "",
                      phone_number: "",
                      remark: "",
                      service_location: cgLocations[0]?.value ?? "",
                      otherHowToKnow: "",
                    }}
                    onSubmit={async (values, action) => {
                      action.setSubmitting(true);
                      console.log(values);
                      try {
                        const upload = await fetch("api/find_cg", {
                          method: "POST",
                          body: JSON.stringify(values),
                        });

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        const res = await upload.json();

                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        if (res.message === "success") {
                          action.resetForm();
                          setIsSubmitted(true);
                          setTimeout(() => {
                            document
                              .getElementById("completedRef")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }, 100);
                        }
                      } catch (e) {
                        console.error(e);
                      } finally {
                        action.setSubmitting(false);
                      }
                    }}
                    validationSchema={Yup.object().shape({
                      name: Yup.string().trim().required("Required."),
                      phone_number: Yup.string()
                        .trim()
                        .required("Required.")
                        .min(10, "Minimum 10 characters.")
                        .max(12, "Maximum 12 characters including +60.")
                        .matches(
                          /^(\+?6?01)[0|1|2|3|4|6|7|8|9]-*[0-9]{7,8}$/,
                          "Invalid Format."
                        ),
                      age: Yup.number()
                        .required("Required.")
                        .min(1, "Age must not be smaller than 1.")
                        .max(99, "Age must not be larger than 99."),
                      otherOccupation: Yup.string().when("occupation", {
                        is: "Others",
                        then: (schema) => schema.required("Required."),
                      }),
                      otherHowToKnow: Yup.string().when("howToKnow", {
                        is: "Others",
                        then: (schema) => schema.required("Required."),
                      }),
                    })}
                  >
                    {({ values, isSubmitting }) => (
                      <FormikForm className="mx-auto my-[82px] flex w-4/5 flex-col items-center justify-center rounded-[20px] bg-[#00edc2] py-[63px] text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <div className="sf-pro-display-black mb-[30px] w-4/5 text-left text-[33px]">
                          Find a Connect Group
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <FormikInput
                            formKey="name"
                            label="Name"
                            required
                            placeholder="Full Name"
                          />
                          <FormikInput
                            formKey="phone_number"
                            label="Contact Number"
                            required
                            placeholder="+60xx-xxx-xxxx"
                          />
                          <FormikSelect
                            options={cgLocations}
                            label="Preferred Location"
                            formKey="service_location"
                            required
                          />
                          <FormikInput
                            type="number"
                            label="Age"
                            formKey="age"
                            placeholder="Your Age"
                          />
                          <FormikRadio
                            formKey="isChristian"
                            label="Are you a christian?"
                            options={yesNoOptions}
                          />
                          <FormikRadio
                            formKey="maritalStatus"
                            label="Marital Status"
                            options={maritalStatusOption}
                          />
                          <FormikRadio
                            formKey="occupation"
                            label="Occupation"
                            options={occupationOption}
                          />
                          {values.occupation === "Others" ? (
                            <FormikInput
                              formKey="otherOccupation"
                              label="Please specify."
                            />
                          ) : null}
                          <FormikRadio
                            label="How do you know about us?"
                            formKey="howToKnow"
                            options={knowAboutUsOption}
                          />
                          {values.howToKnow === "Others" ? (
                            <FormikInput
                              formKey="otherHowToKnow"
                              label="Please specify."
                            />
                          ) : null}
                          <FormikInput
                            label="Remarks"
                            formKey="remark"
                            placeholder="Remarks"
                          />
                          <div className="mx-auto max-w-[450px] px-7">
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="flex w-full items-center justify-between rounded-full bg-black px-12 py-5 text-lg font-bold text-white sm:text-2xl"
                            >
                              Submit your request{" "}
                              {isSubmitting ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="#fff"
                                  viewBox="0 0 24 24"
                                  className="ml-3 animate-spin"
                                >
                                  <path
                                    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                    opacity=".25"
                                  />
                                  <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" />
                                </svg>
                              ) : (
                                <svg
                                  width="44"
                                  height="24"
                                  viewBox="0 0 44 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 h-8 w-8"
                                >
                                  <path
                                    d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      </FormikForm>
                    )}
                  </Formik>
                </>
              )}
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-col items-center bg-[#d9d9d9] pb-[8.89vw] pt-[8.89vw] text-black">
            <div>
              <div className="sf-pro-display flex flex-col items-center text-[8.33vw] font-bold">
                Need help?
              </div>
              <div className="mt-[1.18vw] flex flex-col items-center text-[12px] sm:text-[12px] lg:text-lg xl:text-xl">
                Don&#39;t hesitate to reach out to us, we&#39;d love to help
                you!
              </div>
              <div className="mt-[1.94vw] flex flex-col items-center">
                <a href="mailto:info@fgacyc.com">
                  <button className="border-b-solid flex items-center border-b-2 border-black text-xs font-bold text-black lg:border-b-3 lg:pb-[0.625vw] lg:text-[2.29vw] xl:border-b-4">
                    Let&#39;s Talk
                    <div className="w-[1.18vw]"></div>
                    <div className="w-[2.92vw]">
                      <Image
                        src={"/icons/right_arrow.svg"}
                        width={42}
                        height={42}
                        alt="right arrow icon"
                        className=""
                      />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

interface FormikInputProps {
  formKey: keyof FormikFormType;
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: HTMLInputElement["type"];
}

const FormikInput: FunctionComponent<FormikInputProps> = ({
  formKey,
  label,
  required,
  placeholder,
  type,
}) => {
  const ctx = useFormikContext<FormikFormType>();
  return (
    <div className={`sf-pro-display mx-auto mb-5 flex w-4/5 flex-col text-xl`}>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={formKey} className="mb-[13px] font-bold">
          {label}
          {required && <span className="ml-1 text-[#FF0000]">*</span>}
        </label>
        <input
          min={type === "number" ? 1 : undefined}
          max={type === "number" ? 99 : undefined}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-[5px] border-2 text-xl ${
            ctx.errors[formKey] ? "border-red-500" : "border-[#b2b2b2"
          } bg-white px-[18px] py-[13px] placeholder-[#B2B2B2] focus:outline-none`}
          name={formKey}
          value={String(ctx.values[formKey])}
          onChange={(e) => {
            void ctx.setFieldValue(formKey, e.target.value);
          }}
        />
      </div>
      {ctx.errors[formKey] ? (
        <span className="w-full pr-1 text-end text-sm italic text-red-500">
          {ctx.errors[formKey]}
        </span>
      ) : (
        <div className="h-[20px]" />
      )}
    </div>
  );
};

const FormikSelect: FunctionComponent<
  Omit<FormikInputProps, "placeholder" | "type"> & {
    options: ValueLabelPair<string>[];
  }
> = ({ formKey, label, required, options }) => {
  const ctx = useFormikContext<FormikFormType>();
  return (
    <div className={`sf-pro-display mx-auto mb-5 flex w-4/5 flex-col text-xl`}>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={formKey} className="mb-[13px] font-semibold">
          {label}
          {required && <span className="ml-1 text-[#FF0000]">*</span>}
        </label>
        <div className="relative flex w-full flex-row items-center">
          <select
            className={`w-full appearance-none rounded-[5px] border-2 text-xl ${
              ctx.errors[formKey] ? "border-red-500" : "border-[#b2b2b2"
            } bg-white px-[18px] py-[13px] placeholder-[#B2B2B2] focus:outline-none`}
            name={formKey}
            value={String(ctx.values[formKey])}
            onChange={(e) => {
              void ctx.setFieldValue(formKey, e.target.value);
            }}
          >
            {options.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <Image
            src={"/icons/arrow_down.svg"}
            alt="Arrow Down Icon"
            width={20}
            height={20}
            className="absolute right-[20px]"
          />
        </div>
      </div>
      {ctx.errors[formKey] ? (
        <span className="w-full pr-1 text-end text-sm italic text-red-500">
          {ctx.errors[formKey]}
        </span>
      ) : (
        <div className="h-[20px]" />
      )}
    </div>
  );
};

const FormikRadio: FunctionComponent<
  FormikInputProps & { options: ValueLabelPair<boolean | string>[] }
> = ({ formKey, label, required, options }) => {
  const ctx = useFormikContext<FormikFormType>();
  return (
    <div className={`sf-pro-display mx-auto mb-5 flex w-4/5 flex-col text-xl`}>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={formKey} className="mb-[13px] font-semibold">
          {label}
          {required && <span className="ml-1 text-[#FF0000]">*</span>}
        </label>
        <RadioGroup
          id="custom-radio"
          color="secondary"
          value={String(ctx.values[formKey])}
          onChange={(e) =>
            void ctx.setFieldValue(formKey, e.currentTarget.value)
          }
        >
          {options.map((opt) => (
            <Radio key={opt.label} value={String(opt.value)}>
              {opt.label}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
