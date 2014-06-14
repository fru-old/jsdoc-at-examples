{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "defaults": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "isInteger",
                  "range": [
                    251,
                    260
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "x",
                    "range": [
                      261,
                      262
                    ]
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "name": "x",
                          "range": [
                            276,
                            277
                          ]
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "Math",
                              "range": [
                                282,
                                286
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "floor",
                              "range": [
                                287,
                                292
                              ]
                            },
                            "range": [
                              282,
                              292
                            ]
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x",
                              "range": [
                                293,
                                294
                              ]
                            }
                          ],
                          "range": [
                            282,
                            295
                          ]
                        },
                        "range": [
                          276,
                          295
                        ]
                      },
                      "range": [
                        269,
                        296
                      ]
                    }
                  ],
                  "range": [
                    264,
                    299
                  ]
                },
                "rest": null,
                "generator": false,
                "expression": false,
                "range": [
                  242,
                  299
                ],
                "leadingComments": [
                  {
                    "type": "Block",
                    "value": "*\r\n * @examples\r\n * isInteger(5)     // true\r\n * isInteger(5.0)   // true\r\n * isInteger(-5)    // true\r\n * isInteger(3.14)  // false\r\n * isInteger('foo') // false\r\n * isInteger(NaN)   // false\r\n ",
                    "range": {
                      "0": 41,
                      "1": 240
                    },
                    "extendedRange": [
                      39,
                      242
                    ]
                  }
                ]
              }
            ],
            "range": [
              38,
              302
            ]
          },
          "rest": null,
          "generator": false,
          "expression": false,
          "range": [
            28,
            302
          ]
        },
        "arguments": [],
        "range": [
          27,
          305
        ]
      },
      "range": [
        27,
        305
      ]
    }
  ],
  "range": [
    27,
    305
  ],
  "comments": [
    {
      "type": "Block",
      "value": " \r\n * Leading \r\n ",
      "range": [
        0,
        21
      ]
    },
    {
      "type": "Block",
      "value": "*\r\n * @examples\r\n * isInteger(5)     // true\r\n * isInteger(5.0)   // true\r\n * isInteger(-5)    // true\r\n * isInteger(3.14)  // false\r\n * isInteger('foo') // false\r\n * isInteger(NaN)   // false\r\n ",
      "range": [
        41,
        240
      ]
    }
  ],
  "tokens": [
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        27,
        28
      ]
    },
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        28,
        36
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        36,
        37
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        37,
        38
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        38,
        39
      ]
    },
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        242,
        250
      ]
    },
    {
      "type": "Identifier",
      "value": "isInteger",
      "range": [
        251,
        260
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        260,
        261
      ]
    },
    {
      "type": "Identifier",
      "value": "x",
      "range": [
        261,
        262
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        262,
        263
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        264,
        265
      ]
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        269,
        275
      ]
    },
    {
      "type": "Identifier",
      "value": "x",
      "range": [
        276,
        277
      ]
    },
    {
      "type": "Punctuator",
      "value": "===",
      "range": [
        278,
        281
      ]
    },
    {
      "type": "Identifier",
      "value": "Math",
      "range": [
        282,
        286
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        286,
        287
      ]
    },
    {
      "type": "Identifier",
      "value": "floor",
      "range": [
        287,
        292
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        292,
        293
      ]
    },
    {
      "type": "Identifier",
      "value": "x",
      "range": [
        293,
        294
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        294,
        295
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        295,
        296
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        298,
        299
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        301,
        302
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        302,
        303
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        303,
        304
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        304,
        305
      ]
    }
  ],
  "leadingComments": [
    {
      "type": "Block",
      "value": " \r\n * Leading \r\n ",
      "range": {
        "0": 0,
        "1": 21
      },
      "extendedRange": [
        0,
        27
      ]
    }
  ]
}