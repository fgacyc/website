import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { AiOutlineQuestionCircle } from "react-icons/ai";

const HOST = process.env.NEXT_PUBLIC_API_URL;

interface User {
  email: string;
  name: string;
  sub: string;
}

interface DeletionResponse {
  status: boolean;
  message: string;
}

function Section1() {
  const router = useRouter();
  function login() {
    void router.push("/api/auth/login");
  }

  return (
    <>
      <h6 className={"mt-2"}>Steps to Delete Your Data</h6>
      <ol className={"list-inside list-decimal"}>
        <li>
          <strong>Review Your Data:</strong> Understand which data will be
          deleted and what will be retained.
        </li>
        <li>
          <strong>Confirm Deletion:</strong> Confirm that you wish to
          permanently delete your account and all associated data.
        </li>
        <li>
          <strong>Login:</strong> Log in to your account to verify your
          identity.
        </li>
        <li>
          <strong>Submit Request:</strong> Fill out and submit the form below to
          start the deletion process. A confirmation email will be sent to you
          once the process is complete.
        </li>
      </ol>

      <h6 className={"mt-2"}>Data to be Deleted</h6>
      <ul className={"list-inside list-disc"}>
        <li>Your account profile information</li>
        <li>All content and data you have uploaded or created</li>
        <li>
          Any third-party integrations or connections associated with your
          account
        </li>
      </ul>

      <h6 className={"mt-2"}>Data Retention</h6>
      <p>
        We will retain certain data for 30 days after your account deletion, as
        required by law. This includes:
      </p>
      <ul className={"list-inside list-disc"}>
        <li>Billing and financial records</li>
        <li>
          Any data required to comply with legal, tax, or accounting obligations
        </li>
      </ul>

      <h6 className={"mt-2"}>Delete Your Data</h6>
      <p>
        Please login to your account to confirm that you want to delete your
        account and all associated data. This action is irreversible.
      </p>

      <button
        className={"my-10 h-12 w-full rounded bg-[#191D1A] text-white"}
        onClick={() => login()}
      >
        Login
      </button>
    </>
  );
}

function Section2() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const { user, isLoading } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const user1 = user as User;
    if (!isLoading && user) {
      setEmail(user1.email);
      setName(user1.name);
      setUid(user1.sub);
    }
  }, [isLoading, user]);

  async function logout() {
    await router.push("/api/auth/logout");
  }

  async function onSubmit() {
    if (!checked) {
      alert("Please confirm that you understand the terms");
      return;
    }

    const url = `${HOST}/users/${uid}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as DeletionResponse;
      if (data.status) {
        alert("Your account has been deleted");
      } else {
        alert("Deletion failed. Please try again later.");
      }
    } catch (e) {
      console.error(e);
      alert("Deletion failed. Please try again later.");
    }
  }

  return (
    <>
      <div className={"mb-10 text-[#6e6e77]"}>
        If you would like to request the deletion of your account and associated
        data with FGA Mobile App, please fill out the form below. We will
        process your request within 7 business days and confirm the deletion of
        your account and data, except for any information we are required to
        retain for legal or regulatory purposes.
      </div>
      {/* */}
      <div className={"mb-10"}>
        <div className={"mb-2"}>
          <div className={"flex justify-between"}>
            <div>Email Address</div>
            <AiOutlineQuestionCircle
              className={"h-5 w-5 cursor-pointer"}
              onClick={onOpen}
            />
          </div>
          <input
            placeholder={""}
            className={"h-12 w-full rounded border-2 p-2"}
            disabled={true}
            value={email}
          />
        </div>
        <div className={"mb-8"}>
          <div>Username</div>
          <input
            placeholder={""}
            className={"h-12 w-full rounded border-2 p-2"}
            disabled={true}
            value={name}
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="confirm"
            name="confirm"
            value="confirm"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="confirm" className={"ml-2"}>
            I understand that by requesting deletion, all of my account data
            will be permanently deleted, except for required to comply with
            legal, tax, or accounting obligations which may be retained for 1
            month.
          </label>
        </div>

        <div
          className={
            "my-10 flex h-12 rounded border-2 border-[#191D1A] bg-[#191D1A] text-white"
          }
        >
          <button
            className={"w-full "}
            onClick={() => {
              void onSubmit();
            }}
          >
            Submit
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
                <div className={"text-sm"}>
                  Please note that the email address displayed is the one you
                  used to log in to your account. If this is not your email
                  address, please logout and login with the correct email
                  address.
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
                <button
                  className={
                    "my-3 h-10 w-[120px] rounded bg-red-500 text-white"
                  }
                  onClick={() => {
                    void logout();
                  }}
                >
                  Logout
                </button>

                {/*    cancel  button gray bg and white text */}
                <button
                  className={
                    " my-3 h-10 w-[120px] rounded bg-[#191D1A] text-white"
                  }
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
  );
}

export default function AccDeletion() {
  const [step, setStep] = useState(1);
  const { user, isLoading } = useUser();
  useEffect(() => {
    if (!isLoading && user) {
      console.log(user);
      setStep(2);
    }
  }, [isLoading, user]);

  return (
    <div>
      <div className={"sf-pro-display h-[70px]"}></div>
      <div className={"m-auto max-w-[600px] p-4"}>
        <div className={"m-auto mb-4 flex items-center"}>
          <img src="/FGA_Logo.png" alt="FGA Logo" className={"h-10 w-10"} />
          <div className={"ml-4 text-2xl font-bold"}>FGA mobile</div>
        </div>
        <div className={"mb-2 text-2xl font-bold"}>
          Request Account Deletion
        </div>
        {step === 1 ? <Section1 /> : <Section2 />}
      </div>
    </div>
  );
}
