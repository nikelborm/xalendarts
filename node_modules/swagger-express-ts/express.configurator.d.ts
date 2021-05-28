import { Router } from 'express';
import { ISwaggerBuildDefinition } from './swagger.builder';
export interface ISwaggerExpressOptions {
    /**
     * Path of resource.
     * Default is "/api-docs/swagger.json".
     */
    path?: string;
    /**
     * Swagger Definition.
     */
    definition?: ISwaggerBuildDefinition;
}
export declare function express(options?: ISwaggerExpressOptions): Router;
