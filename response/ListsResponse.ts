import {ListResponse} from "./ListResponse";

export interface ListsResponse {
    status: string;
    copyright: string;
    num_results: number;
    last_modified: string;
    results: ListResponse[]
}
