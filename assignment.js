//---------------Function for convert distance Kilometer to Meter
function kilometerToMeter(distanceKM) {
    if (typeof(distanceKM) != "number") {
        return "Number is expected as distance";
    }
    if (distanceKM < 0) {
        return "Distance cannot be negative";
    }

    var distanceM = distanceKM * 1000;
    return distanceM;
}

//---------------Function for Calculating Budget
function budgetCalculator(numWatch, numMobile, numLaptop) {
    if (typeof(numWatch) != "number" || typeof(numMobile) != "number" || typeof(numLaptop) != "number") {
        return "Number is expected as Product Quantity";
    }
    if (numWatch < 0 || numMobile < 0 || numLaptop < 0) {
        return "Product Quantity Cannot be negetive";
    }

    var totalPrice = (numWatch * 50) + (numMobile * 100) + (numLaptop * 500);
    return totalPrice;
}

//---------------Function for calculating hotel cost
function hotelCost(numDay) {
    if (typeof(numDay) != "number") {
        return "Number is expected";
    }
    if (numDay < 0) return "Day cann't be negetive";

    var totalBill = 0;
    if (numDay > 20) {
        totalBill = (numDay - 20) * 50;
        numDay = 20;
    }

    if (numDay > 10) {
        totalBill += (numDay - 10) * 80;
        numDay = 10;
    }

    totalBill += numDay * 100;
    return totalBill;
}

//---------------Function for finding largest name
function megaFriend(friendList) {
    if (friendList.length == 0) return "List of friend is empty."
    var maxName = "";
    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].length > maxName.length) maxName = friendList[i];
    }
    return maxName;
}