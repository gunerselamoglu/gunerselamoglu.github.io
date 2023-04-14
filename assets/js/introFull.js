// Güner Selamoğlu HavasCX 2022
// Yarının Suyu Tuzlu

const intro = () => {
	const ysLogo = document.querySelector('.js-ys-logo');
	const tuzluTitle = document.querySelector('.js-tuzlu-title');
	const golHikayesi = document.querySelector('.js-gol-hikayesi');
	const introExplan = document.querySelector('.js-intro-explanation');
	const introSky = document.querySelector('.js-intro-sky');
	const cloudLeft = document.querySelector('.js-intro-cloud-left');
	const cloudRight = document.querySelector('.js-intro-cloud-right');
	const introLake = document.querySelector('.js-intro-lake');
	const cloudRightLittle = document.querySelector('.js-intro-cloud-right-little');
	const introLightEffect = document.querySelector('.js-intro-light-effect');
	const introLightEffect2 = document.querySelector('.js-intro-light-effect2');
	const introLightEffect3 = document.querySelector('.js-intro-light-effect3');
	const introTuzlu =  document.querySelector('.js-intro-tuzlu');
	const introWave = document.querySelector('.js-intro-wave');
	const introWater = document.querySelector('.js-intro-water');
	const introPlantGreen = document.querySelector('.js-intro-plant-green');
	const introRockRight = document.querySelector('.js-intro-rock-right');
	const introPlantBlur = document.querySelector('.js-plant-blur');
	const introRockLeft = document.querySelector('.js-intro-rock-left');
	const introFrontBug = document.querySelector('.js-intro-front-bug');
	const introMussel = document.querySelector('.js-intro-mussel');
	const introBubbles = document.querySelector('.js-intro-bubbles');
	const introShrimp = document.querySelector('.js-intro-shrimp');
	const introFishRed  = document.querySelector('.js-intro-fish-red');
	const introFishes = document.querySelector('.js-intro-fishes');
	const introFishShadow = document.querySelector('.js-intro-fish-shadow');
	const cloudLeftLittle = document.querySelector('.js-intro-cloud-left-little');
	const startButton = document.querySelector('.js-intro-start-button');
	const introMountain = document.querySelector('.js-intro-mountain');

	ysLogo.classList.add('fadeIn');
	tuzluTitle.classList.add('fadeIn');
	golHikayesi.classList.add('fadeIn');
	introExplan.classList.add('fadeIn');
	cloudLeft.classList.add('slideUp');
	cloudRight.classList.add('slideUp');
	introLake.classList.add('slideUp');
	cloudRightLittle.classList.add('slideUp');
	introLightEffect.classList.add('fadeIn');
	introLightEffect2.classList.add('fadeIn');
	introLightEffect3.classList.add('fadeIn');
	introSky.classList.add('slideUp');
	introTuzlu.classList.add('slideUp');
	introMountain.classList.add('slideUp');

	setTimeout(() => {
		introTuzlu.classList.remove('slideUp');
		introTuzlu.classList.add('swimming');
	}, 3000);

	introWave.classList.add('slideUp');
	introWater.classList.add('slideUp');
	introPlantGreen.classList.add('slideUp');
	introRockRight.classList.add('slideUp');
	introPlantBlur.classList.add('slideUp');
	introRockLeft.classList.add('slideUp');
	introFrontBug.classList.add('slideUp');
	introMussel.classList.add('slideUp');
	introBubbles.classList.add('fadeIn');
	introShrimp.classList.add('slideUp');
	introFishRed.classList.add('slideLeft');
	introFishes.classList.add('slideLeft');
	introFishShadow.classList.add('slideLeft');
	cloudLeftLittle.classList.add('slideUp');
	startButton.classList.add('fadeIn');
	// ysLogoHeader.classList.remove('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	new Parallax(introLightEffect);
	new Parallax(introLightEffect2);
	new Parallax(introLightEffect3);
	new Parallax(cloudLeft);
	new Parallax(cloudLeftLittle);
	new Parallax(cloudRight);
	new Parallax(cloudRightLittle);
	new Parallax(introTuzlu);
	new Parallax(introWave);
	new Parallax(introWater);
	new Parallax(introLake);
	new Parallax(introRockLeft);
	new Parallax(introMountain);
	new Parallax(introFrontBug);
	new Parallax(introRockRight);
	new Parallax(introShrimp);
	new Parallax(introPlantBlur);
	new Parallax(introPlantGreen);
	new Parallax(introMussel);
	new Parallax(introBubbles);
	
	
	// voicePlayer.src = './assets/assets-tuzlu/audio/1.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// },2500);
}

