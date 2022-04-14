module.exports = {
    plugins: [
        require('postcss-preset-env', {
            browsers: [">2%", "not dead"]
        }),
        require('cssnano')
    ],
};