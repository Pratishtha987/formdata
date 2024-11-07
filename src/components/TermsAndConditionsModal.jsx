import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const TermsAndConditionsModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <span className="text-[#88b92f] cursor-pointer" onClick={handleOpenModal}>
        {children}
      </span>

      <Transition appear show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl p-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 text-gray-100"
                    >
                      Terms and Conditions
                    </Dialog.Title>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:text-gray-200 focus:outline-none"
                      onClick={handleCloseModal}
                    >
                      <XCircleIcon className="w-8 h-8" />
                    </button>
                  </div>

                  <div className="overflow-y-auto max-h-[70vh] text-gray-300 font-light">
                    <pre className="whitespace-pre-wrap">
                      {/* Paste the terms and conditions content here */}
                      <div>
                        <h2>1.Challenge Overview</h2>
                        <p>
                          1.1. The Challenge is a two-step trading evaluation
                          process offered during the promotion period from
                          November 1, 2024, to December 31, 2024.
                        </p>
                        <p>
                          1.2. Participants may choose one of the following
                          challenge sizes: 10k, 20k, 50k, 100k, or 200k.
                        </p>
                        <p>
                          1.3. Registration Period: Participants can register
                          for the Challenge between November 1, 2024, and
                          December 31, 2024. However, the trading challenge will
                          only begin on January 1, 2025, when the Participant
                          receives their trading account.
                        </p>
                        <p>
                          1.4. The Company reserves the right to determine the
                          timing and method of account issuance at its
                          discretion, based on operational considerations.
                        </p>
                        <br />
                        <h3>2.Eligibility</h3>
                        <p>
                          2.1. Participants must be at least 18 years of age or
                          older to participate in the Challenge.
                        </p>
                        <p>
                          2.2. The Challenge is open to individuals worldwide,
                          except where prohibited by law.
                        </p>
                        <p>
                          2.3. Only one registration per person is allowed.
                          Duplicate accounts or registrations are strictly
                          prohibited and will result in disqualification from
                          the Challenge.
                        </p>
                        <br />
                        <h3>3.No Upfront Payment</h3>
                        <p>
                          3.1. During the promotional period, Participants are
                          not required to pay any upfront fees to enter the
                          Challenge.
                        </p>
                        <p>
                          3.2. Upon successful completion of the two-step
                          Challenge, Participants must pay the applicable
                          Challenge fee for their selected account size in order
                          to qualify for a funded account.
                        </p>
                        <br />
                        <h3>4.Passing Criteria</h3>
                        <pre>
                          4.1. To pass the Challenge, Participants must meet the
                          following requirements: • Achieve the specified profit
                          target for their selected account size. • Adhere to
                          risk management rules and trading limits set by the
                          Company. • Avoid breaching any trading rules (such as
                          drawdown limits or leverage restrictions).
                        </pre>
                        <p>
                          4.2. Participants who fail to meet the passing
                          criteria will not be eligible for a refund or
                          additional attempts within the same promotional
                          period.
                        </p>

                        <br />
                        <h3>5.Payment Obligations After Passing</h3>
                        <p>
                          5.1. Upon passing the Challenge, Participants must pay
                          the applicable Challenge fee within 14 days to
                          activate their funded account.
                        </p>
                        <p>
                          5.2. Failure to pay within the specified period will
                          result in disqualification from receiving a funded
                          account.
                        </p>
                        <br />
                        <h3>6. Real Account Setup</h3>
                        <p>
                          6.1. Upon receipt of the Challenge fee, the Company
                          will set up a real funded account for the Participant,
                          based on the account size selected during
                          registration.
                        </p>
                        <p>
                          6.2. The real account is subject to the Company’s
                          general terms and conditions for live trading,
                          including profit-sharing arrangements and risk
                          management rules.
                        </p>
                        <br />
                        <h3>7.Account Issuance and Trading Start Date</h3>
                        <p>
                          7.1. All Participants will begin trading on January 1,
                          2025, and receive their trading challenge account on
                          that date, provided there are no operational delays.
                        </p>
                        <p>
                          7.2. The Company reserves the right to issue accounts
                          progressively after the registration period, based on
                          operational factors, and will notify Participants of
                          their start date if there are any adjustments.
                        </p>
                        <br />
                        <h3>8.Termination of Participation</h3>
                        <p>
                          8.1. The Company reserves the right to terminate or
                          disqualify any Participant from the Challenge if they
                          are found to have breached any of the Terms and
                          Conditions, including, but not limited to, creating
                          multiple accounts or engaging in fraudulent
                          activities.
                        </p>
                        <p>
                          8.2. The Company may terminate the promotion at any
                          time, without notice, for reasons including, but not
                          limited to, operational or regulatory changes.
                        </p>
                        <br />
                        <h3>9.Liability and Risk</h3>
                        <p>
                          9.1. Trading in financial markets involves significant
                          risk of loss. Participants are aware that they may
                          incur losses during the Challenge and understand that
                          the Company is not responsible for any financial
                          losses or damages.
                        </p>
                        <p>
                          9.2. The Company will not be held liable for any
                          errors, delays, or interruptions in the operation of
                          the Challenge, including any issues with the trading
                          platforms.
                        </p>

                        <br />
                        <h3>10.Data Privacy</h3>
                        <p>
                          10.1. The Company will collect and process personal
                          data (such as name, email, and contact details) solely
                          for the purpose of administering the Challenge.
                        </p>
                        <p>
                          10.2. Participants agree to the Company’s privacy
                          policy, which outlines how personal data is collected,
                          stored, and used.
                        </p>

                        <br />
                        <h3>11.General Terms</h3>
                        <p>
                          11.1. These Terms and Conditions are governed by the
                          laws of [Jurisdiction]. Any disputes arising in
                          connection with the Challenge will be subject to the
                          exclusive jurisdiction of the courts in
                          [Jurisdiction].
                        </p>
                        <p>
                          11.2. By registering for the Challenge, Participants
                          agree to these Terms and Conditions in full. The
                          Company reserves the right to modify these Terms and
                          Conditions at any time, with or without prior notice.
                        </p>

                        <br />
                        <h2 className="text-[#88b92f]">
                          By registering for the QuickFunded Christmas
                          Challenge, you agree to abide by these Terms and
                          Conditions.
                        </h2>
                      </div>
                      {document.content}
                    </pre>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TermsAndConditionsModal;
