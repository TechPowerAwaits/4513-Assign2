/*
 * Purpose: Provides context and functionality for retrieving Account
 * information.
 */

import { createContext } from "react";

/*
 * Purpose: Represents information associated with the given account.
 */
class Account {
  static guestUsername = "guest";
  static guestPassword = "guest";

  /*
   * Purpose: A readonly variable that indicates whether the account was
   * authenticated or not.
   */
  #authenticated = false;
  get authenticated() {
    return this.#authenticated;
  }

  /*
   * Purpose: Creates and returns a Guest account.
   *
   * Details: The returned account still must be authenticated.
   */
  static constructGuest() {
    return new Account(Account.guestUsername, Account.guestPassword);
  }

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /*
   * Purpose: Returns if the current account is a guest.
   */
  isGuest() {
    return (
      this.username == Account.guestUsername &&
      this.password == Account.guestPassword
    );
  }

  /*
   * Purpose: Verifies the given account information and retrieves data from
   * relevant servers.
   */
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

/*
 * Purpose: Stores information on the currently logged in user.
 */
const AccountContext = createContext(null);

class AccountStatus {
  constructor(message, success = true) {
    this.message = message;
    this.success = success;
  }
}

export { Account, AccountContext, AccountStatus };
