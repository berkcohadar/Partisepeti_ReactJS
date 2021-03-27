const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Partisepeti',
        titleDescription: 'Eğlenceye Dair Her şey',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
