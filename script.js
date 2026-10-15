const panjangInput = document.getElementById("input-panjang");
const lebarInput = document.getElementById("input-lebar");
const message = document.getElementById("form-message");
const rectangle = document.getElementById("rect-visual");
const rectangleLabel = document.getElementById("rect-label");

const outputs = {
	panjang: document.getElementById("panjang"),
	lebar: document.getElementById("lebar"),
	luas: document.getElementById("luas"),
	keliling: document.getElementById("keliling")
};

const formatNumber = (value) => new Intl.NumberFormat("id-ID", {
	maximumFractionDigits: 4
}).format(value);

function hitung() {
	const panjangValue = panjangInput.value.trim();
	const lebarValue = lebarInput.value.trim();
	const panjang = Number(panjangValue);
	const lebar = Number(lebarValue);

	if (!panjangValue || !lebarValue || !Number.isFinite(panjang) || !Number.isFinite(lebar) || panjang < 0 || lebar < 0) {
		message.textContent = "Masukkan panjang dan lebar berupa angka nol atau lebih.";
		return;
	}

	const luas = panjang * lebar;
	const keliling = 2 * (panjang + lebar);

	outputs.panjang.textContent = formatNumber(panjang);
	outputs.lebar.textContent = formatNumber(lebar);
	outputs.luas.textContent = formatNumber(luas);
	outputs.keliling.textContent = formatNumber(keliling);
	rectangleLabel.textContent = `${formatNumber(panjang)} m × ${formatNumber(lebar)} m`;
	const shapeRatio = panjang && lebar ? Math.min(2.4, Math.max(0.9, panjang / lebar)) : 1;
	rectangle.style.setProperty("--shape-ratio", String(shapeRatio));
	rectangle.style.setProperty("--shape-width", `${Math.min(310, 138 * shapeRatio)}px`);
	message.textContent = "";
}

function reset() {
	panjangInput.value = "10";
	lebarInput.value = "5";
	hitung();
}

document.getElementById("btn-hitung").addEventListener("click", hitung);
document.getElementById("btn-reset").addEventListener("click", reset);
panjangInput.addEventListener("input", hitung);
lebarInput.addEventListener("input", hitung);

hitung();
