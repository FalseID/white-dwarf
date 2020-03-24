module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'semi': 'off',
        'indent': [2, 4, { 'FunctionExpression': { 'body': 1, 'parameters': 2 }, 'SwitchCase': 1}],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/member-delimiter-style': ['error',
            {
                'multiline': {
                    'delimiter': 'none',
                    'requireLast': false
                },
                'singleline': {
                    'delimiter': 'comma',
                    'requireLast': false
                },
            }]
    },
    ignorePatterns: ['node_modules/'],
    overrides: [
        {
            files: ['*.ts']
        }
    ]
}
