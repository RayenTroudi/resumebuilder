import type { ResumeData } from "./resume-templates";

export interface ResumeExample {
  id: string;
  sector: string;
  role: string;
  atsScore: number;
  template: "classic" | "sidebar" | "minimal";
  accent: string;
  data: ResumeData;
}

/* ──────────────────────────── ENGINEERING ──────────────────────────── */

const softwareEngineer: ResumeExample = {
  id: "eng-software",
  sector: "Engineering",
  role: "Software Engineer",
  atsScore: 96,
  template: "classic",
  accent: "#1d4ed8",
  data: {
    name: "Jordan Mitchell",
    title: "Senior Software Engineer",
    email: "jordan.mitchell@email.com",
    phone: "(415) 882-3301",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/jordanmitchell",
    summary:
      "Results-driven software engineer with 7+ years designing and delivering high-performance distributed systems. Proven track record reducing latency by 40%+ and scaling platforms to 10M+ users. Expert in cloud-native architectures (AWS, GCP) and polyglot programming (Go, Python, TypeScript).",
    experience: [
      {
        company: "Stripe",
        role: "Senior Software Engineer",
        period: "Jan 2021 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Architected event-driven fraud detection pipeline processing 3M+ transactions/day with <20ms p99 latency",
          "Led migration of monolith to microservices, reducing deployment time from 4 hours to 12 minutes",
          "Reduced infrastructure costs by $1.4M/year through autoscaling and right-sizing initiatives",
          "Mentored 6 junior engineers; 4 promoted within 18 months",
        ],
      },
      {
        company: "Cloudflare",
        role: "Software Engineer II",
        period: "Jun 2018 – Jan 2021",
        location: "Austin, TX",
        bullets: [
          "Built edge caching system serving 2.5B+ requests/day across 300 PoPs globally",
          "Implemented zero-downtime deployment pipeline adopted by 12 engineering teams",
          "Contributed core features to Cloudflare Workers runtime (open-source, 1.8K stars)",
        ],
      },
      {
        company: "IBM",
        role: "Software Engineer",
        period: "Jul 2016 – Jun 2018",
        location: "Austin, TX",
        bullets: [
          "Developed RESTful microservices for enterprise data platform serving 80 Fortune 500 clients",
          "Reduced API response time by 35% through query optimization and caching strategies",
        ],
      },
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        school: "University of Texas at Austin",
        period: "2012 – 2016",
        note: "GPA: 3.9 | Dean's List | ACM President",
      },
    ],
    skills: [
      { category: "Languages", items: ["Go", "TypeScript", "Python", "Rust", "SQL"] },
      { category: "Frameworks", items: ["gRPC", "GraphQL", "React", "FastAPI", "Kubernetes"] },
      { category: "Cloud", items: ["AWS", "GCP", "Docker", "Terraform", "Prometheus"] },
      { category: "Databases", items: ["PostgreSQL", "Redis", "Cassandra", "Elasticsearch"] },
    ],
    certifications: [
      "AWS Certified Solutions Architect – Professional",
      "Google Cloud Professional Cloud Architect",
      "Certified Kubernetes Administrator (CKA)",
    ],
  },
};

const civilEngineer: ResumeExample = {
  id: "eng-civil",
  sector: "Engineering",
  role: "Civil Engineer",
  atsScore: 93,
  template: "minimal",
  accent: "#0369a1",
  data: {
    name: "Patricia Okafor",
    title: "Licensed Civil Engineer – Infrastructure",
    email: "p.okafor@civilworks.com",
    phone: "(312) 554-7722",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/patriciaokafor",
    summary:
      "PE-licensed civil engineer with 9 years delivering complex infrastructure projects valued up to $180M. Specializes in urban transportation, bridge rehabilitation, and stormwater management. Proven ability to lead multidisciplinary teams and maintain on-time, on-budget delivery in high-complexity public-sector environments.",
    experience: [
      {
        company: "AECOM",
        role: "Senior Civil Engineer",
        period: "Mar 2019 – Present",
        location: "Chicago, IL",
        bullets: [
          "Led structural design and permitting for $180M I-90/94 bridge rehabilitation project serving 250,000 daily commuters",
          "Managed team of 14 engineers across 3 sub-contractors, completing 3 weeks ahead of IDOT deadline",
          "Designed stormwater retention system reducing runoff volume by 62% for 340-acre commercial development",
          "Authored 90+ technical reports and construction specifications reviewed by FHWA",
        ],
      },
      {
        company: "City of Chicago – CDOT",
        role: "Project Engineer",
        period: "Aug 2015 – Mar 2019",
        location: "Chicago, IL",
        bullets: [
          "Managed $24M annual sidewalk and pavement rehabilitation program across 8 city wards",
          "Coordinated with utility agencies (ComEd, Peoples Gas, CDOT) to eliminate utility conflicts on 47 projects",
          "Prepared and reviewed construction bid documents in compliance with IDOT/FHWA standards",
        ],
      },
    ],
    education: [
      { degree: "M.S. Civil Engineering", school: "University of Illinois Urbana-Champaign", period: "2013 – 2015", note: "Structural Engineering concentration" },
      { degree: "B.S. Civil Engineering", school: "University of Notre Dame", period: "2009 – 2013", note: "Cum Laude" },
    ],
    skills: [
      { category: "Design", items: ["AutoCAD Civil 3D", "MicroStation", "HEC-RAS", "STAAD.Pro", "ArcGIS"] },
      { category: "Standards", items: ["AASHTO", "FHWA", "ACI 318", "AISC", "IDOT"] },
      { category: "PM", items: ["Primavera P6", "MS Project", "Bluebeam Revu", "Procore"] },
    ],
    certifications: [
      "Professional Engineer (PE) – Illinois, Indiana",
      "LEED Green Associate",
      "OSHA 30-Hour Construction Safety",
    ],
  },
};

/* ──────────────────────────── EDUCATION ──────────────────────────── */

