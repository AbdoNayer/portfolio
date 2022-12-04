$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        var item = document.getElementsByClassName(val);
        for (var i = 0; i < item.length; ++i) {
            item[i].innerHTML = text
        }
    }

    if(lang === 'en'){
        valName(`logo`,                             `PRO CODE`);
        valName(`home`,                             `Home`);
        valName(`about`,                            `About Me`);
        valName(`project`,                          `Project`);
        valName(`skills`,                           `My Skills`);
        valName(`experience`,                       `My Experience`);
        valName(`contact`,                          `Contact Me`);
        valName(`downloadCV`,                       `Download CV`);
        valName(`welcome`,                          `Welcome to the personal website`);
        valName(`me`,                               `Hello, I Am`);
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
        valName(`all`,                              `All`);
        valName(`webDes`,                           `UI Web`);
        valName(`react`,                            `React Js & Next Js`);
        valName(`netive`,                           `React Native`);
        valName(`show-page`,                        `Show Page`);
        valName(`aait`,                             `Website Aait`);
        valName(`afrahko`,                          `Website Afrahko`);
        valName(`haraj`,                            `Website Haraj`);
        valName(`harajSa`,                          `Website Haraj Mazadat`);
        valName(`JAK`,                              `Website Jak`);
        valName(`learn`,                            `Website Learn`);
        valName(`monasba`,                          `Website Monasbat`);
        valName(`mzadat`,                           `Website Mzadat`);
        valName(`OPA`,                              `Website OPA`);
        valName(`portfolio`,                        `Website Portfolio`);
        valName(`wajah`,                            `Website Wajah`);
        valName(`coming`,                           `App Coming`);
        valName(`gamaia`,                           `App Gamaia`);
        valName(`harajAl`,                          `App Haraj`);
        valName(`chifz`,                            `App Chifz`);
        valName(`altraif`,                          `App Altarif`);
        valName(`offer`,                            `App Offer`);
        valName(`grab`,                             `App Grab`);
        valName(`elqbel`,                           `App Elqbela`);
        valName(`khdma`,                            `App Khdma`);
    }else {
        valName(`logo`,                             `PRO CODE`);
        valName(`home`,                             `الرئيسية`);
        valName(`about`,                            `معلومات عني`);
        valName(`project`,                          `المشاريع`);
        valName(`skills`,                           `المهارات`);
        valName(`experience`,                       `الخبرة`);
        valName(`contact`,                          `بيانات التواصل`);
        valName(`downloadCV`,                       `تحميل السيرة الذاتية`);
        valName(`welcome`,                          `اهلا بكم ف الموقع الشخصي`);
        valName(`me`,                               `مرحباً, انا`);
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
        valName(`all`,                              `الكل`);
        valName(`show-page`,                        `مشاهده الموقع`);
        valName(`webDes`,                           `UI Web`);
        valName(`react`,                            `React Js & Next Js`);
        valName(`netive`,                           `React Native`);
        valName(`aait`,                             `موقع شركة آوامر الشبكة`);
        valName(`afrahko`,                          `موقع أفراحكم`);
        valName(`haraj`,                            `موقع حراج الآصل`);
        valName(`harajSa`,                          `موقع حراج مزادات`);
        valName(`JAK`,                              `موقع جاك`);
        valName(`learn`,                            `موقع التعليمي`);
        valName(`monasba`,                          `موقع مناسبات`);
        valName(`mzadat`,                           `موقع مزادات`);
        valName(`OPA`,                              `موقع آوبا للعقار`);
        valName(`portfolio`,                        `موقع تعريفي`);
        valName(`wajah`,                            `موقع وجهة`);
        valName(`coming`,                           `تطبيق جآي`);
        valName(`gamaia`,                           `تطبيق الجمعية`);
        valName(`harajAl`,                          `تطبيق حراج`);
        valName(`chifz`,                            `تطبيق آسر منتجة`);
        valName(`altraif`,                          `تطبيق جمعية الطريف`);
        valName(`offer`,                            `تطبيق آوفر`);
        valName(`grab`,                             `تطبيق جراب الحاوي`);
        valName(`elqbel`,                           `تطبيق آهل الآبل`);
        valName(`khdma`,                            `تطبيق خدمة`);
    }
});
