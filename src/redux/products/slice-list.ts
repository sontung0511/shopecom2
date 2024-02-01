import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Product } from '../../components/product-card';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface ProductSliceState {
  products: Product[];
  loading: boolean;
  error: null | object;
}

const products: Product[] | [] = [];

const initialState: ProductSliceState = {
  products: products,
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk('products/list', async () => {
  try {
    const { data } = await publicAxios.get('/product', {
      headers: {
        // Your headers here
        'X-TOKEN-ACCESS': 'ijCCtggxLEkG3Yg8hNKZJvMM4EA1Rw4VjVvyIOb7',
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error: any) {
    const message = setError(error);
    toast.error(message);
  }
});


export const productListSlice = createSlice({
  name: 'products-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productListSlice;