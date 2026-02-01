// ========================================
// i18n Translation System
// ========================================

const translations = {
    en: {
        // Navigation
        nav_features: "Methodology",
        nav_technology: "System Architecture",
        nav_clinical: "Clinical Protocols",
        nav_researchers: "For Researchers",
        nav_download: "Download",
        nav_logo_alt: "Renal Companion Logo",
        nav_toggle_aria: "Toggle navigation",
        nav_lang_en_aria: "Switch to English",
        nav_lang_ar_aria: "Switch to Arabic",
        about_whatsapp_aria: "Contact via WhatsApp",
        about_linkedin_aria: "Connect on LinkedIn",
        nav_brand_name: "RenalCompanion",
        nav_home: "Home",

        // Hero Section
        hero_badge_kdoqi: "KDOQI 2024 Compliant",
        hero_badge_offline: "Local-First Architecture",
        hero_badge_ai: "CDSS Integrated (Inference Engine)",
        hero_title_main: "Precision Clinical Informatics for",
        hero_title_highlight: "Chronic Kidney Disease Management",
        hero_subtitle: "Synthesized against KDOQI 2024 Guidelines | Validated via Prospective Informatics Protocols | Peer-Reviewed Scientific Logic",
        hero_btn_download: "Deploy for Android",
        hero_btn_docs: "Clinical Protocol & Methodology",
        hero_stat_foods: "Informatics Food Index",
        hero_stat_nutrients: "Bio-markers Tracked",
        hero_stat_stages: "CKD Cohort Stages",
        hero_stat_1_suffix: "M",
        hero_stat_2_suffix: "%",
        hero_stat_3_suffix: "x",
        hero_mockup_alt: "Renal Companion App Interface",
        hero_download_icon_aria: "Download icon",

        // Clinical Challenge Section - ENHANCED
        problem_title: "The Global Health Crisis",
        problem_subtitle: "Addressing the systemic failure in scalable renal care",

        // Statistics
        stat_1_val: "850M",
        stat_1_desc: "Individual burden of Chronic Kidney Disease (Global)",
        stat_1_cite: "ISN/Global Kidney Health Atlas",
        stat_2_val: "60%",
        stat_2_desc: "Dialysis patients failing to maintain dietary compliance",
        stat_2_cite: "NIH/PubMed",
        stat_3_val: "3.5x",
        stat_3_desc: "Increased mortality risk from untreated hyperkalemia",
        stat_3_cite: "AHA/Frontiers",

        // Problems
        prob_1_title: "Informatics Overlook",
        prob_1_desc: "Standard nutritional databases fail to detect bio-unavailable Phosphorus additives.",
        prob_1_impact: "Clinical Risk: >1000mg occult Phosphorus/day",

        prob_2_title: "Static Protocols",
        prob_2_desc: "One-size-fits-all limits fail CKD progression",
        prob_2_impact: "Analysis: 40% of patients exceed safety limits",

        prob_3_title: "Lab Disconnect",
        prob_3_desc: "No integration with real-time lab results",
        prob_3_impact: "Analysis: Critical latencies in dietary adjustment",

        prob_4_title: "Infrastructure Inertia",
        prob_4_desc: "Absence of 'Offline-First' logic creates care gaps in low-resource clinics.",
        prob_4_impact: "Health Inequity: Critical care gaps in digital-desert clinics",

        problem_heading: "The Clinical Gap",

        // Solution Section
        solution_title: "The Renal Companion Framework",
        solution_subtitle: "A deterministic informatics architecture for precision nephrology",
        solution_card1_title: "Multi-variate Clinical Guardrails",
        solution_card1_desc: "Dynamic restriction protocols synthesized from CKD progression stage, dialysis modality, anthropometric data, and longitudinal lab results.",
        solution_card1_feat1: "KDOQI-standard compliance",
        solution_card1_feat2: "Modified AjBW calculations",
        solution_card1_feat3: "Automated lab-correlation",
        solution_card2_title: "Real-World Data Tracking",
        solution_card2_desc: "Synchronous feedback mechanism monitoring nutrient flux against established clinical boundaries. High-accuracy visual adherence signaling.",
        solution_card2_feat1: "11 Critical Bio-markers",
        solution_card2_feat2: "Standardized 2000+ Food Ontology",
        solution_card2_feat3: "PRAL-Metric Acidosis Prevention",
        solution_card3_title: "Murshid: CDSS Engine",
        solution_card3_desc: "Medically-aligned generative inference engine (LLM-based) contextually aware of patient morbidity and nutritional history.",
        solution_card3_feat1: "Clinical RAG Architecture",
        solution_card3_feat2: "Semantic Clinical Mapping",
        solution_card3_feat3: "Guideline-Aligned Reasoning",

        // Features Section
        features_title: "Comprehensive Feature Ecosystem",
        features_subtitle: "Every feature engineered for clinical precision and patient safety",
        features_tab1: "Murshid AI Assistant",
        features_tab2: "Precision Budgeting",
        features_tab3: "Safety Watchdog",
        features_tab4: "Visual Food Intelligence",
        features_tab5: "AI Vision Scanner",
        features_tab6: "Lab Analytics",

        // Interactive Demos
        demo_vis_status_ready: "Tap to Scan",
        demo_vis_status_focusing: "🎯 Focusing...",
        demo_vis_status_captured: "📸 Captured!",
        demo_vis_status_analyzing: "🤖 AI Analyzing...",
        demo_vis_status_recognized: "✅ Banana Recognized!",
        demo_vis_status_quantity: "⚖️ Select Quantity",
        demo_vis_status_success: "🎉 Successfully Logged!",
        demo_vis_detect: "🍌 Banana Detected",
        demo_vis_weight: "120g (Medium)",
        demo_vis_add: "Tap to Add",
        demo_vis_added: "✓ Added to Budget!",
        demo_vis_quantity_label: "Weight",
        demo_ai_name: "Murshid AI",
        demo_ai_status: "Online · Ready to help",
        demo_ai_user_q: "Can I eat a medium banana today?",
        demo_ai_murshid_a: "Based on your <strong>CKD Stage 4</strong> and today's intake of 1200mg Potassium, a medium banana (422mg) would put you at 81% of your daily limit. <strong>Safe to enjoy!</strong>",
        demo_ai_badge: "Contextual Guidance",

        // Murshid AI Reasoning Steps
        demo_ai_step_analyze: "Analyzing medical request...",
        demo_ai_step_profile: "Accessing clinical profile (CKD Stage 4)...",
        demo_ai_step_generate: "Synthesizing KDOQI-compliant response...",
        demo_ai_step_validate: "Validating clinical safety guardrails...",
        demo_nut_search_placeholder: "🔍 Search 2000+ foods...",
        demo_nut_budget: "Daily Potassium Budget",
        demo_nut_food1: "🍗 Chicken Breast (Grilled)",
        demo_nut_food2: "🥬 Spinach (Cooked)",
        demo_nut_food3: "🍚 White Rice",
        demo_nut_badge_low: "Low K",
        demo_nut_badge_high: "High K",
        demo_nut_badge_safe: "Safe",
        demo_clin_user_profile: "User Profile<br>(CKD 4, HD)",
        demo_clin_labs: "Lab Results<br>(K: 5.8)",
        demo_clin_engine: "Rule Engine",
        demo_clin_result: "K Limit: 2000mg",
        demo_scan_warning: "⚠️ Protocol Alert: Detected Phosphorus Additive: <strong>Sodium Phosphate</strong>",
        demo_ana_danger_zone: "Danger Zone",

        // Feature Details - Murshid AI
        feat_ai_title: "Murshid: Medically-Aligned Inference",
        feat_ai_desc: "A domain-specialized clinical decision support system utilizing Large Language Models (LLMs) to reason through patient-specific clinical data.",
        feat_ai_h1: "<strong>Medical Guardrails:</strong> Deterministic KDOQI safety mapping",
        feat_ai_h2: "<strong>Bilingual CDSS:</strong> Advanced processing of regional clinical dialects",
        feat_ai_h3: "<strong>RAG-Architecture:</strong> Dynamic injection of patient bio-metrics",
        feat_ai_h4: "<strong>Pedagogical Logic:</strong> Translating complex data for patient literacy",

        // Feature Details - Nutrition
        feat_nut_title: "Precision Nutritional Budgeting",
        feat_nut_desc: "Move beyond simple logging. Manage your daily allowance of Potassium, Sodium, and Phosphorus with sub-second precision.",
        feat_nut_h1: "<strong>Real-Time Budgeting:</strong> Visual counters for all 11 critical nutrients",
        feat_nut_h2: "<strong>Arabic-First Search:</strong> Instant fuzzy matching for Middle Eastern diets",
        feat_nut_h3: "<strong>Automatic Conversion:</strong> Cups, grams, and pieces handled instantly",
        feat_nut_h4: "<strong>PRAL Scoring:</strong> Visual acid load triggers to prevent acidosis",
        feat_nut_badge_index: "Sub-Second Indexing",

        // Feature Details - Clinical
        feat_clin_title: "Elite Clinical Safety Watchdog",
        feat_clin_desc: "An autonomous inference engine that monitors every entry against established renal protocols.",
        feat_clin_ex_title: "Rule Logic: Potassium Safety Protocol",
        feat_clin_ex_expl: "The system triggers proactive overrides when lab results deviate from baseline safe zones.",
        feat_clin_h1: "<strong>Dynamic Logic:</strong> Rules adapt to your CKD-EPI stage changes",
        feat_clin_h2: "<strong>Lab Integration:</strong> Alerts trigger when diet conflicts with recent labs",
        feat_clin_h3: "<strong>Medical Precision:</strong> Corrected Calcium and AjBW formulas included",

        // Feature Details - Visual Recognition
        feat_vis_title: "Visual Food Intelligence",
        feat_vis_desc: "Recognize fruits, vegetables, and complex dishes instantly. Just point your camera and let Murshid do the math.",
        feat_vis_h1: "<strong>Real-Time Recognition:</strong> Powered by Google Gemini-Vision",
        feat_vis_h2: "<strong>Precision Portions:</strong> Identify items and adjust weights instantly",
        feat_vis_h3: "<strong>Instant Logging:</strong> Add recognized items directly to your budget",
        feat_vis_h4: "<strong>Cultural Awareness:</strong> Optimized for Middle Eastern food items",

        // Feature Details - Scanner
        feat_scan_title: "Computer Vision Label Scanner",
        feat_scan_desc: "Gemini-powered OCR that detects hidden phosphorus additives—the silent killers in CKD.",
        feat_scan_h1: "Additive Detection: Flags Sodium Phosphate, Dipotassium Phosphate",
        feat_scan_h2: "Bilingual OCR: Reads Arabic and English nutrition labels",
        feat_scan_h3: "Structured Parsing: Converts images to FoodItem entities",
        feat_scan_h4: "Instant Warning: Red alert if phosphorus additives detected",
        feat_scan_stat: "of processed foods contain unlisted phosphate additives",

        // Feature Details - Analytics
        feat_ana_title: "Longitudinal Lab Analytics",
        feat_ana_desc: "Track lab trends over time to visualize your kidney health trajectory.",
        feat_ana_h1: "Interactive Charts: Zoom, pan, and analyze multi-month trends",
        feat_ana_h2: "Correlation Insights: See how diet affects Potassium/Phosphorus levels",
        feat_ana_h3: "Export for Clinicians: PDF reports for doctor visits",
        feat_ana_h4: "Predictive Alerts: Warnings when approaching dangerous zones",
        feat_ana_chart: "Serum Potassium Trend (6 months)",

        // Technology Section
        tech_title: "Built on Modern, Battle-Tested Technology",
        tech_subtitle: "Enterprise-grade architecture meets clinical rigor",
        tech_clean_title: "Clean Architecture",
        tech_clean_desc: "Strict separation of concerns: Presentation → Domain → Data. Testable, maintainable, scalable.",
        tech_isar_title: "Isar NoSQL",
        tech_isar_desc: "Lightning-fast local database. 10x faster than SQLite. Sync-ready for future cloud integration.",
        tech_bloc_title: "BLoC State Management",
        tech_bloc_desc: "Reactive streams with flutter_bloc. Predictable state, zero race conditions.",
        tech_gemini_title: "Google Gemini 3 Pro",
        tech_gemini_desc: "State-of-the-art AI for chat and vision. Context-aware, medically informed responses.",
        arch_title: "System Architecture",
        arch_pres_title: "Presentation Layer",
        arch_pres_desc: "Flutter UI · BLoC State · Responsive Widgets",
        arch_dom_title: "Domain Layer",
        arch_dom_desc: "Use Cases · Entities · Business Rules",
        arch_data_title: "Data Layer",
        arch_data_desc: "Repositories · Isar DB · Gemini API",
        arch_note: "<strong>Dependency Rule:</strong> Inner layers never depend on outer layers. Domain logic remains pure and framework-independent.",
        code_title: "Clinical Formula in Action",
        code_caption: "Validated against KDOQI 2024 guidelines. Precision: ±2 mL/min/1.73m²",

        // Clinical Validation
        val_title: "Clinically Validated, Research-Grade",
        val_subtitle: "Built on evidence-based guidelines, suitable for IRB submission",
        val_kdoqi_title: "KDOQI 2020 Guidelines",
        val_kdoqi_desc: "All nutrient limits and calculations strictly adhere to Kidney Disease Outcomes Quality Initiative standards.",
        val_algo_title: "Medical Algorithms",
        val_algo_list1: "CKD-EPI (2021) - Non-race specific eGFR",
        val_algo_list2: "Adjusted Body Weight (AjBW) - Hamwi modification",
        val_algo_list3: "Corrected Calcium - Serum Albumin calibration",
        val_algo_list4: "PRAL - Net Acid Load potential quantification",
        val_privacy_title: "Data Protection",
        val_privacy_desc: "Offline-first architecture. No PHI transmitted. All data encrypted at rest. GDPR/HIPAA ready.",
        val_research_title: "Designed for Clinical Research",
        val_research_desc: "Renal Companion's architecture and validation make it suitable for inclusion in peer-reviewed studies. Export data as CSV for statistical analysis, cite using our DOI, and leverage our Open Science Data architecture for reproducibility.",
        val_research_btn: "Learn More for Researchers",

        // Researchers Section
        res_export_title: "📊 Open Health Data Initiative",
        res_export_desc: "We facilitate evidence-based research by providing anonymized datasets for academic inquiry into renal nutrition adherence.",
        res_docs_title: "📖 Institutional Data Protocol",
        res_docs_desc: "Renal Companion follows a 3-tier data access framework. Public aggregated reports are open-access, while raw micro-data requires DUA approval.",
        res_irb_title: "🔬 IRB-Ready",
        res_irb_desc: "Privacy-first design with no cloud sync. Suitable for hospital environments and ethics board approval.",
        res_collab_title: "🤝 Academic Collaboration",
        res_collab_desc: "Partner with our team for custom data collection protocols and joint publications.",
        res_cite_title: "Informatics Research Initiative",
        res_cite_subtitle: "Proprietary Logic. Open Evidence.",
        res_cite_text: "Renal Companion balances the protection of its advanced inference logic with the moral imperative to liberate clinical evidence for the global research community.",
        res_btn_portal: "Access Research Portal",
        // Download Section
        download_title: "Clinical Deployment",
        download_subtitle: "Research-Grade | Offline-First | Privacy-Centric Architecture",
        download_heading: "Download APK",
        download_version: "Version:",
        download_size: "Size:",
        download_requirements: "Requirements:",
        download_btn: "Download for Android",
        download_guide_title: "Installation Guide",
        download_guide_1: "Press the 'Download APK' button above",
        download_guide_2: "Once the download completes, open the APK file",
        download_guide_3: "Enable 'Install from Unknown Sources' if prompted",
        download_guide_4: "Tap 'Install' and wait for the process to finish",
        download_guide_5: "Open Renal Companion and start your journey!",
        download_info_version: "Version: 1.0.0 (Beta)",
        download_info_date: "Release Date: Jan 1, 2026",
        download_info_req: "Requires: Android 5.0+",
        download_secure_text: "Secure & Direct Download Link",
        download_cta_main: "Download APK",
        download_steps_title: "Installation Steps",
        download_qr_title: "Scan to Download",
        download_qr_caption: "QR Code for mobile download",

        // Footer & Copyright
        footer_about_title: "About Renal Companion",
        footer_about_text: "A clinical-grade nutrition management platform for Chronic Kidney Disease patients, built on KDOQI guidelines and powered by modern AI.",
        footer_disclaimer: "Medical Disclaimer:",
        footer_disclaimer_text: "This app is for informational purposes only and does not replace professional medical advice.",
        footer_resources: "Resources",
        footer_resources_docs: "Clinical Documentation",
        footer_resources_download: "Download APK",
        footer_researchers: "For Researchers",
        footer_researchers_citation: "Citation Guide",
        footer_researchers_arch: "Technical Architecture",
        footer_researchers_contact: "Research Inquiries",
        footer_legal: "Legal",
        footer_legal_privacy: "Privacy Policy",
        footer_legal_terms: "Terms of Use",
        footer_legal_license: "License Treaty & Usage",
        footer_brand_name: "RenalCompanion",

        // About Page Additional
        about_academic_validation: "Academic Validation",
        about_expertise_title: "Core Expertise",
        about_supervision_title: "Academic Supervision",
        about_contact_btn: "Get in Touch",

        // Reports Page Additional
        reports_page_title: "Renal Companion | Global Nutrition Index",
        footer_tagline: "Built with precision for CKD patient care.",

        // Meta Tags
        // Meta Tags & Branding
        meta_title: "Renal Companion | Your Digital Guide for Kidney Health & Nutrition",
        meta_description: "Empowering renal patients with smart tools for meal planning, lab tracking, and medication management. Developed by Dr. Feras Swed to simplify kidney care.",
        meta_og_title: "Renal Companion - Digital Health for Kidney Patients",
        meta_og_description: "A clinical-grade nutrition platform developed by Dr. Feras Swed, bridging medical accuracy with advanced software engineering.",

        // Secondary Pages (About & Privacy)
        nav_home: "Home",
        nav_about: "About Us",
        about_hero_title: "Pioneering the Future of",
        about_hero_highlight: "Renal Nutrition",
        about_hero_subtitle: "Bridging the gap between advanced medical science and cutting-edge software engineering.",
        about_dev_badge: "The Visionary & Developer",
        about_dev_name: "Dr. Feras Ezz-Addin Suwaid",
        about_dev_role: "Senior Full-Stack Architect & Clinical Nutritionist",
        about_dev_role_short: "Health-Tech Solutions Architect",
        about_dev_title1: "Therapeutic Nutrition Specialist",
        about_dev_title2: "Advanced Medical Software Engineer",
        about_dev_title3: "Medical Researcher",
        about_bio_title: "The Synergy of Code & Cure",
        about_bio_text: "Renal Companion is the result of a unique dual-expertise. Dr. Feras Suwaid combines a formal clinical background in Therapeutic Nutrition (Queen Arwa University) with senior-level software architecture skills. Having architected complex ERP systems and Food Safety protocols for major organizations, he now applies 'Clean Architecture' principles to solve critical healthcare challenges.",
        about_exp_coding_title: "Clinical Informatics",
        about_exp_coding_desc: "Specialized in medical system architecture, utilizing Flutter and BLoC for high-fidelity, local-first data processing.",
        about_exp_medical_title: "Nephro-pathophysiology",
        about_exp_medical_desc: "Advanced mastery of KDOQI standards, mineral-bone disease metrics, and personalized electrolyte restriction protocols.",
        about_exp_research_title: "Prospective Analysis",
        about_exp_research_desc: "Designing and validating computational tools to monitor clinical adherence and longitudinal health outcomes in chronic disease cohorts.",
        about_supervision_label: "Under Academic Supervision of",
        contact_whatsapp: "Chat on WhatsApp",
        contact_linkedin: "Connect on LinkedIn",
        about_supervision_title: "Academic Supervision",
        about_supervision_subtitle: "Validated by top-tier academic leadership",
        about_supervisor_name: "Prof. Dr. Najeb Al-Saremi",
        about_supervisor_role: "Dean of the College of Clinical Nutrition",
        about_supervisor_uni: "Sana'a University",
        about_supervisor_desc: "Ensuring rigorous adherence to the latest clinical standards and academic excellence in every nutritional protocol implemented.",

        // Privacy Policy
        privacy_title: "Privacy Policy & Data Usage",
        privacy_subtitle: "Transparency and security at the core of your care.",
        privacy_last_updated: "Last Updated: January 2026",

        privacy_core_title: "1. Offline-First & No PII Collection",
        privacy_core_text_1: "Renal Companion operates on a strict <strong>Offline-First</strong> architecture. This means your data primarily resides on your local device.",
        privacy_core_text_2: "We <strong>NEVER</strong> collect, store, or transmit Personal Identifiable Information (PII) such as your name, phone number, email address, or precise location. Your identity remains completely anonymous to our servers.",

        privacy_data_title: "2. Collection of Anonymized Medical Data",
        privacy_data_text: "To improve clinical outcomes and support nephrology research, we collect <strong>strictly anonymized</strong> medical usage data. By using this application, you consent to the collection of:",
        privacy_data_list_1: "<strong>Nutritional Logs:</strong> Types of food consumed, quantities, and nutrient breakdown (Potassium, Phosphorus, Sodium).",
        privacy_data_list_2: "<strong>Lab Results:</strong> Values for eGFR, Creatinine, Albumin, and electrolytes to calibrate clinical algorithms.",
        privacy_data_list_3: "<strong>App Usage Patterns:</strong> Feature interaction metrics to improve user experience.",
        privacy_data_consent_label: "Research Consent:",
        privacy_data_consent_text: "By using Renal Companion, you explicitly grant the development team permission to use this anonymized, aggregated data for scientific research, academic publications, and statistical analysis aimed at improving CKD patient care.",

        privacy_ai_title: "3. AI & Third-Party Processing",
        privacy_ai_text: "To provide advanced features like the 'Murshid' Smart Assistant and Vision Scanner, specific data snippets are processed by third-party providers:",
        privacy_ai_list_1: "<strong>Google Gemini AI:</strong> When you use the chat assistant or label scanner, anonymized text queries and image data are sent to Google's generative AI servers for processing.",
        privacy_ai_disclaimer: "We do not share your full medical history with these providers. Only the immediate context required to answer your question or scan a product is transmitted ephemerally.",

        privacy_legal_title: "4. Medical Disclaimer & Liability",
        privacy_legal_text: "Renal Companion is a support tool, not a medical device. While we adhere to KDOQI guidelines:",
        privacy_legal_list_1: "<strong>No Doctor-Patient Relationship:</strong> Using this app does not create a medical relationship.",
        privacy_legal_list_2: "<strong>Accuracy:</strong> While we strive for accuracy, food databases and lab interpretations can vary. Always verify critical decisions with your healthcare provider.",

        privacy_contact_title: "Contact Us",
        privacy_contact_text: "For privacy-specific inquiries regarding your data rights:",

        // Researchers Page
        nav_researchers: "For Researchers",
        research_page_title: "Renal Companion | Research Initiative",
        res_badge: "Closed Code, Open Science",
        res_hero_title: "Accelerating Nephrology Research through",
        res_hero_highlight: "Real-World Evidence",
        res_hero_subtitle: "We protect the code, but we liberate the data. Access verified, anonymized nutritional logs to power your next study on CKD dietary adherence and clinical outcomes.",
        res_data_title: "Data Access Protocol",
        res_data_subtitle: "Three tiers of access designed for transparency and collaboration.",
        res_tier1_label: "Tier 1: Public",
        res_tier1_title: "Public Insights",
        res_tier1_desc: "Live, aggregated statistics on patient dietary trends. Ideal for general references and quick citations.",
        res_tier1_action: "View Live Reports",
        res_tier2_label: "Tier 2: Verified",
        res_tier2_title: "Research Datasets",
        res_tier2_desc: "Access strictly de-identified raw datasets (CSV) including nutrient logs and lab trends. Requires institutional verification.",
        res_tier2_action: "Request Access",
        res_tier3_label: "Tier 3: Strategic",
        res_tier3_title: "Collaboration",
        res_tier3_desc: "Partner directly with Dr. Feras Swed and our academic team for custom data protocols and joint publications.",
        res_tier3_action: "Submit Proposal",
        res_cite_title: "Citation Standards",
        res_cite_subtitle: "If you use our data, proper attribution is required. This helps build our academic authority.",
        res_cite_format_label: "Standard Citation (APA Style):",
        res_cite_note: "All datasets are licensed under <strong>CC BY-NC 4.0</strong>. Usage for commercial modeling or resale is strictly prohibited without a separate license.",
        res_cta_title: "Join the Verified Research Network",
        res_cta_subtitle: "Contribute to the largest open-access initiative for renal nutrition data.",
        res_cta_btn: "Apply for Access",
        res_dua_title: "Data Use Agreement (DUA)",
        res_dua_desc: "Standardized legal framework governing the non-commercial use of clinical data tiers.",
        res_irb_kit_title: "IRB/Ethics Prep Kit",
        res_irb_kit_desc: "Pre-filled documentation for Institutional Review Board (IRB) submissions to accelerate study approval.",
        res_protocol_title: "Statistical Analysis Plan",
        res_protocol_desc: "Open methodology for correlating nutrient intake with longitudinal GFR/Creatinine trends.",
        res_cite_text: "Renal Companion protects its proprietary algorithms but liberates the data. We invite researchers to leverage our 'Verified Datasets' to advance nephrology care.",
        res_btn_portal: "Open Research Portal",

        // Reports Page
        reports_page_title: "Renal Companion | Global Nutrition Index",
        rep_status_badge: "Current Cycle: 2026 Cohort",
        rep_hero_title: "Global Renal Nutrition Index",
        rep_hero_subtitle: "The authoritative annual report on macro-nutrient adherence and disease progression trends in CKD populations.",

        // CDSS Inference Engine Deep-Dive
        engine_title: "Clinical Inference Logic",
        engine_subtitle: "Deterministic priority-based nutritional orchestration",
        engine_desc: "The Renal Companion CDSS utilizes a multi-layered deterministic inference engine to resolve nutritional constraints in real-time.",
        engine_step1_title: "1. Baseline Calibration",
        engine_step1_desc: "Calculation of IBW (Hamwi) and CKD-EPI (2021) eGFR to establish the patient's biological ceiling.",
        engine_step2_title: "2. Priority Resolution",
        engine_step2_desc: "Clinical rules are cross-referenced against comorbidities. Higher priority protocols (e.g., Active Dialysis) dynamically override chronic baselines.",
        engine_step3_title: "3. Lab Feedback Loop",
        engine_step3_desc: "Real-time calibration based on recent biomarkers. Serum K > 5.5 or Na > 145 triggers immediate proactive safety caps (2000mg/1500mg respectively).",

        // Advanced Analytics
        analytics_title: "Predictive Biomarker Mapping",
        analytics_subtitle: "Academic-grade trend analysis and metabolic modeling",
        analytics_desc: "Leveraging sophisticated mathematical models to monitor disease progression and metabolic load.",
        analytics_feature1_title: "Linear Regression Trends",
        analytics_feature1_desc: "90-day trajectory mapping of GFR and Creatinine to detect 'Rapid Decline' (>5ml/min/year).",
        analytics_feature2_title: "Metabolic Acidosis Modeling",
        analytics_feature2_desc: "Dynamic calculation of PRAL (Potential Renal Acid Load) scores to prevent diet-induced metabolic complications.",

        // Compliance Matrix
        matrix_title: "Global Guidelines Compliance Registry",
        matrix_subtitle: "Verified adherence to international nephrology standards",
        matrix_header_standard: "Global Standard",
        matrix_header_implementation: "Renal Companion Logic",
        matrix_row1_std: "KDOQI 2024: Potassium Restriction",
        matrix_row1_impl: "Context-aware caps based on GFR and Serum K levels.",
        matrix_row2_std: "CKD-EPI 2021: Non-Race GFR",
        matrix_row2_impl: "Deterministic implementation of race-neutral coefficients.",
        matrix_row3_std: "Hamwi/AjBW: Protein Dosing",
        matrix_row3_impl: "0.25 correction factor for Obesity/Malnutrition calibration.",

        rep_method_title: "Publication Protocol",
        rep_method_text: "Data integrity requires rigorous temporal validation. To ensure that our public insights reflect statistically significant trends rather than transient anomalies, the Renal Companion Research Initiative operates on an annual publication cycle. Using our 'Offline-First' aggregation protocol, verified datasets are compiled, anonymized, and peer-reviewed internally before public release.",
        rep_step1_date: "Jan - Dec 2026",
        rep_step1_title: "Data Aggregation Phase",
        rep_step1_desc: "Real-time collection of de-identified usage logs from the global cohort. Continuous validation of food database entries and lab result correlations.",
        rep_step2_date: "Q1 2027",
        rep_step2_title: "Internal Validation",
        rep_step2_desc: "Automated hygiene checks to remove outliers and incomplete data sets. Preliminary trend modeling by the core academic team.",
        rep_step3_date: "Q2 2027",
        rep_step3_title: "Public Release (GRNI 2027)",
        rep_step3_desc: "Publication of the first Global Renal Nutrition Index report. Open access for researchers, clinicians, and health policymakers.",
        rep_notify_title: "Early Access for Researchers",
        rep_notify_desc: "Subscribe to be notified the moment the 2026 Verification Phase concludes.",
        rep_notify_btn: "Subscribe to Updates",
        footer_brand_name: "RenalCompanion",
        footer_legal_license: "Open Source License",
        about_academic_validation: "Academic Validation",
        about_expertise_title: "Core Expertise",
        about_supervision_title: "Academic Supervision",
        about_contact_btn: "Get in Touch",
        res_btn_copy: "Copy",
        res_citation_code: "Renal Companion Research Initiative. (2026). Real-World Nutritional Adherence in CKD Patients [Data set]. Renal Companion. https://renal-companion.github.io/landing/researchers",

        // Download Modal
        modal_title: "Coming Soon!",
        modal_message: "The app hasn't been officially released yet. The beta version will be available soon. Stay tuned and follow us on LinkedIn to stay updated!",
        modal_follow_btn: "Follow on LinkedIn",

        // Gallery Page
        gallery_page_title: "App Gallery | Renal Companion",
        gallery_page_desc: "Explore Renal Companion's features through screenshots - AI assistant, lab analytics, nutrition tracking, and more.",
        nav_gallery: "Gallery",

        gallery_hero_title: "Experience Renal Companion",
        gallery_hero_subtitle: "A Visual Journey Through Clinical Excellence",
        gallery_hero_desc: "Explore our comprehensive CKD management app through real screenshots showcasing AI-powered nutrition guidance, lab analytics, and personalized care.",

        // Category 1: Home Dashboard
        gallery_cat1_title: "Home Dashboard & Overview",
        gallery_cat1_desc: "Your personalized health hub with quick access to all essential features and real-time kidney function tracking.",
        gallery_cat1_img1: "Complete home screen with all main features",
        gallery_cat1_img2: "Weekly nutrition tracking with colorful progress bars",
        gallery_cat1_feat1: "Clean, modern interface with gradient design",
        gallery_cat1_feat2: "Quick access to all major features",
        gallery_cat1_feat3: "Weekly nutrition overview with visual progress indicators",
        gallery_cat1_feat4: "CKD stage tracking with kidney function percentage",

        // Category 2: Lab Analytics
        gallery_cat2_title: "Lab Analytics & eGFR Tracking",
        gallery_cat2_desc: "Interactive charts and trend analysis for kidney function markers with intelligent warning zones.",
        gallery_cat2_img1: "eGFR trend chart with time filters",
        gallery_cat2_img2: "Detailed calorie tracking chart",
        gallery_cat2_img3: "Protein intake trend with warning zone",
        gallery_cat2_feat1: "Interactive trend charts for eGFR, creatinine, and kidney markers",
        gallery_cat2_feat2: "Time-based filtering (week, month, year)",
        gallery_cat2_feat3: "Visual warning zones for unsafe levels",
        gallery_cat2_feat4: "Historical data tracking with color-coded progress",

        // Category 3: AI Assistant
        gallery_cat3_title: "AI Assistant (Murshid)",
        gallery_cat3_desc: "Intelligent medical guidance powered by Google Gemini, providing personalized advice based on your CKD stage.",
        gallery_cat3_img1: "Murshid AI welcome screen with suggested questions",
        gallery_cat3_img2: "Detailed medical guidance about phosphorus and CKD",
        gallery_cat3_img3: "Comprehensive AI response with dietary recommendations",
        gallery_cat3_feat1: "Powered by Google Gemini AI for accurate medical information",
        gallery_cat3_feat2: "Personalized guidance based on your CKD stage",
        gallery_cat3_feat3: "Suggested questions for easy interaction",
        gallery_cat3_feat4: "Evidence-based nutritional and lifestyle advice",

        // Category 4: Food Search
        gallery_cat4_title: "Smart Food Search with Visual Recognition",
        gallery_cat4_desc: "Find nutritional information instantly by searching or taking a photo of your food.",
        gallery_cat4_img1: "Choose manual search or camera scan",
        gallery_cat4_img2: "Instant visual food recognition (banana)",
        gallery_cat4_img3: "Detailed nutrition modal with colorful bars",
        gallery_cat4_feat1: "Dual input: manual search or camera scan",
        gallery_cat4_feat2: "Instant visual food recognition",
        gallery_cat4_feat3: "Color-coded nutrient percentage bars",
        gallery_cat4_feat4: "Portion size customization",

        // Category 5: Label Scanner
        gallery_cat5_title: "Label Scanner with Safety Warnings",
        gallery_cat5_desc: "Scan product labels to instantly detect harmful additives and get personalized safety warnings.",
        gallery_cat5_img1: "Orange juice label with safety warning",
        gallery_cat5_img2: "Nutrition facts with high sodium alert",
        gallery_cat5_img3: "Scan history for quick reference",
        gallery_cat5_feat1: "Real-time product label scanning",
        gallery_cat5_feat2: "Automatic warnings for high phosphorus/sodium/potassium",
        gallery_cat5_feat3: "Bilingual OCR (Arabic/English)",
        gallery_cat5_feat4: "Scan history for tracking",

        // Category 6: Nutrition Tracking
        gallery_cat6_title: "Nutrition Tracking & Daily Logs",
        gallery_cat6_desc: "Comprehensive daily nutrition logging with automatic nutrient calculation and visual progress tracking.",
        gallery_cat6_img1: "Daily nutrition log with all meals",
        gallery_cat6_img2: "Detailed daily breakdown with charts",
        gallery_cat6_img3: "Full nutrient list with progress bars",
        gallery_cat6_img4: "Meal entry modal with nutrient details",
        gallery_cat6_feat1: "Automatic nutrient calculation for all meals",
        gallery_cat6_feat2: "Visual progress bars for key nutrients",
        gallery_cat6_feat3: "Calorie, protein, phosphorus, potassium, sodium tracking",
        gallery_cat6_feat4: "Interactive charts showing daily trends",

        // Category 7: Patient Profile
        gallery_cat7_title: "Patient Profile & Settings",
        gallery_cat7_desc: "Personalized profiles with CKD staging, customizable targets, and comprehensive health tracking.",
        gallery_cat7_img1: "Patient profile with CKD Stage 1 badge",
        gallery_cat7_img2: "Settings page with personalization options",
        gallery_cat7_img3: "Detailed patient data entry form",
        gallery_cat7_img4: "Vital signs input modal",
        gallery_cat7_feat1: "Personalized profiles with CKD staging",
        gallery_cat7_feat2: "Customizable daily nutrient targets",
        gallery_cat7_feat3: "Comorbidity tracking (diabetes, hypertension)",
        gallery_cat7_feat4: "Vital signs monitoring (weight, BP, heart rate)",

        // Gallery CTA
        gallery_cta_title: "Ready to Experience Clinical Excellence?",
        gallery_cta_desc: "Download Renal Companion and take control of your kidney health with AI-powered guidance.",
        gallery_cta_btn: "Download for Android",

        // Methodology Page
        meth_page_title: "Renal Companion | Scientific Methodology",
        meth_hero_title: "Informatics Methodology &",
        meth_hero_highlight: "Clinical Validation",
        meth_hero_subtitle: "An overview of the deterministic and probabilistic protocols governing the Renal Companion inference engine.",

        meth_core_title: "Dual-Layer Validation Architecture",
        meth_core_desc: "Renal Companion operates on a hybrid inference model that balances the absolute safety of clinical rules with the contextual flexibility of Large Language Models.",

        meth_layer1_title: "Layer 1: Deterministic Clinical Logic",
        meth_layer1_desc: "A hard-coded rule engine based on KDOQI 2024 and KDIGO 2024 practice guidelines. Every dietary entry is validated against a 50-point safety checklist including CKD stage, GFR slope, and serum electrolyte levels.",

        meth_layer2_title: "Layer 2: Probabilistic RAG Inference",
        meth_layer2_desc: "Retrieval-Augmented Generation (RAG) allows Murshid to synthesize advice within a restricted clinical sandbox. The AI is bounded by the deterministic layer, ensuring it never suggests intake exceeding calculated safety limits.",

        meth_formula_title: "Validated Clinical Formulas",
        meth_formula_desc: "All calculations are derived from peer-reviewed nephrology standards.",
        meth_f1_name: "CKD-EPI (2021) Equation",
        meth_f1_desc: "Used for eGFR estimation without race variables, complying with the latest international clinical recommendations.",
        meth_f2_name: "Modified Adjusted Body Weight (AjBW)",
        meth_f2_desc: "Critical for calculating protein requirements in obese or malnourished CKD patients to prevent over-prescription.",
        meth_f3_name: "Corrected Calcium / PRAL Indices",
        meth_f3_desc: "Automated adjustment for Hypoalbuminemia and Potential Renal Acid Load monitoring.",

        meth_safety_title: "Informatics Safety Guardrails",
        meth_safety_desc: "To prevent 'hallucinations', the System Prompt incorporates a Clinically-Constrained Grammar (CCG) that restricts output to KDOQI-verified nutrient ranges.",
        meth_appendix_title: "Forensic Clinical Documentation",
        meth_appendix_subtitle: "Technical specifications for internal logic and vision-based auditing",
        meth_roadmap_title: "Research & Development Roadmap",
        meth_roadmap_subtitle: "The trajectory towards clinical implementation and multi-center validation",
        meth_phase1_title: "Phase I: Informatics Sandbox",
        meth_phase1_desc: "Validation of the deterministic rule engine against 10,000+ synthetic patient profiles to ensure zero-hallucination guardrails.",
        meth_phase2_title: "Phase II: Observational Pilot",
        meth_phase2_desc: "Monitoring dietary adherence in a controlled cohort of 200 patients (CKD Stage 3-5) using the Renal Companion interface.",
        meth_phase3_title: "Phase III: Clinical Integration",
        meth_phase3_desc: "Integration with Hospital Information Systems (HIS) via HL7/FHIR for direct laboratory data synchronization.",
        meth_protocol_a_title: "Protocol A: Phosphorus Additive Audit",
        meth_protocol_a_desc: "The vision-based inference engine performs deep-parsing of ingredient lists to detect inorganic phosphorus additives, which have nearly 100% absorption rates in CKD patients.",
        meth_protocol_b_title: "Protocol B: Weight-Based Recalibration",
        meth_protocol_b_desc: "Protein and fluid dosing utilize the Adjusted Body Weight (AjBW) modification of the Hamwi formula for patients with BMI outliers (>30 or <18.5).",

        // Terms Page
        terms_page_title: "Terms of Use | Renal Companion",
        terms_hero_title: "Terms of Use Agreement",
        terms_hero_subtitle: "Legal agreement, medical disclaimer, and acceptable use policy.",
        terms_last_updated: "Last Updated: February 1, 2026",
        terms_sec1_title: "1. Introduction & Acceptance",
        terms_sec1_text: "By downloading, accessing, or using the Renal Companion application ('the Service'), you agree to be bound by these Terms of Use. If you do not agree to these terms, including the mandatory arbitration provision and class action waiver, do not use the application.",
        terms_sec2_title: "2. NO MEDICAL ADVICE",
        terms_sec2_text: "Renal Companion is a clinical informatics tool, not a doctor. The content provided is for informational and educational purposes only.",
        terms_sec2_li1: "The App does NOT provide medical diagnoses or treatment advice.",
        terms_sec2_li2: "Calculations (eGFR, AjBW) are mathematical estimates and must be verified by a qualified healthcare professional.",
        terms_sec2_li3: "In case of a medical emergency, call your local emergency services immediately.",
        terms_sec3_title: "3. User Responsibilities",
        terms_sec3_text: "You are solely responsible for the accuracy of the data you input into the system (e.g., weight, lab results, dialysis modality). The 'Safety Guardrails' of the application rely entirely on the precision of your input.",
        terms_sec4_title: "4. Intellectual Property",
        terms_sec4_text: "The source code, architecture, and 'Murshid AI' inference logic are proprietary to Dr. Feras Swed. Reverse engineering is strictly prohibited.",
        terms_sec4_note: "Research Exception: Anonymized datasets may be used for academic research under our Open Science Data license, provided proper citation is given.",
        terms_sec5_title: "5. Limitation of Liability",
        terms_sec5_text: "To the fullest extent permitted by law, Renal Companion and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service or reliance on any information provided.",
        terms_contact: "Questions? Contact our Legal & Compliance Team:",
    },

    ar: {
        // Navigation
        nav_features: "المنهجية العلمية",
        nav_technology: "معمارية النظام",
        nav_clinical: "البروتوكولات السريرية",
        nav_researchers: "للباحثين",
        nav_download: "تحميل",
        nav_logo_alt: "شعار مرافق الكلى",
        nav_toggle_aria: "تبديل القائمة",
        nav_lang_en_aria: "Switch to English",
        nav_lang_ar_aria: "التبديل إلى العربية",
        about_whatsapp_aria: "تواصل عبر واتساب",
        about_linkedin_aria: "تواصل عبر لينكد إن",

        // Hero Section
        hero_badge_kdoqi: "متوافق مع KDOQI 2024",
        hero_badge_offline: "معمارية محلية أولاً",
        hero_badge_ai: "دعم القرار السريري (CDSS)",
        hero_title_main: "معلوماتية سريرية دقيقة لـ",
        hero_title_highlight: "إدارة أمراض الكلى المزمنة",
        hero_subtitle: "مصاغ وفق إرشادات KDOQI 2024 | تم التحقق منه عبر بروتوكولات سريرية استشرافية | منطق علمي محكّم",
        hero_stat_1_suffix: "مليون",
        hero_stat_2_suffix: "%",
        hero_stat_3_suffix: "ضعف",
        hero_btn_download: "تحميل لأندرويد",
        hero_btn_docs: "عرض الوثائق السريرية",
        hero_stat_foods: "صنف غذائي",
        hero_stat_nutrients: "عنصر غذائي متتبع",
        hero_stat_stages: "مراحل CKD",
        hero_mockup_alt: "واجهة تطبيق مرافق الكلى",
        hero_download_icon_aria: "أيقونة التحميل",

        // Clinical Challenge Section - ENHANCED
        problem_title: "أزمة الصحة العالمية",
        problem_subtitle: "معالجة الفشل المنهجي في توسيع نطاق الرعاية الكلوية",

        // Statistics
        stat_1_val: "850M",
        stat_1_desc: "العبء العالمي لمرضى الكلى المزمن (فردي)",
        stat_1_cite: "ISN / أطلس صحة الكلى العالمي",
        stat_2_val: "60%",
        stat_2_desc: "من مرضى الغسيل يفشلون في الالتزام بالقيود الغذائية",
        stat_2_cite: "دراسات NIH",
        stat_3_val: "3.5x",
        stat_3_desc: "زيادة خطر الوفاة بسبب فرط بوتاسيوم الدم غير المعالج",
        stat_3_cite: "جمعية القلب الأمريكية",

        // Problems
        prob_1_title: "قصور المعلوماتية الغذائية",
        prob_1_desc: "تفشل قواعد البيانات القياسية في اكتشاف مضافات الفوسفور 'غير المتاحة حيوياً'.",
        prob_1_impact: "المخاطر السريرية: أكثر من 1000 ملغ فوسفور خفي يومياً",

        prob_2_title: "بروتوكولات جامدة",
        prob_2_desc: "الحدود الموحدة تفشل في مراعاة تطور المرض",
        prob_2_impact: "تحليل: 40% من المرضى يتجاوزون حدود الأمان",

        prob_3_title: "انفصال عن المختبر",
        prob_3_desc: "غياب التكامل مع نتائج التحاليل الحية",
        prob_3_impact: "تحليل: تأخير خطير في تعديل النظام الغذائي",

        prob_4_title: "جمود البنية التحتية الرقمنة",
        prob_4_desc: "غياب منطق 'العمل بدون إنترنت' يخلق فجوات رعاية في العيادات محدودة الموارد.",
        prob_4_impact: "عدم المساواة الصحية: فجوات رعاية حادة في المناطق المعزولة رقمياً",

        problem_heading: "الفجوة السريرية",
        prob_1_title: "المضافات السامة",
        prob_1_desc: "قواعد البيانات الغذائية العامة تتجاهل إضافات الفوسفور والصوديوم المخفية - القتلة الصامتين في مرض الكلى المزمن.",
        prob_2_title: "بروتوكولات جامدة",
        prob_2_desc: "الحدود الموحدة تفشل في مراعاة الطبيعة الديناميكية لتطور مراحل مرض الكلى المزمن.",
        prob_3_title: "انقطاع عن المختبر",
        prob_3_desc: "الأدوات الحالية تفتقر إلى التكامل الفوري مع نتائج الدم، مما يؤدي إلى تأخيرات خطيرة في مراقبة التناول.",
        prob_4_title: "انعدام للتنقل",
        prob_4_desc: "الافتقار إلى الوظائف 'دون اتصال أولاً' يحد من إمكانية الاستخدام في المستشفيات والعيادات البعيدة.",

        // Solution Section
        solution_title: "حل مرافق الكلى",
        solution_subtitle: "إدارة تغذية دقيقة مبنية على المعايير السريرية",
        solution_card1_title: "حدود شخصية",
        solution_card1_desc: "حساب ديناميكي بناءً على مرحلة CKD ونوع الغسيل ووزن الجسم وأحدث نتائج المختبر. يتكيف تلقائياً مع تغير حالتك.",
        solution_card1_feat1: "التوافق مع إرشادات KDOQI",
        solution_card1_feat2: "حسابات الوزن المعدل (AjBW)",
        solution_card1_feat3: "تكامل نتائج المختبر",
        solution_card2_title: "تتبع فوري",
        solution_card2_desc: "ردود فعل فورية على تناول العناصر الغذائية مقابل الحدود السريرية. أشرطة تقدم مرئية مشفرة بالألوان بدقة طبية احترافية.",
        solution_card2_feat1: "11 عنصر غذائي متتبع",
        solution_card2_feat2: "قاعدة بيانات 2000+ صنف غذائي",
        solution_card2_feat3: "حساب درجة PRAL",
        solution_card3_title: "المساعد الذكي \"مرشد\"",
        solution_card3_desc: "إرشادات غذائية واعية بالسياق مدعومة بـ Google Gemini. يعرف مرحلة CKD الخاصة بك والتناول الأخير ويقدم نصائح شخصية.",
        solution_card3_feat1: "مدعوم بـ Gemini 3 Pro",
        solution_card3_feat2: "حقن السياق السريري",
        solution_card3_feat3: "توصيات مبنية على الأدلة",

        // Features Section
        features_title: "نظام شامل من المميزات",
        features_subtitle: "كل ميزة مصممة بدقة سريرية وسلامة المرضى",
        features_tab1: "متتبع تغذية ذكي",
        features_tab2: "ذكاء سريري",
        features_tab3: "ماسح الرؤية بالذكاء الاصطناعي",
        features_tab4: "تحليلات المختبر",

        // Interactive Demos
        demo_nut_search_placeholder: "🔍 ابحث عن طعام...",
        demo_nut_food1: "🍗 صدر دجاج (مشوي)",
        demo_nut_food2: "🥬 سبانخ (مطبوخة)",
        demo_nut_food3: "🍚 أرز أبيض",
        demo_nut_badge_low: "بوتاسيوم منخفض",
        demo_nut_badge_high: "بوتاسيوم مرتفع",
        demo_nut_badge_safe: "آمن",
        demo_clin_user_profile: "ملف المستخدم<br>(CKD 4, HD)",
        demo_clin_labs: "نتائج المختبر<br>(K: 5.8)",
        demo_clin_engine: "محرك القواعد",
        demo_clin_result: "حد البوتاسيوم: 2000 ملغ",
        demo_scan_warning: "⚠️ تنبيه بروتوكولي: تم اكتشاف مضاف فسفوري: <strong>فوسفات الصوديوم</strong>",
        demo_ana_danger_zone: "منطقة الخطر",

        // Feature Details - Nutrition
        feat_nut_title: "بحث غذائي فائق السرعة",
        feat_nut_desc: "بحث في أقل من ثانية عبر أكثر من 2000 صنف غذائي ملائم ثقافياً مع تصميم موجه للعربية.",
        feat_nut_h1: "بحث ضبابي مفهرس: يجد 'رز' حتى لو كتبت 'ارز'",
        feat_nut_h2: "أحجام حصص متعددة: تحويل تلقائي للوحدات (كوب، جرام، قطعة)",
        feat_nut_h3: "الوجبات المفضلة: حفظ الوصفات المعقدة كإدخال واحد",
        feat_nut_h4: "نقاط PRAL: تحذيرات مرئية للحمل الحمضي للوقاية من الحماض الأيضي",
        feat_nut_badge_index: "فهرس غير حساس لحالة الأحرف",

        // Feature Details - Clinical
        feat_clin_title: "محرك قواعد سريرية متكيف",
        feat_clin_desc: "نظام حل قيود ديناميكي يطبق بروتوكولات KDOQI بناءً على ملفك السريري الفريد.",
        feat_clin_ex_title: "مثال واقعي: حساب حد البوتاسيوم",
        feat_clin_ex_expl: "يقيم النظام أكثر من 50 قاعدة سريرية لكل عنصر غذائي، ويختار الحد الآمن الأكثر صرامة.",
        feat_clin_h1: "CKD-EPI 2021: حساب تلقائي لـ eGFR بدون تحيز عرقي",
        feat_clin_h2: "الكالسيوم المصحح: تعديل لانخفاض الألبومين لدى المرضى الذين يعانون من سوء التغذية",
        feat_clin_h3: "تجاوزات الأولوية: تنبيهات المختبر تتفوق على البروتوكولات الأساسية",

        // Feature Details - Scanner
        feat_scan_title: "ماسح الملصقات بالرؤية الحاسوبية",
        feat_scan_desc: "OCR مدعوم بـ Gemini يكتشف إضافات الفوسفور المخفية - القتلة الصامتين في مرض الكلى المزمن.",
        feat_scan_h1: "كشف الإضافات: يضع علامة على فوسفات الصوديوم، فوسفات ثنائي البوتاسيوم",
        feat_scan_h2: "OCR ثنائي اللغة: يقرأ ملصقات التغذية بالعربية والإنجليزية",
        feat_scan_h3: "تحليل هيكلي: يحول الصور إلى كيانات أصناف غذائية",
        feat_scan_h4: "تحذير فوري: تنبيه أحمر إذا تم اكتشاف إضافات الفوسفور",
        feat_scan_stat: "من الأطعمة المصنعة تحتوي على إضافات فوسفات غير مدرجة",

        // Feature Details - Analytics
        feat_ana_title: "تحليلات مختبر طولية",
        feat_ana_desc: "تتبع اتجاهات المختبر بمرور الوقت لتصور مسار صحة كليتك.",
        feat_ana_h1: "رسوم بيانية تفاعلية: تكبير، تحريك، وتحليل اتجاهات متعددة الأشهر",
        feat_ana_h2: "رؤى الارتباط: شاهد كيف يؤثر النظام الغذائي على مستويات البوتاسيوم/الفوسفور",
        feat_ana_h3: "تصدير للأطباء: تقارير PDF لزيارات الطبيب",
        feat_ana_h4: "تنبيهات تنبؤية: تحذيرات عند الاقتراب من المناطق الخطرة",
        feat_ana_chart: "اتجاه مصل البوتاسيوم (6 أشهر)",

        // Technology Section
        tech_title: "مبني على تقنيات حديثة ومجربة",
        tech_subtitle: "معمارية من الدرجة المؤسسية تلبي الصرامة السريرية",
        tech_clean_title: "Clean Architecture",
        tech_clean_desc: "فصل صارم للاهتمامات: العرض ← المجال ← البيانات. قابل للاختبار، للصيانة، وللتوسع.",
        tech_isar_title: "Isar NoSQL",
        tech_isar_desc: "قاعدة بيانات محلية فائقة السرعة. أسرع 10 مرات من SQLite. جاهزة للمزامنة للتكامل السحابي المستقبلي.",
        tech_bloc_title: "BLoC State Management",
        tech_bloc_desc: "تدفقات تفاعلية مع flutter_bloc. حالة يمكن التنبؤ بها، صفر شروط سباق.",
        tech_gemini_title: "Google Gemini 3 Pro",
        tech_gemini_desc: "أحدث ذكاء اصطناعي للدردشة والرؤية. ردود واعية بالسياق ومستنيرة طبياً.",
        arch_title: "معمارية النظام",
        arch_pres_title: "طبقة العرض",
        arch_pres_desc: "واجهة Flutter · حالة BLoC · عناصر واجهة مستخدم متجاوبة",
        arch_dom_title: "طبقة المجال",
        arch_dom_desc: "حالات الاستخدام · الكيانات · قواعد العمل",
        arch_data_title: "طبقة البيانات",
        arch_data_desc: "المستودعات · قاعدة بيانات Isar · Gemini API",
        arch_note: "<strong>قاعدة التبعية:</strong> الطبقات الداخلية لا تعتمد أبداً على الطبقات الخارجية. يظل منطق المجال نقياً ومستقلاً عن إطار العمل.",
        code_title: "الصيغة السريرية في العمل",
        code_caption: "موثوق به ضد إرشادات KDOQI 2024. الدقة: ±2 مل/دقيقة/1.73م²",

        // Clinical Validation
        val_title: "محقق سريرياً، درجة بحثية",
        val_subtitle: "مبني على إرشادات قائمة على الأدلة، مناسب لتقديم IRB",
        val_kdoqi_title: "إرشادات KDOQI 2020",
        val_kdoqi_desc: "تلتزم جميع حدود العناصر الغذائية والحسابات بصرامة بمعايير مبادرة جودة نتائج أمراض الكلى.",
        val_algo_title: "خوارزميات طبية",
        val_privacy_title: "حماية البيانات",
        val_privacy_desc: "معمارية 'دون اتصال أولاً'. لا يتم نقل بيانات صحية شخصية (PHI). جميع البيانات مشفرة أثناء الراحة. جاهز لـ GDPR/HIPAA.",
        val_research_title: "مصمم للبحث السريري",
        val_research_desc: "تجعل معمارية والتحقق من مرافق الكلى مناسباً للإدراج في الدراسات التي يراجعها النظراء. قم بتصدير البيانات كملفات CSV للتحليل الإحصائي، واقتبس باستخدام DOI الخاص بنا، واستفد من معماريتنا المفتوحة لإعادة الإنتاج.",
        val_research_btn: "معرفة المزيد للباحثين",

        // Download Section
        download_title: "ابدأ اليوم",
        download_subtitle: "مجاني، بمعايير طبية، ويركز على الخصوصية",
        download_heading: "تحميل APK",
        download_version: "الإصدار:",
        download_size: "الحجم:",
        download_requirements: "المتطلبات:",
        download_btn: "تحميل لأندرويد",
        download_guide_title: "دليل التثبيت",
        download_guide_1: "تحميل ملف APK",
        download_guide_2: "تفعيل \"التثبيت من مصادر غير معروفة\" في الإعدادات",
        download_guide_3: "فتح ملف APK والنقر على \"تثبيت\"",
        download_guide_4: "تشغيل مرافق الكلى وإكمال الإعداد الأولي",
        download_qr_title: "امسح للتحميل",
        download_qr_caption: "رمز QR للتحميل السريع",
        download_github: "عرض الكود المصدري والمساهمة على",

        // Footer
        footer_about_title: "عن مرافق الكلى",
        footer_about_text: "منصة لإدارة التغذية بمعايير سريرية لمرضى الكلى المزمن، مبنية على إرشادات KDOQI ومدعومة بالذكاء الاصطناعي الحديث.",
        footer_disclaimer: "إخلاء مسؤولية طبي:",
        footer_disclaimer_text: "هذا التطبيق للأغراض المعلوماتية فقط ولا يغني عن الاستشارة الطبية المتخصصة.",
        footer_resources_docs: "الوثائق السريرية",
        footer_resources_download: "تحميل ملف APK",
        footer_researchers_citation: "دليل الاقتباس",
        footer_researchers_arch: "المعمارية التقنية",
        footer_researchers_contact: "استفسارات الأبحاث",
        footer_legal_privacy: "سياسة الخصوصية",
        footer_tagline: "صُنع بدقة فائقة لرعاية مرضى الكلى المزمن.",
        footer_disclaimer: "إخلاء المسؤولية الطبية:",
        footer_disclaimer_text: "هذا التطبيق للأغراض المعلوماتية فقط ولا يستبدل المشورة الطبية المهنية.",
        footer_resources: "الموارد",
        footer_resources_docs: "الوثائق السريرية",
        footer_resources_download: "تحميل APK",
        footer_researchers: "للباحثين",
        footer_researchers_citation: "دليل الاقتباس",
        footer_researchers_arch: "المعمارية التقنية",
        footer_researchers_contact: "استفسارات بحثية",
        footer_legal: "قانوني",
        footer_legal_privacy: "سياسة الخصوصية",
        footer_legal_terms: "شروط الاستخدام",
        footer_legal_license: "ترخيص الاستخدام والبيانات",
        footer_brand_name: "مرافق الكلى",

        // About Page Additional
        about_academic_validation: "التحقق الأكاديمي",
        about_expertise_title: "الخبرات الأساسية",
        about_supervision_title: "الإشراف الأكاديمي",
        about_contact_btn: "تواصل معي",

        // Meta Tags
        // Meta Tags & Branding
        meta_title: "Renal Companion | رفيقك الرقمي لصحة الكلى والتغذية العلاجية",
        meta_description: "تمكين مرضى الكلى بأدوات ذكية لتخطيط الوجبات، تتبع الفحوصات المخبرية، وإدارة الأدوية. تطبيق صُمم بواسطة د. فراس سويد لتبسيط رعاية مرضى الكلى.",
        meta_og_title: "مرافق الكلى - الحل الرقمي المتكامل لمرضى الكلى",
        meta_og_description: "تطبيق متطور لمساعدة مرضى الكلى في تتبع حالتهم الصحية وتخطيط تغذيتهم العلاجية بدقة. تطوير د. فراس سويد.",

        // Secondary Pages (About & Privacy)
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        about_hero_title: "رواد مستقبل",
        about_hero_highlight: "التغذية الكلوية",
        about_hero_subtitle: "سد الفجوة بين العلوم الطبية المتقدمة وهندسة البرمجيات الحديثة.",
        about_dev_badge: "صاحب الرؤية والمطور",
        about_dev_name: "د. فراس سويد",
        about_dev_role_short: "باحث في المعلوماتية السريرية",
        about_dev_title1: "أخصائي تغذية علاجية",
        about_dev_title2: "مهندس برمجيات طبية متقدم",
        about_dev_title3: "باحث طبي",
        about_bio_title: "التآزر بين الطب والمعلوماتية الحيوية",
        about_bio_text: "مرافق الكلى ليس مجرد تطبيق؛ بل هو منصة بحثية مصدق عليها ولدت من رحم استقصاء مزدوج التخصص. تم تطويرها من قبل الدكتور فراس سويد - الخبير في التغذية السريرية ومعلوماتية البرمجيات المتقدمة - لردم الفجوة الحرجة بين النظرية القائمة على الإرشادات الطبية وتنسيق بيانات المرضى في العالم الحقيقي.",
        about_exp_coding_title: "المعلوماتية السريرية",
        about_exp_coding_desc: "متخصص في معمارية الأنظمة الطبية، مع توظيف Flutter و BLoC لبناء أنظمة معالجة بيانات محلية عالية الموثوقية والأمان.",
        about_exp_medical_title: "فيزيولوجيا أمراض الكلى",
        about_exp_medical_desc: "تمكن متقدم من معايير KDOQI 2024، ومقاييس أمراض العظام والمعادن، وبروتوكولات تقييد الشوارد الشخصية.",
        about_exp_research_title: "التحليل الاستشرافي",
        about_exp_research_desc: "تصميم والتحقق من الأدوات الحسابية لمراقبة الامتثال السريري والنتائج الصحية الطولية في مجموعات الأمراض المزمنة.",
        about_supervision_label: "تحت الإشراف الأكاديمي لـ",
        about_dev_bio: "من خلال الجمع بين المعرفة السريرية العميقة وهندسة البرمجيات المتقدمة، قام الدكتور فراس سويد بابتكار 'مرافق الكلى' لوضع معيار عالمي جديد في رعاية المرضى الآلية. تضمن خبرته المزدوجة أن كل سطر من الكود يخدم غرضاً طبياً، وأن كل بروتوكول طبي يتم تحسينه بواسطة خوارزميات قوية.",
        contact_whatsapp: "تواصل عبر واتساب",
        contact_linkedin: "تواصل عبر لينكد إن",
        about_supervision_title: "الإشراف الأكاديمي",
        about_supervision_subtitle: "تم التحقق منه من قبل قيادة أكاديمية رفيعة المستوى",
        about_supervisor_name: "أ.د. نجيب الصرمي",
        about_supervisor_role: "عميد كلية التغذية العلاجية",
        about_supervisor_uni: "جامعة صنعاء",
        about_supervisor_desc: "ضمان الالتزام الصارم بأحدث المعايير السريرية والتميز الأكاديمي في كل بروتوكول غذائي يتم تطبيقه.",

        // Privacy Policy
        privacy_title: "سياسة الخصوصية واستخدام البيانات",
        privacy_subtitle: "الشفافية والأمان في جوهر رعايتك.",
        privacy_last_updated: "آخر تحديث: يناير 2026",

        privacy_core_title: "1. العمل دون اتصال وانعدام البيانات الشخصية",
        privacy_core_text_1: "يعمل مرافق الكلى وفق معمارية <strong>'دون اتصال أولاً'</strong> صارمة. هذا يعني أن بياناتك تظل بشكل أساسي على جهازك المحلي.",
        privacy_core_text_2: "نحن <strong>لا</strong> نقوم بجمع أو تخزين أو نقل أي معلومات تعريف شخصية (PII) مثل اسمك أو رقم هاتفك أو عنوان بريدك الإلكتروني أو موقعك الدقيق. تظل هويتك مجهولة تماماً لخوادمنا.",

        privacy_data_title: "2. جمع البيانات الطبية المجهولة",
        privacy_data_text: "لتحسين النتائج السريرية ودعم أبحاث أمراض الكلى، نقوم بجمع بيانات استخدام طبية <strong>مجهولة المصدر تماماً</strong>. باستخدامك لهذا التطبيق، فإنك توافق على جمع:",
        privacy_data_list_1: "<strong>سجلات التغذية:</strong> أنواع الطعام المستهلك، الكميات، وتفاصيل العناصر الغذائية (بوتاسيوم، فوسفور، صوديوم).",
        privacy_data_list_2: "<strong>نتائج المختبر:</strong> قيم eGFR، الكرياتينين، الألبومين، والشوارد لمعايرة الخوارزميات السريرية.",
        privacy_data_list_3: "<strong>أنماط استخدام التطبيق:</strong> مقاييس التفاعل مع الميزات لتحسين تجربة المستخدم.",
        privacy_data_consent_label: "الموافقة البحثية:",
        privacy_data_consent_text: "باستخدامك لمرافق الكلى، فإنك تمنح فريق التطوير صراحة الإذن لاستخدام هذه البيانات المجمعة والمجهولة المصدر للبحث العلمي، والمنشورات الأكاديمية، والتحليل الإحصائي الهادف إلى تحسين رعاية مرضى الكلى المزمن.",

        privacy_ai_title: "3. الذكاء الاصطناعي ومعالجة الطرف الثالث",
        privacy_ai_text: "لتوفير ميزات متقدمة مثل المساعد الذكي 'مرشد' وماسح الرؤية، تتم معالجة مقتطفات بيانات محددة بواسطة مزودين خارجيين:",
        privacy_ai_list_1: "<strong>Google Gemini AI:</strong> عند استخدام مساعد الدردشة أو ماسح الملصقات، يتم إرسال استعلامات نصية وصور مجهولة المصدر إلى خوادم Google للمعالجة.",
        privacy_ai_disclaimer: "نحن لا نشارك سجلك الطبي الكامل مع هؤلاء المزودين. يتم نقل السياق الفوري المطلوب فقط للإجابة على سؤالك أو مسح منتج بشكل مؤقت.",

        privacy_legal_title: "4. إخلاء المسؤولية الطبية والقانونية",
        privacy_legal_text: "مرافق الكلى هو أداة دعم، وليس جهازاً طبياً. بينما نلتزم بإرشادات KDOQI:",
        privacy_legal_list_1: "<strong>لا علاقة طبيب-مريض:</strong> استخدام هذا التطبيق لا ينشئ علاقة طبية.",
        privacy_legal_list_2: "<strong>الدقة:</strong> بينما نسعى للدقة، قد تختلف قواعد بيانات الغذاء وتفسيرات المختبر. تحقق دائماً من القرارات الحاسمة مع مقدم الرعاية الصحية الخاص بك.",

        privacy_contact_title: "اتصل بنا",
        privacy_contact_text: "للاستفسارات المتعلقة بالخصوصية وحقوق بياناتك:",

        // Researchers Page
        nav_researchers: "للباحثين",
        research_page_title: "مرافق الكلى | المبادرة البحثية",
        res_badge: "كود مغلق، علم مفتوح",
        res_hero_title: "تعزيز آفاق البحث في أمراض الكلى عبر",
        res_hero_highlight: "أدلة الواقع الفعلي",
        res_hero_subtitle: "بين رصانة الخوارزميات وانفتاح البيانات السريرية. احصل على سجلات تغذية مجهولة المصدر ومحققة لدعم دراستك القادمة حول الالتزام الغذائي ونتائج مرضى الكلى.",

        // Features Section
        features_title: "منظومة ميزات شاملة",
        features_subtitle: "كل ميزة مصممة بدقة سريرية لضمان سلامة المرضى",
        features_tab1: "مساعد مرشد الذكي",
        features_tab2: "ميزانية غذائية دقيقة",
        features_tab3: "حارس السلامة السريري",
        features_tab4: "الذكاء البصري للأطباق",
        features_tab5: "ماسح الرؤية الاصطناعية",
        features_tab6: "تحليلات المختبر",

        // Interactive Demos
        demo_vis_status_ready: "انقر للمسح",
        demo_vis_status_focusing: "🎯 جاري التركيز...",
        demo_vis_status_captured: "📸 تم الالتقاط!",
        demo_vis_status_analyzing: "🤖 الذكاء الاصطناعي يحلل...",
        demo_vis_status_recognized: "✅ تم التعرف على موزة!",
        demo_vis_status_quantity: "⚖️ حدد الكمية",
        demo_vis_status_success: "🎉 تم التسجيل بنجاح!",
        demo_vis_detect: "🍌 تم التعرف على: موزة",
        demo_vis_weight: "120 جم (متوسطة)",
        demo_vis_add: "انقر للإضافة للميزانية",
        demo_vis_added: "✓ تمت الإضافة للميزانية!",
        demo_vis_quantity_label: "الوزن",
        demo_ai_name: "مرشد الذكي",
        demo_ai_status: "متصل · جاهز للمساعدة",
        demo_ai_user_q: "هل يمكنني أكل موزة متوسطة اليوم؟",
        demo_ai_murshid_a: "بناءً على <strong>المرحلة الرابعة</strong> واستهلاكك لـ 1200 ملغ بوتاسيوم اليوم، فإن موزة واحدة (422 ملغ) ستصل بك إلى 81% من حدك اليومي. <strong>بالهناء والشفاء!</strong>",
        demo_ai_badge: "استدلال سريري سياقي",

        // Murshid AI Reasoning Steps
        demo_ai_step_analyze: "جارٍ تحليل الطلب الطبي...",
        demo_ai_step_profile: "الوصول إلى الملف السريري (المرحلة الرابعة)...",
        demo_ai_step_generate: "صياغة استجابة متوافقة مع معايير KDOQI...",
        demo_ai_step_validate: "التحقق من ضوابط السلامة السريرية...",
        demo_nut_search_placeholder: "🔍 ابحث في 2000+ نوع طعام...",
        demo_nut_budget: "ميزانية البوتاسيوم اليومية",
        demo_nut_food1: "🍗 صدر دجاج (مشوي)",
        demo_nut_food2: "🥬 سبانخ (مطبوخ)",
        demo_nut_food3: "🍚 أرز أبيض",
        demo_nut_badge_low: "بوتاسيوم منخفض",
        demo_nut_badge_high: "بوتاسيوم مرتفع",
        demo_nut_badge_safe: "آمن",
        demo_clin_user_profile: "ملف المستخدم<br>(المرحلة 4، غسيل)",
        demo_clin_labs: "نتائج المختبر<br>(K: 5.8)",
        demo_clin_engine: "محرك القواعد",
        demo_clin_result: "حد البوتاسيوم: 2000 ملغ",
        demo_scan_warning: "⚠️ تحذير: يحتوي على<br><strong>فوسفات الصوديوم</strong>",
        demo_ana_danger_zone: "منطقة الخطر",

        // Feature Details - Murshid AI
        feat_ai_title: "مرشد: محرك الاستدلال السريري",
        feat_ai_desc: "نظام دعم قرار سريري متخصص في المجال يستخدم نماذج اللغة الكبيرة (LLMs) للاستدلال من خلال البيانات السريرية الخاصة بالمريض.",
        feat_ai_h1: "<strong>ضوابط سريرية:</strong> تخطيط منهجي لضوابط السلامة وفق بروتوكول KDOQI",
        feat_ai_h2: "<strong>معالجة اللغة الطبيعية:</strong> معالجة متقدمة للهجات الطبية الإقليمية",
        feat_ai_h3: "<strong>حقن السياق (RAG):</strong> حقن ديناميكي لمقاييس المريض الحيوية",
        feat_ai_h4: "<strong>دعم تربوي طبي:</strong> ترجمة البيانات الكلوية المعقدة لتعزيز ثقافة المريض الصحية",

        // Feature Details - Nutrition
        feat_nut_title: "ميزانية غذائية فائقة الدقة",
        feat_nut_desc: "تجاوز مجرد التسجيل. أدر حصتك اليومية من البوتاسيوم والصوديوم والفوسفور بدقة تناهز الأجزاء من الثانية.",
        feat_nut_h1: "<strong>ميزانية فورية:</strong> عدادات بصرية لجميع العناصر الـ 11 الحرجة",
        feat_nut_h2: "<strong>بحث عربي أولاً:</strong> مطابقة فورية وسهلة للأنظمة الغذائية المحلية",
        feat_nut_h3: "<strong>تحويل تلقائي:</strong> التعامل الفوري مع الأكواب والجرامات والقطع",
        feat_nut_h4: "<strong>نتائج PRAL:</strong> تنبيهات بصرية مسبقة لمنع حموضة الدم الاستقلابية",
        feat_nut_badge_index: "فهرسة فائقة السرعة",

        // Feature Details - Clinical
        feat_clin_title: "حارس السلامة السريرية النخبوية",
        feat_clin_desc: "محرك استنتاج ذاتي يراقب كل مدخل مقابل البروتوكولات الكلوية المعتمدة عالمياً.",
        feat_clin_ex_title: "منطق القواعد: بروتوكول سلامة البوتاسيوم",
        feat_clin_ex_expl: "يفعل النظام تجاوزات استباقية عندما تنحرف نتائج المختبر عن المناطق الآمنة.",
        feat_clin_h1: "<strong>منطق ديناميكي:</strong> تتكيف القواعد مع تغيرات معادلة CKD-EPI",
        feat_clin_h2: "<strong>تكامل المختبر:</strong> تنبيهات فورية عند تعارض الغذاء مع آخر تحاليلك",
        feat_clin_h3: "<strong>دقة طبية:</strong> تشمل معادلات الكالسيوم المصحح والوزن المعدل (AjBW)",

        // Feature Details - Visual Recognition
        feat_vis_title: "الذكاء البصري للأطباق",
        feat_vis_desc: "تعرف على الفواكه والخضروات والأطباق المعقدة فوراً. فقط وجه الكاميرا واترك المهمة لـ 'مرشد'.",
        feat_vis_h1: "<strong>تعرف فوري:</strong> مدعوم بتقنيات Gemini-Vision المتقدمة",
        feat_vis_h2: "<strong>حصص دقيقة:</strong> التعرف على الأصناف وتعديل أوزانها بلحظة",
        feat_vis_h3: "<strong>تسجيل مباشر:</strong> إضافة المكونات مباشرة إلى ميزانيتك اليومية",
        feat_vis_h4: "<strong>وعي ثقافي:</strong> مطور خصيصاً للأصناف الغذائية الشرق أوسطية",
        res_data_title: "بروتوكول الوصول للبيانات",
        res_data_subtitle: "ثلاثة مستويات للوصول مصممة للشفافية والتعاون الأكاديمي.",
        res_tier1_label: "المستوى 1: عام",
        res_tier1_title: "رؤى عامة",
        res_tier1_desc: "إحصائيات حية ومجمعة حول اتجاهات تغذية المرضى. مثالية للمراجع العامة والاستشهادات السريعة.",
        res_tier1_action: "عرض التقارير الحية",
        res_tier2_label: "المستوى 2: موثق",
        res_tier2_title: "قواعد البيانات البحثية الموثقة",
        res_tier2_desc: "الوصول إلى مجموعات بيانات خام مجهولة المصدر تماماً (CSV) تشمل سجلات العناصر الغذائية واتجاهات المختبر. يتطلب التحقق المؤسسي.",
        res_tier2_action: "طلب وصول",
        res_tier3_label: "المستوى 3: استراتيجي",
        res_tier3_title: "التعاون الاستراتيجي والأكاديمي",
        res_tier3_desc: "شارك مباشرة مع الدكتور فراس سويد وفريقنا الأكاديمي لبروتوكولات بيانات مخصصة ونشر مشترك.",
        res_tier3_action: "تقديم مقترح",
        res_cite_title: "معايير الاقتباس",
        res_cite_subtitle: "إذا استخدمت بياناتنا، فإن الإسناد الصحيح مطلوب. هذا يساعد في بناء مرجعيتنا الأكاديمية.",
        res_cite_format_label: "صيغة الاقتباس القياسية (APA):",
        res_cite_note: "جميع مجموعات البيانات مرخصة بموجب <strong>CC BY-NC 4.0</strong>. يُحظر تماماً الاستخدام للنمذجة التجارية أو إعادة البيع بدون ترخيص منفصل.",
        res_citation_code: "مبادرة أبحاث مرافق الكلى. (2026). الالتزام الغذائي الواقعي لدى مرضى الكلى المزمن [مجموعة بيانات]. مرافق الكلى. https://renal-companion.github.io/landing/researchers",

        // Download Modal
        modal_title: "قريباً!",
        modal_message: "لم يتم نشر التطبيق رسمياً بعد. ستكون النسخة التجريبية متاحة قريباً. ابقَ على اطلاع وتابعنا على لينكد إن للحصول على آخر التحديثات!",
        modal_follow_btn: "تابعنا على لينكد إن",

        // Gallery Page
        gallery_page_title: "معرض التطبيق | مرافق الكلى",
        gallery_page_desc: "استكشف ميزات مرافق الكلى من خلال لقطات الشاشة - المساعد الذكي، تحليلات المختبر، تتبع التغذية، والمزيد.",
        nav_gallery: "معرض التطبيق",
        gallery_hero_title: "اكتشف مرافق الكلى",
        gallery_hero_subtitle: "رحلة بصرية عبر التميز السريري",
        gallery_hero_desc: "استكشف تطبيقنا الشامل لإدارة أمراض الكلى المزمنة من خلال لقطات شاشة حقيقية تعرض التوجيه الغذائي المدعوم بالذكاء الاصطناعي، وتحليلات المختبر، والرعاية الشخصية.",
        gallery_cat1_title: "لوحة التحكم الرئيسية والنظرة العامة",
        gallery_cat1_desc: "مركز صحتك الشخصي مع وصول سريع لجميع الميزات الأساسية وتتبع وظائف الكلى في الوقت الفعلي.",
        gallery_cat1_img1: "الشاشة الرئيسية الكاملة مع جميع الميزات الرئيسية",
        gallery_cat1_img2: "تتبع التغذية الأسبوعي مع أشرطة تقدم ملونة",
        gallery_cat1_feat1: "واجهة نظيفة وعصرية مع تصميم متدرج",
        gallery_cat1_feat2: "وصول سريع لجميع الميزات الرئيسية",
        gallery_cat1_feat3: "نظرة عامة على التغذية الأسبوعية مع مؤشرات تقدم مرئية",
        gallery_cat1_feat4: "تتبع مرحلة CKD مع نسبة وظائف الكلى",
        gallery_cat2_title: "تحليلات المختبر وتتبع eGFR",
        gallery_cat2_desc: "رسوم بيانية تفاعلية وتحليل الاتجاهات لمؤشرات وظائف الكلى مع مناطق تحذير ذكية.",
        gallery_cat2_img1: "مخطط اتجاه eGFR مع مرشحات زمنية",
        gallery_cat2_img2: "مخطط تتبع السعرات الحرارية التفصيلي",
        gallery_cat2_img3: "اتجاه تناول البروتين مع منطقة التحذير",
        gallery_cat2_feat1: "رسوم بيانية تفاعلية لـ eGFR والكرياتينين ومؤشرات الكلى",
        gallery_cat2_feat2: "تصفية زمنية (أسبوع، شهر، سنة)",
        gallery_cat2_feat3: "مناطق تحذير مرئية للمستويات غير الآمنة",
        gallery_cat2_feat4: "تتبع البيانات التاريخية مع تقدم مرمز بالألوان",
        gallery_cat3_title: "المساعد الذكي (مرشد)",
        gallery_cat3_desc: "إرشادات طبية ذكية مدعومة بـ Google Gemini، توفر نصائح شخصية بناءً على مرحلة CKD الخاصة بك.",
        gallery_cat3_img1: "شاشة ترحيب مرشد الذكي مع أسئلة مقترحة",
        gallery_cat3_img2: "إرشادات طبية تفصيلية حول الفوسفور وأمراض الكلى المزمنة",
        gallery_cat3_img3: "استجابة شاملة من الذكاء الاصطناعي مع توصيات غذائية",
        gallery_cat3_feat1: "مدعوم بـ Google Gemini AI للحصول على معلومات طبية دقيقة",
        gallery_cat3_feat2: "إرشادات شخصية بناءً على مرحلة CKD الخاصة بك",
        gallery_cat3_feat3: "أسئلة مقترحة للتفاعل السهل",
        gallery_cat3_feat4: "نصائح غذائية ونمط حياة قائمة على الأدلة",
        gallery_cat4_title: "البحث الذكي عن الطعام مع التعرف البصري",
        gallery_cat4_desc: "ابحث عن المعلومات الغذائية فوراً عن طريق البحث أو التقاط صورة لطعامك.",
        gallery_cat4_img1: "اختر البحث اليدوي أو المسح بالكاميرا",
        gallery_cat4_img2: "التعرف البصري الفوري على الطعام (موز)",
        gallery_cat4_img3: "نافذة تغذية تفصيلية مع أشرطة ملونة",
        gallery_cat4_feat1: "إدخال مزدوج: بحث يدوي أو مسح بالكاميرا",
        gallery_cat4_feat2: "التعرف البصري الفوري على الطعام",
        gallery_cat4_feat3: "أشرطة نسبة العناصر الغذائية مرمزة بالألوان",
        gallery_cat4_feat4: "تخصيص حجم الحصة",
        gallery_cat5_title: "ماسح الملصقات مع تحذيرات السلامة",
        gallery_cat5_desc: "امسح ملصقات المنتجات للكشف الفوري عن المواد المضافة الضارة والحصول على تحذيرات سلامة شخصية.",
        gallery_cat5_img1: "ملصق عصير البرتقال مع تحذير السلامة",
        gallery_cat5_img2: "حقائق التغذية مع تنبيه الصوديوم العالي",
        gallery_cat5_img3: "سجل المسح للرجوع السريع",
        gallery_cat5_feat1: "مسح ملصقات المنتجات في الوقت الفعلي",
        gallery_cat5_feat2: "تحذيرات تلقائية للفوسفور/الصوديوم/البوتاسيوم العالي",
        gallery_cat5_feat3: "OCR ثنائي اللغة (عربي/إنجليزي)",
        gallery_cat5_feat4: "سجل المسح للتتبع",
        gallery_cat6_title: "تتبع التغذية والسجلات اليومية",
        gallery_cat6_desc: "تسجيل التغذية اليومية الشامل مع حساب تلقائي للعناصر الغذائية وتتبع التقدم المرئي.",
        gallery_cat6_img1: "سجل التغذية اليومي مع جميع الوجبات",
        gallery_cat6_img2: "تفصيل يومي مفصل مع الرسوم البيانية",
        gallery_cat6_img3: "قائمة كاملة بالعناصر الغذائية مع أشرطة التقدم",
        gallery_cat6_img4: "نافذة إدخال الوجبة مع تفاصيل العناصر الغذائية",
        gallery_cat6_feat1: "حساب تلقائي للعناصر الغذائية لجميع الوجبات",
        gallery_cat6_feat2: "أشرطة تقدم مرئية للعناصر الغذائية الرئيسية",
        gallery_cat6_feat3: "تتبع السعرات الحرارية والبروتين والفوسفور والبوتاسيوم والصوديوم",
        gallery_cat6_feat4: "رسوم بيانية تفاعلية تظهر الاتجاهات اليومية",
        gallery_cat7_title: "الملف الشخصي للمريض والإعدادات",
        gallery_cat7_desc: "ملفات شخصية مخصصة مع تصنيف CKD، وأهداف قابلة للتخصيص، وتتبع صحي شامل.",
        gallery_cat7_img1: "الملف الشخصي للمريض مع شارة المرحلة الأولى من CKD",
        gallery_cat7_img2: "صفحة الإعدادات مع خيارات التخصيص",
        gallery_cat7_img3: "نموذج إدخال بيانات المريض التفصيلي",
        gallery_cat7_img4: "نافذة إدخال العلامات الحيوية",
        gallery_cat7_feat1: "ملفات شخصية مخصصة مع تصنيف CKD",
        gallery_cat7_feat2: "أهداف غذائية يومية قابلة للتخصيص",
        gallery_cat7_feat3: "تتبع الأمراض المصاحبة (السكري، ارتفاع ضغط الدم)",
        gallery_cat7_feat4: "مراقبة العلامات الحيوية (الوزن، ضغط الدم، معدل ضربات القلب)",
        gallery_cta_title: "هل أنت مستعد لتجربة التميز السريري؟",
        gallery_cta_desc: "قم بتنزيل مرافق الكلى وتحكم في صحة كليتك مع إرشادات مدعومة بالذكاء الاصطناعي.",
        gallery_cta_btn: "تحميل لنظام Android",

        res_btn_copy: "نسخ",
        res_export_title: "📊 بيانات علمية مفتوحة",
        res_export_desc: "بينما الكود مغلق المصدر، فإن مجموعات البيانات المجهولة لدينا متاحة للبحث الأكاديمي. احصل على سجلات تغذية واقعية.",
        res_docs_title: "📖 بروتوكول البيانات المفتوحة",
        res_docs_desc: "نتبع نموذجاً صارماً للوصول إلى البيانات من 3 مستويات. التقارير العامة مجانية، والبيانات الخام متاحة عند الطلب المؤسسي.",
        res_irb_title: "🔬 جاهز للمراجعة الأخلاقية",
        res_irb_desc: "تصميم يراعي الخصوصية أولاً بدون مزامنة سحابية. مناسب لبيئات المستشفيات وموافقة مجالس الأخلاقيات.",
        res_collab_title: "🤝 تعاون أكاديمي",
        res_collab_desc: "شارك فريقنا لبروتوكولات جمع بيانات مخصصة ونشر مشترك للأبحاث.",
        res_cite_text: "يحمي مرافق الكلى خوارزمياته الخاصة ولكنه يحرر البيانات. ندعو الباحثين للاستفادة من 'مجموعات البيانات المحققة' الخاصة بنا لتعزيز رعاية أمراض الكلى.",
        res_btn_portal: "افتح بوابة الأبحاث",
        res_cta_title: "انضم إلى شبكة الأبحاث الموثقة",
        res_cta_subtitle: "ساهم في أكبر مبادرة مفتوحة المصدر لبيانات تغذية الكلى.",
        res_cta_btn: "قدم طلب وصول",
        res_dua_title: "اتفاقية استخدام البيانات (DUA)",
        res_dua_desc: "إطار قانوني موحد يحكم الاستخدام غير التجاري لمستويات البيانات السريرية.",
        res_irb_kit_title: "حقيبة تجهيز IRB/الأخلاقيات",
        res_irb_kit_desc: "وثائق معبأة مسبقاً لتقديمها إلى لجان المراجعة المؤسسية (IRB) لتسريع الموافقة على الدارسات السريرية.",
        res_protocol_title: "بروتوكول التحليل الإحصائي",
        res_protocol_desc: "منهجية مفتوحة المصدر لربط تناول المغذيات باتجاهات وظائف الكلى الطولية (GFR/Creatinine).",

        // Reports Page
        reports_page_title: "مرافق الكلى | المؤشر العالمي للتغذية",
        rep_status_badge: "الدورة الحالية: دفعة 2026",
        rep_hero_title: "المؤشر العالمي لتغذية الكلى (GRNI)",
        rep_hero_subtitle: "التقرير السنوي الموثوق حول اتجاهات الالتزام الغذائي وتطور المرض في مجتمعات أمراض الكلى المزمنة.",

        // CDSS Inference Engine Deep-Dive
        engine_title: "منطق الاستدلال السريري",
        engine_subtitle: "تنسيق غذائي حتمي قائم على قواعد الأولوية",
        engine_desc: "يستخدم نظام دعم القرار السريري (CDSS) في مرافق الكلى محرك استدلال حتمي متعدد الطبقات لحل القيود الغذائية في الوقت الفعلي.",
        engine_step1_title: "1. المعايرة الأساسية",
        engine_step1_desc: "حساب IBW (Hamwi) و CKD-EPI (2021) eGFR لتحديد السقف البيولوجي للمريض.",
        engine_step2_title: "2. حل الأولويات",
        engine_step2_desc: "يتم فحص القواعد السريرية مقابل الأمراض المصاحبة. البروتوكولات ذات الأولوية العالية (مثل الغسيل النشط) تتجاوز ديناميكياً الخطوط الأساسية المزمنة.",
        engine_step3_title: "3. حلقة التغذية الراجعة للمختبر",
        engine_step3_desc: "معايرة فورية بناءً على المؤشرات الحيوية الحديثة. ارتفاع البوتاسيوم > 5.5 أو الصوديوم > 145 يفعل قيود سلامة استباقية فورية (2000 ملغ / 1500 ملغ).",

        // Advanced Analytics
        analytics_title: "رسم الخرائط التنبؤية للمؤشرات الحيوية",
        analytics_subtitle: "تحليل الاتجاهات والنمذجة الأيضية بدرجة أكاديمية",
        analytics_desc: "الاستفادة من النماذج الرياضية المتطورة لمراقبة تطور المرض والحمل الأيضي السام.",
        analytics_feature1_title: "اتجاهات الانحدار الخطي",
        analytics_feature1_desc: "رسم مسار GFR والكرياتينين لمدة 90 يوماً للكشف عن 'التدهور السريع' (>5 مل/دقيقة/سنة).",
        analytics_feature2_title: "نمذجة الحماض الأيضي",
        analytics_feature2_desc: "حساب ديناميكي لدرجات PRAL (الحمل الحمضي الكلوي المحتمل) للوقاية من المضاعفات الأيضية الناتجة عن النظام الغذائي.",

        // Compliance Matrix
        matrix_title: "سجل الامتثال للإرشادات العالمية",
        matrix_subtitle: "التزام محقق بمعايير طب الكلى الدولية",
        matrix_header_standard: "المعيار العالمي",
        matrix_header_implementation: "منطق مرافق الكلى",
        matrix_row1_std: "KDOQI 2024: تقييد البوتاسيوم",
        matrix_row1_impl: "قيود واعية بالسياق بناءً على مستويات GFR وبوتاسيوم المصل.",
        matrix_row2_std: "CKD-EPI 2021: eGFR بدون عرق",
        matrix_row2_impl: "تنفيذ حتمي للمعاملات المحايدة عرقياً.",
        matrix_row3_std: "Hamwi/AjBW: جرعات البروتين",
        matrix_row3_impl: "معامل تصحيح 0.25 لمعايرة السمنة أو سوء التغذية.",

        rep_method_title: "بروتوكول النشر",
        rep_method_text: "تتطلب سلامة البيانات تحققاً زمنياً صارماً. لضمان أن تعكس رؤانا العامة اتجاهات ذات دلالة إحصائية وليست مجرد شذوذ عابر، تعمل مبادرة أبحاث مرافق الكلى وفق دورة نشر سنوية. باستخدام بروتوكول التجميع 'دون اتصال'، يتم تجميع مجموعات البيانات المحققة، وإخفاء هويتها، ومراجعتها داخلياً قبل الإصدار العام.",
        rep_step1_date: "يناير - ديسمبر 2026",
        rep_step1_title: "مرحلة تجميع البيانات",
        rep_step1_desc: "جمع في الوقت الفعلي لسجلات الاستخدام مجهولة المصدر. تحقق مستمر من مدخلات قاعدة بيانات الغذاء وارتباطات نتائج المختبر.",
        rep_step2_date: "الربع الأول 2027",
        rep_step2_title: "التحقق الداخلي",
        rep_step2_desc: "فحوصات سلامة آلية لإزالة البيانات غير المكتملة والشاذة. نمذجة الاتجاهات الأولية من قبل الفريق الأكاديمي الأساسي.",
        rep_step3_date: "الربع الثاني 2027",
        rep_step3_title: "الإصدار العام (GRNI 2027)",
        rep_step3_desc: "نشر أول تقرير للمؤشر العالمي لتغذية الكلى. وصول مفتوح للباحثين والأطباء وصناع السياسات الصحية.",
        rep_notify_title: "وصول مبكر للباحثين",
        rep_notify_desc: "اشترك ليتم إشعارك لحظة انتهاء مرحلة التحقق لعام 2026.",
        rep_notify_btn: "اشترك في التحديثات",
        download_guide_1: "اضغط على زر 'تحميل APK' أعلاه",
        download_guide_2: "بعد اكتمال التحميل، افتح ملف APK",
        download_guide_3: "اسمح بالتثبيت من مصادر غير معروفة إذا طُلب منك ذلك",
        download_guide_4: "اضغط على 'تثبيت' وانتظر حتى تكتمل العملية",
        download_guide_5: "افتح Renal Companion وابدأ رحلتك!",
        download_info_version: "الإصدار: 1.0.0 (تجريبي)",
        download_info_date: "تاريخ الإصدار: 1 يناير 2026",
        download_info_req: "يدعم: Android 5.0 فما فوق",
        download_secure_text: "رابط تحميل مباشر وآمن",
        download_cta_main: "تحميل APK",
        download_steps_title: "خطوات التثبيت",
        footer_brand_name: "مرافق الكلى",
        // Methodology Page
        meth_page_title: "مرافق الكلى | المنهجية العلمية",
        meth_hero_title: "منهجية المعلوماتية و",
        meth_hero_highlight: "التحقق السريري",
        meth_hero_subtitle: "نظرة عامة على البروتوكولات الحتمية والاحتمالية التي تحكم محرك استنتاج مرافق الكلى.",

        meth_core_title: "معمارية التحقق ثنائية الطبقة",
        meth_core_desc: "يعمل مرافق الكلى على نموذج استنتاج هجين يوازن بين الأمان المطلق للقواعد السريرية والمرونة السياقية للنماذج اللغوية الكبيرة.",

        meth_layer1_title: "الطبقة الأولى: المنطق السريري الحتمي",
        meth_layer1_desc: "محرك قواعد صلب مبني على إرشادات KDOQI و KDIGO لعام 2024. يتم التحقق من كل مدخل غذائي مقابل قائمة مرجعية للسلامة مكونة من 50 نقطة تشمل مرحلة القصور، منحنى GFR، ومستويات الشوارد في المصل.",

        meth_layer2_title: "الطبقة الثانية: استنتاج RAG الاحتمالي",
        meth_layer2_desc: "يسمح التوليد المعزز بالاسترجاع (RAG) لـ 'مرشد' بصياغة النصائح ضمن بيئة تجريبية سريرية مقيدة. يتم تقييد الذكاء الاصطناعي بواسطة الطبقة الحتمية، مما يضمن عدم اقتناحه بتناول يتجاوز حدود الأمان المحسوبة.",

        meth_formula_title: "الصيغ السريرية المعتمدة",
        meth_formula_desc: "جميع الحسابات مستمدة من معايير أمراض الكلى المراجعة من قبل الأقران.",
        meth_f1_name: "معادلة CKD-EPI (2021)",
        meth_f1_desc: "تستخدم لتقدير eGFR بدون متغيرات عرقية، امتثالاً لأحدث التوصيات السريرية الدولية.",
        meth_f2_name: "الوزن المثالي المعدل (AjBW)",
        meth_f2_desc: "ضروري لحساب متطلبات البروتين لدى مرضى الكلى الذين يعانون من السمنة أو سوء التغذية لمنع الإفراط في الوصف.",
        meth_f3_name: "الكالسيوم المصحح / مؤشرات PRAL",
        meth_f3_desc: "تعديل تلقائي لنقص ألبومين الدم ومراقبة الحمل الحمضي الكلوي المحتمل.",

        meth_safety_title: "ضوابط سلامة المعلوماتية",
        meth_safety_desc: "لمنع 'الهلوسة البرمجية'، يشتمل موجه النظام على قواعد نحوية مقيدة سريرياً (CCG) تحصر المخرجات ضمن نطاقات المغذيات المعتمدة من KDOQI.",
        meth_appendix_title: "التوثيق السريري الجنائي",
        meth_appendix_subtitle: "المواصفات الفنية للمنطق الداخلي والتدقيق القائم على الرؤية",
        meth_roadmap_title: "خارطة طريق البحث والتطوير",
        meth_roadmap_subtitle: "المسار نحو التنفيذ السريري والتحقق متعدد المراكز",
        meth_phase1_title: "المرحلة الأولى: بيئة المعلوماتية التجريبية",
        meth_phase1_desc: "التحقق من محرك القواعد الحتمي مقابل أكثر من 10,000 ملف تعريفي اصطناعي لضمان عدم وجود 'هلوسات برمجة'.",
        meth_phase2_title: "المرحلة الثانية: الدراسة التجريبية الرصدية",
        meth_phase2_desc: "مراقبة الالتزام الغذائي في مجموعة محكومة من 200 مريض (مرحلة 3-5) باستخدام واجهة مرافق الكلى.",
        meth_phase3_title: "المرحلة الثالثة: التكامل السريري",
        meth_phase3_desc: "التكامل مع نظم المعلومات المستشفى (HIS) عبر HL7/FHIR لمزامنة البيانات المخبرية المباشرة.",
        meth_protocol_a_title: "البروتوكول أ: تدقيق مضافات الفوسفور",
        meth_protocol_a_desc: "يقوم محرك الاستدلال القائم على الرؤية بتحليل عميق لقوائم المكونات لاكتشاف مضافات الفوسفور غير العضوية، والتي تتميز بمعدلات امتصاص تقارب 100% لدى مرضى الكلى المزمن.",
        meth_protocol_b_title: "البروتوكول ب: إعادة المعايرة بناءً على الوزن",
        meth_protocol_b_desc: "تستخدم جرعات البروتين والسوائل تعديل الوزن المثالي المعدل (AjBW) لصيغة Hamwi للمرضى الذين يعانون من تباين في مؤشر كتلة الجسم (>30 أو <18.5).",
        // Terms Page
        terms_page_title: "شروط الاستخدام | مرافق الكلى",
        terms_hero_title: "اتفاقية شروط الاستخدام",
        terms_hero_subtitle: "الاتفاقية القانونية، إخلاء المسؤولية الطبي، وسياسة الاستخدام المقبول.",
        terms_last_updated: "آخر تحديث: 1 فبراير 2026",
        terms_sec1_title: "1. المقدمة والقبول",
        terms_sec1_text: "من خلال تحميل أو الوصول إلى أو استخدام تطبيق 'مرافق الكلى' ('الخدمة')، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام التطبيق.",
        terms_sec2_title: "2. لا نقدم نصائح طبية",
        terms_sec2_text: "مرافق الكلى هو أداة معلوماتية سريرية وليس طبيباً. المحتوى المقدم هو للأغراض الإعلامية والتعليمية فقط.",
        terms_sec2_li1: "التطبيق لا يقدم تشخيصات طبية أو نصائح علاجية.",
        terms_sec2_li2: "الحسابات (eGFR، AjBW) هي تقديرات رياضية ويجب التحقق منها بواسطة متخصص رعاية صحية مؤهل.",
        terms_sec2_li3: "في حالة الطوارئ الطبية، اتصل بخدمات الطوارئ المحلية على الفور.",
        terms_sec3_title: "3. مسؤوليات المستخدم",
        terms_sec3_text: "أنت المسؤول الوحيد عن دقة البيانات التي تدخلها في النظام (مثل الوزن، نتائج المختبر، نوع الغسيل الكلوي). تعتمد 'حواجز الأمان' في التطبيق تماماً على دقة مدخلاتك.",
        terms_sec4_title: "4. الملكية الفكرية",
        terms_sec4_text: "الكود المصدري، البنية التحتية، ومنطق الاستدلال الخاص بـ 'مرشد AI' هي ملكية خاصة للدكتور فراس سويد. يمنع منعاً باتاً الهندسة العكسية.",
        terms_sec4_note: "استثناء البحث: يجوز استخدام مجموعات البيانات مجهولة المصدر للبحث الأكاديمي بموجب رخصة البيانات العلمية المفتوحة لدينا، شريطة ذكر المصدر بشكل صحيح.",
        terms_sec5_title: "5. حدود المسؤولية",
        terms_sec5_text: "إلى أقصى حد يسمح به القانون، لن يكون 'مرافق الكلى' أو مطوروه مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك للخدمة أو اعتمادك على أي معلومات مقدمة.",
        terms_contact: "لديك أسئلة؟ تواصل مع الفريق القانوني:",
    }
};