const teacher: ResumeExample = {
  id: "edu-teacher",
  sector: "Education",
  role: "Secondary School Teacher",
  atsScore: 94,
  template: "classic",
  accent: "#16a34a",
  data: {
    name: "Melissa Thornton",
    title: "High School Mathematics Teacher | Grades 9–12",
    email: "m.thornton@schoolmail.org",
    phone: "(404) 661-9823",
    location: "Atlanta, GA",
    summary:
      "Dedicated mathematics educator with 10 years of experience driving student achievement in Title I and college-preparatory settings. Skilled in differentiated instruction, data-driven intervention, and curriculum design aligned with Common Core and Georgia Standards of Excellence. Consistently achieved 90%+ pass rates on state standardized assessments.",
    experience: [
      {
        company: "Grady High School – Atlanta Public Schools",
        role: "Lead Mathematics Teacher",
        period: "Aug 2017 – Present",
        location: "Atlanta, GA",
        bullets: [
          "Designed rigorous Algebra II and Pre-Calculus curriculum adopted district-wide across 14 schools",
          "Raised Georgia Milestones EOC proficiency from 62% to 91% over three academic years",
          "Coached 12 student finalists in Georgia MATHCOUNTS Regional Competition (3 state qualifiers)",
          "Mentored 4 first-year teachers through district induction program; all retained beyond year two",
          "Integrated adaptive technology (Khan Academy, Desmos) reducing achievement gap by 18%",
        ],
      },
      {
        company: "Decatur High School",
        role: "Mathematics Teacher",
        period: "Aug 2014 – Jul 2017",
        location: "Decatur, GA",
        bullets: [
          "Taught Algebra I, Geometry, and AP Statistics to classes of 25–32 students",
          "AP Statistics pass rate averaged 74% over 3 years (national avg: 60%)",
          "Served as department STEM lead; coordinated 3 cross-curricular project-based learning units",
        ],
      },
    ],
    education: [
      { degree: "M.Ed. Curriculum & Instruction", school: "Georgia State University", period: "2014 – 2016" },
      { degree: "B.S. Mathematics Education", school: "University of Georgia", period: "2010 – 2014", note: "Summa Cum Laude | Phi Kappa Phi" },
    ],
    skills: [
      { category: "Instruction", items: ["Differentiated Instruction", "Project-Based Learning", "UDL", "Co-Teaching", "RTI"] },
      { category: "Technology", items: ["Google Classroom", "Desmos", "Khan Academy", "IXL", "SchoolNet", "Canvas LMS"] },
      { category: "Assessment", items: ["Formative Assessment", "Data Analysis", "Standards-Based Grading", "IEP Accommodation"] },
    ],
    certifications: [
      "Georgia Teaching Certificate – Mathematics 6–12 (Clear Renewable)",
      "AP Statistics Endorsed Teacher – College Board",
      "Google Certified Educator Level 2",
    ],
  },
};

const universityAdmin: ResumeExample = {
  id: "edu-admin",
  sector: "Education",
  role: "University Administrator",
  atsScore: 91,
  template: "sidebar",
  accent: "#1e40af",
  data: {
    name: "Dr. Raymond Espinoza",
    title: "Dean of Student Affairs",
    email: "r.espinoza@university.edu",
    phone: "(617) 490-3344",
    location: "Boston, MA",
    linkedin: "linkedin.com/in/drreyespinoza",
    summary:
      "Visionary higher-education administrator with 14 years of progressive leadership in student affairs, enrollment management, and institutional equity. Expert in strategic planning, cross-functional team leadership, and program development for diverse campus communities of 15,000+ students.",
    experience: [
      {
        company: "Northeastern University",
        role: "Associate Dean of Student Affairs",
        period: "Jul 2018 – Present",
        location: "Boston, MA",
        bullets: [
          "Oversaw $12M annual budget across 8 student-services departments serving 19,000 undergraduate students",
          "Launched equity-centered retention initiative reducing first-generation student dropout rate by 23%",
          "Negotiated partnerships with 14 community organizations expanding off-campus mental health resources",
          "Led response to Title IX policy revisions; trained 240 faculty and staff within 90 days",
        ],
      },
      {
        company: "Boston College",
        role: "Director of Residential Education",
        period: "Sep 2013 – Jul 2018",
        location: "Chestnut Hill, MA",
        bullets: [
          "Managed team of 28 professional and paraprofessional staff across 14 residential communities",
          "Designed living-learning community framework increasing academic GPA of residents by 0.3 points",
          "Increased residential satisfaction scores from 3.6 to 4.4 out of 5.0 over tenure",
        ],
      },
    ],
    education: [
      { degree: "Ed.D. Educational Leadership", school: "Harvard University", period: "2010 – 2014", note: "Dissertation: Equity Frameworks in Urban HE" },
      { degree: "M.S. Student Affairs Administration", school: "Boston College", period: "2007 – 2009" },
      { degree: "B.A. Psychology", school: "UCLA", period: "2003 – 2007", note: "Magna Cum Laude" },
    ],
    skills: [
      { category: "Leadership", items: ["Strategic Planning", "Budget Management", "Staff Development", "Crisis Management"] },
      { category: "Compliance", items: ["Title IX", "FERPA", "ADA Accommodation", "CLERY Act"] },
      { category: "Tools", items: ["Ellucian Banner", "Maxient", "Slate CRM", "Qualtrics", "Tableau"] },
    ],
    certifications: ["NASPA Certified Student Affairs Practitioner", "Title IX Coordinator Training – ATIXA Level 2"],
    extras: [{ label: "Languages", value: "English (Native), Spanish (Professional Proficiency)" }],
  },
};

/* ──────────────────────────── GOVERNMENT ──────────────────────────── */

const govPolicy: ResumeExample = {
  id: "gov-policy",
  sector: "Government",
  role: "Policy Analyst",
  atsScore: 95,
  template: "classic",
  accent: "#1e3a5f",
  data: {
    name: "Angela Whitfield",
    title: "Senior Policy Analyst – Federal Government",
    email: "a.whitfield@agency.gov",
    phone: "(202) 774-0091",
    location: "Washington, D.C.",
    linkedin: "linkedin.com/in/angelawhitfield",
    summary:
      "Senior policy analyst with 11 years of federal government experience developing and evaluating legislation in healthcare, workforce development, and economic policy. Secret clearance. Proven track record advising senior officials, producing defensible cost-benefit analyses, and managing cross-agency stakeholder coalitions. Expert in OMB Circular A-4 and congressional reporting.",
    experience: [
      {
        company: "U.S. Department of Health & Human Services",
        role: "Senior Policy Analyst GS-14",
        period: "Mar 2018 – Present",
        location: "Washington, D.C.",
        bullets: [
          "Lead analyst for $4.2B Medicaid waiver program; authored regulatory impact analysis reviewed by OMB",
          "Developed policy brief on rural healthcare access adopted as basis for three Senate committee hearings",
          "Coordinated interagency working group of 22 federal agencies to harmonize ACA implementation guidance",
          "Supervised team of 5 GS-11/12 analysts; managed annual performance reviews and individual development plans",
          "Responded to 34 congressional inquiries and prepared 12 formal rulemaking documents (Federal Register)",
        ],
      },
      {
        company: "Congressional Budget Office",
        role: "Budget Analyst",
        period: "Jun 2013 – Mar 2018",
        location: "Washington, D.C.",
        bullets: [
          "Produced 10-year cost estimates for 180+ pieces of legislation under Medicaid and CHIP programs",
          "Testified before Senate Budget Committee on projected costs of healthcare reform proposals",
          "Automated data extraction workflow reducing reporting cycle time from 6 weeks to 9 days",
        ],
      },
    ],
    education: [
      { degree: "M.P.P. Public Policy", school: "Georgetown University", period: "2011 – 2013", note: "Health Policy specialization" },
      { degree: "B.A. Political Science & Economics", school: "University of Virginia", period: "2007 – 2011", note: "Phi Beta Kappa" },
    ],
    skills: [
      { category: "Policy", items: ["Regulatory Analysis", "Cost-Benefit Analysis", "NEPA", "Federal Rulemaking", "OMB A-4"] },
      { category: "Research", items: ["Quantitative Analysis", "SAS", "STATA", "R", "Qualtrics"] },
      { category: "Communication", items: ["Congressional Testimony", "Federal Register Drafting", "Executive Briefings", "Stakeholder Engagement"] },
    ],
    certifications: [
      "Secret Security Clearance (Active)",
      "Project Management Professional (PMP)",
      "Certified Government Financial Manager (CGFM)",
    ],
  },
};

