const path = require('path')
const {mix} = require('laravel-mix')
const glob = require('glob')

let sassFiles = glob.sync('resources/css/**/!(_)*.scss')
let jsFiles = glob.sync('resources/js/**/*.js')

sassFiles.forEach((item, key) => {
    let file = item.replace('resources/css/', '')
    let target = `public/statics/css/${file.replace(/\.scss$/, '.css')}`
    mix.sass(item, target).options({
        processCssUrls: false,
        postCss: [require('autoprefixer')()]
    })
})

jsFiles.forEach((item, key) => {
    let file = item.replace('resources/js/', '')
    let target = `public/statics/js/${file}`
    mix.js(item, target)
})

mix.copy('resources/images', 'public/statics/images')
mix.copy('resources/libs', 'public/statics/libs')
