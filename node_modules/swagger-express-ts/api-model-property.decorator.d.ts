export interface IApiModelPropertyArgs {
    /**
     * Define if property is required.
     * Optional. Default is false.
     */
    required?: boolean;
    /**
     * Define format of property. Example: SwaggerDefinitionConstant.Definition.Property.Format.INT_64
     * Optional.
     */
    format?: string;
    /**
     * Define type of property. Example: SwaggerDefinitionConstant.Definition.Property.Type.STRING
     * Optional.
     */
    type?: string;
    /**
     * Define description.
     * Optional.
     */
    description?: string;
    /**
     * Define enum;
     * Optional.
     */
    enum?: string[];
    /**
     * Define model.
     * Optional.
     */
    model?: string;
    /**
     * Define type of item. Example: SwaggerDefinitionConstant.Definition.Property.Type.STRING
     * Optional.
     */
    itemType?: string;
    /**
     * Define example.
     */
    example?: any | any[];
}
export declare function ApiModelProperty(args?: IApiModelPropertyArgs): PropertyDecorator;
