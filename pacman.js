var px = 100; //x do pacman
var py = 100; //y do pacman
var posX, posY; //x e y do quadrado
var pColuna;
var pLinha;
var tamBloco = 40;
var img;
var colisao = false;

cenario = [
	["#", "#", "#", "#", "#", "v", "#", "#", "#", "#"],
	["#", "v", "v", "v", "#", "v", "v", "v", "v", "#"],
	["#", "v", "v", "v", "v", "v", "v", "v", "v", "#"],
	["#", "v", "v", "v", "v", "v", "v", "v", "v", "#"],
	["v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
	["#", "v", "v", "v", "v", "v", "v", "v", "v", "#"],
	["#", "v", "v", "v", "v", "#", "v", "v", "v", "#"],
	["#", "v", "v", "v", "v", "v", "v", "v", "v", "#"],
	["#", "v", "v", "v", "v", "v", "v", "v", "v", "#"],
	["#", "#", "#", "#", "#", "v", "#", "#", "#", "#"]
	
	];
	
// carregar imagem
function preload() {
  img = loadImage("img.png");
}
 
function setup() {
	createCanvas(400, 400);
	posX = 0;
	posY = 200;
}
  
function draw() { 

	background(105,105,105);
	
	//Gerar cenário
	for(j = 0; j < cenario.length; j++) {
		for(i = 0; i < cenario.length; i++) {
			if(cenario[i][j] == "#") {
				image(img, j*tamBloco, i*tamBloco);
			}
		}
	}
	
	//movimentos do pacman
	if (keyIsDown(LEFT_ARROW))
	px-=4;

	if (keyIsDown(RIGHT_ARROW))
	px+=4;

	if (keyIsDown(UP_ARROW))
	py-=4;

	if (keyIsDown(DOWN_ARROW))
	py+=4;

	// ellipse(px, py, 40, 40); //imagem do pacman sem boca
	arc(px, py, 40, 40, PI/6, 11*PI/6, PIE); //imagem do pacman com boca	  
	
/*	//movimentos quadrado
	if (posX < 400){
		posX = posX + 15;
	}
	else{
		posX = 0;
	} 
	rect(posX, posY, 40, 40);*/

	
	// inicio de todas as colisões
	function colisao () {
		pColuna = Math.floor(px/tamBloco); 
		pLinha = Math.floor(py/tamBloco);
		
		if (cenario[pLinha][pColuna] == "#") {
			return true;
		}
		else {
			return false;
		}
	}
		
	if (keyIsDown(LEFT_ARROW)) {
		if (colisao (pColuna, pLinha)){
			px=px+4
		}
	}
	
	if (keyIsDown (RIGHT_ARROW)) {
		if (colisao (pColuna-1, pLinha-1)){
			px=px-4
		}
	}
	
	if (keyIsDown (UP_ARROW)) {
		if (colisao (pColuna, pLinha)){
			py=py+4
		}
	}
	
	if (keyIsDown (DOWN_ARROW)) {
		if (colisao (pColuna, pLinha)){
			py=py-4
		}
	}
	//inicio colisao com limite do espaço
	//limite em x do espaço
	if (px > 400) {
		px = 0;
	}
	
	if (px < 0) {
		px = 400;
	}

	//limite em y do espaço. O pac não está voltando para o outro lado
/*	if (py > 400) {
		py = 0;
	}
	
	if (py < 0) {
		py = 400;
	}*/
	
	//fim colisao
}
