require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('======================================'.cyan);
  console.log('=     T3RN T1RN Auto Bridge Bot      ='.cyan);
  console.log('======================================'.cyan);
  console.log();
}

module.exports = { displayHeader };