function changeOption(selected) {
  var option = document.getElementById(selected);
  if(option.classList.contains('selected')) {
    //option.style.borderColor='green';
    option.classList.remove('selected');
  }
  else {
    //option.style.borderColor = 'red';
    switch(option.id) {
    	case 'firstchoice':
    	document.getElementById('secondchoice').classList.remove('selected');
    	document.getElementById('thirdchoice').classList.remove('selected');
    	case 'secondchoice':
    	document.getElementById('firstchoice').classList.remove('selected');
    	document.getElementById('thirdchoice').classList.remove('selected');
    	case 'thirdchoice':
    	document.getElementById('firstchoice').classList.remove('selected');
    	document.getElementById('secondchoice').classList.remove('selected');
    	default: console.log('failed');
    }
    option.classList.add('selected');
  }
  console.log(option.style.borderColor);
}