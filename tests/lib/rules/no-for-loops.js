/**
 * @fileoverview Any &#34;for&#34; loop statement is not allowed.
 * @author ilios Galil
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-for-loops"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-for-loops", rule, {
  valid: [{
    code: 'while (false) { console.log(null); }',
  }],
  invalid: [
    {
      code: 'for (var i = 0; i < 5; i++) { console.log(i) }',
      errors: [{ messageId: 'noForLoops' }],
    },
    {
      code: 'for (var key in { a: 1 }) { console.log(key) }',
      errors: [{ messageId: 'noForLoops' }],
    },
    {
      code: 'for (var value of [1,2,3]) { console.log(value) }',
      errors: [{ messageId: 'noForLoops' }],
    },
  ]
});
