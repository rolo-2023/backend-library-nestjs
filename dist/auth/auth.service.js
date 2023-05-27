"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let ApiService = class ApiService {
    constructor(HttpService) {
        this.HttpService = HttpService;
        this.apiSeguridad = process.env.API_SEGURIDAD;
    }
    async test() {
        return "Services";
    }
    async loginAuth(loginAuthDTO) {
        try {
            console.log(`${this.apiSeguridad}/auth/login`);
            const response = await this.HttpService.post(`${this.apiSeguridad}/auth/login`, loginAuthDTO).toPromise();
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error.response.data;
        }
    }
    async signAuth(signUpDto) {
        try {
            console.log(`${this.apiSeguridad}/auth/login`);
            const response = await this.HttpService.post(`${this.apiSeguridad}/auth/register`, signUpDto).toPromise();
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error.response.data;
        }
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=auth.service.js.map