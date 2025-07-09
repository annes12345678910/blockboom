Blockly.JavaScript["event_start"] = function (block) {
  return "function start() {\n";
};

Blockly.JavaScript["move"] = function (block) {
  const x = block.getFieldValue("X");
  const y = block.getFieldValue("Y");
  return `  player.move(${x}, ${y});\n`;
};
