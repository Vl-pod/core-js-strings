/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 */
function getStringLength(value) {
  return value ? value.length : 0;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 */
function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 */
function removeLeadingWhitespaces(value) {
  return value ? value.trimStart() : '';
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 */
function removeTrailingWhitespaces(value) {
  return value ? value.trimEnd() : '';
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 */
function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 */
function removeFirstOccurrences(str, value) {
  return str ? str.replace(value, '') : '';
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 */
function removeLastOccurrences(str, value) {
  return str ? str.replace(new RegExp(`${value}(?!.*${value})`), '') : '';
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 */
function sumOfCodes(str) {
  return str ? [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0) : 0;
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 */
function startsWith(str, substr) {
  return str ? str.startsWith(substr) : false;
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str ends with substr, false otherwise.
 */
function endsWith(str, substr) {
  return str ? str.endsWith(substr) : false;
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 */
function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 */
function reverseString(str) {
  return str ? str.split('').reverse().join('') : '';
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 */
function orderAlphabetically(str) {
  return str ? str.split('').sort().join('') : '';
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 */
function containsSubstring(str, substring) {
  return str ? str.includes(substring) : false;
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 */
function countVowels(str) {
  return str
    ? [...str].filter((char) => 'aeiouyAEIOUY'.includes(char)).length
    : 0;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const sanitized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return sanitized === sanitized.split('').reverse().join('');
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 */
function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 */
function reverseWords(str) {
  return str
    ? str
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ')
    : '';
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 */
function invertCase(str) {
  return str
    ? [...str]
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join('')
    : '';
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 */
function extractNameFromTemplate(value) {
  return value ? value.replace('Hello, ', '').replace('!', '') : '';
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 */
function unbracketTag(str) {
  return str ? str.slice(1, -1) : '';
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 */
function extractEmails(str) {
  return str ? str.split(';') : [];
}

/**
 * Encode specified string with ROT13 cipher
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 */
function encodeToRot13(str) {
  return str
    ? str.replace(/[a-zA-Z]/g, (char) =>
        String.fromCharCode(
          (char <= 'Z' ? 90 : 122) >= char.charCodeAt(0) + 13
            ? char.charCodeAt(0) + 13
            : char.charCodeAt(0) - 13
        )
      )
    : '';
}
/**
 * Returns playid card id.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 */
function getCardId(value) {
  const deck = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return deck.indexOf(value);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
