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

/* ──────────────────────────── ENGINEERING (extra) ──────────────────────────── */

const mechanicalEngineer: ResumeExample = {
  id: "eng-mechanical",
  sector: "Engineering",
  role: "Mechanical Engineer",
  atsScore: 94,
  template: "classic",
  accent: "#b45309",
  data: {
    name: "Derek Novak",
    title: "Mechanical Design Engineer",
    email: "d.novak@engineermail.com",
    phone: "(734) 882-5501",
    location: "Detroit, MI",
    linkedin: "linkedin.com/in/dereknovak",
    summary:
      "Mechanical engineer with 8 years designing powertrain and chassis components for automotive OEMs. Expert in FEA simulation, DFM/DFA, and GD&T. Track record of cutting component weight by 15–22% while meeting all NVH and structural targets.",
    experience: [
      {
        company: "Ford Motor Company",
        role: "Senior Mechanical Design Engineer",
        period: "Jun 2019 – Present",
        location: "Dearborn, MI",
        bullets: [
          "Led topology-optimization study reducing aluminum suspension knuckle mass by 19% with zero NVH regression",
          "Owned full design cycle (concept → production release) for 3 F-150 structural components across 2 model years",
          "Reduced warranty claims 31% by root-causing fatigue failures through FMEA and fractographic analysis",
          "Mentored 3 junior engineers; all promoted within 18 months",
        ],
      },
      {
        company: "BorgWarner",
        role: "Mechanical Engineer",
        period: "Jul 2016 – Jun 2019",
        location: "Auburn Hills, MI",
        bullets: [
          "Designed transfer-case housing tooling achieving Cpk > 1.67 on all critical dimensions",
          "Collaborated with casting supplier to eliminate shrinkage porosity, saving $240K/year in scrap",
        ],
      },
    ],
    education: [
      { degree: "M.S. Mechanical Engineering", school: "University of Michigan", period: "2014 – 2016", note: "Dynamics & Controls" },
      { degree: "B.S. Mechanical Engineering", school: "Michigan State University", period: "2010 – 2014", note: "GPA 3.85 | Tau Beta Pi" },
    ],
    skills: [
      { category: "CAD/CAE", items: ["CATIA V5/V6", "NX", "ANSYS Mechanical", "HyperMesh", "Adams"] },
      { category: "Standards", items: ["GD&T (ASME Y14.5)", "DFMEA", "DVP&R", "PPAP", "ISO 9001"] },
      { category: "Tools", items: ["MATLAB", "Python", "TeamCenter", "JIRA"] },
    ],
    certifications: [
      "Professional Engineer (PE) – Michigan",
      "Six Sigma Green Belt – ASQ",
    ],
  },
};

const electricalEngineer: ResumeExample = {
  id: "eng-electrical",
  sector: "Engineering",
  role: "Electrical Engineer",
  atsScore: 92,
  template: "minimal",
  accent: "#0f766e",
  data: {
    name: "Priya Venkatesh",
    title: "Electrical Systems Engineer",
    email: "p.venkatesh@engrmail.com",
    phone: "(408) 773-4412",
    location: "San Jose, CA",
    linkedin: "linkedin.com/in/priyavenkatesh",
    summary:
      "Electrical engineer specializing in mixed-signal PCB design and power electronics for consumer IoT and industrial control systems. 7 years of experience from schematic capture through bring-up, compliance testing, and production transfer.",
    experience: [
      {
        company: "Cisco Systems",
        role: "Senior Electrical Engineer",
        period: "Sep 2020 – Present",
        location: "San Jose, CA",
        bullets: [
          "Designed 6-layer PCB for next-gen network switch achieving EMI compliance on first FCC/CE submission",
          "Reduced BOM cost $4.20/unit ($3.1M/year) through component standardization and supplier negotiation",
          "Developed automated hardware validation suite in Python cutting bring-up time from 3 weeks to 4 days",
        ],
      },
      {
        company: "Tesla",
        role: "Electrical Engineer",
        period: "Jun 2017 – Sep 2020",
        location: "Fremont, CA",
        bullets: [
          "Owned 48 V low-voltage harness architecture for Model Y, achieving 8% weight reduction vs. Model 3",
          "Resolved in-production intermittent connector failure affecting 14,000 vehicles within 72-hour SLA",
        ],
      },
    ],
    education: [
      { degree: "B.S. Electrical Engineering", school: "UC Berkeley", period: "2013 – 2017", note: "Power Electronics focus | GPA 3.7" },
    ],
    skills: [
      { category: "Design", items: ["Altium Designer", "KiCad", "Cadence OrCAD", "LTspice", "MATLAB/Simulink"] },
      { category: "Domains", items: ["Power Electronics", "Mixed-Signal", "Motor Drives", "CAN/LIN/SPI", "EMC/EMI"] },
      { category: "Lab", items: ["Oscilloscope", "VNA", "Spectrum Analyzer", "Power Supply Design", "JTAG Debug"] },
    ],
    certifications: ["FCC/CE Compliance Testing", "IPC-A-610 Certified IPC Specialist"],
  },
};

/* ──────────────────────────── EDUCATION (extra) ──────────────────────────── */

const principalLeader: ResumeExample = {
  id: "edu-principal",
  sector: "Education",
  role: "School Principal",
  atsScore: 92,
  template: "sidebar",
  accent: "#7c3aed",
  data: {
    name: "Claudette Washington",
    title: "Elementary School Principal",
    email: "c.washington@schooldistrict.org",
    phone: "(713) 445-8820",
    location: "Houston, TX",
    linkedin: "linkedin.com/in/claudettewashington",
    summary:
      "Instructional leader with 16 years in K–12 education and 6 years as a campus principal. Drives culture of high expectations, data-informed instruction, and family engagement. Transformed two Title I schools from Improvement Required to Met Standard within 3 years.",
    experience: [
      {
        company: "Houston ISD – Riverside Elementary",
        role: "Campus Principal",
        period: "Aug 2018 – Present",
        location: "Houston, TX",
        bullets: [
          "Grew STAAR reading proficiency from 48% to 79% in four years through targeted PLC cycles and coaching",
          "Reduced teacher attrition from 34% to 11% by implementing instructional coaching and leadership pathways",
          "Secured $280K in Title IV and local grants for STEM lab and counseling expansion",
          "Earned 'Recognized' campus rating two consecutive years under TEA accountability framework",
        ],
      },
      {
        company: "Houston ISD – Lanier MS",
        role: "Assistant Principal",
        period: "Aug 2014 – Aug 2018",
        location: "Houston, TX",
        bullets: [
          "Managed scheduling, discipline, and instructional walkthroughs for 900-student campus",
          "Launched student mentorship program pairing 120 at-risk students with community volunteers",
        ],
      },
    ],
    education: [
      { degree: "Ed.D. Educational Leadership", school: "University of Houston", period: "2015 – 2019" },
      { degree: "M.Ed. Educational Administration", school: "Texas Southern University", period: "2008 – 2010" },
      { degree: "B.S. Elementary Education", school: "Prairie View A&M University", period: "2002 – 2006" },
    ],
    skills: [
      { category: "Leadership", items: ["Instructional Coaching", "PLCs", "Data-Driven Instruction", "Budget Administration"] },
      { category: "Compliance", items: ["TEA Accountability", "IDEA/IEP", "Title I", "FERPA"] },
      { category: "Systems", items: ["Eduphoria", "PowerSchool", "Skyward", "Google Workspace for Education"] },
    ],
    certifications: ["Texas Principal Certificate", "Effective Schools Framework Practitioner – TEA"],
  },
};

