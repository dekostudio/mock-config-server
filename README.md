# Mock Config Server

tool that easily and quickly imitates server operation, create full fake api in few steps

## Install

Install with [npm](https://www.npmjs.com/)

```bash
$ npm i
```

Start **Mock Config Server**

```bash
$ npm run start
```

## Example

Now you can make a request with an additional header and get the desired result

**/users**

```javascript
fetch('http://localhost:8000/user', {
  headers: {
    'name-header': 'Nursultan',
    'Content-Type': 'application/json',
    'Authorization': 'wrgwrgwr'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)); // {  username: 'admin', password: 'admin' }
```
**/posts**

```javascript
fetch('http://localhost:8000/posts', {
  headers: {
    'name-header': 'Nursultan',
    'Content-Type': 'application/json',
    'Authorization': 'wrgwrgwr'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)); // {  id: '1', title: 'json-server', userId: '1' }
```
**/comments**

```javascript
fetch('http://localhost:8000/posts', {
  headers: {
    'name-header': 'Nursultan',
    'Content-Type': 'application/json',
    'Authorization': 'wrgwrgwr'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)); // {  id: '1', body: 'json-server', postId: '1' }
```

**/profile**

```javascript
fetch('http://localhost:8000/profile', {
  headers: {
    'name-header': 'Nursultan',
    'Content-Type': 'application/json',
    'Authorization': 'wrgwrgwr'
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data)); // {  id: '1', body: 'json-server', postId: '1' }
```
**/products**

soon
