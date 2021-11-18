module.exports = [
  {
    id: 'jupyterlab_compiler_magics',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension jupyterlab_compiler_magics is activated!'
      );
      console.log(app.commands);

      // Try to modify some things
      IPython.CodeCell.options_default.highlight_modes['magic_text/x-c++src'] = {'reg':[/^%%CPP/]} ;
      IPython.CodeCell.options_default.highlight_modes['magic_text/x-csrc'] = {'reg':[/^%%C/]} ;
      IPython.CodeCell.options_default.highlight_modes['magic_text/x-fortransrc'] = {'reg':[/^%%FORTRAN/]} ;
      IPython.notebook.events.one('kernel_ready.Kernel', function(){
      IPython.notebook.get_cells().map(function(cell){
        if (cell.cell_type == 'code'){ cell.auto_highlight(); } }) ;
      });
    }
  }
];
