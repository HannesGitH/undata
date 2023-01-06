declare module 'sdmx-rest' {
    type query = any;
  export function request(query:query, url: string): Promise<any>;

}