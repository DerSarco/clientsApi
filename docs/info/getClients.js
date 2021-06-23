module.exports = {
    get:{
        tags: ['Clients CRUD operations'],
        description: "Get Clients",
        operationId: 'getClients',
        parameters:[],
        responses:{
            '200':{
                description:"Clients were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Clients'
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