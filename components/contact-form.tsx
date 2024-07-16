"use client";

import { handleFormSubmission } from "@/actions/form-action";
import { cn } from "@/lib/utils";
import { useFormState } from "react-dom";
import SubmitBtn from "./submitbtn-form";

function ContactForm() {
  const [state, formaction] = useFormState(handleFormSubmission, null);
  return (
    <>
      <form action={formaction}>
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="fullname"
              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none text-gray-300">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="w-full flex flex-col">
            <label className="font-semibold leading-none text-gray-300">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <SubmitBtn />
        </div>
      </form>
      <p
        className={cn(
          "text-xl mt-6 font-bold leading-7 text-center ",
          state?.status ? "text-green-600" : "text-red-600"
        )}
      >
        {state?.response}
      </p>
    </>
  );
}

export default ContactForm;