const lawEnforcement: ResumeExample = {
  id: "gov-law-enforcement",
  sector: "Government",
  role: "Law Enforcement Officer",
  atsScore: 92,
  template: "minimal",
  accent: "#374151",
  data: {
    name: "Derek Fontaine",
    title: "Police Sergeant | Patrol & Investigations",
    email: "d.fontaine@pd.gov",
    phone: "(504) 332-8870",
    location: "New Orleans, LA",
    summary:
      "Veteran law enforcement professional with 15 years of progressive service in patrol operations, criminal investigations, and community policing. Decorated sergeant managing 12-officer unit with exemplary Internal Affairs record. Specialized in narcotics interdiction, domestic violence response, and crisis de-escalation. Committed to evidence-based, community-centered policing.",
    experience: [
      {
        company: "New Orleans Police Department",
        role: "Police Sergeant – District 8",
        period: "Jan 2019 – Present",
        location: "New Orleans, LA",
        bullets: [
          "Supervised 12-officer patrol team across 14-square-mile district; maintained 97% deployment availability",
          "Reduced district Part I crime by 18% through strategic patrol deployment and community partnership initiatives",
          "Conducted 240+ performance reviews and led monthly in-service training (de-escalation, body camera policy, implicit bias)",
          "Coordinated joint task force with NOPD Narcotics Division resulting in 34 felony arrests and $2.1M in seized assets",
        ],
      },
      {
        company: "New Orleans Police Department",
        role: "Detective – Crimes Against Persons",
        period: "May 2014 – Jan 2019",
        location: "New Orleans, LA",
        bullets: [
          "Investigated 180+ felony cases including homicide, aggravated assault, and domestic violence; 72% clearance rate",
          "Served as lead detective on 12 homicide cases; 10 resulted in conviction",
          "Trained 3 newly promoted detectives in case management, interviewing, and evidence handling protocols",
        ],
      },
      {
        company: "New Orleans Police Department",
        role: "Patrol Officer",
        period: "Jun 2009 – May 2014",
        location: "New Orleans, LA",
        bullets: [
          "Responded to 12,000+ calls for service; Officer of the Quarter (Q3 2012, Q2 2013)",
          "Completed Field Training Officer (FTO) program; supervised 5 probationary officers",
        ],
      },
    ],
    education: [
      { degree: "B.S. Criminal Justice", school: "Loyola University New Orleans", period: "2005 – 2009" },
      { degree: "Louisiana State Police Academy", school: "Basic Police Training", period: "2009", note: "Class Valedictorian" },
    ],
    skills: [
      { category: "Operations", items: ["Patrol Supervision", "Criminal Investigation", "Crime Scene Management", "Evidence Handling"] },
      { category: "Specialty", items: ["Crisis De-escalation", "Narcotics Interdiction", "Domestic Violence", "Interview & Interrogation"] },
      { category: "Technology", items: ["RMS/CAD Systems", "Axon Body Camera", "AFIS", "NCIC/NLETS", "Excel (crime analysis)"] },
    ],
    certifications: [
      "POST Certified – Louisiana (Advanced)",
      "Crisis Intervention Team (CIT) Specialist",
      "FBI LEEDA – Supervisor Leadership Institute",
      "Active Shooter Response Instructor",
    ],
  },
};

/* ──────────────────────────── HEALTHCARE ──────────────────────────── */

const registeredNurse: ResumeExample = {
  id: "health-nurse",
  sector: "Healthcare",
  role: "Registered Nurse",
  atsScore: 97,
  template: "sidebar",
  accent: "#0891b2",
  data: {
    name: "Simone Beauchamp",
    title: "Registered Nurse – Critical Care (ICU)",
    email: "simone.beauchamp@nurseemail.com",
    phone: "(713) 458-2290",
    location: "Houston, TX",
    linkedin: "linkedin.com/in/simonebeauchamp-rn",
    summary:
      "CCRN-certified ICU nurse with 8 years of experience in high-acuity critical care settings. Expert in hemodynamic monitoring, ventilator management, and rapid response. Recognized for clinical leadership, charge nurse responsibilities, and evidence-based practice implementation reducing HAI rates by 31%.",
    experience: [
      {
        company: "Houston Methodist Hospital",
        role: "ICU Staff Nurse / Charge RN",
        period: "Feb 2019 – Present",
        location: "Houston, TX",
        bullets: [
          "Provide complex critical care for 2–3 patients per shift in 32-bed MICU/SICU; specialize in sepsis, ARDS, post-cardiac surgery",
          "Serve as charge nurse 8 shifts/month: coordinate 18-nurse team, manage staffing, escalate safety concerns",
          "Led unit-based CLABSI prevention initiative reducing catheter-associated infections by 31% over 24 months",
          "Precept 11 new graduate RNs through 12-week hospital onboarding program; 10 passed NCLEX first attempt",
        ],
      },
      {
        company: "St. Luke's Medical Center",
        role: "RN – Progressive Care Unit",
        period: "Jul 2016 – Feb 2019",
        location: "Houston, TX",
        bullets: [
          "Managed 4–5 patients per shift in 28-bed step-down unit post-cardiac and thoracic surgery",
          "Achieved DAISY Award for Extraordinary Nurses (2018) for crisis intervention during code situation",
          "Trained as BLS/ACLS instructor; certified 34 staff members annually",
        ],
      },
    ],
    education: [
      { degree: "BSN – Bachelor of Science in Nursing", school: "University of Texas Health Science Center", period: "2012 – 2016", note: "Summa Cum Laude | Sigma Theta Tau Honor Society" },
    ],
    skills: [
      { category: "Clinical", items: ["Hemodynamic Monitoring", "Mechanical Ventilation", "CRRT", "Vasopressors", "TPN"] },
      { category: "Procedures", items: ["Arterial Line", "Central Line Care", "Chest Tube", "Wound Vac", "12-Lead ECG Interpretation"] },
      { category: "Systems", items: ["Epic EMR", "Cerner", "Meditech", "Pyxis MedStation", "Vocera"] },
    ],
    certifications: [
      "CCRN – Critical Care RN (AACN)",
      "RN License – Texas (Active, No Restrictions)",
      "ACLS Instructor (AHA)",
      "BLS Instructor (AHA)",
      "NIH Stroke Scale Certified",
    ],
  },
};

/* ──────────────────────────── LEGAL ──────────────────────────── */

