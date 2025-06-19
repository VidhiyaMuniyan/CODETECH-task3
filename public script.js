const ws = new WebSocket("ws://localhost:3000");
const editor = document.getElementById("editor");

let ignoreChange = false;

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'init') {
    editor.value = data.content;
  } else if (data.type === 'update') {
    ignoreChange = true;
    editor.value = data.content;
    ignoreChange = false;
  }
};

editor.addEventListener("input", () => {
  if (!ignoreChange) {
    ws.send(JSON.stringify({
      type: "update",
      content: editor.value
    }));
  }
});
