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

  Blockly.JavaScript.definitions_['tinkerforge_misc_sleep'] = 'function *_tf_misc_sleep(duration) {\n'+
'  setTimeout(function() { _iterator_main.next(); }, duration);\n'+
'  yield 1;\n'+
'}\n';

  var code = 'yield *_tf_misc_sleep(' + String(value_time_amount) + ');\n';

  return code;
};

Blockly.JavaScript['tinkerforge_misc_repeat_with_interval'] = function(block) {
  var value_repeat_interval_time_amount = Blockly.JavaScript.valueToCode(block, '_REPEAT_INTERVAL_TIME_AMOUNT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_repeat_interval_time_unit = block.getFieldValue('_REPEAT_INTERVAL_TIME_UNIT');
  var branch = Blockly.JavaScript.statementToCode(block, '_REPEAT_INTERVAL_STATEMENTS');

  if (value_repeat_interval_time_unit === 'TIME_UNIT_S'){
    value_repeat_interval_time_amount = value_repeat_interval_time_amount * 1000;
  }

  Blockly.JavaScript.definitions_['tinkerforge_misc_sleep'] = 'function *_tf_misc_sleep(duration) {\n'+
'  setTimeout(function() { _iterator_main.next(); }, duration);\n'+
'  yield 1;\n'+
'}\n';

  branch = branch + '  yield *_tf_misc_sleep(' + String(value_repeat_interval_time_amount) + ');\n';

  return 'while (true) {\n' + Blockly.JavaScript.addLoopTrap(branch, block.id) + '}\n';
};
