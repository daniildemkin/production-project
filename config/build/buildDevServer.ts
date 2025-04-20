import { Configuration as DevServerConfig } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevServerConfig {
  const { port } = options

  return {
    port: port,
    open: true,
    hot: true,
    historyApiFallback: true,
  }
}
