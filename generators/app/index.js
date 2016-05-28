'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  // Configurations will be loaded here.

  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'my-awesome-app'
    }, {
      type: 'confirm',
      name: 'TypeScript',
      message: 'Use TypeScript?',
      default: true
    }]).then(function (answers) {
      this.answers = answers;
      this.log('app name', answers.name);
      this.log('cool feature', answers.TypeScript);
    }.bind(this));
  },

  // Writing Logic here
  writing: function () {
    console.log('writing!');

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.answers.name), {
        name: this.answers.name
      }
    );
  }
});