const instructionalDesigner: ResumeExample = {
  id: "edu-instructional",
  sector: "Education",
  role: "Instructional Designer",
  atsScore: 90,
  template: "minimal",
  accent: "#0891b2",
  data: {
    name: "Brandon Fleischer",
    title: "Senior Instructional Designer – Corporate L&D",
    email: "b.fleischer@learningpro.com",
    phone: "(512) 339-7756",
    location: "Austin, TX",
    summary:
      "Instructional designer with 9 years creating blended, eLearning, and microlearning programs for Fortune 500 companies. Expert in ADDIE and SAM models, Articulate 360, and learning analytics. Designed programs reaching 40,000+ learners with measurable performance outcomes.",
    experience: [
      {
        company: "Dell Technologies",
        role: "Senior Instructional Designer",
        period: "Jan 2020 – Present",
        location: "Austin, TX",
        bullets: [
          "Designed 12-module global sales enablement curriculum reducing ramp time for new reps from 90 to 52 days",
          "Increased course completion rates from 58% to 89% by redesigning mobile-first microlearning paths",
          "Built LMS reporting dashboard in Tableau surfacing learner drop-off points to L&D leadership weekly",
        ],
      },
      {
        company: "Accenture",
        role: "Instructional Designer",
        period: "Jun 2015 – Jan 2020",
        location: "Chicago, IL",
        bullets: [
          "Delivered 40+ eLearning modules for 6 client sectors (financial services, healthcare, retail)",
          "Led voice-over recording, video scripting, and SME interviews for 3 flagship compliance programs",
        ],
      },
    ],
    education: [
      { degree: "M.S. Instructional Technology", school: "Indiana University Bloomington", period: "2013 – 2015" },
      { degree: "B.A. Communications", school: "University of Wisconsin–Madison", period: "2009 – 2013" },
    ],
    skills: [
      { category: "Authoring", items: ["Articulate Storyline 360", "Rise 360", "Adobe Captivate", "Camtasia"] },
      { category: "Methodology", items: ["ADDIE", "SAM", "Kirkpatrick Model", "Agile L&D", "UDL"] },
      { category: "LMS", items: ["Cornerstone OnDemand", "Docebo", "Canvas", "Moodle", "SCORM/xAPI"] },
    ],
  },
};

/* ──────────────────────────── HEALTHCARE (extra) ──────────────────────────── */

const physicalTherapist: ResumeExample = {
  id: "hc-physicaltherapist",
  sector: "Healthcare",
  role: "Physical Therapist",
  atsScore: 93,
  template: "classic",
  accent: "#0369a1",
  data: {
    name: "Natalie Osei",
    title: "Doctor of Physical Therapy – Orthopedics & Sports",
    email: "n.osei@ptclinic.com",
    phone: "(602) 558-2241",
    location: "Phoenix, AZ",
    linkedin: "linkedin.com/in/natalieosei",
    summary:
      "Licensed physical therapist with 7 years in orthopedic and sports rehabilitation. Consistently achieves patient functional outcomes 20%+ above clinic benchmarks. Experienced in manual therapy, dry needling, and return-to-sport protocols for elite and recreational athletes.",
    experience: [
      {
        company: "Banner Physical Therapy",
        role: "Senior Physical Therapist",
        period: "Aug 2019 – Present",
        location: "Phoenix, AZ",
        bullets: [
          "Manages caseload of 18–22 patients/day across orthopedic post-op and sports injury populations",
          "Achieved 94% patient satisfaction score (clinic average: 87%) over 4 consecutive years",
          "Developed ACL reconstruction return-to-sport protocol adopted across 5 clinic locations",
          "Reduced average episode-of-care from 14 to 10.5 visits through outcome-based programming",
        ],
      },
      {
        company: "Phoenix Suns – Performance Team",
        role: "Physical Therapy Intern",
        period: "Jan 2017 – Jun 2017",
        location: "Phoenix, AZ",
        bullets: [
          "Assisted with pre/post-game recovery modalities for 18 NBA players under supervising PT",
          "Conducted movement screenings and compiled injury-risk reports for coaching staff",
        ],
      },
    ],
    education: [
      { degree: "Doctor of Physical Therapy (DPT)", school: "University of Arizona", period: "2014 – 2017" },
      { degree: "B.S. Kinesiology", school: "Arizona State University", period: "2010 – 2014", note: "Summa Cum Laude" },
    ],
    skills: [
      { category: "Clinical", items: ["Manual Therapy", "Dry Needling", "FMS", "SFMA", "Kinesio Taping", "Instrument-Assisted ST"] },
      { category: "Software", items: ["WebPT", "Clinicient", "TheraOffice", "HealthStream"] },
    ],
    certifications: [
      "Licensed PT – Arizona",
      "Orthopedic Clinical Specialist (OCS) – ABPTS",
      "Certified Dry Needling – KinetaCore",
    ],
  },
};

const pharmacist: ResumeExample = {
  id: "hc-pharmacist",
  sector: "Healthcare",
  role: "Clinical Pharmacist",
  atsScore: 91,
  template: "sidebar",
  accent: "#be185d",
  data: {
    name: "James Ekwueme",
    title: "Clinical Pharmacist – Ambulatory Care",
    email: "j.ekwueme@healthsystem.org",
    phone: "(617) 330-5549",
    location: "Boston, MA",
    linkedin: "linkedin.com/in/jamesekwueme",
    summary:
      "PharmD with 8 years of clinical pharmacy experience in ambulatory care and transitions-of-care programs. Expert in chronic disease management, medication therapy management, and collaborative practice agreements. Consistently improves patient adherence metrics and reduces readmission rates.",
    experience: [
      {
        company: "Mass General Brigham",
        role: "Clinical Pharmacist – Ambulatory Care",
        period: "Mar 2018 – Present",
        location: "Boston, MA",
        bullets: [
          "Manages pharmacy caseload of 350+ patients with diabetes, hypertension, and dyslipidemia under CPA",
          "Improved average A1C reduction by 1.4 points across cohort of 120 high-risk diabetic patients",
          "Reduced 30-day hospital readmission rate by 18% through pharmacist-led transitions-of-care program",
          "Precepted 6 PGY1 pharmacy residents; 5 matched to PGY2 or clinical positions",
        ],
      },
      {
        company: "CVS Health",
        role: "Staff Pharmacist",
        period: "Jun 2016 – Mar 2018",
        location: "Worcester, MA",
        bullets: [
          "Verified and dispensed 250+ prescriptions daily with zero dispensing errors over 2-year tenure",
          "Achieved #1 district MTM completion rate (92%) for two consecutive quarters",
        ],
      },
    ],
    education: [
      { degree: "Doctor of Pharmacy (PharmD)", school: "Northeastern University", period: "2012 – 2016", note: "Rho Chi Honor Society" },
      { degree: "B.S. Biochemistry", school: "Boston College", period: "2008 – 2012" },
    ],
    skills: [
      { category: "Clinical", items: ["MTM", "CDTM", "Anticoagulation Management", "Immunization", "Drug Utilization Review"] },
      { category: "Systems", items: ["Epic Willow", "Cerner PharmNet", "PioneerRx", "Surescripts", "Omnicell"] },
    ],
    certifications: ["Licensed Pharmacist – Massachusetts", "Board Certified Ambulatory Care Pharmacist (BCACP)", "Advanced Cardiac Life Support (ACLS)"],
  },
};

/* ──────────────────────────── FINANCE (extra) ──────────────────────────── */

const investmentBanker: ResumeExample = {
  id: "fin-investment-banker",
  sector: "Finance",
  role: "Investment Banking Analyst",
  atsScore: 96,
  template: "minimal",
  accent: "#1d4ed8",
  data: {
    name: "Oliver Kwan",
    title: "Investment Banking Analyst – M&A",
    email: "o.kwan@financemail.com",
    phone: "(212) 884-3317",
    location: "New York, NY",
    linkedin: "linkedin.com/in/oliverkwan",
    summary:
      "Top-ranked IB analyst with 3 years executing M&A and equity capital markets transactions totaling $4.2B in deal value. Exceptional financial modeling, valuation, and client-presentation skills. Promoted to senior analyst one year ahead of cycle.",
    experience: [
      {
        company: "Goldman Sachs",
        role: "Investment Banking Analyst – TMT",
        period: "Jul 2022 – Present",
        location: "New York, NY",
        bullets: [
          "Executed $1.8B cross-border acquisition of SaaS platform; built LBO, DCF, and comparable-company models",
          "Prepared and presented 40+ CIMs, management presentations, and Board materials to C-suite clients",
          "Screened 200+ acquisition targets for three buy-side mandate engagements in cloud infrastructure",
          "Ranked top decile in analyst class; promoted to Senior Analyst 12 months early",
        ],
      },
      {
        company: "J.P. Morgan",
        role: "Investment Banking Summer Analyst",
        period: "Jun 2021 – Aug 2021",
        location: "New York, NY",
        bullets: [
          "Supported execution of $620M healthcare SPAC merger; received full-time offer with top performance rating",
        ],
      },
    ],
    education: [
      { degree: "B.S. Finance & Economics", school: "University of Pennsylvania – Wharton", period: "2018 – 2022", note: "Magna Cum Laude | GPA 3.92" },
    ],
    skills: [
      { category: "Finance", items: ["DCF", "LBO", "Precedent Transactions", "Comparable Companies", "Merger Modeling", "Capital Structure"] },
      { category: "Tools", items: ["Bloomberg Terminal", "FactSet", "Capital IQ", "Excel (VBA)", "PowerPoint"] },
    ],
    certifications: ["Series 63 – FINRA", "Series 79 – FINRA"],
  },
};

