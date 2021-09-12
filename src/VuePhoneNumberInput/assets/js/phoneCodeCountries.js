const allCountries = [
  [
    'Belgique',
    'be',
    '32'
  ],
  [
    'France',
    'fr',
    '33'
  ],
  [
    'Guyane française',
    'gf',
    '594'
  ],
  [
    'Polynésie française',
    'pf',
    '689'
  ],
  [
    'Italie',
    'it',
    '39',
    0
  ],
  [
    'Portugal',
    'pt',
    '351'
  ],
  [
    'Espagne',
    'es',
    '34'
  ],
]

export const countriesIso = allCountries.map(country => country[1].toUpperCase())

export const countries = allCountries.map(country => ({
  name: country[0],
  iso2: country[1].toUpperCase(),
  dialCode: country[2],
  priority: country[3] || 0,
  areaCodes: country[4] || null
}))
