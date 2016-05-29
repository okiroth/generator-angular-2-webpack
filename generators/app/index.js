'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'my-awesome-app'
    }]).then(function (answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.answers.name), {
        name: this.answers.name
      }
    );
  }
});