const page01 = () => {
	const page01Lake = document.querySelector('.js-page-01-lake');
	const page01CloudRight = document.querySelector('.js-page-01-cloud-right');
	const page01CloudSmall = document.querySelector('.js-page-01-cloud-small');
	const page01PlantLeft = document.querySelector('.js-page-01-plant-left');
	const page01PlantMiddle = document.querySelector('.js-page-01-plant-middle');
	const page01PlantRight = document.querySelector('.js-page-01-plant-right');
	const page01Tuzlu = document.querySelector('.js-page-01-tuzlu');
	const page01Flamingos = document.querySelector('.js-page-01-flamingos');
	const page01Content = document.querySelector('.js-page-01-content');
	const yusufcuk = document.querySelector('.js-page-01-yusufcuk');
	

	page01Lake.classList.add('slideLeft');
	page01PlantLeft.classList.add('slideLeft');
	page01PlantMiddle.classList.add('slideLeft');
	page01PlantRight.classList.add('slideLeft');
	page01Tuzlu.classList.add('slideLeft');
	page01Flamingos.classList.add('slideLeft');
	page01Content.classList.add('slideLeft');
	page01CloudRight.classList.add('slideLeft');
	page01CloudSmall.classList.add('slideLeft');
	//ysLogoHeader.classList.add('fadeIn');
	// sectionsOpen.classList.remove('blue');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	//voicePlayer.src = './assets/assets-tuzlu/audio/2.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// },1000);

	new Parallax(page01Tuzlu);
	new Parallax(page01PlantRight);
	new Parallax(page01PlantLeft);
	new Parallax(page01PlantMiddle);

	const sequenceInterval = setInterval(changeSrc, 70);
	let counter = 0;
	
	function changeSrc() {
		counter += 1;
		counter > 59 ? clearInterval(sequenceInterval) : yusufcuk.setAttribute('src', `./assets/assets-tuzlu/img/page-01/yusufcuk/snk${counter}.png`)
	}

	changeSrc();
}

const page02 = () => {
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
	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// voicePlayer.src = './assets/assets-tuzlu/audio/3.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// },1000);
}

const page03 = () => {
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
	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	setTimeout(() => {
		flamingoRightWing.classList.remove('slideLeft');
		flamingoRightWing.classList.add('HandMove');
		flamingoLeftGaga.classList.remove('slideLeft');
		flamingoLeftGaga.classList.add('talk');
	},2500);

	// voicePlayer.src = './assets/assets-tuzlu/audio/4.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// },1000);
}

const page04 = () => {
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

	new Parallax(tuzlu);
	new Parallax(rock);
	new Parallax(tuzluCloud);
	new Parallax(tuzluFriend);
	new Parallax(ball);
	new Parallax(tuzluDrink);
	new Parallax(footPrint);
	

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
	// sectionsOpen.classList.add('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// voicePlayer.src = './assets/assets-tuzlu/audio/5.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 5500);
}

