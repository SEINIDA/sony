document.addEventListener('DOMContentLoaded', function() {

	const $slides = document.querySelectorAll('header>.slides > .slides-container > p');
	const $indicators = document.querySelectorAll('header>.slides > .slides-pagination > li > a');
	
	const $btnPrev = document.querySelector('header>.slides > a.prev');
	const $btnNext = document.querySelector('header>.slides > a.next');

	const $btnAuto = document.querySelector('header>.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*5); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$slides[nowIdx].classList.add('on');
	$indicators[nowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$indicators.forEach(function($indicator, idx){

		$indicator.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

			//이전 인디케이터 비활성화
			$indicators[oldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$indicators[nowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$slides[oldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$slides[nowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		oldIdx = nowIdx;

		if(nowIdx<4){
			nowIdx++;
		}else{
			nowIdx=0;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$btnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=4;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$btnAuto.addEventListener('click', function() {
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.click();
			}, 2000);
		}
	});



	const $sectionslides = document.querySelectorAll('section>.slides > .slides-container > p');
	const $sectionindicators = document.querySelectorAll('section>.slides > .slides-pagination > li > a');
	
	const $sectionbtnPrev = document.querySelector('section>.slides > a.prev');
	const $sectionbtnNext = document.querySelector('section>.slides > a.next');

	const $sectionbtnAuto = document.querySelector('section>.slides>.btn_auto'); //자동재생 버튼

	let sectionintervalKey = null;

	let sectionnowIdx = Math.floor(Math.random()*5); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let sectionoldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$sectionslides[sectionnowIdx].classList.add('on');
	$sectionindicators[sectionnowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$sectionindicators.forEach(function($sectionindicator, idx){

		$sectionindicator.addEventListener('click', function(evt){
			evt.preventDefault();

			sectionoldIdx = sectionnowIdx;
			sectionnowIdx = idx;

			//이전 인디케이터 비활성화
			$sectionindicators[sectionoldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$sectionindicators[sectionnowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$sectionslides[sectionoldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$sectionslides[sectionnowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$sectionbtnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		sectionoldIdx = sectionnowIdx;

		if(sectionnowIdx<4){
			sectionnowIdx++;
		}else{
			sectionnowIdx=0;
		}

		//이전 인디케이터 비활성화
		$sectionindicators[sectionoldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$sectionindicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$sectionslides[sectionoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$sectionslides[sectionnowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$sectionbtnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		sectionoldIdx = sectionnowIdx;

		if(sectionnowIdx>0){
			sectionnowIdx--;
		}else{
			sectionnowIdx=4;
		}

		//이전 인디케이터 비활성화
		$sectionindicators[sectionoldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$sectionindicators[sectionnowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$sectionslides[sectionoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$sectionslides[sectionnowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$sectionbtnAuto.addEventListener('click', function(evt) {
		evt.preventDefault();
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(sectionintervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			sectionintervalKey = setInterval(function() {
				
				$sectionbtnNext.click();
			}, 2000);
		}
	});

	
	const $bigslides = document.querySelectorAll('section>.bigslides > .slides-container > p');
	const $bigindicators = document.querySelectorAll('section>.bigslides > .slides-pagination > li > a');
	
	const $bigbtnPrev = document.querySelector('section>.bigslides > a.prev');
	const $bigbtnNext = document.querySelector('section>.bigslides > a.next');

	const $bigbtnAuto = document.querySelector('section>.bigslides>.btn_auto'); //자동재생 버튼

	let bigintervalKey = null;

	let bignowIdx = Math.floor(Math.random()*5); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let bigoldIdx = bignowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$bigslides[bignowIdx].classList.add('on');
	$bigindicators[bignowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$bigindicators.forEach(function($bigindicator, idx){

		$bigindicator.addEventListener('click', function(evt){
			evt.preventDefault();

			bigoldIdx = bignowIdx;
			bignowIdx = idx;

			//이전 인디케이터 비활성화
			$bigindicators[bigoldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$bigindicators[bignowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$bigslides[bigoldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$bigslides[bignowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$bigbtnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		bigoldIdx = bignowIdx;

		if(bignowIdx<4){
			bignowIdx++;
		}else{
			bignowIdx=0;
		}

		//이전 인디케이터 비활성화
		$bigindicators[bigoldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$bigindicators[bignowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$bigslides[bigoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$bigslides[bignowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$bigbtnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		bigoldIdx = bignowIdx;

		if(bignowIdx>0){
			bignowIdx--;
		}else{
			bignowIdx=4;
		}

		//이전 인디케이터 비활성화
		$bigindicators[bigoldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$bigindicators[bignowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$bigslides[bigoldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$bigslides[bignowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$bigbtnAuto.addEventListener('click', function(evt) {
		evt.preventDefault();
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(bigintervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			bigintervalKey = setInterval(function() {
				$bigbtnNext.click();
			}, 2000);
		}
	});

	


	
	const $smallslides = document.querySelectorAll('section>.smallslides > .slides-container > p');
	const $smallindicators = document.querySelectorAll('section>.smallslides > .slides-pagination > li > a');
	
	const $smallbtnPrev = document.querySelector('section>.smallslides > a.prev');
	const $smallbtnNext = document.querySelector('section>.smallslides > a.next');

	const $smallbtnAuto = document.querySelector('section>.smallslides>.btn_auto'); //자동재생 버튼

	let smallintervalKey = null;

	let smallnowIdx = Math.floor(Math.random()*5); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let smalloldIdx = smallnowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$smallslides[smallnowIdx].classList.add('on');
	$smallindicators[smallnowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$smallindicators.forEach(function($smallindicator, idx){

		$smallindicator.addEventListener('click', function(evt){
			evt.preventDefault();

			smalloldIdx = smallnowIdx;
			smallnowIdx = idx;

			//이전 인디케이터 비활성화
			$smallindicators[smalloldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$smallindicators[smallnowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$smallslides[smalloldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$smallslides[smallnowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$smallbtnNext.addEventListener('click', function(evt){
		evt.preventDefault();
		smalloldIdx = smallnowIdx;

		if(smallnowIdx<1){
			smallnowIdx++;
		}else{
			smallnowIdx=0;
		}

		//이전 인디케이터 비활성화
		$smallindicators[smalloldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$smallindicators[smallnowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$smallslides[smalloldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$smallslides[smallnowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$smallbtnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		smalloldIdx = smallnowIdx;

		if(smallnowIdx>0){
			smallnowIdx--;
		}else{
			smallnowIdx=1;
		}

		//이전 인디케이터 비활성화
		$smallindicators[smalloldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$smallindicators[smallnowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$smallslides[smalloldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$smallslides[smallnowIdx].classList.add('on');
	});

	//원버튼 자동재생
	$smallbtnAuto.addEventListener('click', function(evt) {
		evt.preventDefault();
		if (this.classList.contains('pause')) {
			//play중이면…. => pause 클래스가 붙어 있으면…
			//1. pause 클래스 제거
			this.classList.remove('pause');

			//2. 인터벌 중지
			clearInterval(smallintervalKey);
		} else {
			//멈춰있으면…. => pause 클래스가 붙어 있지 않으면…
			//1. pause 클래스 추가
			this.classList.add('pause');

			//2. setInterval()로 반복 실행
			smallintervalKey = setInterval(function() {
				$smallbtnNext.click();
			}, 2000);
		}
	});


		const $gnb = $('#wrap > header > .container > nav > .gnb');
		const $lnb = $gnb.find('.lnb');
		const $bg_lnb = $('.bg_lnb');
		const $lnbone = $('.lnbone'); 
		const $lnbtwo = $('.lnbtwo'); 
		const $lnbthree = $('.lnbthree'); 
		const $lnbfour = $('.lnbfour'); 
		const $lnbfive = $('.lnbfive'); 

		$gnb.on('mouseenter', function(){
			$bg_lnb.stop().slideDown(50);//배경판 노출
			$lnbone.stop().slideDown(50);//서브메뉴 노출
			$lnbtwo.stop().slideDown(50);//서브메뉴 노출
			$lnbthree.stop().slideDown(50);//서브메뉴 노출
			$lnbfour.stop().slideDown(50);//서브메뉴 노출
			$lnbfive.stop().slideDown(50);//서브메뉴 노출
			// $bg_lnb.stop().fadeIn(50);//배경판 노출
			// $lnb.stop().fadeIn(50);//서브메뉴 노출
		});
	
		$gnb.on('mouseleave', function(){
			$lnbone.stop().slideUp(50);
			$lnbtwo.stop().slideUp(50);
			$lnbthree.stop().slideUp(50);
			$lnbfour.stop().slideUp(50);
			$lnbfive.stop().slideUp(50);
			$bg_lnb.stop().slideUp(50);
			// $lnb.stop().fadeOut(50);
			// $bg_lnb.stop().fadeOut(50);
		});
	
		$bg_lnb.on('mouseover', function(){
			$gnb.trigger('mouseover');
		});
		
		$bg_lnb.on('mouseout', function(){
			$gnb.trigger('mouseout');        
		});
		
	
});