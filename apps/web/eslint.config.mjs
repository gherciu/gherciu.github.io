import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import base from '@portfolio/eslint-config'

export default [
  ...base,
  ...nextCoreWebVitals,
  {
    // Next.js injects React automatically and the App Router uses default exports everywhere.
    rules: {
      'import/no-anonymous-default-export': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]
