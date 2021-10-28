const progressBar = document.getElementsByClassName('progress-bar')[0];
//5 ms
setInterval(() => {

    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    //here we are incrementing the width of the variable so use setProperty
    progressBar.style.setProperty('--width',width + 0.1);
},5);

//here it just runs every 5 ms but if it overflows as we have handled the maxwidth prop it can take care of it self and make it not overflow.