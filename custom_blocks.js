Blockly.Blocks['kids_run_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/toolbar-icons/marmalade-icons-by-icojam/png/48x48/1_012.png", 60, 60, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Robot move left");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kids_run_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['kids_run_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/toolbar-icons/marmalade-icons-by-icojam/png/48x48/1_018.png", 60, 60, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Robot move right");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kids_run_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['kids_run_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/toolbar-icons/marmalade-icons-by-icojam/png/48x48/1_017.png", 60, 60, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Robot move backward");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kids_run_backward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Blocks['kids_run_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://files.softicons.com/download/toolbar-icons/marmalade-icons-by-icojam/png/48x48/1_028.png", 60, 60, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Robot move forward");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kids_run_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//line_follower
Blockly.Blocks['line_follower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line follower sensor ON/OFF")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "Line_follower_sensor_state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Line follower sensor ON/OFF");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['line_follower'] = function(block) {
  var dropdown_line_follower_sensor_state = block.getFieldValue('Line_follower_sensor_state');
  var i;
  if(dropdown_line_follower_sensor_state=='ON'){
	  i = '1';
  }else{
	  if(dropdown_line_follower_sensor_state=='OFF'){
	  i = '0';
	  }
  }
  // TODO: Assemble JavaScript into code variable.
  var code = '#114{' + i + '};\n';
  return code;
};

//ultrasonic
Blockly.Blocks['ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic sensor ON/OFF")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "Ultrasonic_sensor_state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Ultrasonic sensor ON/OFF");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['ultrasonic'] = function(block) {
  var dropdown_ultrasonic_sensor_state = block.getFieldValue('Ultrasonic_sensor_state');
  var i;
  if(dropdown_ultrasonic_sensor_state=='ON'){
	  i = '1';
  }else{
	  if(dropdown_ultrasonic_sensor_state=='OFF'){
	  i = '0';
	  }
  }
  // TODO: Assemble JavaScript into code variable.
  var code = '#115{' + i + '};\n';
  return code;
};

//sound_sensor
Blockly.Blocks['sound_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sound sensor ON/OFF")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "Sound _sensor_state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Sound sensor ON/OFF");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sound_sensor'] = function(block) {
  var dropdown_sound__sensor_state = block.getFieldValue('Sound _sensor_state');
  var i;
  if(dropdown_sound__sensor_state=='ON'){
	  i = '1';
  }else{
	  if(dropdown_sound__sensor_state=='OFF'){
	  i = '0';
	  }
  }
  // TODO: Assemble JavaScript into code variable.
  var code = '#116{' + i + '};\n';
  return code;
};

//lights_sensor
Blockly.Blocks['lights_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lights sensor ON/OFF")
        .appendField(new Blockly.FieldDropdown([["ON","ON"], ["OFF","OFF"]]), "Lights_sensor_state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Lights sensor ON/OFF");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['lights_sensor'] = function(block) {
  var dropdown_lights_sensor_state = block.getFieldValue('Lights_sensor_state');
  var i;
  if(dropdown_lights_sensor_state=='ON'){
	  i = '1';
  }else{
	  if(dropdown_lights_sensor_state=='OFF'){
	  i = '0';
	  }
  }
  // TODO: Assemble JavaScript into code variable.
  var code = '#117{' + i + '};\n';
  return code;
};
