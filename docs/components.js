
module.exports = {
    components: {
        schemas: {
            "_id": {
                type: 'string',
                description: "ID for Client or Provider",
                example: "60d2c30d93f70a2ba94ab85d"
            },
            Clients: {
                type: 'object',
                properties: {
                    "_id": {
                        type: 'string',
                        description: "ID for Client",
                        example: "60d2c30d93f70a2ba94ab85d"
                    },
                    name: {
                        type: 'string',
                        description: "Clent's Name",
                        example: "Client 1"
                    },
                    email: {
                        type: "string",
                        description: "Email for Client",
                        example: 'test@test.com'
                    },
                    phone: {
                        type: "number",
                        description: "Client's Phone",
                        example: 998273672
                    },
                    providers: {
                        type: "array",
                        items: {
                            $ref: '#/components/schemas/Providers'
                        }
                    }
                }
            },
            Providers: {
                type: 'object',
                properties: {
                    "_id": {
                        type: 'string',
                        description: "Provider",
                        example: "60d2c30d93f70a2ba94ab85d"
                    },
                    name: {
                        type: "string",
                        description: "Name of provider",
                        example: "Provider 1"
                    }
                }
            }
        }
    }
}