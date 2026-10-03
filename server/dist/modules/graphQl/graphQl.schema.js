"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const chat_graphql_controller_1 = require("../chat/chat.graphql.controller");
const user_graphql_controller_1 = require("../user/user.graphql.controller");
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "query",
        fields: {
            ...user_graphql_controller_1.userQuery,
            ...chat_graphql_controller_1.chatQuery,
        },
    }),
});
exports.default = schema;
