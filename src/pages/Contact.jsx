// Contact.jsx
export default function Contact() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea className="w-full p-2 border rounded" rows="4" />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