const page05 = () => {
	const lake = document.querySelector('.js-page-05-lake');
	const tuzlu = document.querySelector('.js-page-05-tuzlu');
	const tuzluImage = document.querySelector('.js-tuzlu-image');
	const children = document.querySelector('.js-page-05-children');
	const plant = document.querySelector('.js-page-05-plant');
	const cloudTopBig = document.querySelector('.js-page-05-cloud-top-big');
	const cloudTopLittle = document.querySelector('.js-page-05-cloud-top-little');
	const cloudBottom = document.querySelector('.js-page-05-cloud-bottom');
	const content1 = document.querySelector('.js-page-05-content-1');
	const content2 = document.querySelector('.js-page-05-content-2');
	const content3 = document.querySelector('.js-page-05-content-3');
	
	tuzlu.classList.add('slideLeft');
	plant.classList.add('slideLeft');
	children.classList.add('slideLeft');
	cloudTopBig.classList.add('slideLeft');
	cloudTopLittle.classList.add('slideLeft');
	cloudBottom.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');
	content3.classList.add('slideLeft');

	new Parallax(lake);
	new Parallax(tuzlu);
	new Parallax(children);
	new Parallax(cloudTopBig);
	new Parallax(cloudTopLittle);
	new Parallax(cloudBottom);
	new Parallax(plant);

	const sequenceInterval = setInterval(changeSrc, 55);
	let counter = 0;

	function changeSrc() {
		counter += 1;
		counter > 49 ? counter = 0: tuzluImage.setAttribute('src', `./assets/assets-tuzlu/img/page-05/tuzlu-body/tuzlu_body_${counter}.png`);
	}

	changeSrc();

	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// setTimeout(() => {
	// 	tuzlu.classList.remove('slideLeft');
	// 	tuzlu.classList.add('headShake');
	// }, 6000);

	// voicePlayer.src = './assets/assets-tuzlu/audio/6.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 3000);
}

const page06 = () => {
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
	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

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

	new Parallax(child);
	new Parallax(childArm);
	new Parallax(childEyes);
	new Parallax(eyeBrow);
	new Parallax(tuzluLeft);
	new Parallax(tuzluCenter);
	new Parallax(tuzluRight);
	new Parallax(cloudLeft);
	new Parallax(cloudRight);

	tuzluRight.classList.add('slideLeft');
	cloudLeft.classList.add('slideLeft');
	cloudRight.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');
	// sectionsOpen.classList.remove('blue');

	// voicePlayer.src = './assets/assets-tuzlu/audio/7.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 2000);
}

const page07 = () => {
	const beach = document.querySelector('.js-beach');
	const tuzlu = document.querySelector('.js-page-07-tuzlu');
	const boy = document.querySelector('.js-page-07-boy');
	const handLeft = document.querySelector('.js-page-07-hand-left');
	const handRight = document.querySelector('.js-page-07-hand-right');
	const content = document.querySelector('.js-page-07-content');
	const rota = document.querySelector('.js-page-07-rota');

	new Parallax(beach);
	new Parallax(tuzlu);
	new Parallax(boy);
	new Parallax(handLeft);
	new Parallax(handRight);
	new Parallax(rota);

	tuzlu.classList.add('slideLeft');
	handLeft.classList.add('slideLeft');
	boy.classList.add('slideLeft');
	handRight.classList.add('opacity');
	content.classList.add('slideLeft');
	rota.classList.add('slideLeft');

	setTimeout(() => {
		tuzlu.classList.remove('slideLeft');
		tuzlu.classList.add('move');
		
		handLeft.classList.remove('slideLeft');
		handLeft.classList.add('opacity');
	}, 2500);
	
	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// voicePlayer.src = './assets/assets-tuzlu/audio/8.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 3000);
}

