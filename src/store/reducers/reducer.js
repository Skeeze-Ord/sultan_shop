const defaultState = {
  product: {
    id: 0,
    url: "",
    name: "",
    volume: "",
    barcode: "",
    creator: "",
    brand: "",
    description: "",
    price: 0,
  },
};

const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CARD_VALUE":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default cardReducer;