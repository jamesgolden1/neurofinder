'use strict';
var _ = require('lodash');
var d3 = require('d3');
var colorbrewer = require('colorbrewer');

module.exports = {

    linspace: function(a, b, n) {
        var every = (b-a)/(n-1)
        var ranged = _.range(a, b, every);
        return ranged.length == n ? ranged : ranged.concat(b);
    },

    sortByKey: function(list, key) {
        return _.sortBy(list, key);
    },

    getRandomArbitrary: function(min, max) {
        var val = Math.random() * (max - min) + min;
        return val;
    },

    getColorFromScore: function(score) {

        var domain = this.linspace(0, 1, 9)
        var color = d3.scale.linear()
            .domain(domain)
            .range(colorbrewer.GnBu[9]);

        return color(score);

    },

    preciseRound: function(num, decimals) {
        var t=Math.pow(10, decimals);   
        return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    },

    makeSafeForCSS: function (name) {
        return name.replace(/[^a-z0-9]/g, function(s) {
            var c = s.charCodeAt(0);
            if (c == 32) return '-';
            if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
            return '__' + ('000' + c.toString(16)).slice(-4);
        });
    }

};
