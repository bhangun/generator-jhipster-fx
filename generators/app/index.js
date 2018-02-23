const chalk = require('chalk');
const packagejs = require('../../package.json');
const semver = require('semver');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            init(args) {
                if (args === 'default') {
                    // do something when argument is 'default'
                    this.log('Ini default....');
                }
            },
            readConfig() {
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
                }
            },
            displayLogo() {
                // it's here to show that you can use functions from generator-jhipster
                // this function is in: generator-jhipster/generators/generator-base.js
                // this.printJHipsterLogo();

                this.log(`${chalk.bold.yellow('       ____  ___            __            ')}${chalk.bold.red('███████╗██╗  ██╗')}`);
                this.log(`${chalk.bold.yellow('      / / / / (_)___  _____/ /____  _____ ')}${chalk.bold.red('██╔════╝╚██╗██╔╝')}`);
                this.log(`${chalk.bold.yellow(' __  / / /_/ / / __ \\/ ___/ __/ _ \\/ ___/ ')}${chalk.bold.red('█████╗   ╚███╔╝ ')}`);
                this.log(`${chalk.bold.yellow('/ /_/ / __  / / /_/ (__  ) /_/  __/ /     ')}${chalk.bold.red('██╔══╝   ██╔██╗ ')}`);
                this.log(`${chalk.bold.yellow('\\____/_/ /_/_/ .___/____/\\__/\\___/_/      ')}${chalk.bold.red('██║     ██╔╝ ██╗')}`);
                this.log(`${chalk.bold.yellow('            /_/                           ')}${chalk.bold.red('╚═╝     ╚═╝  ╚═╝')}`);
                // Have Yeoman greet the user.
                this.log(`\nWelcome to the ${chalk.bold.yellow('JHipster FX module')} generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
            },
            checkJhipster() {
                const currentJhipsterVersion = this.jhipsterAppConfig.jhipsterVersion;
                const minimumJhipsterVersion = packagejs.dependencies['generator-jhipster'];
                if (!semver.satisfies(currentJhipsterVersion, minimumJhipsterVersion)) {
                    this.warning(`\nYour generated project used an old JHipster version (${currentJhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
                }
            }
        };
    }

    prompting() {
        const prompts = [
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
        });
    }

    writing() {
        // function to use directly template
        this.template = function (source, destination) {
            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(destination),
                this
            );
        };

        // read config from .yo-rc.json
        this.baseName = this.jhipsterAppConfig.baseName;
        this.packageName = this.jhipsterAppConfig.packageName;
        this.packageFolder = this.jhipsterAppConfig.packageFolder;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.buildTool = this.jhipsterAppConfig.buildTool;

        // use function in generator-base.js from generator-jhipster
        this.angularAppName = this.getAngularAppName();

        // use constants from generator-constants.js
        const javaDir = `${jhipsterConstants.SERVER_MAIN_SRC_DIR + this.packageFolder}/`;
        const resourceDir = jhipsterConstants.SERVER_MAIN_RES_DIR;
        const webappDir = jhipsterConstants.CLIENT_MAIN_SRC_DIR;

        // variable from questions
        this.message = this.props.message;

        // show all variables
        this.log('\n--- some config read from config ---');
        this.log(`baseName=${this.baseName}`);
        this.log(`packageName=${this.packageName}`);
        this.log(`clientFramework=${this.clientFramework}`);
        this.log(`clientPackageManager=${this.clientPackageManager}`);
        this.log(`buildTool=${this.buildTool}`);

        this.log('\n--- some function ---');
        this.log(`angularAppName=${this.angularAppName}`);

        this.log('\n--- some const ---');
        this.log(`javaDir=${javaDir}`);
        this.log(`resourceDir=${resourceDir}`);
        this.log(`webappDir=${webappDir}`);

        this.log('\n--- variables from questions ---');
        this.log(`\nmessage=${this.message}`);
        this.log(`\nmessage=${this.message}`);
        this.log(`\nmessage=${this.name}`);
        this.log('------\n');


        if (this.clientFramework === 'angular1') {
            this.template('dummy.txt', 'dummy-angular1.txt');
        }
        if (this.clientFramework === 'angularX' || this.clientFramework === 'angular2') {
            this.template('dummy.txt', 'dummy-angularX.txt');
        }
        if (this.buildTool === 'maven') {
            this.template('dummy.txt', 'dummy-maven.txt');
        }
        if (this.buildTool === 'gradle') {
            this.template('dummy.txt', 'dummy-gradle.txt');
        }
        try {
            this.registerModule('generator-jhipster-generator-jhipster-fx', 'entity', 'post', 'entity', 'Generate desktop application interface using JavaFX instead of JHipster as an Angular/web application');
        } catch (err) {
            this.log(`${chalk.red.bold('WARN!')} Could not register as a jhipster entity post creation hook...\n`);
        }
    }

    install() {
        let logMsg =
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
    }

    end() {
        this.log('End of generator-jhipster-fx generator');
    }
};
