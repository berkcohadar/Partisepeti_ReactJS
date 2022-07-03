const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Partisepeti',
        titleDescription: 'Eğlenceye Dair Her şey',
    },
    future: { webpack5: false }
};

module.exports = withPlugins([withImages(), nextSettings]);
module.exports = {
  trailingSlash: true,
}
