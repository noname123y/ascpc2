import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const prev_people = [
    {
        year: 2019,
        name: 'Name Surname',
        desig: 'Designation',
        email: '#',
        linkedin: '#'
    },
    {
        year: 2020,
        name: 'Name Surname',
        desig: 'Designation',
        email: '#',
        linkedin: '#'
    },
    {
        year: 2021,
        name: 'Name Surname',
        desig: 'Designation',
        email: '#',
        linkedin: '#'
    },
    {
        year: 2022,
        name: 'Name Surname',
        desig: 'Designation',
        email: '#',
        linkedin: '#'
    },
    {
        year: 2023,
        name: 'Name Surname',
        desig: 'Designation',
        email: '#',
        linkedin: '#'
    },
]

function getNextId(id) {
    if (id < (prev_people.length - 1)) {
        return id + 1;
    }
    else {
        return 0;
    }
}

let prev_teams = document.getElementById('prev-teams');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let id = 0;

setInterval(async() => {
    prev_teams.style.transition = "all 0.5s";
    prev_teams.style.opacity = '0';
    await sleep(250);
    id = getNextId(id);
    const obj = prev_people[id];
    prev_teams.innerHTML = `
                <span class='text-black text-md font-semibold ml-[30px]'>YEAR:</span>
                <span class='text-zinc-500 text-2xl ml-[10px]'>${obj.year}</span>
                <div class="card-container mt">
                    <div id="card">
                        <img id="card-img" src="avatar.png">
                        <div>
                            <p id="card-name">${obj.name}</p>
                            <p id="card-designation">${obj.desig}</p>
                        </div>
                        <div id="card-links">
                            <a href="${obj.email}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <p>Email</p>
                            </a>
                            <a href="${obj.linkedin}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                    class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <p>LinkdIn</p>
                            </a>
                        </div>
                    </div>
                    <div id="card">
                        <img id="card-img" src="avatar.png">
                        <div>
                            <p id="card-name">Name Surname</p>
                            <p id="card-designation">Designation</p>
                        </div>
                        <div id="card-links">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                                <p>Email</p>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                    class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <p>LinkdIn</p>
                            </a>
                        </div>
                    </div>
                </div>
                `
                prev_teams.style.opacity = '100';
}, 5000)

