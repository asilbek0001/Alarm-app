function chiqarish() {
    var input1 = document.getElementById("inp1");
    var input2 = document.getElementById("inp2");

    var text1 = input1.value.trim();
    var text2 = input2.value.trim();

    if (!text1 || !text2) return;

    var newDiv = document.createElement("div");
    newDiv.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: red;
        color: white;
        padding: 8px 12px;
        margin-top: 8px;
        border-radius: 6px;
    `;

    var textSpan = document.createElement("span");
    textSpan.textContent = `${text1}:${text2}`;

    var icons = document.createElement("div");

    var editIcon = document.createElement("span");
    editIcon.textContent = "✏️";
    editIcon.style.marginRight = "10px";
    editIcon.style.cursor = "pointer";

    var deleteIcon = document.createElement("span");
    deleteIcon.textContent = "🗑️";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.onclick = () => newDiv.remove();

    icons.append(editIcon, deleteIcon);
    newDiv.append(textSpan, icons);
    document.getElementById("div1").appendChild(newDiv);

    input1.value = "";
    input2.value = "";
}


