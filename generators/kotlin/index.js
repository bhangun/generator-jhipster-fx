// const chalk = require('chalk');
const writeFiles = require('./files').writeFiles;
const BaseGenerator = require('generator-jhipster/generators/generator-base');
// const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

// let useBlueprint;

module.exports = class extends BaseGenerator {
    constructor(args, opts) {
        super(args, opts);
        this.configOptions = this.options.configOptions || {};

        // This adds support for a `--[no-]client-hook` flag
        this.option('client-hook', {
            desc: 'Enable gulp and bower hook from maven/gradle build',
            type: Boolean,
            defaults: false
        });

        // This adds support for a `--[no-]i18n` flag
        this.option('i18n', {
            desc: 'Disable or enable i18n when skipping client side generation, has no effect otherwise',
            type: Boolean,
            defaults: true
        });

        this.log('------masuk kotlin....');
        // const blueprint = this.options.blueprint || this.configOptions.blueprint || this.config.get('blueprint');
        // useBlueprint = this.composeBlueprint(blueprint, 'kotlin'); // use global variable since getters dont have access to instance property
    }

    get initializing() {
        return {
            init(args) {
                if (args === 'default') {
                    // do something when argument is 'default'
                }
            },
            readConfig() {
                this.packageName = this.config.get('packageName');
                this.baseName = this.config.get('baseName');
                this.packageFolder = this.config.get('packageFolder');
                this.log(this.packageName);
                this.log(this.baseName);
                this.log(this.packageFolder);
                this.log('++++++++++++++++++++++');
            },
        };
    }

    get prompting() {
        // return {};
        return {
        // askForModuleName: prompts.askForModuleName,
            setSharedConfigOptions() {
                this.configOptions.packageName = this.packageName;
                this.configOptions.baseName = this.baseName;
            }
        };
    }

    get configuring() {
    // if (useBlueprint) return;
        return {
            saveConfig() {
                this.config.set('baseName', this.baseName);
                this.config.set('packageName', this.packageName);
                this.config.set('packageFolder', this.packageFolder);
            }
        };
    }

    get writing() {
        return writeFiles();
    }

    install() {
        /* let logMsg =
            `To install your dependencies manually, run: ${chalk.yellow.bold(`${this.clientPackageManager} install`)}`;

        if (this.clientFramework === 'angular1') {
            logMsg =
                `To install your dependencies manually, run: ${chalk.yellow.bold(`${this.clientPackageManager} install & bower install`)}`;
        }
        const injectDependenciesAndConstants = (err) => {
            if (err) {
                this.warning('Install of dependencies failed!');
                this.log(logMsg);
            } else if (this.clientFramework === 'angular1') {
                this.spawnCommand('gulp', ['install']);
            }
        };
        const installConfig = {
            bower: this.clientFramework === 'angular1',
            npm: this.clientPackageManager !== 'yarn',
            yarn: this.clientPackageManager === 'yarn',
            callback: injectDependenciesAndConstants
        };
        if (this.options['skip-install']) {
            this.log(logMsg);
        } else {
            this.installDependencies(installConfig);
        }
        */
    }

    end() {
        this.log('Congratulation! Your JHipster FX has been done generate application!');
    }
};
