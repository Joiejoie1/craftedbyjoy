// src/pages/Contact.jsx
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
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
        {status === "success" && <p className="text-green-600 mt-2">Message sent!</p>}
        {status === "error" && <p className="text-red-600 mt-2">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}

