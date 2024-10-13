import React from "react";

const LegalConsultation = () => {
  return (
    <div className="container mx-auto overflow-x-hidden p-8 text-justify">
      <h1 className="mb-6 text-4xl font-bold">Legal Consultation</h1>

      <p className="mb-4 text-gray-800">
        At JSK, we provide expert legal services designed to protect your real
        estate investments and ensure compliance with the UAE&apos;s legal
        framework.
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Legal Services</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Real Estate Law</strong>: Expertise in property
            transactions, landlord-tenant law, and more
          </li>
          <li>
            <strong>Contract Review & Drafting</strong>: Ensure legally sound
            and enforceable real estate contracts
          </li>
          <li>
            <strong>Property Disputes</strong>: Handling disputes, including
            boundary issues, tenant evictions, and more
          </li>
          <li>
            <strong>Commercial Law</strong>: Assisting businesses with real
            estate-related legal needs
          </li>
          <li>
            <strong>Tax Law</strong>: Structuring deals to minimize tax exposure
            and liability
          </li>
          <li>
            <strong>Litigation & Arbitration</strong>: Representing clients in
            court or arbitration to resolve legal matters
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Why Choose JSK for Legal Services?
        </h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Experienced Legal Team</strong>: Our lawyers have deep
            expertise in UAE real estate law
          </li>
          <li>
            <strong>Tailored Solutions</strong>: We provide customized legal
            strategies that align with your business goals
          </li>
          <li>
            <strong>Comprehensive Services</strong>: From contract drafting to
            dispute resolution, we handle all your legal needs
          </li>
          <li>
            <strong>Risk Mitigation</strong>: Our proactive legal advice
            minimizes potential risks and legal exposure
          </li>
        </ul>
      </section>

      <p className="mb-4 text-gray-800">
        With JSK&apos;s legal team by your side, you can confidently navigate
        the complexities of the UAE&apos;slegal system, ensuring your real
        estate investments are secure and compliant.
      </p>
    </div>
  );
};

export default LegalConsultation;
