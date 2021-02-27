// @ts-nocheck
// eslint-disable
// This file is generated by create-validator-ts
import Ajv from 'ajv';
import * as apiTypes from './api-types';

const SCHEMA = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "CreateRequestQuery": {
            "type": "object",
            "properties": {
                "token": {
                    "type": "string"
                }
            },
            "required": [
                "token"
            ],
            "additionalProperties": false
        },
        "CreateRequestBody": {
            "type": "object",
            "properties": {
                "budget": {
                    "type": "number"
                }
            },
            "required": [
                "budget"
            ],
            "additionalProperties": false
        },
        "AddRequestQuery": {
            "type": "object",
            "properties": {
                "token": {
                    "type": "string"
                },
                "spreadsheetId": {
                    "type": "string"
                }
            },
            "required": [
                "token",
                "spreadsheetId"
            ],
            "additionalProperties": false
        },
        "AddRequestBody": {
            "type": "object",
            "properties": {
                "to": {
                    "type": "string"
                },
                "amount": {
                    "type": "number"
                },
                "url": {
                    "type": "string"
                },
                "memo": {
                    "type": "string"
                },
                "meta": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string",
                            "enum": [
                                "checking",
                                "checked"
                            ]
                        }
                    },
                    "required": [
                        "type"
                    ],
                    "additionalProperties": false
                }
            },
            "required": [
                "to",
                "amount",
                "url",
                "memo",
                "meta"
            ],
            "additionalProperties": false
        },
        "GetRequestQuery": {
            "type": "object",
            "properties": {
                "token": {
                    "type": "string"
                },
                "spreadsheetId": {
                    "type": "string"
                }
            },
            "required": [
                "token",
                "spreadsheetId"
            ],
            "additionalProperties": false
        },
        "GetResponseBody": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "year": {
                        "type": "string"
                    },
                    "README": {
                        "type": "string"
                    },
                    "stats": {
                        "type": "object",
                        "properties": {
                            "budget": {
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "type": "number"
                                    },
                                    "value": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "raw",
                                    "value"
                                ],
                                "additionalProperties": false
                            },
                            "used": {
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "type": "number"
                                    },
                                    "value": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "raw",
                                    "value"
                                ],
                                "additionalProperties": false
                            },
                            "balance": {
                                "type": "object",
                                "properties": {
                                    "raw": {
                                        "type": "number"
                                    },
                                    "value": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "raw",
                                    "value"
                                ],
                                "additionalProperties": false
                            }
                        },
                        "required": [
                            "budget",
                            "used",
                            "balance"
                        ],
                        "additionalProperties": false
                    },
                    "items": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/RecordItem"
                        }
                    }
                },
                "required": [
                    "year",
                    "README",
                    "stats",
                    "items"
                ],
                "additionalProperties": false
            }
        },
        "RecordItem": {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string"
                },
                "to": {
                    "type": "string"
                },
                "amount": {
                    "type": "number"
                },
                "url": {
                    "type": "string"
                },
                "memo": {
                    "type": "string"
                },
                "meta": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string",
                            "enum": [
                                "checking",
                                "checked"
                            ]
                        }
                    },
                    "required": [
                        "type"
                    ],
                    "additionalProperties": false
                }
            },
            "required": [
                "date",
                "to",
                "amount",
                "url",
                "memo",
                "meta"
            ],
            "additionalProperties": false
        }
    }
};
const ajv = new Ajv({ removeAdditional: true }).addSchema(SCHEMA, "SCHEMA");
export function validateCreateRequestQuery(payload: unknown): apiTypes.CreateRequestQuery {
  if (!isCreateRequestQuery(payload)) {
  　const error = new Error('invalid payload: CreateRequestQuery');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isCreateRequestQuery(payload: unknown): payload is apiTypes.CreateRequestQuery {
  /** Schema is defined in {@link SCHEMA.definitions.CreateRequestQuery } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/CreateRequestQuery" });
  return ajvValidate(payload);
}

export function validateCreateRequestBody(payload: unknown): apiTypes.CreateRequestBody {
  if (!isCreateRequestBody(payload)) {
  　const error = new Error('invalid payload: CreateRequestBody');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isCreateRequestBody(payload: unknown): payload is apiTypes.CreateRequestBody {
  /** Schema is defined in {@link SCHEMA.definitions.CreateRequestBody } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/CreateRequestBody" });
  return ajvValidate(payload);
}

export function validateAddRequestQuery(payload: unknown): apiTypes.AddRequestQuery {
  if (!isAddRequestQuery(payload)) {
  　const error = new Error('invalid payload: AddRequestQuery');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isAddRequestQuery(payload: unknown): payload is apiTypes.AddRequestQuery {
  /** Schema is defined in {@link SCHEMA.definitions.AddRequestQuery } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/AddRequestQuery" });
  return ajvValidate(payload);
}

export function validateAddRequestBody(payload: unknown): apiTypes.AddRequestBody {
  if (!isAddRequestBody(payload)) {
  　const error = new Error('invalid payload: AddRequestBody');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isAddRequestBody(payload: unknown): payload is apiTypes.AddRequestBody {
  /** Schema is defined in {@link SCHEMA.definitions.AddRequestBody } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/AddRequestBody" });
  return ajvValidate(payload);
}

export function validateGetRequestQuery(payload: unknown): apiTypes.GetRequestQuery {
  if (!isGetRequestQuery(payload)) {
  　const error = new Error('invalid payload: GetRequestQuery');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isGetRequestQuery(payload: unknown): payload is apiTypes.GetRequestQuery {
  /** Schema is defined in {@link SCHEMA.definitions.GetRequestQuery } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/GetRequestQuery" });
  return ajvValidate(payload);
}

export function validateGetResponseBody(payload: unknown): apiTypes.GetResponseBody {
  if (!isGetResponseBody(payload)) {
  　const error = new Error('invalid payload: GetResponseBody');
    error.name = "ValidationError";
    throw error;
  }
  return payload;
}

export function isGetResponseBody(payload: unknown): payload is apiTypes.GetResponseBody {
  /** Schema is defined in {@link SCHEMA.definitions.GetResponseBody } **/
  const ajvValidate = ajv.compile({ "$ref": "SCHEMA#/definitions/GetResponseBody" });
  return ajvValidate(payload);
}
