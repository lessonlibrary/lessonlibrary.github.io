// 1. SELECTORS
const moduleTitleEl = document.querySelector('.module-hero-title');
const coefTagEl = document.querySelector('.coef-tag-value');
const examTagEl = document.querySelector('.exam-tag-value');
const lessonsTagEl = document.querySelector('.lessons-tag-value');
const navBtnsContainer = document.querySelector('.navigation-buttons-container');
const lessonsContainerEl = document.querySelector('.lessons-container');
const moduleHero = document.querySelector('.module-hero');
const backBtn = document.querySelector('.back-btn');

const modules = {
    // 'arabic-1':{
    //     title: 'Arabic',
    //     coefTag: 1,
    //     examTag: 'MM DD',
    //     bgImage: 'pictures/m1.jpg',
    //     lessons: [
    //         {
    //             title: `Arabic lesson n1`,
    //             content: `asdlfkj`
    //         },
    //     ],
    // },
    //     'west-civ-lit':{
    //     title: 'Western Civilization & Literature',
    //     coefTag: 1,
    //     examTag: 'MM DD',
    //     bgImage: 'pictures/m1.jpg',
    //     lessons: [
    //         {
    //             title: `Arabic lesson n1`,
    //             content: `asdlfkj`
    //         },
    //     ],
    // },
    'brit-am-civ': {
        title: 'British / American Civilization',
        coefTag: 5,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m1.jpg',
        lessons: [
            {
                title: `Famous American Assasinations`,
                content: `
                        <h2>Famous American Assassinations</h2>

                        <div class="preamble-quote">
                            An assassination is the killing of an important public figure.
                            In the United States, some assassinations shocked the nation
                            and changed history forever.
                        </div>

                        <!-- Card -->
                        <div class="article-section" style="background:#333; padding:20px; border-radius:10px; margin-bottom:25px;">
                            <h3>Abraham Lincoln (1865)</h3>

                            <h4>Who was he?</h4>
                            <p>
                            Abraham Lincoln was the 16th president of the United States.
                            He led the country during the Civil War
                            (a war between the North and the South).
                            </p>

                            <h4>Why was he important?</h4>
                            <p>
                            Lincoln believed the country should stay united.
                            He also worked to end slavery
                            (slavery = owning people and forcing them to work).
                            </p>

                            <h4>What happened after?</h4>
                            <p>
                            His death created political chaos
                            (chaos = confusion and loss of control).
                            The country struggled to heal.
                            </p>
                        </div>

                        <!-- Card -->
                        <div class="article-section" style="background:#333; padding:20px; border-radius:10px; margin-bottom:25px;">
                            <h3>John F. Kennedy (1963)</h3>

                            <h4>The time he lived in</h4>
                            <p>
                            Kennedy lived during the Cold War
                            (Cold War = tension between powerful countries without direct fighting).
                            </p>

                            <h4>Why people admired him</h4>
                            <p>
                            He was young, confident, and optimistic
                            (optimistic = believing the future will be better).
                            </p>

                            <h4>Impact</h4>
                            <p>
                            After his assassination, many Americans lost trust in the government.
                            Trust never fully returned.
                            </p>
                        </div>

                        <!-- Card -->
                        <div class="article-section" style="background:#333; padding:20px; border-radius:10px; margin-bottom:25px;">
                            <h3>Malcolm X (1965)</h3>

                            <h4>His role</h4>
                            <p>
                            Malcolm X was a strong and direct speaker.
                            He talked about racism
                            (racism = unfair treatment based on skin color).
                            </p>

                            <h4>His ideas</h4>
                            <p>
                            He believed Black Americans should protect themselves.
                            His ideas were radical
                            (radical = very strong and different from the norm).
                            </p>

                            <h4>Impact</h4>
                            <p>
                            His assassination removed an important voice,
                            but his ideas continued to influence future movements.
                            </p>
                        </div>

                        <!-- Card -->
                        <div class="article-section" style="background:#333; padding:20px; border-radius:10px; margin-bottom:25px;">
                            <h3>Martin Luther King Jr. (1968)</h3>

                            <h4>Who he was</h4>
                            <p>
                            Martin Luther King Jr. was a civil rights leader
                            (civil rights = equal rights for all citizens).
                            </p>

                            <h4>His method</h4>
                            <p>
                            He believed in non-violence
                            (non-violence = no physical harm).
                            He used speeches and peaceful protests.
                            </p>

                            <h4>Impact</h4>
                            <p>
                            His death caused nationwide grief
                            (grief = deep sadness),
                            but also led to stronger civil rights laws.
                            </p>
                        </div>

                        <!-- Summary Table -->
                        <h3>Quick Summary</h3>

                        <table>
                            <tr>
                            <th>Person</th>
                            <th>Year</th>
                            <th>Main Idea</th>
                            <th>Result</th>
                            </tr>
                            <tr>
                            <td>Abraham Lincoln</td>
                            <td>1865</td>
                            <td>Unity & ending slavery</td>
                            <td>Nation stayed divided</td>
                            </tr>
                            <tr>
                            <td>John F. Kennedy</td>
                            <td>1963</td>
                            <td>Hope & progress</td>
                            <td>Loss of trust</td>
                            </tr>
                            <tr>
                            <td>Malcolm X</td>
                            <td>1965</td>
                            <td>Self-defense & pride</td>
                            <td>Stronger identity movements</td>
                            </tr>
                            <tr>
                            <td>Martin Luther King Jr.</td>
                            <td>1968</td>
                            <td>Peaceful equality</td>
                            <td>Civil rights laws</td>
                            </tr>
                        </table>
                `
            }

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
        bgImage: 'pictures',
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
        lessons:[],
    },
    'ict': {
        title: 'Information and Communication Technology (ICT)',
        coefTag: 3,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m7.jpg',
        lessons: [
            {
                title: '//title one goes here',
                content: `
                    //lesson content goes here
                `
        },
            {
                title: `//lesson 2 title goes here`,
                content: `//lesson 2 content goes here`
            },
                        {
                title: `//lesson 3 title goes here`,
                content: `//lesson 3 content goes here`
            },
            {
                title: `//lesson 4 title goes here`,
                content: `//lesson 4 content goes here`
            },
            {
                title: `//lesson 5 title goes here`,
                content: `//lesson 5 content goes here`
            },
            {
                title: `//lesson 6 title goes here`,
                content: `//lesson 6 content goes here`
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
                content: ``
            }],
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


// 2. PARAMS
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const moduleId = params.get('module');
const levelId = params.get('l'); // Expected values: '1st', '2nd', etc.

// 3. BACK BUTTON FIX
if (backBtn && levelId) {
    backBtn.href = `index.html?l=${levelId}#study-now`;
}

// 4. FIND MODULE INDEX (For Dynamic Image Naming)
// We get the keys of the modules object to find which number this module is
const moduleKeys = Object.keys(modules);
const moduleIndex = moduleKeys.indexOf(moduleId) + 1; // +1 because m1, m2...
const selectedModule = modules[moduleId];

if (selectedModule) {
    // 1. CONTENT INJECTION
    moduleTitleEl.innerText = selectedModule.title;
    coefTagEl.innerText = selectedModule.coefTag;
    examTagEl.innerText = selectedModule.examTag;
    lessonsTagEl.innerText = selectedModule.lessons.length;

    // 2. LEVEL-BASED HERO IMAGE FIX
    // Path becomes: pictures/1st/l-1st-m1.jpg
    if (levelId && moduleIndex > 0) {
        const imagePath = `pictures/${levelId}/l-${levelId}-m${moduleIndex}.jpg`;
        moduleHero.style.backgroundImage = `url(${imagePath})`;
    }

    // 3. LESSON RENDERING & NAVIGATION FIX
    if (selectedModule.lessons.length > 0) {
        selectedModule.lessons.forEach((lesson, idx) => {
            // Create Lesson Content Div
            const lessonDiv = document.createElement('div');
            lessonDiv.classList.add('lesson');
            if (idx === 0) lessonDiv.classList.add('active');
            lessonDiv.innerHTML = lesson.content;
            lessonsContainerEl.appendChild(lessonDiv);

            // Create Nav Button
            const navBtnEl = document.createElement('button');
            navBtnEl.classList.add('nav-btn');
            if (idx === 0) navBtnEl.classList.add('active');
            navBtnEl.innerText = `${(idx + 1).toString().padStart(2, '0')}. ${lesson.title}`;
            navBtnsContainer.appendChild(navBtnEl);

            // FIX: Added Event Listener to handle switching
            navBtnEl.addEventListener('click', () => {
                // Remove active class from all buttons and lessons
                document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.lesson').forEach(les => les.classList.remove('active'));
                
                // Add active class to clicked button and corresponding lesson
                navBtnEl.classList.add('active');
                lessonDiv.classList.add('active');
                
                // Scroll to top
                navBtnEl.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center', 
                    block: "nearest"
                })
            });
        });
    }
} else {
    moduleTitleEl.innerText = "Module not found.";
}