// ========================================
// i18n Core Functions
// ========================================

// Immediate detection to prevent FOUC
(function () {
    const savedLang = localStorage.getItem('renalCompanionLang') || 'en';
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
})();

let currentLang = localStorage.getItem('renalCompanionLang') || 'en';

function setLanguage(lang, forceRedirect = false) {
    currentLang = lang;
    localStorage.setItem('renalCompanionLang', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // URL update is no longer needed since we are on a single page system
    // We only update the content and directionality


    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Update alt tags
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });

    // Update Hrefs (Clean up language specific URLs)
    document.querySelectorAll('[data-i18n-href]').forEach(element => {
        // In a single-file system, we don't need to change the hrefs for language files
        // But we might need to update links to other pages (about.html, methodology.html)
        // Ensure they point to the correct file regardless of language
    });

    // Update Meta Tags
    const metaMap = {
        'title': 'meta_title',
        'meta[name="description"]': 'meta_description',
        'meta[property="og:title"]': 'meta_og_title',
        'meta[property="og:description"]': 'meta_og_description',
        'meta[property="twitter:title"]': 'meta_og_title',
        'meta[property="twitter:description"]': 'meta_og_description'
    };

    Object.entries(metaMap).forEach(([selector, key]) => {
        const element = document.querySelector(selector);
        if (element && translations[lang][key]) {
            if (selector === 'title') {
                document.title = translations[lang][key];
            } else {
                element.setAttribute('content', translations[lang][key]);
            }
        }
    });

    // Update language toggle buttons (Desktop & Mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.textContent = lang === 'en' ? 'العربية' : 'English';
        btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
    });

    // Trigger custom event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang); // Removed forceRedirect as it's no longer needed
}

// ========================================
// Initialize on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Setup language toggle buttons (Desktop & Mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    });

    console.log(`%c🌍 i18n System Loaded - Current Language: ${currentLang}`, 'font-size: 14px; color: #10B981; font-weight: bold;');
});

// Export for use in other scripts
window.i18n = {
    setLanguage,
    toggleLanguage,
    getCurrentLang: () => currentLang,
    translations
};
