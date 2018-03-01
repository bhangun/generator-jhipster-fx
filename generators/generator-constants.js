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
const PROJECTS = 'kotlin/mypackage';
const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';
const KOTLIN_TEMPLATE = MAIN_DIR + PROJECTS;

const SUPPORTED_VALIDATION_RULES = ['required', 'unique', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

// documentation constants
const JHIPSTER_DOCUMENTATION_URL = 'http://www.jhipster.tech';
const JHIPSTER_DOCUMENTATION_ARCHIVE_PATH = '/documentation-archive/';


const LANGUAGES = [
    { name: 'English', dispName: 'English', value: 'en' },
    { name: 'Indonesian', dispName: 'Bahasa Indonesia', value: 'id' }
];

const constants = {
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    LINE_LENGTH: 180,
    LANGUAGES,
    PROJECTS,
    KOTLIN_TEMPLATE,
    MAIN_DIR,
    TEST_DIR,
    KOTLIN_SRC_DIR: `${MAIN_DIR}kotlin/`,
    // entity related
    SUPPORTED_VALIDATION_RULES,

    JHIPSTER_DOCUMENTATION_URL,
    JHIPSTER_DOCUMENTATION_ARCHIVE_PATH,

    JAVA_VERSION,
    KOTLIN_VERSION,
    NODE_VERSION,
    YARN_VERSION,
    NPM_VERSION
};

module.exports = constants;
