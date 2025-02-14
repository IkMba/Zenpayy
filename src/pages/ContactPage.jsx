import Formcontainer from "@/components/Formcontainer";
import ContactForm from "@/pageSections/contact/ContactForm";
import {
  MailCheck,
  MapPinCheck,
  MapPinCheckIcon,
  PhoneCall,
} from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-[--dark-shade] px-4 py-24 md:flex gap-12 justify-center ">
      <div className="">
        <h2 className="text-3xl font-semibold mb-4 text-[#7ED6DF]">
          Contact Us
        </h2>
        {/* <Formcontainer> */}
        <ContactForm />
        {/* </Formcontainer> */}
      </div>
      <div className="flex flex-col gap-8 mt-8 md:mt-24 text-white">
        <h2 className="text-2xl font-semibold ">Contact information</h2>

        <div>
          <div className="flex gap-2">
            <MapPinCheck color="#7ED6DF" />
            <h3 className="text-xl  font-semibold"> Address</h3>
          </div>
          <p> Whitworth Street West, Deansgate, Manchester, U.K</p>
        </div>
        <div>
          <div className="flex gap-2">
            <PhoneCall color="#7ED6DF" />
            <h3 className="text-xl  font-semibold">Phone Number</h3>
          </div>
          <p>+4474 1309 4047</p>
        </div>
        <div>
          <div className="flex gap-2">
            <MailCheck color="#7ED6DF" />
            <h3 className="text-xl  font-semibold">EMAIL</h3>
          </div>
          <p>Contact@Trustbanky.com</p>
        </div>
      </div>
    </div>
  );
}
