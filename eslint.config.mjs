import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSameLime: false,
          bracketSpacing: false,
          endOfLine: 'auto',
          optionalChaining: true,
          printWidth: 120,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'none',
          useTabs: false,
        },
        {
          usePrettierrc: false,
        },
      ],
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-only-tests/no-only-tests': 'error',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },
];

export default eslintConfig;
