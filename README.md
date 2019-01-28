# Project

> Exercise where students are given someone's elsed microservice and then proceed to bring it to webscale

## Table of Contents

1. [Requirements](#Requirements)
1. [Installation](#Installation)
1. [API Routes](#API-Routes)
1. [Examples](#Examples)
   - [/details/:id](#detailsid)
   - [/users/:id](#usersid)

## Requirements

- Node v10.12.0
- MongoDB v4.0.3
- NPM v6.5.0

## Instalation

To-Do (Not ready yet because I have not selected final database)

```bash
# install the depdencies
npm run install
# seed the db initially (mongoDB) - Should take 5 min
npm run seed
# start react dev environment
npm run react-dev
# start server dev environment
npm run server-dev
```
In your browser, go to http://localhost:3002/

ID's 1 to 10000000 are valid so
http://localhost:3002/1 to http://localhost:3002/10000000


## API Routes

| Endpoint      | Type | Operation                                             |
| ------------- | ---- | ----------------------------------------------------- |
| `/photos/:id` | GET  | Get all gallery photos for room matching the `:id`    |
| `/photos/:id` | PUT  | Update the MAIN photo for the room matching the `:id` |

## Examples

### /details/:id

Below is an example of the shape of data returned for a request `/photos/1`

```json
{
  "data": [
    {
      "photos": [
        {
          "id": 16,
          "location": "https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/16.jpg"
        },
        {
          "id": 17,
          "location": "https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/17.jpg"
        },
        {
          "id": 18,
          "location": "https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/18.jpg"
        },
        {
          "id": 19,
          "location": "https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/19.jpg"
        },
        {
          "id": 20,
          "location": "https://s3-us-west-2.amazonaws.com/rpt09-orchid-gallery2/20.jpg"
        }
      ],
      "_id": "5c4a2dfbaa9e01291fdc2159",
      "id": 1,
      "__v": 0
    }
  ]
}
```
