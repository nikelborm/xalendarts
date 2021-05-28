import { IApiOperationArgsBase } from './i-api-operation-args.base';
export interface IApiOperationPostArgs extends IApiOperationArgsBase {
}
export declare function ApiOperationPost(args: IApiOperationPostArgs): MethodDecorator;
