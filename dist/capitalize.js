define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @desc Capitolize the first character of a string
     * @param str
     */
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    exports.capitalize = capitalize;
});
