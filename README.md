# T3rn Airdrop bot

A bot designed to automate transactions and bridge assets on the t3rn network, making the process seamless and efficient. Now supports both Optimism Sepolia and Arbitrum Sepolia testnets.

## Features

- Automates asset bridging and swapping on the t3rn network.
- Supports multiple wallets through a JSON file containing private keys.
- Robust error handling with retry mechanisms to ensure all transactions are completed.
- User-friendly and easy to set up.
- Supports bridging from **Optimism Sepolia** and **Arbitrum Sepolia**.

## Requirements

- Node.js (v14 or later)
- NPM (v6 or later)
- Private keys for the wallets you intend to use (stored in `privateKeys.json`).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/frankrichardhall/T3rn-Airdrop-bot.git
   cd T3rn-Airdrop-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create `privateKeys.json`**:
   Create a file named `privateKeys.json` in the root directory with the following format:

   ```json
   [
     "your_private_key_1",
     "your_private_key_2"
   ]
   ```

4. **Run the Bot**:

   - To check the available menu options:

     ```bash
     npm start
     ```

## Usage

- Use `npm start` to check the menu options available.
- Choose the appropriate command based on the network you want to use.
- The bot will automatically execute the transactions, handling any errors and retrying as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
