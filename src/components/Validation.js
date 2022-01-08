import * as yup from 'yup';

let Validation = yup.object().shape({
  email: yup.string().email('Geçerli bir email adresi giriniz').required('Zorunlu alan'),
  password: yup.string().required().min(5, 'parolanız en az 5 karakter giriniz'),
  extra1: yup.string().required().oneOf([yup.ref('password')] , 'Parolalar uyuşmuyor'),
  });

export default Validation;