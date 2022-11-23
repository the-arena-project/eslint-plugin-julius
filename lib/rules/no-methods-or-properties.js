/**
 * @fileoverview Methods and/or properties are not allowed.
 * @author ilios Galil
 */
"use strict";
const utils = require("eslint-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Methods and/or Properties are not allowed.',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        anyOf: [
          {
            type: "object",
            properties: {
              allowed: {
                type: "array",
                items: {
                  anyOf: [
                    { type: 'string' },
                    { type: 'array', minItems: 1, maxItems: 2, items: [{ type: 'string' }] },
                  ],
                },
                minItems: 0,
              }
            },
            additionalProperties: false,
          },
        ],
      }
    ],
    messages: {
      methodNotAllowed: 'Julius doesn\'t like "{{propertyName}}".',
    },
  },

  create(context) {
    // variables should be defined here

    // The options object must be the last option specified…
    const options = Object.assign({}, context.options[context.options.length - 1]);
    if (!options.allowed) return;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    // any helper functions should go here or else delete this section
    const check = (node) => {
      const isComputed = node.computed; // isComputed means it's not a dot annotation but in brackets
      const isLiteral = node.property.type === 'Literal';
      const isLiteralNumber = isLiteral && (typeof node.property.value === 'number');
      if (isComputed && isLiteralNumber) return; // index number in brackets, ex: "list[5]"

      let propertyName = utils.getPropertyName(node, context.getScope());
      const methodIsAllowed = options.allowed.some((allowedValue) => {
        if (typeof allowedValue === 'string') {
          return allowedValue === propertyName;
        }
        if (Array.isArray(allowedValue) && allowedValue.length) {
          const chainLength = allowedValue.length;
          if (chainLength === 1) {
            return propertyName === allowedValue[0];
          }
          if (chainLength === 2) {
            const isChildAllowed = propertyName === allowedValue[0];
            let isParentAllowed;
            if (isChildAllowed && node.object && node.object.name && !node.object.property) {
              isParentAllowed = node.object.name === allowedValue[1];
            }
            if (isChildAllowed && node.object && !node.object.name && node.object.property && node.object.property.name) {
              isParentAllowed = node.object.property.name === allowedValue[1];
            }
            return isChildAllowed && isParentAllowed;
          }
        }
        return false;
      });

      if (methodIsAllowed) return;

      context.report({
        node,
        messageId: 'methodNotAllowed',
        data: {
          propertyName
        }
      });
    }


    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      MemberExpression(node) {
        check(node);
      },
    }
  },
};
