/* global module: true */
const WARN = 1, ERROR = 2;

module.exports = {
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    globalReturn: true,
    jsx: true
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
    node: true
  },
  plugins: [
    'react'
  ],
  rules: {
    // Possible Errors
    'comma-dangle': [ERROR, 'never'],
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': WARN,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty-character-class': ERROR,
    'no-empty': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-parens': ERROR,
    'no-extra-semi': ERROR,
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-obj-calls': ERROR,
    'no-sparse-arrays': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'use-isnan': ERROR,
    'valid-jsdoc': WARN,
    'valid-typeof': ERROR,

    // Best Practices
    'block-scoped-var': ERROR,
    'consistent-return': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    eqeqeq: ERROR,
    'guard-for-in': WARN,
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-empty-label': ERROR,
    'no-eq-null': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-implicit-coercion': WARN,
    'no-implied-eval': ERROR,
    'no-invalid-this': ERROR,
    'no-iterator': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-native-reassign': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-new': ERROR,
    'no-octal-escape': ERROR,
    'no-octal': ERROR,
    'no-redeclare': ERROR,
    'no-return-assign': ERROR,
    'no-script-url': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': WARN,
    'no-useless-call': ERROR,
    'no-useless-concat': ERROR,
    yoda: WARN,

    // Strict Mode
    strict: [ERROR, 'global'],

    // Variables
    'no-delete-var': ERROR,
    'no-label-var': WARN,
    'no-shadow-restricted-names': ERROR,
    'no-shadow': WARN,
    'no-undef-init': ERROR,
    'no-undef': ERROR,
    'no-undefined': ERROR,
    'no-unused-vars': ERROR,

    // Stylistic Issues
    'array-bracket-spacing': [ERROR, 'never'],
    'block-spacing': [ERROR, 'always'],
    'brace-style': [ERROR, '1tbs', {allowSingleLine: true}],
    camelcase: ERROR,
    'comma-spacing': [ERROR, {before: false, after: true}],
    'comma-style': [ERROR, 'last'],
    'computed-property-spacing': [ERROR, 'never'],
    indent: [ERROR, 2],
    'key-spacing': [ERROR, {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'lines-around-comment': [ERROR, {beforeBlockComment: true, allowBlockStart: true, allowObjectStart: true, allowArrayStart: true}],
    'new-cap': ERROR,
    'no-array-constructor': ERROR,
    'no-lonely-if': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-nested-ternary': ERROR,
    'no-new-object': ERROR,
    'no-spaced-func': ERROR,
    'no-trailing-spaces': ERROR,
    'no-unneeded-ternary': ERROR,
    'object-curly-spacing': [ERROR, 'never'],
    'operator-linebreak': [ERROR, 'after'],
    'quote-props': [ERROR, 'as-needed'],
    quotes: [ERROR, 'single'],
    'semi-spacing': ERROR,
    'space-after-keywords': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': ERROR,
    'space-before-keywords': ERROR,
    'space-in-parens': ERROR,
    'space-infix-ops': ERROR,
    'space-return-throw-case': ERROR,
    'space-unary-ops': ERROR,
    'spaced-comment': ERROR,

    // ECMAScript 2015
    'arrow-parens': [ERROR, 'as-needed'],
    'arrow-spacing': ERROR,
    'constructor-super': ERROR,
    'generator-star-spacing': ERROR,
    'no-arrow-condition': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-this-before-super': ERROR,
    'no-var': ERROR,
    'object-shorthand': ERROR,
    'prefer-arrow-callback': WARN,
    'prefer-const': WARN,
    'prefer-reflect': WARN,
    'prefer-spread': WARN,
    'prefer-template': WARN
  }
}