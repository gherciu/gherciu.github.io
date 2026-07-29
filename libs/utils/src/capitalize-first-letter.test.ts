import { capitalizeFirstLetter } from './capitalize-first-letter'

describe('capitalizeFirstLetter', () => {
  it('uppercases the first character', () => {
    expect(capitalizeFirstLetter('devops')).toBe('Devops')
  })

  it('leaves an already-capitalized string untouched', () => {
    expect(capitalizeFirstLetter('Devops')).toBe('Devops')
  })

  it('returns an empty string unchanged', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })
})
