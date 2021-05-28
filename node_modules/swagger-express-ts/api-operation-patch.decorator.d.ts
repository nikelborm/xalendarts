import { IApiOperationArgsBase } from './i-api-operation-args.base';
export interface IApiOperationPatchArgs extends IApiOperationArgsBase {
}
export declare function ApiOperationPatch(args: IApiOperationPatchArgs): MethodDecorator;
