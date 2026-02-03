function initModulePage(){
    // 1. SELECTORS
    const moduleTitleEl = document.querySelector('.module-hero-title');
    const tagsContainer = document.querySelector('.tags-container')
    const coefTagContainer = document.querySelector('.coef-tag')
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
    const moduleId = params.get('m');
    const levelId = params.get('l'); // Expected values: '1st', '2nd', etc.
    
    const isArabic = moduleId && moduleId.startsWith('rtl-');

    // 3. BACK BUTTON FIX
    if (backBtn && levelId) {
        backBtn.href = `index.html?l=${levelId}#study-now`;
        backBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22" height="22"><path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"/></svg>
            
            Back to ${levelId} Year Modules

        `
        let levelInArabic = 'المختارة'

        if(levelId === '1st'){levelInArabic = 'الاولى'}
        else if(levelId === '2nd'){levelInArabic = 'الثانية'}
        else if(levelId === '3rd'){levelInArabic = 'الثالثة'}
        else if(levelId === '4th'){levelInArabic = 'الرابعة'}
        else if(levelId === '5th'){levelInArabic = 'الخامسة'}
        
        if(isArabic){ 
            backBtn.innerHTML = `
                
                الرجوع إلى مواد السنة ${levelInArabic}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22" height="22"><path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"/></svg>
                `
            backBtn.classList.add('back-btn-rtl-layout')
        }
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

        const coefValue = Number(selectedModule.coefTag)
        coefTagContainer.classList.remove('low', 'medium', 'high')
        if(coefValue <= 1){
            coefTagContainer.classList.add('low')
        }else if(coefValue === 2){
            coefTagContainer.classList.add('medium')
        }else {
            coefTagContainer.classList.add('high')
        }
        coefTagEl.innerText = selectedModule.coefTag;


        levelTagEl.innerText = levelId.toUpperCase();


        if (isArabic) {

            newArabicTag = document.createElement('div')
            newArabicTag.classList.add('tag', 'arabic-tag')
            newArabicTag.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 640 640"><path d="M64 320C64 178.6 178.6 64 320 64C353 64 384.6 70.3 413.6 81.7C421 84.6 425.1 92.4 423.4 100.1C421.7 107.8 414.6 113.1 406.7 112.5C401.9 112.2 397 112 392.1 112C277.2 112 184.1 205.1 184.1 320C184.1 434.9 277.2 528 392.1 528C397 528 401.9 527.8 406.7 527.5C414.6 527 421.7 532.2 423.4 539.9C425.1 547.6 421 555.4 413.6 558.3C384.6 569.7 353 576 320 576C178.6 576 64 461.4 64 320zM439.4 201.4C442.9 194.3 453.1 194.3 456.6 201.4L488.1 265.2C489.5 268 492.2 270 495.3 270.5L565.7 280.7C573.6 281.8 576.7 291.5 571 297.1L520.1 346.7C517.8 348.9 516.8 352.1 517.3 355.2L529.3 425.3C530.6 433.1 522.4 439.1 515.4 435.4L452.4 402.3C449.6 400.8 446.3 400.8 443.5 402.3L380.5 435.4C373.5 439.1 365.2 433.1 366.6 425.3L378.6 355.2C379.1 352.1 378.1 348.9 375.8 346.7L325 297.1C319.3 291.5 322.4 281.9 330.3 280.7L400.7 270.5C403.8 270 406.5 268.1 407.9 265.2L439.4 201.4z"/></svg>
                Arabic
            `
            tagsContainer.append(newArabicTag)

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
            levelTagContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="18px" height="18px"><path d="M576 96C576 204.1 499.4 294.3 397.6 315.4C389.7 257.3 363.6 205 325.1 164.5C365.2 104 433.9 64 512 64L544 64C561.7 64 576 78.3 576 96zM64 160C64 142.3 78.3 128 96 128L128 128C251.7 128 352 228.3 352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 384C164.3 384 64 283.7 64 160z"/></svg>
                <span class="level-tag-value">1ST</span>
                YEAR
            `
            levelTagContainer.classList.add('bud-level')
        
        }if(levelId === '2nd'){
            levelTagContainer.classList.add('bronze-level')
        
        }else if(levelId === '3rd'){
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
        if(moduleTitleEl){
            moduleTitleEl.innerText = "Module not found.";
        }
    }
}
