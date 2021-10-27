import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import eslint from 'eslint'
import stdOpts from 'standard/options.js'

const stdVersion = stdOpts.version
const pkgUrl = new URL('./package.json', import.meta.url)
const pkg = JSON.parse(readFileSync(pkgUrl, 'utf-8'))
const configFile = fileURLToPath(new URL('eslintrc.json', import.meta.url))
const baseConfig = JSON.parse(readFileSync(stdOpts.eslintConfig.configFile, 'utf-8'))

export default ({
  ...stdOpts,
  bugs: pkg.bugs.url,
  cmd: 'ponstandard',
  eslint,
  eslintConfig: {
    baseConfig,
    configFile,
    useEslintrc: true
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (tweaked by PON)',
  version: `${pkg.version} (standard ${stdVersion})`
})
