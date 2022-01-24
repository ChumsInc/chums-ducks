"use strict";
/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegex = void 0;
const getRegex = (str, flags = 'i') => {
    const split = str.split('').map(char => {
        //escape special chars
        if ('*' === char ||
            '.' === char ||
            '+' === char ||
            '(' === char ||
            ')' === char ||
            '\\' === char ||
            '?' === char ||
            '\'' === char ||
            '$' === char ||
            '^' === char ||
            '/' === char ||
            '[' === char ||
            ']' === char)
            char = '\\' + char;
        return '(' + char + ')';
    });
    const string = '^(.*?)' + split.join('(.*?)') + '(.*?)(.*)$';
    return new RegExp(string, flags);
};
exports.getRegex = getRegex;
//# sourceMappingURL=regex.js.map