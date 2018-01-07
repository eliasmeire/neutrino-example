const reactConfig = {
  use: [
    [
      '@neutrinojs/standardjs',
      {
        eslint: {
          rules: {
            'jsx-quotes': ['error', 'prefer-double'],
            'space-before-function-paren': ['error', 'never']
          }
        }
      }
    ],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Test React App'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
}

const nodeConfig = {
  options: { source: 'server', output: 'server-build' },
  use: ['@neutrinojs/node']
}

module.exports = {
  use: [
    [
      '@neutrinojs/fork',
      {
        configs: {
          react: reactConfig,
          node: nodeConfig
        }
      }
    ]
  ]
}