const cfo: ResumeExample = {
  id: "fin-cfo",
  sector: "Finance",
  role: "Chief Financial Officer",
  atsScore: 94,
  template: "classic",
  accent: "#0f172a",
  data: {
    name: "Margaret Holloway",
    title: "Chief Financial Officer",
    email: "m.holloway@cfoleader.com",
    phone: "(415) 760-2234",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/margaretholloway",
    summary:
      "CFO with 20 years of financial leadership in SaaS, fintech, and enterprise software. Led two successful IPOs raising $340M combined, 4 M&A transactions, and $500M+ in debt and equity financing. Board-level communicator and strategic partner to CEOs and investors.",
    experience: [
      {
        company: "Lattice (HCM SaaS)",
        role: "Chief Financial Officer",
        period: "Mar 2019 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Scaled ARR from $28M to $175M while improving net revenue retention from 108% to 127%",
          "Led Series D ($100M) and Series E ($175M) fundraises at 12x and 18x ARR valuations respectively",
          "Built 22-person finance team from 4; implemented FP&A platform reducing close cycle from 10 to 5 days",
          "Prepared company for IPO readiness; oversaw SOX implementation and Big-4 audit transition",
        ],
      },
      {
        company: "Zendesk",
        role: "VP Finance & Corporate Development",
        period: "Jan 2013 – Mar 2019",
        location: "San Francisco, CA",
        bullets: [
          "Supported 2014 IPO on NYSE raising $100M; led investor relations for 3 years post-IPO",
          "Executed 3 tuck-in acquisitions ($15M–$60M) from target identification through integration",
        ],
      },
    ],
    education: [
      { degree: "MBA – Finance & Strategy", school: "Stanford Graduate School of Business", period: "2003 – 2005" },
      { degree: "B.S. Accounting", school: "Georgetown University", period: "1997 – 2001", note: "Summa Cum Laude | CPA" },
    ],
    skills: [
      { category: "Finance", items: ["FP&A", "Corporate Development", "Investor Relations", "M&A", "Capital Markets", "SOX Compliance"] },
      { category: "Tools", items: ["Anaplan", "Adaptive Insights", "Salesforce", "Netsuite", "Tableau", "SQL"] },
    ],
    certifications: ["Certified Public Accountant (CPA) – California"],
  },
};

/* ──────────────────────────── MARKETING (extra) ──────────────────────────── */

const contentStrategist: ResumeExample = {
  id: "mkt-content",
  sector: "Marketing",
  role: "Content Strategist",
  atsScore: 90,
  template: "sidebar",
  accent: "#d97706",
  data: {
    name: "Simone Adeyemi",
    title: "Senior Content Strategist",
    email: "s.adeyemi@contentpro.com",
    phone: "(323) 664-4418",
    location: "Los Angeles, CA",
    linkedin: "linkedin.com/in/simoneadeyemi",
    summary:
      "Data-driven content strategist with 8 years building organic growth engines for B2B SaaS and DTC brands. Expert in SEO, content ops, and editorial leadership. Scaled organic traffic from 80K to 1.4M monthly sessions at previous role.",
    experience: [
      {
        company: "HubSpot",
        role: "Senior Content Strategist",
        period: "Feb 2021 – Present",
        location: "Remote",
        bullets: [
          "Grew blog organic traffic 74% YoY through topic-cluster strategy and content refresh program",
          "Launched 3-pillar content series generating 8,200 MQLs in 6 months (120% of target)",
          "Managed editorial calendar and 12-writer freelance network producing 60+ pieces/month",
          "Reduced content production costs 28% by templating briefs and implementing AI-assisted drafting",
        ],
      },
      {
        company: "Shopify",
        role: "Content Strategist",
        period: "May 2016 – Feb 2021",
        location: "Ottawa, Canada (Remote)",
        bullets: [
          "Co-owned Shopify Blog editorial strategy, growing audience from 800K to 3.2M monthly readers",
          "Produced 40+ long-form merchant success stories used in sales collateral and investor materials",
        ],
      },
    ],
    education: [
      { degree: "B.A. Journalism & Digital Media", school: "USC Annenberg", period: "2012 – 2016", note: "Magna Cum Laude" },
    ],
    skills: [
      { category: "SEO & Content", items: ["Ahrefs", "SEMrush", "Clearscope", "Surfer SEO", "Google Search Console", "Schema Markup"] },
      { category: "Tools", items: ["Contentful", "WordPress", "Webflow", "Notion", "Asana", "GA4"] },
    ],
  },
};

const seoSpecialist: ResumeExample = {
  id: "mkt-seo",
  sector: "Marketing",
  role: "SEO Specialist",
  atsScore: 91,
  template: "minimal",
  accent: "#4f46e5",
  data: {
    name: "Liam Fitzgerald",
    title: "SEO & Growth Specialist",
    email: "l.fitzgerald@growthmail.com",
    phone: "(617) 443-2291",
    location: "Boston, MA",
    summary:
      "SEO specialist with 6 years driving organic growth for e-commerce and SaaS companies. Combines technical SEO, content strategy, and CRO to deliver compounding traffic and revenue gains. Grew monthly organic revenue from $0 to $1.2M for an e-commerce client in 18 months.",
    experience: [
      {
        company: "Wayfair",
        role: "Senior SEO Specialist",
        period: "Apr 2021 – Present",
        location: "Boston, MA",
        bullets: [
          "Led technical SEO audit and remediation increasing crawl coverage by 340K pages, lifting organic sessions 38% in 90 days",
          "Implemented structured data (schema) across 2M+ product pages, earning sitelinks for 180 high-value queries",
          "Managed $480K annual link-building budget; built 1,100+ authoritative backlinks (avg. DR 62)",
        ],
      },
      {
        company: "Wpromote",
        role: "SEO Analyst",
        period: "Jun 2018 – Apr 2021",
        location: "El Segundo, CA",
        bullets: [
          "Served as SEO lead for 8 client accounts across retail, B2B SaaS, and healthcare verticals",
          "Achieved top-3 rankings for 420+ target keywords with avg. monthly search volume > 5,000",
        ],
      },
    ],
    education: [
      { degree: "B.S. Marketing", school: "Northeastern University", period: "2014 – 2018" },
    ],
    skills: [
      { category: "SEO Tools", items: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "Moz", "DeepCrawl"] },
      { category: "Technical", items: ["JavaScript SEO", "Core Web Vitals", "Log-File Analysis", "XML Sitemaps", "Hreflang"] },
    ],
    certifications: ["Google Analytics 4 Certified", "Google Search Ads Certified"],
  },
};

/* ──────────────────────────── IT (extra) ──────────────────────────── */

const dataEngineer: ResumeExample = {
  id: "it-data-engineer",
  sector: "Information Technology",
  role: "Data Engineer",
  atsScore: 95,
  template: "classic",
  accent: "#0284c7",
  data: {
    name: "Kwame Asante",
    title: "Senior Data Engineer – Platform & Pipelines",
    email: "k.asante@datamail.com",
    phone: "(206) 558-4430",
    location: "Seattle, WA",
    linkedin: "linkedin.com/in/kwameasante",
    summary:
      "Data engineer with 7 years architecting scalable data platforms on AWS and GCP. Expert in building real-time and batch pipelines, data lake/lakehouse architectures, and enabling self-serve analytics for cross-functional teams. Reduced data processing costs by $1.8M at current role.",
    experience: [
      {
        company: "Amazon",
        role: "Senior Data Engineer",
        period: "May 2020 – Present",
        location: "Seattle, WA",
        bullets: [
          "Designed streaming ingestion platform processing 4.5M events/min using Kafka and Flink with 99.98% uptime",
          "Migrated 200TB on-premise data warehouse to AWS S3/Redshift Serverless, reducing cost $1.8M/year",
          "Built dbt transformation layer serving 35 analyst teams; reduced query latency 60% through materialization strategy",
          "Mentored 4 junior engineers; introduced code-review and CI/CD standards adopted across 3 teams",
        ],
      },
      {
        company: "Tableau (Salesforce)",
        role: "Data Engineer",
        period: "Aug 2017 – May 2020",
        location: "Seattle, WA",
        bullets: [
          "Owned end-to-end ETL pipelines for product telemetry data serving 1,200 internal stakeholders",
          "Implemented row-level security and column masking policies across 40 shared Tableau data sources",
        ],
      },
    ],
    education: [
      { degree: "M.S. Computer Science – Data Systems", school: "University of Washington", period: "2015 – 2017" },
      { degree: "B.S. Computer Science", school: "Howard University", period: "2011 – 2015", note: "GPA 3.87" },
    ],
    skills: [
      { category: "Languages", items: ["Python", "Scala", "SQL", "Bash", "Go"] },
      { category: "Frameworks", items: ["Apache Spark", "Kafka", "Flink", "Airflow", "dbt", "Great Expectations"] },
      { category: "Cloud", items: ["AWS (Glue, Redshift, S3, Lambda)", "GCP (BigQuery, Dataflow)", "Snowflake", "Databricks"] },
    ],
    certifications: [
      "AWS Certified Data Analytics – Specialty",
      "Google Professional Data Engineer",
      "Databricks Certified Associate Developer for Apache Spark",
    ],
  },
};

