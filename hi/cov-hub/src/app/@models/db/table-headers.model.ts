export type PCRTuple = [string, string, string, number, number];
export type RDTTuple = PCRTuple;
export type RETTuple = [string, string, string, string, string, number];

export type TABTuple = PCRTuple | RDTTuple | RETTuple;

export type PCRTupleRev = [ string, string, string, number, number, string ];
export type RDTTupleRev = PCRTupleRev;
export type RETTupleRev = [string, string, string, string, string, number, string];

export type TABTupleRev = PCRTupleRev | RDTTupleRev | RETTupleRev;
