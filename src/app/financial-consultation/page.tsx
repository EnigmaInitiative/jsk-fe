import React from "react";

const FinancialConsultation = () => {
  return (
    <div className="container mx-auto overflow-x-hidden p-8 text-justify">
      <h1 className="mb-6 text-4xl font-bold">Financial Consultation</h1>

      <p className="mb-4 text-gray-800">
        At JSK, we offer comprehensive financial solutions
        tailored to your unique needs and goals. Our expert team is dedicated to
        helping you create, grow, and preserve your wealth.
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
        <ul className="list-inside list-disc">
          <li className="ml-4">
            <strong>Wealth Management</strong>: Personalized strategies to
            optimize your financial portfolio
          </li>
          <li className="ml-4">
            <strong>Corporate Advisory</strong>: Expert guidance for businesses
            of all sizes
          </li>
          <li className="ml-4">
            <strong>Estate Planning</strong>: Ensuring smooth wealth transfer to
            your heirs
          </li>
          <li className="ml-4">
            <strong>Venture Capital Funding</strong>: Supporting innovative
            startups and growth opportunities
          </li>
          <li className="ml-4">
            <strong>Tax & Accounting Services</strong>: Optimizing your
            financial position
          </li>
          <li className="ml-4">
            <strong>Long Term Visa Solutions</strong>: Assisting with residency
            options including Golden Visa
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Our Wealth Management Process
        </h2>
        <ol className="ml-4 list-inside list-decimal">
          <li>
            <strong>Create Wealth</strong>: We help you be intentional and
            efficient with your time and resources
          </li>
          <li>
            <strong>Grow Wealth</strong>: Our strategies aim to make your money
            work harder for you
          </li>
          <li>
            <strong>Preserve Wealth</strong>: We take necessary steps to protect
            your hard-earned assets
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
        <p className="mb-4 text-gray-800">
          To create financial strategies that help our clients:
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>Preserve existing assets</li>
          <li>Create new avenues for wealth growth</li>
          <li>Prepare for financial uncertainties</li>
          <li>Pass wealth to heirs in the most efficient manner possible</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Why Choose JSK?</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Expertise</strong>: Our team of veteran bankers brings years
            of experience in managing wealth for high-net-worth individuals
            across the globe
          </li>
          <li>
            <strong>Comprehensive Solutions</strong>: We offer end-to-end,
            innovative financial solutions
          </li>
          <li>
            <strong>Tailored Approach</strong>: Our strategies are customized to
            your specific needs and goals
          </li>
          <li>
            <strong>Global Perspective</strong>: With operations in Dubai,
            Bangladesh, India, and Sri Lanka, we bring a global outlook to your
            financial planning
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FinancialConsultation;
