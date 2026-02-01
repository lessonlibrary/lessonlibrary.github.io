function initModulePage(){
    // 1. SELECTORS
    const moduleTitleEl = document.querySelector('.module-hero-title');
    const tagsContainer = document.querySelector('.tags-container')
    const coefTagEl = document.querySelector('.coef-tag-value');
    const levelTagEl = document.querySelector('.level-tag-value');
    const levelTagContainer = document.querySelector('.level-tag')
    const lessonsTagEl = document.querySelector('.lessons-tag-value');
    const navBtnsContainer = document.querySelector('.navigation-buttons-container');
    const lessonsContainerEl = document.querySelector('.lessons-container');
    const moduleHero = document.querySelector('.module-hero');
    const backBtn = document.querySelector('.back-btn');

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
    const selectedLevel = levels[levelId];
    const selectedModuleIndex = selectedLevel.modules.findIndex(m => m.id === moduleId);
    const selectedModule = selectedLevel.modules[selectedModuleIndex];
    const moduleIndex = selectedModuleIndex + 1; // for image path

    if (selectedModule) {
        // 1. CONTENT INJECTION
        moduleTitleEl.innerText = selectedModule.moduleTitle;
        coefTagEl.innerText = selectedModule.coefTag;
        levelTagEl.innerText = levelId.toUpperCase();

        const isArabic = moduleId && moduleId.startsWith('rtl-');

        if (isArabic) {
            // This flips the entire page logic to Right-To-Left
            lessonsContainerEl.classList.add('arabic-font');
            moduleTitleEl.classList.add('arabic-font');
            lessonsContainerEl.setAttribute('dir', 'rtl');
            navBtnsContainer.setAttribute('dir', 'rtl');
            moduleTitleEl.setAttribute('dir', 'rtl')
            tagsContainer.classList.add('rtl-layout')
            document.documentElement.lang = 'ar';
            
            // Optional: Add a class to the body for specific Arabic styling
            // document.lessonsContainerEl.classList.add('rtl-layout');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.lang = 'en';
        }

        if(levelId === '1st'){
            levelTagContainer.classList.add('bronze-level')
        
        }else if(levelId === '2nd' || levelId === '3rd'){
            levelTagContainer.classList.add('silver-level')
        
        }else if(levelId === '4th' || levelId === '5th'){
            levelTagContainer.classList.add('gold-level')
        
        }

        lessonsTagEl.innerText = selectedModule.lessons.length;
        document.title = `${selectedModule.title} ${levelId} Year`
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

                if(isArabic){
                    navBtnEl.classList.add('arabic-font')
                }
                // FIX: Added Event Listener to handle switching
                navBtnEl.addEventListener('click', () => {
                    // Remove active class from all buttons and lessons
                    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.lesson').forEach(les => les.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding lesson
                    navBtnEl.classList.add('active');
                    lessonDiv.classList.add('active');
                    
                    //scroll into view
                    navBtnEl.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center', 
                        block: 'nearest',
                    })
                });
            });
        }
    } else {
        moduleTitleEl.innerText = "Module not found.";
    }
}
