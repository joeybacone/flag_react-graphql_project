const axios = require('axios');
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema}= require('graphql');

const FlagType = new GraphQLObjectType({
    name: 'Flag',
    fields: () => ({
        name: { type: GraphQLString},
        flag: { type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        flags:{
            type: new GraphQLList(FlagType),
            resolve(parent, args){
            return axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
