
$('.dropdown-menu input').click(function(e) {
       e.stopPropagation();
   });




//mobile view hide image in modal
function displayInfo() {
   var content = document.querySelector('.modal-body');
   var flexBtns = document.querySelector('.flexBtns');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    closeX = document.createTextNode('X');
    pClose = document.createElement('span');
    pClose.appendChild( closeX );
    pClose.setAttribute("class", "pClose");
    //content.appendChild( pClose );
     flexBtns.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }
//close modal on X click
    pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}


function displayInfo2() {
   var content = document.querySelector('.modal2');
   var flexBtns = document.querySelector('.btns2');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    closeX = document.createTextNode('X');
    pClose = document.createElement('span');
    pClose.appendChild( closeX );
    pClose.setAttribute("class", "pClose");
    //content.appendChild( pClose );
     flexBtns.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}





//////////////////////
//////////////////////
//Display info for tablet +
//

function displayInfoTablet() {
   var content = document.querySelector('.modal-body');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}


function displayInfoTablet2() {
   var content = document.querySelector('.modal2');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet3() {
   var content = document.querySelector('.modal3');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet4() {
   var content = document.querySelector('.modal4');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet5() {
   var content = document.querySelector('.modal5');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet6() {
   var content = document.querySelector('.modal6');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet7() {
   var content = document.querySelector('.modal7');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet8() {
   var content = document.querySelector('.modal8');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}


function displayInfoTablet9() {
   var content = document.querySelector('.modal9');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet10() {
   var content = document.querySelector('.modal10');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

function displayInfoTablet11() {
   var content = document.querySelector('.modal11');
    pText = document.createTextNode( 'Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Mas Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus venenatis turpis. Fusce a purus in nisi luctus interdum ac non augue. Aenean in lacus consequat, vehicula lacus fermentum, lacinia nulla. Nulla imperdiet facilisis velit, at porttitor mauris convallis vel. Suspendisse dictum velit a pellentesque aliquet. Donec vehicula velit nec eros iaculis ornare. Donec vestibulum blandit vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id massa rhoncus, imperdiet odio vel, tempor odio. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. Sed porta est quis lectus mattis dignissim et mattis velit. Morbi elementum in tellus ac finibus. Etiam dolor dolor, congue eget sodales quis, tempor sit amet risus. Maecenas tempor ornare massa eget lacinia. Ut elementum, libero at finibus finibus, velit mauris feugiat eros, sagittis convallis est odio a tellus. Nullam consectetur, eros et elementum vestibulum, urna lacus tempor metus, vel accumsan nibh nisi at urna. Nam at pellentesque nibh, in gravida massa. Ut justo nisi, elementum nec ipsum sit amet, pellentesque consectetur orci. Nunc sed lacus vehicula, convallis ligula sed, tempus ante. Etiam imperdiet efficitur luctus. Fusce convallis faucibus metus at condimentum. Nullam eget enim quis dui dignissim porta eget sit amet justo. Vivamus eget erat ultrices, condimentum justo nec, mollis sem. ' );
    pEl = document.createElement('p');

    //closeX = document.createTextNode('X');
    //pClose = document.createElement('span');
    //pClose.appendChild( closeX );
    //content.appendChild( pClose );

    function closeModal(){
      content.style.display = "none";
    }

    //  pClose.addEventListener("click", closeModal);

    pEl.appendChild( pText );
    pEl.setAttribute("class", "pEl");
    content.appendChild( pEl );

    console.log( content.outerHTML );

}

//
 if(window.innerWidth <= 414){


   var img1 = document.getElementById('modal1Img');
   var img2 = document.getElementById('modal2Img');
   var img3 = document.getElementById('modal3Img');
   var img4 = document.getElementById('modal4Img');
   var img5 = document.getElementById('modal5Img');
   var img6 = document.getElementById('modal6Img');
   var img7 = document.getElementById('modal7Img');
   var img8 = document.getElementById('modal8Img');
   var img9 = document.getElementById('modal9Img');
   var img10 = document.getElementById('modal10Img');
   var img11 = document.getElementById('modal11Img');

  var details = document.querySelector('.details');
    var details2 = document.querySelector('.details2');
      var details3 = document.querySelector('.details3');
        var details4 = document.querySelector('.details4');
          var details5 = document.querySelector('.details5');
            var details6 = document.querySelector('.details6');
              var details7 = document.querySelector('.details7');
                var details8 = document.querySelector('.details8');
                  var details9 = document.querySelector('.details9');
                    var details10 = document.querySelector('.details10');
                      var details11 = document.querySelector('.details11');

    var modal =  document.querySelector('.modal');
     var modal2 =  document.querySelector('.modal2');
      var modal3 =  document.querySelector('.modal3');
       var modal4 =  document.querySelector('.modal4');
        var modal5 =  document.querySelector('.modal5');
         var modal6 =  document.querySelector('.modal6');
          var modal7 =  document.querySelector('.modal7');
            var modal8 =  document.querySelector('.modal8');
              var modal9 =  document.querySelector('.modal9');
                var modal10 =  document.querySelector('.modal10');
                  var modal11 =  document.querySelector('.modal11');

  details.addEventListener('click', function(){
    img1.style.display = "none";
    details.innerHTML = "Close";
    details.addEventListener('click', function(){

    modal.style.display = "none";
    window.location.reload();
    })
  })

  details2.addEventListener('click', function(){
    img2.style.display = "none";
    details2.innerHTML = "Close";
    details2.addEventListener('click', function(){

    modal2.style.display = "none";
    window.location.reload();
    })
  })

  details3.addEventListener('click', function(){
    img3.style.display = "none";
    details3.innerHTML = "Close";
    details3.addEventListener('click', function(){

    modal3.style.display = "none";
    window.location.reload();
    })
  })

  details4.addEventListener('click', function(){
    img4.style.display = "none";
    details4.innerHTML = "Close";
    details4.addEventListener('click', function(){

    modal4.style.display = "none";
    window.location.reload();
    })
  })

  details5.addEventListener('click', function(){
    img5.style.display = "none";
    details5.innerHTML = "Close";
    details5.addEventListener('click', function(){

    modal5.style.display = "none";
    window.location.reload();
    })
  })

  details6.addEventListener('click', function(){
    img6.style.display = "none";
    details6.innerHTML = "Close";
    details6.addEventListener('click', function(){

    modal6.style.display = "none";
    window.location.reload();
    })
  })


  details7.addEventListener('click', function(){
    img7.style.display = "none";
    details7.innerHTML = "Close";
    details7.addEventListener('click', function(){

    modal7.style.display = "none";
    window.location.reload();
    })
  })

  details8.addEventListener('click', function(){
    img8.style.display = "none";
    details8.innerHTML = "Close";
    details8.addEventListener('click', function(){

    modal8.style.display = "none";
    window.location.reload();
    })
  })

  details9.addEventListener('click', function(){
    img9.style.display = "none";
    details9.innerHTML = "Close";
    details9.addEventListener('click', function(){

    modal9.style.display = "none";
    window.location.reload();
    })
  })

  details10.addEventListener('click', function(){
    img10.style.display = "none";
    details10.innerHTML = "Close";
    details10.addEventListener('click', function(){

    modal10.style.display = "none";
    window.location.reload();
    })
  })

  details11.addEventListener('click', function(){
    img11.style.display = "none";
    details11.innerHTML = "Close";
    details11.addEventListener('click', function(){

    modal11.style.display = "none";
    window.location.reload();
    })
  })

}

if(window.innerWidth <= 768){
  var fullscreen = document.querySelector('.fullscreen');
  fullscreen.style.display = "none";
}



if(window.innerWidth >= 769){
  var accordion = document.querySelector('.accordion');
  accordion.style.display = "none";
}
///////////////////////////
//////////////////////////
///Tablet + view /////////
//////////////////////////
//////////////////////////


var tabletBtn = document.querySelector('.details');
  var tabletBtn2 = document.querySelector('.details2');
    var tabletBtn3 = document.querySelector('.details3');
      var tabletBtn4 = document.querySelector('.details4');
        var tabletBtn5 = document.querySelector('.details5');
          var tabletBtn6 = document.querySelector('.details6');
            var tabletBtn7 = document.querySelector('.details7');
              var tabletBtn8 = document.querySelector('.details8');
                var tabletBtn9 = document.querySelector('.details9');
                  var tabletBtn10 = document.querySelector('.details10');
                    var tabletBtn11 = document.querySelector('.details11');
tabletBtn.addEventListener("click", displayInfoTablet);
  tabletBtn2.addEventListener("click", displayInfoTablet2);
      tabletBtn3.addEventListener("click", displayInfoTablet3);
          tabletBtn4.addEventListener("click", displayInfoTablet4);
              tabletBtn5.addEventListener("click", displayInfoTablet5);
                  tabletBtn6.addEventListener("click", displayInfoTablet6);
                      tabletBtn7.addEventListener("click", displayInfoTablet7);
                          tabletBtn8.addEventListener("click", displayInfoTablet8);
                              tabletBtn9.addEventListener("click", displayInfoTablet9);
                                  tabletBtn10.addEventListener("click", displayInfoTablet10);
                                      tabletBtn11.addEventListener("click", displayInfoTablet11);
