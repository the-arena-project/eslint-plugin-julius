/**
 * @fileoverview Any "for" loop statement is not allowed.
 * @author ilios Galil
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Any type of \"for\" loop statements is not allowed.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noForLoops: 'Julius doesn\'t like "for" loop statements.',
    },
  },

  create(context) {
    // variables should be defined here
    const allForLoopTypes = ["ForStatement", "ForInStatement", "ForOfStatement"].join(",");

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    // any helper functions should go here or else delete this section


    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      [allForLoopTypes](node) {
        context.report({ node, messageId: "noForLoops" });
      }
    }
  },
};
