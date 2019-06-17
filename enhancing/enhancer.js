module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20 ) {
    return item
  }
  else if (item.enhancement >=0 && item.enhancement <=20) {
    return {...item, enhancement: item.enhancement + 1};
  }
  else {
    return {error: "Check ranges"}
  }
}

function fail(item) {
  if (item.durability >= 0 && item.durability <= 100 && item.enhancement >= 0 && item.enhancement <= 20) {
    if (item.enhancement < 15 ) {
      return {...item, durability: item.durability - 5 }
    }
    else if (item.enhancement >= 15 && item.enhancement < 17 ) {
      return { ...item, durability: item.durability - 10 }
    }
    else if (item.enhancement > 16 ) {
      return {...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
    }
  }
  else {
    return {error: "Check ranges"}
  }
}

function repair(item) {
  if (item.durability >= 0 && item.durability <= 100) {
    return { ...item, durability: 100 };
  }
  else {
    return {error: "Check ranges"}
  }
}

function get(item) {
  return { ...item };
}
