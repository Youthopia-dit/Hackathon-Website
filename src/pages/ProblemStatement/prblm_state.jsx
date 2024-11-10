import './prblm_state.css';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';

const problemStatements = [
    {
        "id": "CAE01",
        "title": "AI-Powered Deforestation Monitoring Tool",
        "description": "Build a tool that analyzes satellite imagery to detect deforestation patterns and illegal logging activities. This system should highlight deforested areas on a map, provide alerts for new deforestation zones, and help conservationists respond quickly.",
        "theme": "Climate Action & Environmental Conservation"
    },
    {
        "id": "CAE02",
        "title": "Community Plastic Waste Collection System",
        "description": "Design a software platform that tracks and manages plastic waste collection and recycling efforts within a community. The solution should incentivize community members to participate, log data on waste collected, and promote environmental awareness and community-driven actions. This web-based app can include a point-based reward system, data visualizations of waste reduction progress, and educational resources to engage users in sustainable practices.",
        "theme": "Climate Action & Environmental Conservation"
    },
    {
        "id": "CAE03",
        "title": "Secure Carbon Credit Trading Platform Using Blockchain",
        "description": "Develop a blockchain-based platform for carbon credit trading to encourage corporate accountability in carbon reduction. The system should allow for secure, transparent transactions and verifiable carbon credit ownership, using cryptographic signatures to prevent fraud and maintain trust.",
        "theme": "Climate Action & Environmental Conservation"
    },
    {
        "id": "CAE04",
        "title": "Student Innovation",
        "description": "Develop innovative solutions that leverage technology to monitor, reduce, or reverse environmental degradation and promote sustainable practices in communities.",
        "theme": "Climate Action & Environmental Conservation"
    },
    {
        "id": "SSC01",
        "title": "Public Transportation Route Optimization",
        "description": "Design an app that provides real-time information on public transportation, suggesting optimized routes for users based on traffic data. The app should help reduce commute time, pollution, and enhance the convenience of public transit options in urban areas.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "SSC02",
        "title": "Community-Based Crime Alert System",
        "description": "Create a neighborhood safety app where residents can report suspicious activities and receive alerts. The solution should foster community safety awareness, allow users to check local crime statistics, and notify nearby residents about emergencies or high-risk areas.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "SSC03",
        "title": "Blockchain-Based Secure Identity Management for Public Services",
        "description": "Design a blockchain-based identity management system that allows city residents to securely access various public services (like transportation, healthcare, and library services) using cryptographic identity verification. The solution should focus on privacy-preserving techniques that prevent unauthorized access and protect user data while offering seamless service access to authenticated users.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "SSC04",
        "title": "AI-Powered Urban Water Management System",
        "description": "Build an AI-based tool that can predict water demand, optimize water distribution, and minimize wastage in densely populated urban areas. The solution should include predictive analytics for future water needs based on factors like population density and seasonal changes. An added feature to support flood or drought management would make the solution even more robust and applicable to water-scarce Indian cities.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "SSC05",
        "title": "Smart Parking Solution for Urban Centers",
        "description": "Develop a mobile app that enables real-time parking space detection, reservation, and payment in urban areas. The app should reduce the hassle of finding parking, minimize traffic congestion, and help create a more sustainable, organized parking system.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "SSC06",
        "title": "Student Innovation",
        "description": "Create systems or platforms that improve the efficiency, safety, and livability of cities through smart technologies and sustainable infrastructure.",
        "theme": "Smart & Sustainable Cities"
    },
    {
        "id": "AFS01",
        "title": "Crop Yield Prediction Using Climate-Smart Analytics",
        "description": "Challenge participants to design a machine learning model that predicts crop yield for small farmers based on factors like weather patterns, soil health, and crop type. The solution should offer insights for farmers to improve crop management practices, specifically in rainfed regions of India, where climate variability significantly impacts agricultural productivity.",
        "theme": "Agritech & Food Security"
    },
    {
        "id": "AFS02",
        "title": "Precision Agriculture Platform for Water Management",
        "description": "Develop a precision agriculture platform that leverages satellite data, weather forecasts, and local soil conditions to optimize irrigation schedules. The platform should notify farmers when to water crops and how much water to use, reducing wastage and improving productivity, especially in drought-prone areas of India.",
        "theme": "Agritech & Food Security"
    },
    {
        "id": "AFS03",
        "title": "Farmers Disease Diagnostic/Reporting Portal - Mobile Portal Al Based",
        "description": "Develop a AI-powered mobile tool designed to support agricultural productivity by enabling quick, accessible disease diagnosis and reporting for crops and livestock. Farmers, especially in remote or resource-limited areas, can use this portal to upload images and descriptions of disease symptoms and receive AI-driven diagnoses, along with recommended treatments and preventive measures. By integrating with existing systems like the NDLM, the platform also alerts veterinarians for timely intervention. This technology empowers farmers with critical insights and expert support, promoting healthier farms, improved productivity, and sustainable agriculture practices through enhanced data collection and surveillance.",
        "theme": "Agritech & Food Security"
    },
    {
        "id": "AFS04",
        "title": "Student Innovation",
        "description": "Design tools or technologies that enhance agricultural productivity, sustainability, and food distribution to address challenges in food security and resource management.",
        "theme": "Agritech & Food Security"
    },
    {
        "id": "SER01",
        "title": "Dynamic Energy Demand Forecasting System",
        "description": "Create a predictive AI model that forecasts daily energy demand patterns for residential and industrial zones based on weather, time of day, and historical consumption data. The tool should provide real-time insights and offer recommendations to optimize energy usage during peak hours, helping reduce strain on the grid and promote sustainable consumption.",
        "theme": "Sustainable Energy & Resources"
    },
    {
        "id": "SER02",
        "title": "Intelligent Load Balancing System for Electric Vehicles (EVs)",
        "description": "Build an AI-powered load balancing solution for managing electric vehicle (EV) charging in real time, prioritizing charging during off-peak hours and distributing demand across multiple charging stations. This system should integrate with EV charging apps and provide users with optimal charging schedules to reduce energy costs and support grid stability.",
        "theme": "Sustainable Energy & Resources"
    },
    {
        "id": "SER03",
        "title": "Smart Grid Management and Optimization",
        "description": "Challenge participants to build a platform that analyzes smart grid data to optimize energy distribution across urban and rural areas. The solution should predict power demands and help utilities minimize waste, reduce outages, and optimize renewable energy use.",
        "theme": "Sustainable Energy & Resources"
    },
    {
        "id": "SER04",
        "title": "Student Innovation",
        "description": "Build scalable solutions that optimize the generation, storage, and consumption of renewable energy while promoting sustainable resource management.",
        "theme": "Sustainable Energy & Resources"
    },
    {
        "id": "EDI01",
        "title": "Virtual Classroom Accessibility for Rural Students",
        "description": "Develop a low-data mobile solution to enable virtual classroom access for students in remote areas. The app should provide access to recorded lessons and assignments, with features designed to work with minimal internet and smartphone capabilities.",
        "theme": "Education and Digital Inclusion"
    },
    {
        "id": "EDI02",
        "title": "Inclusive Learning for Differently-Abled Students",
        "description": "Develop an inclusive e-learning platform that offers resources tailored to visually, hearing, or physically impaired students. The solution should include voice-to-text, sign language translation, and interactive exercises to empower differently-abled students.",
        "theme": "Education and Digital Inclusion"
    },
    {
        "id": "EDI03",
        "title": "Code Documentation using Gen AI",
        "description": "Design an AI tool that automatically generates detailed and accurate documentation for codebases using Generative AI. The tool should analyze code, recognize patterns, and create comprehensive documentation, including function descriptions, code comments, and user guides. It could also provide recommendations for improving code readability, ensure adherence to coding standards, and create diagrams to illustrate code structure. Integration with popular development environments and version control systems would enhance usability.",
        "theme": "Education and Digital Inclusion"
    },
    {
        "id": "EDI04",
        "title": "Student Innovation",
        "description": "Develop accessible and inclusive educational technologies that bridge learning gaps, cater to diverse needs, and improve digital literacy for all students.",
        "theme": "Education and Digital Inclusion"
    },
    {
        "id": "HWA01",
        "title": "AI-Powered Health Information Platform for Low-Literacy Populations",
        "description": "Many people in underserved or rural communities have limited health literacy, making it difficult for them to understand medical information or make informed health decisions. Develop a software solution that simplifies health-related content and makes it accessible to individuals with low literacy levels. This could be through audio-based explanations, visual guides, or interactive Q&A, powered by AI to help users find relevant information based on their symptoms or conditions.",
        "theme": "Healthcare and Wellbeing Accessibility",
        "difficulty": "Easy"
    },
    {
        "id": "HWA02",
        "title": "Mental Health Support Chatbot",
        "description": "Design an AI chatbot that provides mental health support and resources to individuals experiencing stress or anxiety. The chatbot should offer empathetic responses, coping mechanisms, and links to professional help for users who may need further assistance.",
        "theme": "Healthcare and Wellbeing Accessibility",
        "difficulty": "Easy"
    },
    {
        "id": "HWA03",
        "title": "Personalized Health Monitoring System for Chronic Disease Management",
        "description": "Managing chronic diseases like diabetes, hypertension, or heart disease requires constant monitoring, but many patients lack tools that provide personalized, actionable feedback. Build a mobile app or wearable integration that tracks relevant health metrics (e.g., blood sugar levels, blood pressure, heart rate) and offers personalized recommendations based on the data. Include features for real-time alerts, medication reminders, and easy communication with healthcare providers.",
        "theme": "Healthcare and Wellbeing Accessibility",
        "difficulty": "Hard"
    },
    {
        "id": "HWA04",
        "title": "AI-Powered Cancer Screening and Risk Prediction",
        "description": "Design an AI model that uses imaging data (like X-rays, MRIs, and CT scans) and patient demographics to screen for early signs of cancers, such as breast, lung, or skin cancer. The system should identify potential malignancies and estimate a risk score, notifying healthcare providers of cases that require urgent attention, and offering accessible interpretations for patients.",
        "theme": "Healthcare and Wellbeing Accessibility",
        "difficulty": "Hard"
    },
    {
        "id": "HWA05",
        "title": "Student Innovation",
        "description": "Innovate platforms or applications that improve the accessibility and delivery of healthcare services, focusing on under-resourced areas and vulnerable populations.",
        "theme": "Healthcare and Wellbeing Accessibility",
        "difficulty": "Easy"
    },
    {
        "id": "CEW01",
        "title": "Smart Waste Segregation System for Urban Households",
        "description": "Challenge participants to create a low-cost, easy-to-use mobile application that assists urban households in sorting and segregating waste into recyclable, organic, and hazardous categories. The app should provide simple, visual instructions and tips to encourage proper waste disposal habits among users.",
        "theme": "Circular Economy & Waste Management",
        "difficulty": "Easy"
    },
    {
        "id": "CEW02",
        "title": "Digital Platform for Upcycling and Repurposing Household Items",
        "description": "Develop a community-driven platform where users can share and discover creative ways to upcycle and repurpose common household waste. This app should include tutorials, sharing features, and a reward system to encourage participation and reduce waste sent to landfills.",
        "theme": "Circular Economy & Waste Management",
        "difficulty": "Easy"
    },
    {
        "id": "CEW03",
        "title": "Circular Economy Marketplace for Reusable and Recyclable Materials",
        "description": "Challenge participants to create a digital marketplace where local businesses, artisans, and manufacturers can buy, sell, or trade reusable and recyclable materials. The solution should promote a circular economy by facilitating access to raw materials, reducing the need for virgin resources, and minimizing waste in supply chains.",
        "theme": "Circular Economy & Waste Management",
        "difficulty": "Hard"
    },
    {
        "id": "CEW04",
        "title": "Student Innovation",
        "description": "Create solutions that support the circular economy by facilitating waste reduction, recycling, and repurposing to promote sustainable consumption.",
        "theme": "Circular Economy & Waste Management",
        "difficulty": "Easy"
    },
    {
        "id": "SIE01",
        "title": "Accessible Education Portal for Differently-Abled Students",
        "description": "Develop a user-friendly education platform that offers accessible resources and tools for students with disabilities. The platform should incorporate features like audio descriptions, sign language support, and text-to-speech to enhance learning and inclusivity.",
        "theme": "Social Impacts through Inclusion & Equality",
        "difficulty": "Easy"
    },
    {
        "id": "SIE02",
        "title": "An Interactive Job and Internship Platform for Technical Education",
        "description": "Graduates face substantial challenges transitioning from education to employment, with limited access to diverse job opportunities and critical career resources. This platform aims to address these gaps by offering a comprehensive approach to job searching and career development. Using advanced algorithms and AI-driven matchmaking, it connects job seekers with employers based on skills, qualifications, and preferences. The platform will provide extensive access to diverse job listings across private and international sectors, ensuring up-to-date and broad opportunities for users. Additionally, it will feature professional counseling, career guidance, and essential tools for resume building, interview preparation, and the job application process. Special emphasis will be placed on supporting students through dedicated sections for internships and industrial training opportunities to help them gain practical experience. A mentorship program will also connect users with industry professionals, offering guidance, support, and insights to navigate early career challenges. This platform will enhance connectivity with employers, expand job access, and deliver essential resources to empower graduates as they enter the workforce. By integrating these critical elements, it aims to become an invaluable tool for students and graduates in today’s job market.",
        "theme": "Social Impacts through Inclusion & Equality",
        "difficulty": "Hard"
    },
    {
        "id": "SIE03",
        "title": "Data-Driven Policy Platform for Addressing Regional Inequality",
        "description": "Design a data analytics platform that enables policymakers to identify and address socio-economic inequalities across regions. By analyzing data on health, education, employment, and infrastructure, this tool should offer actionable insights for equitable policy-making and targeted resource allocation.",
        "theme": "Social Impacts through Inclusion & Equality",
        "difficulty": "Hard"
    },
    {
        "id": "SIE04",
        "title": "Community Engagement and Empowerment App for Social Change",
        "description": "Challenge participants to build a mobile platform that empowers users from diverse backgrounds to engage in local governance and community-building initiatives. The app should facilitate discussions on social issues, offer resources for community action, and encourage civic engagement, promoting equality and inclusion.",
        "theme": "Social Impacts through Inclusion & Equality",
        "difficulty": "Easy"
    },
    {
        "id": "SIE05",
        "title": "Student Innovation",
        "description": "Design platforms or initiatives that foster social inclusion and address inequalities, enabling equal opportunities for marginalized or underserved groups.",
        "theme": "Social Impacts through Inclusion & Equality",
        "difficulty": "Easy"
    },
    {
        "id": "SEJ01",
        "title": "Digital Awareness Platform for Citizen Rights and Legal Aid",
        "description": "Challenge participants to build an app or website that educates citizens, especially marginalized communities, about their legal rights and available resources for legal aid. The platform should include multilingual support and cover essential areas like labor rights, domestic violence, and discrimination, with direct links to local support services.",
        "theme": "Social Equality and Justice",
        "difficulty": "Easy"
    },
    {
        "id": "SEJ02",
        "title": "Reporting and Support App for Workplace Harassment",
        "description": "Develop a secure and anonymous reporting tool that enables employees to report incidents of harassment or discrimination in the workplace. The app should provide resources on legal rights, connect users with support services, and offer guidance on filing formal complaints, aiming to foster safer and more inclusive workplaces.",
        "theme": "Social Equality and Justice",
        "difficulty": "Easy"
    },
    {
        "id": "SEJ03",
        "title": "Algorithmic Fairness Checker for Job Recruitment Platforms",
        "description": "Design a tool that audits job recruitment algorithms for potential biases against gender, ethnicity, or socio-economic background. This solution should analyze data from recruitment processes and provide insights to help companies identify and reduce biases, ensuring fairer hiring practices across all levels of employment.",
        "theme": "Social Equality and Justice",
        "difficulty": "Hard"
    },
    {
        "id": "SEJ04",
        "title": "Empowering Rural Voices Through Digital Storytelling",
        "description": "Challenge participants to create a platform that empowers individuals from rural and underserved communities to share their stories and advocate for social justice issues they face. The app should facilitate multimedia storytelling (videos, audio, text) and offer guidance on effective communication and storytelling for social impact.",
        "theme": "Social Equality and Justice",
        "difficulty": "Easy"
    },
    {
        "id": "SEJ05",
        "title": "Student Innovation",
        "description": "Build solutions that promote social justice, ensure equal access to rights and resources, and empower communities to engage in democratic processes and advocacy.",
        "theme": "Social Equality and Justice",
        "difficulty": "Easy"
    }


];


