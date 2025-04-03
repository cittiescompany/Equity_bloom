import { persist } from 'zustand/middleware';
import { create } from 'zustand';

const useTransaction = create(
  persist(
    (set) => ({
      data: {
        from:3,
        to:4,
      },
      updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
    }),
    { name: 'transaction', version: 8 }
  )
);


export const useDataStore =create((set)=>({
    data:{},
    editMode:{status:false, fieldName:''},
    bank:{},
    updateData: (payload) => set((state) => ({ data: {...state.data,...payload } })),
    setEditMode:(payload) => set((state) => ({ editMode: payload })),
    setBank:(payload) => set((state) => ({ bank: payload })),
}   
))

export const useInvestmentStore=create((set)=>({

  data:{
    wallet_balance:100000,
    selectedInvestment:{},
    paymentMethod:'',
    paymentAmount:null,
    noOfShares:null,
  },
  setSelectedInvestment: (payload) => set((state) => ({ data: {...state.data,selectedInvestment: payload  } })),
  setWalletBanace: (payload) => set((state) => ({ data: {...state.data,wallet_balance: payload  } })),
  setPaymentMethod: (payload) => set((state) => ({ data: {...state.data,paymentMethod: payload  } })),
  setPaymentAmount: (payload) => set((state) => ({ data: {...state.data,paymentAmount: payload  } })),
  setNoOfShares: (payload) => set((state) => ({ data: {...state.data,noOfShares: payload  } })),
}))
export const usePropertyStore=create((set)=>({

  data:{
    wallet_balance:100000,
    selectedProperty:{},
    paymentMethod:'',
    paymentAmount:null,
  },
  setSelectedProperty: (payload) => set((state) => ({ data: {...state.data,selectedProperty: payload  } })),
  setWalletBanace: (payload) => set((state) => ({ data: {...state.data,wallet_balance: payload  } })),
  setPaymentMethod: (payload) => set((state) => ({ data: {...state.data,paymentMethod: payload  } })),
  setPaymentAmount: (payload) => set((state) => ({ data: {...state.data,paymentAmount: payload  } })),
}))

export const useNoticationStore=create(set=>({
  notifications:[
    { id: crypto.randomUUID(), text: "Ayo liked your post", type: "like", time: new Date(Date.now() - 1000 * 60 * 6), count: 16_906 },
    { id: crypto.randomUUID(), text: "Chioma commented on your photo", type: "comment", time: new Date(Date.now() - 1000 * 60 * 10), count: 11_646 },
    { id: crypto.randomUUID(), text: "Kunle followed you", type: "follow", time: new Date(Date.now() - 1000 * 60 * 4), count: 5_112 },
    { id: crypto.randomUUID(), text: "Daniel replied to your comment", type: "comment", time: new Date(Date.now() - 1000 * 60 * 3), count: 3_516 },
    { id: crypto.randomUUID(), text: "Tolu liked your story", type: "like", time: new Date(Date.now() - 1000 * 60 * 180), count: 2_558 },
    { id: crypto.randomUUID(), text: "Grace mentioned you in a comment", type: "comment", time: new Date(Date.now() - 1000 * 60 * 22), count: 1_876 },
    { id: crypto.randomUUID(), text: "David started following you", type: "follow", time: new Date(Date.now() - 1000 * 60 * 11), count: 7_489 },
    { id: crypto.randomUUID(), text: "Kemi reacted to your post", type: "like", time: new Date(Date.now() - 1000 * 60 * 45), count: 9_234 },
    { id: crypto.randomUUID(), text: "Ope replied to your comment", type: "comment", time: new Date(Date.now() - 1000 * 60 * 33), count: 4_192 },
    { id: crypto.randomUUID(), text: "Segun followed you", type: "follow", time: new Date(Date.now() - 1000 * 60 * 5), count: 6_501 },
  ],

  addNotification: (payload) =>
    set((state) => ({
      notifications: [payload, ...state.notifications],
    })),
}))



export default useTransaction;

