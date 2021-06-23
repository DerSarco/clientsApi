module.exports = {
    patch:{
        tags: ['Clients CRUD operations'],
        description: "Update Client",
        operationId: 'updateClient',
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
                description:"Clients was updated",
            },
            '404':{
                description: "Error trying update"
            }
        }
    }
}