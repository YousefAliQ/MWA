const Ajv = require('ajv');

const ajv = new Ajv({allErrors: true, coerceTypes: true });

module.exports.checkIfJSONValid = function(req, res, next) {
    const schema = {
        "properties": {
            "id": { "type": "number" },
            "name": { "type": "string" },
            "course": { "type": "string" },
            "picture": { "type": "string" },
            "grade": { "type": "number" }
        },
        "required": [ "id","name","course","grade" ]

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
