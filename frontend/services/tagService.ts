import { Tag } from "interfaces/tag.type";
import ErrorHandler from "utilities/ErrorHandler";
import HttpClient from "utilities/HttpClient";

class TagService {

    async getTags() {
        const response = await HttpClient.get<Tag[]>('tags')
        ErrorHandler.handleError<Tag[]>(response);
        return response;
    }

    async createTag(name: string, callback: () => void) {
        const response = await HttpClient.post<Tag>('tags', {name})
        ErrorHandler.handleError<Tag>(response, "Tag created", callback);
        return response;
    }


}

export default new TagService() as TagService;