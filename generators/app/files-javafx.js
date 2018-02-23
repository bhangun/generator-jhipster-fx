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
const mkdirp = require('mkdirp');
const cleanup = require('../cleanup');
const constants = require('../generator-constants');

/**
*/
const files = {
    common: [
        {
            templates: [
                'pom.xml',
            // { file: 'webpack/logo-jhipster.png', method: 'copy' }
            ]
        }
    ],
};


module.exports = {
    writeFiles,
    files
};

let kotlinDir;

function writeFiles() {
    return {

        setUpKotlinDir() {
            kotlinDir = this.kotlinDir = `${constants.KOTLIN_SRC_DIR + this.packageFolder}/`;
        },

        cleanupOldServerFiles() {
            cleanup.cleanupOldServerFiles(this, kotlinDir, this.testDir);
        },

        writeGlobalFiles() {
            this.template('_README.md', 'README.md');
            this.template('gitignore', '.gitignore');
            this.copy('gitattributes', '.gitattributes');
            this.copy('editorconfig', '.editorconfig');
        },

        writeServerResourceFiles() {
            // Create Java resource files
            mkdirp(constants.KOTLIN_SRC_DIR);
            this.template(`${constants.KOTLIN_SRC_DIR}MainApp.kt`, `${constants.KOTLIN_SRC_DIR}MainApp.kt`);
            // Entities
            this.template(`${constants.KOTLIN_SRC_DIR}entities/`, `${constants.KOTLIN_SRC_DIR}entities/`);
            // Shared root
            this.template(`${constants.KOTLIN_SRC_DIR}shared/BaseController.kt`, `${constants.KOTLIN_SRC_DIR}shared/BaseController.kt`);      
            this.template(`${constants.KOTLIN_SRC_DIR}shared/Styles.kt`, `${constants.KOTLIN_SRC_DIR}shared/Styles.kt`);
            // Account
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/RegisterController.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/RegisterController.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/RegisterForm.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/RegisterForm.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/User.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/User.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/UserForm.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/UserForm.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/UserFragment.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/UserFragment.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/account/UserView.kt`, `${constants.KOTLIN_SRC_DIR}shared/account/UserView.kt`);
            // Administration
            this.template(`${constants.KOTLIN_SRC_DIR}shared/administration/ConfigurationFragment.kt`, `${constants.KOTLIN_SRC_DIR}shared/administration/`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/administration/HealthFragment.kt`, `${constants.KOTLIN_SRC_DIR}shared/administration/HealthFragment.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/administration/MetricsFragment.kt`, `${constants.KOTLIN_SRC_DIR}shared/administration/MetricsFragment.kt`);
            // Dashboard
            this.template(`${constants.KOTLIN_SRC_DIR}shared/dashboard/DashboardFragment.kt`, `${constants.KOTLIN_SRC_DIR}shared/dashboard/DashboardFragment.kt`);
            // Home
            this.template(`${constants.KOTLIN_SRC_DIR}shared/home/HomeController.kt`, `${constants.KOTLIN_SRC_DIR}shared/home/HomeController.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/home/HomeWorkspace.kt`, `${constants.KOTLIN_SRC_DIR}shared/home/HomeWorkspace.kt`);
            // Login
            this.template(`${constants.KOTLIN_SRC_DIR}shared/login/LoginController.kt`, `${constants.KOTLIN_SRC_DIR}shared/login/LoginController.kt`);
            this.template(`${constants.KOTLIN_SRC_DIR}shared/login/LoginView.kt`, `${constants.KOTLIN_SRC_DIR}shared/login/LoginView.kt`);
        }
    }
}