export default function PrblmState() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (p) => {
        setModalContent(p);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent({});
    };

    return (
        <>
            <Navbar />
            <div className="problem-statement-container">
                <h1 className="header">PROBLEM STATEMENT</h1>
                <div className="table">
                    <div className="row header-row">
                        <div className="cell">S.No</div>
                        <div className="cell">TITLE</div>
                        <div className="cell">DESCRIPTION</div>
                        <div className="cell">THEME</div>
                    </div>
                    {problemStatements.map((p, index) => (
                        <div className="row" key={p.id}>
                            <div className="cell">{p.id}</div>
                            <div className="cell">{p.title}</div>
                            <div className="cell description-cell" onClick={() => openModal(p)}>
                            {p.description.length > 30 ? p.description.substring(0, 30) + '...' : p.description}
                            </div>
                            <div className="cell">{p.theme}</div>
                        </div>
                    ))}
                </div>

                {isOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="problem-details">
                                <div className="row">
                                    <div className="cell">Problem Statement ID</div>
                                    <div className="cell-content">{modalContent.id}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Problem Statement Title</div>
                                    <div className="cell-content"> {modalContent.title}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Problem Statement Description</div>
                                    <div className="cell-content large-content">{modalContent.description}</div>
                                </div>
                                <div className="row">
                                    <div className="cell">Theme</div>
                                    <div className="cell-content">{modalContent.theme}</div>
                                </div>
                            </div>
                            <button className="close-modal-button" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
