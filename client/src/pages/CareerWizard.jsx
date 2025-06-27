import React, { useState } from "react";
import Layout from "../components/Layout";

const CareerWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    education: "",
    interest: "",
    time: "",
    skills: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Collected Roadmap Data:", formData);
    // TODO: send to backend later
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label className="block mb-2 font-semibold">Education Level</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block mb-2 font-semibold">Career Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block mb-2 font-semibold">
              Time Commitment (per week)
            </label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g., 10 hours"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block mb-2 font-semibold">Existing Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g., HTML, CSS, Python"
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Career Roadmap Wizard
        </h2>
        {renderStep()}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Generate Roadmap
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CareerWizard;
