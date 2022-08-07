import axios from 'axios'

// switch between online and offline mode by adding and 
// removing 'offline/' on requests to the portfolio API

const portfolioURL = '/api/portfolios/';
const accountsURL = '/api/accounts/'

export default class DatabaseServices {

  // Portfolio API
  static async getAllUsers(): Promise<Array<string>> {
    try {
      const res = await axios.get(portfolioURL);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getUserByUsername(username: string): Promise<object> {
    try {
      const res = await axios.get(`${portfolioURL}${username}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return { error };
    }
  }  

  static postPortfolio(portfolio: object) {
    return axios.post(portfolioURL, portfolio);
  }

  static updatePorfolio(username: string, portfolioItem: object) {
    return axios.put(`${portfolioURL}${username}`, { portfolioItem });
  }

  static deletePortfolioByID(id: string) {
    return axios.delete(`${portfolioURL}${id}`);
  }

  // Accounts API
  static async getAllAccounts(): Promise<Array<string>> {
    try {
      const res = await axios.get(accountsURL);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getAccountByUsername(username: string): Promise<object> {
    try {
      const res = await axios.get(`${accountsURL}${username}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return { error };
    }
  }  

  static async isUsernameTaken(username: string): Promise<boolean> {
    try {
      const res = await axios.get(`${accountsURL}${username}/istaken?`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return true;
    }
  }

  // for account validation purposes
  // return array of _id strings
  static async getAllUsersWithUsername(username: string): Promise<Array<string>> {
    try {
      const res = await axios.get(`${accountsURL}/all/${username}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static postAccount(account: object) {
    return axios.post(accountsURL, account);
  }

  static deleteAccountByID(accountID: string) {
    return axios.delete(`${accountsURL}${accountID}`);
  }
}

