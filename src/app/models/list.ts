import { Base } from "./base";
import { Shopping } from "./shopping";

export class List extends Base {
    name: string;
    userId: number;
    shoppingLists: Shopping;
    status: string;
}
