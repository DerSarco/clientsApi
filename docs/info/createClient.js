module.exports = {
    post:{
        tags: ['Clients CRUD operations'],
        description: "Create Clients",
        operationId: 'createClients',
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Clients'
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
                            $ref:'#/components/schemas/Clients'
                        }
                    }
                }
            },
            "404": {
                description: "Something went wrong at user creation!"
            }
        }
    }
}