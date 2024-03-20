const web3_oracle_data_parser = require('web3-oracle-data-parser');
const web3_oracle_data_safe = require('web3-oracle-data-safe');
const ethereumjs_util = require('ethereumjs-util');
const ipfs_http_client = require('ipfs-http-client');
const dotenv = require('dotenv');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const ethers = require('ethers');
const mysql = require('mysql');
const ejs = require('ejs');
const eth_crypto = require('eth-crypto');
const chalk = require('chalk');
const solc = require('solc');
const sinon = require('sinon');

const myFunc = () => {
  console.log('This is a simple function.');
};
myFunc();

const crypto = require('crypto');
const key = crypto.randomBytes(16);
console.log('Random key:', key.toString('hex'));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log([1, 2, 3, 4].reduce(reducer));

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

const url = require('url');
const myURL = new URL('https://example.org/foo');
console.log(myURL.hostname);

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));

const args = process.argv.slice(2);
console.log(`Arguments: ${args.join(', ')}`);

const assert = require('assert');
assert.strictEqual(1 + 2, 3, '1 + 2 should be equal to 3');

// Convert an object to query string parameters
const params = { name: 'John', age: 30 };
const queryString = new URLSearchParams(params).toString();
console.log('Query string:', queryString);

const buffer = Buffer.from('Hello Buffer');
console.log(buffer.toString());