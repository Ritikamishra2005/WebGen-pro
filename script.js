function run() {
  const html = document.getElementById("htmlCode").value;
  const css = "<style>" + document.getElementById("cssCode").value + "</style>";
  const js = "<script>" + document.getElementById("jsCode").value + "<\/script>";
  const output = document.getElementById("output");
  output.srcdoc = html + css + js;
}

function download() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const zipContent = `
<!DOCTYPE html>
<html>
<head>
  <title>My WebGen Site</title>
  <style>${css}</style>
</head>
<body>
${html}
<script>${js}</script>
</body>
</html>
`;

  const blob = new Blob([zipContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my-website.html";
  link.click();
}
