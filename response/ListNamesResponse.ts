import {ListNameResponse} from "./ListNameResponse";

export interface ListNamesResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: ListNameResponse[];
}
