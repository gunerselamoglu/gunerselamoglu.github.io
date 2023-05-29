// Güner Selamoğlu HavasCX 2022
// Yarının Suyu Tuzlu
let windowWidth = $(window).width()
let windowHeight = $(window).height();

const mapClose = document.querySelector('.js-close-map');
const mapOpen = document.querySelector('.js-open-map');
const map = document.querySelector('.js-map');
const sectionsClose = document.querySelector('.js-close-sections');
const sectionsOpen = document.querySelector('.js-open-sections');
const sections = document.querySelector('.js-sections');
const sectionsList = document.querySelectorAll('.sections__list-li');
const sectionMobile = document.querySelectorAll('.section.mobile');
const sectionsMobile = document.querySelectorAll('.mobile.sections__list-li');
const musicPlayer = document.querySelector('.js-music-player');
const voicePlayer = document.querySelectorAll('.js-voice-player');
const voicePlayerMobile = document.querySelector('.js-voice-player-mobile');
const soundControl = document.querySelector('.js-sound-control');
const pageOrder = document.querySelector('.js-pages-index');
const startSound = document.querySelector('.js-start-sound');
const startMute = document.querySelector('.js-start-mute');
const pressKitButton = document.querySelector('.js-download-press-kit');
const sectionList = document.querySelectorAll('.section');
const loadingScreen = document.querySelector('.js-loading');
const loadingContent = document.querySelector(".js-loading-content");
const soundOpen = document.querySelector('.js-sound-open');
const footerLeft = document.querySelector('.js-footers-left');
const ysLogoHeader = document.querySelector('.js-header-ys-logo');
const registerButton = document.querySelector('.js-intro-register-button');
const header = document.querySelector('.js-header');
const footer = document.querySelector('.js-footer');
const sectionsCircle = document.querySelector('.js-sections-circle');
const headerPorfile =  document.querySelector('.js-header-profile');
const promise = document.querySelector('.js-son-promise');
const instagram = document.querySelector('.js-instagram-btn');
const facebook = document.querySelector('.js-share-fb');
const twitter = document.querySelector('.js-share-tw');
const introSection = document.querySelector('.js-intro-section');
let sound = true;
let activeSection = 0;

let sequenceInterval;
let sequenceInterval2;

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
		setTimeout(()=> {
			loadingContent.classList.add("fadeOut");
		}, 2000);
		
		setTimeout(()=> {
			soundOpen.classList.add('fadeIn');
		}, 3000);
		
		startSound.addEventListener('click', () => {
			introSection.classList.remove('hide');
			sound = true;
			initialization();
			loadingScreen.classList.add("fadeOut");
			
			setTimeout(() => {
				loadingScreen.remove();
				musicPlayer.play();
				soundControl.classList.add('play');
				page1();
			}, 1000);
		});

		startMute.addEventListener('click', () => {
			introSection.classList.remove('hide');
			sound = false;
			initialization();
			loadingScreen.classList.add("fadeOut");
			
			setTimeout(() => {
				loadingScreen.remove();
				page1();
			}, 1000);
		});
	}
};

soundControl?.addEventListener('click', () => {
	musicPlayer.paused ? musicPlayer.play() + voicePlayer[activeSection - 1].play() + (voicePlayer[activeSection - 1].volume = 1) + soundControl.classList.add('play') + (sound = true) : musicPlayer.pause() + voicePlayer.forEach(player => player.pause()) + soundControl.classList.remove('play') + (sound = false);
});

mapClose?.addEventListener('click', event => {
	event.preventDefault();
	map.classList.add('hide');
	mapOpen.classList.remove('active');
	map.classList.remove('show');
});

mapOpen?.addEventListener('click', event => {
	event.preventDefault();
	mapOpen.classList.contains('active') ? 
	
	mapOpen.classList.remove('active') +
	map.classList.remove('show') +
	map.classList.add('hide') :

	mapOpen.classList.add('active') +
	map.classList.add('show') +
	map.classList.remove('hide')
});

sectionsClose?.addEventListener('click', event => {
	event.preventDefault();
	sections.classList.add('hideSlideToRight');
	sections.classList.remove('showSlideToLeft');
	
	setTimeout(() => {
		document.querySelector('.js-white-overlay').remove();
	}, 700);
});

sectionsOpen?.addEventListener('click', event => {
	event.preventDefault();
	sections.classList.add('showSlideToLeft');
	sections.classList.remove('hideSlideToRight');
	
	setTimeout(() => {
		const overlay = document.createElement("div");
		overlay.classList.add('js-white-overlay');
		overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff;opacity:.5;z-index:10'
		document.body.appendChild(overlay);
	}, 500);
});

