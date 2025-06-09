import { useState } from "react";
import { logo_50px } from "../Assets/company_img";


export default function Footer() {
  const [footerData] = useState({
    company: {
      name: "Cyclosec",
      logoBg: "var(--color-primary)",
      message: "Your Product Security, Our Responsibility",
    },
    contactDetails: [
      { type: "Email", value: "example@gmail.com" },
      { type: "Phone", value: "+91 9898xxxxxx" },
      { type: "Address", value: "Main Street, City, Country" },
    ],
    importantLinks: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com/in" },
      { label: "Portfolio", url: "https://example.com" },
    ],
    bottomLinks: [
      { label: "Terms and Conditions", url: "#" },
      { label: "Privacy Policy", url: "#" },
    ],
  });

  return (
    <>
      <div
        className="w-full m-0 p-0 overflow-x-hidden"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
        }}
      >
        {/* Footer Section */}
        <footer
          className="flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-background)",
            color: "var(--color-text)",
          }}
        >
          <div
            className="flex flex-col md:flex-row md:justify-around justify-center md:items-start items-center p-8 gap-8 border-b"
            style={{ borderColor: "var(--color-primary)" }}
          >
            {/* Company Info */}
            <div className="flex flex-col items-start gap-4 max-w-sm">
              <div className="flex items-center gap-4">
                <img
                  src={logo_50px}
                  alt="Company Logo"
                  className="w-12 h-12 object-contain"
                />
                <h1 className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
                  {footerData.company.name}
                </h1>
              </div>
              <div
                className="p-3 rounded-md text-sm"
                style={{
                  border: "1px solid var(--color-primary)",
                  color: "var(--color-text)",
                }}
              >
                {footerData.company.message}
              </div>
            </div>

            {/* Contact Us */}
            <div className="text-sm" style={{ color: "var(--color-text)" }}>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Contact Us
              </h2>
              <ul className="space-y-1">
                {footerData.contactDetails.map((item, index) => (
                  <li key={index}>
                    <span style={{ color: "var(--color-accent)" }}>{item.type}:</span>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="text-sm" style={{ color: "var(--color-text)" }}>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Important Links
              </h2>
              <ul className="space-y-1">
                {footerData.importantLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-accent)" }}
                      className="hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="text-xs md:text-sm px-6 py-3 flex flex-col md:flex-row justify-between items-center"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-text)",
            }}
          >
            <div>© {new Date().getFullYear()} {footerData.company.name}. All rights reserved.</div>
            <div className="flex gap-4 mt-2 md:mt-0">
              {footerData.bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{ color: "var(--color-accent)" }}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
        {/* Height rule for large screens */}
        <style>
          {`
          @media (min-width: 768px) {
            footer {
              height: 50vh;
            }
          }

          @media (max-width: 767px) {
            footer {
              height: auto;
            }
          }
        `}
        </style>
      </div>
    </>
  );
}