const attorney: ResumeExample = {
  id: "legal-attorney",
  sector: "Legal",
  role: "Corporate Attorney",
  atsScore: 94,
  template: "classic",
  accent: "#1c1917",
  data: {
    name: "Victoria Harrington",
    title: "Associate Attorney – Corporate & M&A",
    email: "v.harrington@lawfirm.com",
    phone: "(212) 903-5588",
    location: "New York, NY",
    linkedin: "linkedin.com/in/victoriaharrington-esq",
    summary:
      "Associate attorney at Am Law 50 firm with 6 years of experience in mergers & acquisitions, private equity, and securities law. Advised on 40+ M&A transactions with aggregate deal value exceeding $14B. Expert in purchase agreement negotiation, due diligence management, and SEC compliance. New York State Bar (2018, active).",
    experience: [
      {
        company: "Sullivan & Cromwell LLP",
        role: "Associate – Corporate / M&A Group",
        period: "Sep 2020 – Present",
        location: "New York, NY",
        bullets: [
          "Advised buy-side client on $3.4B acquisition of healthcare technology company; drafted and negotiated all material transaction documents",
          "Led 12-member cross-border due diligence team for European target; identified 8 material contractual risks resulting in $220M purchase price adjustment",
          "Managed SEC disclosure obligations for public company clients across 4 Form 10-K and 6 proxy statement filings",
          "Supervised and mentored 3 first- and second-year associates on deal teams",
        ],
      },
      {
        company: "Davis Polk & Wardwell LLP",
        role: "Associate – Capital Markets",
        period: "Sep 2018 – Aug 2020",
        location: "New York, NY",
        bullets: [
          "Supported underwriters and issuers on 9 equity and debt capital markets transactions totaling $8.7B",
          "Drafted prospectuses, registration statements, and comfort letters under Securities Act of 1933",
          "Coordinated due diligence sessions with 40+ banks and counsel across time zones",
        ],
      },
    ],
    education: [
      { degree: "J.D.", school: "Columbia Law School", period: "2015 – 2018", note: "Articles Editor, Columbia Law Review | Harlan Fiske Stone Scholar" },
      { degree: "B.A. Political Science", school: "Princeton University", period: "2011 – 2015", note: "Magna Cum Laude | Phi Beta Kappa" },
    ],
    skills: [
      { category: "Practice", items: ["M&A", "Private Equity", "Securities Law", "Corporate Governance", "Contract Negotiation"] },
      { category: "Regulatory", items: ["SEC", "HSR Act", "FCPA", "Sarbanes-Oxley", "CFIUS"] },
      { category: "Tools", items: ["Ansarada (VDR)", "Kira AI (Due Diligence)", "Litera Compare", "CapLinked", "Bloomberg Law"] },
    ],
    certifications: [
      "New York State Bar (2018, Active)",
      "District of Columbia Bar (2021, Active)",
    ],
  },
};

const paralegal: ResumeExample = {
  id: "legal-paralegal",
  sector: "Legal",
  role: "Paralegal",
  atsScore: 91,
  template: "minimal",
  accent: "#44403c",
  data: {
    name: "Marcus Webb",
    title: "Senior Paralegal – Litigation & eDiscovery",
    email: "marcus.webb@legalservices.com",
    phone: "(312) 799-4450",
    location: "Chicago, IL",
    summary:
      "ACP-certified paralegal with 9 years of litigation support experience across complex commercial disputes, class actions, and employment law. Expert in eDiscovery management (Relativity), trial preparation, and multi-district litigation coordination. Managed document review projects exceeding 2.4M pages.",
    experience: [
      {
        company: "Jenner & Block LLP",
        role: "Senior Paralegal – Commercial Litigation",
        period: "Apr 2018 – Present",
        location: "Chicago, IL",
        bullets: [
          "Managed end-to-end eDiscovery workflow for $340M breach of contract MDL, overseeing 2.4M document review in Relativity",
          "Coordinated trial team logistics for 6-week federal jury trial; maintained 800-exhibit trial database",
          "Drafted and filed 120+ federal court pleadings, motions, and discovery responses in N.D. Ill. and 7th Circuit",
          "Supervised team of 4 contract reviewers; authored review protocol and quality control procedures",
        ],
      },
      {
        company: "Littler Mendelson P.C.",
        role: "Paralegal – Employment Law",
        period: "Jun 2015 – Apr 2018",
        location: "Chicago, IL",
        bullets: [
          "Supported 12 attorneys in employment discrimination, wage-and-hour, and non-compete matters",
          "Coordinated EEOC charge responses and prepared NLRB position statements",
          "Organized 40+ depositions including scheduling, preparation of outlines, and exhibit binders",
        ],
      },
    ],
    education: [
      { degree: "B.A. Pre-Law & Business Administration", school: "DePaul University", period: "2011 – 2015" },
      { degree: "Paralegal Certificate", school: "Northwestern University School of Professional Studies", period: "2015", note: "ABA-approved program" },
    ],
    skills: [
      { category: "Legal", items: ["Litigation Support", "eDiscovery", "Legal Research (Westlaw, LexisNexis)", "Trial Preparation"] },
      { category: "Technology", items: ["Relativity", "PACER/ECF", "Concordance", "iManage", "CaseMap", "Trial Director"] },
      { category: "Procedures", items: ["FRCP", "Federal Court Filing", "Subpoena Management", "Deposition Coordination"] },
    ],
    certifications: [
      "Advanced Certified Paralegal (ACP) – NALA",
      "Certified Paralegal (CP) – NALA",
      "Relativity Certified Administrator (RCA)",
    ],
  },
};

/* ──────────────────────────── RETAIL ──────────────────────────── */

const retailManager: ResumeExample = {
  id: "retail-manager",
  sector: "Retail",
  role: "Store Manager",
  atsScore: 90,
  template: "classic",
  accent: "#b45309",
  data: {
    name: "Danielle Kowalski",
    title: "Retail Store Manager | P&L Ownership",
    email: "d.kowalski@retailpros.com",
    phone: "(773) 341-0820",
    location: "Chicago, IL",
    summary:
      "Dynamic retail leader with 12 years managing high-volume flagship stores ($8M–$22M annual revenue). Expertise in team development, inventory management, and customer experience transformation. Consistently outperformed district comp sales targets by 12–28%. Reduced shrinkage by 41% and grew NPS from 62 to 89 at most recent location.",
    experience: [
      {
        company: "Nike Inc.",
        role: "Store Manager – Nike Chicago Flagship",
        period: "Mar 2019 – Present",
        location: "Chicago, IL",
        bullets: [
          "Lead 68-associate store generating $22M+ annual revenue; full P&L accountability including payroll, shrink, and COGS",
          "Outperformed district comp sales by 28% in FY2023; recognized as District Store of the Year",
          "Reduced inventory shrinkage from 2.1% to 1.2% through cycle count program and LP partnership",
          "Grew NPS score from 72 to 89 by implementing personalized service model across all athlete interactions",
          "Developed 3 assistant managers promoted to store manager positions within 18 months",
        ],
      },
      {
        company: "Nordstrom",
        role: "Department Manager – Men's Apparel",
        period: "Jul 2015 – Mar 2019",
        location: "Schaumburg, IL",
        bullets: [
          "Managed $8M Men's department with team of 22 sales associates; achieved plan 3 of 4 years",
          "Launched personal styling initiative generating $420K in incremental revenue in first year",
          "Led store-wide inventory reconciliation project reducing audit discrepancies by 55%",
        ],
      },
      {
        company: "Gap Inc.",
        role: "Assistant Store Manager",
        period: "Jun 2012 – Jul 2015",
        location: "Chicago, IL",
        bullets: [
          "Supported GM in managing $11M store; supervised opening and closing operations",
          "Trained 30+ seasonal associates on product knowledge, POS, and customer service standards",
        ],
      },
    ],
    education: [
      { degree: "B.S. Business Administration – Marketing", school: "DePaul University", period: "2008 – 2012" },
    ],
    skills: [
      { category: "Operations", items: ["P&L Management", "Inventory Control", "Shrink Reduction", "Scheduling", "Visual Merchandising"] },
      { category: "People", items: ["Team Leadership", "Talent Development", "Performance Management", "Recruiting", "Coaching"] },
      { category: "Systems", items: ["SAP Retail", "Oracle POS", "NetSuite", "Shopify", "Salesforce CRM"] },
    ],
    certifications: [
      "Retail Management Certificate – NRF RISE Up",
      "ServSafe Food Manager (where applicable)",
    ],
  },
};

