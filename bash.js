'use strict'
const commands = require('./commands')
const userCommand = 'pwd';
// commands[userCommand]();
// console.log(Object.keys(process))

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); // remove the newline
    // console.log('cmd is: ',  cmd)
//   process.stdout.write('You typed: ' + cmd);
  if(cmd[0] === 'pwd'){
      commands.pwd()
  }
  if(cmd[0] === 'date'){
    let today = new Date();
    process.stdout.write(today.toString());
  }
  if(cmd[0] === 'ls'){
      commands.ls();
  }
  if(cmd[0] === 'echo'){
      let line = cmd.slice(1).join(' ')
      commands.echo(line);
  }
  if(cmd[0] === 'cat'){
      commands.cat(cmd[1])
    //   cmd.slice(1).forEach(elem => commands.cat(elem));
    //   process.stdout.write('\nprompt > ');
  }
  
  if(cmd[0] === 'head'){
    commands.head(cmd[1]);
  }
  
  if(cmd[0] === 'tail'){
      commands.tail(cmd[1]);
  }

  if(cmd[0] === 'curl'){
      commands.curl(cmd[1]);
  }
  
});


