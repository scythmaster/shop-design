export class Product {
    constructor (
        public id: string,
        public name: string,
        public price: number,
        public description: string,
        public category: string,
        public image: string,
        public quantity: number,
        public createdAt: Date,
        public modifiedAt: Date | null
    ) {}
}