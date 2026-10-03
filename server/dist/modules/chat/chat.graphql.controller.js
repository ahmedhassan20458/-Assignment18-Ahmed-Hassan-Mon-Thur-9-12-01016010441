"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatQuery = void 0;
const graphql_1 = require("graphql");
const chat_graphql_services_1 = __importDefault(require("./chat.graphql.services"));
exports.chatQuery = {
    getChats: {
        type: graphql_1.GraphQLBoolean,
        resolve: chat_graphql_services_1.default.getChats
    }
};
