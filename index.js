function insertDiv() {
  let note = document.getElementById("meters").value;
  let height = document.getElementById("height").value;
  let sample = document.getElementById("sample").value;
  document.body.insertAdjacentHTML(
    "afterend",
    `<div class="div">
  <span>${note}</span>
  <div class="dolomitolite" style="height: ${height}px"></div>
  <div class="sample">
    <div></div>
    <span>2201.5-${sample}</span>
  </div>
</div>`
  );
}

{
  /* <div class="div">
  <span>120.68</span>
  <div class="dolomitolite-bilds" style="height: 34px"></div>
  <div class="sample">
    <div></div>
    <span>2201.5-120.68</span>
  </div>
</div>; */
}
