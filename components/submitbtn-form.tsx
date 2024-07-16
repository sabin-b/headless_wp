"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

function SubmitBtn() {
  const state = useFormStatus();
  return (
    <Button
      type="submit"
      className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
    >
      {state.pending ? "Submitting" : "Send message"}
    </Button>
  );
}

export default SubmitBtn;
