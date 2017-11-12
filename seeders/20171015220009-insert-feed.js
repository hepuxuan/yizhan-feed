module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('feeds', [{
    id: 1,
    thumbnail: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/d61fa9c81e58b57ad30191e442554c8f.jpg',
    title: '高三毕业班服 高中毕业班服图案标语设计',
    content: '<p>高三是学生生涯中很特殊也很重要的一个阶段，对于同学们来说既是一种解脱也是一时一个新的未来，一方面同学们要面临升学的压力，一方面高中毕业之后可能大部分同学都要去往不同的城市进入不同的大学。很快就要告别紧张的学习气氛，但同时一起并肩作战共同备战高考的同学也很快就要分开。所以很多高三毕业的同学都会定制班服来纪念自己的高中生涯的最后的时刻。</p>',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    thumbnail: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/1653076db1d3de362f29d6063696c985.jpg',
    title: '毕业班服图案设计 那些知名大学院校的文化衫都长啥样?',
    content: '<p>校园文化往往成为很多莘莘学子在选择学校时的一个重要参考因素。学生的入学仪式和毕业仪式是每位学生成长的重要时刻，很多知名高等院校也会在这两个重要又特殊的时刻准备很多有意义或有文化内涵的欢迎与欢送的仪式和活动。其中就包括为学生定制毕业班服或是毕业文化衫。定制班服和校园文化衫都是对校园文化的一种很好的传承方式，很多学校每年都会为同学们定制T恤文化衫或是举办毕业班服图案设计大赛!因此也荟萃了一大批优秀又有创意的毕业班服图案。形成了丰富多彩的校园文化衫文化。说到这，大家是不是都开始好奇那么那些知名学校的文化衫都长啥样了呢?</p>',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('feeds', null, {}),
};
