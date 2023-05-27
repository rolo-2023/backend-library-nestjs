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
exports.LiteraryCategorySchema = exports.LiteraryCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let LiteraryCategory = class LiteraryCategory {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LiteraryCategory.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LiteraryCategory.prototype, "maxLoanDays", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LiteraryCategory.prototype, "dailyFee", void 0);
LiteraryCategory = __decorate([
    (0, mongoose_1.Schema)()
], LiteraryCategory);
exports.LiteraryCategory = LiteraryCategory;
exports.LiteraryCategorySchema = mongoose_1.SchemaFactory.createForClass(LiteraryCategory);
//# sourceMappingURL=literary-category.entity.js.map