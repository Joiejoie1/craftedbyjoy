import { useNavigate } from "react-router-dom"; // Import this

export default function ContactForm() {
  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Success! Redirect to the thank you page
      navigate("/success");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  // ... rest of your form code
}