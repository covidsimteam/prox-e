export interface Entity {
    _id: string;
    _rev: string;
    type: string;
    content: string;
    keys: string[];
    values: string[];
}