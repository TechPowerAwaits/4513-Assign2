import { createContext } from "react";

class Account {
  static guestUsername = "guest";
  static guestPassword = "guest";

  #authenticated = false;
  get authenticated() {
    return this.#authenticated;
  }

  static constructGuest() {
    return new Account(Account.guestUsername, Account.guestPassword);
  }

  static validEmail(email) {
    const regex =
      /^(\d|[a-z]|[A-Z])+([-|_|.](\d|[a-z]|[A-Z])+)*@(\d|[a-z]|[A-Z])+([-|_|.](\d|[a-z]|[A-Z])+)*.([a-z]|[A-Z])+$/;
    return regex.test(email);
  }

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  isGuest() {
    return (
      this.username == Account.guestUsername &&
      this.password == Account.guestPassword
    );
  }

  async authenticate() {
    if (!this.#authenticated) {
      if (!this.isGuest()) {
        throw new Error(
          "Only Guest Accounts are supported. Please login as a guest."
        );
      }
    }
  }
}

const AccountContext = createContext(null);

class AccountStatus {
  constructor(message, success = true) {
    this.message = message;
    this.success = success;
  }
}

export { Account, AccountContext, AccountStatus };
