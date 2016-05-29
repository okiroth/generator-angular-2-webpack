'use strict';

var yeoman = require('yeoman-generator');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = yeoman.Base.extend({

  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'The component name',
      default: 'my-service'
    }]).then(function (answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {
    var path = 'src/app/services/';
    var upName = this.answers.name.split('-').map(capitalizeFirstLetter).join('');

    this.fs.copyTpl(
      this.templatePath('name.service.ts'),
      this.destinationPath(path + this.answers.name + '.service.ts'), {
        name: this.answers.name,
        upName: upName
      }
    );
  }
});
