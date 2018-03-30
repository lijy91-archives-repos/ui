'use strict';

var chalk = require('chalk');
var { spawn } = require('child_process');
var pathFn = require('path');

const deploy = function(args) {
  if (!args.host || !args.user || !args.root) {
    var help = '';

    help += 'You should configure deployment settings in _config.yml first!\n\n';
    help += 'Example:\n';
    help += '  deploy:\n';
    help += '    type: rsync\n';
    help += '    host: <host>\n';
    help += '    user: <user>\n';
    help += '    root: <root>\n';
    help += '    port: [port] # Default is 22\n';
    help += '    delete: [true|false] # Default is true\n';
    help += '    args: <rsync args>\n';
    help += '    verbose: [true|false] # Default is true\n';
    help += '    ignore_errors: [true|false] # Default is false\n\n';
    help += 'For more help, you can check the docs: ' + chalk.underline('http://hexo.io/docs/deployment.html');

    console.log(help);
    return;
  }

  if (!args.hasOwnProperty('delete')) args.delete = true;
  if (!args.hasOwnProperty('verbose')) args.verbose = true;
  if (!args.hasOwnProperty('ignore_errors')) args.ignore_errors = false;

  var public_dir = __dirname.replace('scripts', 'build/');
  var params = [
    '-az',
    process.platform === 'win32' ? pathFn.basename(public_dir) + '/' : public_dir,
    args.user + '@' + args.host + ':' + args.root
  ];

  if (args.port && args.port > 0 && args.port < 65536) {
    params.splice(params.length - 2, 0, '-e');
    params.splice(params.length - 2, 0, 'ssh -p ' + args.port);
  }

  if (args.verbose) params.unshift('-v');
  if (args.ignore_errors) params.unshift('--ignore-errors');
  if (args.delete) params.unshift('--delete');
  if (args.args) params.unshift(args.args);

  return spawn('rsync', params, {verbose: true});
};

var rsync = deploy({
  host: 'uiexplorer.blankapp.org',
  user: 'root',
  root: '/root/sites/ui-uiexplorer/html',
});
rsync.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

rsync.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

rsync.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
