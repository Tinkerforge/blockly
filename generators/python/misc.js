/**
 * @fileoverview Generating Python for miscellaneous Tinkerforge Visual Programming Language (TVPL) blocks.
 * @author ishraq@tinkerforge.com (Ishraq Ibne Ashraf)
 */

'use strict';
goog.provide('Blockly.Python.misc');
goog.require('Blockly.Python');

Blockly.Python['tinkerforge_misc_sleep'] = function(block) {
  var value_time_amount = Blockly.Python.valueToCode(block, '_TIME_AMOUNT', Blockly.Python.ORDER_ATOMIC);
  var value_time_unit = block.getFieldValue('_TIME_UNIT');

  if (value_time_unit === 'TIME_UNIT_MS'){
    value_time_amount = value_time_amount / 1000;
  }

  Blockly.Python.definitions_['common_python_import_time'] = 'import time';

  var code = 'time.sleep(' + String(value_time_amount) + ')\n';

  return code;
};

Blockly.Python['tinkerforge_misc_repeat_with_interval'] = function(block) {
  var value_repeat_interval_time_amount = Blockly.Python.valueToCode(block, '_REPEAT_INTERVAL_TIME_AMOUNT', Blockly.Python.ORDER_ATOMIC);
  var value_repeat_interval_time_unit = block.getFieldValue('_REPEAT_INTERVAL_TIME_UNIT');
  var branch = Blockly.Python.statementToCode(block, '_REPEAT_INTERVAL_STATEMENTS');

  if (value_repeat_interval_time_unit === 'TIME_UNIT_MS'){
    value_repeat_interval_time_amount = value_repeat_interval_time_amount / 1000;
  }

  Blockly.Python.definitions_['common_python_import_time'] = 'import time';

  branch = branch + '  time.sleep(' + String(value_repeat_interval_time_amount) + ')\n';

  return 'while True:\n' + Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;;
};
