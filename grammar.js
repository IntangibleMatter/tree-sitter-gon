/**
 * @file A tree-sitter parser for Glaiel Object Notation
 * @author IntangibleMatter
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "gon",

  rules: {
    // TODO: add the actual grammar rules
    document: ($) => repeat(choice($.pair, $.comment)),

    pair: ($) => seq($.identifier, /\s/, $._value),
    _value: ($) => choice($.object, $.array, $.number, $.string, $.boolean),
    identifier: ($) => /[\w_]([\w_]*)/,
    object: ($) => seq("{", repeat(choice($.pair, $.comment)), "}"),
    array: ($) => seq("[", repeat(choice($._value, $.comment)), "]"),
    number: ($) => prec(10, /([-+]?[0-9]*\.?[0-9]+)/),
    string: ($) => prec(1, /(("(?:[^"\\]|\\.)*")|([^(\s\,\[\{\}\]$)]+))/),
    boolean: ($) => choice("true", "false"),
    comment: ($) => choice($._line_comment, $._block_comment),
    _line_comment: ($) => seq(choice("//", "#"), /.*?\n/),
    _block_comment: ($) => seq("/*", /(.|\s)*?\*\//),
  },
});
