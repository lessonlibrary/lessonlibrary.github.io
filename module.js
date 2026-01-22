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
    'brit-am-civ': {
        title: 'British / American Civilization',
        coefTag: 5,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m1.jpg',
        lessons: [],
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
        lessons:[],
    },
    'ict': {
        title: 'Information and Communication Technology (ICT)',
        coefTag: 3,
        examTag: 'JAN 2ND',
        bgImage: 'pictures/m7.jpg',
        lessons:[
            {
                title:'Bitcoin White Paper',
                content: ``
            },
            {
                title: 'The Global Internet',
                content: ``,
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
const levelId = params.get('l'); 

// 3. BACK BUTTON FIX
// Redirects specifically to the #study-now anchor with the level param
if (backBtn && levelId) {
    backBtn.href = `index.html?l=${levelId}#study-now`;
}

const selectedModule = modules[moduleId];

if (selectedModule) {
    // 1. CONTENT INJECTION
    moduleTitleEl.innerText = selectedModule.title;
    coefTagEl.innerText = selectedModule.coefTag;
    examTagEl.innerText = selectedModule.examTag;
    lessonsTagEl.innerText = selectedModule.lessons.length;

    // 2. LEVEL-BASED HERO IMAGE
    const bgImg = levelId ? `pictures/${levelId}.jpg` : 'pictures/default.jpg';
    moduleHero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImg})`;

    // 3. LESSON RENDERING
    if (selectedModule.lessons.length > 0) {
        selectedModule.lessons.forEach((lesson, idx) => {
            // Create Content
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

            // Navigation Switcher
            navBtnEl.addEventListener('click', () => {
                document.querySelectorAll('.nav-btn, .lesson').forEach(el => el.classList.remove('active'));
                navBtnEl.classList.add('active');
                lessonDiv.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
} else {
    moduleTitleEl.innerText = "Module not found.";
}