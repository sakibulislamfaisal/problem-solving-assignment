//kilometerToMeter convert

function kilometerToMeter(km) {
  if (km < 0) {
    console.log("Please Input Positive Number in (KM)!");
  } else {
    var meter = km * 1000;
    return meter;
  }
}
var checkMeter = kilometerToMeter(2);
console.log("Convert Value is : ", checkMeter, "m");

//budgetCalculator

function budgetCalculator(clock, phone, laptop) {
  if (clock < 0 || phone < 0 || laptop < 0) {
    console.log("Arguments Must Be Positive Number!!");
  } else {
    var clockPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalPrice =
      clockPrice * clock + phonePrice * phone + laptopPrice * laptop;
    return totalPrice;
  }
}
var checkTotalPrice = budgetCalculator(3, 4, 6);
console.log("Total Price : ", checkTotalPrice);

//find hotelCost

function hotelCost(day) {
  var rentCost = 100;
  if (day < 0) {
    console.log("Day Must Be Positive Number!!");
  } else if (day <= 10) {
    return rentCost * day;
  } else if (day <= 20) {
    if (day > 10) {
      var newDay = day - 10;
    }
    return rentCost * day - 20 * newDay;
  } else if (day >= 21) {
    if (day > 20) {
      var newDay2 = day - 20;
    }
    return rentCost * day - 50 * newDay2;
  }
}
var checkTotalHotelCost = hotelCost(27);
console.log("Total Hotel Cost : ", checkTotalHotelCost);

//megaFriend part

function megaFriend(friend) {
  var maximumWordName = friend[0];
  for (var i = 0; i < friend.length; i++) {
    var name = friend[i];
    if (name.length > maximumWordName.length) {
      maximumWordName = name;
    }
  }
  return maximumWordName;
}

const maximumFriendName = megaFriend([
  "faisal",
  "sakibul islam faisal",
  "tania",
  "manik",
  "oporna",
  "sultana laila",
]);
console.log("Maximum Word Friend Name : ", maximumFriendName);
