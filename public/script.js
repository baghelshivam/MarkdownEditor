window.onload = function () {
  let inputData = document.getElementById("inputData");
  let outputMarkdown = document.getElementById("outputData");
  let transformer = new showdown.Converter();

  let inputToMarkdownOutPut = function () {
    let markDownInput = inputData.value;
    outputData = transformer.makeHtml(markDownInput);
    outputMarkdown.innerHTML = outputData;
  };

  inputData.addEventListener("input", inputToMarkdownOutPut);
  inputToMarkdownOutPut();
};
