import {useState} from "react";

interface Section1Props {
    setStep: (step: number) => void

}

function Section1({setStep}: Section1Props) {
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
                    onClick={() => setStep(2)}
            >Login
            </button>


        </>
    )
}

function Section2() {
    const [checked, setChecked] = useState(false)

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

            <div className={"mb-10"}>
                <div className={"mb-2"}>
                    <div>Email Address</div>
                    <input placeholder={""} className={"w-full border-2 rounded h-12 p-2"} disabled={true}/>
                </div>
                <div className={"mb-2"}>
                    <div>Username</div>
                    <input placeholder={""} className={"w-full border-2 rounded h-12 p-2"} disabled={true}/>
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
            <div>
            </div>
        </>
    )
}

export default function AccDeletion() {
    const [step, setStep] = useState(1)

    return (
        <div>
            <div className={"h-[70px] sf-pro-display"}></div>
            <div className={"max-w-[600px] m-auto p-4"}>
                <div className={"flex items-center m-auto mb-4"}>
                    <img src="/FGA_Logo.png" alt="FGA Logo" className={"h-10 w-10"}/>
                    <div className={"text-2xl font-bold ml-4"}>FGA mobile</div>
                </div>
                <div className={"text-2xl font-bold"}>Request Account Deletion</div>
                {
                    step === 1 ? <Section1 setStep={setStep}/> : <Section2/>
                }

            </div>
        </div>
    )
}