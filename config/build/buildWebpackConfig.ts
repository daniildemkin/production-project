import path from 'path'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions, Configuration } from './types/config'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev, port } = options
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: path.resolve(__dirname, '..', '..', paths.build),
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: mode === 'development' && port === 3000 ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: -20,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      },
    },
  }
}
