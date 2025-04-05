const languages = {
    ar: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        contact: "اتصل بنا",
        welcome: "مرحبًا بكم في Smart-Technologie",
        slogan: "نقدم حلولًا تكنولوجية متكاملة لتحقيق أهداف عملك.",
        learnMore: "تعرف على خدماتنا",
        security: "الأمن المعلوماتي",
        securityDesc: "حماية بياناتك وشبكاتك من الهجمات الإلكترونية.",
        erp: "إدارة تخطيط الموارد (ERP)",
        erpDesc: "أنظمة متكاملة لإدارة عملياتك الداخلية.",
        software: "تطوير البرمجيات",
        softwareDesc: "تطبيقات ومواقع إلكترونية مخصصة لاحتياجاتك.",
        ecommerce: "التجارة الإلكترونية",
        ecommerceDesc: "إنشاء متاجر إلكترونية متكاملة لبيع منتجاتك بسهولة."
    },
    fr: {
        home: "Accueil",
        services: "Services",
        about: "À propos",
        contact: "Contactez-nous",
        welcome: "Bienvenue chez Smart-Technologie",
        slogan: "Nous proposons des solutions technologiques complètes pour atteindre vos objectifs.",
        learnMore: "Découvrez nos services",
        security: "Sécurité informatique",
        securityDesc: "Protégez vos données et réseaux contre les cyberattaques.",
        erp: "Gestion des ressources (ERP)",
        erpDesc: "Systèmes intégrés pour gérer vos processus internes.",
        software: "Développement de logiciels",
        softwareDesc: "Applications et sites web personnalisés selon vos besoins.",
        ecommerce: "E-Commerce",
        ecommerceDesc: "Créez des boutiques en ligne complètes pour vendre vos produits facilement."
    }
};

let currentLang = 'ar';

document.getElementById('language-switch').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'fr' : 'ar';
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languages[lang][key]) {
            element.textContent = languages[lang][key];
        }
    });

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.getElementById('language-switch').textContent = lang === 'ar' ? 'FR' : 'AR';
}