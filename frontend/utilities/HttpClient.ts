import { APIError } from "interfaces/api.type";

class HttpClient {

  private backend: string;
  constructor() {
    this.backend = (typeof window === "undefined") ? 'http://backend:3000/' : `${process.env.NEXT_PUBLIC_API_URL}/`;
    //this.backend= "http://192.168.100.15:3001/";
  }

  

  private async extractJson<T>(response: Response): Promise<T | APIError> {
    return await response.json();
  }

  private getHttpHeaders() {
    let requestHeaders: HeadersInit = new Headers();

    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Accept', 'application/json');
    return requestHeaders;

  }
  
  private async createdMethods<T>(endpoint: string, bodyPayload: object, method: string): Promise<T | APIError> {
    const response = await fetch(this.backend + endpoint, {
      method: method,
      headers: this.getHttpHeaders(),
      body: JSON.stringify(bodyPayload),
    });

    const data = await this.extractJson<T>(response);
    return data;
  }

  async get<T>(endpoint: string): Promise<T | APIError> {

    const response = await fetch(this.backend + endpoint, {
      method: "GET",
      headers: this.getHttpHeaders(),
    });
    const data = await this.extractJson<T>(response);
    return data;
  }



  async post<T>(endpoint: string, bodyPayload: object): Promise<T | APIError> {
    return this.createdMethods<T>(endpoint, bodyPayload, "POST");
  }

  async patch<T>(endpoint: string, bodyPayload: object): Promise<T | APIError> {
    return this.createdMethods<T>(endpoint, bodyPayload, "PATCH");
  }

  async delete<T>(endpoint: string): Promise<T | APIError> {
    const response = await fetch(this.backend + endpoint, {
      method: "DELETE",
      headers: this.getHttpHeaders(),
    });
    const data = await this.extractJson<T>(response);
    return data;
  }

  
}

export default new HttpClient();