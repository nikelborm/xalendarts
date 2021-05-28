import { IApiOperationArgsBase } from './i-api-operation-args.base';
export interface IApiOperationGetArgs extends IApiOperationArgsBase {
}
export declare function ApiOperationGet(args: IApiOperationGetArgs): MethodDecorator;
