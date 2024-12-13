// document.addEventListener("DOMContentLoaded", function () {

//   window.addEventListener('hashchange', function(){
//     console.log('Now at' + window.location.hash);
//   });

//   console.log('asidbasijdub')

//   const button = document.getElementById("hermes_mailer_dlq");
//   if (button) {
//     button.addEventListener("click", function () {
//         // TODO - move to a file so this can be injected into the page, rather than running on the popup
//       const advocates = [...document.querySelectorAll("pre.msg-payload")].map((payloadNode) => {
//         const payload = JSON.parse(payloadNode.textContent);
//         return {
//           advocate_id: payload.arguments.metadata.advocate_id,
//           send_id: payload.arguments.metadata.send_id,
//         };
//       });

//       alert(JSON.stringify(advocates));
//     });
//   }
// });

// (function () {

//   console.log('asidbasddddddddddijdub')

//   window. = function(){
//     console.log('Now at' + window.location.hash);
//   };

// const observer = new MutationObserver(function (mutationsList, observer) {
//   hideButton();
// });

// observer.observe(document.body, { childList: true, subtree: true });

// // Initial check in case the button is already in the DOM
// hideButton();

// function hideButton() {
//   if (window.location.hash.endsWith("dlq")) return;

//   const btn = document.querySelector(
//     'form[method="delete"].confirm-purge-queue'
//   );
//   if (btn) {
//     console.log("Removing purge queue option", btn);
//     btn.style.display = "none";
//   }
// }
// })();

(function () {
  console.log("Helping with hermes_mailer_dlq");

  // const observer = new MutationObserver(function (mutationsList, observer) {
  //
  //   addAbilityToGrabSendIds();
  // });

  let added = false;

  function addAbilityToGrabSendIds() {
    if(added) return;
    added = true;

    console.log("Adding ability to grab send IDs");
    const grabSendIdsButton = document.createElement("button", { id: "hermes_mailer_dlq_button" });
    grabSendIdsButton.style.position = "fixed";
    grabSendIdsButton.style.bottom = "10px";
    grabSendIdsButton.style.right = "10px";
    grabSendIdsButton.style.zIndex = "1000";

    grabSendIdsButton.textContent = "Grab Send IDs";

    grabSendIdsButton.onclick = function () {
      const advocates = [...document.querySelectorAll("pre.msg-payload")].map(
        (payloadNode) => {
          const payload = JSON.parse(payloadNode.textContent);
          return {
            advocate_id: payload.arguments.metadata.advocate_id,
            send_id: payload.arguments.metadata.send_id,
          };
        }
      );

      console.log(advocates);
    };

    document.body.prepend(grabSendIdsButton);

    
  }



  window.addEventListener("hashchange", () => {
    if (window.location.hash.endsWith("_mailer_dlq")) {
      addAbilityToGrabSendIds();
    } else {
      document.getElementById("hermes_mailer_dlq_button")?.remove();
      added = false;
    }
    
  });
  // document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash.endsWith("_mailer_dlq")) {
      addAbilityToGrabSendIds();
    } else {
      document.getElementById("hermes_mailer_dlq_button")?.remove();
      added = false;
    }
  // });
})();
