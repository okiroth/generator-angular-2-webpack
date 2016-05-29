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
      default: 'my-component'
    }]).then(function (answers) {
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {
    var path = 'src/app/components/' + this.answers.name + '/';
    var upName = this.answers.name.split('-').map(capitalizeFirstLetter).join('');

    this.fs.copyTpl(
      this.templatePath('name.component.html'),
      this.destinationPath(path + this.answers.name + '.component.html'), {
        name: this.answers.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('name.component.ts'),
      this.destinationPath(path + this.answers.name + '.component.ts'), {
        name: this.answers.name,
        upName: upName
      }
    );

    this.fs.copyTpl(
      this.templatePath('name.component.css'),
      this.destinationPath(path + this.answers.name + '.component.css'), {
        name: this.answers.name
      }
    );
  }

});
