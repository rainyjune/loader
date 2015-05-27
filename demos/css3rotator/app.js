require("zepto.min.js", function(){
  require(["zepto.touch.js", "slider.js"], initApp);
});
function initApp(){
  $("#testDiv").css3Rotator({
    container: '.someclass',
    transitionDuration: "0.3s",
    autoPlay: false,
    dataSource: [
      {
        title:'乐进万家A计划走进蒙牛总部', 
        img: 'images/abf6afa0bb6de81d7abb16923b3_p1_mk1.jpg',
        link: 'http://m.leju.com/touch/news/c/bj/5984223020636746567.html'
      },
      {
        title: '不愁房租涨首付两万五买房靠谱',
        img: 'images/d41c8d152cc8554132424b96cd5_p1_mk1.jpg',
        link: 'http://m.leju.com/touch/news/c/bj/5986396554918146726.html'
      },
      {
        title: '微博家装节:大品牌真实惠',
        img: 'images/5d117d95c4085399f4f1cef8131_p1_mk1.jpg',
        link: 'http://weibo.com/p/2307290002_2020'
      },
      {
        title: '“真言2015”之东易日盛陈辉',
        img: 'images/376c82c0ab4465bdf7d824f1644_p1_mk1.jpg',
        link: 'http://jiaju.sina.cn/news/20150325/409062.shtml?utm_source=sjleju'
      },
      {
        title: '',
        img: 'images/f550be82388c12img.jpg',
        link: 'http://sina.allyes.com/main/c?db=sina&bid=746926,815956,821206&cid=0,0,0&sid=826704&advid=26925&camid=125517&show=ignore&url=http%3A%2F%2Fadm.leju.sina.com.cn%2Fadd_click%2F%3Fsid%3Dcdm_550be84418b24%26url%3Dhttp%253A%252F%252Fbj.house.sina.com.cn%252Fzhuanti%252Fydhkqcmly_g%252Findex.shtml%253Fwt_campaign%253DM_550BE82EB1C5D%2526wt_source%253DPDPS_537023620E5C23'
      }
      
    ]
  });
};