import standardEngine from 'standard-engine'
import * as opts from './options.js'

const Linter = standardEngine.linter

console.warn('This is no longer supported, please consider using `@pondevelopment/ponstandard` instead.')

export default new Linter(opts)
