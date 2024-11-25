document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("input");
  let submit = document.getElementById("submit");
  let item1 = document.getElementById("item1");
  let emoji = document.getElementById("emoji");

  async function results(item1, item2) {
    item1 = item1.toLowerCase();
    item2 = item2.toLowerCase();
    let url = "https://api.ch3n.cc/whatbeatspaper/compare";

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item1: item1,
          item2: item2,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      item1.textContent = "Error";
      emoji.textContent = "❌";
    }
  }

  submit.addEventListener("click", function () {
    let value = input.value;
    let item2 = item1.textContent;
    results(value, item2);
  });

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let value = input.value;
      let item2 = item1.textContent;
      results(value, item2);
    }
  });
});
