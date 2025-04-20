import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as DevServerConfig } from 'webpack-dev-server'

export type BuildMode = 'development' | 'production'

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}

export interface Configuration extends WebpackConfig {
  devServer?: DevServerConfig
}
