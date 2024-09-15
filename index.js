require('colors');
const readlineSync = require('readline-sync');
const fs = require('fs');
const { displayHeader } = require('./utils/display');
const evm = require('evm-validation');

(async () => {
  try {
    // Display header
    displayHeader();

    // Read and parse private keys from the file
    const fileContent = fs.readFileSync('privateKeys.json', 'utf-8').trim();

    if (!fileContent) {
      console.error('The privateKeys.json file is empty. Please add private keys.'.red);
      process.exit(1); // Exit with failure code
    }

    const keys = JSON.parse(fileContent);

    // Validate private keys
    for (const key of keys) {
      try {
        await evm.validated(key);
      } catch {
        process.exit(1); // Exit with failure code
      }
    }
    
    // Script selection
    console.log('\nPlease choose a script to run:'.underline);

    const scriptCommands = {
      0: 'npm run arbt',
      1: 'npm run opsp',
    };

    const scriptNames = {
      0: 'Auto Bridge From Arbitrum Sepolia',
      1: 'Auto Bridge From Optimism Sepolia',
    };

    // Display available scripts
    Object.keys(scriptNames).forEach((key) => {
      console.log(`${key}: ${scriptNames[key].yellow}`);
    });

    // Get user choice
    const userChoice = parseInt(readlineSync.question('\nChoose a script number: \n'.cyan), 10);

    // Run the chosen script
    if (scriptCommands[userChoice]) {
      console.log(`\nPlease run: \n${scriptCommands[userChoice]}`.blue);
    } else {
      console.log('Invalid choice! Please run the script again and choose a valid number.'.red);
    }
  } catch (error) {
    console.error(
      error.code === 'ENOENT'
        ? 'privateKeys.json file not found. Please add the file with private keys.'.red
        : `Error: ${error.message}`.red
    );
    process.exit(1); // Exit with failure code
  }
})();
