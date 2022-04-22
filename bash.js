//Output a prompt

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types ina line

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline

  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
});

const pwd = require('./pwd');

const ls = require('./ls');
