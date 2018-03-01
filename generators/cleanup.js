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

// const constants = require('./generator-constants');

// const KOTLIN_SRC_DIR = constants.KOTLIN_SRC_DIR;


module.exports = {
    cleanupOldFiles,
};

/**
 * Removes files that where generated in previous JHipster versions and therefore need to be removed
 *
 * @param {any} generator - reference to generator
 * @param {string} kotlinDir - Java Dir
 * @param {string} testDir - Test Dir
 */
function cleanupOldFiles(generator, javaDir, testDir) {
    /*
    if (generator.isJhipsterVersionLessThan('3.2.0')) {
        // removeFile and removeFolder methods should be called here for files and folders to cleanup
        generator.removeFile(`${KOTLIN_SRC_DIR}components/form/uib-pager.config.js`);
        generator.removeFile(`${KOTLIN_SRC_DIR}components/form/uib-pagination.config.js`);
    }
    */
}
