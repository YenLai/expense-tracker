function categorySeeder() {
  const categoryList = [
    {
      name: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      name: '交通出行 ',
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
      name: '其他 ',
      icon: '<i class="fas fa-pen"></i>'
    }
  ]
  return categoryList[Math.floor(Math.random() * 5)]
}

module.exports = categorySeeder