const page08 = () => { 
	const tuzlu = document.querySelector('.js-page-08-tuzlu');
	const rabbit = document.querySelector('.js-page-08-rabbit');
	const rabbitEar = document.querySelector('.js-rabbit-ear');
	const plants = document.querySelector('.js-page-08-plants');
	const bridge = document.querySelector('.js-page-08-bridge');
	const houses = document.querySelector('.js-page-08-houses');
	const branch = document.querySelector('.js-page-08-branch');
	const content = document.querySelector('.js-page-08-content');
	const tuzluBulut = document.querySelector('.js-tuzlu-bulut');
	const cloudLeft = document.querySelector('.js-page-08-cloud-right');
	const cloudRight = document.querySelector('.js-page-08-cloud-left')
	const mountines = document.querySelector('.js-page-08-mountains');

	rabbit.classList.add('slideLeft');
	plants.classList.add('slideLeft');
	bridge.classList.add('slideLeft');
	houses.classList.add('slideLeft');
	branch.classList.add('slideLeft');
	tuzlu.classList.add('slideLeft');
	content.classList.add('slideLeft');
	cloudLeft.classList.add('slideLeft');
	cloudRight.classList.add('slideLeft');

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

	const tuzluInterval = setInterval(changeTuzluSrc, 30);
	const rabbitInterval = setInterval(changeRabbitSrc, 30);
	
	let counterTuzlu = 0;
	let counterEar = 0;
	
	function changeTuzluSrc() {
		counterTuzlu += 1;
		counterTuzlu > 38 ? counterTuzlu = 0 : tuzluBulut.setAttribute('src', `./assets/assets-tuzlu/img/page-08/tuzlu-bulut/tuzlu_bulut_${counterTuzlu}.png`)
	}

	function changeRabbitSrc() {
		counterEar += 1;
		counterEar > 22 ? counterEar = 0 : rabbitEar.setAttribute('src', `./assets/assets-tuzlu/img/page-08/rabbit/rabbit_${counterEar}.png`)
	}

	changeTuzluSrc();
	changeRabbitSrc();

	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// voicePlayer.src = './assets/assets-tuzlu/audio/9.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 1000);
}

const page09 = () => { 
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

	new Parallax(ayseTeyze);
	new Parallax(hasanAmca);
	new Parallax(rasimAmca);
	// sectionsOpen.classList.add('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');
	
	// voicePlayer.src = './assets/assets-tuzlu/audio/10.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 1000);
}

const page10 = () => { 
	const clouds = document.querySelector('.js-page-10-clouds');
	const tuzlu = document.querySelector('.js-page-10-tuzlu');
	const tuzluSurf = document.querySelector('.js-tuzlu-surf');
	const sun = document.querySelector('.js-page-10-sun');
	const flamingosLittle = document.querySelector('.js-page-10-flamingos-little');
	const flamingosBack = document.querySelector('.js-page-10-flamingos-back');
	const flamingosMiddle = document.querySelector('.js-page-10-flamingos-middle');
	const flamingosFront = document.querySelector('.js-page-10-flamingos-front');
	const content1 = document.querySelector('.js-page-10-content-1');
	const content2 = document.querySelector('.js-page-10-content-2');

	tuzlu.classList.add('slideLeft');
	flamingosLittle.classList.add('slideLeft');
	flamingosBack.classList.add('slideLeft');
	flamingosMiddle.classList.add('slideLeft');
	flamingosFront.classList.add('slideLeft');
	content1.classList.add('slideLeft');
	content2.classList.add('slideLeft');

	new Parallax(clouds);
	new Parallax(tuzlu);
	new Parallax(flamingosLittle);
	new Parallax(flamingosBack);
	new Parallax(flamingosMiddle);
	new Parallax(flamingosFront);
	new Parallax(sun);
	
	const tuzluInterval = setInterval(changeTuzluSrc, 30);
	
	let counterTuzlu = 0;
	
	function changeTuzluSrc() {
		counterTuzlu > 39 ? counterTuzlu = 0 : tuzluSurf.setAttribute('src', `./assets/assets-tuzlu/img/page-10/tuzlu-surf/tuzlu_surf_${counterTuzlu}.png`);
		counterTuzlu += 1;
	}

	changeTuzluSrc();

	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');
	
	// voicePlayer.src = './assets/assets-tuzlu/audio/11.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 1000);
}

