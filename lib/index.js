module.exports = [
  {
    id: 'jupyterlab_compiler_magics',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension jupyterlab_compiler_magics is activated!'
      );
      console.log(app.commands);
    }
  }
];