const cybersecurityAnalyst: ResumeExample = {
  id: "it-cybersecurity",
  sector: "Information Technology",
  role: "Cybersecurity Analyst",
  atsScore: 93,
  template: "sidebar",
  accent: "#dc2626",
  data: {
    name: "Marcus Reid",
    title: "Senior Cybersecurity Analyst – SOC & Threat Intel",
    email: "m.reid@securitypro.com",
    phone: "(703) 882-4419",
    location: "Washington, DC",
    linkedin: "linkedin.com/in/marcusreid",
    summary:
      "Cybersecurity analyst with 8 years in SOC operations, threat hunting, and incident response. Holds CISSP and CEH certifications. Led investigation and containment of 3 ransomware incidents with zero data exfiltration. Expert in SIEM, EDR, and cloud security across AWS and Azure.",
    experience: [
      {
        company: "Booz Allen Hamilton",
        role: "Senior Cybersecurity Analyst",
        period: "Jun 2019 – Present",
        location: "Washington, DC",
        bullets: [
          "Led 24/7 Tier-3 SOC analyst team of 6 defending federal civilian agency network with 40,000+ endpoints",
          "Contained and remediated ransomware attack within 4 hours, preventing lateral spread to 3,200 servers",
          "Developed 34 custom SIEM detection rules, reducing mean-time-to-detect from 72 hours to 8 hours",
          "Conducted quarterly red-team/blue-team exercises; authored executive risk briefings for agency CISO",
        ],
      },
      {
        company: "CrowdStrike",
        role: "Threat Intelligence Analyst",
        period: "Jul 2016 – Jun 2019",
        location: "Sunnyvale, CA",
        bullets: [
          "Tracked 4 APT actor groups (nation-state), producing 60+ intelligence reports distributed to 300 enterprise clients",
          "Reverse-engineered 14 malware families; authored IOC feeds integrated into Falcon platform",
        ],
      },
    ],
    education: [
      { degree: "B.S. Computer Information Systems", school: "George Mason University", period: "2012 – 2016", note: "Cybersecurity concentration" },
    ],
    skills: [
      { category: "Security Tools", items: ["Splunk SIEM", "CrowdStrike Falcon", "Microsoft Sentinel", "Palo Alto Cortex XDR", "Tenable Nessus"] },
      { category: "Domains", items: ["Incident Response", "Threat Hunting", "Malware Analysis", "OSINT", "Zero Trust", "MITRE ATT&CK"] },
    ],
    certifications: ["CISSP – ISC²", "Certified Ethical Hacker (CEH)", "CompTIA Security+", "AWS Certified Security – Specialty"],
  },
};

const productManager: ResumeExample = {
  id: "it-product-manager",
  sector: "Information Technology",
  role: "Product Manager",
  atsScore: 94,
  template: "classic",
  accent: "#7c3aed",
  data: {
    name: "Aisha Thornton",
    title: "Senior Product Manager – B2B SaaS",
    email: "a.thornton@productpro.com",
    phone: "(650) 443-7712",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/aishathornton",
    summary:
      "Product manager with 8 years building SaaS products from 0→1 and scaling platforms to 5M+ users. Expert in cross-functional leadership, OKR-driven roadmapping, and data-informed feature development. Led product teams that delivered $60M+ in incremental ARR.",
    experience: [
      {
        company: "Salesforce",
        role: "Senior Product Manager – Platform",
        period: "Mar 2020 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Owned Flow Builder product line (12M+ active users); delivered 4 major releases on schedule across 3 squads",
          "Defined and shipped AI-assisted automation features generating $22M incremental ARR in first year",
          "Reduced customer-reported P1 bugs 45% by embedding QA gates into sprint cycle and release process",
          "Conducted 200+ customer interviews informing 3-year product vision and platform strategy",
        ],
      },
      {
        company: "Twilio",
        role: "Product Manager – Developer Experience",
        period: "Aug 2016 – Mar 2020",
        location: "San Francisco, CA",
        bullets: [
          "Launched new console onboarding flow reducing time-to-first-API-call from 22 minutes to 6 minutes",
          "Grew monthly active developers 38% YoY by shipping self-serve sandbox and guided quickstart program",
        ],
      },
    ],
    education: [
      { degree: "MBA – Product & Technology", school: "UC Berkeley Haas", period: "2014 – 2016" },
      { degree: "B.S. Computer Science", school: "Georgia Tech", period: "2010 – 2014" },
    ],
    skills: [
      { category: "Product", items: ["Roadmapping", "OKRs", "Agile/Scrum", "A/B Testing", "PRD Writing", "Competitive Analysis"] },
      { category: "Tools", items: ["Jira", "Amplitude", "Mixpanel", "Figma", "Looker", "Productboard"] },
    ],
  },
};

/* ──────────────────────────── RETAIL (extra) ──────────────────────────── */

const storeManager: ResumeExample = {
  id: "retail-store-manager",
  sector: "Retail",
  role: "Store Manager",
  atsScore: 91,
  template: "classic",
  accent: "#b45309",
  data: {
    name: "Tanya Okonkwo",
    title: "Multi-Unit Retail Store Manager",
    email: "t.okonkwo@retailpro.com",
    phone: "(404) 553-8812",
    location: "Atlanta, GA",
    summary:
      "Results-driven retail leader with 12 years managing high-volume stores and developing top-performing teams. Expert in P&L management, loss prevention, and customer experience. Consistently ranks in top 10% of district for sales, shrink, and team engagement.",
    experience: [
      {
        company: "Target Corporation",
        role: "Store Team Leader (STL)",
        period: "Jan 2018 – Present",
        location: "Atlanta, GA",
        bullets: [
          "Leads $42M annual-volume store with 180 team members across 14 departments",
          "Grew store NPS from 68 to 89 through service recovery training and team accountability initiatives",
          "Reduced shrink from 1.8% to 0.9% in 18 months via LP partnership and inventory audit program",
          "Promoted 7 team members to ETL or leadership roles over tenure — highest in district",
        ],
      },
      {
        company: "Best Buy",
        role: "Assistant Store Manager – Sales",
        period: "Mar 2012 – Jan 2018",
        location: "Atlanta, GA",
        bullets: [
          "Managed $18M consumer electronics department; exceeded plan 4 of 5 years",
          "Launched Geek Squad upsell training, increasing attach rate from 21% to 38%",
        ],
      },
    ],
    education: [
      { degree: "B.B.A. Retail Management", school: "Georgia State University", period: "2008 – 2012" },
    ],
    skills: [
      { category: "Operations", items: ["P&L Management", "Inventory Control", "Loss Prevention", "Visual Merchandising", "Workforce Planning"] },
      { category: "Systems", items: ["SAP Retail", "Workday", "Kronos WFM", "Oracle Retail", "Salesfloor"] },
    ],
  },
};

const customerServiceRep: ResumeExample = {
  id: "retail-customer-service",
  sector: "Retail",
  role: "Customer Service Representative",
  atsScore: 89,
  template: "minimal",
  accent: "#16a34a",
  data: {
    name: "Elena Rodriguez",
    title: "Senior Customer Service Representative",
    email: "e.rodriguez@servicemail.com",
    phone: "(469) 227-4456",
    location: "Dallas, TX",
    summary:
      "Customer service professional with 5 years resolving complex customer issues across in-store and contact-center environments. Consistently achieves top-tier CSAT and FCR scores. Bilingual in English and Spanish.",
    experience: [
      {
        company: "Nordstrom",
        role: "Customer Service Lead",
        period: "Jun 2021 – Present",
        location: "Dallas, TX",
        bullets: [
          "Handles 80+ customer interactions/day across in-store, phone, and chat channels with 97% CSAT",
          "Trained 12 new hires on service standards, POS systems, and return policies — 100% 90-day retention",
          "Resolved 340+ escalated cases in 2023 with 94% first-contact resolution rate",
        ],
      },
      {
        company: "Macy's",
        role: "Sales & Service Associate",
        period: "Aug 2019 – Jun 2021",
        location: "Fort Worth, TX",
        bullets: [
          "Exceeded personal sales plan by 22% in 2020 holiday season despite reduced floor traffic",
          "Bilingual service support for Spanish-speaking customers reduced translation escalations by 60%",
        ],
      },
    ],
    education: [
      { degree: "A.A.S. Business Administration", school: "Tarrant County College", period: "2017 – 2019" },
    ],
    skills: [
      { category: "Service", items: ["Conflict Resolution", "De-escalation", "Omnichannel Support", "Returns & Exchanges", "Upselling"] },
      { category: "Systems", items: ["Salesforce Service Cloud", "Zendesk", "Oracle POS", "Microsoft Office"] },
      { category: "Languages", items: ["English (Native)", "Spanish (Fluent)"] },
    ],
  },
};

