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
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/bize-ulasin': { page: '/bize-ulasin' },
      }
    },
  }
