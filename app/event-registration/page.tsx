"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import RulesModal from "../components/RulesModal";
import RegistrationForm from "../components/RegistrationForm";

export default function EventRegistration() {
  const [agreed, setAgreed] = useState(false);
  const [showRules, setShowRules] = useState(true);

  const handleAgreement = () => {
    setAgreed(true);
    setShowRules(false);
  };

  return (
    <div className="container mx-auto max-w-2xl p-6 rounded-lg shadow-lg mt-6">
      <Toaster position="top-right" reverseOrder={false} />

      {showRules ? (
        <RulesModal agreed={agreed} setAgreed={setAgreed} onAgree={handleAgreement} />
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
}
