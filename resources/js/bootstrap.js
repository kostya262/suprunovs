window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {
}

require('slick-carousel');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

