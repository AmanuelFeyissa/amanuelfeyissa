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
    availability: "Open to impactful security collaborations",
    languages: ["Amharic", "English"]
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
    "SAML, OAuth 2.0, OIDC & SCIM", "Cybersecurity Governance",
    "Stakeholder Management & Delivery"
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
      description: "A comparative fraud-detection study using two real-world, highly imbalanced digital-banking datasets. Built and evaluated five models — Random Forest, XGBoost, LightGBM, Logistic Regression, and a deep learning baseline.",
      tags: ["Python", "Scikit-Learn", "SMOTE", "XGBoost"],
      results: "Ensemble models consistently outperformed simpler baselines on recall.",
      link: "project.html?project=fraud-detection",
      detailIntro: "How well different machine learning models actually detect fraud once the data is realistically imbalanced — and what it takes to get an imbalanced classifier ready for production, not just accurate on paper.",
      status: "RESEARCH STATUS: COMPLETE // MODELS: 5 COMPARED // DATASETS: 2 REAL-WORLD",
      brief: "Digital banking's growth has made financial fraud both more frequent and more complex, pushing institutions toward strong, data-driven detection instead of static rules. This research measured how different machine learning approaches perform on realistic, heavily imbalanced fraud data, and examined what feature engineering, model selection, and evaluation choices actually matter once accuracy stops being a useful metric.",
      approachType: "steps",
      approach: [
        "Sourced two real-world, highly imbalanced datasets — the JPMorgan Payments Fraud Dataset and the NeurIPS 2022 Bank Account Fraud Dataset — and built standardized preprocessing pipelines with SMOTE resampling to address class imbalance.",
        "Engineered domain-informed behavioral features, including velocity ratios and behavioral flags, to give the models contextual signal that raw transaction fields lack.",
        "Trained and tuned five models — Random Forest, XGBoost, LightGBM, Logistic Regression, and a baseline deep learning architecture — using GridSearchCV, optimizing for F1-score and false positive rate rather than raw accuracy.",
        "Evaluated every model with classification reports, confusion matrices, ROC-AUC, and precision-recall curves to capture fraud-detection performance that accuracy alone hides."
      ],
      outcomeStats: [
        { value: "5", label: "Models Compared" },
        { value: "2", label: "Real-World Datasets" },
        { value: "F1 / FPR", label: "Tuned Over Accuracy" }
      ],
      outcome: "Ensemble methods — Random Forest, XGBoost, and LightGBM — consistently outperformed simpler baselines once paired with the engineered behavioral features. The deep learning baseline, despite strong headline accuracy, showed bias toward the majority class and struggled to recall actual fraud. The richer, feature-engineered NeurIPS dataset outperformed the JPMorgan dataset, which lacked the same contextual depth — reinforcing that feature engineering, not model choice alone, drives real detection performance on imbalanced fraud data."
    },
    {
      id: "02",
      slug: "iam-deployment",
      category: "IDENTITY SECURITY",
      title: "Commercial Bank IAM Deployment",
      description: "Contributed to an enterprise-wide IAM implementation, integrating 30+ banking applications and moving identity governance from manual processes to a centralized, policy-driven platform.",
      tags: ["EmpowerID", "SAML", "OIDC", "OAuth"],
      results: "30+ application integrations, access governance automated.",
      link: "project.html?project=iam-deployment",
      detailIntro: "Moving a large bank's identity governance from scattered manual processes to a centralized, RBAC-driven platform — able to provision access correctly on day one and prove who has access to what at any moment.",
      status: "PROGRAM STATUS: 97% DELIVERED // MODULES: 6 CORE // APPS: 30+",
      brief: "Commercial Bank of Ethiopia's enterprise IAM program needed to replace scattered manual access administration with a centralized, policy-driven platform — one that could provision access correctly from day one, prove who has access to what at any moment, and integrate cleanly with a portfolio of 30+ banking applications, including systems with no modern API surface at all.",
      approachType: "steps",
      approach: [
        "Scoped and configured the core IAM modules — identity lifecycle management, group management, self-service password management, access recertification, and risk-based Segregation of Duties (SoD) controls — around a Role-Based Access Control (RBAC) model.",
        "Integrated 30+ banking applications, building custom connectors — including flat-file-based workarounds — for legacy systems with no native API to connect to.",
        "Automated the joiner/mover/leaver lifecycle end to end, with real-time notifications to line managers and the IAM team on every access-relevant change.",
        "Rolled out Single Sign-On in phases across head office and the branch network, layered with continuous attribute synchronization from the authoritative HR source to keep identity data accurate."
      ],
      outcomeStats: [
        { value: "30+", label: "Applications Integrated" },
        { value: "15 min", label: "Joiner/Mover/Leaver Time" },
        { value: "97%", label: "Execution Delivered" }
      ],
      outcome: "The result was a shift from reactive, manual access administration to continuous, policy-driven governance: new joiners, movers, and leavers are now processed without manual intervention within 15 minutes, and access requests that used to take days clear in about 15 minutes through a self-service portal. Real-time risk analysis flags toxic role combinations before they become policy violations, and continuous attribute synchronization from the authoritative HR source — more than a million attributes kept in sync — corrected well over 150,000 inaccurate identity records across integrated systems."
    },
    {
      id: "03",
      slug: "iam-automation",
      category: "AUTOMATION",
      title: "IAM Workflow Automation",
      description: "Automated IAM workflows using C# and SQL, and applied enterprise-platform tuning experience — load balancing, scaling, and database optimization — to keep a high-traffic SSO system responsive.",
      tags: ["C#", "SQL Server", "HAProxy", "Performance Tuning"],
      results: "Hands-on experience across the full IAM platform stack.",
      link: "project.html?project=iam-automation",
      detailIntro: "The engineering side of running an enterprise IAM platform at scale — automating repeatable access workflows, and applying hands-on performance-tuning experience to keep a high-traffic SSO platform responsive under real production load.",
      status: "FOCUS: RELIABILITY & AUTOMATION // STACK: C#, SQL, HAPROXY",
      brief: "Beyond day-to-day identity operations, this covers the engineering side of running an enterprise IAM platform at scale: automating repeatable access workflows in C# and SQL, and applying hands-on experience tuning a high-traffic enterprise SSO/IGA platform — load balancing, horizontal scaling, database query optimization, and application-tier caching — to keep it responsive under real production load.",
      approachType: "capabilities",
      approach: [
        "Designed and automated identity workflows in C# and SQL to remove repetitive, error-prone manual steps from IAM operations.",
        "Comfortable working across the full stack of an enterprise SSO/IGA platform — load balancer configuration (HAProxy), horizontal scaling of application tiers, SQL Server query and view optimization, and application-level caching strategies.",
        "Practiced at root-cause analysis under production pressure — correlating symptoms across infrastructure, application, and database tiers to find the actual bottleneck rather than the obvious one."
      ],
      outcomeStats: [
        { value: "C# / SQL", label: "Automation Stack" },
        { value: "Multi-Tier", label: "Performance Tuning" },
        { value: "4+ Yrs", label: "Platform Experience" }
      ],
      outcome: "This is less a single shipped feature than an ongoing capability: taking ownership of an enterprise identity platform end to end — automating what should be automated, and diagnosing performance and reliability issues methodically whenever the stack needs attention."
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
