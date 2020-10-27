function getGravity() {
  return this.gravity;
}

const SolarSystem = {
  earth: {
    gravity: 10,
  },
  moon: {
    gravity: 4,
  },
  mars: {
    gravity: 20,
  },
};

const earthGravity = getGravity.call(SolarSystem.earth);
console.log(earthGravity);
const moonGravity = getGravity.call(SolarSystem.moon);
console.log(moonGravity);

// the above example is to explain this
// the below one is class based example

class Users {
  constructor(url) {
    this.url = url;
  }

  getUsers() {
    console.log(this.url);
  }
}

const prodUsers = new Users("prod url");
const devUsers = new Users("dev url");
prodUsers.getUsers();
devUsers.getUsers();
