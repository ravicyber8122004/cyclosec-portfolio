import {
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaEye,
  FaServer,
  FaUserShield,
  FaTags,
  FaAngleDown,
} from "react-icons/fa";

//note: import all the components of the pages in this file for routing.
//Note: While making the coponents remind the pathaddress of the component for routing.

import { Homepage } from "../pages";

export { default as Base } from "../Layout/Base";
export { default as ScrollToTop } from "../components/ScrollToTop";

// data of the navbar.
//note: update the element when the pages created.

export const navLinks = [
  {
    label: "Home",
    hasSubmenu: false,
    path: "/home",
    element: Homepage,
    pathAddress: "./pages/Homepage",
  },
  {
    label: "About",
    hasSubmenu: false,
    path: "/about",
    element: Homepage, //Aboutpage,
    pathAddress: "./pages/Aboutpage",
  },
  {
    label: "Contact",
    hasSubmenu: false,
    path: "/contact",
    element: Homepage, //Homepage, //Contactpage,
    pathAddress: "./pages/Contactpage",
  },
  {
    label: "Pricing",
    hasSubmenu: false,
    path: "/pricing",
    element: Homepage, //Pricingpage,
    pathAddress: "./pages/Pricingpage",
  },
  {
    label: "Platforms",
    hasSubmenu: true,
    path: "/platforms",
    element: Homepage, //Platformspage,
    pathAddress: "./pages/Platformspage",
    subMenuHeading: ["Detection & Monitoring", "Cloud & Endpoint Security"],
    subMenu: [
      {
        name: "Threat Detection Platform",
        description: "Real-time AI-driven threat detection across networks.",
        icon: FaShieldAlt,
        element: Homepage, //Threat_Detection,
        path: "/platforms/threat-detection",
        pathAddress: "./pages/Platforms/Threat_Detection",
      },
      {
        name: "Security Information & Event Management (SIEM)",
        description:
          "Centralized log collection and analysis for rapid threat response.",
        icon: FaNetworkWired,
        element: Homepage, // SIEM,
        path: "/platforms/siem",
        pathAddress: "./pages/Platforms/SIEM",
      },
      {
        name: "Security Operations Center (SOC)",
        description: "Fully managed SOC services for 24/7 security monitoring.",
        icon: FaUserShield,
        element: Homepage, //SOC,
        path: "/platforms/soc",
        pathAddress: "./pages/Platforms/SOC",
      },
      {
        name: "Cloud Security",
        description: "Comprehensive protection for multi-cloud environments.",
        icon: FaServer,
        element: Homepage, //Cloud,
        path: "/platforms/cloud",
        pathAddress: "./pages/Platforms/Cloud",
      },
      {
        name: "Endpoint Detection & Response (EDR)",
        description: "Detect and respond to endpoint threats instantly.",
        icon: FaLock,
        element: Homepage, //EDR,
        path: "/platforms/edr",
        pathAddress: "./pages/Platforms/EDR",
      },
      {
        name: "Network Detection & Response (NDR)",
        description: "Behavioral analytics for network threat hunting.",
        icon: FaEye,
        element: Homepage, //NDR,
        path: "/platforms/ndr",
        pathAddress: "./pages/Platforms/NDR",
      },
    ],
    gridCols: 2,
  },
  {
    label: "Solutions",
    hasSubmenu: true,
    path: "/solutions",
    element: Homepage, //Solutionspage,
    pathAddress: "./pages/Solutionspage",
    subMenuHeading: ["Advanced Threat Protection", "Compliance & Intelligence"],
    subMenu: [
      {
        name: "Ransomware Protection",
        description: "Prevent and mitigate ransomware attacks effectively.",
        icon: FaLock,
        element: Homepage, //Ransomware,
        path: "/solutions/ransomware",
        pathAddress: "./pages/Solutions/Ransomware",
      },
      {
        name: "Insider Threat Detection",
        description: "Identify and stop threats from within your organization.",
        icon: FaUserShield,
        element: Homepage, //Insider_Threat,
        path: "/solutions/insider-threat",
        pathAddress: "./pages/Solutions/Insider_Threat",
      },
      {
        name: "Cloud Workload Protection",
        description: "Safeguard workloads in AWS, Azure, and GCP.",
        icon: FaServer,
        element: Homepage, //Cloud_Workload,
        path: "/solutions/cloud-workload",
        pathAddress: "./pages/Solutions/Cloud_Workload",
      },
      {
        name: "Regulatory Compliance",
        description: "Ensure compliance with GDPR, HIPAA, PCI-DSS.",
        icon: FaTags,
        element: Homepage, //Compliance,
        path: "/solutions/compliance",
        pathAddress: "./pages/Solutions/Compliance",
      },
      {
        name: "Zero Trust Architecture",
        description: "Enforce strict access controls with a zero-trust model.",
        icon: FaShieldAlt,
        element: Homepage, //Zero_Trust,
        path: "/solutions/zero-trust",
        pathAddress: "./pages/Solutions/Zero_Trust",
      },
      {
        name: "Threat Intelligence Integration",
        description: "Leverage global intelligence for proactive defense.",
        icon: FaEye,
        element: Homepage, //Threat_Intel,
        path: "/solutions/threat-intel",
        pathAddress: "./pages/Solutions/Threat_Intel",
      },
    ],
    gridCols: 2,
  },
];
