class Particula {
	constructor() {
		this.tamanoInicial = random(10, 50);
		this.tamano = this.tamanoInicial;
		this.estaMuerta = false;
		this.tiempoDeVidaInicial = Math.ceil(random(50, 150));
		this.tiempoDeVida = this.tiempoDeVidaInicial;

		this.pos = createVector(mouseX, mouseY);

		this.vel = createVector(0, random(1, 6));
		this.vel.rotate(random(-20, 20));

		this.g = createVector(0, -0.05);
		this.color = color(255, 0, random(100, 255), 100);
	}
	// Método ==> method update
	actualizar() {
		this.vel.add(this.g);
		this.pos.add(this.vel);

		this.tamano = map(
			this.tiempoDeVida,
			0,
			this.tiempoDeVidaInicial,
			0,
			this.tamanoInicial
		);

		this.tiempoDeVida -= 1;

		if (this.tiempoDeVida <= 0) {
			this.estaMuerta = true;
			print('ups, me morí!');
			noFill();
			stroke(this.color);
			strokeWeight(3);
			circle(this.pos.x, this.pos.y, this.tamanoInicial);
		}
	}
	// Método ==> method display
	mostrar() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.tamano);
	}
}
