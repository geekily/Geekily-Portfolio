$(function(){
            
    //initializing value
    maxInnerHeight=screen.availHeight-(window.outerHeight-window.innerHeight);
    maxInnerWidth=screen.availWidth-(window.outerWidth-window.innerWidth);
    languageFlag=true;
    
    //intro animation
    $(".divIntro").fadeIn(0,function(){
        $(".divIntro").fadeOut(10,function(){
            $(".divTop").fadeIn(10);
        });
    });

    //setting size of 'aboutMe' divs
    $("[class^='aboutMe']").css("height",maxInnerHeight+"px");
    
    //setting size of 'menu' div
    $(".fixedMenu").css("height",maxInnerHeight/8+"px");

    //initializing value of height of fixed menu
    fixedMenuHeight=Math.floor($(".fixedMenu").css("height").substr(0,$(".fixedMenu").css("height").lastIndexOf('px')));

    //setting current menu
    document.getElementsByClassName('currentMenu')[0].innerHTML="About Me";

    $(".currentMenu").css("width",maxInnerHeight/3+"px");
    $(".currentMenu").css("fontSize",maxInnerHeight/20+"pt");
    $(".currentMenu").css("padding-top",maxInnerHeight/50+"px");

    //setting menu
    $(".menu").css("fontSize",maxInnerHeight/40+"pt");
    $(".menu").css("padding-top",maxInnerHeight/23+"px");
    
    $(".menuBar").css("margin-top",maxInnerHeight/28+"px");

    //setting padding and margin of toggle switch. (due to fixed size of toggle switch, it's impossible to resize it)
    $(".divToggleSwitch").css("padding-top",maxInnerHeight/26+"px");
    $(".divToggleSwitch").css("margin-right",maxInnerWidth/50+"px");

    //aboutMe1 -----------------------------------------------------------------------------------------------------------

    //aboutMe1 : profile picture
    $(".divProfilePic").css("margin-top",maxInnerHeight/5.5+"px");
    $(".divProfilePic").css("margin-right",maxInnerWidth/11.8+"px");
    $(".divProfilePic").css("margin-bottom",maxInnerHeight/30+"px");
    $(".divProfilePic").css("width",maxInnerHeight/3+"px");
    $(".divProfilePic").css("height",maxInnerHeight/3+"px");

    //aboutMe1 : left contents
    $(".divProfileMiddleLeft").css("height",maxInnerHeight+"px");
    $(".divProfileMiddleLeft").css("width",maxInnerWidth/3+"px");
    $(".profileContents-icon").css("height",maxInnerHeight/10+"px");
    $(".profileContents-icon").css("width",maxInnerWidth/3.5+"px");
    $(".icon-margin").css("fontSize",maxInnerHeight/20+"pt");
    $(".icon-margin").css("margin-right",maxInnerWidth/25+"px");
    $(".lastIcon").css("margin-right",maxInnerWidth/13+"px");
    $(".profileContents").css("height",maxInnerHeight/20+"px");
    $(".profileContents").css("fontSize",maxInnerHeight/40+"pt");
    $(".profileContents-q").css("width",maxInnerWidth/12+"px");
    $(".profileContents-a").css("width",maxInnerWidth/5+"px");
    $(".profileContents-a-address").css("height",maxInnerHeight/11+"px");
    
    //aboutMe1 : Right contents
    $(".divProfileMiddleRight").css("padding-top",maxInnerHeight/5.5+"px");
    $(".divProfileMiddleRight").css("height",maxInnerHeight+"px");
    $(".profileContents-Introduction-Title").css("width",maxInnerWidth/1.02+"px");
    $(".profileContents-Introduction-Title").css("height",maxInnerHeight/12+"px");
    $(".profileContents-Introduction-Title").css("fontSize",maxInnerHeight/25+"pt");
    $(".profileContents-Introduction-Contents").css("height",maxInnerHeight/1.5+"px");
    $(".profileContents-Introduction-Contents").css("fontSize",maxInnerHeight/41+"pt");
    $(".profileContents-Introduction-Contents").css("line-height",maxInnerHeight/400);


    //aboutMe1 : Right contents animation
    var whoNum=1;
    setTimeout(function()
    {
        $(".who").fadeOut(2000,function(){
            $(".who").fadeIn(2000);
            document.getElementsByClassName('who')[0].innerHTML="who is creative";
            document.getElementsByClassName('who')[1].innerHTML="창의적인&nbsp;";
        });
        setInterval(function(){
            if(whoNum==0){
                $(".who").fadeOut(2000,function(){
                    $(".who").fadeIn(2000);
                    document.getElementsByClassName('who')[0].innerHTML="who is creative";
                    document.getElementsByClassName('who')[1].innerHTML="창의적인&nbsp;";
                });
            }else if(whoNum==1){
                $(".who").fadeOut(2000,function(){
                    $(".who").fadeIn(2000);
                    document.getElementsByClassName('who')[0].innerHTML="who is enthusiastic";
                    document.getElementsByClassName('who')[1].innerHTML="열정적인&nbsp;";
                });
            }else if(whoNum==2){
                $(".who").fadeOut(2000,function(){
                    $(".who").fadeIn(2000);
                    document.getElementsByClassName('who')[0].innerHTML="who developes every day";
                    document.getElementsByClassName('who')[1].innerHTML="성장하는&nbsp;";
                    whoNum=0;
                });
            }
            whoNum++;
        },8000);
    },4000);
    
    //aboutMe2 -----------------------------------------------------------------------------------------------------------
    //setting size of 'aboutMe2' div
    $(".aboutMe2").css("height",maxInnerHeight*2.3+"px");
    $(".aboutMe2").css("padding-top",maxInnerHeight/8+"px");

    //main tree category
    $(".treeCategory").css("height",maxInnerHeight/25+"px");
    $(".treeCategory").css("width",maxInnerWidth/6.5+"px");
    $(".treeCategory").css("fontSize",maxInnerHeight/40+"pt");

    //main tree
    $(".treeMain").css("width",maxInnerWidth/15+"px");
    $(".treeMain-shortLine").css("height",maxInnerHeight/10+"px");
    $(".treeMain-shortLine").css("width",maxInnerWidth/200+"px");
    $(".treeMain-line").css("height",maxInnerHeight/5+"px");
    $(".treeMain-line").css("width",maxInnerWidth/200+"px");
    $(".treeMain-icon").css("width",maxInnerHeight/15+"px");
    $(".treeMain-icon").css("height",maxInnerHeight/15+"px");
    $(".treeMain-icon-size").css("fontSize",maxInnerHeight/35+"pt");

    //branch of tree
    $(".treeBranch-title").css("height",maxInnerHeight/15+"px");
    $(".treeBranch-title").css("fontSize",maxInnerHeight/25+"pt");
    $(".title-right").css("width",maxInnerWidth/2.2+"px");
    $(".treeBranch-subTitle").css("height",maxInnerHeight/28+"px");
    $(".treeBranch-subTitle").css("width",maxInnerWidth/3.3+"px");
    $(".treeBranch-subTitle").css("fontSize",maxInnerHeight/55+"pt");
    $(".treeBranch-contents").css("height",maxInnerHeight/10+"px");
    $(".treeBranch-contents").css("width",maxInnerWidth/3+"px");
    $(".treeBranch-contents").css("fontSize",maxInnerHeight/55+"pt");

    //left, right branch of tree
    var treeMainWidth=$(".treeMain").css("width").substr(0,$(".treeMain").css("width").lastIndexOf('px'));
    var treeBranchWidth=(((maxInnerWidth-treeMainWidth)/maxInnerWidth*100)/2)-0.3;
    $(".treeLeftBranch").css("width",treeBranchWidth+"%");
    $(".treeLeftBranch").css("height",maxInnerHeight/3.8+"px");
    $(".treeRightBranch").css("width",treeBranchWidth-4+"%");
    $(".treeRightBranch").css("height",maxInnerHeight/4.1+"px");
    $(".treeRightBranch").css("margin-top",maxInnerHeight/3.5+"px");

    //aboutMe3 -----------------------------------------------------------------------------------------------------------
    //setting size of 'aboutMe3' div
    $(".aboutMe3").css("height",maxInnerHeight*2.5+"px");

    //aboutMe3 : setting fontsize of divCategoryOfCircleProgress
    $(".divCategoryOfCircleProgress").css("fontSize",maxInnerHeight/20+"pt");

    //aboutMe3 : setting divCircleProgress
    $(".divCircleProgress").css("height", $(".aboutMe3").css("height").substr(0,$(".aboutMe3").css("height").lastIndexOf('px'))/5.2+"px");
    $(".divCircleProgress").css("width",Math.floor(((maxInnerWidth/4)/maxInnerWidth)*100)-0.7+"%");
   
    //aboutMe3 : setting css of circle Progress 
    $(".circleProgress").css("width",maxInnerHeight/3.5+"px");
    $(".circleProgress").css("height",maxInnerHeight/3.5+"px");
    $(".circleProgress").css("margin-top",maxInnerHeight/15+"px");
    $(".circleProgress").css("margin-bottom",maxInnerHeight/50+"px");
    
    //aboutMe3 : setting fontsize of divNameOfCircleProgress
    $(".divNameOfCircleProgress").css("fontSize",maxInnerHeight/35+"pt");

    //aboutMe4 -----------------------------------------------------------------------------------------------------------
    $(".aboutMe4").css("height",maxInnerHeight+"px");

    //aboutMe4 : setting size of left menu
    $(".divProjectLeftMenu").css("width",maxInnerWidth/8+"px");
    $(".divProjectLeftMenu").css("height",$(".aboutMe4").css("height").substr(0,$(".aboutMe4").css("height").lastIndexOf('px'))/1.1+"px");
    $(".divProjectLeftMenu").css("margin-top",maxInnerHeight/25+"px");
    $(".divProjectCategory").css("fontSize",maxInnerHeight/35+"pt");
    $(".divProject").css("height",maxInnerHeight/25+"px");
    $(".divProject").css("fontSize",maxInnerHeight/40+"pt");

    //aboutMe4 : setting size of divProjectRightViewNotice
    var divProjectLeftMenuWidth=$(".divProjectLeftMenu").css("width").substr(0,$(".divProjectLeftMenu").css("width").lastIndexOf('px'));
    $(".divProjectRightViewNotice").css("width",maxInnerWidth/1.2+"px");
    $(".divProjectRightViewNotice").css("height",$(".aboutMe4").css("height").substr(0,$(".aboutMe4").css("height").lastIndexOf('px'))/1.1+"px");
    $(".divProjectRightViewNotice").css("margin-left",divProjectLeftMenuWidth*1.1+"px");
    $(".divProjectRightViewNotice").css("margin-top",maxInnerHeight/25+"px");
    $(".divProjectRightViewNotice").css("fontSize",maxInnerHeight/30+"pt");
    $(".notice-chooseOnePortfolio").css("padding-top",maxInnerHeight/3.5+"pt");

    //aboutMe4 : setting size of divProjectRightView
    $(".divProjectRightView").css("width",maxInnerWidth/1.2+"px");
    $(".divProjectRightView").css("height",$(".aboutMe4").css("height").substr(0,$(".aboutMe4").css("height").lastIndexOf('px'))/1.1+"px");
    $(".divProjectRightView").css("margin-left",divProjectLeftMenuWidth*1.1+"px");
    $(".divProjectRightView").css("margin-top",maxInnerHeight/25+"px");

    //aboutMe4 : setting size of slider
    var divProjectRightMenuWidth=$(".divProjectRightView").css("width").substr(0,$(".divProjectRightView").css("width").lastIndexOf('px'));
    var divProjectRightMenuheight=$(".divProjectRightView").css("height").substr(0,$(".divProjectRightView").css("height").lastIndexOf('px'));
    $(".slider").css("width",divProjectRightMenuWidth+"px");
    $(".slider").css("height",divProjectRightMenuheight+"px");

    $(".prev-slide").css("width",maxInnerHeight/20+"px");
    $(".prev-slide").css("height",maxInnerHeight/20+"px");
    $(".next-slide").css("width",maxInnerHeight/20+"px");
    $(".next-slide").css("height",maxInnerHeight/20+"px");
});

//protecting 'aboutMe' size error
$(window).resize(function(){
    $("[class^='aboutMe']").css("height",maxInnerHeight+"px");
    $(".divProfileMiddleLeft").css("height",maxInnerHeight+"px");
    $(".aboutMe2").css("height",maxInnerHeight*2.3+"px");
    $(".aboutMe3").css("height",maxInnerHeight*2.5+"px");
    $(".aboutMe4").css("height",maxInnerHeight+"px");


    //지워라~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if(window.innerWidth<1000 && $('#developerCSS').attr('href')!='./css/developer 60.css'){
        $('#developerCSS').attr('href','./css/developer 60.css')
    }else if(window.innerWidth>1000 && $('#developerCSS').attr('href')!='./css/developer.css'){
        $('#developerCSS').attr('href','./css/developer.css')
    }
});


//scroll event
document.addEventListener('scroll', ()=> {

    //current menu ---------------------------------------------------------------------------------------------------------
    var fixedMenuHeight=Math.floor($(".fixedMenu").css("height").substr(0,$(".fixedMenu").css("height").lastIndexOf('px')));
    if(languageFlag){
        if(document.querySelector('html').scrollTop<$('.aboutMe2').offset().top-fixedMenuHeight 
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='About Me'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="About Me";
                $(".currentMenu").fadeIn(200);
            });
            $(".menuBar").fadeOut(500);

        }else if(document.querySelector('html').scrollTop>=$('.aboutMe2').offset().top-fixedMenuHeight 
            && document.querySelector('html').scrollTop<$('.aboutMe3').offset().top-fixedMenuHeight
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='My Resume'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="My Resume";
                $(".currentMenu").fadeIn(200);
            });
            $(".menuBar").fadeIn(500);
        }else if(document.querySelector('html').scrollTop>=$('.aboutMe3').offset().top-fixedMenuHeight
            && document.querySelector('html').scrollTop<$('.aboutMe4').offset().top-fixedMenuHeight
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='Skills'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="Skills";
                $(".currentMenu").fadeIn(200);
            });
            $(".fixedMenu").fadeIn(1500);
            $(".menuBar").fadeOut(500);
        }else if(document.querySelector('html').scrollTop>=$('.aboutMe4').offset().top-10
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='Project'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="Project";
                $(".currentMenu").fadeIn(200,function(){
                    $(".fixedMenu").fadeOut(500);
                });
            });
            $(".menuBar").fadeOut(500);
        }
    }else{
        if(document.querySelector('html').scrollTop<$('.aboutMe2').offset().top-fixedMenuHeight 
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='자기 소개'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="자기 소개";
                $(".currentMenu").fadeIn(200);
            });
            $(".menuBar").fadeOut(500);

        }else if(document.querySelector('html').scrollTop>=$('.aboutMe2').offset().top-fixedMenuHeight 
            && document.querySelector('html').scrollTop<$('.aboutMe3').offset().top-fixedMenuHeight
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='이력서'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="이력서";
                $(".currentMenu").fadeIn(200);
            });
            $(".menuBar").fadeIn(500);
        }else if(document.querySelector('html').scrollTop>=$('.aboutMe3').offset().top-fixedMenuHeight
            && document.querySelector('html').scrollTop<$('.aboutMe4').offset().top-fixedMenuHeight
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='보유 기술'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="보유 기술";
                $(".currentMenu").fadeIn(200);
            });
            $(".fixedMenu").fadeIn(1500);
            $(".menuBar").fadeOut(500);
        }else if(document.querySelector('html').scrollTop>=$('.aboutMe4').offset().top-10
            && document.getElementsByClassName('currentMenu')[0].innerHTML!='프로젝트'){
            $(".currentMenu").fadeOut(300,function(){
                document.getElementsByClassName('currentMenu')[0].innerHTML="프로젝트";
                $(".currentMenu").fadeIn(200,function(){
                    $(".fixedMenu").fadeOut(500);
                });
            });
            $(".menuBar").fadeOut(500);
        }
    }
    //aboutMe2 : animation event------------------------------------------------------------------------------------
    var windowHeight=window.innerHeight/1.2;
    var htmlScrollTop=document.querySelector('html').scrollTop;

    //aboutMe2 : left branch animation
    var arrayTreeLeftBranchTop=new Array();

    for(var i=0;i<$('.treeLeftBranch').length;i++){
        arrayTreeLeftBranchTop[i]=$('.treeLeftBranch:eq('+i+')').offset().top;
    }
    
    for(var i=0;i<$('.treeLeftBranch').length;i++){
        if ( arrayTreeLeftBranchTop[i]-htmlScrollTop< windowHeight){
            $('.treeLeftBranch:eq('+i+')').addClass('tree-active');
        }
    }
    
    //aboutMe2 : right branch animation
    var arrayTreeRightBranchTop=new Array();

    for(var i=0;i<$('.treeRightBranch').length;i++){
        arrayTreeRightBranchTop[i]=$('.treeRightBranch:eq('+i+')').offset().top;
    }
    
    for(var i=0;i<$('.treeRightBranch').length;i++){
        if ( arrayTreeRightBranchTop[i]-htmlScrollTop< windowHeight){
            $('.treeRightBranch:eq('+i+')').addClass('tree-active');
        }
    }

    //aboutMe2 : tree category and tree main animation
    var arraytreeCategoryTop=new Array();

    for(var i=0;i<$('.treeCategory').length;i++){
        arraytreeCategoryTop[i]=$('.treeCategory:eq('+i+')').offset().top;
    }
    
    for(var i=0;i<$('.treeCategory').length;i++){
        if ( arraytreeCategoryTop[0]-htmlScrollTop< windowHeight){
            $('.treeCategory:eq('+i+')').addClass('tree-active');
            $('.treeMain:eq('+i+')').addClass('tree-active');
        }
    }
});


