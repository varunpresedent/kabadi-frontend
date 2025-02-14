"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function EventRegistration() {
  const [formData, setFormData] = useState({
    teamName: "",
    Captain: { name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" },
    viceCaptain: { name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" },
    teamMembers: Array(8).fill({ name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" }),
  });

  const handleChange = (section, index, field, value) => {
    if (field === "phone" && !/^\d*$/.test(value)) return; // Prevent non-numeric input

    setFormData((prevState) => {
      const newState = { ...prevState };

      if (section === "teamName") {
        newState.teamName = value;
      } else if (section === "teamMembers") {
        newState[section] = [...prevState[section]];
        newState[section][index] = { ...newState[section][index], [field]: value };
      } else {
        newState[section] = { ...prevState[section], [field]: value };
      }

      return newState;
    });
  };

  const addMember = () => {
    if (formData.teamMembers.length < 10) {
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, { name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" }],
      });
    }
  };

  const removeMember = (index) => {
    if (formData.teamMembers.length > 8) {
      const updatedMembers = [...formData.teamMembers];
      updatedMembers.splice(index, 1);
      setFormData({ ...formData, teamMembers: updatedMembers });
    }
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateEmail(formData.Captain.email) || !validateEmail(formData.viceCaptain.email)) {
      toast.error("Please enter a valid email for Captain and Vice Captain.");
      return;
    }
    if (!validatePhone(formData.Captain.phone) || !validatePhone(formData.viceCaptain.phone)) {
      toast.error("Phone number must be exactly 10 digits for Captain and Vice Captain.");
      return;
    }
  
    for (let member of formData.teamMembers) {
      if (member.email && !validateEmail(member.email)) {
        toast.error("One or more team members have an invalid email address.");
        return;
      }
      if (member.phone && !validatePhone(member.phone)) {
        toast.error("Phone number must be exactly 10 digits for all team members.");
        return;
      }
    }
  
    console.log("Form submitted:", formData);
    toast.success("🎉 Registration submitted successfully!");
  
    // **Reset form after submission**
    setFormData({
      teamName: "",
      Captain: { name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" },
      viceCaptain: { name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" },
      teamMembers: Array(8).fill({ name: "", rollNumber: "", email: "", branch: "", year: "", phone: "" }),
    });
  };
  

  return (
    <div className="container mx-auto max-w-2xl bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Team Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="teamName">Team Name</Label>
          <Input type="text" id="teamName" value={formData.teamName} onChange={(e) => handleChange("teamName", null, "", e.target.value)} required />
        </div>
         {/* changed here */}
        {["Captain", "viceCaptain"].map((role) => (
          <div key={role} className="p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">{role.replace(/([A-Z])/g, " $1")}</h2>
            {Object.keys(formData[role]).map((field) => (
              <div key={field} className="mb-2">
                <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                <Input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={formData[role][field]}
                  onChange={(e) => handleChange(role, null, field, e.target.value)}
                  required
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="p-4 border rounded-lg bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Team Members (8 Mandatory, 2 Optional)</h2>
          {formData.teamMembers.map((member, index) => (
            <div key={index} className="mb-4 p-3 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-medium text-gray-700">Team Member {index + 1}</h3>
              {Object.keys(member).map((field) => (
                <div key={field} className="mb-2">
                  <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                  <Input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    value={member[field]}
                    onChange={(e) => handleChange("teamMembers", index, field, e.target.value)}
                    required={index < 8}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                  />
                </div>
              ))}
              {index >= 8 && (
                <button type="button" onClick={() => removeMember(index)} className="text-red-500 text-sm flex items-center gap-1">
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              )}
            </div>
          ))}
          {formData.teamMembers.length < 10 && (
            <Button type="button" onClick={addMember} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white w-full">
              + Add Member
            </Button>
          )}
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
          Register Team
        </Button>
      </form>
    </div>
  );
}
