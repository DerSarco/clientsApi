module.exports = {
    delete:{
        tags: ['Clients CRUD operations'],
        description: "Delete Provider",
        operationId: 'deleteProvider',
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
            },
            '404':{
                description: "Client doesn't exist!"
            }
        }
    }
}