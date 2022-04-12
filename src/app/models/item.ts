import { Base } from "./base";
import { Category } from "./category";

export class Item extends Base{
    name: string;
    description: string;
    image: string;
    categoryId: number;
    category: Category;
}   
