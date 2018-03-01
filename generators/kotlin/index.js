// const chalk = require('chalk');
const writeFiles = require('./files').writeFiles;
const BaseGenerator = require('generator-jhipster/generators/generator-base');
// const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

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
    }
    get initializing() {
        return {
            init(args) {
                if (args === 'default') {
                    // do something when argument is 'default'
                    this.log('masuk kotlin....');
                }
            },
            readConfig() {
            },
        };
    }

    prompting() {
        /* const prompts = [
            {
                type: 'input',
                name: 'message',
                message: 'Please put something',
                default: 'bismillah'
            },
            {
                type: 'input',
                name: 'nama',
                message: 'Nama proyek apa bro?',
                default: 'proyeku'
            }
        ];

        const done = this.async();
        this.prompt(prompts).then((props) => {
            this.props = props;
            // To access props later use this.props.someOption;
            this.log(this.props.name);
            done();
        }); */
    }

    get writing() {
        return writeFiles(this.config);
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
