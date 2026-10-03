"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserResolvers {
    getUsers() {
        return [{ name: "Mahmoud", age: 21 }];
    }
}
exports.default = new UserResolvers;
