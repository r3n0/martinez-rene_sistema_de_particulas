class Particula {
	constructor() {
		this.estaMuerta = false;
		this.tiempoDeVida = 10;

		this.pos = createVector(width / 2, height / 2);

		this.vel = createVector(0, random(3, 10));
		this.vel.rotate(random(360));

		this.g = createVector(0, 0.5);
	}
	// Método ==> method update
	actualizar() {
		this.vel.add(this.g);
		this.pos.add(this.vel);
		this.tiempoDeVida -= 1;

		if (this.tiempoDeVida <= 0) {
			this.estaMuerta = true;
			print('ups, me morí!');
		}
	}
	// Método ==> method display
	mostrar() {
		circle(this.pos.x, this.pos.y, 20);
	}
}