const buyingMerchandiser: ResumeExample = {
  id: "retail-buyer",
  sector: "Retail",
  role: "Merchandise Buyer",
  atsScore: 89,
  template: "sidebar",
  accent: "#7c3aed",
  data: {
    name: "Naomi Ashford",
    title: "Senior Buyer – Women's Apparel",
    email: "naomi.ashford@fashionco.com",
    phone: "(646) 208-7711",
    location: "New York, NY",
    linkedin: "linkedin.com/in/naomiashford",
    summary:
      "Senior fashion buyer with 8 years managing $40M+ open-to-buy across women's ready-to-wear and accessories. Data-driven approach combining trend forecasting, vendor negotiation, and consumer analytics. Delivered 11 consecutive seasons of on-plan gross margin. Built private-label program from zero to $7.4M in 2 years.",
    experience: [
      {
        company: "Bloomingdale's",
        role: "Senior Buyer – Contemporary Women's RTW",
        period: "Feb 2020 – Present",
        location: "New York, NY",
        bullets: [
          "Manage $42M OTB across 80+ domestic and international vendor accounts; full IMU and gross margin accountability",
          "Grew contemporary division by 19% YoY through strategic brand development and curated capsule launches",
          "Negotiated vendor cost improvements averaging 8.2%, generating $3.4M in margin improvement",
          "Launched exclusive collaboration with 3 emerging designers; generated $1.8M first-season sell-through at 74%",
        ],
      },
      {
        company: "Macy's",
        role: "Associate Buyer – Accessories",
        period: "Aug 2016 – Feb 2020",
        location: "New York, NY",
        bullets: [
          "Managed $18M handbag and accessories assortment across 300+ doors nationally",
          "Exceeded gross margin plan by 6.2 points through strategic exit of underperforming SKUs",
          "Built private-label accessories program from concept to $7.4M first-year sales",
        ],
      },
    ],
    education: [
      { degree: "B.S. Fashion Merchandising", school: "Fashion Institute of Technology (FIT)", period: "2012 – 2016", note: "Dean's List | Fashion Business Management minor" },
    ],
    skills: [
      { category: "Buying", items: ["Open-to-Buy Planning", "Assortment Planning", "Vendor Negotiation", "Trend Forecasting", "Private Label"] },
      { category: "Analytics", items: ["Sell-Through Analysis", "Gross Margin Planning", "Size/SKU Optimization", "Markdown Strategy"] },
      { category: "Systems", items: ["SAP MM", "Aptos", "MicroStrategy", "Blue Yonder", "JOOR", "Excel (Advanced)"] },
    ],
  },
};

/* ──────────────────────────── MAINTENANCE & REPAIR ──────────────────────────── */

const maintenanceTech: ResumeExample = {
  id: "maint-tech",
  sector: "Maintenance & Repair",
  role: "Maintenance Technician",
  atsScore: 92,
  template: "minimal",
  accent: "#c2410c",
  data: {
    name: "Roberto Garza",
    title: "Senior Maintenance Technician – Industrial / HVAC",
    email: "r.garza@techpros.com",
    phone: "(210) 567-3300",
    location: "San Antonio, TX",
    summary:
      "EPA 608 Universal-certified maintenance technician with 13 years of industrial, HVAC, and facilities maintenance experience in manufacturing and commercial environments. Expert in preventive maintenance programs, PLC troubleshooting, and HVAC/R systems. Reduced unplanned equipment downtime by 44% at most recent facility.",
    experience: [
      {
        company: "Toyota Manufacturing – San Antonio",
        role: "Senior Maintenance Technician",
        period: "Apr 2017 – Present",
        location: "San Antonio, TX",
        bullets: [
          "Maintain 400+ pieces of manufacturing equipment including robotic welders, conveyors, and pneumatic systems in a 2.1M sq ft facility",
          "Reduced unplanned downtime by 44% through implementation of predictive maintenance (vibration analysis, thermal imaging) program",
          "Troubleshoot and repair Allen-Bradley and Siemens PLCs using ladder logic; resolved 12 production-critical failures in under 2 hours",
          "Mentor 4 apprentice technicians on electrical, mechanical, and hydraulic systems; all 4 passed NIMS certification",
          "Manage parts inventory ($280K annual budget); reduced stockout events by 60% through Kanban system implementation",
        ],
      },
      {
        company: "Rackspace Technology",
        role: "Facilities Maintenance Technician",
        period: "Jan 2013 – Apr 2017",
        location: "San Antonio, TX",
        bullets: [
          "Performed preventive and corrective maintenance on CRAC/CRAH units, UPS systems, and generators in Tier III data center",
          "Responded to 400+ work orders annually; maintained 99.98% HVAC uptime across 650,000 sq ft facility",
          "Led quarterly PM inspections for 120-ton Trane and Carrier chiller systems",
        ],
      },
    ],
    education: [
      { degree: "A.A.S. Industrial Technology", school: "San Antonio College", period: "2009 – 2011" },
      { degree: "Technical Certificate – HVAC/R", school: "Lincoln Tech", period: "2008 – 2009" },
    ],
    skills: [
      { category: "Systems", items: ["HVAC/R", "Electrical (480V 3-phase)", "Hydraulics", "Pneumatics", "Plumbing", "PLC Programming"] },
      { category: "Tools", items: ["Multimeter", "Thermal Imaging Camera", "Vibration Analyzer", "Oscilloscope", "Pipe Threading"] },
      { category: "Software", items: ["SAP PM (CMMS)", "Maximo", "AutoCAD (basic)", "Allen-Bradley RSLogix 5000", "MS Excel"] },
    ],
    certifications: [
      "EPA 608 Universal Refrigerant Certification",
      "OSHA 30-Hour General Industry",
      "NIMS Machining Level I (Measurement, Materials & Safety)",
      "Forklift Operator Certified",
      "NFPA 70E Electrical Safety Qualified",
    ],
  },
};

