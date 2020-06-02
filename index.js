const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')
const techdown = require('techdown')

const schema = {
  type: 'object',
  properties: {
    tex_prelude: {
      type: 'string'
    },
    nomnoml_prelude: {
      type: 'string'
    }
  }
}

module.exports = function(source) {
  const options = getOptions(this)

  validateOptions(schema, options, 'techdown loader')

  return techdown(options)(source)
}

