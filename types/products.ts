export interface Products {
    colors: any;
    sizes: any;
    category: string;
    _id: string;
    _type : "products";
    name: string;
    price: number;
    description: string;
    image? : {
        _ref: string;
        _type: "image";
    }
    slug: { current: string };
    slugCurrent: any;
    discountPercent: number;
}