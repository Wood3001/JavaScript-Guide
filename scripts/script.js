//execute the function once the page has finished loading
$(document).ready(function(){


/////////////////FULLPAGE.JS//////////////////////////

    // Initialize the fullpage.js plugin 
    // Declare an object with a series of key:value pairs that tell the plug in to enable auto scrolling, horizontal scrolling, drag and move, loop bottom
    
    new fullpage('#fullpage', {
        licenseKey:'29KOJ-OOV66-K7LN6-IH32I-ZCYNN',
        autoScrolling:true,
        scrollHorizontally: true,
        dragAndMove: false,
        loopBottom: true
    });

/////////////////DROPPER jQUERY ANIMATION//////////////////////////


        // declare a variable that represents the 'spout' element
        var spout = document.querySelector('.spout');
        // animate the spout element back & forth across the board
        gsap.fromTo(spout, {left:'0px'},{left:'40vw', duration: 10, ease:'none', repeat:-1, yoyo:true});
        // declare a variable and set it's value to 1
        var blockNum = 1;
        // declare an array of hex colour values
        var blockColor = ['#bcd8c1', '#d6dbb2', '#e57a44', '#422040'];
        
        // set an event listener to perform an anonymous function when the spout element is clicked
        $('.spout').on('click', function() {
            //add 1 to the blockNum variable
            blockNum += 1;
            //declare a variable that represents a random number between 0 and 1, multiplied by the length of the blockColor array and rounded up to the next integer
            var rand = blockColor[Math.floor(Math.random() * blockColor.length)];
            // declare a varibale that represents a div element with a unique class by concatenating the value of the blockNum variable with the class name, also a second non-unique class
            var block = ('<div class="block' + blockNum + ' brick"></div>');
            // declare a variable that represents the value of the 'left' style attribute of the spout element
            var spoutPos = spout.style.left;
            // insert an element with the characteristics specified in the 'block' variable, after the currently selected element (spout)
            $(this).after(block);
            // declare a variable that represents the unique class of the inserted element
            var numBlock = '.block' + blockNum;
            // assigns a randomly generated color fcrom the blockColor array to the inserted element
            $(numBlock).css('background-color', rand);
            // positions the inserted element at the same 'left' position as the spout element
            $(numBlock).css('left', spoutPos);
            // assigns the inserted element a z-index value equivalent to the number of it's unique class
            // this keeps each new element in front of all the previously inserted ones
            $(numBlock).css('z-index', blockNum);
            // animate the inserted element to drop to the bottom of the board while spinning 360 degress
            // over a duration of 2.5 seconds with a bouncing animation at the end
            $(numBlock).animate({top:'275px', degrees:'360'},2500,'easeOutBounce');
        })
    



/////////////////SLICK SLIDER//////////////////////////

// initialize the 'slick slider' plugin
// Declare an object with a series of key:value pairs that tell the plug in to disable dots, enable infinite scrolling, set speed, slides to show, slides to scroll, enable autoplay, autoplay speed

$('.slick-slider-01').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  /////////////////ACCORDION//////////////////////////

// initialize the jQuery UI accordion
// Declare an object with a series of key:value pairs that set the height style and header element
    $( ".accordion" ).accordion({
      heightStyle: "content",
      header: 'h5',
    });

});

