/**
 * Returns a regular expression that is used by the
 * subsequence search engine.
 * @param {String} str String to search for
 * @param {String} flags RegExp flags for returned value
 * @return {RegExp}     Regular expression based off input search string
 * @see https://git.io/v7LGt
 */
export var getRegex = function (str, flags) {
    if (flags === void 0) { flags = 'i'; }
    var split = str.split('').map(function (char) {
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
    var string = '^(.*?)' + split.join('(.*?)') + '(.*?)(.*)$';
    return new RegExp(string, flags);
};
//# sourceMappingURL=regex.js.map