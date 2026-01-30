import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-2">Message Sent!</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Thanks for reaching out, Joy! I've received your message and will get back to you as soon as possible.
      </p>
      
      <Button asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
}