document.getElementById("mybtn").addEventListener("click", async () => {
  await eel.getData()(result);
});
function result(result) {
  console.log(result);
  document.getElementById("result").innerHTML = result;
}
