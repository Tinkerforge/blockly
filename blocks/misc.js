/**
 * @fileoverview Miscellaneous blocks for Tinkerforge Visual Programming Language (TVPL).
 * @author ishraq@tinkerforge.com (Ishraq Ibne Ashraf)
 */

'use strict';
goog.provide('Blockly.Blocks.misc');
goog.require('Blockly.Blocks');

Blockly.Blocks['tinkerforge_misc_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Sleep');
    this.appendValueInput('_TIME_AMOUNT')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['Millisecond(s)', 'TIME_UNIT_MS'], ['Second(s)', 'TIME_UNIT_S']]), '_TIME_UNIT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tinkerforge_misc_repeat_with_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Keep repeating with');
    this.appendValueInput('_REPEAT_INTERVAL_TIME_AMOUNT')
        .setCheck('Number')
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['Millisecond(s)', 'TIME_UNIT_MS'], ['Second(s)', 'TIME_UNIT_S']]), '_REPEAT_INTERVAL_TIME_UNIT');
    this.appendDummyInput()
        .appendField('interval');
    this.appendStatementInput('_REPEAT_INTERVAL_STATEMENTS');
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setColour(20);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setHelpUrl('');
  }
};
