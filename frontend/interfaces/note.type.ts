import { Tag } from "./tag.type"

export interface Note {
    id: string,
    title: string,
    content: string,
    archived: boolean,
    created_at: string,
    updated_at: string,
    tags: Tag[]
}

export interface NoteCreate {
    title: string,
    content: string,
}

export interface NoteUpdate {
    title?: string,
    content?: string,
    archived?: boolean,
    tagasId?: string[]
}