/* ──────────────────────────── LEGAL (extra) ──────────────────────────── */

const corporateCounsel: ResumeExample = {
  id: "legal-corporate-counsel",
  sector: "Legal",
  role: "Corporate Counsel",
  atsScore: 93,
  template: "classic",
  accent: "#1e3a5f",
  data: {
    name: "Stephanie Park",
    title: "Senior Corporate Counsel – Technology & M&A",
    email: "s.park@legalmail.com",
    phone: "(415) 992-3348",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/stephaniepark",
    summary:
      "In-house technology attorney with 10 years advising on M&A, commercial contracts, data privacy, and equity compensation for high-growth SaaS and fintech companies. Closed $2B+ in cumulative deal value. Expert in GDPR, CCPA, and cross-border data transfer frameworks.",
    experience: [
      {
        company: "Stripe, Inc.",
        role: "Senior Corporate Counsel",
        period: "Oct 2019 – Present",
        location: "San Francisco, CA",
        bullets: [
          "Led legal due diligence and documentation for 5 acquisitions ranging from $40M to $380M",
          "Drafted and negotiated 300+ enterprise SaaS agreements with Fortune 500 companies",
          "Built company-wide GDPR/CCPA compliance program from scratch; passed 2 regulatory audits",
          "Managed outside counsel budget of $3.2M annually; reduced external spend 24% through internal insourcing",
        ],
      },
      {
        company: "Wilson Sonsini Goodrich & Rosati",
        role: "Associate – Emerging Companies & M&A",
        period: "Sep 2014 – Oct 2019",
        location: "Palo Alto, CA",
        bullets: [
          "Advised 20+ venture-backed startups on Series A–D financings totaling $600M+",
          "Represented acquirors and targets in 8 M&A transactions from LOI through closing",
        ],
      },
    ],
    education: [
      { degree: "J.D.", school: "Stanford Law School", period: "2011 – 2014", note: "Order of the Coif | Stanford Law Review" },
      { degree: "B.A. Economics", school: "UC San Diego", period: "2007 – 2011", note: "Phi Beta Kappa | Summa Cum Laude" },
    ],
    skills: [
      { category: "Legal", items: ["M&A", "Commercial Contracts", "GDPR/CCPA", "Equity Compensation", "IP Licensing", "Employment Law"] },
      { category: "Tools", items: ["Ironclad CLM", "DocuSign", "Carta", "Cooley GO Docs", "Westlaw"] },
    ],
    certifications: ["California State Bar", "CIPP/E – IAPP (Certified Information Privacy Professional)"],
  },
};

/* ──────────────────────────── GOVERNMENT (extra) ──────────────────────────── */

const cityManager: ResumeExample = {
  id: "gov-city-manager",
  sector: "Government",
  role: "City Manager",
  atsScore: 93,
  template: "classic",
  accent: "#1e3a5f",
  data: {
    name: "Raymond Castillo",
    title: "City Manager – Municipal Administration",
    email: "r.castillo@citymanager.gov",
    phone: "(512) 334-7760",
    location: "Austin, TX",
    linkedin: "linkedin.com/in/raymondcastillo",
    summary:
      "ICMA-credentialed city manager with 17 years of progressively responsible municipal leadership in cities of 60,000–280,000 residents. Expertise in strategic planning, budget administration, intergovernmental relations, and organizational change management. Spearheaded $140M capital improvement program and negotiated $24M in state and federal grants. Recognized for transparent governance, equity-focused service delivery, and building high-performance municipal teams.",
    experience: [
      {
        company: "City of Cedar Park, TX",
        role: "City Manager",
        period: "Feb 2017 – Present",
        location: "Cedar Park, TX",
        bullets: [
          "Oversee $285M annual operating and capital budget and a workforce of 920 full-time employees across 18 departments",
          "Directed $140M capital improvement program (roads, parks, utilities) on time and 2.3% under budget over 5 years",
          "Negotiated $24M in state and federal infrastructure grants, reducing local tax burden by an estimated 8%",
          "Implemented enterprise-wide performance management system (ResultsATX); city earned National Civic League All-America City designation in 2022",
          "Led organizational restructuring that reduced management layers, saving $1.8M/year and improving front-line supervisor span of control",
        ],
      },
      {
        company: "City of Georgetown, TX",
        role: "Deputy City Manager",
        period: "Jun 2011 – Feb 2017",
        location: "Georgetown, TX",
        bullets: [
          "Managed daily operations of Public Works, Planning, Parks & Recreation, and Economic Development departments",
          "Oversaw creation of 5-year economic development strategic plan that attracted 12 new employers and 1,400 jobs",
          "Directed emergency response coordination during 2015 Memorial Day flood, including FEMA reimbursement claims totaling $6.2M",
        ],
      },
      {
        company: "City of Georgetown, TX",
        role: "Assistant City Manager",
        period: "Aug 2007 – Jun 2011",
        location: "Georgetown, TX",
        bullets: [
          "Managed $42M utility enterprise fund; implemented rate study resulting in first cost-of-service rate structure",
          "Coordinated joint planning with Williamson County on regional transportation improvements",
        ],
      },
    ],
    education: [
      { degree: "M.P.A. Public Administration", school: "The University of Texas at Austin – LBJ School", period: "2005 – 2007", note: "Local Government Management Fellowship" },
      { degree: "B.S. Political Science", school: "Texas A&M University", period: "2001 – 2005", note: "Summa Cum Laude" },
    ],
    skills: [
      { category: "Management", items: ["Strategic Planning", "Budget Administration", "Organizational Development", "Labor Relations", "Capital Planning"] },
      { category: "Intergovernmental", items: ["Federal Grant Administration", "State Legislative Relations", "Regional Collaboration", "Council-Manager Relations"] },
      { category: "Tools", items: ["Tyler Munis ERP", "Questica Budget", "GovPilot", "Esri ArcGIS", "Microsoft Power BI"] },
    ],
    certifications: [
      "ICMA Credentialed Manager (ICM)",
      "Texas Certified Public Manager (CPM)",
      "FEMA Professional Development Series (Complete)",
    ],
  },
};

const foreignServiceOfficer: ResumeExample = {
  id: "gov-foreign-service",
  sector: "Government",
  role: "Foreign Service Officer",
  atsScore: 94,
  template: "sidebar",
  accent: "#1e3a5f",
  data: {
    name: "Christine Abara",
    title: "Foreign Service Officer – Economic Affairs",
    email: "c.abara@state.gov",
    phone: "(202) 555-0142",
    location: "Washington, DC",
    linkedin: "linkedin.com/in/christineabara",
    summary:
      "U.S. Foreign Service Officer (FS-02) with 13 years advancing U.S. economic and trade interests across Sub-Saharan Africa, Southeast Asia, and Europe. Expertise in trade policy negotiation, bilateral investment treaty implementation, and commercial advocacy. Led economic reporting teams at three overseas posts; recognized with Superior Honor Award for commercial advocacy that unlocked $480M in U.S. exports.",
    experience: [
      {
        company: "U.S. Embassy – Lagos, Nigeria",
        role: "Economic Section Chief (FS-02)",
        period: "Aug 2020 – Present",
        location: "Lagos, Nigeria",
        bullets: [
          "Lead team of 6 officers and 4 locally employed staff covering trade, investment, intellectual property, and energy sectors for Africa's largest economy",
          "Coordinated Prosper Africa commercial advocacy campaign resulting in $480M in cleared U.S. export deals, earning Superior Honor Award",
          "Authored 90+ cables on Nigerian macroeconomic conditions, oil sector reform, and AfCFTA implementation—cited in NSC policy deliberations",
          "Managed $1.2M economic-growth programming budget across USAID-funded bilateral programs",
        ],
      },
      {
        company: "U.S. Embassy – Hanoi, Vietnam",
        role: "Economic Officer (FS-03)",
        period: "Jul 2016 – Aug 2020",
        location: "Hanoi, Vietnam",
        bullets: [
          "Negotiated with Ministry of Industry and Trade on IPR enforcement actions, contributing to Vietnam's removal from USTR Priority Watch List",
          "Supported CPTPP implementation monitoring; coordinated interagency input for annual National Trade Estimate report",
          "Supervised 2 junior officers and conducted performance evaluations; both promoted ahead of cycle",
        ],
      },
      {
        company: "U.S. Mission – Brussels, Belgium",
        role: "Trade Policy Officer (FS-04)",
        period: "Sep 2012 – Jul 2016",
        location: "Brussels, Belgium",
        bullets: [
          "Monitored EU regulatory developments affecting U.S. digital services and agricultural exports; produced weekly reporting for Washington principals",
          "Participated in TTIP negotiating rounds as note-taker and rapporteur for market access working groups",
        ],
      },
    ],
    education: [
      { degree: "M.A. International Economics", school: "Johns Hopkins SAIS", period: "2010 – 2012", note: "Trade Policy & Finance concentration" },
      { degree: "B.A. Economics & International Relations", school: "Georgetown University", period: "2006 – 2010", note: "Phi Beta Kappa | Summa Cum Laude" },
    ],
    skills: [
      { category: "Policy", items: ["Trade Negotiation", "Investment Treaty Analysis", "Bilateral Economic Reporting", "Sanctions Analysis", "WTO Framework"] },
      { category: "Regional", items: ["Sub-Saharan Africa", "Southeast Asia", "EU/Transatlantic Affairs"] },
      { category: "Tools", items: ["OpenNet", "eCountry Clearance", "SharePoint", "Stata", "Bloomberg Terminal"] },
    ],
    certifications: [
      "Top Secret / SCI Clearance (Active)",
      "Superior Honor Award – U.S. Department of State (2023)",
      "Meritorious Honor Award – U.S. Department of State (2019)",
    ],
    extras: [
      { label: "Languages", value: "English (Native), French (Professional – DLPT 3/3), Vietnamese (Limited Working – DLPT 2/2), Spanish (Elementary)" },
    ],
  },
};

