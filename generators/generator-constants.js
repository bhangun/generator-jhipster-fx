/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Version of Java, Scala
const JAVA_VERSION = '1.8'; // Java version is forced to be 1.8. We keep the variable as it might be useful in the future.
const KOTLIN_VERSION = '1.2.21';

// version of Node, Yarn, NPM
const NODE_VERSION = '8.9.3';
const YARN_VERSION = '1.3.2';
const NPM_VERSION = '5.6.0';

// all constants used throughout all generators

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

// Note: this will be prepended with 'target/' for Maven, or with 'build/' for Gradle.
const CLIENT_DIST_DIR = 'www/';

const SUPPORTED_VALIDATION_RULES = ['required', 'unique', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

// documentation constants
const JHIPSTER_DOCUMENTATION_URL = 'http://www.jhipster.tech';
const JHIPSTER_DOCUMENTATION_ARCHIVE_PATH = '/documentation-archive/';

const SQL_DB_OPTIONS = [
    {
        value: 'mysql',
        name: 'MySQL'
    }
];

const LANGUAGES = [
    {
        name: 'Arabic (Libya)', dispName: 'العربية', value: 'ar-ly', rtl: true, skipForLocale: true
    },
    { name: 'Armenian', dispName: 'Հայերեն', value: 'hy' },
    { name: 'Catalan', dispName: 'Català', value: 'ca' },
    {
        name: 'Chinese (Simplified)', dispName: '中文（简体）', value: 'zh-cn', localeId: 'zh-Hans'
    },
    {
        name: 'Chinese (Traditional)', dispName: '繁體中文', value: 'zh-tw', localeId: 'zh-Hant'
    },
    { name: 'Czech', dispName: 'Český', value: 'cs' },
    { name: 'Danish', dispName: 'Dansk', value: 'da' },
    { name: 'Dutch', dispName: 'Nederlands', value: 'nl' },
    { name: 'English', dispName: 'English', value: 'en' },
    { name: 'Estonian', dispName: 'Eesti', value: 'et' },
    {
        name: 'Farsi', dispName: 'فارسی', value: 'fa', rtl: true
    },
    { name: 'French', dispName: 'Français', value: 'fr' },
    { name: 'Galician', dispName: 'Galego', value: 'gl' },
    { name: 'German', dispName: 'Deutsch', value: 'de' },
    { name: 'Greek', dispName: 'Ελληνικά', value: 'el' },
    { name: 'Hindi', dispName: 'हिंदी', value: 'hi' },
    { name: 'Hungarian', dispName: 'Magyar', value: 'hu' },
    { name: 'Indonesian', dispName: 'Bahasa Indonesia', value: 'id' },
    { name: 'Italian', dispName: 'Italiano', value: 'it' },
    { name: 'Japanese', dispName: '日本語', value: 'ja' },
    { name: 'Korean', dispName: '한국어', value: 'ko' },
    { name: 'Marathi', dispName: 'मराठी', value: 'mr' },
    { name: 'Polish', dispName: 'Polski', value: 'pl' },
    {
        name: 'Portuguese (Brazilian)', dispName: 'Português (Brasil)', value: 'pt-br', localeId: 'pt'
    },
    {
        name: 'Portuguese', dispName: 'Português', value: 'pt-pt', localeId: 'pt-PT'
    },
    { name: 'Romanian', dispName: 'Română', value: 'ro' },
    { name: 'Russian', dispName: 'Русский', value: 'ru' },
    { name: 'Slovak', dispName: 'Slovenský', value: 'sk' },
    { name: 'Serbian', dispName: 'Srpski', value: 'sr' },
    { name: 'Spanish', dispName: 'Español', value: 'es' },
    { name: 'Swedish', dispName: 'Svenska', value: 'sv' },
    { name: 'Turkish', dispName: 'Türkçe', value: 'tr' },
    { name: 'Tamil', dispName: 'தமிழ்', value: 'ta' },
    { name: 'Thai', dispName: 'ไทย', value: 'th' },
    {
        name: 'Ukrainian', dispName: 'Українська', value: 'ua', localeId: 'uk'
    },
    { name: 'Vietnamese', dispName: 'Tiếng Việt', value: 'vi' }
];

const constants = {
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    DOCKER_DIR: `${MAIN_DIR}docker/`,
    LINE_LENGTH: 180,
    LANGUAGES,

    MAIN_DIR,
    TEST_DIR,

    CLIENT_MAIN_SRC_DIR: `${MAIN_DIR}webapp/`,
    CLIENT_TEST_SRC_DIR: `${TEST_DIR}javascript/`,
    CLIENT_WEBPACK_DIR: 'webpack/',
    CLIENT_DIST_DIR,
    ANGULAR_DIR: `${MAIN_DIR}webapp/app/`,
    REACT_DIR: `${MAIN_DIR}webapp/app/`,

    SERVER_MAIN_SRC_DIR: `${MAIN_DIR}java/`,
    SERVER_MAIN_RES_DIR: `${MAIN_DIR}resources/`,
    SERVER_TEST_SRC_DIR: `${TEST_DIR}java/`,
    SERVER_TEST_RES_DIR: `${TEST_DIR}resources/`,

    // entity related
    SUPPORTED_VALIDATION_RULES,

    JHIPSTER_DOCUMENTATION_URL,
    JHIPSTER_DOCUMENTATION_ARCHIVE_PATH,

    
    JAVA_VERSION,
    SCALA_VERSION,
    NODE_VERSION,
    YARN_VERSION,
    NPM_VERSION,
    SQL_DB_OPTIONS
};

module.exports = constants;
