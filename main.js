    // Se ejecuta al inicio para mostrar "destacado" (Top Viajes)
    filterSelection("destacado");

    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      // Recorremos todos los elementos
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }

      // Manejo de clase 'active' en los botones
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("month-btn");
      for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
        // Si el botón tiene en su onclick la categoría actual, lo activamos
        if(btns[j].getAttribute("onclick").includes("'" + c + "'") || (c=="" && btns[j].getAttribute("onclick").includes("'all'")) ) {
            btns[j].classList.add("active");
        }
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }

// 2. LÓGICA DEL MODAL (VENTANA EMERGENTE)
    var modal = document.getElementById("infoModal");

    function openModal(btnElement) {
      // Encontrar la tarjeta padre
      var card = btnElement.closest(".card-content");
      
      // Sacar datos de la tarjeta
      var title = card.querySelector(".card-title").innerText;
      var detailsHTML = card.querySelector(".hidden-details").innerHTML;

      // Llenar el modal
      document.getElementById("modalTitle").innerText = title;
      document.getElementById("modalBody").innerHTML = detailsHTML;

      // Mostrar modal
      modal.style.display = "block";
    }

    function closeModal() {
      modal.style.display = "none";
    }

    // Cerrar si se hace clic fuera de la caja
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }