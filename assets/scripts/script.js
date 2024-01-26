
/**
 * Loading Screen
 */
 document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    gsap.to(window, {duration: 0, scrollTo:{y:'#art-nedir', offsetY:0}})
    $("#loading").remove();
    AOS.init();

    // Go to bottom animasyonu
    gsap.registerPlugin(DrawSVGPlugin);

    window.location.hash === "#tasarimini-yap" ? gsap.to(window, {duration: 0, scrollTo:{y:'#ninethSection', offsetY:0}}) : false; 
  }
};

// Main Scene Sequence Images Array
let mainScene = [];

// Stamp Scene Sequence Images Array
let stampScene = []

// Create Main Sequence For
for (let i = 1; i <= 60; i++) {
  let dynamicK = i <= 49 ? 3 : 25 // eski değer 25;
  for(let k = 1; k <= dynamicK ; k++) {
    mainScene.push(`./assets/images/sequence/main-scene/main-scene-${i}.png`);
  }
}

// Stamp Scene Sequence For
for (let i = 1; i <= 48; i++) {
  for(let k = 1; k <= 3 ; k++) {
    stampScene.push(`./assets/images/sequence/stamp/stamp-${i}.png`);
  }
}

// TweenMax can tween any property of any object. We use this object to cycle through the array
let mainSequenceObj = {curImg: 0};

// create tween
let mainSceneSequenceTween = TweenMax.to(mainSequenceObj, 1,
  {
    curImg: mainScene.length - 1,	// animate propery curImg to number of images
    roundProps: 'curImg',				// only integers so it can be used as an array index
    repeat: false,							// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $('#mainSceneSequenceImg').attr('src', mainScene[mainSequenceObj.curImg]); // set the image source
    }
  }
);

// Variables
var windowWidth = $(window).outerWidth();
var windowHeight = $(window).outerHeight();

// Init controller
var controller = new ScrollMagic.Controller();

// Progress Bar Animate First
var progressBarAnimateFirst = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  offset: windowHeight,
  duration : $("#art-nedir").outerHeight(),
})
.setTween(TweenMax.to('#navgationProgressBarFirst', 1, {
  width : '40%', 
}))
.on("start", function(event) {
  if(event.scrollDirection !== 'REVERSE') {
    $("#navigationListFirst").addClass('active');
    $("#nav-art-nedir").addClass('active');
  }else {
    $("#nav-art-nedir").removeClass('active');
    $("#navigationListFirst").removeClass('active');
  }
})
.addTo(controller);

// Progress Bar Animate Second
var progressBarAnimateSecond = new ScrollMagic
.Scene({
  triggerElement : '#sixthSection',
  duration : $("#temalar").outerHeight() + windowHeight * 2,
})
.setTween(TweenMax.to('#navgationProgressBarSecond', 1, {
  width : '25%', 
}))
.on("start", function(event) {
  if(event.scrollDirection !== 'REVERSE') {
    $("#navigationListSecond, #nav-temalar").addClass('active');
    $("#navigationListFirst, #nav-art-nedir").removeClass('active');
  }else {
    $("#navigationListFirst, #nav-art-nedir").addClass('active');
    $("#navigationListSecond, #nav-temalar").removeClass('active');
  }
})
.addTo(controller);

// Progress Bar Animate Third
var progressBarAnimateThird = new ScrollMagic
.Scene({
  triggerElement : '#tasarimini-yap',
  //offset: windowHeight,
  duration : $("#tasarimini-yap").outerHeight() + windowHeight,
})
.setTween(TweenMax.to('#navgationProgressBarThird', 1, {
  width : '38%', 
}))
.on("start", function(event) {
  if(event.scrollDirection !== 'REVERSE') {
    $("#navigationListThird, #nav-tasarimini-yap").addClass('active');
    $("#navigationListSecond, #nav-temalar").removeClass('active');
  }else {
    $("#navigationListThird, #nav-tasarimini-yap").removeClass('active');
    $("#navigationListSecond, #nav-temalar").addClass('active');
  }
})
.addTo(controller);
// Background Light Pin  
var backgroundLightPin = new ScrollMagic.Scene()
.setPin('#backLightBlueWrapper')
.addTo(controller);

// Background Light Out1 Animate
var backgroundLightAnimate1 = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 400 : 800,
  offset: 100
})
.setTween(TweenMax.to('#backLightBlueWrapper', 1, {
  alpha : 0, 
}))
.addTo(controller);

// Background Light In1 Animate
var backgroundLightAnimate2 = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: 200,
  offset: 800
})
.setTween(TweenMax.to('#backLightBlueWrapper', 1, {
  alpha : 1, 
}))
.addTo(controller);

// Main Scene Sequence Animate
var mainSceneSequence = new ScrollMagic.Scene({
  duration: windowWidth > 1024 ? 1700 : 1000, // eski değer 1200
  offset: windowWidth > 1024 ? 400 : 50,
})
.setTween([
  mainSceneSequenceTween,
  TweenLite.to('#mainSceneSequence' , .3, {
    y: 0,
  })
])
.addTo(controller);

// Main Scene Sequence Pin
var mainSceneSequencePin = new ScrollMagic.Scene()
.setPin('#mainSceneSequence')
.addTo(controller);

// Main Scene Sequence Mobile Position
if(windowWidth <= 768) {
  var mainSceneSequenceMobilePosition = new ScrollMagic.Scene({
    triggerElement : '#triggerSecondSection',
    offset: windowHeight,
    duration: windowHeight * 1.5,
  }).setTween(TweenLite.to('#mainSceneSequence' , 1, {
    y: -(windowHeight / 2.2),
  }))
  .addTo(controller);
}

// Main Scene Sequence Go Out
var mainSceneSequenceGoOut = new ScrollMagic
.Scene({
  triggerElement : '#triggerBigRedOut',
  duration : $(window).outerHeight(),
  offset: - ($('.boxBigTextSecondLine').outerHeight() - (windowWidth < 768 ? 10 : 0)),
})
.setTween(TweenMax.to('#mainSceneSequence', 1, {
  y : '-100vh',
}))
.addTo(controller);

// Welcome Text Animate
var welcomeTextAnimate = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 200 : 600
})
.setTween(TweenMax.to('#welcomeTextWrapper', 1, {
  alpha : 0, 
  y : 100
}))
.addTo(controller);

// Big Gray Circle Pin
var bigGrayCirclePin = new ScrollMagic
.Scene({
  duration: windowHeight,
})
.setPin("#bigGrayCircle")
.addTo(controller);

// Big Gray Circle Animate
var bigGrayCircleAnimate = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 200 : 300,
  offset: 50
})
.setTween(TweenMax.to('#bigGrayCircle', 1, {
  alpha : 0, 
  y : 120
}))
.addTo(controller);

// Middle Gray Circle Animate
var middleGrayCircleAnimate = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 200 : 600,
  offset: 50
})
.setTween(TweenMax.to('#middleGrayCircle', 1, {
  alpha : 0, 
  y : 90
}))
.addTo(controller);

// Middle Gray Circle Pin
var middleGrayCirclePin = new ScrollMagic
.Scene({
  duration: windowHeight + 50,
})
.setPin("#middleGrayCircle")
.addTo(controller);

// Little Gray Circle Animate
var littleGrayCircleAnimate = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 200 : 600,
  offset: 50
})
.setTween(TweenMax.to('#littleGrayCircle', 1, {
  alpha : 0, 
  y : 90
}))
.addTo(controller);

// Little Gray Circle Pin
var littleGrayCirclePin = new ScrollMagic
.Scene({
  duration: windowHeight + 150,
})
.setPin("#littleGrayCircle")
.addTo(controller);

// Middle Red Circle Animate
var middleRedCircleAnimate = new ScrollMagic
.Scene({
  triggerElement : '#triggerSecondSection',
  duration: windowWidth > 1024 ? 300 : 400,
  offset: 90
})
.setTween(TweenMax.to('#middleRedCircle', 1, {
  alpha : 0, 
  y : 200
}))
.addTo(controller);

// Middle Red Circle Pin
var middleRedCirclePin = new ScrollMagic
.Scene({
  duration: windowHeight + 100,
})
.setPin("#middleRedCircle")
.addTo(controller);

// Go To Bottom Circle Pin
var goToBottomCirclePin = new ScrollMagic.Scene({
  duration : windowHeight
})
.setPin("#goToBottomCircle")
.addTo(controller);

// Go To Bottom Circle Animate
var goToBottomCircleAnimate = new ScrollMagic
.Scene({
  duration: windowHeight / 3,
})
.setTween(
  TweenLite.to(
    new TimelineLite({paused:true}).fromTo("#goToBottomProgress", 0.5, {
      drawSVG:"0%", 
      visibility:"visible"
    },{
      drawSVG:"100%", 
      ease:Linear.easeIn
    }), 
    3, {
    progress:1, 
    delay:1
  })
)
.addTo(controller);

// Scroll Bar Progress Circle
var scrollBarProgressAnimate = new ScrollMagic
.Scene({
  offset : windowHeight,
  duration: $('body,html').outerHeight() + windowHeight,
})
.setTween(
  TweenLite.to(
    new TimelineLite({paused:true}).fromTo("#scrollBarProgress", 1, {
      drawSVG:"0%", 
      visibility:"visible"
    },{
      drawSVG:"100%", 
      ease:Linear.easeIn
    }), 
    1, {
    progress:1, 
    delay:0
  })
)
.addTo(controller);


// Go To Bottom Circle Fade Out
var goToBottomCircleFadeOut = new ScrollMagic.Scene({
  duration : windowHeight / 3,
})
.setTween(TweenMax.to('#goToBottomCircle', 1, {
  alpha : 0, 
}))
.addTo(controller);

// Big Red Circle
  // Red Circle Pin
  var redCirlcePin = new ScrollMagic.Scene()
  .setPin('#bigRedCircleWrapper')
  .addTo(controller);

  // Red Circle Scale
  var redCircleScale = new ScrollMagic.Scene({
    duration: 300, 
    offset: windowWidth > 768 ? 700 : 650
  })
  .setTween(TweenMax.to('#bigRedCircle', 1, {
    alpha : 1, 
    //scale: windowWidth > 768 ? (windowWidth / 10) / 3 : (windowWidth / 10) / 1.7 ,
    width: windowWidth > 768 ? windowWidth / 2.85: windowWidth / 1.3,
    height: windowWidth > 768 ? windowWidth / 2.85 : windowWidth / 1.3,
  }))
  .addTo(controller);

  // Red Circle Scale Out
  var redCircleScaleOut = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBigRedOut',
    duration: 300
  })
  .setTween(TweenMax.to('#bigRedCircle', 1, {
    alpha : 0, 
    //scale: 10
    width:10,
    height:10,
  }))
  .addTo(controller);

// Big Blue Circle
  // Blue Circle Pin
  var blueCirlcePin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top,
  })
  .setPin('#bigBlueCircleWrapper')
  .addTo(controller);
  
  // Blue Circle Scale
  var blueCircleScale = new ScrollMagic
  .Scene({
    duration:400, 
    offset: $('#thirdSection').offset().top
  })
  .setTween(TweenMax.to('#bigBlueCircle', 1, {
    triggerElement: '#triggerBigBlue',
    alpha : 1,
    width: windowWidth > 768 ? windowWidth / 3 : windowWidth / 1.3,
    height: windowWidth > 768 ? windowWidth / 3 : windowWidth / 1.3,
    //scale: windowWidth > 767 ? (windowWidth / 10) / 2.85 : (windowWidth / 10) / 1.9
  }))
  .addTo(controller);

  
  // Blue Circle Go Top
  var blueCircleGoTop = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBlueAndPartials',
    duration: 600
  }) 
  .setTween(TweenMax.to('#bigBlueCircle', 1, {
    //width: windowWidth > 767 ? windowWidth / 1.2 : windowWidth * 1.34,
    //height: windowWidth > 767 ? windowWidth / 1.2 : windowWidth * 1.34,
    scale: windowWidth > 1023 ? (windowWidth / 650) : (windowWidth / 230),
    y : windowWidth > 1023 ? - (windowWidth / 3) * (windowWidth / 650) / 100 * 35 : - (windowHeight / 2.9),
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Blue Circle Go to Red
  var blueCircleToRed = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBlueAndPartials',
    duration: 600
  }) 
  .setTween(TweenMax.to('#bigBlueCircleRed', 2, {
    alpha:1
  }))
  .addTo(controller);

  // Blue Circle Fade out To Red
  var blueCircleFadeOutToRed = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBlueAndPartials',
    duration: 550
  }) 
  .setTween(TweenMax.to('#bigBlueCircleBlue', 1, {
    alpha:0
  }))
  .addTo(controller);

  // Blue Circle Go To Out
  var blueCircleGoToOut = new ScrollMagic
  .Scene({
    triggerElement : '#fourthSection',
    duration: windowWidth > 1024 ? windowHeight : windowHeight * 2,
  }) 
  .setTween(TweenMax.to('#bigBlueCircle', 3, {
    y : - windowHeight, 
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Blue Circle FadeOut
  var blueCircleFadeOut = new ScrollMagic
  .Scene({
    triggerElement : '#fourthSection',
    duration: 600,
    offset:-100
  }) 
  .setTween(TweenMax.to('#bigBlueCircle', 3, {
    alpha:0,
    ease : Linear.easeNone
  }))
  .addTo(controller);

  // Box Partials Pin
  var blueCirlcePin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top
  })
  .setPin('#boxPartials')
  .addTo(controller);
  
  // Box Partials Animate
  var artPartials = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    duration: '100%',
    triggerHook: 0.1,
  }).setTween([
    new TimelineMax().staggerFrom('#part1', 2, {
      scale: 5,
      y: [-windowHeight],
      x: [-(windowWidth/2)],
    }),
    new TimelineMax().staggerFrom('#part2', 1, {
      scale: 5,
      y: [-windowHeight],
      x: [0],
    }),
    new TimelineMax().staggerFrom('#part3', 1.5, {
      scale: 7,
      y: [-windowHeight],
      x: [windowWidth/2],
    }),
    new TimelineMax().staggerFrom('#part4', 1, {
      scale: 5,
      alpha: 0.7,
      y: [windowHeight/2],
      x: [-windowWidth],
    }),
    new TimelineMax().staggerFrom('#part5', 1.5, {
      scale: 3,
      alpha: 0.7,
      y: [windowHeight],
      x: [windowWidth/5],
    }),
    new TimelineMax().staggerFrom('#part6', 1.5, {
      scale: 7,
      alpha: 0.7,
      y: [windowHeight],
      x: [windowWidth],
    }),
    new TimelineMax().staggerFrom('#part7', 2, {
      scale: 9,
      alpha: 0.6,
      y: [windowHeight],
      x: [-windowWidth/2],
    }),
    new TimelineMax().staggerFrom('#part8', 1, {
      scale: 10,
      alpha: 0.6,
      y: [windowHeight],
      x: [0],
    }),
    new TimelineMax().staggerFrom('#part9', 2, {
      scale: 7,
      alpha: 0.6,
      y: [windowHeight],
      x: [windowWidth/3],
    }),
  ])
  .on('enter', function(event){
    if(event.scrollDirection !== 'REVERSE') {
      $('.part').removeClass('hide');
    }
  })
  .on('end', function(event){
    if(event.scrollDirection == 'REVERSE') {
      $('.boxPart').addClass('hide');
      $('.part').removeClass('hide');
      $('#thirdSectionTextSubSecond').removeClass('show');
      $('#thirdSectionTextSub').removeClass('hide');
    }else {
      $('.boxPart').removeClass('hide');
      $('.part').addClass('hide');
      $('#thirdSectionTextSubSecond').addClass('show');
      $('#thirdSectionTextSub').addClass('hide');
    }
  })
  .on('leave', function(event){
    if(event.scrollDirection == 'REVERSE') {
      $('.boxPart').addClass('hide');
    }
  })
  .addTo(controller);

  // Box Part Animate
  var boxPart = new ScrollMagic.Scene({
    //triggerElement: '#boxPartials',
    duration: '100%',
    offset: artPartials.scrollOffset() + windowHeight,
    triggerHook: windowWidth < 1023 ? 0.5 : 1,
  }).setTween([
    new TimelineMax().staggerFrom('#boxPart1', 1, {
      y: [0],
      x: [0],
    }),
    new TimelineMax().staggerFrom('#boxPart2', 1, {
      y: windowWidth < 768 ? ['67%'] : [0],
      x: [0]
    }),
    new TimelineMax().staggerFrom('#boxPart3', 1, {
      y: [0],
      x: [0],
    }),
    new TimelineMax().staggerFrom('#boxPart4', 1, {
      y: [0],
      x: [0],
    })
  ])
  .on('end', function(event){
    if(event.scrollDirection !== 'REVERSE') {
      $('.boxPart').addClass('animate');
    }
  })
  .on('enter', function(){
    $('.boxPart').removeClass('animate');
  })
  .addTo(controller);

  // Box Partials Go Out
  var boxPartialsGoOut = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBlueAndPartials',
    duration: 500,
    offset: -50
  }) 
  .setTween(TweenMax.to('#boxPartials', 1, {
    y : - (windowHeight * 2), 
    alpha: 0,
    ease : Linear.easeOut
  }))
  .addTo(controller);

  // Lego Art Mix Box Pin
  var legoArtMixBoxPin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top
  })
  .setPin('#legoArtMixBoxWrapper')
  .addTo(controller);

  // Lego Art Mix Box In Scene
  var legoArtMixBoxInScene = new ScrollMagic
  .Scene({
    triggerElement : '#triggerBlueAndPartials',
    duration: 600
  }) 
  .setTween(TweenMax.to('#legoArtMixBoxWrapper', 1, {
    alpha: 1,
    y: windowWidth > 1024 ? windowHeight / 5 : 50 ,
  }))
  .addTo(controller);

  // Lego Art Mix Box Go Out
  var legoArtMixBoxGoOut = new ScrollMagic
  .Scene({
    triggerElement : '#fourthSection',
    duration: windowWidth > 1024 ? windowHeight / 2 : windowHeight,
    offset: -50
  }) 
  .setTween(TweenMax.to('#legoArtMixBoxWrapper', 2, {
    y : - windowHeight, 
    alpha: 0,
    ease : Linear.easeOut
  }))
  .addTo(controller);

  // Third Section Text Pin
  var thirdSectionTextPin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top,
  })
  .setPin('#thirdSectionTextWrapper')
  .addTo(controller);

  // Third Section Text Animate
  var thirdSectionTextAnimate = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    duration: '70%',
    offset:100,
  }).setTween(TweenMax.to('#thirdSectionTextTitle', 1, {
    y : 0, 
    alpha: 1,
    ease : Linear.easeIn
  }))
  .on('start',function(event){
    if(event.scrollDirection == 'REVERSE') {
      // Main Scene Fade In
    var mainSceneSequenceFadeIn = new ScrollMagic.Scene()
    .setTween(TweenMax.to('#mainSceneSequence', 1, {
      alpha: 1,
    }))
    .addTo(controller);
    } else {
    // Main Scene Section Fade Out
    var mainSceneSequenceFadeOut = new ScrollMagic.Scene()
    .setTween(TweenMax.to('#mainSceneSequence', 1, {
      alpha: 0,
    }))
    .addTo(controller);
    }
  })
  .addTo(controller);

  // Third Section Text Sub Animation
  var thirdSectionTextSubAnimate = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    duration: '60%',
    offset:200,
  }).setTween(TweenMax.to('#thirdSectionTextSub', 1, {
    y : 0, 
    alpha: 1,
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Third Section Text Sub Animation
  var thirdSectionTextSubAnimate = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    duration: '60%',
    offset:200,
  }).setTween(TweenMax.to('#thirdSectionTextSubSecond', 1, {
    y : 0, 
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Third Section Text Go Out
  var thirdSectionTextGoOut = new ScrollMagic.Scene({
    triggerElement: '#triggerBlueAndPartials',
    duration: '50%',
  })
  .setTween(TweenMax.to('#thirdSectionTextWrapper', 1, {
    y : -100, 
    alpha: 0,
  }))
  .addTo(controller);

  // Third Section Icon Box Pin
  var thirdSectionIconBoxWrapperPin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top,
  })
  .setPin('#thirdSectionIconBoxWrapper')
  .addTo(controller);

  // Third Section Icon Box FadeIn Animate
  var thirdSectionIconBoxWrapperFadeIn = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    offset : $(window).outerHeight() / 2,
    duration: '100%'
  }).setTween(TweenMax.to('#thirdSectionIconBoxWrapper', 1, {
    alpha : 1, 
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Third Section Icon Box Fade Out Animate
  var thirdSectionIconBoxWrapperFadeOut = new ScrollMagic
  .Scene({
    triggerElement : '#fourthSection',
    duration: windowWidth > 1024 ? 200 : 700,
    offset: -100
  }) 
  .setTween(TweenMax.to('#thirdSectionIconBoxWrapper', 1, {
    alpha: 0
  }))
  .addTo(controller);

  // Third Section Icon Box Enlargement Animate
  var thirdSectionIconBoxEnLargAnimate = new ScrollMagic.Scene({
    triggerElement: '#triggerBlueAndPartials',
    duration: '70%',
  })
  .setTween(TweenMax.to('#thirdSectionIconBox', 1, {
    width: windowWidth > 768 ? 135 : 80,
    height: windowWidth > 768 ? 135 : 80,
  }))
  .on('start', function(event){
    if(event.scrollDirection == 'REVERSE') {
      $('#thirdSectionIconBoxTextTitle, #thirdSectionIconBoxTextSub').removeClass('hide');
      $('#thirdSectionIconBoxWrapper').removeClass('large');
    } else {
      $('#thirdSectionIconBoxTextTitle, #thirdSectionIconBoxTextSub').addClass('hide');
      $('#thirdSectionIconBoxWrapper').addClass('large');
    }
  })
  .on('end', function(event) {
    if(event.scrollDirection == 'REVERSE') {
      $('#thirdSectionIconBoxWrapper').removeClass('large');
      $('#iconBoxBlue, #iconBoxRed, #iconBoxGreen').removeClass('show');
      $('#thirdSectionIconBoxTextTitleSecond, #thirdSectionIconBoxTextSubSecond').removeClass('show');
    } else {
      $('#iconBoxBlue, #iconBoxRed, #iconBoxGreen').addClass('show');
      $('#thirdSectionIconBoxTextTitleSecond, #thirdSectionIconBoxTextSubSecond').addClass('show');
    }
  })
  .addTo(controller);

  // Third Section Info Pin
  var thirdSectionInfoWrapperPin = new ScrollMagic.Scene({
    offset: $('#thirdSection').offset().top,
  })
  .setPin('#thirdSectionInfoWrapper')
  .addTo(controller);

  // Third Section Info Text FadeIn Animate
  var thirdSectionInfoWrapperFadeIn = new ScrollMagic.Scene({
    triggerElement: '#boxPartials',
    offset : $(window).outerHeight() / 2,
    duration: '100%'
  }).setTween(TweenMax.to('#thirdSectionInfo', 1, {
    alpha : 1, 
    ease : Linear.easeIn
  }))
  .addTo(controller);

  // Third Section Icon Box Fade Out Animate
  var thirdSectionIconBoxWrapperFadeOut = new ScrollMagic
  .Scene({
    triggerElement : '#fourthSection',
    duration: windowWidth > 1024 ? 200 : 700,
    offset: -100
  }) 
  .setTween(TweenMax.to('#thirdSectionInfo', 1, {
    alpha: 0
  }))
  .addTo(controller);

// Big Red Circle Text Wrapper Pin
var bigRedCircleTextWrapperPin = new ScrollMagic.Scene({
  offset: $('#thirdSection').offset().top,
})
.setPin('#bigRedCircleTextWrapper')
.addTo(controller);

// Big Red Circle Text Wrapper Fade In
var bigRedCircleTextWrapperFadeIn = new ScrollMagic.Scene({
  triggerElement: '#triggerBlueAndPartials',
  offset : $(window).outerHeight() / 2,
  duration: '100%',
})
.setTween(TweenMax.to('#bigRedCircleTextWrapper', 1, {
  alpha : 1,
}))
.addTo(controller);

// Big Red Circle Text Wrapper Fade Out
var bigRedCircleTextWrapperFadeOut = new ScrollMagic
.Scene({
  triggerElement : '#fourthSection',
  duration: windowHeight / 2,
  offset:0,
}) 
.setTween(TweenMax.to('#bigRedCircleTextWrapper', 1, {
  y : 60, 
  alpha: 0
}))
.addTo(controller);

// TweenMax can tween any property of any object. We use this object to cycle through the array
let stampSequenceObj = {curImg: 0};

// create tween
let stampSequenceTween = TweenMax.to(stampSequenceObj, 2,
  {
    curImg: stampScene.length - 1,	// animate propery curImg to number of images
    roundProps: 'curImg',				// only integers so it can be used as an array index
    repeat: false,							// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $('#stampSceneSequenceImg').attr('src', stampScene[stampSequenceObj.curImg]); // set the image source
    }
  }
);

// Fourt Section Pin
var stampSceneSequencePin = new ScrollMagic.Scene({
  offset: $('#fourthSection').offset().top,
})
.setPin('#stampSceneSequence')
.addTo(controller);

// Stamp Sequence Animate
var stampSequence = new ScrollMagic.Scene({
  triggerElement : '#fourthSection',
  offset: windowHeight / 2,
  duration : 700,
})
.setTween(stampSequenceTween)
.addTo(controller);

// Stamp Sequence Animate Fade In
var stampSequence = new ScrollMagic.Scene({
  triggerElement : '#fourthSection',
  offset: windowHeight / 5,
  duration : 400,
})
.setTween(TweenMax.to('#stampSceneSequence', 1, {
    alpha : 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Stamp Sequence Animate Go Out
var stampSequenceAnimateGoOut = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset : - ($(window).outerHeight()),
  duration : 400,
})
.setTween(TweenMax.to('#stampSceneSequence', 1, {
    alpha : 0,
    y:-100,
    ease : Linear.easeOut
  })
)
.addTo(controller);


// Fourth Section Red Circle Pin
var fourthSectionRedCirclePin = new ScrollMagic.Scene({
  offset: $('#fourthSection').offset().top,
})
.setPin('#fourthSectionRedCircle')
.addTo(controller);

// Fourth Section Red Circle Animate
var fourthSectionRedCircleAnimate = new ScrollMagic.Scene({
  triggerElement : '#fourthSection',
  offset: windowWidth > 768 ? windowHeight / 1.2 : windowHeight / 1.5,
  duration: '70%',
})
.setTween(TweenMax.to('#fourthSectionRedCircle', 1, {
  y:windowWidth > 768 ? 50 : -70
}))
.addTo(controller);

// Fourth Section Red Circle Go Out
var fourthSectionRedCircleGoOut = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset : - ($(window).outerHeight()),
  duration : 500,
})
.setTween(TweenMax.to('#fourthSectionRedCircle', 1, {
    alpha : 0,
    y: - $(window).outerHeight(),
    ease : Linear.easeOut
  })
)
.addTo(controller);


// Fourth Seciton Text Wrap Pin
var fourthSectionTextWrapPin = new ScrollMagic.Scene({
  offset: $('#fourthSection').offset().top,
})
.setPin('#fourthSectionTextWrap')
.addTo(controller);

// Fourth Seciton Text Wrap Fade In
var fourthSectionTextWrapFadeIn = new ScrollMagic.Scene({
  triggerElement : '#fourthSection',
  offset: windowHeight / 1.2,
  duration: '70%',
})
.setTween(TweenMax.to('#fourthSectionTextWrap', 1, {
  alpha : 1,
  ease : Linear.easeOut
})
)
.addTo(controller);

// Fourth Seciton Text Wrap Go Out
var fourthSectionTextWrapPinGoOut = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset : - ($(window).outerHeight()),
  duration : 300,
})
.setTween(TweenMax.to('#fourthSectionTextWrap', 1, {
    alpha : 0,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Fourth Seciton Gray Circle Pin
var fourthSectionGrayCirclePin = new ScrollMagic.Scene({
  offset: $('#fourthSection').offset().top,
})
.setPin('#fourthSectionGrayCircle')
.addTo(controller);  

// Fourth Seciton Gray Circle Animate
var fourthSectionGrayCircleAnimate = new ScrollMagic.Scene({
  triggerElement : '#fourthSection',
  offset: windowHeight / 1.3,
  duration: '70%',
})
.setTween(TweenMax.to('#fourthSectionGrayCircle', 1, {
  y: windowWidth > 768 ? -100 : $(window).outerHeight() / 3,
}))
.addTo(controller);

// Fourth Seciton Gray Circle Go Out
var fourthSectionGrayCircleGoOut = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset : - $(window).outerHeight(),
  duration : 300,
})
.setTween(TweenMax.to('#fourthSectionGrayCircle', 1, {
    alpha : 0,
    y: - $(window).outerHeight(),
    ease : Linear.easeOut
  })
)
.addTo(controller);


// Fifth Section Background Light Animate
var fifthSectionbackgroundLightAnimate= new ScrollMagic
.Scene({
  offset: $('#fourthSection').offset().top + windowHeight,
  duration: '50%',
})
.setTween(TweenMax.to('#backLightBlueWrapper', 1, {
  width : '150%', 
  height : '120%',
}))
.addTo(controller);

// Fifth Section Text Wrapper Pin
var fifthSectionTextWrapperPin = new ScrollMagic.Scene({
  offset: $('#fifthSection').offset().top,
})
.setPin('#fifthSectionTextWrapper')
.addTo(controller); 

// Fifth Section Text Wrapper Go In
var fifthSectionTextWrapperGoIn = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  duration : 300,
})
.setTween(TweenMax.to('#fifthSectionTextWrapper', 0.5, {
    y: 0,
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Fifth Section Text Wrapper Go Out
var fifthSectionTextWrapperGoOut = new ScrollMagic.Scene({
  triggerElement : '#sixthSection',
  offset : - $(window).outerHeight(),
  duration : 300,
})
.setTween(TweenMax.to('#fifthSectionTextWrapper', 1, {
    alpha : 0,
    y: - 100,
    ease : Linear.easeOut
  })
)
.addTo(controller);


// Fifth Section Blue Circle Pin
var fifthSectionBlueCirclePin = new ScrollMagic.Scene({
  offset: $('#fifthSection').offset().top,
})
.setPin('#fifthSectionBlueCircle')
.addTo(controller);   

// Fifth Section Blue Circle Go In
var fifthSectionBlueCircleGoIn = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset: -50,
  duration : 400,
})
.setTween(TweenMax.to('#fifthSectionBlueCircle', 1, {
    y: 0,
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

  // Fifth Section Blue Circle Go Out
  var fifthSectionBlueCircleGoOut = new ScrollMagic.Scene({
    triggerElement : '#sixthSection',
    offset : - $(window).outerHeight(),
    duration : 400,
  })
  .setTween(TweenMax.to('#fifthSectionBlueCircle', 2, {
      alpha : 0,
      y: - 300,
      ease : Linear.easeOut
    })
  )
  .addTo(controller);

// Fifth Section Yellow Circle Pin
var fifthSectionYellowCirclePin = new ScrollMagic.Scene({
  offset: $('#fifthSection').offset().top,
})
.setPin('#fifthSectionYellowCircle')
.addTo(controller);

// Fifth Section Yellow Circle Go In
var fifthSectionYellowCircleGoIn = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset: -100,
  duration : 500,
})
.setTween(TweenMax.to('#fifthSectionYellowCircle', 2, {
    y: 0,
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Fifth Section Yellow Circle Go Out
var fifthSectionYellowCircleGoOut = new ScrollMagic.Scene({
  triggerElement : '#sixthSection',
  offset : - $(window).outerHeight(),
  duration : 300,
})
.setTween(TweenMax.to('#fifthSectionYellowCircle', 2, {
    alpha : 0,
    y: - 100,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Fifth Section Image Wrapper Pin
var fifthSectionImageWrapperPin = new ScrollMagic.Scene({
  offset: $('#fifthSection').offset().top,
})
.setPin('#fifthSectionImageWrapper')
.addTo(controller); 

// Fifth Section Image Go In
var fifthSectionImageGoIn = new ScrollMagic.Scene({
  triggerElement : '#fifthSection',
  offset: - windowHeight / 2,
  duration : '100%',
})
.setTween(TweenMax.to('#fifthSectionImageWrapper', 3, {
    y: 0,
    alpha: 1,
    ease : Linear.easeIn
  })
)
.addTo(controller);

// Fifth Section Image Go Out
var fifthSectionImageGoOut = new ScrollMagic.Scene({
  triggerElement : '#sixthSection',
  offset : - $(window).outerHeight(),
  duration : windowWidth <= 1920 ? 200 : 500,
})
.setTween(TweenMax.to('#fifthSectionImageWrapper', 1, {
    alpha : 0,
    y: 100,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Pin
var sixthSectionPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
  duration : windowWidth >= 1024 ? '100%' : '30%',
})
.setPin('#sixthSection')
.addTo(controller);

// Sixth Section Text Wrapper Pin
var sixthSectionTextWrapperPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionTextWrapper')
.addTo(controller);

// Sixth Section Text Wrapper Slide Up And FadeIn
var sixthSectionTextWrapperSlideUp = new ScrollMagic.Scene({
  triggerElement : '#sixthSection',
  duration : sixthSectionPin.duration() / 1.85,
})
.setTween(TweenMax.to('#sixthSectionTextWrapper', 1, {
    alpha : 1,
    y: 0,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Text First FadeOut
var sixthSectionTextFirstFadeOut = new ScrollMagic.Scene({
  offset : sixthSectionTextWrapperSlideUp.scrollOffset() + sixthSectionTextWrapperSlideUp.duration(),
  duration : (windowWidth > 1920) ? (260) : ((windowWidth <= 768) ? (140) : (sixthSectionPin.duration() / 5)),
}).setTween(TweenMax.to('#sixthSectionTextFirst', 0.5, {
  alpha : 0,
  ease : Linear.easeOut
}))
.addTo(controller);  

// Sixth Section Text Second FadeIn
var sixthSectionTextSecondFadeIn = new ScrollMagic.Scene({
  offset : sixthSectionTextFirstFadeOut.scrollOffset() + sixthSectionTextFirstFadeOut.duration(),
  duration : (windowWidth > 1920) ? (windowHeight / 6.77) : ((windowWidth <= 768) ? (200) : (windowHeight / 7.5)), 
}).setTween(TweenMax.to('#sixthSectionTextSecond', 1, {
  alpha : 1,
  ease : Linear.easeOut
}))
.addTo(controller);


// Sixth Section Text Second FadeOut
var sixthSectionTextSecondFadeOut = new ScrollMagic.Scene({
  offset : sixthSectionTextSecondFadeIn.scrollOffset() + sixthSectionTextSecondFadeIn.duration(),
  duration : (windowWidth > 1920) ? (240) : ((windowWidth <= 768) ? (160) : ($('#sixthSection').outerHeight() / 7.5)),
}).setTween(TweenMax.to('#sixthSectionTextSecond', 1, {
  alpha : 0,
  ease : Linear.easeOut
}))
.addTo(controller);

// Sixth Section Text Third FadeIn
var sixthSectionTextThirdFadeIn = new ScrollMagic.Scene({
  offset : sixthSectionTextSecondFadeOut.scrollOffset() + sixthSectionTextSecondFadeOut.duration(),
  duration : (windowWidth > 1920) ? (180) : ((windowWidth <= 768) ? (120) : ($('#sixthSection').outerHeight() / 6.2)),
}).setTween(TweenMax.to('#sixthSectionTextThird', 1, {
  alpha : 1,
  ease : Linear.easeOut
}))
.addTo(controller); 

// Sixth Section Text Third FadeOut
var sixthSectionTextThirdFadeOut = new ScrollMagic.Scene({
  offset : sixthSectionTextThirdFadeIn.scrollOffset() + sixthSectionTextThirdFadeIn.duration(),
  duration : (windowWidth > 1920) ? (150) : ((windowWidth <= 768) ? (120) : ($('#sixthSection').outerHeight() / 6.2)),
}).setTween(TweenMax.to('#sixthSectionTextThird', 1, {
  alpha : 0,
  ease : Linear.easeOut
}))
.addTo(controller); 

// Sixth Section Text Fourth FadeIn
var sixthSectionTextFourthFadeIn = new ScrollMagic.Scene({
  offset : sixthSectionTextThirdFadeOut.scrollOffset() + sixthSectionTextThirdFadeOut.duration(),
  duration : (windowWidth > 1920) ? (150) : ((windowWidth <= 768) ? (80) : ($('#sixthSection').outerHeight() / 7.7)),
}).setTween(TweenMax.to('#sixthSectionTextFourth', 1, {
  alpha : 1,
  ease : Linear.easeOut
}))
.addTo(controller); 

// Sixth Section Text Fourth FadeOut
var sixthSectionTextFourthFadeOut = new ScrollMagic.Scene({
  offset : sixthSectionTextFourthFadeIn.scrollOffset() + sixthSectionTextFourthFadeIn.duration(),
  duration : (windowWidth > 1920) ? (150) : ((windowWidth <= 768) ? (80) : ($('#sixthSection').outerHeight() / 7.7)),
}).setTween(TweenMax.to('#sixthSectionTextFourth', 1, {
  alpha : 0,
  ease : Linear.easeOut
}))
.addTo(controller); 

// Sixth Section Text Fifth FadeIn
var sixthSectionTextFifthFadeIn = new ScrollMagic.Scene({
  offset : sixthSectionTextFourthFadeOut.scrollOffset() + sixthSectionTextFourthFadeOut.duration(),
  duration : (windowWidth > 1920) ? (150) : ((windowWidth <= 768) ? (80) : ($('#sixthSection').outerHeight() / 7.7)),
}).setTween(TweenMax.to('#sixthSectionTextFifth', 1, {
  alpha : 1,
  ease : Linear.easeOut
}))
.addTo(controller);

// Sixth Section Text Fifth FadeOut
var sixthSectionTextFifthFadeOut = new ScrollMagic.Scene({
  offset : sixthSectionTextFifthFadeIn.scrollOffset() + sixthSectionTextFifthFadeIn.duration(),
  duration : (windowWidth > 1920) ? (150) : ((windowWidth <= 768) ? (80) : ($('#sixthSection').outerHeight() / 7.7)),
}).setTween(TweenMax.to('#sixthSectionTextFifth', 1, {
  alpha : 0,
  ease : Linear.easeOut
}))
.on('end',function(event){
  if(event.scrollDirection == 'REVERSE') {
    // Sixth Section Fade In
  var sixthSectionFadeIn = new ScrollMagic.Scene()
  .setTween(TweenMax.to('#sixthSection', 1, {
    alpha: 1,
  }))
  .addTo(controller);
  } else {
  // Sixth Section Fade Out
  var sixthSectionFadeOut = new ScrollMagic.Scene()
  .setTween(TweenMax.to('#sixthSection', 1, {
    alpha: 0,
  }))
  .addTo(controller);
  }
})
.addTo(controller); 

// Background Light Out Fade Out
var backgroundLightOutFadeOut = new ScrollMagic
.Scene({
  triggerElement : '#sixthSectionBeatles',
  //offset: sixthSectionTextFifthFadeOut.scrollOffset() + sixthSectionTextFifthFadeOut.duration(),
  duration: 200
})
.setTween(TweenMax.to('#backLightBlueWrapper', 1, {
  alpha : 0, 
  height: '150%',
}))
.addTo(controller);

// Sixth Section Art Project Pin
var sixthSectionArtProjectPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionArtProject')
.addTo(controller);

// Sixth Section Art Project Parallax
var sixthSectionArtProjectParallax = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
  duration : windowHeight,
})
.setTween(TweenMax.to('#sixthSectionArtProject', 2, {
    y: - (windowWidth > 780 ? windowHeight + 100 : windowHeight / 2 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section WorldMap Pin
var sixthSectionWorldMapPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionWorld')
.addTo(controller);

// Sixth Section WorldMap Parallax
var sixthSectionWorldMapParallax = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
  duration : windowHeight,
})
.setTween(TweenMax.to('#sixthSectionWorld', 2, {
    y: - (windowWidth > 780 ? windowHeight - 100 : windowHeight / 2 + 120),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Mickey Mouse Pin
var sixthSectionMickeyMousePin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionMickeyMouse')
.addTo(controller);

// Sixth Section Mickey Mouse Parallax
var sixthSectionMickeyMouseParallax = new ScrollMagic.Scene({
  offset: windowHeight * 0.6,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionMickeyMouse', 1, {
    y: - (windowWidth > 780 ? windowHeight + 500 : windowHeight / 1.8 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller); 

// Sixth Section Harry Potter Pin
var sixthSectionHarryPotterPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionHarryPotter')
.addTo(controller);

// Sixth Section Harry Potter Parallax
var sixthSectionHarryPotterParallax = new ScrollMagic.Scene({
  offset: windowHeight * 0.74,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionHarryPotter', 1, {
    y: - (windowWidth > 780 ? windowHeight + 200 : windowHeight / 2.1 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Marilyn Monroe Pin
var sixthSectionMarilynMonroePin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionMarilynMonroe')
.addTo(controller);

// Sixth Section Marilyn Monroe Parallax
var sixthSectionMarilynMonroeParallax = new ScrollMagic.Scene({
  offset: windowHeight * 0.815,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionMarilynMonroe', 2, {
    y: - (windowWidth > 780 ? windowHeight + 300 : windowHeight / 1.7 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Star Wars Pin
var sixthSectionStarPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionStarWars')
.addTo(controller);

// Sixth Section Star Wars Parallax
var sixthSectionStarParallax = new ScrollMagic.Scene({
  offset: windowHeight,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionStarWars', 1, {
    y: - (windowWidth > 780 ? windowHeight + 500 : windowHeight / 1.25 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);

// Sixth Section Iron Man Pin
var sixthSectionIronManPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionIronMan')
.addTo(controller);

// Sixth Section Iron Man Parallax
var sixthSectionIronManParallax = new ScrollMagic.Scene({
  offset: windowHeight,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionIronMan', 1, {
    y: - (windowWidth > 780 ? windowHeight + 650 : windowHeight / 1.5 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);  

// Sixth Section Beatles Parallax Pin
var sixthSectionBeatlesPin = new ScrollMagic.Scene({
  offset: $('#sixthSection').offset().top,
})
.setPin('#sixthSectionBeatles')
.addTo(controller);

// Sixth Section Beatles Parallax
var sixthSectionBeatlesParallax = new ScrollMagic.Scene({
  offset: windowHeight * 1.050,
  triggerElement : '#sixthSection',
  duration : '100%',
})
.setTween(TweenMax.to('#sixthSectionBeatles', 3, {
    y: - (windowWidth > 780 ? windowHeight + 300 : windowHeight / 1.4 + 220),
    alpha: 1,
    ease : Linear.easeOut
  })
)
.addTo(controller);


// Seventh Section Content Wrapper Pin
var seventhSectionContentWrapperPin = new ScrollMagic.Scene({
  triggerElement : '#seventhSection',
  duration: windowWidth > 1024 ? windowHeight * 2.2 : windowHeight * 2.5,
})
.setPin('#seventhSectionContentWrapper')
.setTween(TweenLite.to($('#seventhSectionContentWrapper') , 0, {
  y: windowWidth > 768 ? -100 : - (windowHeight / 3),
}))
.addTo(controller);

// Seventh Section Image Show
var seventhSectionImageScaleOut = new ScrollMagic.Scene({
  triggerElement: '#seventhSection',
  duration: 200,
})
.setTween(TweenLite.to($('#seventhSectionImage') , 0.3, {
  autoAlpha: 1, 
  display:'block',
}))
.addTo(controller);

// Seventh Section Logos Wrapper Pin
var seventhSectionLogosWrapperPin = new ScrollMagic.Scene({
  triggerElement : '#seventhSection',
  duration: windowWidth > 1024 ? windowHeight * 2.2 : windowHeight * 2.5,
})
.setPin('#seventhSectionLogosWrapper')
.addTo(controller);

// Seventh Section Image Scale Out
var seventhSectionImageScaleOut = new ScrollMagic.Scene({
  triggerElement: '#seventhSection',
  duration: 1000,
})
.setTween(TweenMax.to('#seventhSectionImage', 1, {
  scale: windowWidth > 768 ? 1 : .5,
}))
.addTo(controller);

// Seventh Section Logos Wrapper Go Up
var seventhSectionLogosWrapperFadeIn = new ScrollMagic.Scene({
  triggerElement : '#seventhSection',
  offset : seventhSectionImageScaleOut.duration(),
  duration: windowWidth > 1024 ? windowHeight * 1.4 : windowHeight * 1.5,
})
.setTween(TweenLite.to($('#seventhSectionLogosWrapper') , 0, {
  y: windowWidth > 768 ? 150 : - 70,
}))
.addTo(controller);

// Seventh Section Brands Fade In
var seventhSectionBrandsFadeIn = new ScrollMagic.Scene({
  duration: 900,
  triggerElement : '#seventhSection',
  offset : seventhSectionImageScaleOut.duration(),
})
.setTween([
  new TimelineMax().staggerTo('#goToBottomCircleSecond', 1 , {
    alpha: 1,
  }),
  new TimelineMax().staggerFrom('#seventhSectionWarhol', 1, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionBeatles', 1.5, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionIronMan', 2, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionSith', 2.5, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionMickey', 3, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionHarryPotter', 3.5, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionWorldMap', 4, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionArtProject', 4.5, {
    alpha: 0,
    y: 50,
  }),
  new TimelineMax().staggerFrom('#seventhSectionImageTM', 50, {
    alpha: 0,
  })
])
.addTo(controller);

// Seventh Section Logos Wrapper Pin Again
if(windowWidth > 768) {
  var seventhSectionContentWrapperPin = new ScrollMagic.Scene({
    triggerElement : '#seventhSectionLogosWrapperTriggerAgain',
    offset : (windowHeight / 2) - 20,
  })
  //.addIndicators({name: 'Logos Wrapper'}) // add indicators
  .setPin('#seventhSectionLogosWrapper')
  .setClassToggle('#seventhSectionLogosWrapper', 'sticky')
  .setTween(TweenMax.to('#goToBottomCircleSecond', 0.5, {
    alpha: 0
  }))
  .addTo(controller);

  // Seventh Section Logos Wrapper Unpin
  var seventhSectionContentWrapperUnpin = new ScrollMagic.Scene({
    triggerElement : '#ninethSection',
  })
  .setTween(TweenMax.to('#seventhSectionLogosWrapper', 3, {
    y : - 500,
    alpha : 0,
  }))
  .addTo(controller);
}

/**
* Animasyonlar Harici Scriptler
*/

// Header Menu Opened
$('#headerMenuButton').click(function(event){
event.preventDefault();
$(this).toggleClass('active');
$('#header').toggleClass('opened');
});

$("#temalar-nav").click(function(event){
event.preventDefault();
$("#headerMenuButton").toggleClass('active');
$('#header').toggleClass('opened');
});

$('#closeProductMenu').click(function(event){
event.preventDefault();
$('#headerMenuButton').removeClass('active');
$('#header').removeClass('opened');
});

/**
* Hader Product Slide
*/
var $landingWrapper = $('#headerProductMenuSliderWrapper'),
$landingInnerContent = $('.headerProductMenuBox');
// set initial container to half of .landing-inner-content width
TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/8}, ease: Power2.easeOut});

// scroll left and right
$landingInnerContent.on('mouseenter touchmove', function(e) {
if (e.clientX > $landingWrapper.width() / 2) {
TweenMax.to($landingWrapper, 1, {
  scrollTo: {
    x: '+=380'
  }
});
} else {
TweenMax.to($landingWrapper, 1, {
  scrollTo: {
    x: '-=380'
  },
  ease: Power2.easeOut
});
}
});

/**
* Gsap ile Scroll To Fonksiyonu
*/
$('#art-nedir-nav, #art-nedir-nav-mobile, #temalar-nav-mobile, #tasarimini-yap-nav-mobile,  #tasarimini-yap-nav, #logo')
.click(function(event){
  event.preventDefault();
  let switchCase = $(this).attr('href').replace("#", ""); 
  $("#header").removeClass("opened");
  $("#headerMenuButton").removeClass("active");
  switch (switchCase) {
    case 'art-nedir':
      gsap.to(window, {duration: 0, scrollTo:{y:'#firstSection', offsetY:0}});
      break;
    case 'temalar':
      gsap.to(window, {duration: 0, scrollTo:{y:'#eighthSection', offsetY:170}});
      break;
    case 'tasarimini-yap':
      gsap.to(window, {duration: 0, scrollTo:{y:'#ninethSection', offsetY:0}});
      break;
    case 'logo':
      gsap.to(window, {duration: 0, scrollTo:{y:'#firstSection', offsetY:0}});     
  }
});

/**
* Keşfet ve aşağı butonları
*/

$('#goToBottomCircle').click(function(){
  gsap.to(window, {duration: 5, scrollTo:{y:'#secondSection', offsetY: windowWidth > 768 ? 70 : 240}});
});

$('#goToBottomCircleSecond').click(function(){
  gsap.to(window, {duration: 2, scrollTo:{y:'#eighthSection', offsetY: 150}});
});

// Info Bar Click
$('#thirdSectionInfo').click(function(){
$(this).toggleClass('active');
$('#thirdSectionInfoText').toggleClass('show');
});


/**
* Art Creator Canvas
*/
var downloadImage = document.getElementById('downloadImage'),
canvas4 = document.getElementById('myCanvas'),
context4 = canvas.getContext('2d');

downloadImage.onclick = function(){
  download(canvas4, 'LEGO-ART.png');
  sixthSectionWorldMapPin.removePin(true);
  sixthSectionMickeyMousePin.removePin(true);
  sixthSectionHarryPotterPin.removePin(true);
  sixthSectionMarilynMonroePin.removePin(true);
  sixthSectionStarPin.removePin(true);
  sixthSectionBeatlesPin.removePin(true);
}


//Birleştirilen gÃ¶rselin indirilmesi fonksiyonu
function download(canvas, filename) {
/// create an "off-screen" anchor tag
var downloadLink = document.createElement('a'), e;

/// the key here is to set the download attribute of the a tag
downloadLink.download = filename;

/// convert canvas content to data-uri for link. When download
/// attribute is set the content pointed to by link will be
/// pushed as "download" in HTML5 capable browsers
downloadLink.href = canvas.toDataURL("image/png;base64");

/// create a "fake" click-event to trigger the download
if (document.createEvent) {
 e = document.createEvent("MouseEvents");
 e.initMouseEvent("click", true, true, window,
                 0, 0, 0, 0, 0, false, false, false,
                 false, 0, null);

  downloadLink.dispatchEvent(e);
} else if (lnk.fireEvent) {
downloadLink.fireEvent("onclick");
}
}

$('#upload').on('change', function () { 
var reader = new FileReader()
 reader.onload = function (e) {
   $uploadCrop.croppie('bind', {
     url: e.target.result
   }).then(function(){
     $("#upload-demo").addClass("show");
     $("#ninethSectionCreatorUploadYellow").hide();
     $("#ninethSectionButtonsWrapper").removeClass("show");
   });
 }
 
 reader.readAsDataURL(this.files[0]);
 $uploadCrop = $('#upload-demo').croppie({
 enableExif: false,
 //Sadece seÃ§ilecek alanın boyutu
 viewport: {
     width: 400,
     height: 400,
 },
 //Crop yapılacak alanın boyutu container boyutu
 boundary: {
     width: 600,
     height: 600
 }
});
});
$('#cropImage').on('click', function (ev) {
 
$uploadCrop.croppie('result', {
   type: 'canvas',
   size: 'viewport'
 }).then(function (resp) {
  //Croplanan gÃ¶rseli ekrana bastığım kısım
   
   //Upload edilen gÃ¶rselin blob'a dÃ¶nÃ¼ştÃ¼rdÃ¼ğÃ¼mÃ¼z fonksiyon
   function b64toBlob(dataURI) {
       var byteString = atob(dataURI.split(',')[1]);
       var ab = new ArrayBuffer(byteString.length);
       var ia = new Uint8Array(ab);
       for (var i = 0; i < byteString.length; i++) {
           ia[i] = byteString.charCodeAt(i);
       }
       return new Blob([ab], { type: 'image/jpeg' });
   }
   let fileBlob = b64toBlob(resp);
   new Compressor(fileBlob, {
     quality: 0.04,
   // The compression process is asynchronous,
   // which means you have to access the `result` in the `success` hook function.
   success(result) {
     // Canvas
     let offsetX, offsetY;
     let PI2 = Math.PI * 2;
     let radius = 4.795;
     let spacer = 0.9;
     let diameter = radius * 1.9;

     let img = new Image();
     img.crossOrigin = "anonymous";
     img.onload = start;
     img.src = URL.createObjectURL(result);
   
   //Upload edilen gÃ¶rselin croplama işlemlerinin gerÃ§ekleştiği fonksiyon
   function start() {
     let ctx = canvas.getContext("2d");
     let cw = canvas.width;
     let ch = canvas.height;

     cw = canvas.width = img.width;
     ch = canvas.height = img.height;
     //
     ctx.imageSmoothingEnabled = false;
     ctx.fillStyle = "black";
     ctx.fillRect(0, 0, cw, ch);
     //
     ctx.globalCompositeOperation = "destination-out";
     ctx.beginPath();
     
     for (var y = radius; y < ch; y += diameter + spacer) {
       for (var x = radius; x < cw; x += diameter + spacer) {
         ctx.arc(x, y, radius, 0, PI2);
         ctx.closePath();
       }
     }
     ctx.fill();
     ctx.globalCompositeOperation = "destination-atop";
     ctx.drawImage(img, 0, 0, img.width, img.height);
     img = null;   

     let canvasNew =  document.getElementById("canvas"); 
     
     //let mobileCanvasNew = document.getElementById("mobile-canvas");
     //let mobileContext = mobileCanvasNew.getContext("2d");
     
     let canvas2 = document.getElementById("myCanvas");
     let context2 = canvas2.getContext("2d");
     
     context2.clearRect(0, 0, canvas2.width, canvas2.height);
   
    drawbackground(canvas2, context2);
   
     //2 gÃ¶rselin birleştiği fonksiyon
   function drawbackground(canvas2, context2, onload){
     var imagePaper = new Image();
         //imagePaper.crossOrigin = "anonymous";
         imagePaper.onload = function(){
             //HTML Ã¼zerinde oluşturduğumuz canvas elementinin genişliği ve yÃ¼ksekliği kadar gÃ¶rseli export ediyoruz.
             context2.drawImage(imagePaper,0, 0, canvas2.width,canvas2.height);
         };
       //Sabit olan arka plan gÃ¶rseli
       imagePaper.src = "./assets/images/general/canvas-bg.jpg";
       setTimeout(() => {
         //Upload edilen gÃ¶rselin yerleştirildiği kısım  
         var imagePaper2 = new Image();
            //imagePaper2.crossOrigin = "anonymous";
         imagePaper2.onload = function(){
          context2.drawImage(imagePaper2,285, 100, 320, 320);
       };
       
       imagePaper2.src = canvasNew.toDataURL("image/png");  
       }, 100);
   }
   }
 },
 error(err) {
   console.log(err.message);
 },
});
 });
 
$('.cr-boundary, .cr-slider-wrap').remove();
$('.ninethSectionCreatorUploadYellow').hide();
$("#upload-demo").removeClass("show");
$("#ninethSectionButtonsWrapper").addClass("show");
$("#upload").val("");
});

/**
* Window Resize olduğunda hesaplamaların yeniden yapılması iÃ§in sayfayı refresh ediyoruz
*/

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        var differenceWidth = function (a, b) { return Math.abs(windowWidth - $(window).outerWidth()) }
        var differenceHeight = function (a, b) { return Math.abs(windowHeight - $(window).outerHeight())}
        if(differenceWidth() > 100 || differenceHeight() > 100) {
          location.reload();
        }
    }               
}