const page11 = () => {
	const lake = document.querySelector('.js-page-11-lake');
	const clouds = document.querySelector('.js-page-11-clouds');
	const flamingos = document.querySelector('.js-page-11-flamingos');
	const sun = document.querySelector('.page-11-sun');
	const plantRight = document.querySelector('.js-page-11-plant-right');
	const plantLeft = document.querySelector('.js-page-11-plant-left');
	const tuzlu = document.querySelector('.js-page-11-tuzlu');
	const tuzluBulut = document.querySelector('.js-page-11-tuzlu-bulut');
	const content = document.querySelector('.js-page-11-content');
	const balik = document.querySelector('.js-page-11-balik');
	const karides = document.querySelector('.js-page-11-karides');
	const baliklar = document.querySelector('.js-page-11-baliklar');
	const bubble4 = document.querySelector('.js-page-11-bubble-4');
	const bubble5 = document.querySelector('.js-page-11-bubble-5');
	const vaweLine = document.querySelector('.js-page-11-wave-line');
	const wave = document.querySelector('.js-page-11-wave');

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

	setTimeout(() => {
		const tuzluInterval = setInterval(changeTuzluSrc, 30);
		let counterTuzlu = 0;
		
		function changeTuzluSrc() {
			counterTuzlu > 49 ? counterTuzlu = 0 : tuzluBulut.setAttribute('src', `./assets/assets-tuzlu/img/page-11/tuzlu_bulut/tuzlu_bulut_${counterTuzlu}.png`);
			counterTuzlu += 1;
		};

		flamingos.classList.remove('slideLeft');
		flamingos.classList.add('move');
	}	, 2000);
	
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
	new Parallax(bubble5)

	// sectionsOpen.classList.remove('blue');
	// ysLogoHeader.classList.add('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	// voicePlayer.src = './assets/assets-tuzlu/audio/12.mp3';

	// setTimeout(() => {
	// 	sound ? voicePlayer.play() + (voicePlayer.volume = 1) : false;
	// }, 1000);
}

const son = () => { 
	const lake = document.querySelector('.js-son-lake');
	const tuzlu = document.querySelector('.js-son-tuzlu');
	const boy = document.querySelector('.js-son-boy');
	const ysLogo = document.querySelector('.js-son-ys-logo');
	const tuzluTitle = document.querySelector('.js-son-tuzlu-title');
	const explan = document.querySelector('.js-son-explanation');
	const shine = document.querySelector('.js-son-shine');
	const shine2 = document.querySelector('.js-son-shine2');
	const shine3 = document.querySelector('.js-son-shine3');
	const social = document.querySelector('.js-son-social');
	const replay = document.querySelector('.js-son-replay');
	const promise = document.querySelector('.js-son-promise');

	lake.classList.add('slideUp');
	tuzlu.classList.add('slideUp');
	boy.classList.add('slideUp');
	shine.classList.add('fadeIn');
	shine2.classList.add('fadeIn');
	shine3.classList.add('fadeIn');
	ysLogo.classList.add('fadeIn');
	tuzluTitle.classList.add('fadeIn');
	explan.classList.add('fadeIn');
	social.classList.add('fadeIn');
	replay.classList.add('fadeIn');
	promise.classList.add('fadeIn');

	//
	// ysLogoHeader.classList.remove('fadeIn');
	// header.classList.add('fadeIn');
	// footer.classList.add('fadeIn');

	new Parallax(boy);
	new Parallax(tuzlu);
	new Parallax(shine);
	new Parallax(shine2);
	new Parallax(shine3);
	new Parallax(lake);
}

let fullPage = $('#tuzlu').fullpage({
	anchors: ['giris',],
	responsiveWidth: 1024,
	onLeave: function(origin, destination, direction){
		var params = {
				origin: origin,
				destination:destination,
				direction: direction
		};
		sectionList[origin - 1].classList.add('hide');
		
    const soundInterval = setInterval(changeSrc, 70);
    let counter = 1;
    
    function changeSrc() {
      counter -= 0.1;
      counter < 0.1 ? clearInterval(soundInterval)  + voicePlayer.pause() + (voicePlayer.currentTime = 0) : voicePlayer.volume = counter;
    }
    
	},
	afterLoad: function (anchorLink, index, origin) {
		if (anchorLink == 'giris') {
			page01();
		}
	}
});

const mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// let gyroScope = mobileAndTabletCheck() ? 'gyroscope' : 'mouse';

// $.parallaxify({
// 	positionProperty: 'transform',
// 	responsive: true,
// 	motionType: 'natural',
// 	mouseMotionType: 'gaussian',
// 	motionAngleX: 80,
// 	motionAngleY: 80,
// 	alphaFilter: 0.5,
// 	adjustBasePosition: true,
// 	alphaPosition: 0.025,
// 	useMouseMove: true,
//   useGyroscope: true,
// 	inputPriority: gyroScope,
// });
