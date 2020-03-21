const { ApolloServer, gql } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDef')
const MixyAPI = require('./mixyAPI.js')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			mixyAPI: new MixyAPI(),
		}
	},
	engine: {
		apiKey: process.env.METRICS_API_KEY,
	},
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