const page1 = () => {
	const ysLogo = document.querySelector('.js-ys-logo');
	const tuzluTitle = document.querySelectorAll('.js-tuzlu-title');
	const golHikayesi = document.querySelectorAll('.js-gol-hikayesi');
	const introExplan = document.querySelectorAll('.js-intro-explanation');
	const cloudLeft = document.querySelectorAll('.js-intro-cloud-left');
	const cloudRight = document.querySelectorAll('.js-intro-cloud-right');
	const introLake = document.querySelectorAll('.js-intro-lake');
	const cloudRightLittle = document.querySelectorAll('.js-intro-cloud-right-little');
	const introLightEffect = document.querySelector('.js-intro-light-effect');
	const introLightEffect2 = document.querySelector('.js-intro-light-effect2');
	const introLightEffect3 = document.querySelector('.js-intro-light-effect3');
	const introTuzlu =  document.querySelectorAll('.js-intro-tuzlu');
	const introWave = document.querySelectorAll('.js-intro-wave');
	const introWater = document.querySelectorAll('.js-intro-water');
	const introPlantGreen = document.querySelectorAll('.js-intro-plant-green');
	const introRockRight = document.querySelectorAll('.js-intro-rock-right');
	const introPlantBlur = document.querySelectorAll('.js-plant-blur');
	const introRockLeft = document.querySelector('.js-intro-rock-left');
	const introFrontBug = document.querySelector('.js-intro-front-bug');
	const introMussel = document.querySelector('.js-intro-mussel');
	const introBubbles = document.querySelectorAll('.js-intro-bubbles');
	const introShrimp = document.querySelectorAll('.js-intro-shrimp');
	const introFishRed  = document.querySelectorAll('.js-intro-fish-red');
	const introFishes = document.querySelectorAll('.js-intro-fishes');
	const introFishShadow = document.querySelectorAll('.js-intro-fish-shadow');
	const cloudLeftLittle = document.querySelectorAll('.js-intro-cloud-left-little');
	const startButton = document.querySelectorAll('.js-intro-start-button');
	const introMountain = document.querySelectorAll('.js-intro-mountain');

	ysLogo.classList.add('fadeIn');
	tuzluTitle[0].classList.add('fadeIn');
	tuzluTitle[1].classList.add('fadeIn');
	golHikayesi[0].classList.add('fadeIn');
	golHikayesi[1].classList.add('fadeIn');
	introExplan[0].classList.add('fadeIn');
	introExplan[1].classList.add('fadeIn');
	cloudLeft[0].classList.add('slideUp');
	cloudLeft[1].classList.add('slideUp');
	cloudRight[0].classList.add('slideUp');
	cloudRight[1].classList.add('slideUp');
	introLake[0].classList.add('slideUp');
	introLake[1].classList.add('slideUp');
	cloudRightLittle[0].classList.add('slideUp');
	cloudRightLittle[1].classList.add('slideUp');
	introLightEffect.classList.add('fadeIn');
	introLightEffect2.classList.add('fadeIn');
	introLightEffect3.classList.add('fadeIn');
	introTuzlu[0].classList.add('slideUp');
	introTuzlu[1].classList.add('slideUp');
	introMountain[0].classList.add('slideUp');
	introMountain[1].classList.add('slideUp');

	setTimeout(() => {
		introTuzlu[0].classList.remove('slideUp');
		introTuzlu[1].classList.remove('slideUp');
		introTuzlu[0].classList.add('swimming');
		introTuzlu[1].classList.add('swimming');
	}, 3000);

	introWave[0].classList.add('slideUp');
	introWave[1].classList.add('slideUp');
	introWater[0].classList.add('slideUp');
	introWater[1].classList.add('slideUp');
	introPlantGreen[0].classList.add('slideUp');
	introPlantGreen[1].classList.add('slideUp');
	introRockRight[0].classList.add('slideUp');
	introRockRight[1].classList.add('slideUp');
	introPlantBlur[0].classList.add('slideUp');
	introPlantBlur[1].classList.add('slideUp');
	introRockLeft.classList.add('slideUp');
	introFrontBug.classList.add('slideUp');
	introMussel.classList.add('slideUp');
	introBubbles[0].classList.add('fadeIn');
	introBubbles[1].classList.add('fadeIn');
	introShrimp[0].classList.add('slideUp');
	introShrimp[1].classList.add('slideUp');
	introFishRed[0].classList.add('slideLeft');
	introFishRed[1].classList.add('slideLeft');
	introFishes[0].classList.add('slideLeft');
	introFishes[1].classList.add('slideLeft');
	introFishShadow[0].classList.add('slideLeft');
	introFishShadow[1].classList.add('slideLeft');
	cloudLeftLittle[0].classList.add('slideUp');
	cloudLeftLittle[1].classList.add('slideUp');
	startButton[0].classList.add('fadeIn');
	startButton[1].classList.add('fadeIn');
	ysLogoHeader.classList.remove('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(introLightEffect);
		new Parallax(introLightEffect2);
		new Parallax(introLightEffect3);
		new Parallax(cloudLeft[0]);
		new Parallax(cloudLeftLittle[0]);
		new Parallax(cloudRight[0]);
		new Parallax(cloudRightLittle[0]);
		new Parallax(introTuzlu[0]);
		new Parallax(introWave[0]);
		new Parallax(introWater[0]);
		new Parallax(introLake[0]);
		new Parallax(introRockLeft);
		new Parallax(introMountain[0]);
		new Parallax(introFrontBug);
		new Parallax(introRockRight[0]);
		new Parallax(introShrimp[0]);
		new Parallax(introPlantBlur[0]);
		new Parallax(introPlantGreen[0]);
		new Parallax(introMussel);
		new Parallax(introBubbles[0]);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/1.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[0].play() + (voicePlayer[0].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},2500);

	
}