$(document).ready(function(){

    //changing language
    $(document).ready(function(){
		$("#switch").change(function(){

            //preventing user from click toggle without break
            $("#switch").attr("disabled", true);
            
			setTimeout(function(){
				$("#switch").attr("disabled", false);
            },1000);
            
            //initializing value of current menu
            let valueCurrentMenu=document.getElementsByClassName('currentMenu')[0].innerHTML;

            //toggle event
			if($("input:checkbox[id='switch']").is(":checked")){
                languageFlag=false;

                //preventing error of animation of menu letter
                $(":root").css("--animation-duration","0ms");

                $(".eng").fadeOut(500,function(){

                    //changing value of current menu into Korean
                    if(valueCurrentMenu=='About Me'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='자기 소개';
                    }else if(valueCurrentMenu=='My Resume'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='이력서';
                    }else if(valueCurrentMenu=='Skills'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='보유 기술';
                    }else if(valueCurrentMenu=='Project'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='프로젝트';
                    }
                    $(".kor").fadeIn(500,function(){
                        //preventing error of animation of menu letter
                        $(":root").css("--animation-duration","300ms");
                    });
                });
			}else{
                $(".kor").fadeOut(500,function(){
                    languageFlag=true;

                    //preventing error of animation of menu letter
                    $(":root").css("--animation-duration","0ms");

                    //changing value of current menu into English
                    if(valueCurrentMenu=='자기 소개'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='About Me';
                    }else if(valueCurrentMenu=='이력서'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='My Resume';
                    }else if(valueCurrentMenu=='보유 기술'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='Skills';
                    }else if(valueCurrentMenu=='프로젝트'){
                        document.getElementsByClassName('currentMenu')[0].innerHTML='Project';
                    }
                    $(".eng").fadeIn(500,function(){
                        //preventing error of animation of menu letter
                        $(":root").css("--animation-duration","300ms");
                    });
                });
            }
		});
	});

    //moving to top of a menu
    var fixedMenuHeight=Math.floor($(".fixedMenu").css("height").substr(0,$(".fixedMenu").css("height").lastIndexOf('px')))-1;

    $('.menuLetter:eq(0)').click(function(){
        $('html, body').animate({scrollTop : $('.aboutMe1').offset().top-fixedMenuHeight}, 1000);
    });
    $('.menuLetter:eq(1)').click(function(){
        $('html, body').animate({scrollTop : $('.aboutMe2').offset().top-fixedMenuHeight}, 1000);
    });
    $('.menuLetter:eq(2)').click(function(){
        $('html, body').animate({scrollTop : $('.aboutMe3').offset().top-fixedMenuHeight}, 1000);
    });
    $('.menuLetter:eq(3)').click(function(){
        $('html, body').animate({scrollTop : $('.aboutMe4').offset().top}, 1000);
    });

    
    //opening new window after clicking icon
    $('.iconLink').click(function(){
        if($('.iconLink').index(this)==0){
            window.open('https://github.com/geekily', '_blank');
        }else if($('.iconLink').index(this)==1){
            window.open('https://www.youtube.com/channel/UC-MiTToZKoAIe5dy2t91iAA', '_blank');
        }else if($('.iconLink').index(this)==2){
            window.open('', '_blank');
        }
    });

    //changing portfolio
    $('.projectLetter').click(function(){
        $('.divProjectRightViewNotice').fadeOut(500);
        $(this).css("color","#A0BEE0");
        $(this).css("fontSize","118%");
        
        for(var i=0;i<$('.projectLetter').length;i++){
            if(i!=$('.projectLetter').index(this)){
                $('.projectLetter:eq('+i+')').css("color","#5D5D5D");
                $('.projectLetter:eq('+i+')').css("fontSize","82%");
                $('.divProjectRightView:eq('+i+')').fadeOut(500);
            }else{
                $('.divProjectRightView:eq('+i+')').fadeIn(1500);
            }
        }
    });

    $('#test').click(function(){
        alert(window.innerWidth);
    });
});