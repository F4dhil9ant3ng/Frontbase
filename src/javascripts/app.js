function updateViewportDimensions() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const x = w.innerWidth || e.clientWidth || g.clientWidth;
    const y = w.innerHeight || e.clientHeight || g.clientHeight;

    return { width: x, height: y };
}
const viewport = updateViewportDimensions();

const $ = require('jquery');
const slick = require('slick-carousel');

require('svgxuse')();

$(document).ready(() => {
});
