import "react-p5-wrapper"

function sketch (p) {
	let textblock = "boxing, Manchester United, durian, the Boston Celtics"
	let speed = 1.5
	let xPos
	let element = document.getElementById('interests')
	let width = element.offsetWidth


	p.setup = function() {
	  p.createCanvas(width, 100);
	  xPos = p.width;

	  window.addEventListener('resize', ()=>{
        p.resizeCanvas(width, 100);
        xPos = p.width;
	  })
	}

	p.draw = function() {
	  p.clear();
	  xPos -= speed;
	  p.background('rgba(0,0,0,0)');
	  
	  p.textFont('Bitter');
	  p.textSize(30);
	  p.text(textblock,xPos,90);
	}
};

export default sketch;
