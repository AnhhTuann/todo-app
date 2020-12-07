import { CatsService } from './cats.service';
import { CatInput } from './inputs/cats.inputs';
export declare class CatsResolver {
    private catsService;
    constructor(catsService: CatsService);
    hello(): Promise<string>;
    cats(): Promise<import("./interfaces/cats.interface").Cat[]>;
    createCat(input: CatInput): Promise<import("./interfaces/cats.interface").Cat>;
}
