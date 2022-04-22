module.exports = process.stdin.on('data', (data) => {
  if (data === 'pwd') {
    const cmd = data.toString().trim(); // remove the newline

    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  }
});
