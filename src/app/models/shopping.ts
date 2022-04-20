import { Base } from "./base";
import { Item } from "./item";

export class Shopping extends Base {
    itemId: number;
    item?: Item;
    listId: number;
    count: number;
}
