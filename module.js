const modulesEl = document.querySelectorAll('.module')
const moduleTitleEl = document.querySelector('.module-hero-title')
const coefTagEl = document.querySelector('.coef-tag-value')
const examTagEl = document.querySelector('.exam-tag-value')
const lessonsTagEl = document.querySelector('.lessons-tag-value')
const navBtnsContainer = document.querySelector('.navigation-buttons-container')
const lessonsContainerEl = document.querySelector('.lessons-container')
const moduleHero = document.querySelector('.module-hero')

const modules = {
    'brit-am-civ': {
        title: 'British / American Civilization',
        coefTag: 5,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m1.jpg',
        lessons: [
            {
                title: 'The Constitution of the US',
                content: `
                    <header class="lesson-header">
                        <h2>The Constitution of the United States</h2>
                        <p class="lesson-intro">This is the introductory text and Article I, establishing the foundation of the American government.</p>
                    </header>

                    <hr>

                    <section class="constitution-text">
                        <h3>The Preamble</h3>
                        
                        <blockquote class="preamble-quote">
                            "<strong>We the People</strong> of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
                        </blockquote>

                        <h3>Article I: The Legislative Branch</h3>
                        
                        <div class="article-section">
                            <h4>Section 1: The Congress</h4>
                            <p>All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.</p>
                        </div>

                        <div class="article-section">
                            <h4>Section 2: The House of Representatives</h4>
                            <p>The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.</p>
                        </div>

                        <div class="article-section">
                            <h4>Section 3: The Senate</h4>
                            <p>The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote.</p>
                        </div>
                    </section>

                    <hr>

                    <section class="vocabulary">
                        <h3>Key Vocabulary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Preamble</strong></td>
                                    <td>The introductory statement setting the intent and philosophy of the document.</td>
                                </tr>
                                <tr>
                                    <td><strong>Posterity</strong></td>
                                    <td>All future generations of people.</td>
                                </tr>
                                <tr>
                                    <td><strong>Vested</strong></td>
                                    <td>To be granted or assigned a legal right, power, or privilege.</td>
                                </tr>
                                <tr>
                                    <td><strong>Legislative</strong></td>
                                    <td>Having the power to make, alter, or repeal laws.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                `,
            },
            {
                title: 'The Seat of Justice: Rosa Parks',
                content: `
                    <header class="lesson-header">
                        <h2>Civil Disobedience: The Rosa Parks Story</h2>
                        <p class="lesson-intro">On December 1, 1955, a seamstress in Montgomery, Alabama, refused to give up her seat, sparking a movement that would redefine American democracy.</p>
                    </header>

                    <hr>

                    <section class="constitution-text">
                        <h3>The Quiet Defiance</h3>
                        <p>Rosa Parks did not refuse to move because she was "physically tired." As she later noted, she was "tired of giving in." Her arrest became the catalyst for the Montgomery Bus Boycott, a 381-day protest that crippled the city's segregated transit system.</p>

                        <div class="article-section" style="border-left: 4px solid #d4af37; padding-left: 15px; background: #3a3a3a; color: #f0f0f0; font-style: italic;">
                            <h4>The Moral Law vs. The State Law</h4>
                            <p>"I felt that I had a right to be treated as any other passenger. We would have to know what it was like to be a human being and be treated as such." — Rosa Parks</p>
                        </div>
                    </section>

                    <hr>

                    <section class="timeline-layout">
                        <h3>The Ripple Effect</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 15px;">
                                <strong>Dec 1, 1955:</strong> Rosa Parks is arrested for violating Chapter 6, Section 11 of the Montgomery City Code.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>Dec 5, 1955:</strong> A young Dr. Martin Luther King Jr. leads the start of the city-wide boycott.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>Nov 13, 1956:</strong> The Supreme Court rules that bus segregation is unconstitutional (<em>Browder v. Gayle</em>).
                            </li>
                        </ul>
                    </section>

                    <section class="vocabulary">
                        <h3>Civic Vocabulary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Civil Disobedience</strong></td>
                                    <td>The active, professed refusal of a citizen to obey certain laws of a government as a form of moral protest.</td>
                                </tr>
                                <tr>
                                    <td><strong>Jim Crow Laws</strong></td>
                                    <td>State and local laws that enforced racial segregation in the Southern United States.</td>
                                </tr>
                                <tr>
                                    <td><strong>Boycott</strong></td>
                                    <td>A collective refusal to buy, use, or participate in something as a way of protesting or forcing change.</td>
                                </tr>
                                <tr>
                                    <td><strong>Unconstitutional</strong></td>
                                    <td>Something that is not allowed by the Constitution of a country.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <div class="article-section" style="border: 1px dashed #d4af37; padding: 15px; margin-top: 20px;">
                        <h4>The Emotional Weight</h4>
                        <p>Rosa Parks reminds us that in a civilized society, <strong>one person's integrity</strong> can outweigh the power of an unjust system. Her story is not just about a seat on a bus; it is about the inherent <strong>human dignity</strong> that no law is allowed to take away.</p>
                    </div>
                `,
            },
            {
                title: 'The Epstein Case Files',
                content: `
                    <header class="lesson-header">
                        <h2>Legal Transparency: The Epstein Case Files</h2>
                        <p class="lesson-intro">An analysis of the unsealing of court documents related to the civil lawsuit <em>Giuffre v. Maxwell</em> and its impact on public accountability.</p>
                    </header>

                    <hr>

                    <section class="constitution-text">
                        <h3>Case Overview</h3>
                        <p>The "Epstein Files" refer to thousands of pages of legal documents, depositions, and emails unsealed by Federal Judge Loretta Preska starting in 2024. These documents stem from a 2015 defamation lawsuit.</p>

                        <div class="article-section" style="border-left: 4px solid #cc0000; padding-left: 15px; background: #444;">
                            <h4>The Legal Precedent: Public Access</h4>
                            <p>Under the First Amendment and common law, there is a strong presumption of public access to court records. This ensures the judicial system remains transparent and accountable to the citizens.</p>
                        </div>
                    </section>

                    

                    <hr>

                    <section class="timeline-layout">
                        <h3>Timeline of the Unsealing</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 15px;">
                                <strong>2015:</strong> Civil lawsuit filed, many documents placed under seal to protect privacy.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>2019:</strong> The Miami Herald sues for access to the records, citing public interest.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>2024:</strong> The court begins a phased release of names and testimony previously kept secret.
                            </li>
                        </ul>
                    </section>

                    <section class="vocabulary">
                        <h3>Legal Vocabulary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Under Seal</strong></td>
                                    <td>Court records that are confidential and not available to the public.</td>
                                </tr>
                                <tr>
                                    <td><strong>Deposition</strong></td>
                                    <td>Witness testimony given under oath outside of a courtroom, typically recorded for later use.</td>
                                </tr>
                                <tr>
                                    <td><strong>Defamation</strong></td>
                                    <td>The oral or written communication of a false statement about another that unjustly harms their reputation.</td>
                                </tr>
                                <tr>
                                    <td><strong>Redacted</strong></td>
                                    <td>The process of editing a document to hide or remove sensitive information before publication.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <div class="article-section">
                        <h4>Why this matters in Civilizations</h4>
                        <p>The release of these files highlights the tension between <strong>individual privacy rights</strong> and the <strong>public's right to know</strong> about the activities of powerful figures within a democratic society.</p>
                    </div>
                `,
            },
            {
                title: 'The First Amendment: Freedom of Speech',
                content: `
                    <header class="lesson-header">
                        <h2>The First Amendment: Freedom of Speech</h2>
                        <p class="lesson-intro">"Congress shall make no law... abridging the freedom of speech." But what does that actually mean in the modern world?</p>
                    </header>

                    <hr>

                    <section class="constitution-text">
                        <h3>What is Protected?</h3>
                        <p>Freedom of speech protects not just the words we speak, but <strong>symbolic speech</strong>—actions that convey a message, like wearing a protest armband or burning a flag. It is designed to protect "unpopular" ideas, as popular ideas don't need protection.</p>

                        <div class="article-section" style="border-left: 4px solid #0056b3; padding-left: 15px; background: #2c3e50; color: #ffffff;">
                            <h4>The "Marketplace of Ideas"</h4>
                            <p>The Supreme Court holds that the remedy for "bad" speech is not censorship, but "more speech." The government cannot ban speech simply because it is offensive or hateful.</p>
                        </div>
                    </section>

                    <hr>

                    <section class="timeline-layout">
                        <h3>When Speech Becomes Illegal</h3>
                        <p>Freedom of speech is not absolute. There are specific categories where the government <strong>can</strong> step in:</p>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 15px;">
                                <strong>1. True Threats:</strong> Statements where the speaker means to communicate a serious expression of an intent to commit an act of unlawful violence to a particular individual.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>2. Incitement:</strong> Speech that is intended to, and likely to, incite "imminent lawless action" (e.g., telling a mob to burn down a specific building right now).
                            </li>
                            <li style="margin-bottom: 15px;">
                                <strong>3. Defamation:</strong> Knowingly spreading false information that ruins a person's reputation (Libel and Slander).
                            </li>
                        </ul>
                    </section>

                    <section class="vocabulary">
                        <h3>Legal Standards</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Content Neutrality</strong></td>
                                    <td>The principle that the government can't limit speech based on the message, only the "time, place, and manner."</td>
                                </tr>
                                <tr>
                                    <td><strong>Fighting Words</strong></td>
                                    <td>Speech that by its very utterance inflicts injury or tends to incite an immediate breach of the peace.</td>
                                </tr>
                                <tr>
                                    <td><strong>Prior Restraint</strong></td>
                                    <td>Government action that prohibits speech or other expression before it can take place (usually unconstitutional).</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <div class="article-section" style="border: 2px solid #0056b3; padding: 15px; margin-top: 20px; border-radius: 8px;">
                        <h4>The "Illegal Threat" Test</h4>
                        <p>To be considered an <strong>illegal threat</strong>, the law looks at the "reasonable person" standard. Would a reasonable person hear those words and fear for their physical safety? Venting frustration or using hyperbole ("I'm so mad I could kill someone") is usually protected; "I am coming to your house at 5 PM to hurt you" is a crime.</p>
                    </div>
                `,
            },
            {
                title: 'The Second Amendment',
                content: `
                    <header class="lesson-header">
                        <h2>The Right to Bear Arms</h2>
                        <p class="lesson-intro">Adopted on December 15, 1791, as part of the Bill of Rights, the Second Amendment is one of the most debated sentences in American law.</p>
                    </header>

                    <hr>

                    <section class="constitution-text">
                        <h3>The Amendment Text</h3>
                        
                        <blockquote class="preamble-quote">
                            "A well regulated <strong>Militia</strong>, being necessary to the security of a free State, the right of the people to keep and bear <strong>Arms</strong>, shall not be infringed."
                        </blockquote>

                        <h3>The Two Interpretations</h3>
                        
                        <div class="article-section">
                            <h4>1. The Collective Right</h4>
                            <p>This view argues that the amendment only protects the right of states to maintain a "well regulated militia" (like the National Guard), rather than an individual's right to own a gun.</p>
                        </div>

                        <div class="article-section">
                            <h4>2. The Individual Right</h4>
                            <p>This view holds that the phrase "the right of the people" means individuals have a personal right to own firearms for self-defense, independent of militia service.</p>
                        </div>
                    </section>

                    

                    <hr>

                    <section class="vocabulary">
                        <h3>Key Vocabulary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Militia</strong></td>
                                    <td>A body of citizens organized for military service in domestic emergencies.</td>
                                </tr>
                                <tr>
                                    <td><strong>Infringed</strong></td>
                                    <td>To encroach upon, limit, or violate a legal right or boundary.</td>
                                </tr>
                                <tr>
                                    <td><strong>Common Law</strong></td>
                                    <td>The part of English law that is derived from custom and judicial precedent rather than statutes.</td>
                                </tr>
                                <tr>
                                    <td><strong>Shall Not</strong></td>
                                    <td>A legal command in the Constitution that prohibits the government from taking a specific action.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section class="article-section">
                        <h4>Important Case: District of Columbia v. Heller (2008)</h4>
                        <p>The Supreme Court ruled for the first time that the Second Amendment protects an individual's right to possess a firearm for traditionally lawful purposes, such as self-defense within the home.</p>
                    </section>
                `,
            },
        ],
    },
    'gr-wr': {
        title: 'Grammar and Writing',
        coefTag: 3,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m2.jpg',
        lessons:[

        ],
    },
    'tefl': {
        title: 'Teaching English as a Foreign Language (TEFL)',
        coefTag: 1,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m3.jpg',
        lessons:[

        ],
    },
    'sp-ph': {
        title: 'Speaking and Phonetics',
        coefTag: 1,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m4.jpg',
        lessons:[

        ],
    },
    'ptes': {
        title: 'Philosophy & Theory of Education System (PTES)',
        coefTag: 1,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m5.jpg',

        lessons:[

        ],
    },
    'brit-am-lit': {
        title: 'British / American Literature',
        coefTag: 1,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m6.jpg',
        lessons:[

        ],
    },
    'ict': {
        title: 'Information and Communication Technology (ICT)',
        coefTag: 3,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m7.jpg',
        lessons:[
            {
                title:'Bitcoin White Paper',
                content: `
                            <header class="lesson-header">
                                <h2>Bitcoin: A Peer-to-Peer Electronic Cash System</h2>
                                <p class="lesson-intro">Analysis of the 2008 white paper that introduced the first decentralized digital currency.</p>
                            </header>

                            <hr>

                            <section class="whitepaper-abstract">
                                <h3>Abstract</h3>
                                <blockquote class="preamble-quote">
                                    "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending."
                                </blockquote>
                            </section>

                            <section class="lesson-content">
                                <h3>The Problem: Trust-Based Models</h3>
                                <p>Commerce on the internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. While the system works well enough for most transactions, it still suffers from the inherent weaknesses of the trust-based model.</p>

                                <h3>The Solution: Proof-of-Work</h3>
                                <p>To implement a peer-to-peer distributed timestamp server on a peer-to-peer basis, we will need to use a <strong>proof-of-work</strong> system similar to Adam Back's Hashcash. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.</p>
                                
                                
                            </section>

                            <hr>

                            <section class="vocabulary">
                                <h3>Technical Vocabulary</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Term</th>
                                            <th>Definition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Peer-to-Peer (P2P)</strong></td>
                                            <td>A decentralized communications model in which each party has the same capabilities and either party can initiate a communication session.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Double-Spending</strong></td>
                                            <td>A potential flaw in a digital cash scheme in which the same single digital token can be spent more than once.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Hash</strong></td>
                                            <td>A function that converts an input of letters and numbers into an encrypted output of a fixed length.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Nodes</strong></td>
                                            <td>Computers on the Bitcoin network that work together to validate and broadcast transactions.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                `
            },
            {
                title: 'The Global Internet',
                content: `
                    <header class="lesson-header">
                        <h2>The Internet: The Backbone of Modern Civilization</h2>
                        <p class="lesson-intro">More than just cables and routers, the internet is the primary infrastructure for global communication, commerce, and education.</p>
                    </header>

                    <hr>

                    <section class="ict-concept">
                        <h3>Infrastructure vs. Application</h3>
                        <p>A common misconception in ICT is that the Internet and the World Wide Web are the same thing. They are not.</p>
                        
                        <div class="article-section" style="border-left: 4px solid #007bff; background: #444; padding: 15px;">
                            <h4>The Technical Distinction</h4>
                            <p><strong>The Internet:</strong> The hardware—the massive network of networks (cables, satellites, and routers) that connect computers globally.</p>
                            <p><strong>The World Wide Web (WWW):</strong> The software—the system of HTML documents and URLs that run <em>on top</em> of the internet.</p>
                        </div>
                    </section>

                    

                    <hr>

                    <section class="impact-grid">
                        <h3>Pillars of Internet Importance</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                            <div style="background: #444; padding: 15px; border-radius: 8px;">
                                <strong>1. Decentralization</strong>
                                <p style="font-size: 0.9em;">Information is no longer controlled by a single entity. Anyone with a node can publish content.</p>
                            </div>
                            <div style="background: #444; padding: 15px; border-radius: 8px;">
                                <strong>2. Scalability</strong>
                                <p style="font-size: 0.9em;">The TCP/IP protocol allows billions of devices to join the network without a central authority.</p>
                            </div>
                        </div>
                    </section>

                    <section class="vocabulary">
                        <h3>ICT Vocabulary</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>Definition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>TCP/IP</strong></td>
                                    <td>Transmission Control Protocol/Internet Protocol: The "language" of the internet.</td>
                                </tr>
                                <tr>
                                    <td><strong>Bandwidth</strong></td>
                                    <td>The maximum rate of data transfer across a given path.</td>
                                </tr>
                                <tr>
                                    <td><strong>Latency</strong></td>
                                    <td>The delay before a transfer of data begins following an instruction.</td>
                                </tr>
                                <tr>
                                    <td><strong>Packet Switching</strong></td>
                                    <td>The method of slicing data into small chunks to send them across a network.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <div class="article-section">
                        <h4>The Future: Web 3.0</h4>
                        <p>The next evolution of the internet aims to remove the "middlemen" (Big Tech companies) using the same blockchain technology found in the Bitcoin White Paper.</p>
                    </div>
                `,
            }
        ],
    },
    'intro-psycho': {
        title: 'Introduction to Psychology',
        coefTag: 4,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m8.jpg',
        lessons:[
            {
                title: 'Nature vs. Nurture',
                content: `
                    <header class="lesson-header">
                        <h2>The Great Psychological Debate</h2>
                        <p class="lesson-intro">Are we born with our personalities, or are we shaped by our environment? This is the fundamental question of developmental psychology.</p>
                    </header>

                    <hr>

                    <section class="article-section">
                        <h3>Nature (Genetics)</h3>
                        <p>The argument that our behavior is determined by our biological makeup and evolutionary inheritance.</p>
                        
                        <h3>Nurture (Environment)</h3>
                        <p>The argument that our behavior is a result of our personal experiences, upbringing, and social culture.</p>
                    </section>

                    <section class="vocabulary">
                        <h3>Psychology Vocabulary</h3>
                        <table>
                            <thead>
                                <tr><th>Term</th><th>Definition</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Innate</strong></td><td>A quality or ability that is present in an individual from birth.</td></tr>
                                <tr><td><strong>Tabula Rasa</strong></td><td>The idea that the mind is a "blank slate" at birth (John Locke).</td></tr>
                            </tbody>
                        </table>
                    </section>
                `
            },
        ],
    },
    'linguistics':{
        title: 'Linguistics',
        coefTag: 8,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m9.jpg',
        lessons:[

        ],
    },

}

