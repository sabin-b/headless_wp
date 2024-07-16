import ContactForm from "@/components/contact-form";

function Contactpage() {
  return (
    <div className="w-full bg-gray-800">
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Contact me
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default Contactpage;
