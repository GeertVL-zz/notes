// domain models

export interface Thread {
    id: number;
    messageIds: number[];
    participants: {[key:number]: number};
}

export interface Message {
    id: number;
    threadId: number;
    participantId: number;
    text: string;
    timestamp: number;
}

export interface Participant {
    id: number;
    name: string;
}


// view models

export interface ThreadSummaryVM {
    id: number;
    participantNames: string;
    lastMessageText: string;
    timestamp: number;
    read: boolean;
}

export interface MessageVM {
    id: number;
    text: string;
    participantName: string;
    timestamp: number;
}
