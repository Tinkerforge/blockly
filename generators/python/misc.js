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

  Blockly.Python.definitions_['import_tinkerforge_misc_sleep'] = 'import time';

  var code = 'time.sleep(' + String(value_time_amount) + ')\n';

  return code;
};
