

const {GraphQLUpload} = require('apollo-server-express');
const resolvers = {
    Query: {
        Info () {
            return `Testing`
        }
    },

    Mutation: {
        async uploadFile (_, file) {
            console.log(file);
            return file
        }
    }
}


module.exports = resolvers;