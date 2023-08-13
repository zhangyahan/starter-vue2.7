module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-standard-scss',
    'stylelint-config-html',
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {},
  overrides: [
    {
      files: ['*.vue', '**/*.vue']
    },
    {
      files: ['*.less', '**/*.less']
    },
    {
      files: ['*.html', '**/*.html']
    }
  ]
}