const contractingOfficer: ResumeExample = {
  id: "gov-contracting",
  sector: "Government",
  role: "Federal Contracting Officer",
  atsScore: 92,
  template: "minimal",
  accent: "#1e3a5f",
  data: {
    name: "Darnell Hughes",
    title: "Contracting Officer (1102) – Defense Acquisition",
    email: "d.hughes@acquisition.gov",
    phone: "(571) 334-8820",
    location: "Arlington, VA",
    summary:
      "FAC-C Level III Contracting Officer and DAWIA-certified acquisition professional with 14 years managing complex federal procurement actions for Department of Defense. Unlimited warrant authority. Led award and administration of contracts totaling $2.1B across IT services, professional services, and systems integration. Expert in competitive negotiated acquisitions, other transaction authority (OTA), and cost/price analysis for cost-reimbursement and fixed-price contracts.",
    experience: [
      {
        company: "Defense Information Systems Agency (DISA)",
        role: "Contracting Officer – IT & Cyber Programs",
        period: "May 2016 – Present",
        location: "Fort Meade, MD",
        bullets: [
          "Hold unlimited contracting warrant; administer active contract portfolio of 32 contracts with combined value of $2.1B",
          "Led award of $340M IDIQ for enterprise cybersecurity services; negotiated final price 7.4% below government estimate",
          "Structured and awarded first OTA prototype agreement for agency's zero-trust architecture program ($48M ceiling)",
          "Manage team of 4 Contract Specialists and 2 CORs; provided DAWIA training resulting in 3 Level II certifications",
          "Achieved 98% on-time award rate across 60+ actions in FY2023; zero sustained GAO bid protests over 5-year period",
        ],
      },
      {
        company: "U.S. Army Contracting Command – Rock Island",
        role: "Contract Specialist / Contracting Officer (GS-1102-13)",
        period: "Aug 2010 – May 2016",
        location: "Rock Island, IL",
        bullets: [
          "Awarded limited warrant (up to $25M) in 2012; expanded to $50M in 2014 based on performance",
          "Conducted price/cost analysis for 40+ cost-reimbursement engineering services contracts averaging $8M",
          "Identified $2.8M in duplicate billing through contract audit collaboration with DCAA",
        ],
      },
    ],
    education: [
      { degree: "M.S. Acquisition & Contract Management", school: "Florida Institute of Technology", period: "2011 – 2013" },
      { degree: "B.S. Business Administration – Finance", school: "University of Illinois Urbana-Champaign", period: "2006 – 2010" },
    ],
    skills: [
      { category: "Acquisition", items: ["FAR/DFARS", "Cost/Price Analysis", "Source Selection", "OTA Agreements", "IDIQ Structures", "Contract Administration"] },
      { category: "Systems", items: ["Procurement Desktop Defense (PD2)", "EDA", "FPDS-NG", "eSRS", "SAM.gov", "PRISM"] },
      { category: "Specialty", items: ["IT Acquisitions", "Cost-Reimbursement Contracts", "Sole-Source Justification", "DCAA Audit Liaison"] },
    ],
    certifications: [
      "FAC-C Professional (Level III)",
      "DAWIA Contracting – Level III",
      "Project Management Professional (PMP)",
      "Secret Clearance (Active)",
    ],
  },
};

const publicHealthOfficer: ResumeExample = {
  id: "gov-public-health",
  sector: "Government",
  role: "Public Health Officer",
  atsScore: 91,
  template: "sidebar",
  accent: "#065f46",
  data: {
    name: "Dr. Amara Diallo",
    title: "Public Health Officer – Epidemiology & Disease Control",
    email: "a.diallo@publichealth.gov",
    phone: "(202) 441-6620",
    location: "Washington, DC",
    linkedin: "linkedin.com/in/amaradiallo",
    summary:
      "Public health professional and physician with 12 years in epidemiology, infectious disease surveillance, and emergency preparedness at local, state, and federal levels. Led COVID-19 response operations for a jurisdiction of 1.2M residents.",
    experience: [
      {
        company: "DC Department of Health",
        role: "Deputy Public Health Officer – Epidemiology",
        period: "Apr 2018 – Present",
        location: "Washington, DC",
        bullets: [
          "Directed COVID-19 response for 1.2M residents: coordinated 14 vaccination sites administering 420,000+ doses",
          "Designed disease surveillance system integrating 22 data sources, reducing reporting lag from 7 days to 18 hours",
          "Led interdisciplinary team of 28 epidemiologists, nurses, and data analysts during 3 concurrent outbreak responses",
          "Authored 15 epidemiological reports cited by CDC and published in MMWR",
        ],
      },
      {
        company: "CDC – Epidemic Intelligence Service",
        role: "EIS Officer",
        period: "Jul 2014 – Apr 2018",
        location: "Atlanta, GA",
        bullets: [
          "Investigated 6 foodborne illness outbreaks across 4 states; authored FDA regulatory guidance memo",
          "Deployed to West Africa during Ebola response (2014–15); trained 120 contact tracers",
        ],
      },
    ],
    education: [
      { degree: "M.P.H. Epidemiology", school: "Johns Hopkins Bloomberg School of Public Health", period: "2012 – 2014" },
      { degree: "M.D.", school: "Howard University College of Medicine", period: "2006 – 2010" },
    ],
    skills: [
      { category: "Epidemiology", items: ["Disease Surveillance", "Outbreak Investigation", "Contact Tracing", "SaTScan", "ArcGIS"] },
      { category: "Data", items: ["R", "SAS", "Epi Info", "REDCap", "CDC NNDSS"] },
    ],
    certifications: ["Physician License – DC & Maryland", "CDC EIS Alumni", "FEMA ICS 100/200/300/400/700/800"],
  },
};

/* ──────────────────────────── CONSTRUCTION (extra) ──────────────────────────── */

