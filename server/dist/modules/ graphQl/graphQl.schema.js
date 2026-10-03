"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphQl_types_1 = require("./graphQl.types");
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "query",
        fields: {
            sayHello: {
                type: graphQl_types_1.userType,
                resolve: () => "Mahmoud"
            }
        }
    })
});
exports.default = schema;