const page2 = () => {
	const page01Lake = document.querySelector('.js-page-01-lake');
	const page01CloudRight = document.querySelector('.js-page-01-cloud-right');
	const page01CloudSmall = document.querySelector('.js-page-01-cloud-small');
	const page01PlantLeft = document.querySelector('.js-page-01-plant-left');
	const page01PlantMiddle = document.querySelector('.js-page-01-plant-middle');
	const page01PlantRight = document.querySelector('.js-page-01-plant-right');
	const page01Tuzlu = document.querySelector('.js-page-01-tuzlu');
	const page01Flamingos = document.querySelector('.js-page-01-flamingos');
	const page01Content = document.querySelector('.js-page-01-content');
	const yusufcuk = document.querySelectorAll('.js-page-01-yusufcuk');
	
	page01Lake.classList.add('slideLeft');
	page01PlantLeft.classList.add('slideLeft');
	page01PlantMiddle.classList.add('slideLeft');
	page01PlantRight.classList.add('slideLeft');
	page01Tuzlu.classList.add('slideLeft');
	page01Flamingos.classList.add('slideLeft');
	page01Content.classList.add('slideLeft');
	page01CloudRight.classList.add('slideLeft');
	page01CloudSmall.classList.add('slideLeft');
	ysLogoHeader.classList.add('fadeIn');
	sectionsOpen.classList.remove('blue');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(page01CloudRight);
		new Parallax(page01CloudSmall);
		new Parallax(page01Flamingos);
		new Parallax(page01Tuzlu);
		new Parallax(page01PlantLeft);
		new Parallax(page01PlantMiddle);
		new Parallax(page01PlantRight);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/2.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[1].play() + (voicePlayer[1].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);

	const sequenceInterval01 = setInterval(changeSrc, 70);
	let counter = 0;
	
	function changeSrc() {
		counter += 1;
		counter > 58 ? clearInterval(sequenceInterval01) : (yusufcuk[counter].style.visibility = 'visible') + (yusufcuk[counter - 1].style.visibility = 'hidden')
	}
}

const page3 = () => {
	const lakeFloor = document.querySelector('.js-page-02-lake-floor');
	const decor = document.querySelector('.js-page-02-decor');
	const cake = document.querySelector('.js-page-02-cake');
	const flamingos = document.querySelector('.js-page-02-flamingos');
	const page02FlamingoRightPink = document.querySelector('.js-page-02-flamingo-right-pink');
	const page02FlamingoFrontPink = document.querySelector('.js-page-02-flamingo-front-pink');
	const page02FlamingoFrontBlack = document.querySelector('.js-page-02-flamingo-front-black');
	const page02BirdFrontRight = document.querySelector('.js-page-02-bird-front-right');
	const page02BirdTopRight = document.querySelector('.js-page-02-bird-top-right');
	const page02FireFly = document.querySelector('.js-page-02-firefly');
	const fireflyLight = document.querySelector('.js-firefly-light');
	const page02Content1 = document.querySelector('.js-page-02-content-1');
	const page02Content2 = document.querySelector('.js-page-02-content-2');
	const page02Blow = document.querySelector('.js-page-02-blow');
	const page02ConfetiFront =  document.querySelector('.js-page-02-confeti-front');
	const page02ConfetiBack =  document.querySelector('.js-page-02-confeti-back');
	const cloudLeft = document.querySelector('.js-page-02-cloud-left');
	const cloudTop = document.querySelector('.js-page-02-cloud-top');
	const tuzlu = document.querySelector('.js-page-02-tuzlu');
	const blow = document.querySelector('.js-page-02-blow');
	const tuzluEyeBall = document.querySelector('.js-page-02-tuzlu-eyeball');	

	cloudLeft.classList.add('slideLeft');
	cloudTop.classList.add('slideLeft');
	decor.classList.add('slideLeft');
	cake.classList.add('slideLeft');
	page02FlamingoRightPink.classList.add('slideLeft');
	page02FlamingoFrontPink.classList.add('slideLeft');
	page02FlamingoFrontBlack.classList.add('slideLeft');
	page02BirdFrontRight.classList.add('slideLeft');
	page02BirdTopRight.classList.add('slideLeft');	
	page02FireFly.classList.add('slideLeft');
	fireflyLight.classList.add('slideLeft');
	page02Content1.classList.add('slideLeft');
	page02Content2.classList.add('slideLeft');
	page02Blow.classList.add('slideLeft');
	page02ConfetiFront.classList.add('slideDown');
	page02ConfetiBack.classList.add('slideDown');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(lakeFloor);
		new Parallax(tuzlu);
		new Parallax(blow);
		new Parallax(tuzluEyeBall);
		new Parallax(decor);
		new Parallax(cake);
		new Parallax(cloudLeft);
		new Parallax(cloudTop);
		new Parallax(page02FlamingoFrontBlack);
		new Parallax(page02FlamingoFrontPink);
		new Parallax(page02ConfetiFront);
		new Parallax(page02ConfetiBack);
		new Parallax(page02BirdTopRight);
		new Parallax(page02BirdFrontRight);
		new Parallax(page02FireFly);
		new Parallax(fireflyLight);
		new Parallax(flamingos);
		new Parallax(page02FlamingoRightPink);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/3.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[2].play() + (voicePlayer[2].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);
}

