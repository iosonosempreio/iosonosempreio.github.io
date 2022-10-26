import dynamic from "next/dynamic";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

export default function TypographicCamera() {
	let capture;
	let w = 48;
	let h = 48;
	let letters = "Lambrock".split("");
	let sizes = Array.from({ length: 10 }, (_, i) => i * 3 + 8);
	let arr = [];
	let k;

	const doArr = (p5) => {
		arr = [];
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				arr.push({ size: p5.random(sizes), char: p5.random(letters), angle: p5.round(p5.random(0,360)) });
			}
		}
	};

	const setup = (p5, canvasParentRef) => {
		doArr(p5);
		const canvas = p5.createCanvas(500, 500);
		canvas.parent(canvasParentRef);
		
		console.log(canvasParentRef)

		capture = p5.createCapture(p5.VIDEO);
		capture.size(w, h);
		capture.hide();
		k = p5.max(p5.width, p5.height) / p5.max(w, h);
		// p5.blendMode(p5.MULTIPLY);
		p5.noStroke();
		p5.textAlign(p5.CENTER);
		p5.textFont("Lunchtype");
		p5.angleMode(p5.DEGREES)
	};

	const draw = (p5) => {
		// if (p5.random()>0.85) {
		// 	doArr(p5);
		// }
		p5.background(40);
		const captured = capture.get(0, 0, w, h);
		captured.loadPixels();
		const { pixels } = captured;
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const index = (x + y * w) * 4;
				const red = pixels[index];
				const green = pixels[index + 1];
				const blue = pixels[index + 2];
				p5.push();
				p5.fill(red, green, blue);
				const { size, char, angle } = arr[x + y * w];
				p5.textSize(size);
				p5.translate((x + 0.5) * k, y * k + size / 2)
				// p5.rotate(angle)
				p5.text(char, 0, 0);
				p5.pop();
			}
		}
	};

	const windowResized = (p5) => {
		// p5.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	return (
		<>
			<Sketch setup={setup} draw={draw} windowResized={windowResized} className="w-100 d-flex justify-content-center align-items-center" />
		</>
	);
}
