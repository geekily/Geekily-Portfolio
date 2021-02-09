let java =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:95,
    },
    enableHover:true,
    direction: "cw"
}
let oracle =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:93,
    },
    enableHover:true,
    direction: "cw"
}
let javascript =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:90,
    },
    enableHover:true,
    direction: "cw"
}
let jquery =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:85,
    },
    enableHover:true,
    direction: "cw"
}
let ajax =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:83,
    },
    enableHover:true,
    direction: "cw"
}
let nodejs =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:75,
    },
    enableHover:true,
    direction: "cw"
}
let express =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:75,
    },
    enableHover:true,
    direction: "cw"
}
let html5 =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:70,
    },
    enableHover:true,
    direction: "cw"
}
let css3 =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:70,
    },
    enableHover:true,
    direction: "cw"
}
let mongodb =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:60,
    },
    enableHover:true,
    direction: "cw"
}
let mongoose =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:60,
    },
    enableHover:true,
    direction: "cw"
}
let english =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:90,
    },
    enableHover:true,
    direction: "cw"
}
let hancomHangul =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:90,
    },
    enableHover:true,
    direction: "cw"
}
let microsoftOfficeWord =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:80,
    },
    enableHover:true,
    direction: "cw"
}
let microsoftOfficeExcel =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '1s',
    easing: 'ease-in',
    data:{
        percent:75,
    },
    enableHover:true,
    direction: "cw"
}

var flag=false;
document.addEventListener('scroll', ()=> {
    var windowHeight=window.innerHeight/1.2;
    var htmlScrollTop=document.querySelector('html').scrollTop;

    if ( !flag && $('#java').offset().top-htmlScrollTop< windowHeight){
        
        flag=true;
        
        $('.circleProgress').addClass('circleProgress-active');
        $('.divNameOfCircleProgress').addClass('divNameOfCircleProgress-active');

        new PercentChart("java",java);
        new PercentChart("oracle",oracle);
        new PercentChart("javascript",javascript);
        new PercentChart("jquery",jquery);
        new PercentChart("ajax",ajax);
        new PercentChart("nodejs",nodejs);
        new PercentChart("express",express);
        new PercentChart("html5",html5);
        new PercentChart("css3",css3);
        new PercentChart("mongodb",mongodb);
        new PercentChart("mongoose",mongoose);
        new PercentChart("english",english);
        new PercentChart("hancomHangul",hancomHangul);
        new PercentChart("microsoftOfficeWord",microsoftOfficeWord);
        new PercentChart("microsoftOfficeExcel",microsoftOfficeExcel);
    }
});
