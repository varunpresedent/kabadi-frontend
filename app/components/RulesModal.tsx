"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface RulesModalProps {
  agreed: boolean;
  setAgreed: (value: boolean) => void;
  onAgree: () => void;
}

export default function RulesModal({ agreed, setAgreed, onAgree }: RulesModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-xl font-bold text-center mb-4">Rules & Regulations</h2>
        <ul className="text-gray-700 mb-4">
          <li>✔ Each team must have a President and Vice President.</li>
          <li>✔ A minimum of 8 team members is mandatory.</li>
          <li>✔ All details must be entered correctly.</li>
          <li>✔ Invalid entries may result in disqualification.</li>
        </ul>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <Label htmlFor="agree">I agree to the terms & conditions</Label>
        </div>
        <Button
          onClick={onAgree}
          disabled={!agreed}
          className={`mt-4 w-full ${agreed ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"}`}
        >
          I Agree
        </Button>
      </div>
    </div>
  );
}
