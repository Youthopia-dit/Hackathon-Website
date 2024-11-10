import './prblm_state.css';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';

const problemStatements = [
    {
        id: "2133",
        title: "Smart Waste Management System",
        description: "Develop a system that uses IoT sensors in garbage bins to monitor waste levels and notify collection teams, optimizing collection routes and schedules. This solution aims to reduce waste overflow, improve urban cleanliness, and optimize resource allocation.",
        domain: "IoT and Environmental Sustainability",
        theme: "Smart Cities"
    },
    {
        id: "2134",
        title: "Automated Health Diagnosis System",
        description: "Create an AI-powered tool that allows users to input symptoms and receive initial health insights and suggested actions, enabling early detection of conditions and optimizing healthcare resources in remote or underserved areas.",
        domain: "Artificial Intelligence and Healthcare",
        theme: "Healthcare Innovation"
    },
    {
        id: "2135",
        title: "Blockchain-Based Voting System",
        description: "Build a blockchain-based voting platform that ensures secure, tamper-proof voting records. This system should make each vote verifiable, anonymous, and immutable, enhancing transparency and trust in electoral processes.",
        domain: "Blockchain and Cybersecurity",
        theme: "Digital Democracy"
    },
    {
        id: "2136",
        title: "Augmented Reality Shopping Experience",
        description: "Develop an AR-based shopping app that allows users to visualize products in their environment, such as trying on clothing styles or placing furniture in a room. This would enhance the online shopping experience, improving customer satisfaction and reducing returns.",
        domain: "Augmented Reality and E-Commerce",
        theme: "Retail Transformation"
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
        <Navbar/>
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
                            <div className="cell">{index + 1}</div>
                            <div className="cell">{p.title}</div>
                            <div className="cell description-cell" onClick={() => openModal(p)}>
                                {p.description}
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
                                    <div className="cell">Domain</div>
                                    <div className="cell-content">{modalContent.domain}</div>
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
