const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
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

  validate(schema, options, 'techdown loader')

  return techdown(options)(source)
}

