const chalk = require('chalk');
const packagejs = require('../../package.json');
const semver = require('semver');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

module.exports = class extends BaseGenerator {
    get initializing() {
        return {
            init(args) {
                if (args === 'entity') {
                    this.composeWith(require.resolve('../entity'), {
                        // entityConfig: { coba: args },
                        arguments: [args]
                    });
                }
            },
            readConfig() {
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
                }
            },
            displayLogo() {
                this.log(`${chalk.bold.yellow('       ____  ___            __            ')}${chalk.bold.red('███████╗██╗  ██╗')}`);
                this.log(`${chalk.bold.yellow('      / / / / (_)___  _____/ /____  _____ ')}${chalk.bold.red('██╔════╝╚██╗██╔╝')}`);
                this.log(`${chalk.bold.yellow(' __  / / /_/ / / __ \\/ ___/ __/ _ \\/ ___/ ')}${chalk.bold.red('█████╗   ╚███╔╝ ')}`);
                this.log(`${chalk.bold.yellow('/ /_/ / __  / / /_/ (__  ) /_/  __/ /     ')}${chalk.bold.red('██╔══╝   ██╔██╗ ')}`);
                this.log(`${chalk.bold.yellow('\\____/_/ /_/_/ .___/____/\\__/\\___/_/      ')}${chalk.bold.red('██║     ██╔╝ ██╗')}`);
                this.log(`${chalk.bold.yellow('            /_/                           ')}${chalk.bold.red('╚═╝     ╚═╝  ╚═╝')}`);
                // Have Yeoman greet the user.
                this.log(`\nWelcome to the ${chalk.bold.yellow('JHipsterFX')} module generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
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
        const fxName = `${this.jhipsterAppConfig.baseName}FX`;
        const prompts = [
            {
                type: 'input',
                name: 'fxName',
                message: 'What is your JavaFX (desktop) application name?',
                default: fxName,
                store: true
            },
            {
                type: 'input',
                name: 'packageName',
                validate: input => (/^([a-z_]{1}[a-z0-9_]*(\.[a-z_]{1}[a-z0-9_]*)*)$/.test(input) ?
                    true : 'The package name you have provided is not a valid Java package name.'),
                message: 'What is your package name?',
                default: this.jhipsterAppConfig.packageName,
                store: true
            },
            {
                type: 'input',
                name: 'path',
                message: 'Where your apps path folder would be put?(relative/absolute)',
                default: `../`
            },
            {
                type: 'list',
                name: 'buildTool',
                message: 'Would you like to use Maven or Gradle for building the backend?',
                choices: [
                    {
                        value: 'maven',
                        name: 'Maven'
                    },
                    {
                        value: 'gradle',
                        name: 'Gradle'
                    }
                ],
                default: 'maven'
            }
        ];

        const done = this.async();
        this.prompt(prompts).then((props) => {
            this.props = props;
            // this.log(this.props.packageName);
            done();
        });
    }
    get configuring() {
        // if (useBlueprint) return;
        return {
            saveConfig() {
                this.config.set('baseName', this.props.fxName);
                this.config.set('packageName', this.props.packageName);
                this.config.set('path', this.props.path);
                this.config.set('packageFolder', `${this.props.path}${this.props.fxName}`);

                this.config.set('namaku', "bhangun");
                this.config.set('cobalg', "bhangun");
            }
        };
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

        this.message = this.props.message;
        this.baseName = this.props.fxName;
        this.packageName = this.props.packageName;
        this.path = this.props.path;
        this.packageFolder = `${this.props.path}${this.props.fxName}`;
        this.buildTool = this.props.buildTool;

        // use constants from generator-constants.js
        const javaDir = `${jhipsterConstants.SERVER_MAIN_SRC_DIR + this.path}/`;
        const resourceDir = jhipsterConstants.SERVER_MAIN_RES_DIR;
        // variable from questions
        // show all variables
        this.log('\n--- some config read from config ---');
        this.log(`baseName=${this.baseName}`);
        this.log(`packageName=${this.packageName}`);
        this.log(`path=${this.path}`);
        this.log(`packageFolder=${this.packageFolder}`);
        this.log(`buildTool=${this.buildTool}`);

        this.log('\n--- some const ---');
        this.log(`javaDir=${javaDir}`);
        this.log(`resourceDir=${resourceDir}`);

        this.composeWith(require.resolve('../kotlin'));

        try {
            this.registerModule('generator-jhipster-fx', 'entity', 'post', 'entity', 'Generate desktop application interface using JavaFX instead of JHipster as an Angular/web application');
        } catch (err) {
            this.log(`${chalk.red.bold('WARN!')} Could not register as a jhipster entity post creation hook...\n`);
        }
    }

    install() {}

    end() {}
};
