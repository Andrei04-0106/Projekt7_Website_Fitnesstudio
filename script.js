document.querySelectorAll("#showInput").forEach((button, index) => {
  button.addEventListener("click", () => {
    let content = document.querySelectorAll("#showContent")[index]; // Holt den passenden Inhalt basierend auf der Reihenfolge
    if (!content) {
      alert("Error");
      return;
    }

    if (content.style.display == "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
