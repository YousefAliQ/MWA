const Ajv = require('ajv');

const ajv = new Ajv({allErrors: true, coerceTypes: true });

module.exports.checkIfJSONValid = function(req, res, next) {
    const schema = {
        "properties": {
            "id": { "type": "number" },
            "ISBN": { "type": "string" },
            "author": { "type": "string" },
            "return date": { "type": Date },
            "keywords": [{ "type": "string" }]
        }
        //"required": [ "id","name","course","grade" ]

    };
    const validate = ajv.compile(schema);
    const std = JSON.parse(JSON.parse(JSON.stringify(req.body)).student); 
    // to solve body:  [Object: null prototype]
    // and parse student object
    if (validate(std)) next();
    else{
            res.status(500);
            return next("err");
    }
}