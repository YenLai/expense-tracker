function getCategory(_id) {

  const categoryList = [
    {
      name: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      name: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      name: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      name: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>'
    },
    {
      name: '其他',
      icon: '<i class="fas fa-pen"></i>'
    }
  ]
  // if input category name , find the index of category name and output an Object of it.
  return categoryList[_id] || categoryList[categoryList.findIndex(category => category.name === _id)]

}

module.exports = getCategory