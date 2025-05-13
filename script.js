const searchBtn = document.querySelector(".search-btn");
const clearBtn = document.querySelector(".clear-btn");
const searchInput = document.querySelector("#searchInput");
const resultsContainer = document.querySelector("#results");

// ✅ Embed the JSON data directly as a JS object
const data = {
	countries: [
		{
			id: 1,
			name: "Australia",
			cities: [
				{
					name: "Sydney, Australia",
					imageUrl: "sydney.jpg",
					description: "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
				},
				{
					name: "Melbourne, Australia",
					imageUrl: "melbourne.jpg",
					description: "A cultural hub famous for its art, food, and diverse neighborhoods."
				}
			]
		},
		{
			id: 2,
			name: "Japan",
			cities: [
				{
					name: "Tokyo, Japan",
					imageUrl: "tokyo.jpg",
					description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
				},
				{
					name: "Kyoto, Japan",
					imageUrl: "kyoto.jpg",
					description: "Known for its historic temples, gardens, and traditional tea houses."
				}
			]
		},
		{
			id: 3,
			name: "Brazil",
			cities: [
				{
					name: "Rio de Janeiro, Brazil",
					imageUrl: "riodejanerio.jpg",
					description: "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
				},
				{
					name: "São Paulo, Brazil",
					imageUrl: "saopaulo.jpg",
					description: "The financial hub with diverse culture, arts, and a vibrant nightlife."
				}
			]
		}
	],
	temples: [
		{
			id: 1,
			name: "Angkor Wat, Cambodia",
			imageUrl: "angkorwat.jpg",
			description: "A UNESCO World Heritage site and the largest religious monument in the world."
		},
		{
			id: 2,
			name: "Taj Mahal, India",
			imageUrl: "tajmahal.jpg",
			description: "An iconic symbol of love and a masterpiece of Mughal architecture."
		}
	],
	beaches: [
		{
			id: 1,
			name: "Bora Bora, French Polynesia",
			imageUrl: "borabora.jpg",
			description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
		},
		{
			id: 2,
			name: "Copacabana Beach, Brazil",
			imageUrl: "copacabana.jpg",
			description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
		}
	]
};

function search() {
	const searchValue = searchInput.value.trim().toLowerCase();
	resultsContainer.innerHTML = "";

	if (searchValue === "beach" || searchValue === "beaches") {
		displayResults(data.beaches);
	} else if (searchValue === "temple" || searchValue === "temples") {
		displayResults(data.temples);
	} else {
		// Check if the search term matches a country
		const country = data.countries.find(
			(c) => c.name.toLowerCase() === searchValue
		);

		if (country) {
			displayResults(country.cities);
		} else {
			resultsContainer.innerHTML = `<h2>No results found.</h2>`;
		}
	}
}

function displayResults(items) {
	items.forEach((item) => {
		const card = document.createElement("div");
		card.classList.add("card"); // optional: for styling

		const image = document.createElement("img");
		image.src = item.imageUrl;
		image.alt = item.name;

		const title = document.createElement("h4");
		title.textContent = item.name;

		const description = document.createElement("p");
		description.textContent = item.description;

		const visitBtn = document.createElement("button");
		visitBtn.textContent = "Visit";

		card.appendChild(image);
		card.appendChild(title);
		card.appendChild(description);
		card.appendChild(visitBtn);

		resultsContainer.appendChild(card);
	});
}

function clear() {
	searchInput.value = "";
	resultsContainer.innerHTML = "";
}

searchBtn.addEventListener("click", search);
clearBtn.addEventListener("click", clear);
