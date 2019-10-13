//run_forward
Blockly.Blocks['run_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/forward.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Robot move forward");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['run_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#101{};\n';
  return code;
};

//run_backward
Blockly.Blocks['run_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/backward.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move robot backward");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['run_backward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#102{};\n';
  return code;
};

//turn_left
Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/left.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn robot left");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['turn_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#103{};\n';
  return code;
};

//turn_right
Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/right.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn robot left");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['turn_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#104{};\n';
  return code;
};

//turn_back_left
Blockly.Blocks['turn_back_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/backleft.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn robot left");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['turn_back_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#118{};\n';
  return code;
};

//turn_back_right
Blockly.Blocks['turn_back_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/backright.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn robot left");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['turn_back_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#119{};\n';
  return code;
};

//stop
Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/stop-cartoon.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn robot left");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#106{};\n';
  return code;
};

//led_red_on
Blockly.Blocks['led_red_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/red_on.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Red lights on");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_red_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#107{1};\n';
  return code;
};

//led_red_off
Blockly.Blocks['led_red_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/red_off.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Red lights off");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_red_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#107{0};\n';
  return code;
};

//led_green_on
Blockly.Blocks['led_green_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/green_on.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Green lights on");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_green_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#109{1};\n';
  return code;
};

//led_green_off
Blockly.Blocks['led_green_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/green_off.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Green lights off");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_green_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#109{0};\n';
  return code;
};

//led_blue_on
Blockly.Blocks['led_blue_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/blue_on.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Blue lights on");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_blue_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#108{1};\n';
  return code;
};

//led_blue_off
Blockly.Blocks['led_blue_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/blue_off.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Blue lights off");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['led_blue_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#108{0};\n';
  return code;
};

//light_show_on
Blockly.Blocks['light_show_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/light_show_on.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Light show on");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['light_show_on'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#110{1};\n';
  return code;
};

//light_show_off
Blockly.Blocks['light_show_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/light_show_off.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("Light show off");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['light_show_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#110{0};\n';
  return code;
};

//dance_show_1
Blockly.Blocks['dance_show_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/aliarben/KeyCodeKids/raw/master/img/dance1.png", 50, 50, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Dance show");
 this.setHelpUrl("");
  }
}
Blockly.JavaScript['dance_show_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#111{};\n';
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
