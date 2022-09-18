// Merge langs provided from strapi (cs.json) with ones translated by machine (en.json)
// Copy the result to en.json in the directory above

// run with `node merge-translations-helper.js`
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const translator = require('@parvineyvazov/json-translator');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const en = require('../../../../.cache/admin/src/translations/en.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const cs = require('../../../../.cache/admin/src/translations/cs.json')

const run = async () => {
  console.log('------------------------------------------------')
  console.log('Translating files... this may take several minutes.')
  const translatedEnToCs = await translator.translateObject(en, translator.languages.English, translator.languages.Czech)

  const result ={}
  Object.keys(translatedEnToCs).forEach((key) => {
    if (cs[key]) {
      result[key] = cs[key]
    }
    else {
      result[key] = translatedEnToCs[key]
    }
  })

  console.log(result)
}

run()
