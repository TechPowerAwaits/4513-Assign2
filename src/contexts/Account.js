/*
 * Purpose: Provides context and functionality for retrieving Account
 * information.
 */

import { createContext } from "react";
import accountDataRetriever from "./Account.Data";
import Favorite from "./Account.Fav";

/*
 * Purpose: Represents information associated with the given account.
 */
class Account {
  static guestUsername = "guest";
  static guestPassword = "guest";

  /*
   * Purpose: A variable that indicates whether the account was authenticated
   * or not.
   */
  authenticated = false;

  /*
   * Purpose: A variable that contains the data associated with the account.
   */
  data = null;

  /*
   * Purpose: Creates and returns a Guest account.
   *
   * Details: The returned account still must be authenticated.
   */
  static constructGuest() {
    return new Account(Account.guestUsername, Account.guestPassword);
  }

  /*
   * Purpose: Clones the given Account instance.
   */
  static clone(instance) {
    const cloneAccount = new Account(instance.username, instance.password);
    cloneAccount.authenticated = instance.authenticated;
    cloneAccount.data = instance.data;
    cloneAccount.favorite = new Favorite();
    return cloneAccount;
  }

  /*
   * Purpose: Clones the current Account instance.
   */
  clone() {
    return Account.clone(this);
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
   * Purpose: Verifies the given account information.
   *
   * Throws: An Error if authentication fails.
   */
  async authenticate() {
    if (!this.authenticated) {
      if (!this.isGuest()) {
        throw new Error(
          "Only Guest Accounts are supported. Please login as a guest."
        );
      }

      this.authenticated = true;
    }
  }

  /*
   * Purpose: Retrieves data associated with an account.
   *
   * Details: Sets the data variable to an array of data or null if data could
   * not be retrieved.
   *
   * Returns: The data retrieved or null.
   */
  async retrieveData() {
    try {
      const data = await accountDataRetriever();

      this.data = data;
      this.favorite = new Favorite();
    } catch (error) {
      console.error(error.message);
    }

    return this.data;
  }
}

/*
 * Purpose: Stores information on the currently logged in user.
 */
const AccountContext = createContext(null);

export { Account, AccountContext };
