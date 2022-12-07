// Image Projects
const arrImg = [
    {
        img : './images/img-temp/aait.png',
        url : ''
    },
    {
        img : './images/img-temp/afrahko.png',
        url : ''
    },
    {
        img : './images/img-temp/haraj.png',
        url : ''
    },
    {
        img : './images/img-temp/harajSa.png',
        url : ''
    },
    {
        img : './images/img-temp/JAK.png',
        url : ''
    },
    {
        img : './images/img-temp/learn.png',
        url : ''
    },
    {
        img : './images/img-temp/monasba.png',
        url : ''
    },
    {
        img : './images/img-temp/mzadat.png',
        url : ''
    },
    {
        img : './images/img-temp/OPA.png',
        url : ''
    },
    {
        img : './images/img-temp/portfolio.png',
        url : ''
    },
    {
        img : './images/img-temp/wajah.png',
        url : ''
    },
    {
        img : './images/img-temp/11.png',
        url : ''
    },
    {
        img : './images/img-temp/22.png',
        url : ''
    },
    {
        img : './images/img-temp/33.png',
        url : ''
    },
    {
        img : './images/img-temp/44.png',
        url : ''
    },
    {
        img : './images/img-temp/55.png',
        url : ''
    },
    {
        img : './images/img-temp/66.png',
        url : ''
    },
    {
        img : './images/img-temp/77.png',
        url : ''
    },
    {
        img : './images/img-temp/88.png',
        url : ''
    },
    {
        img : './images/img-temp/99.png',
        url : ''
    },
];

// Items Skills
const itemSkills = [
    {
        name    : 'HTML',
        val     : '100'
    },
    {
        name    : 'CSS 3',
        val     : '100'
    },
    {
        name    : 'SASS',
        val     : '100'
    },
    {
        name    : 'JavaScript',
        val     : '70'
    },
    {
        name    : 'BootStrap',
        val     : '100'
    },
    {
        name    : 'TailwindCss',
        val     : '80'
    },
    {
        name    : 'Responsive Mobile',
        val     : '100'
    },
    {
        name    : 'Adobe XD',
        val     : '60'
    },
    {
        name    : 'React JS',
        val     : '70'
    },
    {
        name    : 'Next JS',
        val     : '70'
    },
    {
        name    : 'React Native',
        val     : '60'
    },
    {
        name    : 'Redux-Toolkit',
        val     : '80'
    },
    {
        name    : 'Soket.IO',
        val     : '70'
    },
    {
        name    : 'Framer Motion',
        val     : '60'
    },
    {
        name    : 'Angular',
        val     : '50'
    },
    {
        name    : 'GitHub',
        val     : '90'
    },
];

// Items Experience
const itemExperience = [
    {
        job         : 'UI Developer',
        company     : 'Awamer Alshabaka',
        location    : 'Egypt, Mansoura',
        dis         : 'UI Developer with 6 years of experience designing, developing, and managing complex websites, internal frameworks and responsive design.'
    },
    {
        job         : 'Ionic & React Native',
        company     : 'Awamer Alshabaka',
        location    : 'Egypt, Mansoura',
        dis         : 'Then I developed myself and learned a lot of skills, including ( Ionic 3 & React Native ) And I Worked As Ionic 3 For 1 years, And React Native For 2 years of experience.'
    },
    {
        job         : 'Senior Ui Developer',
        company     : 'SDS',
        location    : 'Saudi. Arabia',
        dis         : 'UI Developer part time ( remotely ) of experience designing, developing, and managing complex websites , internal frameworks and responsive design.'
    },
    {
        job         : 'Senior Ui Developer',
        company     : 'GET Group Holdings Ltd',
        location    : 'Cairo, Egypt',
        dis         : 'Senior UI Developer freelancer of experience designing, developing, and managing complex websites , internal frameworks and responsive design.'
    },
];

// Date Experience
const itemDate = [
    '02/2016 - 04/2021',
    '07/2019 - 04/2021',
    '12/2019 - 06/2021',
    '07/2021 - Ongoing',
];


$(document).ready(function () {

    // Image Projects
    arrImg.forEach(function(image) {
        let inItemImg = `
        <div class="item">
                
                <a href=${image.url} data-fancybox="watermrk" data-caption="caption" class="img-project position-relative overflow-hidden">
                    <main class="position-relative">    
                        <img loading="lazy" src=${image.img} />
                    </main>
                </a>

        </div>
        `
        $("#sliderProject").append(inItemImg);
    });

    // Items Skills
    itemSkills.forEach(function(skill) {
        let inItemSkill = `
        <div class="item">
            <div class="pernet-count">
                <div class="count-box">
                    <div class="svg-box" data-percent=${skill.val}>
                        <span class="textCount">0%</span>
                        <svg class="pie" viewbox="0 0 200 200">
                            <circle r="90" cx="100" cy="100"></circle>
                            <circle class="bar" r="90" cx="100" cy="100"></circle>
                        </svg>
                    </div>
                </div>
                <h3>${skill.name}</h3>
            </div>
        </div>
        `
        $("#sliderSkills").append(inItemSkill);
    });

    // Items Skills
    itemExperience.forEach(function(experience) {
        let inItemExperience = `
        <div class="item">
            <div class="block-experience">
                <div class="icon-head bgSection">
                    <img src="./images/briefcase.png" alt="">
                </div>
                <h4>${experience.job}</h4>
                <h5 class="colorMain">${experience.company}</h5>
                <div class="dataTime">
                    <p>
                        <span class="icon-map colorMain"></span>
                        <strong>${experience.location}</strong>
                    </p>
                </div>
                <p>${experience.dis}</p>
            </div>
        </div>
        `
        $("#sliderExperience").append(inItemExperience);
    });

});


