function chat() {
    let usercomm = document.querySelector("#inputid").value;
    let newele = document.createElement("div");
    newele.style.color = "black";
    newele.style.marginTop = "8px";
    newele.style.background = "#dcf8c6";
    newele.style.marginRight = "120px";
    newele.style.border = "thin solid";
    newele.style.borderRadius = "8px";
    newele.style.padding = "5px";
    const child1 = document.createElement("div");
    child1.textContent = usercomm;
    newele.appendChild(child1);
    let comm = document.querySelector("#chatbox");
    comm.insertBefore(newele, chatbox.firstchild);
    document.querySelector("#inputid").value = "";
}