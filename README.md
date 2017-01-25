# Postman Pre-request Script generator for Escher authentication

## Usage

In Postman, create an environment with your Escher details:
```
escher-credentialScope: ingatlancom
escher-accessKeyId: moderation_icom_v1
escher-apiSecret: abcd1234
```
Copy the contents of the postman-pre-request.js file to the Pre-request Script tab. 

Add the following headers to the request:
```
X-Escher-Auth: {{auth}}
X-Escher-Date: {{date}}
```

## Development

### Install requirements
```
npm install

npm install -g browserify
```

### Generate pre-request script

```
browserify node-postman.js > postman-pre-request.js
```

### Debug

You can test the endpoint with client.js using node.

Sometimes you have to play with Postman Interceptor settings.
