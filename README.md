## Postman Pre-request Script generáló Escher authentikációhoz

### Install
```
npm install

npm install -g browserify
```

### Generálás

```
browserify node-postman.js > postman-pre-request.js
```

### Használat

Postmanben szükség van egy environmentre, ahol be kell állítani a megfelelő Escher adatokat.

A hívásnál a Pre-request Script fülre be kell másolni a postman-pre-request.js fálj tartalmát.

A hívásnál fel kell venni a következő headereket:

X-Escher-Auth: {{auth}}
X-Escher-Date: {{date}}

### Debug

a client.js-sel lehet tesztelni a végpontot node alól is.