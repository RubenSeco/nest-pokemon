export interface HttpAdapter {

  get<T>(url: string): Promise<T>;

  // post<T>(url: string, body: any): Promise<T>;

  // put<T>(url: string, body: any): Promise<T>;

  // delete<T>(url: string): Promise<T>;

  // patch<T>(url: string, body: any): Promise<T>;

  // head<T>(url: string): Promise<T>;

  // options<T>(url: string): Promise<T>;

  // request<T>(method: string, url: string, body: any): Promise<T>;

}
