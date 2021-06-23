const getClients = require('./getClients');
const createClient = require('./createClient');
const updateClient = require('./updateClient');
const deleteClient = require('./deleteClient');

const getProviders = require('./getProviders')
const createProvider = require('./createProvider')
const deleteProvider = require('./deleteProvider')

module.exports = {
    paths:{
        '/clients/':{
            ...getClients,
            ...createClient
        },
        '/clients/{id}':{
            ...updateClient,
            ...deleteClient
        },
        '/providers/':{
            ...getProviders,
            ...createProvider
        },
        '/providers/{id}':{
            ...deleteProvider
        }

    }
}