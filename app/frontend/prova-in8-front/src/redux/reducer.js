import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nome:'',
  email:'',
  nascimento:'',
  telefone:'',
}

export const counterSlice = createSlice({
  name: 'cadastro',
  initialState,
  reducers: {
    saveData: (state, data) => {
      state.nome = data.nome;
      state.email = data.email;
      state.nascimento = data.nascimento;
      state.telefone = data.telefone;
    }
    }
});

export const { saveData } = counterSlice;

export default counterSlice.reducer;