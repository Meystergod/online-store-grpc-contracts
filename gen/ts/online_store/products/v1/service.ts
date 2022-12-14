// @generated by protobuf-ts 2.2.2 with parameter long_type_string
// @generated from protobuf file "online_store/products/v1/service.proto" (package "online_store.products.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Sort } from "../../../common/filter/v1/sort";
import { IntFieldFilter } from "../../../common/filter/v1/filter";
import { StringFieldFilter } from "../../../common/filter/v1/filter";
import { Pagination } from "../../../common/filter/v1/filter";
import { Product } from "./product";
/**
 * @generated from protobuf message online_store.products.v1.CreateProductRequest
 */
export interface CreateProductRequest {
    /**
     * @generated from protobuf field: string brand = 1;
     */
    brand: string;
    /**
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: string price = 4;
     */
    price: string;
    /**
     * @generated from protobuf field: optional string image_id = 5;
     */
    imageId?: string;
    /**
     * @generated from protobuf field: string specifications = 6;
     */
    specifications: string;
    /**
     * @generated from protobuf field: uint32 category_id = 7;
     */
    categoryId: number;
    /**
     * @generated from protobuf field: uint32 discount_id = 8;
     */
    discountId: number;
    /**
     * @generated from protobuf field: uint32 inventory_id = 9;
     */
    inventoryId: number;
}
/**
 * @generated from protobuf message online_store.products.v1.CreateProductResponse
 */
export interface CreateProductResponse {
    /**
     * @generated from protobuf field: online_store.products.v1.Product product = 1;
     */
    product?: Product;
}
/**
 * @generated from protobuf message online_store.products.v1.GetAllProductRequest
 */
export interface GetAllProductRequest {
    /**
     * @generated from protobuf field: common.filter.v1.Pagination pagination = 1;
     */
    pagination?: Pagination;
    /**
     * @generated from protobuf field: common.filter.v1.StringFieldFilter brand = 2;
     */
    brand?: StringFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.StringFieldFilter title = 3;
     */
    title?: StringFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.IntFieldFilter price = 4;
     */
    price?: IntFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.IntFieldFilter category_id = 5;
     */
    categoryId?: IntFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.IntFieldFilter discount_id = 6;
     */
    discountId?: IntFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.IntFieldFilter inventory_id = 7;
     */
    inventoryId?: IntFieldFilter;
    /**
     * @generated from protobuf field: common.filter.v1.Sort sort = 8;
     */
    sort?: Sort;
}
/**
 * @generated from protobuf message online_store.products.v1.GetAllProductResponse
 */
