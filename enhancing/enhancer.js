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
  else {
    return {...item, enhancement: item.enhancement + 1};
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability >= 0 && item.durability <= 100) {
    return { ...item, durability: 100 };
  }
  else {
    return {error: "check yourself"}
  }
}

function get(item) {
  return { ...item };
}