const hvacTech: ResumeExample = {
  id: "maint-hvac",
  sector: "Maintenance & Repair",
  role: "HVAC Technician",
  atsScore: 93,
  template: "classic",
  accent: "#1e40af",
  data: {
    name: "Brian Calloway",
    title: "Commercial HVAC Service Technician",
    email: "brian.calloway@hvacpro.com",
    phone: "(602) 448-1127",
    location: "Phoenix, AZ",
    summary:
      "Journeyman-level HVAC/R technician with 10 years of commercial and industrial service experience. Specializes in rooftop unit diagnostics, chiller maintenance, and BAS integration. EPA 608 Universal certified. Consistent record of first-visit resolution rate above 88% and zero EPA violations across 2,400+ service calls.",
    experience: [
      {
        company: "Carrier Enterprise",
        role: "Commercial HVAC Service Technician",
        period: "May 2018 – Present",
        location: "Phoenix, AZ",
        bullets: [
          "Service and repair commercial HVAC systems (5–400 tons) for 90+ contracted accounts including hospitals, data centers, and schools",
          "Maintain 88%+ first-visit resolution rate across 280+ annual service calls",
          "Commission and start up Carrier and Trane rooftop units (RTUs) on new construction projects up to $2.4M",
          "Diagnose and repair building automation systems (BAS) using Niagara Framework and Honeywell WebCT",
          "Zero EPA refrigerant handling violations across 10-year career; certified recovery, reclaim, and recharge of R-410A, R-22, R-32",
        ],
      },
      {
        company: "Johnson Controls",
        role: "HVAC Controls Technician",
        period: "Aug 2014 – May 2018",
        location: "Tempe, AZ",
        bullets: [
          "Installed, calibrated, and maintained DDC controls for chiller plants and AHUs in commercial high-rises",
          "Programmed Metasys and JCI Facility Explorer BAS controllers for 14 commercial sites",
          "Responded to after-hours emergency service calls; avg response time under 45 minutes for priority clients",
        ],
      },
    ],
    education: [
      { degree: "A.A.S. Heating, Ventilation & Air Conditioning Technology", school: "Mesa Community College", period: "2012 – 2014" },
      { degree: "HVAC/R Certificate", school: "Universal Technical Institute", period: "2011 – 2012" },
    ],
    skills: [
      { category: "Systems", items: ["Commercial Rooftop Units", "Centrifugal & Scroll Chillers", "AHU/MAU", "VRF/Mini-Split", "Boilers"] },
      { category: "Controls", items: ["Niagara Framework", "Honeywell WebCT", "Metasys", "DDC Programming", "BACnet/Modbus"] },
      { category: "Tools", items: ["Manifold Gauge Sets", "Vacuum Pump", "Refrigerant Scale", "Digital Multimeter", "Combustion Analyzer"] },
    ],
    certifications: [
      "EPA 608 Universal (Active)",
      "OSHA 10-Hour Construction",
      "NATE Core & Air Conditioning Specialty",
      "Arizona Journeyman License (ROC #298445)",
    ],
  },
};

/* ──────────────────────────── FINANCE ──────────────────────────── */

const financialAnalyst: ResumeExample = {
  id: "fin-analyst",
  sector: "Finance",
  role: "Financial Analyst",
  atsScore: 95,
  template: "classic",
  accent: "#14532d",
  data: {
    name: "Priya Ramachandran",
    title: "Senior Financial Analyst – FP&A",
    email: "priya.r@financemail.com",
    phone: "(917) 324-6610",
    location: "New York, NY",
    linkedin: "linkedin.com/in/priyaramachandran-cfa",
    summary:
      "CFA charterholder and FP&A professional with 8 years driving strategic financial planning, budgeting, and M&A analysis for Fortune 500 companies. Expert in three-statement financial modeling, scenario analysis, and executive reporting. Identified $34M in cost savings and supported acquisitions totaling $2.1B.",
    experience: [
      {
        company: "JPMorgan Chase",
        role: "Senior Financial Analyst – Corporate FP&A",
        period: "Jun 2019 – Present",
        location: "New York, NY",
        bullets: [
          "Own $1.4B P&L model for Investment Banking division; produce monthly variance and quarterly forecast packages for CFO",
          "Built automated financial reporting suite in Python + Excel VBA, reducing monthly close from 5 days to 18 hours",
          "Led scenario analysis for 3 strategic acquisitions totaling $2.1B; presented recommendations to Board Audit Committee",
          "Identified $34M in operational cost savings through benchmarking and zero-based budgeting initiative",
        ],
      },
      {
        company: "Deloitte",
        role: "Financial Analyst – Transaction Advisory Services",
        period: "Aug 2016 – Jun 2019",
        location: "New York, NY",
        bullets: [
          "Built three-statement LBO, DCF, and merger models for 22 M&A engagements ($50M–$800M deal size)",
          "Performed quality of earnings analysis and working capital peg negotiations for PE-backed acquisitions",
          "Managed analyst team of 3 on concurrent engagements; delivered 100% on-time per project milestones",
        ],
      },
    ],
    education: [
      { degree: "M.S. Finance", school: "NYU Stern School of Business", period: "2014 – 2016", note: "Beta Gamma Sigma | Dean's List" },
      { degree: "B.S. Economics", school: "University of Michigan", period: "2010 – 2014", note: "Summa Cum Laude | Phi Beta Kappa" },
    ],
    skills: [
      { category: "Modeling", items: ["DCF", "LBO", "M&A Merger Models", "Three-Statement Modeling", "Scenario Analysis"] },
      { category: "Tools", items: ["Excel (Advanced VBA)", "Python (Pandas, NumPy)", "Tableau", "Power BI", "SAP BPC", "Hyperion"] },
      { category: "Finance", items: ["FP&A", "Budgeting & Forecasting", "Variance Analysis", "Capital Allocation", "CapEx Planning"] },
    ],
    certifications: [
      "CFA Charterholder (Level III, 2020)",
      "Bloomberg Market Concepts (BMC)",
    ],
  },
};

/* ──────────────────────────── MARKETING ──────────────────────────── */

