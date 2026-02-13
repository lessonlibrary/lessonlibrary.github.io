const components = {
    navbar: `
        <nav class="navbar">
            
            <input type="checkbox" id="sidebar-active">
            <label for="sidebar-active" id="overlay"></label>

            <label for="sidebar-active" id="open-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>


            <div class="links-container">

                <label for="sidebar-active" id="close-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label>

                <a href="index.html" class="home-link" >Home</a>
                <!-- <a href="" class="theme-btn">Light Mode</a>--!>
                <a href="index.html#contact">Contact</a>
                <a href="">About</a>
                <button class="theme-btn">
                    <svg class="sun-svg" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 30 30"><path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path></svg>
                    <svg class="moon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="17px" height="17px"><path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"/></svg>
                </button>
            </div>
        
            </nav>

    `,
    footer: `
        <div class="social-links-container">
            <a class="facebook-link" href="https://web.facebook.com/mohammedtahakechad/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 640 640" width="20px"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
            </a>

            <a class="github-link"href="https://github.com/aegon78" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 640 640" width="20px"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/></svg>
            </a>
        </div>
        
        <div class="footer-links-container">
            <a href="" class="home">Home</a>
            <a href="index.html#study-now" class="">Modules</a>
            <a href="index.html#contact" class="">Contact</a>
            <a href="#" class="">About</a>
        </div>

        <p class="madeWithLove">
            Made with 
            <span class="heart">
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 0 640 640" width="23px"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
            </span>
            in Laghouat
        </p>

    `
}

function injectComponents(){
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    
    header.innerHTML = components.navbar
    footer.innerHTML = components.footer
}
injectComponents()

const goTopBtn = document.querySelector('.go-top')

// the go up button yaay!
if(goTopBtn){
    window.addEventListener('scroll', ()=>{
        scrollY > 500 ? goTopBtn.style.opacity = '1' : goTopBtn.style.opacity = '0'
    })

    goTopBtn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}

// navigation bar

const linksContainerEls = document.querySelectorAll('.links-container a')
const checkbox = document.getElementById('sidebar-active')

linksContainerEls.forEach(el =>{
    el.addEventListener('click', ()=>{

        setTimeout(()=>{
            checkbox.checked = false;
        }, 100)
    })
})

// theme logic
const body = document.querySelector('body')
const themeBtn = document.querySelector('.theme-btn')
const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'light'){
    body.classList.add('light-mode')
    themeBtn.classList.add('light-mode')
}

themeBtn.addEventListener('click', e =>{
    e.preventDefault()
    
    const currentTheme = localStorage.getItem('theme')
    if(currentTheme === 'light'){
        body.classList.remove('light-mode')
        themeBtn.classList.remove('light-mode')
        localStorage.setItem('theme', 'dark')
    }else{
        body.classList.add('light-mode')
        themeBtn.classList.add('light-mode')
        localStorage.setItem('theme', 'light')
    }
})
//drop-down-menu logic

const levelMenu = document.querySelector('.level-menu')
const ddmSelected = document.querySelector('.ddm-selected')
const ddmSelectedValue = document.querySelector('.ddm-selected-value')

if(ddmSelected){
    ddmSelected.addEventListener('click', (e)=> {
        e.stopPropagation()
        ddmSelected.classList.toggle('active')
    })
}

window.addEventListener('click', ()=>{
    if(ddmSelected && ddmSelected.classList.contains('active')){
        ddmSelected.classList.remove('active')
    }
})



//select level logic
//module cards logic
let levels
const spinner = document.querySelector('.spinner')

fetch('./data.json')
    .then(response => response.json())//this is kind of a routine thing to do, it's not specific to this website.

    .then(data =>{
        levels = data
        const params = new URLSearchParams(window.location.search);
        const levelParam = params.get('l') || '3rd';
        if (levelParam && levels[levelParam]) {
            // Find the specific LI that matches the URL (e.g., data-id="3rd")
            const autoTarget = document.querySelector(`.level-menu > li[data-id="${levelParam}"]`);
            if (autoTarget) {
                // We don't just click it; we manually trigger the same logic
                // to ensure the UI updates correctly.
                autoTarget.click();
            }
        }
        initModulePage()
    })
    // .catch(err => console.error("Failed to load data.json:", err))

const levelItems = document.querySelectorAll('.level-menu > li')

levelItems.forEach((levelItem) =>{
    levelItem.addEventListener('click', ()=>{

        levelItems.forEach(levelItem => levelItem.classList.remove('level-selected'))
        levelItem.classList.add('level-selected')

        const levelId = levelItem.getAttribute('data-id') /// there was an error here.
        const selectedLevel = levels[levelId]
        ddmSelectedValue.innerText = selectedLevel.name

        // 3. URL: Change the link in the browser bar without refreshing
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?l=' + levelId;
        window.history.pushState({ path: newUrl }, '', newUrl);

        // 4. Action: Generate the cards
        renderModules(levelId);
        
    })
})

// RENDER MODULE CARDS
function renderModules(levelId) {
    const modulesContainer = document.querySelector('.modules-content');
    if (!modulesContainer) return; /// what does this do? what happens when there's no modulesContainer

    modulesContainer.innerHTML = ''; 
    const selectedLevel = levels[levelId]; // repeated in the function above, i think it's better if it's declared in the global scope
    

    if (selectedLevel && selectedLevel.modules) {
        selectedLevel.modules.forEach((moduleData, index) => {
            const moduleCard = document.createElement('a');
            
            // 1. CLASS & LINK LOGIC
            const overlayClass = `l-${levelId}-m${index + 1}`;
            moduleCard.classList.add('module', overlayClass);
            
            const mId = moduleData.id;
            moduleCard.href = `module.html?m=${mId}&l=${levelId}`;

            // 2. DYNAMIC SRC LOGIC
            // Looks for: pictures/3rd/l-3rd-m1.jpg
            const moduleBg = `pictures/${levelId}/${overlayClass}.jpg`;

            // 3. INJECT HTML
            // 'onerror' is the magic: if specificPic doesn't exist, it swaps to fallbackPic
            moduleCard.innerHTML = `
                <img src="${moduleBg}">
                <span>${moduleData.title}</span>
                
            `;

            const currentSpan = moduleCard.querySelector('span')

            if(mId.startsWith('rtl-')){
                currentSpan.style.fontFamily = 'IBM Plex Sans Arabic'
            }

            modulesContainer.appendChild(moduleCard);
        });
    }
}
// LEVEL SELECTION LOGIC
levelItems.forEach((levelItem) => {
    levelItem.addEventListener('click', () => {
        const levelId = levelItem.getAttribute('data-id');
        ddmSelectedValue.innerText = levels[levelId].name;
        
        // Update URL and render
        const newUrl = `${window.location.pathname}?l=${levelId}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        renderModules(levelId);
    });
});
//faqs logic

const faqHeaders = document.querySelectorAll('.faq-header')


const jokeEl = document.getElementById('joke')


function generateJoke(){
    const url = 'https://icanhazdadjoke.com'
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }
    jokeEl.classList.add('loading')
    fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerText = data.joke
    })
    .then( ()=>{jokeEl.classList.remove('loading')})
}


faqHeaders.forEach(faqHeader =>{
    faqHeader.addEventListener('click', ()=>{
        const isOpening = !faqHeader.classList.contains('active')
        faqHeader.classList.toggle('active')

        if(isOpening && faqHeader === faqHeaders[faqHeaders.length - 1]){
            jokeEl.innerText = 'Loading...'
            jokeEl.classList.add('loading')
            generateJoke()
        }
    })
})