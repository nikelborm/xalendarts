export interface IApiPathArgs {
    path: string;
    name: string;
    description?: string;
    security?: {
        [key: string]: any[];
    };
    deprecated?: boolean;
}
export declare function ApiPath(args: IApiPathArgs): ClassDecorator;
