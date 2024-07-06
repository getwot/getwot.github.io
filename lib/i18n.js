const updateLanguage = () => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
        element.classList.add(i18next.language);
    });
}

const updateDownloadButton = (lang) => {
    const userSystem = /Linux/.test(navigator.userAgent) ? 'debian' : 'windows';
    const downloadButton = document.getElementById('download')
    const i18n = (lang) => {
        const locales = {
            'pt-BR': 'Скачать для ',
            'en': 'Download for '
        }
        return locales[lang] || locales.en
    }

    downloadButton
        .innerText = i18n(lang) + supportedSystems(userSystem).os
}

document.addEventListener('DOMContentLoaded', () => {
    let userLanguage = navigator.languages

    i18next.init({
        lng: userLanguage,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    currentLang:        'English',
                    ptLang:             'Russian',
                    enLang:             'English',

                    voxelLink:          'Creator and Main Developer',

                    mainTextOne:        'Experience the ultimate',
                    mainTextTwo:        'opensource windows optimization tool',

                    mobileDiscord:      'Meet us on discord',
                    mobileGithub:       "View source code",

                    descriptionOne:     'wot. is a free, open source',
                    descriptionTwo:     '— and self-sufficient windows tool',

                    // downloadButton:     'Download for Windows',
                    changeLog:          'Changelog',
                    sourceCodeButton:   'View Source Code',

                    cardOneTitle:       'Free',
                    cardTwoTitle:       'Open Source',
                    cardThreeTitle:     'No Ads',

                    cardOneTxtOne:      'We',
                    cardOneTxtTwo:      'don\'t care',
                    cardOneTxtThree:    'about',
                    cardOneTxtFour:     'your',
                    cardOneTxtFive:     'money',

                    cardTwoTxtOne:      'Feel free to read',
                    cardTwoTxtTwo:      'our',
                    cardTwoTxtThree:    'source code',

                    cardThreeTxtOne:    'Do you hate ads?',
                    cardThreeTxtTwo:    'We do it too!',
                }
            },
            pt: {
                translation: {
                    currentLang:        'Русский',
                    ptLang:             'Русский',
                    enLang:             'Английский',

                    voxelLink:          'Создатель и главный разработчик',

                    mainTextOne:        'Воспользуйтесь лучшим',
                    mainTextTwo:        'Windows Optimization Tool - прямо сейчас!',

                    mobileDiscord:      'Встретимся в discord',
                    mobileGithub:       'Просмотр исходного кода',

                    descriptionOne:     'wot. — это бесплатный инструмент',
                    descriptionTwo:     'для Windows с открытым исходным кодом',

                    // downloadButton:  'Скачать для Windows',
                    changeLog:          'Список изменений',
                    sourceCodeButton:   'Просмотр исходного кода',

                    cardOneTitle:       'Бесплатно',
                    cardTwoTitle:       'Открытый код',
                    cardThreeTitle:     'Без рекламы',

                    cardOneTxtOne:      'Нас',
                    cardOneTxtTwo:      'не волнуют',
                    cardOneTxtThree:    'ваши',
                    cardOneTxtFour:     'деньги',
                    cardOneTxtFive:     '',

                    cardTwoTxtOne:      'Не стесняйтесь ознакомиться',
                    cardTwoTxtTwo:      'с нашим',
                    cardTwoTxtThree:    'исходным кодом',

                    cardThreeTxtOne:    'Вы ненавидите рекламу?',
                    cardThreeTxtTwo:    'Мы тоже!',
                }
            }
        }
    }, () => {
        updateLanguage()
        updateDownloadButton(i18next.language)
    });
});

const Lang = {
    menu: document.querySelector('.language-box'),
    show: function() {
        this.menu.classList.add('show');
    },
    hide: function() {
        this.menu.classList.remove('show');
    }
};


const changeLanguage = (newLang) => {
    i18next.changeLanguage(newLang, () => {
        updateLanguage();
        updateDownloadButton(newLang)
        Lang.hide();
    });
}
