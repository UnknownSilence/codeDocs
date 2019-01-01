var editor;
var code;

window.addEventListener("load", function () {
    code = document.getElementById('codePanel');
    editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        mode: "javascript",
        autCloseTags: true,
        extraKeys: {
            "Ctrl-Space": "autocomplete"
        },

    });
})


const socket = io.connect("http://10.0.0.32:4001");

var submitBtn = document.getElementById("commitBtn");


submitBtn.addEventListener("click", function () {
    var codeEmit = editor.getValue();
    //console.log(codeBox.value);
    socket.emit('code', codeEmit)
});

//Listen for changes
socket.on('code', function (data) {
    editor.setValue(data);
});