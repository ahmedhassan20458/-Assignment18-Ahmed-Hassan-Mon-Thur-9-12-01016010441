"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQuery = void 0;
const graphql_1 = require("graphql");
const graphQl_types_1 = require("../../graphQl/graphQl.types");
exports.userQuery = {
    getUsers: {
        type: new graphql_1.GraphQLList(graphQl_types_1.userType),
        resolve: () => {
            return [{ name: "Mahmoud", age: 21 }];
        },
    },
};
