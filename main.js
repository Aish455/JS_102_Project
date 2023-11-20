// Step 1: Create a class for vehicles
class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

// Step 2: Create a class for cars that inherits from the Vehicle class
class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Step 3: Create a class for planes that inherits from the Vehicle class
class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

// Step 4: Create a class for employees
class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Step 5: Create a class for drivers that inherits from the Employee class
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseId) {
    super(name, id, dateOfBirth);
    this.licenseId = licenseId;
  }
}

// Step 6: Create a class for pilots that inherits from the Employee class
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseId) {
    super(name, id, dateOfBirth);
    this.licenseId = licenseId;
  }
}

// Step 7: Create a class for reservations
class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationId) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationId = reservationId;
  }
}

// Step 8: Create objects for three cars and two planes
const car1 = new Car('Sedan', 'Toyota', 1, 'gas');
const car2 = new Car('SUV', 'Honda', 2, 'electric');
const car3 = new Car('Hatchback', 'Ford', 3, 'gas');

const plane1 = new Plane('Jet', 'Boeing', 4, 'commercial');
const plane2 = new Plane('Propeller', 'Cessna', 5, 'private');

// Step 9: Write a function to check compatibility and make reservations
function makeReservation(employeeId, vehicleId) {
  const employee = employees.find(emp => emp.id === employeeId);
  const vehicle = vehicles.find(vehicle => vehicle.id === vehicleId);

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log('Mismatch: Pilot cannot drive a car.');
  } else if (employee instanceof Driver && vehicle instanceof Plane) {
    console.log('Mismatch: Driver cannot fly a plane.');
  } else {
    const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
    reservations.push(reservation);
    console.log('Reservation made:', reservation);
  }
}

// Step 10: Save all reservations in an array
const reservations = [];




// Additional Step: Create an array for employees and vehicles
const employees = [
  new Driver('John Smith', 1, '01/15/1985', 'D12345'),
  new Pilot('Alice Johnson', 2, '05/22/1990', 'P67890'),
  new Driver('Bob Davis', 3, '11/30/1988', 'D54321')
];

const vehicles = [car1, car2, car3, plane1, plane2];

// Additional Step: Test making reservations
makeReservation(2, 1);  // Pilot trying to drive a car (Mismatch)
makeReservation(1, 4);  // Driver trying to fly a plane (Mismatch)
makeReservation(3, 2);  // Driver reserving an electric car (Success)
makeReservation(2, 5);  // Pilot reserving a private plane (Success)

// Step 11: Print the content of the reservations array using the map function
console.log('All Reservations:');
let reservationDetails = reservations.map(reservation => {
  const employee = employees.find(emp => emp.id === reservation.employeeId);
  const vehicle = vehicles.find(vehicle => vehicle.id === reservation.vehicleId);
  return { reservationId: reservation.reservationId, employee: employee.name, vehicle: vehicle.name };
});
console.log(reservationDetails);