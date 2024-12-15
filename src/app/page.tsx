"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [waitlistCount, setWaitlistCount] = useState(0); // State to track waitlist count
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  // ROI Calculator state
  const [investment, setInvestment] = useState(5000); // Default investment amount
  const profitRange = {
    min: (investment * 7) / 100, // 7% profit
    max: (investment * 12) / 100, // 12% profit
  };

  const handleJoinWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Trigger animation
    setIsAnimating(true);

    // Simulate adding to the waitlist
    setTimeout(() => {
      setWaitlistCount((prevCount) => prevCount + 1); // Increment waitlist count
      setIsAnimating(false);
    }, 300); // Match the animation duration
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInvestmentChange = (value: number) => {
    setInvestment(value);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Logo */}
      <div className="relative top-0 left-10 flex items-center">
        <img src="/invoicexlogotrans.png" alt="Logo" className="h-44 w-auto" />
      </div>

      {/* Main Content */}
      <div className="flex-1 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Instantly unlock your invoice value
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Join the future of invoice financing
        </p>

        {/* Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mb-10">
          <form onSubmit={handleJoinWaitlist}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-500"
            />
            <select
              name="type"
              defaultValue=""
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            >
              <option value="" disabled>
                Investor or SME?
              </option>
              <option value="Investor">Investor</option>
              <option value="SME">SME</option>
            </select>

            <button
              type="submit"
              className="w-full bg-purple-600 p-3 rounded text-white font-semibold hover:bg-purple-700"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Waitlist Count */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-400 mb-2">Current waitlist count:</p>
          <div
            className={`text-4xl font-bold ${
              isAnimating ? "animate-pulse" : ""
            }`}
          >
            {waitlistCount}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-transparent border border-white p-6 rounded-lg hover:scale-105 hover:border-purple-600 transition-transform duration-300 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              📄 What is Invoice Discounting?
            </h2>
            <p className="flex-grow">
              Invoice discounting is a financial solution that allows businesses
              to receive immediate cash against their unpaid invoices, improving
              cash flow without waiting for customer payments.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-transparent border border-white p-6 rounded-lg hover:scale-105 hover:border-purple-600 transition-transform duration-300 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              📉 The Problem
            </h2>
            <p className="flex-grow">
              Long payment terms and delayed payments create cash flow gaps that
              can stifle business growth, limit opportunities, and strain
              supplier relationships.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-transparent border border-white p-6 rounded-lg hover:scale-105 hover:border-purple-600 transition-transform duration-300 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              🤖 Our Solution
            </h2>
            <p className="flex-grow">
              InvoiceX provides an AI-powered platform that instantly evaluates
              and finances invoices, offering competitive rates and a seamless
              digital experience for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="py-10 text-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">📈 Return on Investment Calculator</h2>
          <p className="text-gray-400 mb-4">
            Calculate your potential returns in 6 months.
          </p>

          {/* Investment Input */}
          <div className="mb-6">
            <label htmlFor="investment" className="block text-white font-semibold mb-2">
              How much do you want to invest?
            </label>
            <input
              type="range"
              id="investment"
              min="1000"
              max="100000"
              step="1000"
              value={investment}
              onChange={(e) => handleInvestmentChange(Number(e.target.value))}
              className="w-full mb-4"
            />
            <input
              type="number"
              value={investment}
              onChange={(e) => handleInvestmentChange(Number(e.target.value))}
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 text-center"
            />
          </div>

          {/* Profit Display */}
          <div className="text-white">
            <p className="text-lg">
              Based on your investment, you'll earn between:
            </p>
            <p className="text-2xl font-bold mt-2">
              ${profitRange.min.toFixed(2)} - ${profitRange.max.toFixed(2)}
            </p>
            <p className="text-lg text-gray-400 mt-2">
              in just 6 months.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black text-center py-10">
        <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Cash Flow?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join thousands of businesses already benefiting from instant invoice
          financing.
        </p>
        <button
          onClick={scrollToTop}
          className="bg-purple-600 text-white p-4 rounded font-semibold hover:bg-purple-700 transition-transform duration-300 inline-flex items-center gap-2"
        >
          Join the Waitlist <span className="text-2xl">→</span>
        </button>
      </footer>
    </div>
  );
}
