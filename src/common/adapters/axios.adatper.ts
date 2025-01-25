import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

  private axios: AxiosInstance = axios;

  public async get<T>(url: string): Promise<T> {

    try {
      const { data } = await this.axios.get<T>(url);

      return data;

    } catch (error) {
      console.log(error);
      throw new Error("Error - check logs");

    }

  }

  // public async post<T>(url: string, body: any): Promise<T> {
  //   // Implementation here
  // }

  // public async put<T>(url: string, body: any): Promise<T> {
  //   // Implementation here
  // }

  // public async delete<T>(url: string): Promise<T> {
  //   // Implementation here
  // }

  // public async patch<T>(url: string, body: any): Promise<T> {
  //   // Implementation here
  // }

  // public async head<T>(url: string): Promise<T> {
  //   // Implementation here
  // }

  // public async options<T>(url: string): Promise<T> {
  //   // Implementation here
  // }

  // public async request<T>(method: string, url: string, body: any): Promise<T> {
  //   // Implementation here
  // }


}