const queryString = window.location.search
const params = new URLSearchParams(queryString)
const module = params.get('module')

const selectedModule = modules[module]
if(selectedModule){
    moduleTitleEl.innerText = selectedModule.title
    coefTagEl.innerText = selectedModule.coefTag
    examTagEl.innerText = selectedModule.examTag
    lessonsTagEl.innerText = selectedModule.lessons.length
    moduleHero.style.backgroundImage = `url(${selectedModule.bgImage})`

    selectedModule.lessons.forEach((lesson, idx)=>{
        const lessonDiv = document.createElement('div')
        lessonDiv.classList.add('lesson')
        if(idx === 0){lessonDiv.classList.add('active')}

        lessonDiv.innerHTML = lesson.content
        lessonsContainerEl.appendChild(lessonDiv)

        const navBtnEl = document.createElement('button')
        navBtnEl.classList.add('nav-btn')
        idx < 9 ? navBtnEl.innerText = `0${idx + 1}. ${lesson.title}` : navBtnEl.innerText = `${idx + 1}. ${lesson.title}`
        navBtnsContainer.appendChild(navBtnEl)
        if(idx === 0){navBtnEl.classList.add('active')}

        navBtnEl.addEventListener('click', ()=>{
            document.querySelectorAll('.nav-btn').forEach(navBtn => navBtn.classList.remove('active'))
            navBtnEl.classList.add('active')

            document.querySelectorAll('.lesson').forEach(les => les.classList.remove('active'))
            lessonDiv.classList.add('active')

            navBtnEl.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            })
        })
    })
}else{
    moduleTitleEl.innerText = "Oops! we don't have that yet."
}

