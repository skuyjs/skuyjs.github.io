---
title: "Getting Started"
date: 2020-04-05T20:26:36+07:00
draft: false
---

This is basic usage of SkuyJS.
```javascript
const Server = require('@skuyjs/http-server');
const server = new Server();

server.get('/', (req, res) => {
  res.send('hello');
});

server.listen(8080);
```
