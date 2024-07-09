(function () {
  if (!window.location.pathname.endsWith("dlq")) {
    console.log("Hiding the 'Move Messages' button");

    const observer = new MutationObserver(function (mutationsList, observer) {
      hideButton(observer);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check in case the button is already in the DOM
    hideButton(observer);
  }

  function hideButton(observer) {
    const btn = document.querySelector(
      'form[method="put"][action="#/shovel-parameters-move-messages"]'
    );
    if (btn) {
      console.log("Button found and hidden: ", btn);
      btn.style.display = "none";
      observer.disconnect();
    }
  }
})();