(function () {
  console.log("Hiding the 'Move Messages' button");

  const observer = new MutationObserver(function (mutationsList, observer) {
    addSuggestedDestinationQueue();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial check in case the button is already in the DOM
  addSuggestedDestinationQueue();

  function addSuggestedDestinationQueue() {
    if (window.location.hash.endsWith("!dlq")) return;

    const destinationQueueInput = document.querySelector(
      'input[name="dest-queue"]'
    );
    if (destinationQueueInput) {
      console.log("Adding suggested destination queue", destinationQueueInput);

      const dlqName = new URL(window.location.href).hash.split('/').pop();
      const productionQueueName = dlqName.replace(/dlq$/, 'production');

      destinationQueueInput.value = productionQueueName;
      destinationQueueInput.setAttribute('size', productionQueueName.length);
      destinationQueueInput.style.width = 'auto'
    }
  }
})();