const marketingManager: ResumeExample = {
  id: "mkt-manager",
  sector: "Marketing",
  role: "Marketing Manager",
  atsScore: 92,
  template: "sidebar",
  accent: "#db2777",
  data: {
    name: "Leila Nasser",
    title: "Senior Marketing Manager – Growth & Demand Gen",
    email: "leila.nasser@marketingpro.com",
    phone: "(415) 790-3380",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/leilanasser",
    summary:
      "Performance-driven marketing leader with 9 years scaling B2B SaaS demand generation from seed to Series C. Built and managed paid + organic programs generating $48M in attributed pipeline. Expert in multi-channel ABM, marketing analytics, and cross-functional GTM strategy. Increased qualified pipeline by 3× in 18 months at most recent role.",
    experience: [
      {
        company: "Rippling",
        role: "Senior Marketing Manager – Demand Generation",
        period: "Jan 2021 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Own $4.2M annual demand gen budget across SEM, content, events, and ABM channels; generated $48M in attributed pipeline",
          "Built ABM program targeting 500 enterprise accounts; increased Stage 3 conversion rate from 12% to 31%",
          "Scaled SEO from 18K to 220K monthly organic sessions; 140+ landing pages indexed in top-3 SERP positions",
          "Led cross-functional team of 8 (content, design, ops, SDRs) to launch 3 integrated campaign sprints per quarter",
        ],
      },
      {
        company: "Gusto",
        role: "Marketing Manager – Acquisition",
        period: "Mar 2018 – Jan 2021",
        location: "San Francisco, CA",
        bullets: [
          "Managed $2.1M Google Ads and Facebook Ads budget; reduced CPA by 38% while growing lead volume 2.4×",
          "Launched referral program generating 1,400+ new customers per month at $0 incremental CAC",
          "Built marketing attribution model (multi-touch) adopted as company standard reporting framework",
        ],
      },
    ],
    education: [
      { degree: "B.S. Marketing & Data Analytics", school: "UC Berkeley – Haas School of Business", period: "2010 – 2014", note: "Graduated with Distinction" },
    ],
    skills: [
      { category: "Channels", items: ["Paid Search (SEM)", "Paid Social", "Content Marketing", "SEO", "Email", "Events/Webinars", "ABM"] },
      { category: "Analytics", items: ["Google Analytics 4", "Looker", "Tableau", "Salesforce", "Marketo", "HubSpot"] },
      { category: "Strategy", items: ["Demand Generation", "GTM Planning", "Funnel Optimization", "Budget Management", "A/B Testing"] },
    ],
    certifications: [
      "Google Ads Certified – Search, Display, Video",
      "HubSpot Marketing Certification",
      "Salesforce Marketing Cloud Associate",
    ],
  },
};

/* ──────────────────────────── INFORMATION TECHNOLOGY ──────────────────────────── */

const itSupportSpecialist: ResumeExample = {
  id: "it-support",
  sector: "Information Technology",
  role: "IT Support Specialist",
  atsScore: 91,
  template: "minimal",
  accent: "#0369a1",
  data: {
    name: "Tyler Nguyen",
    title: "IT Support Specialist / System Administrator",
    email: "tyler.nguyen@itsupport.com",
    phone: "(503) 227-0045",
    location: "Portland, OR",
    summary:
      "CompTIA-certified IT specialist with 7 years providing Tier 1–3 desktop support, Active Directory administration, and network infrastructure maintenance for organizations of 500–3,000 employees. Resolved 96%+ of tickets within SLA; implemented MDM rollout for 1,200 endpoints reducing field incidents by 34%.",
    experience: [
      {
        company: "Intel Corporation",
        role: "IT Systems Administrator",
        period: "Sep 2019 – Present",
        location: "Hillsboro, OR",
        bullets: [
          "Administer Active Directory environment for 2,800 users including GPO, OU structure, and group membership management",
          "Deploy and manage 1,200 endpoints via Microsoft Intune MDM; reduced field incidents by 34% within 12 months",
          "Maintain VMware vSphere cluster (32 VMs) and backup environment (Veeam); achieved 99.96% VM uptime",
          "Lead quarterly security patching cycles (Windows, macOS, Linux) in coordination with InfoSec team; zero critical patch SLA breaches",
          "Resolved 2,400+ tickets annually with 96.2% within-SLA close rate and 4.8/5.0 CSAT score",
        ],
      },
      {
        company: "Providence Health & Services",
        role: "Desktop Support Technician II",
        period: "Jul 2017 – Sep 2019",
        location: "Portland, OR",
        bullets: [
          "Provided HIPAA-compliant Tier 2 technical support across 4 hospital campuses and 18 clinics",
          "Led imaging and deployment of 340 workstations for Epic EMR rollout ahead of 3-week schedule",
          "Configured and maintained Cisco VoIP phones and Polycom conference systems for clinical staff",
        ],
      },
    ],
    education: [
      { degree: "B.S. Information Technology", school: "Portland State University", period: "2013 – 2017" },
    ],
    skills: [
      { category: "Systems", items: ["Windows Server 2019/2022", "Active Directory", "Azure AD", "VMware vSphere", "macOS", "Ubuntu"] },
      { category: "Networking", items: ["TCP/IP", "DNS/DHCP", "VLANs", "Cisco IOS", "VPN (Palo Alto GlobalProtect)", "Wi-Fi 6"] },
      { category: "Tools", items: ["Microsoft Intune", "SCCM", "Veeam", "ServiceNow", "Splunk", "Jira", "Wireshark"] },
    ],
    certifications: [
      "CompTIA A+ (Active)",
      "CompTIA Network+ (Active)",
      "CompTIA Security+ (Active)",
      "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      "ITIL 4 Foundation",
    ],
  },
};

/* ──────────────────────────── CONSTRUCTION ──────────────────────────── */

const constructionPM: ResumeExample = {
  id: "con-pm",
  sector: "Construction",
  role: "Construction Project Manager",
  atsScore: 93,
  template: "classic",
  accent: "#92400e",
  data: {
    name: "Kevin O'Brien",
    title: "Construction Project Manager – Commercial & Residential",
    email: "kevin.obrien@constructionpm.com",
    phone: "(617) 442-3317",
    location: "Boston, MA",
    summary:
      "PMP-certified construction project manager with 14 years delivering commercial, mixed-use, and residential projects from $2M to $145M. Expert in design-build, GMP contracts, and subcontractor management. Delivered 12 of last 14 projects on time and under budget, with zero OSHA recordable incidents over 4 years.",
    experience: [
      {
        company: "Suffolk Construction",
        role: "Senior Project Manager",
        period: "Jan 2018 – Present",
        location: "Boston, MA",
        bullets: [
          "Directed $145M mixed-use development (400 residential units + 80,000 sq ft retail) from foundation through CO; delivered 3 weeks early, 1.8% under budget",
          "Managed team of 8 project engineers and 34 subcontractors across MEP, structural, and civil disciplines",
          "Implemented Procore-based RFI/submittal workflow reducing document turnaround from 11 days to 4.2 days",
          "Maintained zero OSHA recordable incidents across 780,000 cumulative labor hours over 4-year tenure",
          "Negotiated $2.4M in value engineering savings without reducing design intent or owner program requirements",
        ],
      },
      {
        company: "Gilbane Building Company",
        role: "Project Manager – Higher Education",
        period: "Mar 2014 – Jan 2018",
        location: "Providence, RI",
        bullets: [
          "Managed $42M university science center; coordinated with Facilities and 6 design firms from SD through punch list",
          "Led commissioning of complex MEP/lab systems for Biosafety Level 2 research environment",
          "Achieved LEED Silver certification; coordinated documentation with Sustainability consultant",
        ],
      },
    ],
    education: [
      { degree: "B.S. Construction Management", school: "Wentworth Institute of Technology", period: "2006 – 2010" },
    ],
    skills: [
      { category: "PM", items: ["Design-Build", "GMP Contracts", "CPM Scheduling", "Change Order Management", "Cost Control"] },
      { category: "Technical", items: ["MEP Coordination", "BIM/Revit (review)", "Structural Reading", "Site Safety (OSHA 30)"] },
      { category: "Software", items: ["Procore", "Primavera P6", "MS Project", "Bluebeam Revu", "Sage 300", "Autodesk Docs"] },
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "OSHA 30-Hour Construction Safety",
      "LEED AP Building Design + Construction",
      "First Aid / CPR / AED",
    ],
  },
};

