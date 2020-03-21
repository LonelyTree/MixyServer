const resolvers = {
	Query: {
		getDisplay: async (_source, _, { dataSources }) => {
			return dataSources.mixyAPI.displayDrinks()
		},
		getRandomDrink: async (_source, _, { dataSources }) => {
			return dataSources.mixyAPI.getRandomDrink()
		},
		getDrink: async (_source, { id }, { dataSources }) => {
			return dataSources.mixyAPI.getDrinkById({ drinkId: id })
		},
		getIngredients: async (_source, _, { dataSources }) => {
			return dataSources.mixyAPI.getIngredients()
		},
	},
}

module.exports = resolvers
