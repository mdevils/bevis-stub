modules.define(
    'sidebar',
    [
        'inherit',
        'block'
    ],
    function (
        provide,
        inherit,
        Block
    ) {

    /**
     * @name Sidebar
     * @constructor
     */
    var Sidebar = inherit(Block, /** @lends Sidebar.prototype */ {
        __constructor: function () {
            var base = 500;
            var fact = faktorial(Math.round(Math.pow(base, 0.5)));
            debugger;
        },

        /**
         * @returns {Number}
         */
        getHeight: function () {
            return 200;
        },

        /**
         * @returns {String}
         */
        getTitle: function () {
            return 'Hello World';
        }
    }, /** @lends Sidebar */ {
        getBlockName: function () {
            return 'sidebar';
        }
    });

    provide(Sidebar);

    var bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };

    var f = [];

    /**
     *
     * @param {Number} n
     * @returns {Number}
     */
    function faktorial(n) {
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0) {
            return f[n];
        }
        return f[n] = faktorial(n-1) * n;
    }
});

