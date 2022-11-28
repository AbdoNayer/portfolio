$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        var item = document.getElementsByClassName(val);
        for (var i = 0; i < item.length; ++i) {
            item[i].innerHTML = text
        }
    }

    if(lang === 'ar'){
        // valName(`logo`,                             `Sh3wiZo`);
        valName(`home`,                             `الرئيسية`);
        valName(`about`,                            `معلومات عني`);
        valName(`project`,                          `المشاريع`);
        valName(`skills`,                           `المهارات`);
        valName(`experience`,                       `الخبرة`);
        valName(`contact`,                          `بيانات التواصل`);
        valName(`downloadCV`,                       `تحميل السيرة الذاتية`);
        valName(`welcome`,                          `اهلا بكم ف الموقع الشخصي`);
        valName(`me`,                               `انا`);
        valName(`myName`,                           `عبدالوهاب نير`);
        valName(`myWork`,                           `فرونت إند ديفلوبر`);
        valName(`desMe`,                            `خبره ف مجال البرمجه منذ ٦ سنوات ف المواقع والتطبيقات`);
        valName(`loading`,                          `جاري التحميل ...`);
        valName(`part1`,                            `بداءت ف المجال من ٢٠١٦ لحد الآن .`);
        valName(`part2`,                            `بداءت ف المجال اولا ك <span class="colorMain">UI Developer</span> .`);
        valName(`part3`,                            `تصميم وتطوير وإدارة مواقع الويب المعقدة والأطر الداخلية والتصميم سريع الاستجابة .`);
        valName(`part4`,                            `لدي شغف بالتعلم المستمر وتطوير نفسي في مجال <span class="colorMain">Front-End Developer</span> .`);
        valName(`part5`,                            `ثم طورت نفسي وتعلمت الكثير من المهارات ، مثل :- <br> ( <span class="colorMain">Ionic 3</span> & <span class="colorMain">Angular</span> & <span class="colorMain">ReactJS</span> & <span class="colorMain">React Native</span> ) .`);
        valName(`part6`,                            `لقد عملت <span class="colorMain">Front-End Developer as ( React & React Native )</span> لمدة 3 سنوات .`);
        valName(`part7`,                            `لدي خبره ف التعامل مع ( <span class="colorMain">Adobe XD</span> & <span class="colorMain">PhotoShop</span> & <Span class="colorMain">Figma</Span> )`);
        valName(``,                                 ``);
    }else {
        // valName(`logo`,                             `Sh3wiZo`);
        valName(`home`,                             `Home`);
        valName(`about`,                            `About Me`);
        valName(`project`,                          `Project`);
        valName(`skills`,                           `My Skills`);
        valName(`experience`,                       `My Experience`);
        valName(`contact`,                          `Contact Me`);
        valName(`downloadCV`,                       `Download CV`);
        valName(`welcome`,                          `Welcome to the personal website`);
        valName(`me`,                               `I Am`);
        valName(`myName`,                           `AbdElwahab Nayer`);
        valName(`myWork`,                           `Front-End Developer`);
        valName(`desMe`,                            `6 years of experience in programming in websites and applications`);
        valName(`loading`,                          `Loading ...`);
        valName(`part1`,                            `I started working in this field from 2016 until now .`);
        valName(`part2`,                            `I started in the field first as <span class="colorMain">UI Developer</span> .`);
        valName(`part3`,                            `Design, develop and manage complex websites, internal frameworks and responsive design .`);
        valName(`part4`,                            `I have a passion for continuous learning and self-development <span class="colorMain">Front-End Developer</span> .`);
        valName(`part5`,                            `Then I developed myself and learned a lot of skills, like :- <br> ( <span class="colorMain">Ionic 3</span> & <span class="colorMain">Angular</span> & <span class="colorMain">ReactJS</span> & <span class="colorMain">React Native</span> ) .`);
        valName(`part6`,                            `I have worked <span class="colorMain">Front-End Developer as ( React & React Native )</span> for 3 years .`);
        valName(`part7`,                            `I have experience to handle with ( <span class="colorMain">Adobe XD</span> & <span class="colorMain">PhotoShop</span> & <Span class="colorMain">Figma</Span> )`);
    }
});
