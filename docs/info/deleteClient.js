module.exports = {
    delete:{
        tags: ['Clients CRUD operations'],
        description: "Delete Client",
        operationId: 'deleteClient',
        parameters:[{
            name:"id",
            in:"path",
            schema:{
                $ref:"#/components/schemas/_id"
            },
            required:true,
            description: "Id of Client to be updated"
        }],
        responses:{
            '204':{
                description:"",
            },
            '404':{
                description: "Client doesn't exist!"
            }
        }
    }
}