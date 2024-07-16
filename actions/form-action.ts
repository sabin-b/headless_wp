"use server";
import axios from "axios";
import validator from "validator";
import * as z from "zod";

const formschema = z.object({
  fullname: z.string(),
  phone: z.string().refine(validator.isMobilePhone),
  subject: z.string(),
  message: z.string(),
});

export async function handleFormSubmission(prevstate: any, formdata: FormData) {
  try {
    // Convert FormData to a plain object
    const formInputs = Object.fromEntries(formdata);

    // Validate the form inputs (assuming formschema is properly defined)
    const validate = formschema.safeParse(formInputs);

    if (!validate.success) {
      throw new Error("Validation failed");
    }

    // Create a new FormData instance and append validated data
    const form = new FormData();
    Object.entries(validate.data).forEach(([key, value]) => {
      form.append(key, value); // Ensure value is cast to string
    });

    form.append("_wpcf7_unit_tag", "c8e52ac");
    // Make the POST request with axios
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_WP_URL}wp-json/contact-form-7/v1/contact-forms/473/feedback`,
      form
    );
    if (res.status === 200) {
      return {
        response: res.data.message,
        status: res.data.status === "mail_sent",
      };
    }
  } catch (error) {
    return { response: error };
  }
}
