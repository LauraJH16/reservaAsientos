var airlineSeats = [false, false, false, false, false, false, false, false, false, false];

var busySeats = 0;
var paintSeats = function (array) {
  var containerSeats = document.getElementById('seats');

  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    if (i < 4) {
      seat.style.background = '#ffc107';
    } else {
      seat.style.background = '#b4fce4';
    }
    containerSeats.appendChild(seat);
  }
};

var reserve = function () {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};
var chooseZone = function () {
  var choice = prompt('En qué clase quiere reservar \n 1. Primera Clase \n 2. Económica \n \n Por favor, ingresa el número de tu preferencia.');
  if (choice == 1) {
    checkFirstClassZone();
  } else if (choice == 2) {
    checkEconomicZone();
  } else {
    alert('Por favor, ingrese un número válido.');
  }
};

var checkFirstClassZone = function () {
  var zone = 'Primera Clase';
  for (var index = 0; index < 4; index++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break;
    } else if (index == 3 && airlineSeats[index] == true) {
      reasignEconomicZone(zone);
    }
  }
};

var checkEconomicZone = function () {
  var zone = 'Economica';
  for (var index = 4; index < 10; index++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break
    } else if (index == 9 && airlineSeats[index] == true) {
      reasignFirstClassZone(zone);
    }
  }
};

var reserveSeat = function (indexToPaint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPaint].style.background = 'rgb(184, 183, 183)';
};

var reasignEconomicZone = function (zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ' :(  \n ¿Desea reservar en zona Económica?');
    if (reasign == true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};

var reasignFirstClassZone = function (zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ':( \n ¿Desea reservar en zona Primera Clase?');
    if (reasign == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  }
};

var paintTicket = function (index, zone) {
  var containerTickets = document.getElementById('ticket');
  var ticket = document.createElement('div');
  ticket.className = 'ticket';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE DE ABORDAR';
  title.style.fontWeight = '600';
  title.style.fontSize = '25px';
  reservedSeating.textContent = 'No. de asiento: ' + (index + 1);
  reservedSeating.style.fontSize = '20px';
  zoneClass.textContent = 'Clase: ' + zone;
  zoneClass.style.fontSize = '20px';
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
}

var nextFlight = function () {
  alert('¡Nuestro próximo vuelo sale dentro de 3 horas!... Gracias');
};

var noSeats = function () {
  alert('Lo sentimos :( \n Ya no quedan asientos disponibles en este avión.');
}
paintSeats(airlineSeats);
reserve();