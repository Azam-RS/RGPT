import React, { useState } from 'react';
import Layout from "@theme/Layout";
import "./team.css";
import "./biomodal.css"
import MyModal from "./bio-modalbox";

export default function Team() {
    const TeamMember1 = [
        { id: 1, name: "Dr. Naveed Sherwani", role: "Chairman and CEO", image: "/img/naveed.png",
        desc:"Dr. Naveed is a seasoned semiconductor industry veteran with over 35 years of entrepreneurial, engineering, and management experience, is widely acclaimed for his pioneering work in ASIC and microprocessor design automation. With a track record of founding over fifteen silicon companies and securing $1B in funding across 15 rounds from top venture capital firms, he's a respected leader in the field. Naveed's achievements include being recognized as the leader of the 'Most Respected Private Semiconductor Company' five times by the GSA. His ongoing contributions continue to drive innovation in the industry." },
    ];

    const TeamMember2 = [
        { id: 2, name: "Hans Bouwmeester", role: "President and COO", image: "/img/hans.png", desc:"Hans is a visionary leader with over two decades of experience in semiconductors and software development. He has worked with both multinational corporations and startups, focusing on customer satisfaction and operational excellence. With expertise in ASIC Design, RISC Microprocessors, semiconductors IP, full-stack applications, Machine Learning, and AI, he drives innovation and market leadership. As Founder and CEO of Neuruno, he demonstrated his entrepreneurial vision and ability to strategically navigate the industry landscape." },
    ];

    const TeamMember3 = [
        { id: 3, name: "Prof. Pierre-Emmanuel Gaillardon", role: "Chief Strategy Officer", image: "/img/pierre.png", desc:"Prof. Pierre-Emmanuel is a distinguished innovator in FPGA and EDA for over 15 years, holds the position of Professor at The University of Utah, and serves as the Principal Investigator of OpenFPGA. He is the recipient of prestigious awards including the NSP CAREER award, DARPA Young Faculty Award, IEEE CEDA Ernest Kuh award, ACM SIGDA ONFA award, and the DAC Under-40 Innovators Award. With a remarkable portfolio of over 230 peer-reviewed publications in AI and EDA, PE’s contributions continue to shape the forefront of technological advancement." },
    ];

    const TeamMember4 = [
        { id: 4, name: "Dr. Valerio Tenace", role: "Chief Technology Officer", image: "/img/valerio.png", desc:"Dr. Valerio, holding a PhD in Information and Systems Engineering, is a prolific researcher and inventor specializing in artificial intelligence techniques for hardware design. Since 2016, he has authored over 20 research articles and holds 4 patents in this domain. Notably, Dr. Tenace is the creative force of RapidGPT, the groundbreaking platform advancing the integration of AI in hardware design." },
    ];

    const boardMember1 = [
        { id: 11, name: "Dr. Chi-Foon Chan", role: "Board Member", image: "/img/Dr_Chi_Foon_Chan.png", desc:"Dr. Chi-Foon Chan is an American business executive and engineer. He retired from Synopsys in 2022 as the Co-CEO after an illustrious 32 years where he served several senior management roles and contributed to the success of Synopsys as the leader in the EDA industry. Prior to Synopsys he was in management roles in NEC and Intel Corp. Dr. Chan received his Masters and PhD. in Computer Engineering from Case Western Reserve University." },
    ];

    const boardMember2 = [
        { id: 12, name: "Landon Downs, CFA", role: "Board Member", image: "/img/landon.png", desc:"Landon is an accomplished executive with extensive experience across start-ups, early-stage investing, mergers and acquisitions, and advising on major public-private partnership infrastructure transactions in Canada. Throughout his career, he has played a key role in deploying over $6 billion in capital, demonstrating his expertise in both technology and finance. His strategic insights have helped shape the growth of numerous companies and projects, making him a leader in the industry." },
    ];

    // Merging TeamMember1 and TeamMember3 into the boardMember data
    const boardMembers = [...boardMember1, ...boardMember2, ...TeamMember1, ...TeamMember3];

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (bio) => {
        setModalContent(bio);
        setModalOpen(true);
    };

    return (
        <Layout title="Team" description="Team">
            <div className="teamSection">
                <div className="tm-holder">
                    <h1>Meet the Visionaries Behind Our Tech AI Revolution</h1>
                    <p>Begin Your HDL Co-Design with the Premier Design Tool, Led by Our World-Class Team of Industry Veterans</p>
                </div>
            </div>
            <div className="team-box">
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className="desc-about">
                                <h1>Executive Team</h1>
                            </div>
                        </div>
                        <div className="col col--3">
                            {TeamMember1.map((bio) => (
                                <div key={bio.id} className="bio-holder" onClick={() => openModal(bio)} >
                                    <div className="bioimg">
                                        <img src={bio.image} alt={bio.name} />
                                    </div>
                                    <h2>{bio.name}</h2>
                                    <p className="desg">{bio.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col col--3">
                            {TeamMember2.map((bio) => (
                                <div key={bio.id} className="bio-holder" onClick={() => openModal(bio)} >
                                    <div className="bioimg">
                                        <img src={bio.image} alt={bio.name} />
                                    </div>
                                    <h2>{bio.name}</h2>
                                    <p className="desg">{bio.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col col--3">
                            {TeamMember3.map((bio) => (
                                <div key={bio.id} className="bio-holder" onClick={() => openModal(bio)} >
                                    <div className="bioimg">
                                        <img src={bio.image} alt={bio.name} />
                                    </div>
                                    <h2>{bio.name}</h2>
                                    <p className="desg">{bio.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col col--3">
                            {TeamMember4.map((bio) => (
                                <div key={bio.id} className="bio-holder" onClick={() => openModal(bio)} >
                                    <div className="bioimg">
                                        <img src={bio.image} alt={bio.name} />
                                    </div>
                                    <h2>{bio.name}</h2>
                                    <p className="desg">{bio.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Board Of Directors */}
                    <div className="row">
                        <div className="col col--12">
                            <div className="desc-about">
                                <h1>Board of Directors</h1>
                            </div>
                        </div>
                        
                            {boardMembers.map((bio) => (
                                <div className="col col--3" key={bio.id}>
                                <button key={bio.id} className="bio-holder" onClick={() => openModal(bio)} tabIndex="0" aria-label={`Open ${bio.name}'s bio`}                                >
                                    <div className="bioimg">
                                        <img src={bio.image} alt={bio.name} />
                                    </div>
                                    <h2>{bio.name}</h2>
                                    <p className="desg">{bio.role}</p>
                                </button>
                                </div>
                            ))}
                        
                    </div>
                </div>
            </div>
            <MyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className='biodesc'>
                    <h2>{modalContent.name}</h2>
                    <p>{modalContent.role}</p>
                    <div className='overflw'>
                        <p>{modalContent.desc}</p>
                    </div>
                </div>
            </MyModal>
        </Layout>
    );
}
