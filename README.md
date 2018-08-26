# reactjs-codebase
A sample codebase for showcase / demo / training

## Upgraded to ReactJs 16

## Use flow type checking with babel

#### Setup Compiler
Fist install babel-cli and babel-preset-flow with npm
```
npm install --save-dev babel-cli babel-preset-flow
```
Add "flow in your existing .babelrc
```
{
  "presets": [
    ["react"], ["env",{
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }],["stage-2"],["flow"]
  ],
  "plugins": ["transform-object-rest-spread"],
  "retainLines": true
}
```
#### Setup Flow
```
npm install flow-bin --save-dev
npm install flow-bin -g
flow init
```
Add a "flow" script to your package.json
```
"scripts": {
    "flow": "flow"
}
```