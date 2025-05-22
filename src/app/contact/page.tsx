import Layout from "@/modules/common/layouts/layout";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Layout>
      <section className="mt-5 flex flex-col gap-3">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55607.98013875901!2d-66.89697658692812!3d-29.41421584521035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427d9873396f7e5%3A0x3e1c9c348972c7ca!2sLa%20Rioja!5e0!3m2!1ses!2sar!4v1747056044846!5m2!1ses!2sar"
            width="700"
            height="400"
            className="w-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="flex flex-col gap-5 mt-4">
          <label
            className="text-white font-semibold text-2xl"
            htmlFor="
          name"
          >
            Contact Form
          </label>
          <div className="flex gap-5">
            <input
              className="bg-transparent p-4 w-full rounded-xl border placeholder:font-semibold outline-none text-white font-semibold border-neutral-600 placeholder:text-neutral-600"
              type="text"
              name="name"
              id=""
              placeholder="Full name"
            />
            <input
              className="bg-transparent p-4 w-full rounded-xl border placeholder:font-semibold outline-none text-white font-semibold border-neutral-600 placeholder:text-neutral-600"
              type="email"
              name="email"
              id=""
              placeholder="Email address"
            />
          </div>
          <textarea
            className="bg-transparent p-4 w-full rounded-xl border placeholder:font-semibold outline-none text-white font-semibold border-neutral-600 placeholder:text-neutral-600"
            name="message"
            id=""
            placeholder="your message"
          ></textarea>
          <div className="flex justify-end">
            <button className="flex gap-3 text-lg text-yellow-200 bg-gradient-to-br from-neutral-800 to-neutral-900 py-3 px-5 rounded-lg shadow-lg">
              <SendIcon className="-rotate-45" sx={{ color: "#fef08a" }} />
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
