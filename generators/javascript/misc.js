/**
 * @fileoverview Generating JavaScript for miscellaneous Tinkerforge Visual Programming Language (TVPL) blocks.
 * @author ishraq@tinkerforge.com (Ishraq Ibne Ashraf)
 */

'use strict';
goog.provide('Blockly.JavaScript.misc');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['tinkerforge_misc_sleep'] = function(block) {
  var value_time_amount = Blockly.JavaScript.valueToCode(block, '_TIME_AMOUNT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time_unit = block.getFieldValue('_TIME_UNIT');

  if (value_time_unit === 'TIME_UNIT_S'){
    value_time_amount = value_time_amount * 1000;
  }

  Blockly.JavaScript.definitions_['tinkerforge_misc_sleep'] = 'function* _tf_misc_sleep(duration) {\n'+
'  setTimeout(function() { _iterator_main.next(); }, duration);\n'+
'  yield 1;\n'+
'}\n';

  var code = 'yield* _tf_misc_sleep(' + String(value_time_amount) + ');\n';

  return code;
};
