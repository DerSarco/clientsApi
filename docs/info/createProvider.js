module.exports = {
    post:{
        tags: ['Clients CRUD operations'],
        description: "Create Provider",
        operationId: 'createProviders',
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Providers'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Providers'
                        }
                    }
                }
            },
            "404": {
                description: "Provider cannot be created!"
            }
        }
    }
}