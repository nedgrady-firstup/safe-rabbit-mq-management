document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("hermes_mailer_dlq");
  if (button) {
    button.addEventListener("click", function () {
        // TODO - move to a file so this can be injected into the page, rather than running on the popup
      const advocates = [...document.querySelectorAll("pre.msg-payload")].map((payloadNode) => {
        const payload = JSON.parse(payloadNode.textContent);
        return {
          advocate_id: payload.arguments.metadata.advocate_id,
          send_id: payload.arguments.metadata.send_id,
        };
      });

      alert(JSON.stringify(advocates));
    });
  }
});
