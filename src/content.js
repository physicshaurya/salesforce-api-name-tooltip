// Listen for mouse hover events on fields
document.addEventListener("mouseover", function(event) {
    const target = event.target;
    
    // Check if the hovered element is a field
    if (target.classList.contains("dataCell")) {
      const apiName = target.getAttribute("data-fieldapi");
      
      // Create and display the tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "api-tooltip";
      tooltip.textContent = "API Name: " + apiName;
      
      // Position the tooltip
      const rect = target.getBoundingClientRect();
      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.top - 20 + "px";
      
      // Add the tooltip to the DOM
      document.body.appendChild(tooltip);
    }
  });
  
  // Remove the tooltip when the mouse leaves the field
  document.addEventListener("mouseout", function(event) {
    if (event.target.classList.contains("dataCell")) {
      const tooltip = document.querySelector(".api-tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    }
  });
  