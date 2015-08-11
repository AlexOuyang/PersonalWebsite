/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/

// Declare a module
angular.module('ngFilter', []);

// configure the module.
angular.module('ngFilter').controller("MainController", function() {
    var vm = this;
    vm.searchInput = '';
    vm.shows = [{
        title: 'Insatiable Spider (Available on Google Play)',
        tags: 'Game, Adventure, PC, Mobile',
        description: 'You are one BIG-ASS SPIDER with an INSATIABLE hunger!! Eat as much and as fast as you can in this arcade shooter. Earn points by eating and watch as your power grows!',
        img_url: "https://lh3.googleusercontent.com/yjMrN4cT_JIMzDGzsM-M6tpjGSQv7O-rdQtsjq7zipbtOT2eIRi0BazBjghzPs06Pw=w300-rw",
        url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
        year: 2015,
    }, {
        title: 'Powerful Poptart (In Progress)',
        tags: 'Game, Adventure, PC, Mobile',
        description: 'Genetically modified hamster Poptart tries to save his human faimly from an evil hamster.',
        img_url: "http://40.media.tumblr.com/7e322081226ae927914fa73291576873/tumblr_nr9og5UvQh1ua24bso1_1280.png",
        url: "http://nxtlvlgames.tumblr.com/",
        year: 2015,
    }, {
        title: 'Quadcopter (In Progress)',
        tags: 'Hardware, Arduino',
        year: 2015,
        description: "Created and Programmed a Quadcopter with friends.",
        img_url: "https://creativentechno.files.wordpress.com/2012/06/quadcopter_newframe.jpg",
        url: ""
    }, {
        title: 'Entangled',
        tags: 'Web, Front-end, Experiment, Canvas',
        description: 'Canvas animation created using HTML5 Canvas, Javascript + LeapMotion.',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/11082401_889886127751049_7538052958965514474_o.jpg",
        url: "https://github.com/AlexOuyang/Canvas-Animation/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        year: 2014,
    }, {
        title: 'Maze Runner (Depricated Project)',
        tags: 'Game, Puzzle, PC, Mobile',
        description: 'Player switches between first person and third person to solve the maze puzzle',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10616309_767037970035866_2224106353375435192_n.jpg?oh=bee4962b972bda93d5d34b11ff44e879&oe=5635662E",
        url: "",
        year: 2014,
    }, {
        title: 'Entangled',
        tags: 'Art, Web, Front-end, Experiment, Canvas',
        description: 'Canvas animation created using HTML5 Canvas, Javascript + LeapMotion.',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/11082401_889886127751049_7538052958965514474_o.jpg",
        url: "https://github.com/AlexOuyang/Canvas-Animation/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        year: 2014,
    }, {
        title: 'Meca Model - Angle_01',
        tags: 'Art, 3D Modeling, Blender',
        description: 'Meca 3D model that I designed and modeld using Blender in 8 hours',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10458869_722836301122700_7756087119347121235_n.jpg?oh=a996a21cc237e639acc9959a3fd9e6f4&oe=564598E2",
        url: "",
        year: 2014,
    }, {
        title: 'Entangled',
        tags: 'Web, Front-end, Experiment, Canvas',
        description: 'Canvas animation created using HTML5 Canvas, Javascript + LeapMotion.',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/11082401_889886127751049_7538052958965514474_o.jpg",
        url: "https://github.com/AlexOuyang/Canvas-Animation/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        year: 2014,
    }, {
        title: 'Entangled',
        tags: 'Web, Front-end, Experiment, Canvas',
        description: 'Canvas animation created using HTML5 Canvas, Javascript + LeapMotion.',
        img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/11082401_889886127751049_7538052958965514474_o.jpg",
        url: "https://github.com/AlexOuyang/Canvas-Animation/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        year: 2014,
    }];
});