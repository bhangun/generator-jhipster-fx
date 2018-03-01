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
// const cleanup = require('../cleanup');
const constants = require('../generator-constants');

module.exports = {
    writeFiles
};

let kotlinDir;
let kotlinNewDir;
let projectName;

function writeFiles(config) {
    return {

        setUpKotlinDir() {
            projectName = '../newProject/';
            kotlinDir = `${constants.KOTLIN_TEMPLATE}/`;
            kotlinNewDir = `${projectName + constants.KOTLIN_TEMPLATE}/`;
        },

        cleanupOldServerFiles() {
        //   cleanup.cleanupOldServerFiles(this, kotlinDir, this.testDir);
        },

        writeGlobalFiles() {
            this.template('pom.xml', `${projectName}pom.xml`);
            this.template('_README.md', `${projectName}README.md`);
            this.template('gitignore', `${projectName}.gitignore`);
        },

        writeServerResourceFiles() {
            // Create Java resource files
            mkdirp(kotlinDir);
            this.template(`${kotlinDir}MainApp.kt`, `${kotlinNewDir}MainApp.kt`);
            // Entities
            // this.template(`${kotlinDir}entities`, `${kotlinNewDir}entities`);
            // Shared root
            this.template(`${kotlinDir}shared/BaseController.kt`, `${kotlinNewDir}shared/BaseController.kt`);
            this.template(`${kotlinDir}shared/Styles.kt`, `${kotlinNewDir}shared/Styles.kt`);
            // Account
            this.template(`${kotlinDir}shared/account/RegisterController.kt`, `${kotlinNewDir}shared/account/RegisterController.kt`);
            this.template(`${kotlinDir}shared/account/RegisterForm.kt`, `${kotlinNewDir}shared/account/RegisterForm.kt`);
            this.template(`${kotlinDir}shared/account/User.kt`, `${kotlinNewDir}shared/account/User.kt`);
            this.template(`${kotlinDir}shared/account/UserForm.kt`, `${kotlinNewDir}shared/account/UserForm.kt`);
            this.template(`${kotlinDir}shared/account/UserFragment.kt`, `${kotlinNewDir}shared/account/UserFragment.kt`);
            this.template(`${kotlinDir}shared/account/UserView.kt`, `${kotlinNewDir}shared/account/UserView.kt`);
            // Administration
            this.template(`${kotlinDir}shared/administration/ConfigurationFragment.kt`, `${kotlinNewDir}shared/administration/ConfigurationFragment.kt`);
            this.template(`${kotlinDir}shared/administration/HealthFragment.kt`, `${kotlinNewDir}shared/administration/HealthFragment.kt`);
            this.template(`${kotlinDir}shared/administration/MetricsFragment.kt`, `${kotlinNewDir}shared/administration/MetricsFragment.kt`);
            // Dashboard
            this.template(`${kotlinDir}shared/dashboard/DashboardFragment.kt`, `${kotlinNewDir}shared/dashboard/DashboardFragment.kt`);
            // Home
            this.template(`${kotlinDir}shared/home/HomeController.kt`, `${kotlinNewDir}shared/home/HomeController.kt`);
            this.template(`${kotlinDir}shared/home/HomeWorkspace.kt`, `${kotlinNewDir}shared/home/HomeWorkspace.kt`);
            // Login
            this.template(`${kotlinDir}shared/login/LoginController.kt`, `${kotlinNewDir}shared/login/LoginController.kt`);
            this.template(`${kotlinDir}shared/login/LoginView.kt`, `${kotlinNewDir}shared/login/LoginView.kt`);
        }
    };
}
