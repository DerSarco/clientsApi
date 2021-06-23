# Clients API

This API solve the need to connect to a Mongo DB for create Clients and Providers for the app [Clients](https://github.com/sarcowww/clients) made in VUE.
## Libraries used

A few libraries used on the API:

- [Body Parser](https://www.npmjs.com/package/body-parser)
- [CORS](https://www.npmjs.com/package/cors)
- [Dot Env](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

##### Dev Libraries

This is only for API test.

- [Nodemon](https://www.npmjs.com/package/nodemon)
## Database creation

first of all, you need to configure a Mongo DB, in this example was made it locally on MacOS Big Sur, with the next [documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/), very easy to install.

after the installation, you need to create a database in my case i named mine **Clients**, and made two collections **clients & providers**.

I leave the schemas at the end of this file if an example is needed.
## Instalation and usage.

after use this API, please create an .env file in root folder with the next format (i leave mine .env for the example cause is locally):

```bash
DATABASE_URL=mongodb:YOURURL
```

 when the config is finished please use the command. **npm install**. after that, please run **npm run dev**, the API will work with Nodemon.

## Swager docs.
On this app, you can find a documentation make in swagger docs for more test and usability, there you can test directly the endpoints for clients and providers.

when you've done all the installation, the swagger documentation is [here](http://localhost:3000/info-docs/) **this link works only in local machines, first start the app and then you can access to the swagger docs, if you gonna try Swagger on your domain, access to `https://YOURDOMAIN/info-docs/`.**

## Schemas example for MongoDB

```bash
//Clients
{
  "fields": [
    {
      "name": "_id",
      "path": "_id",
      "count": 2,
      "types": [
        {
          "name": "ObjectID",
          "bsonType": "ObjectID",
          "path": "_id",
          "count": 2,
          "values": [
            "60d2c35993f70a2ba94ab860",
            "60d2c36b93f70a2ba94ab867"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 2,
          "has_duplicates": false
        }
      ],
      "total_count": 2,
      "type": "ObjectID",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "__v",
      "path": "__v",
      "count": 2,
      "types": [
        {
          "name": "Int32",
          "bsonType": "Int32",
          "path": "__v",
          "count": 2,
          "values": [
            0,
            0
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 1,
          "has_duplicates": true
        }
      ],
      "total_count": 2,
      "type": "Int32",
      "has_duplicates": true,
      "probability": 1
    },
    {
      "name": "email",
      "path": "email",
      "count": 2,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "email",
          "count": 2,
          "values": [
            "client@client.com",
            "client2@client.com"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 2,
          "has_duplicates": false
        }
      ],
      "total_count": 2,
      "type": "String",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "name",
      "path": "name",
      "count": 2,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "name",
          "count": 2,
          "values": [
            "Client 1",
            "Client 2"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 2,
          "has_duplicates": false
        }
      ],
      "total_count": 2,
      "type": "String",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "phone",
      "path": "phone",
      "count": 2,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "phone",
          "count": 2,
          "values": [
            "883728374",
            "6625321"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 2,
          "has_duplicates": false
        }
      ],
      "total_count": 2,
      "type": "String",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "providers",
      "path": "providers",
      "count": 2,
      "types": [
        {
          "name": "Array",
          "bsonType": "Array",
          "path": "providers",
          "count": 2,
          "types": [
            {
              "name": "ObjectID",
              "bsonType": "ObjectID",
              "path": "providers",
              "count": 3,
              "values": [
                "60d27cee3174c908f0c64378",
                "60d2c30793f70a2ba94ab85a",
                "60d2c30d93f70a2ba94ab85d"
              ],
              "total_count": 0,
              "probability": 1,
              "unique": 3,
              "has_duplicates": false
            }
          ],
          "lengths": [
            2,
            1
          ],
          "total_count": 3,
          "probability": 1,
          "average_length": 1.5
        }
      ],
      "total_count": 2,
      "type": "Array",
      "has_duplicates": false,
      "probability": 1
    }
  ],
  "count": 2
}
```

```bash
//Providers
{
  "fields": [
    {
      "name": "_id",
      "path": "_id",
      "count": 3,
      "types": [
        {
          "name": "ObjectID",
          "bsonType": "ObjectID",
          "path": "_id",
          "count": 3,
          "values": [
            "60d27cee3174c908f0c64378",
            "60d2c30793f70a2ba94ab85a",
            "60d2c30d93f70a2ba94ab85d"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 3,
          "has_duplicates": false
        }
      ],
      "total_count": 3,
      "type": "ObjectID",
      "has_duplicates": false,
      "probability": 1
    },
    {
      "name": "__v",
      "path": "__v",
      "count": 3,
      "types": [
        {
          "name": "Int32",
          "bsonType": "Int32",
          "path": "__v",
          "count": 3,
          "values": [
            0,
            0,
            0
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 1,
          "has_duplicates": true
        }
      ],
      "total_count": 3,
      "type": "Int32",
      "has_duplicates": true,
      "probability": 1
    },
    {
      "name": "name",
      "path": "name",
      "count": 3,
      "types": [
        {
          "name": "String",
          "bsonType": "String",
          "path": "name",
          "count": 3,
          "values": [
            "Provider 1",
            "Provider Test",
            "Provider Example"
          ],
          "total_count": 0,
          "probability": 1,
          "unique": 3,
          "has_duplicates": false
        }
      ],
      "total_count": 3,
      "type": "String",
      "has_duplicates": false,
      "probability": 1
    }
  ],
  "count": 3
}
```
## License
[ISC](https://choosealicense.com/licenses/isc/)
