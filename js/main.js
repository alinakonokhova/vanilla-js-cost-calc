//  Calculator
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');
const inputs = document.querySelectorAll('input');

// radiobuttons
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const roomsElements = document.querySelectorAll('input[name="rooms"]');

// checkboxes
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

// base price and displaying value element
const basePricePerMeter = 6000;
const totalPriceElement = document.getElementById('total-price');

// linking range with text
squareRange.addEventListener('input', function () {
  squareInput.value = squareRange.value;
});

// linking text with range
squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
});

// bypassing all inputs
inputs.forEach(function (item) {
  item.addEventListener('input', calculate);
});

calculate();

// function calculate to recalculate the cost
function calculate() {
  // flat area
  const square = parseInt(squareInput.value);
  // type of repaire
  let typeReconstructionCost;
  typeReconstructionElements.forEach(function (item) {
    if (item.checked) {
      typeReconstructionCost = parseFloat(item.value);
    }
  });
  //house type
  let typeBuildingCost;
  typeBuildingElements.forEach(function (item) {
    if (item.checked) {
      typeBuildingCost = parseFloat(item.value);
    }
  });
  // number of rooms
  let roomsCost;
  roomsElements.forEach(function (item) {
    if (item.checked) {
      roomsCost = parseFloat(item.value);
    }
  });
  // add options
  // const ceilingCost = condition ? perform if true ; perform if false
  const ceilingCost = ceilings.checked ? parseFloat(ceilings.value) : 1;
  const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
  const floorCost = floor.checked ? parseFloat(floor.value) : 1;

  // calculate total cost
  const totalPrice = basePricePerMeter * square * typeReconstructionCost * typeBuildingCost * roomsCost * ceilingCost * wallsCost * floorCost;

  const formatter = new Intl.NumberFormat('ru');

  totalPriceElement.innerText = formatter.format(totalPrice);
}