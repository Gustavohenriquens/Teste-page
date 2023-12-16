let counters = {
  counter1: 0,
  counter2: 0,
  counter3: 0,
  counter4: 0,
  counter5: 0,
  counter6: 0
};

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

function closeModal(modalId) {
 
  for (let counterId in counters) {
    counters[counterId] = 0;
    document.getElementById(counterId).textContent = counters[counterId];
  }

  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

function updateCounter(counterId, value) {
  if (counterId === 'counter1' || counterId === 'counter3' || counterId === 'counter4' || counterId === 'counter5' || counterId === 'counter6') {
    counters[counterId] = Math.max(0, counters[counterId] + value);
  } else if (counterId === 'counter2') {
    counters[counterId] = Math.min(1, Math.max(0, counters[counterId] + value));
  }

  document.getElementById(counterId).textContent = counters[counterId];
}

function limitToppings() {
  var checkboxes = document.querySelectorAll('input[name="topping"]');
  var checkedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  checkboxes.forEach(function (checkbox) {
    checkbox.disabled = checkedCount === 2 && !checkbox.checked;
  });
}

function confirmPurchase(modalId) {

    var bairro = document.getElementById('bairro').value;
    var rua = document.getElementById('rua').value;
    var numeroCasa = document.getElementById('numeroCasa').value;
    
    if (!bairro || !rua || !numeroCasa) {
      alert("Por favor, preencha todos os campos de endereço.");
      return false;  // Impede o envio do formulário
  }

  // Obtenha as informações que o usuário selecionou
  var quantidade = document.getElementById('counter2').textContent;
  var toppingsSelecionados = [];
  var checkboxes = document.getElementsByName('topping');

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      toppingsSelecionados.push(checkbox.value);
    }
  });

 
  var salada = document.getElementById('counter1').textContent;
  var leiteEmPo1 = document.getElementById('counter3').textContent;
  var mel = document.getElementById('counter4').textContent;
  var granola = document.getElementById('counter5').textContent;
  var chocolate = document.getElementById('counter6').textContent;

 
  var mensagem = 'Pedido de Açaí:\nEmbalagem = ' + quantidade + ' Embalagem' +
    '\nAcompanhamentos : ' + toppingsSelecionados.join(', ').toUpperCase() +
    '\nAcompanhamentos 2 :' +
    '\nSalada = ' + salada + 
    '\nLeite em Pó = ' + leiteEmPo1 +
    '\nMel = ' + mel +
    '\nGranola = ' + granola +
    '\nChocolate = ' + chocolate +
    '\nEndereço de entrega:\nBairro: ' + bairro +
    '\nRua: ' + rua +
    '\nNúmero da casa: ' + numeroCasa;

  
  var numeroTelefone = '5581998396066';

 
  var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

  
  window.open(linkWhatsApp, '_blank');

 
  closeModal(modalId);
}
