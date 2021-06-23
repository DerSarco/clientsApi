module.exports = {
    get:{
        tags: ['Clients CRUD operations'],
        description: "Get Providers",
        operationId: 'getProviders',
        parameters:[],
        responses:{
            '200':{
                description:"Clients were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Providers'
                        }
                    }
                }
            },
            '404': {
                description: "Clients cannot be retrived!"
            }
        }
    }
}