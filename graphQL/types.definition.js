const {gql} = require('apollo-server');


const typeDefs = gql`
scalar Upload
type Query {
    Info: String!
}

type Mutation {
    uploadFile (fileInput: Upload!): Upload!


}
`



module.exports = typeDefs;