/////////////////POTATOHEAD//////////////////////////


    // declare boolean variables for each type of facial features (+ hats) and set the value of each to 'false'
    var seeEyes = false;
    var seeEars = false;
    var seeMouth = false;
    var seeNose = false;
    var seeHat = false;

    // declare loop counter variables for each type of facial features + hats
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;

    // declare arrays for each type of facial features + hats
    const arrEyeL = ['.eyeL1', '.eyeL2', '.eyeL3'];
    const arrEyeR = ['.eyeR1', '.eyeR2', '.eyeR3'];
    const arrEarL = ['.earL1', '.earL2', '.earL3'];
    const arrEarR = ['.earR1', '.earR2', '.earR3'];
    const arrNose = ['.nose1', '.nose2', '.nose3'];
    const arrMouth = ['.mouth1', '.mouth2', '.mouth3'];
    const arrHat = ['.hat1', '.hat2', '.hat3']

    // declare a function that animates the eyes in or out when the eye button is clicked
    function eyes() {
        // execute the following code if the variable is set to 'false'
        if (seeEyes==false) {
            //animate the first set of eyes to fly in from left & right
            gsap.fromTo(arrEyeL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
            gsap.fromTo(arrEyeR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
            //set the variable to 'true'
            seeEyes = true;
            // if the above condition was not met, execute the code below if the value of the loop counter is equal to or less than the length of the array minus one
        } else if (i <= arrEyeL.length - 1){
            //animate the set of eyes corresponding to the value of the loop counter to fly out to left & right
            gsap.fromTo(arrEyeL[i],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
            gsap.fromTo(arrEyeR[i],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
            //add one to the value of the loop counter
            i++;
            // execute the following code if the value of the loop counter is still equal to or less than the length of the array minus one
            if (i <= arrEyeL.length - 1) {
                //animate the set of eyes corresponding to the value of the loop counter to fly in from left & right
                gsap.fromTo(arrEyeL[i],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
                gsap.fromTo(arrEyeR[i],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
                //set the variable to 'true'
                seeEyes = true;
                // exit the function
                return;
            // if the above condition was not met, execute the code below
            } else {
                // set the loop counter back to zero
                i = 0;
                //set the variable to 'false'
                seeEyes = false;}  
        // if the above condition was not met, execute the code below
        } else {
            //animate the set of eyes corresponding to the value of the loop counter to fly out to left & right
            gsap.fromTo(arrEyeL[i],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
            gsap.fromTo(arrEyeR[i],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
            // set the loop counter back to zero
            i = 0;
            //set the variable to 'false'
            seeEyes = false;
        }
    }

    //ears, nose and mouth functions are basically identical to the eyes function, so I won't bother re-writing the comments.

    function ears() {
        if (seeEars==false) {
            gsap.fromTo(arrEarL[0],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
            gsap.fromTo(arrEarR[0],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
            seeEars = true;
        } else if (j <= arrEarL.length - 1) {
            gsap.fromTo(arrEarL[j],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
            gsap.fromTo(arrEarR[j],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
            j++;
            if (j <= arrEarL.length - 1) {
                gsap.fromTo(arrEarL[j],{x:-200, opacity:0}, {x:0, opacity:1, duration: .5, ease:"bounce"});
                gsap.fromTo(arrEarR[j],{x:200, opacity:0}, {x:0, opacity:1, duration: 1, ease:"bounce"});
                seeEars = true;
                return;
            } else {
                j = 0;
                seeEars = false;}
        } else {
            gsap.fromTo(arrEarL[j],{x:0, opacity:1}, {x:-200, opacity:0, duration: .5, ease:"easeOut"});
            gsap.fromTo(arrEarR[j],{x:0, opacity:1}, {x:200, opacity:0, duration: 1, ease:"easeOut"});
            j = 0;
            seeEars = false;
        }
    }

    function nose() {
        if (seeNose==false) {
            gsap.fromTo(arrNose[0],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
            seeNose = true;
        } else if (k <= arrNose.length - 1) {
            gsap.fromTo(arrNose[k],{y:0, opacity:1}, {y:-500, opacity:0, duration: .5, ease:"easeOut"});
            k++;
            if (k <= arrNose.length - 1) {
                gsap.fromTo(arrNose[k],{y:-500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                seeNose = true;
                return;
            } else {
                k = 0;
                seeNose = false;}
        } else {
            gsap.fromTo(arrNose[k],{y:0, opacity:1}, {y:-500, opacity:0, duration: .5, ease:"easeOut"});
            k = 0;
            seeNose = false;
        }
    }

    function mouth() {
        if (seeMouth==false) {
            gsap.fromTo(arrMouth[0],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
            seeMouth = true;
        } else if (l <= arrMouth.length - 1) {
            gsap.fromTo(arrMouth[l],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
            l++;
            if (l <= arrMouth.length - 1) {
                gsap.fromTo(arrMouth[l],{y:500, opacity:0}, {y:0, opacity:1, duration: .5, ease:"bounce"});
                seeMouth = true;
                return;
            } else {
                l = 0;
                seeMouth = false;}
        } else {
            gsap.fromTo(arrMouth[l],{y:0, opacity:1}, {y:500, opacity:0, duration: .5, ease:"easeOut"});
            l = 0;
            seeMouth = false;
        }
    }

    // declare a function that drops a hat on the potato of the correct combination of facial features are selected
    function hat() {
        // execute the following code of the seeHat variable is 'false'
        if (seeHat==false) {
            // execute the following code if all booleans are true and all loop counters (except hat) are zero 
            if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==0 && j==0 && k==0 && l==0) {
                //animate the first hat to fly in from the top
                gsap.fromTo(".hat1",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
                // set the hat's loop counter to zero
                m = 0;
                // set the hat boolen to true
                seeHat = true;
            // execute the following code if all booleans are true and all loop counters (except hat) are one
            } else if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==1 && j==1 && k==1 && l==1) {
                //animate the second hat to fly in from the top
                gsap.fromTo(".hat2",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
                // set the hat's loop counter to one
                m = 1;
                // set the hat boolen to true
                seeHat = true;
            // execute the following code if all booleans are true and all loop counters (except hat) are two
            } else if (seeEyes==true && seeEars==true && seeNose==true && seeMouth==true && i==2 && j==2 && k==2 && l==2) {
                //animate the third hat to fly in from the top
                gsap.fromTo(".hat3",{y:-500, rotate:-90, opacity:0}, {y:0, rotate:0, opacity:1, duration: 1, ease:"bounce"});
                // set the hat's loop counter to two
                m = 2;
                // set the hat boolen to true
                seeHat = true;
            } else {
                // set the hat boolen to false
                seeHat = false;
                // exit the function
                return;
            }
        // if the above conditions are not met, execute the following code
        } else {
            //animate the current hat to fly out to the top
            gsap.fromTo(arrHat[m],{y:0, opacity:1}, {y:-500, opacity:0, duration: 1, ease:"easeOut"});
            // set the hat boolen to false
            seeHat = false;
        }
    }
