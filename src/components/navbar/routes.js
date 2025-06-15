import {
    FaShieldAlt,
    FaNetworkWired,
    FaLock,
    FaEye,
    FaServer,
    FaUserShield,
    FaTags,
} from "react-icons/fa";

//note: update the element when the pages created.

export const navLinks = [
    {
        label: "Home",
        hasSubmenu: false,
        path: "/",

    },

    {
        label: "Pricing",
        hasSubmenu: false,
        path: "/pricing",

    },
    {
        label: "Platforms",
        hasSubmenu: true,
        path: "/platforms",
        subMenuHeading: ["Detection & Monitoring", "Cloud & Endpoint Security"],
        subMenu: [
            {
                name: "Threat Detection Platform",
                description: "Real-time AI-driven threat detection across networks.",
                icon: FaShieldAlt,
                path: "/platforms/threat-detection",
            },
            {
                name: "Security Information & Event Management (SIEM)",
                description:
                    "Centralized log collection and analysis for rapid threat response.",
                icon: FaNetworkWired,
                path: "/platforms/siem",
            },
            {
                name: "Security Operations Center (SOC)",
                description: "Fully managed SOC services for 24/7 security monitoring.",
                icon: FaUserShield,
                path: "/platforms/soc",
            },
            {
                name: "Cloud Security",
                description: "Comprehensive protection for multi-cloud environments.",
                icon: FaServer,
                path: "/platforms/cloud",
            },
            {
                name: "Endpoint Detection & Response (EDR)",
                description: "Detect and respond to endpoint threats instantly.",
                icon: FaLock,
                path: "/platforms/edr",
            },
            {
                name: "Network Detection & Response (NDR)",
                description: "Behavioral analytics for network threat hunting.",
                icon: FaEye,
                path: "/platforms/ndr",
            },
        ],
        gridCols: 2,
    },
    {
        label: "Solutions",
        hasSubmenu: true,
        path: "/solutions",
        subMenuHeading: ["Advanced Threat Protection", "Compliance & Intelligence"],
        subMenu: [
            {
                name: "Ransomware Protection",
                description: "Prevent and mitigate ransomware attacks effectively.",
                icon: FaLock,
                path: "/solutions/ransomware",
            },
            {
                name: "Insider Threat Detection",
                description: "Identify and stop threats from within your organization.",
                icon: FaUserShield,
                path: "/solutions/insider-threat",
            },
            {
                name: "Cloud Workload Protection",
                description: "Safeguard workloads in AWS, Azure, and GCP.",
                icon: FaServer,
                path: "/solutions/cloud-workload",
            },
            {
                name: "Regulatory Compliance",
                description: "Ensure compliance with GDPR, HIPAA, PCI-DSS.",
                icon: FaTags,
                path: "/solutions/compliance",
            },
            {
                name: "Zero Trust Architecture",
                description: "Enforce strict access controls with a zero-trust model.",
                icon: FaShieldAlt,
                path: "/solutions/zero-trust",
            },
            {
                name: "Threat Intelligence Integration",
                description: "Leverage global intelligence for proactive defense.",
                icon: FaEye,
                path: "/solutions/threat-intel",
            },
        ],
        gridCols: 2,
    },
    {
        label: "About",
        hasSubmenu: false,
        path: "/about",
    },
    {
        label: "Contact",
        hasSubmenu: false,
        path: "/contact",
    }
];

