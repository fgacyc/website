import {useEffect, useState} from "react";
import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0/client';
import {useRouter} from "next/router";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import {AiOutlineQuestionCircle} from "react-icons/ai";


interface Section1Props {
    setStep: (step: number) => void
}

interface User {
    email: string,
    name: string

}

interface AuthUser {
    user: User,
    isLoading: boolean
}

function Section1({setStep}: Section1Props) {
    const router = useRouter()
    return (
        <>

            <h6 className={"mt-2"}>Steps to Delete Your Data</h6>
            <ol className={"list-decimal list-inside"}>
                <li><strong>Review Your Data:</strong> Understand which data will be deleted and what will be retained.
                </li>
                <li><strong>Confirm Deletion:</strong> Confirm that you wish to permanently delete your account and all
                    associated data.
                </li>
                <li><strong>Login:</strong> Log in to your account to verify your identity.
                </li>
                <li><strong>Submit Request:</strong> Fill out and submit the form below to start the deletion process. A
                    confirmation email will be sent to you once the process is complete.
                </li>
            </ol>

            <h6 className={"mt-2"}>Data to be Deleted</h6>
            <ul className={"list-disc list-inside"}>
                <li>Your account profile information</li>
                <li>All content and data you have uploaded or created</li>
                <li>Any third-party integrations or connections associated with your account</li>
            </ul>

            <h6 className={"mt-2"}>Data Retention</h6>
            <p>We will retain certain data for 30 days after your account deletion, as required by law. This
                includes:</p>
            <ul className={"list-disc list-inside"}>
                <li>Billing and financial records</li>
                <li>Any data required to comply with legal, tax, or accounting obligations</li>
            </ul>

            <h6 className={"mt-2"}>Delete Your Data</h6>
            <p>Please login to your account to
                confirm that you want to delete your account and all associated data. This action is
                irreversible.</p>

            <button className={"w-full h-12 bg-[#191D1A] text-white my-10 rounded"}
                    onClick={
                        async () => {
                            await router.push("/api/auth/login")
                        } // Redirect to login page
                    }
            >
                Login
            </button>


        </>
    )
}

function Section2() {
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const {user, isLoading} = useUser();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter()

    useEffect(() => {
        const user1 = user as User
        if (!isLoading && user) {
            setEmail(user1.email)
            setName(user1.name)
        }
    }, [isLoading, user]);

    function onSubmit() {
        if (!checked) {
            alert("Please confirm that you understand the terms")
            return
        }

        alert("Submitted")
    }

    return (
        <>
            <div className={"text-[#6e6e77] mb-10"}>
                If you would like to request the deletion of your account and associated data with FGA Mobile App,
                please fill out the form below. We will process your request within 7 business days and confirm the
                deletion of your account and data, except for any information we are required to retain for legal or
                regulatory purposes.
            </div>
            {/* */}
            <div className={"mb-10"}>
                <div className={"mb-2"}>
                    <div className={"flex justify-between"}>
                        <div>Email Address</div>
                        <AiOutlineQuestionCircle className={"h-5 w-5 cursor-pointer"} onClick={onOpen} />
                    </div>
                    <input placeholder={""} className={"w-full border-2 rounded h-12 p-2"} disabled={true}
                           value={email}
                    />


                </div>
                <div className={"mb-2"}>
                    <div>Username</div>
                    <input placeholder={""} className={"w-full border-2 rounded h-12 p-2"} disabled={true}
                           value={name}
                    />
                </div>

                <div className={"mb-2"}>
                    <div>Reason for Deletion(optional)</div>
                    <textarea placeholder={"Explain why you are deleting your account"} rows={4}
                              className={"w-full border-2 rounded  p-2"}/>
                </div>

                <div>
                    <input type="checkbox" id="confirm" name="confirm" value="confirm"
                           checked={checked}
                           onChange={() => setChecked(!checked)}
                    />
                    <label htmlFor="confirm" className={"ml-2"}>I understand that by requesting deletion, all of my
                        account data will be permanently deleted, except for required to comply with legal, tax, or
                        accounting obligations which may be retained for 1 month.</label>
                </div>

                <div className={"rounded flex border-[#191D1A] border-2 h-12 bg-[#191D1A] text-white my-10"}>
                    <button className={"w-full "}
                            onClick={onSubmit}
                    >Submit
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
                <ModalContent className={"m-2"}>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className={"text-lg"}>Email Address</div>

                            </ModalHeader>
                            <ModalBody>
                                <div className={"text-sm"}>Please note that the email address displayed is the one you
                                    used
                                    to log in to your account. If this is not your email address, please logout and
                                    login with the correct email address.
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {/*<Button color="danger" variant="light" onPress={onClose}>*/}
                                {/*    Logout*/}
                                {/*</Button>*/}
                                {/*<Button color="default" onPress={onClose}>*/}
                                {/*Cancel*/}
                                {/*</Button>*/}

                            {/*    logout button red bg and white text */}
                                <button className={"w-[120px] h-10 bg-red-500 text-white my-3 rounded"}
                                        onClick={
                                            async () => {
                                                await router.push("/api/auth/logout")
                                            } // Redirect to login page
                                        }
                                >
                                    Logout
                                </button>

                            {/*    cancel  button gray bg and white text */}
                                <button className={" w-[120px] h-10 bg-[#191D1A] text-white my-3 rounded"}
                                        onClick={onClose}
                                >
                                    Cancel
                                </button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}

export default function AccDeletion() {
    const [step, setStep] = useState(1)
    const {user, isLoading} = useUser();
    useEffect(() => {
        if (!isLoading && user) {
            console.log(user)
            setStep(2)
        }
    }, [isLoading, user]);

    return (
        <div>
            <div className={"h-[70px] sf-pro-display"}></div>
            <div className={"max-w-[600px] m-auto p-4"}>
                <div className={"flex items-center m-auto mb-4"}>
                    <img src="/FGA_Logo.png" alt="FGA Logo" className={"h-10 w-10"}/>
                    <div className={"text-2xl font-bold ml-4"}>FGA mobile</div>
                </div>
                <div className={"text-2xl font-bold mb-2"}>Request Account Deletion</div>
                {
                    step === 1 ? <Section1 setStep={setStep}/> : <Section2/>
                }

            </div>
        </div>
    )
}