const siteForeman: ResumeExample = {
  id: "const-foreman",
  sector: "Construction",
  role: "Construction Foreman",
  atsScore: 89,
  template: "minimal",
  accent: "#92400e",
  data: {
    name: "Rob Castillo",
    title: "General Construction Foreman – Commercial",
    email: "r.castillo@constructionmail.com",
    phone: "(602) 773-2241",
    location: "Phoenix, AZ",
    summary:
      "Experienced construction foreman with 14 years overseeing commercial, industrial, and multi-family residential projects up to $28M. Expert in crew supervision, quality control, OSHA compliance, and schedule management. Zero lost-time safety incidents in 10 years.",
    experience: [
      {
        company: "DPR Construction",
        role: "General Foreman",
        period: "Mar 2016 – Present",
        location: "Phoenix, AZ",
        bullets: [
          "Supervised 45-person crew on $28M healthcare facility build; delivered 3 weeks ahead of schedule",
          "Maintained zero lost-time incidents across 210,000+ labor hours over 6 projects",
          "Coordinated subcontractor scheduling for electrical, plumbing, and mechanical scopes — 98% on-time milestone completion",
          "Reduced material waste 18% through improved staging, cut-list planning, and crew training",
        ],
      },
      {
        company: "Whiting-Turner Contracting",
        role: "Lead Carpenter / Working Foreman",
        period: "Jun 2010 – Mar 2016",
        location: "Scottsdale, AZ",
        bullets: [
          "Promoted from journeyman carpenter to working foreman within 2 years",
          "Completed $8M retail renovation project 11 days under schedule with no punch-list carry-overs",
        ],
      },
    ],
    education: [
      { degree: "A.A.S. Construction Management", school: "Rio Salado College", period: "2009 – 2011" },
    ],
    skills: [
      { category: "Technical", items: ["Blueprint Reading", "CPM Scheduling", "Concrete Forming", "Steel Framing", "Quality Control"] },
      { category: "Tools", items: ["Procore", "MS Project", "Bluebeam", "AutoCAD (basic)", "Primavera P6"] },
      { category: "Safety", items: ["OSHA 30", "First Aid/CPR", "Fall Protection", "Confined Space Entry", "Hazcom GHS"] },
    ],
    certifications: ["OSHA 30-Hour – Construction", "ACI Concrete Field Testing Technician", "NCCER Core Curriculum"],
  },
};

const architectEngineer: ResumeExample = {
  id: "const-architect",
  sector: "Construction",
  role: "Licensed Architect",
  atsScore: 92,
  template: "sidebar",
  accent: "#374151",
  data: {
    name: "Isabelle Moreau",
    title: "Licensed Architect – Commercial & Mixed-Use",
    email: "i.moreau@architectstudio.com",
    phone: "(312) 660-4411",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/isabellemoreau",
    summary:
      "Registered architect with 11 years designing commercial, mixed-use, and civic projects valued up to $95M. Expert in design development, construction documentation, BIM coordination, and leading multidisciplinary design teams through all phases from concept to occupancy.",
    experience: [
      {
        company: "Gensler",
        role: "Senior Project Architect",
        period: "Jul 2017 – Present",
        location: "Chicago, IL",
        bullets: [
          "Led design and documentation team of 9 for $95M mixed-use tower (325 units, 28K SF retail) from SD through CA",
          "Coordinated BIM model with MEP and structural consultants across 140 Revit sheets — zero RFI rework > $50K",
          "Obtained zoning variances and landmark approvals from City of Chicago Planning Commission",
          "Mentored 4 junior architects through IDP and AXP hours; 3 passed Architect Registration Exams",
        ],
      },
      {
        company: "HOK",
        role: "Project Architect",
        period: "Sep 2013 – Jul 2017",
        location: "Chicago, IL",
        bullets: [
          "Delivered construction documents for $34M federal courthouse annex; passed GSA design peer review",
          "Managed client relationship and weekly OAC meetings for 3 concurrent institutional projects",
        ],
      },
    ],
    education: [
      { degree: "M.Arch.", school: "Illinois Institute of Technology", period: "2010 – 2013", note: "Thesis: Adaptive Reuse in Post-Industrial Corridors" },
      { degree: "B.S. Architectural Studies", school: "University of Michigan", period: "2006 – 2010", note: "Magna Cum Laude" },
    ],
    skills: [
      { category: "Design", items: ["Revit", "AutoCAD", "Rhino + Grasshopper", "SketchUp", "Enscape", "Adobe Creative Suite"] },
      { category: "Process", items: ["BIM Coordination", "Construction Administration", "Specs Writing", "ADA Compliance", "LEED Documentation"] },
    ],
    certifications: ["Registered Architect – Illinois (NCARB)", "LEED AP BD+C", "OSHA 10-Hour – Construction"],
  },
};

/* ──────────────────────────── SOCIAL SERVICES (extra) ──────────────────────────── */

const counselor: ResumeExample = {
  id: "ss-counselor",
  sector: "Social Services",
  role: "Licensed Counselor",
  atsScore: 90,
  template: "classic",
  accent: "#7c3aed",
  data: {
    name: "Denise Lambert",
    title: "Licensed Professional Counselor – Trauma & Behavioral Health",
    email: "d.lambert@counselingpro.com",
    phone: "(503) 448-2213",
    location: "Portland, OR",
    summary:
      "Licensed Professional Counselor with 9 years providing individual, group, and family therapy in community mental health and private-practice settings. Specializes in trauma-informed care, DBT, and co-occurring substance use disorders. Bilingual (English/Spanish).",
    experience: [
      {
        company: "Central City Concern",
        role: "Senior Licensed Counselor",
        period: "Aug 2018 – Present",
        location: "Portland, OR",
        bullets: [
          "Carries caseload of 30 clients with complex trauma, PTSD, and co-occurring SUD diagnoses",
          "Reduced 90-day treatment dropout rate from 38% to 19% through motivational interviewing protocol",
          "Led weekly DBT skills group for 12 clients; 78% of participants reported reduced crisis episodes at 6 months",
          "Supervised 3 LPC interns and completed 180 hours of documented supervision",
        ],
      },
      {
        company: "Outside In Youth Services",
        role: "Youth Counselor",
        period: "Jun 2015 – Aug 2018",
        location: "Portland, OR",
        bullets: [
          "Provided crisis intervention and short-term counseling to homeless youth aged 13–24",
          "Coordinated with housing, legal aid, and medical partners to secure stable services for 40+ youth annually",
        ],
      },
    ],
    education: [
      { degree: "M.S. Clinical Mental Health Counseling", school: "Lewis & Clark College", period: "2013 – 2015", note: "GPA 3.94" },
      { degree: "B.A. Psychology", school: "University of Oregon", period: "2009 – 2013" },
    ],
    skills: [
      { category: "Clinical", items: ["Trauma-Informed Care", "DBT", "CBT", "Motivational Interviewing", "EMDR", "Crisis Intervention"] },
      { category: "Systems", items: ["Epic (Behavioral Health)", "Credible EHR", "Kipu", "Therapy Notes"] },
      { category: "Languages", items: ["English (Native)", "Spanish (Fluent)"] },
    ],
    certifications: ["Licensed Professional Counselor (LPC) – Oregon", "National Certified Counselor (NCC)", "Certified Clinical Trauma Professional (CCTP)"],
  },
};

/* ──────────────────────────── ACCOUNTING (extra) ──────────────────────────── */

const auditManager: ResumeExample = {
  id: "acc-audit",
  sector: "Accounting",
  role: "Audit Manager",
  atsScore: 93,
  template: "minimal",
  accent: "#1e3a5f",
  data: {
    name: "Patrick O'Brien",
    title: "Audit Manager – External Audit & Assurance",
    email: "p.obrien@cpamail.com",
    phone: "(212) 554-3319",
    location: "New York, NY",
    linkedin: "linkedin.com/in/patrickobrien",
    summary:
      "CPA and Audit Manager with 10 years at Big 4 and regional firms. Leads complex public-company audits in financial services, insurance, and technology sectors. Expert in US GAAP, PCAOB standards, and risk-based audit methodology. Promoted to Manager two years ahead of peer cohort.",
    experience: [
      {
        company: "Deloitte",
        role: "Audit Manager",
        period: "Sep 2020 – Present",
        location: "New York, NY",
        bullets: [
          "Manages 4 concurrent public-company audit engagements with combined revenues of $8.4B",
          "Leads teams of 6–14 staff and senior associates through planning, fieldwork, and SEC filing deadlines",
          "Identified $14M revenue recognition error during interim fieldwork, preventing material misstatement in 10-K",
          "Developed risk-assessment playbook adopted across the Northeast financial-services practice",
        ],
      },
      {
        company: "KPMG",
        role: "Audit Senior Associate",
        period: "Aug 2014 – Sep 2020",
        location: "New York, NY",
        bullets: [
          "Led substantive testing for insurance holding company with $12B in total assets",
          "Supervised and reviewed work of 3–6 staff; zero manager-level review notes in final 2 years",
        ],
      },
    ],
    education: [
      { degree: "M.S. Accounting", school: "New York University – Stern", period: "2013 – 2014" },
      { degree: "B.S. Accounting", school: "Villanova University", period: "2009 – 2013", note: "Beta Alpha Psi | GPA 3.9" },
    ],
    skills: [
      { category: "Audit", items: ["US GAAP", "PCAOB AS", "SOX 302/404", "ISA Standards", "Revenue Recognition (ASC 606)", "Lease Accounting (ASC 842)"] },
      { category: "Tools", items: ["Deloitte Aura", "Workiva", "CaseWare", "TeamMate Analytics", "ACL/Galvanize"] },
    ],
    certifications: ["Certified Public Accountant (CPA) – New York", "Chartered Financial Analyst (CFA) – Level II Candidate"],
  },
};

