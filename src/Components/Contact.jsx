import { useState } from "react";
import ContactImg from "../assets/contactImg.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section id="contact" className="section-main">
      <div className="mb-10">
        <h1 className="page-headings">Contact Me</h1>
        <p className="text-lg md:text-xl">
          If you would like to get in touch or have any questions, feel free to
          reach out using the form below.
        </p>
      </div>

      <div className="flex items-center justify-between gap-10">
        <div className="hidden md:block w-1/2 px-5">
          <img src={ContactImg} alt="Contact Us" />
        </div>

        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full mt-2 p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white bg-cyan-500 rounded-md shadow-lg focus:outline-none hover:bg-cyan-600 transition duration-300"
            >
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
