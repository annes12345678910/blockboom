import "./blocks.js";
import "./generators.js";

const toolbox = `
  <xml>
    <block type="event_start"></block>
    <block type="move"></block>
  </xml>
`;

const workspace = Blockly.inject("blocklyDiv", {
  toolbox: toolbox,
});

const iframe = document.getElementById("output");

const runCode = () => {
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code)
  code += "\nstart();";
  iframe.srcdoc = `
    <script type="module">
      import kaboom from 'https://unpkg.com/kaboom@3000.0.0-beta.8/dist/kaboom.mjs';
      const k = kaboom();
      const player = k.add([k.rect(32, 32), k.pos(100, 100), k.area(), k.body()]);
      ${code}
    </script>
  `;
};

workspace.addChangeListener(runCode);
