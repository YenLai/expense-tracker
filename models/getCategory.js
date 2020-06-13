function getCategory(index) {

  const { categoryList } = require('./categoryList')
  // input => (index : number || index : name) ; output => category object
  if (!index && index !== 0)
    return { name: null }
  return categoryList[index] || categoryList[categoryList.findIndex(category => category.name === index)]

}
module.exports = getCategory

