const { gql } = require('apollo-server')

const typeDefs = gql`
	type RandomDrink {
		id: String
		name: String!
		desc: String!
		img: String!
		category: String!
		glassType: String!
		ingredients: [String]!
		measurement: [String]!
	}
	type DrinkDisplay {
		id: String!
		name: String!
		img: String!
	}

	type FullDrink {
		id: String!
		name: String!
		desc: String!
		img: String!
		category: String!
		glassType: String!
	}
	type Ingredients {
		strIngredients1: String!
	}
	type Query {
		getDisplay: [DrinkDisplay]!
		getRandomDrink: RandomDrink!
		getDrink(id: ID!): FullDrink!
		getIngredients: Ingredients!
	}
`
module.exports = typeDefs

// type Measure {
// 		strMeasure1: String!
// 		strMeasure2: String
// 		strMeasure3: String
// 		strMeasure4: String
// 		strMeasure5: String
// 		strMeasure6: String
// 		strMeasure7: String
// 		strMeasure8: String
// 		strMeasure9: String
// 		strMeasure10: String
// 		strMeasure11: String
// 		strMeasure12: String
// 		strMeasure13: String
// 		strMeasure14: String
// 		strMeasure15: String
// 	}
// type Material {
// 	strIngredient1: String!
// 	strIngredient2: String
// 	strIngredient3: String
// 	strIngredient4: String
// 	strIngredient5: String
// 	strIngredient6: String
// 	strIngredient7: String
// 	strIngredient8: String
// 	strIngredient9: String
// 	strIngredient10: String
// 	strIngredient11: String
// 	strIngredient12: String
// 	strIngredient13: String
// 	strIngredient14: String
// 	strIngredient15: String
// }

// 	type Ingredients {
// 		type: [Material]
// 		amount: [Measure]
// 	}
// 	type DetailedInfo {
// 		id: String!
// 		name: String!
// 		desc: String!
// 		img: String!
// 		category: String!
// 		glassType: String!
// 	}

// 	type Info {
// 		id: String!
// 		name: String!
// 		desc: String!
// 		img: String!
// 	}
