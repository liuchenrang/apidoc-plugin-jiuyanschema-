# apidoc-plugin-schema

Generates and inject [apidoc](http://apidoc.com) elements from api schemas.

`@apiSchema [(group)] {SCHEMA_TYPE=PATH_TO_SCHEMA} {base_path=xx} ELEMENT_TYPE`

## Install
`npm install apidoc-plugin-schema --save-dev`

## Supported Schemas
### [jsonschema](http://json-schema.org)
- `description`
- `type`
 - `array`: `items`
 - `object`: `properties`,`required`
 - `integer`: `minimum`,`maximum`
 - `number`: `minLength`,`maxLength`
- `enum`
- `default`
- auto groups object of array/object

## Example Use
```javascript
/**
 * @api {get} /api GetAPI
 * @apiSchema (Body) {jsonschema=./schema/api.req.json} {base_path=xx} apiParam
 * @apiSchema {jsonschema=./schema/api.res.json} {base_path=xx} apiSuccess
 */
```

## Developer Note
This plugin uses `parser-find-elements` @ priority `201`.

## TODO
- Add in unit test for jsonschema
- Add in travis-ci
- add in xml/wsdl schema type

### jsonschema
- add in support for exclusive number ranges
- add support for `"oneOf":[{"required":[...]},...]`
- add support for `"oneOf":[{"type":"string"},...]`
- add support for `allOf`
