const { RESTDataSource } = require('apollo-datasource-rest')

class MixyAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'
	}

	async getRandomDrink() {
		const response = await this.get(`random.php`)
		return this.drinkReducer(response)
	}
	async getDrinkById({ drinkId }) {
		const useURL = await `lookup.php?i=${drinkId}`
		const response = await this.get(useURL)
		return this.drinkReducer(response)
	}
	async displayDrinks() {
		const response = await this.get('filter.php?g=Cocktail_glass')
		return Array.isArray(response.drinks)
			? response.drinks.map((drinks) => this.displayReducer(drinks))
			: []
	}

	drinkReducer(data) {
		return {
			id: data.drinks.idDrink || null,
			name: data.drinks[0].strDrink || null,
			desc: data.drinks[0].strInstructions || null,
			img: data.drinks[0].strDrinkThumb || null,
			category: data.drinks[0].strCategory || null,
			glassType: data.drinks[0].strGlass || null,
		}
	}
	displayReducer(drinks) {
		return {
			name: drinks.strDrink || null,
			img: drinks.strDrinkThumb || null,
			id: drinks.idDrink,
		}
	}
}

module.exports = MixyAPI
