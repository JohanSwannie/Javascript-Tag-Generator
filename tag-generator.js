const tagAmnt = document.getElementById("tagamount");
const tagDescr = document.getElementById("tagtext");
const errorMsg = document.getElementById("errorMsg");

let amount = 0;
let text = "";

tagAmnt.addEventListener("blur", () => {
  amount = tagAmnt.value;
  if (amount > 0) {
    errorMsg.innerHTML = "";
    tagDescr.addEventListener("blur", () => {
      text = tagDescr.value;
    });
  } else {
    tagDescr.value = "";
    errorMsg.innerHTML = "Tag Amount needs to be greate than Zero";
    tagAmnt.focus();
  }
});

const generateTag = () => {
  let textareaText = "";
  const container = document.querySelector(".container");
  const texy = document.createElement("textarea");
  while (amount > 0) {
    textareaText += `${text}. `;
    amount--;
  }
  texy.innerHTML = textareaText;
  container.appendChild(texy);
  tagAmnt.value = "";
  tagDescr.value = "";
};