const page4 = () => {
	const tuzlu = document.querySelector('.js-page-03-tuzlu');
	const lakeFloor = document.querySelector('.js-page-03-lake-floor');
	const thunder = document.querySelector('.js-page-03-thunder');
	const cloud = document.querySelector('.js-page-03-cloud');
	const rockLeft = document.querySelector('.js-page-03-rock-left');
	const rockLeftDark = document.querySelector('.js-page-03-rock-left-dark');
	const rockRight = document.querySelector('.js-page-03-rock-right');
	const rockRightDark = document.querySelector('.js-page-03-rock-right-dark');
	const flamingoLeft = document.querySelector('.js-page-03-flamingo-left');
	const flamingoLeftGaga = document.querySelector('.js-page-03-flamingo-left-gaga');
	const flamingoLeftGagaDark = document.querySelector('.js-page-03-flamingo-left-gaga-dark');
	const flamingoLeftDark = document.querySelector('.js-page-03-flamingo-left-dark');
	const flamingoRight = document.querySelector('.js-page-03-flamingo-right');
	const flamingoRightDark = document.querySelector('.js-page-03-flamingo-right-dark');
	const flamingoRightWing = document.querySelector('.js-page-03-flamingo-right-wing');
	const flamingoRightWingDark = document.querySelector('.js-page-03-flamingo-right-wing-dark');
	const plantLeft = document.querySelector('.js-page-03-plant-left');
	const plantLeftDark = document.querySelector('.js-page-03-plant-left-dark');
	const plantRight = document.querySelector('.js-page-03-plant-right');
	const plantRightDark = document.querySelector('.js-page-03-plant-right-dark');
	const content = document.querySelector('.js-page-03-content');
	
	tuzlu.classList.add('slideLeft');
	rockLeft.classList.add('slideLeft');
	rockRight.classList.add('slideLeft');
	flamingoLeft.classList.add('slideLeft');
	flamingoLeftGaga.classList.add('slideLeft');
	flamingoRight.classList.add('slideLeft');
	flamingoRightWing.classList.add('slideLeft');
	plantLeft.classList.add('slideLeft');
	plantRight.classList.add('slideLeft');
	content.classList.add('slideLeft');
	thunder.classList.add('flash');
	rockLeftDark.classList.add('show');
	flamingoLeftGagaDark.classList.add('show');
	rockRightDark.classList.add('show');
	flamingoRightWingDark.classList.add('show');
	flamingoLeftDark.classList.add('show');
	flamingoRightDark.classList.add('show');
	plantLeftDark.classList.add('show');
	plantRightDark.classList.add('show');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	setTimeout(() => {
		flamingoRightWing.classList.remove('slideLeft');
		flamingoRightWing.classList.add('HandMove');
		flamingoLeftGaga.classList.remove('slideLeft');
		flamingoLeftGaga.classList.add('talk');
	},2500);

	if(windowWidth > 1023) {
		new Parallax(lakeFloor);
		new Parallax(tuzlu);
		new Parallax(cloud);
		new Parallax(flamingoLeft);
		new Parallax(flamingoLeftDark);
		new Parallax(flamingoLeftGaga);
		new Parallax(flamingoLeftGagaDark);
		new Parallax(flamingoRight);
		new Parallax(flamingoRightDark);
		new Parallax(flamingoRightWing);
		new Parallax(flamingoRightWingDark);
		new Parallax(rockLeft);
		new Parallax(rockLeftDark);
		new Parallax(rockRight);
		new Parallax(rockRightDark);
		new Parallax(plantLeft);
		new Parallax(plantLeftDark);
		new Parallax(plantRight);
		new Parallax(plantRightDark);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/4.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[3].play() + (voicePlayer[3].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);
}

const page5 = () => {
	const tuzlu = document.querySelector('.js-page-04-tuzlu');
	const rock = document.querySelector('.js-page-04-rock');
	const tuzluCloud = document.querySelector('.js-page-04-tuzlu-cloud');
	const tuzluFriend = document.querySelector('.js-page-04-tuzlu-friend');
	const ball = document.querySelector('.js-page-04-ball');
	const content1 = document.querySelector('.js-page-04-content-1');
	const content2 = document.querySelector('.js-page-04-content-2');
	const content3 = document.querySelector('.js-page-04-content-3');
	const footPrint = document.querySelector('.js-page-04-foot-print');
	const tuzluDrink = document.querySelector('.js-page-04-tuzlu-drink');

	rock.classList.add('slideLeft');
	tuzlu.classList.add('slideLeft');
	tuzluCloud.classList.add('fadeIn');
	tuzluFriend.classList.add('fadeIn');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');
	content3.classList.add('slideLeft');
	footPrint.classList.add('slideLeft');
	tuzluDrink.classList.add('fadeIn');
	ball.classList.add('slideLeft');
	sectionsOpen.classList.add('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');
	
	if(windowWidth > 1023) {
		new Parallax(tuzlu);
		new Parallax(rock);
		new Parallax(tuzluCloud);
		new Parallax(tuzluFriend);
		new Parallax(ball);
		new Parallax(tuzluDrink);
		new Parallax(footPrint);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/5.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[4].play() + (voicePlayer[4].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1500);
}

const page6 = () => {
	const lake = document.querySelector('.js-page-05-lake');
	const tuzlu = document.querySelector('.js-page-05-tuzlu');
	const tuzluBody = document.querySelectorAll('.js-tuzlu-image');
	const children = document.querySelector('.js-page-05-children');
	const plant = document.querySelector('.js-page-05-plant');
	const cloudTopBig = document.querySelector('.js-page-05-cloud-top-big');
	const cloudTopLittle = document.querySelector('.js-page-05-cloud-top-little');
	const cloudBottom = document.querySelector('.js-page-05-cloud-bottom');
	const content1 = document.querySelector('.js-page-05-content-1');
	const content2 = document.querySelector('.js-page-05-content-2');
	const content3 = document.querySelector('.js-page-05-content-3');

	tuzluBody.forEach((elem, index) => {
		if (index === 0) {
			elem.style.visibility = 'visible';
		} else {
			elem.style.visibility = 'hidden';
		}
	});
	
	tuzlu.classList.add('slideLeft');
	plant.classList.add('slideLeft');
	children.classList.add('slideLeft');
	cloudTopBig.classList.add('slideLeft');
	cloudTopLittle.classList.add('slideLeft');
	cloudBottom.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');
	content3.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(lake);
		new Parallax(tuzlu);
		new Parallax(children);
		new Parallax(cloudTopBig);
		new Parallax(cloudTopLittle);
		new Parallax(cloudBottom);
		new Parallax(plant);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/6.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[5].play() + (voicePlayer[5].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);

	sequenceInterval = setInterval(changeSrc, 55);
	let counter = 0;
	
	function changeSrc() {
		counter += 1;
		if(counter > 50) {
			tuzluBody[50].style.visibility = 'hidden';
			tuzluBody[0].style.visibility = 'visible';
			counter = 0;
		} else {
			tuzluBody[counter].style.visibility = 'visible';
			tuzluBody[counter - 1].style.visibility = 'hidden';
		}
	}
}

const page7 = () => {
	const tuzluLeft = document.querySelector('.js-page-06-tuzlu-left');
	const tuzluCenter = document.querySelector('.js-page-06-tuzlu-center');
	const tuzluRight = document.querySelector('.js-page-06-tuzlu-right');
	const cloudLeft = document.querySelector('.js-page-06-cloud-left');
	const cloudRight = document.querySelector('.js-page-06-cloud-right');
	const child = document.querySelector('.js-page-06-child');
	const childEyes = document.querySelector('.js-page-06-child-eyes');
	const eyeBrow = document.querySelector('.js-page-06-child-eye-brow');
	const childArm = document.querySelector('.js-page-06-child-arm');
	const content1 = document.querySelector('.js-page-06-content-1');
	const content2 = document.querySelector('.js-page-06-content-2');

	child.classList.add('slideLeft');
	childEyes.classList.add('slideLeft');
	eyeBrow.classList.add('slideLeft');
	childArm.classList.add('slideLeft');
	tuzluLeft.classList.add('slideLeft');
	tuzluCenter.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	setTimeout(() => {
		tuzluCenter.classList.remove('slideLeft');
		tuzluCenter.classList.add('move');
		childArm.classList.remove('slideLeft');
		childArm.classList.add('move');
		eyeBrow.classList.remove('slideLeft');
		eyeBrow.classList.add('move');
		childEyes.classList.remove('slideLeft');
		childEyes.classList.add('move');
	}, 2000);

	tuzluRight.classList.add('slideLeft');
	cloudLeft.classList.add('slideLeft');
	cloudRight.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');

	if(windowWidth > 1023) {
		new Parallax(child);
		new Parallax(childArm);
		new Parallax(childEyes);
		new Parallax(eyeBrow);
		new Parallax(tuzluLeft);
		new Parallax(tuzluCenter);
		new Parallax(tuzluRight);
		new Parallax(cloudLeft);
		new Parallax(cloudRight);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/7.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[6].play() + (voicePlayer[6].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},2000);
}

const page8 = () => {
	const beach = document.querySelector('.js-beach');
	const tuzlu = document.querySelector('.js-page-07-tuzlu');
	const boy = document.querySelector('.js-page-07-boy');
	const handLeft = document.querySelector('.js-page-07-hand-left');
	const handRight = document.querySelector('.js-page-07-hand-right');
	const content = document.querySelector('.js-page-07-content');
	const rota = document.querySelector('.js-page-07-rota');

	tuzlu.classList.add('slideLeft');
	handLeft.classList.add('slideLeft');
	boy.classList.add('slideLeft');
	handRight.classList.add('opacity');
	content.classList.add('slideLeft');
	rota.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(beach);
		new Parallax(tuzlu);
		new Parallax(boy);
		new Parallax(handLeft);
		new Parallax(handRight);
		new Parallax(rota);
	}

	setTimeout(() => {
		tuzlu.classList.remove('slideLeft');
		tuzlu.classList.add('move');
		
		handLeft.classList.remove('slideLeft');
		handLeft.classList.add('opacity');
	}, 2500);

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/8.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[7].play() + (voicePlayer[7].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);
}

const page9 = () => { 
	const tuzlu = document.querySelector('.js-page-08-tuzlu');
	const rabbit = document.querySelector('.js-page-08-rabbit');
	const plants = document.querySelector('.js-page-08-plants');
	const bridge = document.querySelector('.js-page-08-bridge');
	const houses = document.querySelector('.js-page-08-houses');
	const branch = document.querySelector('.js-page-08-branch');
	const content = document.querySelector('.js-page-08-content');
	const tuzluBulut = document.querySelector('.js-tuzlu-bulut');
	const cloudLeft = document.querySelector('.js-page-08-cloud-right');
	const cloudRight = document.querySelector('.js-page-08-cloud-left')
	const mountines = document.querySelector('.js-page-08-mountains');
	const tuzlubBulut = document.querySelectorAll('.js-tuzlu-bulut');
	const rabbitEar = document.querySelectorAll('.js-rabbit-ear');

	tuzlubBulut.forEach((elem, index) => {
		if (index === 0) {
			elem.style.visibility = 'visible';
		} else {
			elem.style.visibility = 'hidden';
		}
	});

	rabbitEar.forEach((elem, index) => {
		if (index === 0) {
			elem.style.visibility = 'visible';
		} else {
			elem.style.visibility = 'hidden';
		}
	});

	rabbit.classList.add('slideLeft');
	plants.classList.add('slideLeft');
	bridge.classList.add('slideLeft');
	houses.classList.add('slideLeft');
	branch.classList.add('slideLeft');
	tuzlu.classList.add('slideLeft');
	content.classList.add('slideLeft');
	cloudLeft.classList.add('slideLeft');
	cloudRight.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(tuzlu);
		new Parallax(rabbit);
		new Parallax(plants);
		new Parallax(bridge);
		new Parallax(houses);
		new Parallax(branch);
		new Parallax(tuzluBulut);
		new Parallax(cloudLeft);
		new Parallax(cloudRight);
		new Parallax(mountines);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/9.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[8].play() + (voicePlayer[8].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);

	sequenceInterval = setInterval(changetTuzluSrc, 30);
	sequenceInterval2 = setInterval(changetRabbitSrc, 30);

	let counterTuzlu = 0;
	let counterRabbit = 0;

	function changetTuzluSrc() {
		counterTuzlu += 1;
		if(counterTuzlu > 39) {
			tuzlubBulut[39].style.visibility = 'hidden';
			tuzlubBulut[0].style.visibility = 'visible';
			counterTuzlu = 0;
		} else {
			tuzlubBulut[counterTuzlu].style.visibility = 'visible';
			tuzlubBulut[counterTuzlu - 1].style.visibility = 'hidden';
		}
	}

	function changetRabbitSrc() {
		counterRabbit += 1;
		if(counterRabbit > 23) {
			rabbitEar[23].style.visibility = 'hidden';
			rabbitEar[0].style.visibility = 'visible';
			counterRabbit = 0;
		} else {
			rabbitEar[counterRabbit].style.visibility = 'visible';
			rabbitEar[counterRabbit - 1].style.visibility = 'hidden';
		}
	}
}

const page10 = () => { 
	const ayseTeyze = document.querySelector('.js-page-09-ayse-teyze');
	const hasanAmca = document.querySelector('.js-page-09-hasan-amca');
	const rasimAmca = document.querySelector('.js-page-09-rasim-amca');
	const ayseTeyzeContent = document.querySelector('.js-page-09-ayse-teyze-content');
	const hasanAmcaContent = document.querySelector('.js-page-09-hasan-amca-content');
	const rasimAmcaContent = document.querySelector('.js-page-09-rasim-amca-content');

	ayseTeyze.classList.add('fadeIn');
	hasanAmca.classList.add('fadeIn');
	rasimAmca.classList.add('fadeIn');
	ayseTeyzeContent.classList.add('fadeIn');
	hasanAmcaContent.classList.add('fadeIn');
	rasimAmcaContent.classList.add('fadeIn');
	sectionsOpen.classList.add('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(ayseTeyze);
		new Parallax(hasanAmca);
		new Parallax(rasimAmca);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/10.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[9].play() + (voicePlayer[9].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);
}

const page11 = () => {
	const clouds = document.querySelector('.js-page-10-clouds');
	const tuzlu = document.querySelector('.js-page-10-tuzlu');
	const sun = document.querySelector('.js-page-10-sun');
	const flamingosLittle = document.querySelector('.js-page-10-flamingos-little');
	const flamingosBack = document.querySelector('.js-page-10-flamingos-back');
	const flamingosMiddle = document.querySelector('.js-page-10-flamingos-middle');
	const flamingosFront = document.querySelector('.js-page-10-flamingos-front');
	const content1 = document.querySelector('.js-page-10-content-1');
	const content2 = document.querySelector('.js-page-10-content-2');
	const tuzluSurf = document.querySelectorAll('.js-tuzlu-surf');

	tuzluSurf.forEach((elem, index) => {
		if (index === 0) {
			elem.style.visibility = 'visible';
		} else {
			elem.style.visibility = 'hidden';
		}
	});

	tuzlu.classList.add('slideLeft');
	flamingosLittle.classList.add('slideLeft');
	flamingosBack.classList.add('slideLeft');
	flamingosMiddle.classList.add('slideLeft');
	flamingosFront.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(clouds);
		new Parallax(tuzlu);
		new Parallax(flamingosLittle);
		new Parallax(flamingosBack);
		new Parallax(flamingosMiddle);
		new Parallax(flamingosFront);
		new Parallax(sun);
	}

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/11.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[10].play() + (voicePlayer[10].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);

	sequenceInterval = setInterval(changeSrc, 30);
	let counter = 0;

	function changeSrc() {
		counter += 1;
		if(counter > 40) {
			tuzluSurf[40].style.visibility = 'hidden';
			tuzluSurf[0].style.visibility = 'visible';
			counter = 0;
		} else {
			tuzluSurf[counter].style.visibility = 'visible';
			tuzluSurf[counter - 1].style.visibility = 'hidden';
		}
	}
}

const page12 = () => {
	const lake = document.querySelector('.js-page-11-lake');
	const clouds = document.querySelector('.js-page-11-clouds');
	const flamingos = document.querySelector('.js-page-11-flamingos');
	const sun = document.querySelector('.page-11-sun');
	const plantRight = document.querySelector('.js-page-11-plant-right');
	const plantLeft = document.querySelector('.js-page-11-plant-left');
	const tuzlu = document.querySelector('.js-page-11-tuzlu');
	const content = document.querySelector('.js-page-11-content');
	const balik = document.querySelector('.js-page-11-balik');
	const karides = document.querySelector('.js-page-11-karides');
	const baliklar = document.querySelector('.js-page-11-baliklar');
	const bubble4 = document.querySelector('.js-page-11-bubble-4');
	const bubble5 = document.querySelector('.js-page-11-bubble-5');
	const vaweLine = document.querySelector('.js-page-11-wave-line');
	const wave = document.querySelector('.js-page-11-wave');
	const tuzluBulut = document.querySelectorAll('.js-page-11-tuzlu-bulut');

	tuzluBulut.forEach((elem, index) => {
		if (index === 0) {
			elem.style.visibility = 'visible';
		} else {
			elem.style.visibility = 'hidden';
		}
	});

	clouds.classList.add('slideLeft');
	flamingos.classList.add('slideLeft');
	plantRight.classList.add('slideLeft');
	plantLeft.classList.add('slideLeft');
	tuzlu.classList.add('slideLeft');
	content.classList.add('fadeIn');
	balik.classList.add('slideLeft');
	baliklar.classList.add('slideLeft');
	karides.classList.add('slideLeft');
	bubble4.classList.add('slideLeft');
	bubble5.classList.add('slideLeft');
	sectionsOpen.classList.remove('blue');
	ysLogoHeader.classList.add('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');
	
	if(windowWidth > 1023) {
		new Parallax(lake);
		new Parallax(sun);
		new Parallax(clouds);
		new Parallax(tuzlu);
		new Parallax(flamingos);
		new Parallax(balik);
		new Parallax(baliklar);
		new Parallax(karides);
		new Parallax(plantRight);
		new Parallax(plantLeft);
		new Parallax(vaweLine);
		new Parallax(wave);
		new Parallax(bubble4);
		new Parallax(bubble5);
	}

	setTimeout(() => {
		flamingos.classList.remove('slideLeft');
		flamingos.classList.add('move');
	}	, 2000);

	windowWidth < 1024 ? voicePlayerMobile.src = './assets/audio/12.mp3' : '';

	setTimeout(() => {
		if(windowWidth > 1023) {
			sound ? voicePlayer[11].play() + (voicePlayer[11].volume = 1) : false
		} else {
			sound ? voicePlayerMobile.play() + (voicePlayerMobile.volume = 1) + musicPlayer.play() + (musicPlayer.volume = 1) : false
		}
	},1000);

	sequenceInterval = setInterval(changeSrc, 30);
	let counter = 0;

	function changeSrc() {
		counter += 1;
		if(counter > 48) {
			tuzluBulut[48].style.visibility = 'hidden';
			tuzluBulut[0].style.visibility = 'visible';
			counter = 0;
		} else {
			tuzluBulut[counter].style.visibility = 'visible';
			tuzluBulut[counter - 1].style.visibility = 'hidden';
		}
	}
}

const page13 = () => {
	const lake = document.querySelector('.js-son-lake');
	const tuzlu = document.querySelectorAll('.js-son-tuzlu');
	const boy = document.querySelectorAll('.js-son-boy');
	const ysLogo = document.querySelectorAll('.js-son-ys-logo');
	const tuzluTitle = document.querySelectorAll('.js-son-tuzlu-title');
	const explan = document.querySelectorAll('.js-son-explanation');
	const shine = document.querySelector('.js-son-shine');
	const shine2 = document.querySelector('.js-son-shine2');
	const shine3 = document.querySelector('.js-son-shine3');
	const social = document.querySelectorAll('.js-son-social');
	const replay = document.querySelectorAll('.js-son-replay');
	const promise = document.querySelectorAll('.js-son-promise');

	lake.classList.add('slideUp');
	tuzlu[0].classList.add('slideUp');
	tuzlu[1].classList.add('slideUp');
	boy[0].classList.add('slideUp');
	boy[1].classList.add('slideUp');
	shine.classList.add('fadeIn');
	shine2.classList.add('fadeIn');
	shine3.classList.add('fadeIn');
	ysLogo[0].classList.add('fadeIn');
	tuzluTitle[0].classList.add('fadeIn');
	tuzluTitle[1].classList.add('fadeIn');
	explan[0].classList.add('fadeIn');
	explan[1].classList.add('fadeIn');
	social[0].classList.add('fadeIn');
	social[1].classList.add('fadeIn');
	replay[0].classList.add('fadeIn');
	replay[1].classList.add('fadeIn');
	promise[0].classList.add('fadeIn');
	promise[1].classList.add('fadeIn');

	ysLogoHeader.classList.remove('fadeIn');
	header.classList.add('fadeIn');
	footer.classList.add('fadeIn');

	if(windowWidth > 1023) {
		new Parallax(boy[0]);
		new Parallax(tuzlu[0]);
		new Parallax(shine);
		new Parallax(shine2);
		new Parallax(shine3);
		new Parallax(lake);
	}
}

function initialization(){
let anchors = ['giris', 'merhaba', 'dogum-gunu', 'birsey-duydum', 'golde-yuruyus', 'bir-planimiz-var', 'yola-koyulduk', 'tasarruf-zamani', 'keyifli-bir-yaz', 'tasarruf-ettik', 'iyilik-bulasicidir', 'benim-mirasim-su', 'son'];

	let fullPage = $('#tuzlu').fullpage({
		anchors: anchors,
		responsiveWidth: 1024,
		onLeave: function(origin, destination, direction){	
			sectionList[origin - 1].classList.add('hide');
			clearInterval(sequenceInterval);
			clearInterval(sequenceInterval2);
      
			// const soundInterval = setInterval(muteSlide, 100);
      // let counter = 1;
      
      // function muteSlide() {
      //   counter -= 0.1;
      //   counter < 0.1 ? clearInterval(soundInterval)  + voicePlayer[origin].pause() + (voicePlayer[0].currentTime = 0) : voicePlayer[0].volume = counter;
      // }

			//Sayfadan ayrıldığında hangi sayfaya gittiğini kontrol ederek ilgili animasyonu çağırıyoruz.
			windowWidth > 1023 && eval(`page${destination}()`);

			// Section menü görünümünü ayarlıyoruz
			if(destination == 1 || destination == 13) {
				sectionsOpen.classList.remove('visible');
				pressKitButton.classList.remove('hidden');
				headerPorfile.classList.remove('hidden');
			} else {
				sectionsOpen.classList.add('visible');
				pressKitButton.classList.add('hidden');
				headerPorfile.classList.add('hidden');
			}

			//Sayfadan ayrıldığında ayrıldığı sayfanın animasyonunu resetliyoruz böylece kullanıcı bu sayfaya tekrar geldiğinde animasyon yeniden başlıyor olacak
			if(windowWidth > 1023) {
				setTimeout(() => {
					const slideLeft = document.querySelector('.getFront').querySelectorAll('.slideLeft');
					const move = document.querySelector('.getFront').querySelectorAll('.move');
					const fadeIn = document.querySelector('.getFront').querySelectorAll('.fadeIn');
					const opacity = document.querySelector('.getFront').querySelectorAll('.opacity');
					const headShake = document.querySelector('.getFront').querySelectorAll('.headShake');
					const slideUp = document.querySelector('.getFront').querySelectorAll('.slideUp');
					const swimming = document.querySelector('.getFront').querySelectorAll('.swimming');
					const slideDown = document.querySelector('.getFront').querySelectorAll('.slideDown');
					const HandMove = document.querySelector('.getFront').querySelectorAll('.HandMove');
					const show = document.querySelector('.getFront').querySelectorAll('.show');
					const flash	= document.querySelector('.getFront').querySelectorAll('.flash');
					const talk = document.querySelector('.getFront').querySelectorAll('.talk');
					slideLeft?.forEach(elem => elem.classList.remove('slideLeft'));
					move?.forEach(elem => elem.classList.remove('move'));
					fadeIn?.forEach(elem => elem.classList.remove('fadeIn'));
					opacity?.forEach(elem => elem.classList.remove('opacity'));
					headShake?.forEach(elem => elem.classList.remove('headShake'));
					slideUp?.forEach(elem => elem.classList.remove('slideUp'));
					swimming?.forEach(elem => elem.classList.remove('swimming'));
					HandMove?.forEach(elem => elem.classList.remove('HandMove'));
					slideDown?.forEach(elem => elem.classList.remove('slideDown'));
					show?.forEach(elem => elem.classList.remove('show'));
					flash?.forEach(elem => elem.classList.remove('show'));
					talk?.forEach(elem => elem.classList.remove('talk'));
				},1700);
			}

			// Section çemberi animasyonu
			sectionsList.forEach(elem => elem.classList.remove('active'));
			sectionsList[destination - 1].classList.add('active');
			pageOrder.innerHTML = destination - 1;
			sectionsCircle.style.cssText = `stroke-dasharray : ${(destination - 1) * 8.9}px , 108.389px`;
		},
		afterLoad: function (anchorLink, index, origin) {
			activeSection = index;
			let activetime;
			sectionList.forEach((elem, indexInner) => {
				indexInner == index - 1
        ?  clearTimeout(activetime) + (activetime = setTimeout(() => sectionList[index - 1].classList.add('getFront'), 100))
				:  elem.classList.remove('getFront', 'hide')
			});

			if(windowWidth <= 1023) {
				voicePlayerMobile.pause() ; 
				voicePlayerMobile.currentTime = 0;

				if (anchorLink == 'giris') {
					page1();
				}
				if (anchorLink == 'merhaba') {
					page2();
				}
				if (anchorLink == 'dogum-gunu') {
					page3();
				}
				if (anchorLink == 'birsey-duydum') {
					page4();
				}
				if (anchorLink == 'golde-yuruyus') {
					page5();
				}
				if (anchorLink == 'bir-planimiz-var') {
					page6();
				}
				if (anchorLink == 'yola-koyulduk') {
					page7();
				}
				if (anchorLink == 'tasarruf-zamani') {
					page8();
				}
				if (anchorLink == 'keyifli-bir-yaz') {
					page9();
				}
				if (anchorLink == 'tasarruf-ettik') {
					page10();
				}
				if (anchorLink == 'iyilik-bulasicidir') {
					page11();
				}
				if (anchorLink == 'benim-mirasim-su') {
					page12();
				}
				if (anchorLink == 'son') {
					page13();
				}
			} else {
				voicePlayer.forEach(voice => {voice.pause() ; voice.currentTime = 0});
			}
		}
	});
}

if(windowWidth > 1023) {
	$(".js-header-profile, .header-profile__box").mouseover(function () {
    $(".header-profile__box").addClass("header-profile__box--show");
		$(".js-mobile-menu-open-icon").hide();
		$(".js-mobile-menu-close-icon").show();		
	});

	$(".js-header-profile, .header-profile__box").mouseout(function () {
			$(".header-profile__box").removeClass("header-profile__box--show");
			$(".js-mobile-menu-open-icon").show();
			$(".js-mobile-menu-close-icon").hide();
	});
} else {
	$(".js-mobile-menu-open-icon").click(function(){
		$(".header-profile__box").addClass("header-profile__box--show");
		$(".js-mobile-menu-open-icon").hide();
		$(".js-mobile-menu-close-icon").show();
		$(".header-profile").addClass('active');
	});

	$(".js-mobile-menu-close-icon").click(function(){
			$(".header-profile__box").removeClass("header-profile__box--show");
			$(".js-mobile-menu-open-icon").show();
			$(".js-mobile-menu-close-icon").hide();
			$(".header-profile").removeClass('active');
	});
}

let currentWidth = window.innerWidth;
let resizeTimeout;

if(currentWidth > 1023) {
	window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        let threshold = 100; // İstediğiniz eşik değerini burada belirleyebilirsiniz

        if (Math.abs(windowHeight - window.innerHeight) > threshold || Math.abs(windowWidth - window.innerWidth) > threshold) {
            location.reload();
        }
    }, 200); // Belirli bir gecikme süresiyle (örneğin 200ms) çalışmasını sağlar
	});
}

window.addEventListener('orientationchange', function() {
	location.reload();
});


// pressKitButton.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_print'});
// });

// startSound.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_story_soundon'});
// });

// startMute.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_story_soundoff'});
// });

// promise.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_end_promise'});
// });

// instagram.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_end_ig'});
// });

// facebook.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_end_fb'});
// });

// twitter.addEventListener('click', () => {
// 	dataLayer.push({'event': 'tuzlu_end_twitter'})
// });

console.log('update 13.5 css animasyonlar iptal edildi');