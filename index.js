// import { ApolloServer } from 'apollo-server';
// //import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'
// import express from 'express';
// import typeDefs from "./graphQL/types.definition.js";
// import resolvers from "./graphQL/resolver.js";

const {ApolloServer} = require('apollo-server-express');
import { graphqlUploadExpress } from 'graphql-upload/processRequest.mjs';
const express = require('express');
const typeDefs = require('./graphQL/types.definition');
const resolvers = require('./graphQL/resolver');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const server = new ApolloServer({
    typeDefs,
    resolvers
})


const app = express();
server.start().then(() => {
    server.applyMiddleware({app})
})

//app.use(graphqlUploadExpress());




app.listen({port: 7000})
console.log(`\n Server running .....`);
//.then(({url}) => {
  //  console.log(`\n Server running on url: ${url}`);
//});



