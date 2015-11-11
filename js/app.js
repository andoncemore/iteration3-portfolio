(function(){
	var app = angular.module('Portfolio',['ngRoute', 'duParallax']);

	app.constant('pages',[
		{
			route: 'spaces', 
			time: "Summer 2014",
			people: 2,
			partials:"partials/spaces.html",
			title: "Designing Project Based Learning Spaces",
			squareThumb: "images/spaces_thumbSquare.png",
			thumbnail: "images/spaces_thumb.png",
			heroImage:"images/space_hero.png",
			description:"Transforming a traditional lab based classroom into a room more effective for a project based class through use of design principles and a prototyping cycle",
			introduction: "The goal of this project was to think intentionally about project based learning spaces at Olin College and implement improvements in the space through a prototyping cycle. The changes helped to represent and inform the culture surrounding both the school and the class (Principles of Engineering)"
		},
		{
			route: "boxing",
			time: "Spring 2014",
			partials: "partials/boxing.html",
			people: 5,
			title: "Making Recreational Boxing Safer",
			squareThumb: "images/boxing_thumbSquare.png",
			thumbnail: "images/boxing_thumb.png",
			heroImage: "images/boxing_hero.png",
			description: "Designing a product to have improve the lives of Recreational Boxers through a user oriented, collaborative design process", 
			introduction: "The goal of this project was to design a product for and with Recreational Boxers using a user oriented collaborative design process. This process has shown me how to determine WHAT to build, instead of just how to build it. I also understood that the design process is a very iterative process, and that you should always be iterating on your design frameworks."
		},	
		{
			route: "hand",
			time: "Spring 2014",
			people: 4,
			partials: "partials/hand.html",
			title: "Design of Underactuated Mechanical Hands",
			thumbnail: "images/hands_thumb.png",
			squareThumb: "images/hands_thumbSquare.png",
			heroImage:"images/hands_hero.png",
			description: "Developing a versatile underactuated mechanical hand through the use of a rapid prototyping cycle",
			introduction: "Over a period of six weeks, we were challenged to protype three iterations of a mechanical hands. Each iteration had its own material constraints and only a single motor available. The final design was judged for its versatility in a class competition to test the capabilities of each hand design."
		},
		{
			route: "cardboard",
			time: "Spring 2015",
			people: 3,
			partials: "partials/cardboard.html",
			title: "Empowering an Adaptive Mindset",
			thumbnail: "images/cardboard_thumb.png",
			squareThumb:"images/cardboard_thumbSquare.png",
			heroImage:"images/cardboard_hero.png",
			description: "A film project to empower people, regardless of ability to solve their own problems by adapting the environment around them",
			introduction: "This project was done in collaboration with the Adaptive Design Association with the goal of empowering people, regardless of ability, to solve their own problems by adapting the environment around them. People tend to accept their surroundings as static, and try to conform their bodies to fit their environment. Our goal was to show that the world is not designed perfectly for anyone, so we should adapt it to meet our individual needs. "
		}
	]);

	app.constant('tags',[
		{
			tagName: 'all',
			route: 'all',
			projects: [0,1,2,3]

		},
		{
			tagName: 'mechanical',
			route: 'mechanical',
			project: [0,1,2,3]
		},
		{
			tagName: 'user experience',
			route: 'ux',
			project: [0,1,2,3]
		},
		{
			tagName: 'film',
			route: 'film',
			project: [0,1,2,3]
		},
		{
			tagName: 'art',
			route: 'art',
			projects: [0,1,2,3]

		},
		{
			tagName: 'education',
			route: 'education',
			project: [0,1,2,3]
		},
		{
			tagName: 'space design',
			route: 'space',
			project: [0,1,2,3]
		},
		{
			tagName: 'graphic design',
			route: 'graphic',
			project: [0,1,2,3]
		}
	]);

	app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
 		$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    		$location.hash($routeParams.scrollTo);
    		$anchorScroll();  
    		$location.search('scrollTo', null)
  		});
	});

	app.config(['$routeProvider', 'pages', routeConfigurator]);
	function routeConfigurator($routeProvider, pages){

		$routeProvider.
			when('/home/:tag',{
				templateUrl: 'partials/mainPageBlocks.html',
				controller: 'MainPage'
			}).
			when('/portfolio/:page',{
				templateUrl:'partials/detailPages.html',
				controller: 'DetailPages'
			}).
			when('/blog',{
				templateUrl: 'partials/blog.html',
				controller: 'Blog'
			}).
			otherwise({
				redirectTo: '/home'
			});
	};



	app.controller("PreLoader", function($scope, preloader){
		$scope.isLoading = true;
		$scope.isSuccessful = false;
		console.info('isLoading is true NOW');
		console.time("theclock");
		$scope.percentLoaded = 0;
		$scope.imageLocations = [
			"images/boxing_hero.png",
         	"images/space_hero.png",
         	"images/hands_hero.png",
         	"images/boxing_thumb.png",
         	"images/spaces_thumb.png",
         	"images/hands_thumb.png",
         	"images/hands_hero.png",
         	"images/boxing_hero.png",
         	"images/space_hero.png",
         	"images/spaces_thumbSquare.png",
         	"images/boxing_thumbSquare.png",
         	"images/hands_thumbSquare.png",
/*         	"images/boxing_1.png",
         	"images/boxing_2.png",
         	"images/boxing_3.jpg",
         	"images/boxing_4.png",
         	"images/boxing_5.png",
         	"images/boxing_6.png",
         	"images/boxing_7.png",
         	"images/boxing_8.png",
         	"images/hands_1.png",
         	"images/hands_2.png",
         	"images/hands_3.png",
         	"images/hands_4.png",
         	"images/hands_5.png",
         	"images/hands_6.png",
         	"images/hands_7.png",
         	"images/spaces_1.png",
         	"images/spaces_2.png",
         	"images/spaces_3.png",
         	"images/spaces_4.png",
         	"images/spaces_5.png",
         	"images/spaces_6.png",
         	"images/spaces_7.png",
         	"images/spaces_8.png",
         	"images/spaces_9.png",
         	"images/spaces_10.png",*/





		];

		preloader.preloadImages($scope.imageLocations).then(
			function handleResolve(imageLocations){
				$scope.isLoading = false;
				$scope.isSuccessful = true;
				//console.info('isSuccessful is true NOW');
				//console.timeEnd("theclock");
				//console.info("Preload Successful");
			},
			function handleReject(imageLocation){
				$scope.isLoading = false;
				$scope.isSuccessful = false;
				console.error("Image Failed",imageLocation);
				console.info("Preload Failure");

			},
			function handleNotify(event){
				$scope.percentLoaded = event.percent;
				//console.info("Percent loaded:", event.percent);

			}

		);
	
	});

	app.factory("preloader",function($q, $rootScope, $timeout){
		function Preloader(imageLocations){
			this.imageLocations = imageLocations;
			this.imageCount = this.imageLocations.length;
			this.loadCount = 0;
			this.errorCount = 0;

			this.states = {
				PENDING: 1,
				LOADING: 2,
				RESOLVED: 3,
				REJECTED: 4
			};

			this.state = this.states.PENDING;

			this.deferred = $q.defer();
			this.promise = this.deferred.promise;
		};

		Preloader.preloadImages = function(imageLocations){
			var preloader = new Preloader(imageLocations);
			return (preloader.load());
		};

		Preloader.prototype = {

			constructor: Preloader,

			isInitiated: function isInitiated(){
				return(this.state !== this.states.PENDING);
			},

			isRejected: function isRejected(){
				return(this.state === this.states.REJECTED);
			},

			isResolved: function isResolved(){
				return(this.state === this.states.RESOLVED);
			},

			load: function load(){
				if(this.isInitiated()){
					return(this.promise);
				}
				this.state = this.states.LOADING;
				for(var i=0; i<this.imageCount; i++){
					this.loadImageLocation(this.imageLocations[i])
				}
				return(this.promise);

			},

			handleImageError: function handleImageError(imageLocation){
				this.errorCount++;
				if(this.isRejected()){
					return;
				}
				this.state = this.states.REJECTED;
				this.deferred.reject(imageLocation);

			},

			handleImageLoad: function handleImageLoad(imageLocation){
				this.loadCount++;
				if(this.isRejected()){
					return;
				}
				this.deferred.notify({
					percent: Math.ceil(this.loadCount/this.imageCount*100), imageLocation:imageLocation
				});

				if(this.loadCount ===this.imageCount){
					this.state = this.states.RESOLVED;
					this.deferred.resolve(this.imageLocations);
				}

			},

			loadImageLocation: function loadImageLocation(imageLocation){
				var preloader = this;
				$timeout(function(){
					var image = $(new Image())

					.load(function(event){
						$rootScope.$apply(function(){
							preloader.handleImageLoad(event.target.src)
							preloader = image = event = null
						})
					})

					.error(function(event){
						$rootScope.$apply(function(){
							preloader.handleImageError(event.target.src)
							preloader = image = event = null
						})	
					})

					.prop('src',imageLocation)
				},2000);	

			}
		};
		return(Preloader);
	});

	app.controller("MainController", function($rootScope, $route, pages){
		$rootScope.logoGreen = true;
		var tempFolder = [];
		pages.forEach(function(p){
			tempFolder.push(false);
		});
		$rootScope.articlesRead = tempFolder;
		console.info($rootScope.articlesRead);

	});

	app.controller("MainPage",function($scope, pages, $rootScope,tags, $routeParams){
		$scope.searchTags = tags;
		$scope.isActive = function(viewLocation){
			console.info("call");
			console.info(viewLocation);
			console.info($routeParams.tag);
			console.info(viewLocation === $routeParams.tag);

			return viewLocation === $routeParams.tag;
		};
		$scope.boxContent = pages;
		
		$scope.tagType = tags[0];

		tags.forEach(function(p){
			if(p.tagName === $routeParams.tag){
				$scope.tagType = p;
				
			}
		});

		
	});

	app.controller("Blog", function($scope, $rootScope){

	});


	app.controller("DetailPages", function($scope, pages, $routeParams, parallaxHelper, $rootScope){
		$scope.pageContent = pages[0];
		//Find what specific page I am on
		pages.forEach(function(p){
			if(p.route === $routeParams.page){
				$scope.pageContent = p;
			}
		});

		//Create an array for the number of people in the project
		var range = [];
		for(var i=0;i<$scope.pageContent.people;i++) {
  			range.push(i);
		}
		$scope.range = range;

		//Change the color of the header
		$rootScope.logoGreen=false;

		//Scroll to the top of the window
		window.scrollTo(0,0);

		//Find the Index Value of the current page
		indexValue = pages.indexOf($scope.pageContent);

		//Set the current article to read
		$rootScope.articlesRead[indexValue] = true;


		$scope.nextArticle1 = pages[(indexValue+1)%pages.length];
		$scope.article1read = $rootScope.articlesRead[(indexValue+1)%pages.length];
		console.info("$rootScope.articlesRead");
		$scope.nextArticle2 = pages[(indexValue+2)%pages.length];
		$scope.article2read = $rootScope.articlesRead[(indexValue+2)%pages.length];



		$scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
		$scope.headerImage =  "url("+ $scope.pageContent.heroImage + ")";



	});

})();

jQuery(document).ready(function($){
	$(window).scroll(function() {
		if ($(window).scrollTop() > 50) {
     	 	$('.logo').addClass('scrolled');
     	 	$('.stickyHeader').addClass('scrolled');
    	} else {
      		$('.logo').removeClass('scrolled');
      		$('.stickyHeader').removeClass('scrolled');
    	};
	});	
});




