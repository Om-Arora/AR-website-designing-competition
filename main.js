function displayAR() {
  var div = document.getElementById('ar-div');
  div.innerHTML="<a-scene embedded arjs='sourceType: webcam;'><a-box position='0 0.5 -0.2' material='opacity: 0.5;'></a-box><a-marker-camera preset='hiro'></a-marker-camera></a-scene>";
};

window.onscroll = function () {
  var elements = document.getElementsByClassName('float-in')
  for (var i = 0; i < elements.length; i++) {
    if (window.innerHeight + (window.pageYOffset / 1.8) > elements[i].offsetTop && i < 1){
      elements[i].style.animationPlayState = "running";
    }
    else if (window.innerHeight + (window.pageYOffset / 1.8) > elements[i].offsetTop - 1000 && i == 1){
      elements[i].style.animationPlayState = "running";
    }
    else if (window.innerHeight + (window.pageYOffset / 1.8) > elements[i].offsetTop - 2000 && i == 2){
      elements[i].style.animationPlayState = "running";
      console.log('K');
    }
  }

  var elementsForAppear = document.getElementsByClassName('appear');
  console.log(elementsForAppear);
  console.log(elementsForAppear[1].offsetTop);
  console.log(window.innerHeight + (window.pageYOffset / 1.8));
  for (var j = 0; j < elementsForAppear.length; j++) {
    if (window.innerHeight + (window.pageYOffset / 1.8) > elementsForAppear[j].offsetTop && j < 1){
      elementsForAppear[j].style.animationPlayState = "running";
    }
    else if (window.innerHeight + (window.pageYOffset / 1.8) > elementsForAppear[j].offsetTop - 1000 && j == 1) {
      elementsForAppear[j].style.animationPlayState = "running";
    }
    else if (window.innerHeight + (window.pageYOffset / 1.8) > elementsForAppear[j].offsetTop - 3000 && j == 2) {
      elementsForAppear[j].style.animationPlayState = "running";
    }
  }
};
