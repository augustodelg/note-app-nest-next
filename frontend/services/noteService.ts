import { APIError } from "interfaces/api.type";
import { toast } from "react-hot-toast";
import ErrorHandler from "utilities/ErrorHandler";
import { Note, NoteCreate, NoteUpdate } from "../interfaces/note.type";
import HttpClient from "../utilities/HttpClient";


class NoteService {



    async getNotes(archived: boolean) {
        const response = await HttpClient.get<Note[]>(`notes?archived=${archived}`)
        ErrorHandler.handleError<Note[]>(response);
        return response;
    }

    async createNote(note: NoteCreate, callback: () => void) {
        const response = await HttpClient.post<Note>('notes', note)
        ErrorHandler.handleError<Note>(response, "Note created", callback);
    }

    async updateNote(id: string, note: NoteUpdate, callback: () => void) {
        const response = await HttpClient.patch<Note>(`notes/${id}`, note);
        ErrorHandler.handleError<Note>(response, "Note updated", callback);
    }

    async getNoteById(id: string) {
        const response = await HttpClient.get<Note>(`notes/${id}`);
        return response;
    }

    async deleteNote(id: string, callback: () => void) {
        const response = await HttpClient.delete<boolean>(`notes/${id}`);
        ErrorHandler.handleError<boolean>(response, "Note deleted successfully", callback);
    }

    async toggleNoteArchiveStatus(id: string, actualStatus: boolean) {
        const response = await HttpClient.patch<Note>(`notes/${id}`, { archived: !actualStatus });
        ErrorHandler.handleError<Note>(response, "Note archived/unarchived successfully");
    }

}

export default new NoteService() as NoteService;