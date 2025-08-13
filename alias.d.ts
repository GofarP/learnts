export type Category = {
    id: string;
    name: string;
};
export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
};
export type ID = string | number;
export type unionCategory = {
    id: ID;
    name: string;
};
export type unionProduct = {
    id: ID;
    name: string;
    price: number;
    category: unionCategory;
};
//# sourceMappingURL=alias.d.ts.map