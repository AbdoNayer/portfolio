$(window).on('load', function () {

    let lang    = localStorage.getItem("langPage");

    function valName(val, text){
        var item = document.getElementsByClassName(val);
        for (var i = 0; i < item.length; ++i) {
            item[i].innerHTML = text
        }
    }

    function valInput(val, text){
        var item = document.getElementsByClassName(val);
        for (var i = 0; i < item.length; ++i) {
            item[i].placeholder = text
        }
    }

    if(lang === 'ar'){
        valName(`logo`,                     `Sh3wiZo`);
        valName(`name-home`,                `الرئيسية`);
        valName(`name-about`,               `من نحن`);
        valName(`name-services`,            `معرض الصور`);
        valName(`projects`,                 `المشاريع`);
        valName(`name-testimonials`,        `الشهادات`);
        valName(`name-contact`,             `إتصل بنا`);
        valName(`hello`,                    `اهلاََ بكم ...`);
        valName(`text-1`,                   `هنا موقع التصميمات الرائعة`);
        valName(`text-2`,                   `كل الآمكانيات الخاصة`);
        valName(`text-3`,                   `مشاهدة احدث العروض`);
        valName(`text-4`,                   `زيادة عدد المشاهدين`);
        valName(`text-5`,                   `نسبة الرابحين`);
        valName(`info-choose`,              `كل الآشياء التي تريدها هنا علي اعلي مستوي من الخدمه .. وزياده عدد المشاهدين والرابحين تصفح الان  ، واشترك معنا`);
        valName(`title-about`,              `من نحن`);
        valName(`info-about`,               `منتجاتنا مصنوعة خصيصًا بالكامل ومصممة بأحدث التقنيات وبنيات السحابة.`);
        valName(`li1`,                      `تصميم المواقع وتصميم الابلكيشن`);
        valName(`li2`,                      `كتابه كود من آحسن التقنيات الحديثه`);
        valName(`li3`,                      `عمل خلفيات من آحدث الخلفيات`);
        valName(`li4`,                      `منظمات وتحديثات وتحديات ف كل مجال`);
        valName(`title-services`,           `معرض الصور`);
        valName(`all`,                      `الكل`);
        valName(`webDes`,                   `تصميم المواقع`);
        valName(`react`,                    `مواقع رياكت`);
        valName(`netive`,                   `تطبيقات`);
        valName(`sent-form`,                `إرسال`);
        valInput(`in-name`,                 `الاسم بالكامل`);
        valInput(`in-mobile`,               `رقم الهاتف`);
        valInput(`in-email`,                `البريد الالكتروني`);
        valInput(`in-info`,                 `الرساله`);
        valName(`title-ser-1`,              `حراج السعودية`);
        valName(`title-ser-2`,              `اهل الآبل`);
        valName(`title-ser-3`,              `مناسبات`);
        valName(`title-ser-4`,              `الموقع الجديد`);
        valName(`title-ser-5`,              `نيو كير`);
        valName(`title-ser-6`,              `موقع جاك`);
        valName(`info-ser-1`,               `تسويق وبيع منتجات الآكثر عالميا عبر الموقع`);
        valName(`info-ser-2`,               `بيع الابل والماعز والتواصل مع المبيعين عبر الشات الخاص`);
        valName(`info-ser-3`,               `مناسبات وحفلات وافراح واحسن القاعات واللايف شو`);
        valName(`info-ser-4`,               `موقع فريد من نوعه وفيه اضافات ممتعه`);
        valName(`info-ser-5`,               `الطلبات الخيريه والتبرعات للفقراء وغيرهم`);
        valName(`info-ser-6`,               `كل ما تحتاجه من الفاشون والملابس الجديده هنا في جاك`);
        valName(`show-page`,                `مشاهده الموقع`);
        valName(`name-client`,              `عبدالوهاب نير`);
        valName(`info-page`,                `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`);
        valName(`title-client`,             `اراء العملاء`);
    }else if(lang === 'en'){
        valName(`logo`,                     `Sh3wiZo`);
        valName(`name-home`,                `Home`);
        valName(`name-about`,               `About`);
        valName(`name-services`,            `Services`);
        valName(`projects`,                 `projects`);
        valName(`name-testimonials`,        `Testimonials`);
        valName(`name-contact`,             `Contact`);
        valName(`title-about`,              `About Us`);
        valName(`hello`,                    `Welcome ...`);
        valName(`text-1`,                   `Here is a great design site`);
        valName(`text-2`,                   `All special possibilities`);
        valName(`text-3`,                   `Watch the latest offers`);
        valName(`text-4`,                   `Increase viewership`);
        valName(`text-5`,                   `winning percentage`);
        valName(`info-choose`,              `All the things you want here at the highest level of service .. and increase the number of viewers and winners. Browse now, and subscribe with us.`);
        valName(`info-about`,               `Our products are fully custom-made, built with the latest technologies and cloud-architectures.`);
        valName(`li1`,                      `Website design and app design`);
        valName(`li2`,                      `Writing a code is one of the best modern technologies`);
        valName(`li3`,                      `Make wallpapers from the latest backgrounds`);
        valName(`li4`,                      `Organizations, updates and challenges in every field`);
        valName(`title-services`,           `Our Services`);
        valName(`all`,                      `All`);
        valName(`webDes`,                   `Web Developer`);
        valName(`react`,                    `React Js`);
        valName(`netive`,                   `React Native`);
        valName(`sent-form`,                `Sent`);
        valInput(`in-name`,                 `full name`);
        valInput(`in-mobile`,               `phone`);
        valInput(`in-email`,                `email`);
        valInput(`in-info`,                 `message`);
        valName(`title-ser-1`,              `Haraj SA`);
        valName(`title-ser-2`,              `Ahl Elabel`);
        valName(`title-ser-3`,              `Monasbat`);
        valName(`title-ser-4`,              `New Page`);
        valName(`title-ser-5`,              `New Care`);
        valName(`title-ser-6`,              `JaK Page`);
        valName(`info-ser-1`,               `Marketing and selling the most global products through the site`);
        valName(`info-ser-2`,               `Selling camels and goats and communicating with sellers via private chat`);
        valName(`info-ser-3`,               `Occasions, parties, weddings, the best halls and live show`);
        valName(`info-ser-4`,               `A unique site with interesting additions`);
        valName(`info-ser-5`,               `Charitable requests and donations to the poor and others`);
        valName(`info-ser-6`,               `All you need from fashion and new clothes is here at Jack`);
        valName(`show-page`,                `Show Page`);
        valName(`name-client`,              `AbdElwahab Nayer`);
        valName(`info-page`,                `This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, where you can generate such text or many other texts in addition to increasing the number of characters generated by the application .`);
        valName(`title-client`,             `Customer Reviews`);
    }else {
        valName(`logo`,                     `Sh3wiZo`);
        valName(`name-home`,                `الرئيسية`);
        valName(`name-about`,               `من نحن`);
        valName(`name-services`,            `معرض الصور`);
        valName(`projects`,                 `المشاريع`);
        valName(`name-testimonials`,        `الشهادات`);
        valName(`name-contact`,             `إتصل بنا`);
        valName(`hello`,                    `اهلاََ بكم ...`);
        valName(`text-1`,                   `هنا موقع التصميمات الرائعة`);
        valName(`text-2`,                   `كل الآمكانيات الخاصة`);
        valName(`text-3`,                   `مشاهدة احدث العروض`);
        valName(`text-4`,                   `زيادة عدد المشاهدين`);
        valName(`text-5`,                   `نسبة الرابحين`);
        valName(`info-choose`,              `كل الآشياء التي تريدها هنا علي اعلي مستوي من الخدمه .. وزياده عدد المشاهدين والرابحين تصفح الان  ، واشترك معنا`);
        valName(`title-about`,              `من نحن`);
        valName(`info-about`,               `منتجاتنا مصنوعة خصيصًا بالكامل ومصممة بأحدث التقنيات وبنيات السحابة.`);
        valName(`li1`,                      `تصميم المواقع وتصميم الابلكيشن`);
        valName(`li2`,                      `كتابه كود من آحسن التقنيات الحديثه`);
        valName(`li3`,                      `عمل خلفيات من آحدث الخلفيات`);
        valName(`li4`,                      `منظمات وتحديثات وتحديات ف كل مجال`);
        valName(`title-services`,           `معرض الصور`);
        valName(`all`,                      `الكل`);
        valName(`webDes`,                   `تصميم المواقع`);
        valName(`react`,                    `مواقع رياكت`);
        valName(`netive`,                   `تطبيقات`);
        valName(`sent-form`,                `إرسال`);
        valInput(`in-name`,                 `الاسم بالكامل`);
        valInput(`in-mobile`,               `رقم الهاتف`);
        valInput(`in-email`,                `البريد الالكتروني`);
        valInput(`in-info`,                 `الرساله`);
        valName(`title-ser-1`,              `حراج السعودية`);
        valName(`title-ser-2`,              `اهل الآبل`);
        valName(`title-ser-3`,              `مناسبات`);
        valName(`title-ser-4`,              `الموقع الجديد`);
        valName(`title-ser-5`,              `نيو كير`);
        valName(`title-ser-6`,              `موقع جاك`);
        valName(`info-ser-1`,               `تسويق وبيع منتجات الآكثر عالميا عبر الموقع`);
        valName(`info-ser-2`,               `بيع الابل والماعز والتواصل مع المبيعين عبر الشات الخاص`);
        valName(`info-ser-3`,               `مناسبات وحفلات وافراح واحسن القاعات واللايف شو`);
        valName(`info-ser-4`,               `موقع فريد من نوعه وفيه اضافات ممتعه`);
        valName(`info-ser-5`,               `الطلبات الخيريه والتبرعات للفقراء وغيرهم`);
        valName(`info-ser-6`,               `كل ما تحتاجه من الفاشون والملابس الجديده هنا في جاك`);
        valName(`show-page`,                `مشاهده الموقع`);
        valName(`name-client`,              `عبدالوهاب نير`);
        valName(`info-page`,                `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`);
        valName(`title-client`,             `اراء العملاء`);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
        // valName(``,                         ``);
    }
});