/* ──────────────────────────── SOCIAL SERVICES ──────────────────────────── */

const socialWorker: ResumeExample = {
  id: "social-worker",
  sector: "Social Services",
  role: "Licensed Social Worker",
  atsScore: 90,
  template: "sidebar",
  accent: "#065f46",
  data: {
    name: "Aaliyah Robinson",
    title: "Licensed Clinical Social Worker (LCSW)",
    email: "a.robinson@socialservices.org",
    phone: "(213) 508-4433",
    location: "Los Angeles, CA",
    linkedin: "linkedin.com/in/aaliyahrobinson-lcsw",
    summary:
      "LCSW with 9 years of experience in community mental health, trauma-informed care, and child welfare. Specialized in working with at-risk youth, survivors of domestic violence, and adults experiencing homelessness. Managed caseloads of 40+ clients and supervised 6 MSW interns. Bilingual (English/Spanish).",
    experience: [
      {
        company: "DCFS – Los Angeles County",
        role: "Senior Children's Social Worker",
        period: "Jun 2018 – Present",
        location: "Los Angeles, CA",
        bullets: [
          "Carry active caseload of 42 families; conduct child welfare assessments, safety planning, and court-ordered family reunification services",
          "Testify in Juvenile Dependency Court 6–8 times monthly; maintain 100% on-time filing for court-ordered reports",
          "Supervised and mentored 6 MSW graduate interns from USC and UCLA; all received 'Exemplary' field evaluations",
          "Collaborated with multidisciplinary team (medical, mental health, law enforcement) on 12 complex trauma cases",
        ],
      },
      {
        company: "Covenant House California",
        role: "Case Manager – Youth Experiencing Homelessness",
        period: "Sep 2015 – Jun 2018",
        location: "Los Angeles, CA",
        bullets: [
          "Provided trauma-informed case management to 28 homeless youth aged 18–24; 72% housed within 6 months",
          "Coordinated wraparound services including mental health referrals, job training, and benefits enrollment",
          "Co-facilitated weekly CBT skills group for 12 clients experiencing PTSD and substance use disorders",
        ],
      },
    ],
    education: [
      { degree: "M.S.W. – Clinical Practice", school: "University of Southern California (USC)", period: "2013 – 2015", note: "Child and Family Specialization" },
      { degree: "B.A. Sociology", school: "Howard University", period: "2009 – 2013", note: "Cum Laude" },
    ],
    skills: [
      { category: "Clinical", items: ["Trauma-Informed Care", "CBT", "Motivational Interviewing", "Crisis Intervention", "Family Systems Therapy"] },
      { category: "Regulatory", items: ["Mandated Reporter", "HIPAA", "DCFS Policy", "Title 31 WIC", "Juvenile Dependency Court"] },
      { category: "Systems", items: ["CWS/CMS", "Apricot (Bonterra)", "Avatar EHR", "EHRS", "CalAIM Navigation"] },
    ],
    certifications: [
      "Licensed Clinical Social Worker – California (LCSW #71234, Active)",
      "Trauma-Focused CBT (TF-CBT) Certified",
      "QPR Suicide Prevention Gatekeeper",
    ],
    extras: [{ label: "Languages", value: "English (Native), Spanish (Professional Working Proficiency)" }],
  },
};

/* ──────────────────────────── ACCOUNTING ──────────────────────────── */

const accountant: ResumeExample = {
  id: "acc-cpa",
  sector: "Accounting",
  role: "CPA / Senior Accountant",
  atsScore: 94,
  template: "minimal",
  accent: "#1e3a5f",
  data: {
    name: "Nathan Osei",
    title: "Certified Public Accountant – Corporate Accounting",
    email: "n.osei@accountingpros.com",
    phone: "(312) 674-8900",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/nathanosei-cpa",
    summary:
      "CPA with Big 4 background and 9 years in corporate accounting and external audit. Expert in US GAAP, ASC 842 lease accounting, and SOX 404 compliance. Managed audits of $500M–$2.4B revenue companies. Reduced financial close cycle from 12 days to 6 days through process redesign and automation.",
    experience: [
      {
        company: "United Airlines",
        role: "Senior Accountant – General Ledger & Close",
        period: "Mar 2020 – Present",
        location: "Chicago, IL",
        bullets: [
          "Own month-end close for $1.8B corporate segment; prepare 40+ journal entries, flux analyses, and management reporting packages",
          "Led ASC 842 lease accounting implementation for 3,200+ leased assets; $4.1B ROU asset recorded with zero restatement",
          "Reduced financial close cycle from 12 business days to 6 through workflow automation (BlackLine, Power Query)",
          "Serve as SOX 404 control owner for 18 key controls; zero deficiencies noted across 3 annual audit cycles",
        ],
      },
      {
        company: "Deloitte",
        role: "Senior Associate – Audit & Assurance",
        period: "Jul 2015 – Mar 2020",
        location: "Chicago, IL",
        bullets: [
          "Led audit fieldwork for 6 public company clients ($500M–$2.4B revenue) under US GAAP and PCAOB standards",
          "Supervised teams of 2–4 associates; trained 8 first-year staff in audit methodology and documentation",
          "Identified $14.2M revenue recognition error in client's revenue recognition policy; resulted in restatement",
        ],
      },
    ],
    education: [
      { degree: "B.S. Accountancy", school: "University of Illinois Urbana-Champaign", period: "2011 – 2015", note: "Beta Alpha Psi Honors Fraternity | GPA: 3.8" },
    ],
    skills: [
      { category: "Accounting", items: ["US GAAP", "ASC 842", "ASC 606", "SOX 404", "PCAOB Audit Standards", "IFRS (working knowledge)"] },
      { category: "Systems", items: ["SAP S/4HANA", "Oracle Cloud", "BlackLine", "Workiva (Wdesk)", "NetSuite", "Hyperion"] },
      { category: "Analytics", items: ["Power BI", "Tableau", "Power Query", "Excel (Advanced)", "SQL (intermediate)"] },
    ],
    certifications: [
      "Certified Public Accountant (CPA) – Illinois (Active)",
      "Certified Management Accountant (CMA)",
    ],
  },
};

/* ──────────────────────────── EXPORTS ──────────────────────────── */

export const RESUME_EXAMPLES: ResumeExample[] = [
  softwareEngineer,
  civilEngineer,
  teacher,
  universityAdmin,
  govPolicy,
  lawEnforcement,
  registeredNurse,
  attorney,
  paralegal,
  retailManager,
  buyingMerchandiser,
  maintenanceTech,
  hvacTech,
  financialAnalyst,
  marketingManager,
  itSupportSpecialist,
  constructionPM,
  socialWorker,
  accountant,
];

export const SECTORS = [
  "All",
  "Engineering",
  "Education",
  "Government",
  "Healthcare",
  "Legal",
  "Retail",
  "Maintenance & Repair",
  "Finance",
  "Marketing",
  "Information Technology",
  "Construction",
  "Social Services",
  "Accounting",
];
