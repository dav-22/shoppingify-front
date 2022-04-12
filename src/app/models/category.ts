import { Base } from "./base";
import { Item } from "./item";

export class Category extends Base{
    name: string;
    items?: Item[];
}
