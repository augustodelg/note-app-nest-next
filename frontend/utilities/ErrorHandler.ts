import { APIError } from "interfaces/api.type";
import { toast } from "react-hot-toast";

class ErrorHandler {

    isError<T>(response: T | APIError): response is APIError {
        return (response as APIError).error !== undefined;
    }
    async handleError<T>(response: T | APIError, succesMessage?: string, callback?: () => void): Promise<T | APIError> {
        if (this.isError<T>(response)) {
            toast.error((response.message ? JSON.stringify(response.message) : response.error));
        } else {
            succesMessage && toast.success(succesMessage);
            callback && callback();
        }

        return response
    }
}

export default new ErrorHandler();