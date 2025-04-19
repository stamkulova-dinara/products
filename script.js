const products = [
	{
		id: 1,
		img: "https://media.dodostatic.net/image/r:584x584/0195aab2ad7f75a4be7fc533259cd34d.avif",
		title: "Пицца Кола-Барбекю ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 495,
	},
	{
		id: 2,
		img: "https://media.dodostatic.net/image/r:584x584/11ef3db2188200718edeb6d5ec3e3ecd.avif",
		title: "Чикен Бомбони ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 305,
	},
	{
		id: 3,
		img: "https://media.dodostatic.net/image/r:584x584/01951a1dafe5716fa6840181c45ea9ba.avif",
		title: "Пицца Кола-Барбекю ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 905,
	},
	{
		id: 4,
		img: "https://media.dodostatic.net/image/r:584x584/11ef3db2188200718edeb6d5ec3e3ecd.avif",
		title: "Чикен Бомбони ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 305,
	},
	{
		id: 5,
		img: "https://media.dodostatic.net/image/r:584x584/01951a1dafe5716fa6840181c45ea9ba.avif",
		title: "Пицца Кола-Барбекю ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 705,
	},
	{
		id: 6,
		img: "https://media.dodostatic.net/image/r:584x584/11ef3db2188200718edeb6d5ec3e3ecd.avif",
		title: "Чикен Бомбони ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 505,
	},
	{
		id: 7,
		img: "https://media.dodostatic.net/image/r:584x584/01951a1dafe5716fa6840181c45ea9ba.avif",
		title: "Пицца Кола-Барбекю ",
		description:
			"Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю",
		price: 900,
	},
];


const productList = document.querySelector(".product-list");
const btnPricePlus = document.querySelector("#price-plus");
const btnPriceMin = document.getElementById("price-minus")
showProducts(products);

function showProducts(products) {
	productList.innerHTML = "";
	products.forEach((obj) => {
		renderProducts(obj);
	});
}

function renderProducts(product) {
	const card = document.createElement("div");
	card.className = "card";

	const img = document.createElement("img");
	img.src = product.img;

	const title = document.createElement("h2");
	title.textContent = product.title;

	const desc = document.createElement("p");
	desc.textContent = product.description;

	const btns = document.createElement("div");
	btns.className = "info";
	btns.innerHTML = `<h3>${product.price} coм</h3>
						<button onclick="deleteProductById(${product.id})" class="delete-product">Удалить</button>`;

	card.appendChild(img);
	card.appendChild(title);
	card.appendChild(desc);
	card.appendChild(btns);

	productList.appendChild(card);
}

btnPricePlus.addEventListener("click", () => {
	products.sort((a, b) => b.price - a.price);
	showProducts(products);
});

btnPriceMin.addEventListener("click", () => {
	products.sort((a, b) => a.price - b.price);
	showProducts(products);
})

function deleteProductById(id) {
	const index = products.findIndex((obj) => obj.id == id )

	if(index !== -1) {
		products.splice(index, 1)
		showProducts(products);
	}
}