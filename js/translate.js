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
        valName(`desMe`,                            `خبره ف مجال البرمجه منذ ٦ سنوات ف المواقع والتطبيقات`);
        valName(`category`,                         `الاقسام`);
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
        valName(`desMe`,                            `6 years of experience in programming in websites and applications`);
        valName(`category`,                         `category`);
    }
});
