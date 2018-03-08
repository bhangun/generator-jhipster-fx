const chalk = require('chalk');
// const packagejs = require('../../package.json');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

let useBlueprint;

module.exports = class extends BaseGenerator {
    constructor(args, opts) {
        super(args, opts);

        // This makes `name` a required argument.
        this.argument('name', {
            type: String,
            required: true,
            description: 'Entity name'
        });

        this.context = {};
        this.setupEntityOptions(this, this, this.context);
        const blueprint = this.config.get('blueprint');
        useBlueprint = this.composeBlueprint(blueprint, 'entity');
    }

    get initializing() {
        // if (useBlueprint) return;
        return { /*
            getConfig() {
                const context = this.context;
                context.useConfigurationFile = false;
                this.env.options.appPath = this.config.get('appPath') || constants.CLIENT_MAIN_SRC_DIR;
                context.options = this.options;
            },

            validateEntityName() {
                const entityName = this.context.name;
                if (!(/^([a-zA-Z0-9_]*)$/.test(entityName))) {
                    this.error(chalk.red('The entity name cannot contain special characters'));
                } else if ((/^[0-9].*$/.test(entityName))) {
                    this.error(chalk.red('The entity name cannot start with a number'));
                } else if (entityName === '') {
                    this.error(chalk.red('The entity name cannot be empty'));
                } else if (entityName.indexOf('Detail', entityName.length - 'Detail'.length) !== -1) {
                    this.error(chalk.red('The entity name cannot end with \'Detail\''));
                } else if (!this.context.skipServer && jhiCore.isReservedClassName(entityName)) {
                    this.error(chalk.red('The entity name cannot contain a Java or JHipster reserved keyword'));
                }
            },

            setupconsts() {
                const context = this.context;
                const entityName = context.name;
                // Specific Entity sub-generator constants
                if (!context.useConfigurationFile) {
                    // no file present, new entity creation
                    this.log(`\nThe entity ${entityName} is being created.\n`);
                    context.fields = [];
                    context.haveFieldWithJavadoc = false;
                    context.relationships = [];
                    context.pagination = 'no';
                    context.validation = false;
                    context.dto = 'no';
                    context.service = 'no';
                    context.jpaMetamodelFiltering = false;
                } else {
                    // existing entity reading values from file
                    this.log(`\nThe entity ${entityName} is being updated.\n`);
                    this.loadEntityJson();
                }
            },

            validateTableName() {
                const context = this.context;
                const prodDatabaseType = context.prodDatabaseType;
                const entityTableName = context.entityTableName;
                const jhiTablePrefix = context.jhiTablePrefix;
                const instructions = `You can specify a different table name in your JDL file or change it in .jhipster/${context.name}.json file and then run again 'jhipster entity ${context.name}.'`;

                if (!(/^([a-zA-Z0-9_]*)$/.test(entityTableName))) {
                    this.error(chalk.red(`The table name cannot contain special characters.\n${instructions}`));
                } else if (entityTableName === '') {
                    this.error(chalk.red('The table name cannot be empty'));
                } else if (jhiCore.isReservedTableName(entityTableName, prodDatabaseType)) {
                    this.warning(chalk.red(`The table name cannot contain the '${entityTableName.toUpperCase()}' reserved keyword, so it will be prefixed with '${jhiTablePrefix}_'.\n${instructions}`));
                    context.entityTableName = `${jhiTablePrefix}_${entityTableName}`;
                } else if (prodDatabaseType === 'oracle' && entityTableName.length > 26) {
                    this.error(chalk.red(`The table name is too long for Oracle, try a shorter name.\n${instructions}`));
                } else if (prodDatabaseType === 'oracle' && entityTableName.length > 14) {
                    this.warning(`The table name is long for Oracle, long table names can cause issues when used to create constraint names and join table names.\n${instructions}`);
                }
            },
*/
            readConfig() {
                this.log(this.argument.entity);
                this.entityConfig = this.options.entityConfig;
                this.jhipsterAppConfig = this.getJhipsterAppConfig();

                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
                }
                this.log(this.jhipsterAppConfig.baseName);
                this.log(this.entityConfig.coba);
            },

            displayLogo() {
                // this.log(chalk.white(`Running ${chalk.bold('JHipster rain')} Generator! ${chalk.yellow(`v${packagejs.version}\n`)}`));
            },

            validate() {
                // this shouldn't be run directly
                if (!this.entityConfig) {
                    // this.env.error(`${chalk.red.bold('ERROR!')} This sub generator should be used only from JHipster and cannot be run directly...\n`);
                }
            }
        };
    }

    prompting() {
        // don't prompt if data are imported from a file
        if (this.entityConfig.useConfigurationFile === true && this.entityConfig.data && typeof this.entityConfig.data.yourOptionKey !== 'undefined') {
            this.yourOptionKey = this.entityConfig.data.yourOptionKey;
            return;
        }
        const done = this.async();
        const prompts = [
            {
                type: 'confirm',
                name: 'enableOption',
                message: 'Some option here?',
                default: false
            }
        ];

        this.prompt(prompts).then((props) => {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        });
    }

    get writing() {
        return {
            updateFiles() {
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

                const entityName = this.entityConfig.entityClass;

                // show all variables
                this.log('\n--- some const ---');
                this.log(`javaDir=${javaDir}`);
                this.log(`resourceDir=${resourceDir}`);
                this.log(`webappDir=${webappDir}`);

                this.log('\n--- entityName ---');
                this.log(`\nentityName=${entityName}`);

                this.log('------\n');

                // do your stuff here
            },

            writeFiles() {
                // function to use directly template
                this.template = function (source, destination) {
                    this.fs.copyTpl(
                        this.templatePath(source),
                        this.destinationPath(destination),
                        this
                    );
                };

                this.template('dummy.txt', 'dummy.txt', this, {});
            },

            updateConfig() {
                this.updateEntityConfig(this.entityConfig.filename, 'yourOptionKey', this.yourOptionKey);
            }
        };
    }

    end() {
        if (this.yourOptionKey) {
            this.log(`\n${chalk.bold.green('rain enabled')}`);
        }
    }
};
