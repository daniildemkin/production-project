// Конфигурация для sass
module.exports = {
  // Использовать dart-sass вместо node-sass
  implementation: require('sass'),
  // Отключить устаревший API
  sassOptions: {
    fiber: false,
    // Полностью избегать устаревшего API
    outputStyle: 'expanded',
  },
}