const taxSpecialist: ResumeExample = {
  id: "acc-tax",
  sector: "Accounting",
  role: "Tax Specialist",
  atsScore: 91,
  template: "classic",
  accent: "#166534",
  data: {
    name: "Hannah Kowalski",
    title: "Senior Tax Specialist – Corporate & International",
    email: "h.kowalski@taxmail.com",
    phone: "(312) 887-4451",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/hannahkowalski",
    summary:
      "CPA with 8 years of domestic and international tax compliance and planning for multinational corporations. Expert in U.S. corporate income tax, transfer pricing, and TCJA reforms. Saved clients $18M+ in cumulative tax liability through proactive planning strategies.",
    experience: [
      {
        company: "PwC",
        role: "Senior Tax Manager – International",
        period: "Jan 2020 – Present",
        location: "Chicago, IL",
        bullets: [
          "Manages US international tax compliance (Forms 5471, 8858, 1118) for 6 multinational clients with 40–120 foreign entities",
          "Designed FDII and GILTI planning structure saving $5.8M in federal tax liability for manufacturing client",
          "Led Pillar Two (15% global minimum tax) readiness assessment for $4B-revenue client across 30 jurisdictions",
          "Supervises team of 5; delivered 100% on-time filing record across all client engagements for 3 years",
        ],
      },
      {
        company: "Ernst & Young (EY)",
        role: "Tax Senior Associate",
        period: "Sep 2016 – Jan 2020",
        location: "Chicago, IL",
        bullets: [
          "Prepared and reviewed consolidated federal and state returns for 8 corporate clients ($200M–$2B revenue)",
          "Identified $2.3M R&D tax credit opportunity through analysis of client engineering project documentation",
        ],
      },
    ],
    education: [
      { degree: "M.S. Taxation", school: "DePaul University", period: "2015 – 2016" },
      { degree: "B.S. Accounting", school: "University of Illinois Chicago", period: "2011 – 2015", note: "GPA 3.88 | Accounting honors" },
    ],
    skills: [
      { category: "Tax", items: ["Corporate Federal Tax", "International Tax", "Transfer Pricing", "TCJA", "GILTI/FDII", "State & Local Tax"] },
      { category: "Systems", items: ["OneSource", "CorpTax", "Thomson Reuters ONESOURCE", "BNA Tax Planner", "SAP"] },
    ],
    certifications: ["Certified Public Accountant (CPA) – Illinois", "Enrolled Agent (EA) – IRS"],
  },
};

/* ──────────────────────────── MAINTENANCE & REPAIR (extra) ──────────────────────────── */

const electrician: ResumeExample = {
  id: "maint-electrician",
  sector: "Maintenance & Repair",
  role: "Licensed Electrician",
  atsScore: 90,
  template: "minimal",
  accent: "#d97706",
  data: {
    name: "Carlos Mendez",
    title: "Journeyman Electrician – Commercial & Industrial",
    email: "c.mendez@electricianpro.com",
    phone: "(713) 884-2203",
    location: "Houston, TX",
    summary:
      "Licensed journeyman electrician with 10 years installing, maintaining, and troubleshooting electrical systems in commercial, industrial, and oil-and-gas facilities. Expert in NEC code compliance, PLC controls, and medium-voltage distribution up to 15kV.",
    experience: [
      {
        company: "Turner Industries Group",
        role: "Journeyman Electrician",
        period: "Mar 2017 – Present",
        location: "Houston, TX",
        bullets: [
          "Installed and commissioned 480V MCC and 13.8kV switchgear for $120M petrochemical expansion project",
          "Troubleshot and repaired Allen-Bradley PLC I/O failures, reducing production downtime by 34% at client facility",
          "Completed conduit, wire pulling, and termination scopes for 80,000 SF Class I Div 1 hazardous area",
          "Zero safety incidents across 22,000+ field hours; OSHA safety champion for crew of 14",
        ],
      },
      {
        company: "ABM Industries",
        role: "Electrician Apprentice → Journeyman",
        period: "Jun 2014 – Mar 2017",
        location: "Houston, TX",
        bullets: [
          "Completed 8,000-hour IBEW apprenticeship; graduated top of class in theory and code",
          "Maintained lighting, HVAC controls, and emergency systems across portfolio of 6 commercial properties",
        ],
      },
    ],
    education: [
      { degree: "IBEW Apprenticeship – Electrical", school: "NJATC / Houston Community College", period: "2014 – 2018" },
    ],
    skills: [
      { category: "Electrical", items: ["NEC 2023", "480V/MV Distribution", "PLC Controls", "Motor Starters/VFDs", "Conduit/Raceway", "Cable Tray"] },
      { category: "Tools", items: ["Megger", "Fluke Multimeter", "Thermal Imager", "AutoCAD (read)", "Bluebeam"] },
    ],
    certifications: ["Journeyman Electrician – Texas TDLR", "OSHA 30-Hour – Construction", "NFPA 70E Arc Flash Safety", "First Aid/CPR"],
  },
};

/* ──────────────────────────── EXPORTS ──────────────────────────── */

export const RESUME_EXAMPLES: ResumeExample[] = [
  softwareEngineer,
  civilEngineer,
  mechanicalEngineer,
  electricalEngineer,
  teacher,
  universityAdmin,
  principalLeader,
  instructionalDesigner,
  govPolicy,
  lawEnforcement,
  cityManager,
  foreignServiceOfficer,
  contractingOfficer,
  publicHealthOfficer,
  registeredNurse,
  physicalTherapist,
  pharmacist,
  attorney,
  paralegal,
  corporateCounsel,
  retailManager,
  buyingMerchandiser,
  storeManager,
  customerServiceRep,
  maintenanceTech,
  hvacTech,
  electrician,
  financialAnalyst,
  investmentBanker,
  cfo,
  marketingManager,
  contentStrategist,
  seoSpecialist,
  itSupportSpecialist,
  dataEngineer,
  cybersecurityAnalyst,
  productManager,
  constructionPM,
  siteForeman,
  architectEngineer,
  socialWorker,
  counselor,
  accountant,
  auditManager,
  taxSpecialist,
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

export const RESUME_SLUG_MAP: Record<string, string> = {
  "software-engineer": "eng-software",
  "civil-engineer": "eng-civil",
  "mechanical-engineer": "eng-mechanical",
  "electrical-engineer": "eng-electrical",
  "teacher": "edu-teacher",
  "university-administrator": "edu-admin",
  "school-principal": "edu-principal",
  "instructional-designer": "edu-instructional",
  "government-policy-analyst": "gov-policy",
  "law-enforcement-officer": "gov-law-enforcement",
  "gov-law-enforcement": "gov-law-enforcement",
  "city-manager": "gov-city-manager",
  "foreign-service-officer": "gov-foreign-service",
  "federal-contracting-officer": "gov-contracting",
  "contracting-officer": "gov-contracting",
  "public-health-officer": "gov-public-health",
  "registered-nurse": "health-nurse",
  "nurse": "health-nurse",
  "physical-therapist": "hc-physicaltherapist",
  "clinical-pharmacist": "hc-pharmacist",
  "pharmacist": "hc-pharmacist",
  "attorney": "legal-attorney",
  "paralegal": "legal-paralegal",
  "corporate-counsel": "legal-corporate-counsel",
  "retail-manager": "retail-manager",
  "buying-merchandiser": "retail-buyer",
  "store-manager": "retail-store-manager",
  "customer-service-representative": "retail-customer-service",
  "maintenance-technician": "maint-tech",
  "hvac-technician": "maint-hvac",
  "electrician": "maint-electrician",
  "financial-analyst": "fin-analyst",
  "investment-banking-analyst": "fin-investment-banker",
  "chief-financial-officer": "fin-cfo",
  "marketing-manager": "mkt-manager",
  "content-strategist": "mkt-content",
  "seo-specialist": "mkt-seo",
  "it-support-specialist": "it-support",
  "data-engineer": "it-data-engineer",
  "cybersecurity-analyst": "it-cybersecurity",
  "product-manager": "it-product-manager",
  "construction-project-manager": "con-pm",
  "construction-foreman": "const-foreman",
  "licensed-architect": "const-architect",
  "social-worker": "social-worker",
  "licensed-counselor": "ss-counselor",
  "accountant": "acc-cpa",
  "audit-manager": "acc-audit",
  "tax-specialist": "acc-tax",
  "high-school-student": "edu-teacher",
  "internship": "eng-software",
  "student": "edu-teacher",
};
