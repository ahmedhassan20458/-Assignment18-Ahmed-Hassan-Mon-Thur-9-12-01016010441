"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQuery = void 0;
const graphql_1 = require("graphql");
const graphQl_types_1 = require("../graphQl/graphQl.types");
const user_graphql_services_1 = __importDefault(require("./user.graphql.services"));
const validation_middleware_1 = require("../../middleware/validation.middleware");
const user_validation_1 = require("./user.validation");
const auth_middleware_1 = require("../../middleware/auth.middleware");
exports.userQuery = {
    getUsers: {
        type: new graphql_1.GraphQLList(graphQl_types_1.userType),
        resolve: user_graphql_services_1.default.getUsers
    },
    sayHello: {
        type: new graphql_1.GraphQLObjectType({
            name: "sayHello",
            fields: {
                username: { type: graphql_1.GraphQLString },
                userAge: { type: graphql_1.GraphQLInt }
            }
        }),
        args: {
            name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            age: { type: graphql_1.GraphQLInt }
        },
        resolve: async (parent, args, ctx) => {
            const name = args.name;
            await (0, validation_middleware_1.graphQlValidation)(user_validation_1.sayHelloSchema, args);
            const { user } = await (0, auth_middleware_1.decodeToken)(ctx);
            return {
                username: name,
                userAge: args.age
            };
        }
    }
};
