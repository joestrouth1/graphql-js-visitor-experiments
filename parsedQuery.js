const parsed = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "query",
      "variableDefinitions": [],
      "directives": [],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "products",
              "loc": {
                "start": 11,
                "end": 19
              }
            },
            "arguments": [
              {
                "kind": "Argument",
                "name": {
                  "kind": "Name",
                  "value": "first",
                  "loc": {
                    "start": 20,
                    "end": 25
                  }
                },
                "value": {
                  "kind": "IntValue",
                  "value": "5",
                  "loc": {
                    "start": 27,
                    "end": 28
                  }
                },
                "loc": {
                  "start": 20,
                  "end": 28
                }
              }
            ],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "id",
                    "loc": {
                      "start": 36,
                      "end": 38
                    }
                  },
                  "arguments": [],
                  "directives": [],
                  "loc": {
                    "start": 36,
                    "end": 38
                  }
                },
                {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "name",
                    "loc": {
                      "start": 43,
                      "end": 47
                    }
                  },
                  "arguments": [],
                  "directives": [],
                  "loc": {
                    "start": 43,
                    "end": 47
                  }
                }
              ],
              "loc": {
                "start": 30,
                "end": 51
              }
            },
            "loc": {
              "start": 11,
              "end": 51
            }
          }
        ],
        "loc": {
          "start": 7,
          "end": 53
        }
      },
      "loc": {
        "start": 1,
        "end": 53
      }
    }
  ],
  "loc": {
    "start": 0,
    "end": 54
  }
}
