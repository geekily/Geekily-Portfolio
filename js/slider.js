/* full-screen-jquery-content-slider
 * <https://github.com/jacobxperez/full-screen-jquery-content-slider>
 * Copyright (C) 2020 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
$(function() {

	// Slider : cyworld -------------------------------------------------------------------------------------------------------
	$(".slider-cyworld").each(function() {
		
		//왼쪽 메뉴를 다시 누르면 첫 화면으로 초기화
		$(".projectLetter:eq(0)").on("click", function() {
			currIndex=0;
			cycleItems();
		});

		var slider = $(this),
			slides = slider.find(".slide-cyworld"),
			totalSlides = slides.length,
			currIndex = 0,
			imgCache = [],
			sliderInterval;

		// fades in and out slides
		function cycleItems() {
			var currSlide = slides.eq(currIndex);

			slides.fadeOut(500).css("z-index", 1);
			currSlide.fadeIn(500).css("z-index", 5);
		} // end cycleItem

		// preload the img before starting the Slider
		(function preloader() {
			if (currIndex < totalSlides) {
				// load img
				imgCache[currIndex] = new Image();
				imgCache[currIndex].src = slides.eq(currIndex).find("img").attr("src");
				imgCache[currIndex].onload = function() {
					currIndex += 1;
					preloader();
				};
			} else {
				currIndex = 0;
				cycleItems();
			}
		}()); // end preloader

		// click on next
		$("#next-slide-cyworld").on("click", function() {
			currIndex += 1;

			if (currIndex > totalSlides - 1) {
				currIndex = 0;
			}

			cycleItems();
		}); // end click of next

		// click on prev
		$("#prev-slide-cyworld").on("click", function() {
			currIndex -= 1;

			if (currIndex < 0) {
				currIndex = totalSlides - 1;
			}

			cycleItems();
		}); // end click on prev
	}); // end Slider


	// Slider : goobne -------------------------------------------------------------------------------------------------------
	$(".slider-goobne").each(function() {

		//왼쪽 메뉴를 다시 누르면 첫 화면으로 초기화
		$(".projectLetter:eq(1)").on("click", function() {
			currIndex=0;
			cycleItems();
		});

		var slider = $(this),
			slides = slider.find(".slide-goobne"),
			totalSlides = slides.length,
			currIndex = 0,
			imgCache = [],
			sliderInterval;

		// fades in and out slides
		function cycleItems() {
			var currSlide = slides.eq(currIndex);

			slides.fadeOut(500).css("z-index", 1);
			currSlide.fadeIn(500).css("z-index", 5);
		} // end cycleItem

		// preload the img before starting the Slider
		(function preloader() {
			if (currIndex < totalSlides) {
				// load img
				imgCache[currIndex] = new Image();
				imgCache[currIndex].src = slides.eq(currIndex).find("img").attr("src");
				imgCache[currIndex].onload = function() {
					currIndex += 1;
					preloader();
				};
			} else {
				currIndex = 0;
				cycleItems();
			}
		}()); // end preloader

		// click on next
		$("#next-slide-goobne").on("click", function() {
			currIndex += 1;

			if (currIndex > totalSlides - 1) {
				currIndex = 0;
			}

			cycleItems();
		}); // end click of next

		// click on prev
		$("#prev-slide-goobne").on("click", function() {
			currIndex -= 1;

			if (currIndex < 0) {
				currIndex = totalSlides - 1;
			}

			cycleItems();
		}); // end click on prev
	}); // end Slider



	// Slider : yanolja -------------------------------------------------------------------------------------------------------
	$(".slider-yanolja").each(function() {

		//왼쪽 메뉴를 다시 누르면 첫 화면으로 초기화
		$(".projectLetter:eq(2)").on("click", function() {
			currIndex=0;
			cycleItems();
		});

		var slider = $(this),
			slides = slider.find(".slide-yanolja"),
			totalSlides = slides.length,
			currIndex = 0,
			imgCache = [],
			sliderInterval;

		// fades in and out slides
		function cycleItems() {
			var currSlide = slides.eq(currIndex);

			slides.fadeOut(500).css("z-index", 1);
			currSlide.fadeIn(500).css("z-index", 5);
		} // end cycleItem

		// preload the img before starting the Slider
		(function preloader() {
			if (currIndex < totalSlides) {
				// load img
				imgCache[currIndex] = new Image();
				imgCache[currIndex].src = slides.eq(currIndex).find("img").attr("src");
				imgCache[currIndex].onload = function() {
					currIndex += 1;
					preloader();
				};
			} else {
				currIndex = 0;
				cycleItems();
			}
		}()); // end preloader

		// click on next
		$("#next-slide-yanolja").on("click", function() {
			currIndex += 1;

			if (currIndex > totalSlides - 1) {
				currIndex = 0;
			}

			cycleItems();
		}); // end click of next

		// click on prev
		$("#prev-slide-yanolja").on("click", function() {
			currIndex -= 1;

			if (currIndex < 0) {
				currIndex = totalSlides - 1;
			}

			cycleItems();
		}); // end click on prev
	}); // end Slider



	// Slider : rhythm power -------------------------------------------------------------------------------------------------------
	$(".slider-rhythm-power").each(function() {

		//왼쪽 메뉴를 다시 누르면 첫 화면으로 초기화
		$(".projectLetter:eq(3)").on("click", function() {
			currIndex=0;
			cycleItems();
		});

		var slider = $(this),
			slides = slider.find(".slide-rhythm-power"),
			totalSlides = slides.length,
			currIndex = 0,
			imgCache = [],
			sliderInterval;
	
		// fades in and out slides
		function cycleItems() {
			var currSlide = slides.eq(currIndex);
	
			slides.fadeOut(500).css("z-index", 1);
			currSlide.fadeIn(500).css("z-index", 5);
		} // end cycleItem
	
		// preload the img before starting the Slider
		(function preloader() {
			if (currIndex < totalSlides) {
				// load img
				imgCache[currIndex] = new Image();
				imgCache[currIndex].src = slides.eq(currIndex).find("img").attr("src");
				imgCache[currIndex].onload = function() {
					currIndex += 1;
					preloader();
				};
			} else {
				currIndex = 0;
				cycleItems();
			}
		}()); // end preloader
	
		// click on next
		$("#next-slide-rhythm-power").on("click", function() {
			currIndex += 1;
	
			if (currIndex > totalSlides - 1) {
				currIndex = 0;
			}
	
			cycleItems();
		}); // end click of next
	
		// click on prev
		$("#prev-slide-rhythm-power").on("click", function() {
			currIndex -= 1;
	
			if (currIndex < 0) {
				currIndex = totalSlides - 1;
			}
	
			cycleItems();
		}); // end click on prev
	}); // end Slider
});