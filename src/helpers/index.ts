import faker from "faker";

interface User {
  fullName: string;
  avatar: string;
  location?: string;
}

class Helpers {
  genActiveUser() {
    const user: User = {
      fullName: faker.fake("{{name.lastName}} {{name.firstName}}"),
      avatar: faker.image.avatar(),
      location: faker.fake("{{address.state}}, {{address.countryCode}}"),
    };

    return user;
  }

  genFriendsList(max: number | undefined = 5): Array<User> {
    const users: Array<User> = [];

    for (let index = 0; index < max; index++) {
      users.push({
        fullName: faker.fake("{{name.lastName}} {{name.firstName}}"),
        avatar: faker.image.avatar(),
      });
    }

    return users;
  }

  genAccountBalance(minAmount: number, maxAmount: number): number {
    const amount = faker.finance.amount(minAmount, maxAmount);
    return Number(amount);
  }
}

export default new Helpers();
