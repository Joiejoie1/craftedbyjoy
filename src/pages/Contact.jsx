import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xdkzqvab", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded font-semibold"
          >
            Send
          </button>
          {status === "success" && (
            <p className="text-green-600 text-center">Message sent!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
