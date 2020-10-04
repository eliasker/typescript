Run express -server with
```sh
/typescript/exercises_express 
$ npm run web
```

Bmi-calc used by doing HTTP GET request to endpoint bmi. 
Height & weight inputs are given in url: http://localhost:3002/bmi?height=185&weight=85 

Exercise -calc can be used by sending HTTP POST -request to
http://localhost:3002/exercises
with json input in request body (example):
{
  "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
  "target": 2
}
