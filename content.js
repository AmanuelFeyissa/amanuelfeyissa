/*
 * PORTFOLIO CONTENT
 * Update this file whenever you want to change your bio, skills, or projects.
 * The layout automatically updates from these values.
 */
window.portfolioData = {
  person: {
    name: "Amanuel Feyissa Kussa",
    shortName: "Amanuel Feyissa",
    role: "Identity & Access Management Officer",
    location: "Addis Ababa, Ethiopia",
    phone: "",
    linkedin: "https://www.linkedin.com/in/amanuelfeyissa/",
    github: "https://github.com/AmanuelFeyissa",
    availability: "Open to impactful security collaborations"
  },
  intro: "I design secure identity systems, automate access governance, and turn complex security challenges into reliable solutions.",
  summary: "Identity and Access Management professional with 4+ years of experience securing enterprise environments at one of Africa's largest banking institutions. My work spans identity governance, application integration, cybersecurity automation, SQL, and machine learning.",
  stats: [
    { value: "4+", label: "Years in IAM" },
    { value: "40K+", label: "Users supported" },
    { value: "30+", label: "Apps integrated" }
  ],
  strengths: [
    "Identity Governance Administration (IGA)", "Privileged Access Management (PAM)",
    "Zero Trust & Least Privilege", "RBAC & Segregation of Duties",
    "Identity Lifecycle Management", "Access Certification",
    "SAML, OAuth 2.0, OIDC & SCIM", "Cybersecurity Governance"
  ],
  skills: [
    { group: "Identity & Security", mark: "IAM", items: ["EmpowerID", "Active Directory", "Azure AD", "RBAC", "Identity Governance", "MFA", "SAML", "OAuth2", "OIDC", "SCIM"] },
    { group: "Engineering", mark: "</>", items: ["Python", "C#", "PowerShell", "SQL", "REST APIs", "JSON"] },
    { group: "Data Science", mark: "ML", items: ["Pandas", "NumPy", "Scikit-Learn", "Machine Learning", "Data Visualization"] },
    { group: "Infrastructure", mark: "SYS", items: ["Microsoft SQL Server", "IIS", "Windows Server", "LDAP"] }
  ],
  projects: [
    {
      id: "01",
      slug: "fraud-detection",
      category: "DATA SCIENCE",
      title: "Machine Learning-Based Fraud Detection",
      description: "A comparative fraud-detection study using real-world and synthetic digital-banking datasets. Built and evaluated Random Forest, XGBoost, LightGBM, and neural-network models.",
      tags: ["Python", "Scikit-Learn", "SMOTE", "XGBoost"],
      results: "Balanced detection performance across highly imbalanced fraud data.",
      link: "project.html?project=fraud-detection",
      detailIntro: "This project examines how machine learning can identify suspicious banking transactions while managing the class imbalance that makes fraud-detection work challenging. Add your full case study, screenshots, and links here."
    },
    {
      id: "02",
      slug: "iam-deployment",
      category: "IDENTITY SECURITY",
      title: "Commercial Bank IAM Deployment",
      description: "Contributed to an enterprise-wide IAM implementation, integrating more than 30 banking applications and helping align access controls with business and risk requirements.",
      tags: ["EmpowerID", "SAML", "OIDC", "OAuth"],
      results: "30+ application integrations delivered.",
      link: "project.html?project=iam-deployment",
      detailIntro: "This enterprise identity program focused on connecting banking applications to a unified IAM platform while supporting secure, standards-based authentication and authorization. Add your full case study, screenshots, and links here."
    },
    {
      id: "03",
      slug: "iam-automation",
      category: "AUTOMATION",
      title: "IAM Workflow Automation",
      description: "Developed automated IAM workflows using C# and SQL to support reliable, repeatable identity operations and access-management processes.",
      tags: ["C#", "SQL", "IAM", "Automation"],
      results: "Designed for scalable enterprise operations.",
      link: "project.html?project=iam-automation",
      detailIntro: "This automation work streamlined repeatable identity operations through C# and SQL, helping improve consistency and scalability across IAM workflows. Add your full case study, screenshots, and links here."
    }
  ],
  experience: [
    { period: "JAN 2026 — PRESENT", role: "IS Officer | Identity & Access Management", company: "Commercial Bank of Ethiopia", points: ["Develop IAM policies and automate workflows using C# and SQL.", "Design RBAC models that reduce excessive permissions and toxic access combinations.", "Review system integrations using SAML, OIDC, OpenID Connect, and OAuth."] },
    { period: "AUG 2024 — DEC 2025", role: "Project Member | IAM Solution", company: "Commercial Bank of Ethiopia", points: ["Supported integration of 30+ banking applications.", "Led consultations on business processes and risk management.", "Improved security and functionality through cross-functional delivery."] },
    { period: "JAN 2024 — AUG 2024", role: "Identity & Access Management Auditor", company: "Commercial Bank of Ethiopia", points: ["Monitored access activity and investigated suspicious behavior.", "Assessed IAM processes, policies, controls, and compliance."] },
    { period: "DEC 2022 — JAN 2024", role: "Junior Identity & Access Management Officer", company: "Commercial Bank of Ethiopia", points: ["Managed IAM operations across 15+ enterprise systems.", "Supported over 40,000 users and conducted security assessments."] }
  ],
  education: [
    { date: "2023 — 2025", degree: "MSc, Data Science", school: "Emerald International College", note: "Graduated with Distinction, GPA 3.7. Research: machine learning-based fraud detection in digital banking." },
    { date: "2019 — 2022", degree: "BSc, Computer Science", school: "Microlink Information Technology College", note: "Graduated with Great Distinction, GPA 3.8." }
  ],
  certifications: [{ mark: "O", title: "OPSWAT File Security Associate", issuer: "OPSWAT" }, { mark: "AI", title: "AI for Developers", issuer: "Koenig Solutions" }, { mark: "PY", title: "Python Specialization", issuer: "University of Michigan" }, { mark: "AZ", title: "Azure AI Solution", issuer: "Microsoft" }, { mark: "FL", title: "Flutter Course for Programmers", issuer: "Code Studio" }],
  recognition: "Certificate of Recognition from EmpowerID for completing a full-scale IAM deployment at Commercial Bank of Ethiopia (2025)."
};
