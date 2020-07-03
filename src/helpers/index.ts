import faker from "faker";
import { User } from "./interfaces";

class Helpers {
  genActiveUser() {
    const user: User = {
      fullName: faker.fake("{{name.firstName}} {{name.lastName}}"),
      avatar: faker.image.avatar(),
      location: faker.fake("{{address.state}}, {{address.countryCode}}"),
    };

    return user;
  }

  genFriendsList(max: number | undefined = 5): Array<User> {
    const users: Array<User> = [];

    for (let index = 0; index < max; index++) {
      users.push({
        id: faker.random.uuid(),
        fullName: faker.fake("{{name.firstName}}"),
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