export interface GetAllProductResponse {
    /**
     * @generated from protobuf field: repeated online_store.products.v1.Product products = 1;
     */
    products: Product[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateProductRequest$Type extends MessageType<CreateProductRequest> {
    constructor() {
        super("online_store.products.v1.CreateProductRequest", [
            { no: 1, name: "brand", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "price", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "image_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "specifications", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "category_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "discount_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "inventory_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CreateProductRequest>): CreateProductRequest {
        const message = { brand: "", title: "", description: "", price: "", specifications: "", categoryId: 0, discountId: 0, inventoryId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateProductRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateProductRequest): CreateProductRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string brand */ 1:
                    message.brand = reader.string();
                    break;
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* string price */ 4:
                    message.price = reader.string();
                    break;
                case /* optional string image_id */ 5:
                    message.imageId = reader.string();
                    break;
                case /* string specifications */ 6:
                    message.specifications = reader.string();
                    break;
                case /* uint32 category_id */ 7:
                    message.categoryId = reader.uint32();
                    break;
                case /* uint32 discount_id */ 8:
                    message.discountId = reader.uint32();
                    break;
                case /* uint32 inventory_id */ 9:
                    message.inventoryId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateProductRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string brand = 1; */
        if (message.brand !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.brand);
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* string price = 4; */
        if (message.price !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.price);
        /* optional string image_id = 5; */
        if (message.imageId !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.imageId);
        /* string specifications = 6; */
        if (message.specifications !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.specifications);
        /* uint32 category_id = 7; */
        if (message.categoryId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.categoryId);
        /* uint32 discount_id = 8; */
        if (message.discountId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.discountId);
        /* uint32 inventory_id = 9; */
        if (message.inventoryId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.inventoryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message online_store.products.v1.CreateProductRequest
 */
export const CreateProductRequest = new CreateProductRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateProductResponse$Type extends MessageType<CreateProductResponse> {
    constructor() {
        super("online_store.products.v1.CreateProductResponse", [
            { no: 1, name: "product", kind: "message", T: () => Product }
        ]);
    }
    create(value?: PartialMessage<CreateProductResponse>): CreateProductResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateProductResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateProductResponse): CreateProductResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* online_store.products.v1.Product product */ 1:
                    message.product = Product.internalBinaryRead(reader, reader.uint32(), options, message.product);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* online_store.products.v1.Product product = 1; */
        if (message.product)
            Product.internalBinaryWrite(message.product, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message online_store.products.v1.CreateProductResponse
 */
export const CreateProductResponse = new CreateProductResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllProductRequest$Type extends MessageType<GetAllProductRequest> {
    constructor() {
        super("online_store.products.v1.GetAllProductRequest", [
            { no: 1, name: "pagination", kind: "message", T: () => Pagination },
            { no: 2, name: "brand", kind: "message", T: () => StringFieldFilter },
            { no: 3, name: "title", kind: "message", T: () => StringFieldFilter },
            { no: 4, name: "price", kind: "message", T: () => IntFieldFilter },
            { no: 5, name: "category_id", kind: "message", T: () => IntFieldFilter },
            { no: 6, name: "discount_id", kind: "message", T: () => IntFieldFilter },
            { no: 7, name: "inventory_id", kind: "message", T: () => IntFieldFilter },
            { no: 8, name: "sort", kind: "message", T: () => Sort }
        ]);
    }
    create(value?: PartialMessage<GetAllProductRequest>): GetAllProductRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllProductRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllProductRequest): GetAllProductRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* common.filter.v1.Pagination pagination */ 1:
                    message.pagination = Pagination.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
                    break;
                case /* common.filter.v1.StringFieldFilter brand */ 2:
                    message.brand = StringFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.brand);
                    break;
                case /* common.filter.v1.StringFieldFilter title */ 3:
                    message.title = StringFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.title);
                    break;
                case /* common.filter.v1.IntFieldFilter price */ 4:
                    message.price = IntFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.price);
                    break;
                case /* common.filter.v1.IntFieldFilter category_id */ 5:
                    message.categoryId = IntFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.categoryId);
                    break;
                case /* common.filter.v1.IntFieldFilter discount_id */ 6:
                    message.discountId = IntFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.discountId);
                    break;
                case /* common.filter.v1.IntFieldFilter inventory_id */ 7:
                    message.inventoryId = IntFieldFilter.internalBinaryRead(reader, reader.uint32(), options, message.inventoryId);
                    break;
                case /* common.filter.v1.Sort sort */ 8:
                    message.sort = Sort.internalBinaryRead(reader, reader.uint32(), options, message.sort);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAllProductRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* common.filter.v1.Pagination pagination = 1; */
        if (message.pagination)
            Pagination.internalBinaryWrite(message.pagination, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.StringFieldFilter brand = 2; */
        if (message.brand)
            StringFieldFilter.internalBinaryWrite(message.brand, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.StringFieldFilter title = 3; */
        if (message.title)
            StringFieldFilter.internalBinaryWrite(message.title, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.IntFieldFilter price = 4; */
        if (message.price)
            IntFieldFilter.internalBinaryWrite(message.price, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.IntFieldFilter category_id = 5; */
        if (message.categoryId)
            IntFieldFilter.internalBinaryWrite(message.categoryId, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.IntFieldFilter discount_id = 6; */
        if (message.discountId)
            IntFieldFilter.internalBinaryWrite(message.discountId, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.IntFieldFilter inventory_id = 7; */
        if (message.inventoryId)
            IntFieldFilter.internalBinaryWrite(message.inventoryId, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* common.filter.v1.Sort sort = 8; */
        if (message.sort)
            Sort.internalBinaryWrite(message.sort, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message online_store.products.v1.GetAllProductRequest
 */
export const GetAllProductRequest = new GetAllProductRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllProductResponse$Type extends MessageType<GetAllProductResponse> {
    constructor() {
        super("online_store.products.v1.GetAllProductResponse", [
            { no: 1, name: "products", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Product }
        ]);
    }
    create(value?: PartialMessage<GetAllProductResponse>): GetAllProductResponse {
        const message = { products: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllProductResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllProductResponse): GetAllProductResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated online_store.products.v1.Product products */ 1:
                    message.products.push(Product.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAllProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated online_store.products.v1.Product products = 1; */
        for (let i = 0; i < message.products.length; i++)
            Product.internalBinaryWrite(message.products[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message online_store.products.v1.GetAllProductResponse
 */
export const GetAllProductResponse = new GetAllProductResponse$Type();
/**
 * @generated ServiceType for protobuf service online_store.products.v1.ProductService
 */
export const ProductService = new ServiceType("online_store.products.v1.ProductService", [
    { name: "CreateProduct", options: {}, I: CreateProductRequest, O: CreateProductResponse },
    { name: "GetAllProduct", options: {}, I: GetAllProductRequest, O: GetAllProductResponse }
]);
