(function () {
    console.log("Hiding the 'Move Messages' button");
  
    const observer = new MutationObserver(function (mutationsList, observer) {
      hideButton();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    // Initial check in case the button is already in the DOM
    hideButton();
  
    function hideButton() {
      if (window.location.hash.endsWith("dlq")) return;
  
      const btn = document.querySelector(
        'form[method="delete"].confirm-purge-queue'
      );
      if (btn) {
        console.log("Removing purge queue option", btn);
        btn.style.display = "none";
      }
    }
  })();
  