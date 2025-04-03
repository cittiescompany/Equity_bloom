import axios from "axios"

export const getBanks=()=>{
const banks = axios.get('https://api.paystack.co/bank')
return banks
}

export const verifyAccountNumber=async (payload) => {
      return await axios.get(`https://api.paystack.co/bank/resolve?account_number=${payload.account_number}&bank_code=${payload.bank_code}&currency=NGN`, {
            headers: {
              Authorization: `Bearer sk_test_b089543969fecb2f49aa0731274c958a5d5d63a8`, // Add your token here
            },
          }).then((res) => {
       return {
          result: res.data.data,
          type: "success",
        };
      }).catch(err=>{
      return {
          message: err.response.data.message ?? "An error occurred",
          type: "error",
        }
      });
    }