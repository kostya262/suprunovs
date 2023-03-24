const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sourceMaps(true, 'source-map');
;
mix.js('resources/js/main.js', 'public/js')
    .sourceMaps(true, 'source-map');
;

mix.sass('resources/scss/app.scss', 'public/build/css/styles.css').options({
    processCssUrls: false
}).sourceMaps(true, 'source-map');
