/* eslint-disable import/no-anonymous-default-export */
import Ajv from "ajv";
import profileSchema from "../common/profile.schema.json"

const ajv = new Ajv();

const validateProfile = ajv.compile({
    ...profileSchema,
    $id: profileSchema.$schema,
});

function profileSchemaValidate(profileJson) {
    var valid = validateProfile(profileJson);
    
    return validateProfile.errors ?? valid;
}

export default {
    profileSchemaValidate,
}