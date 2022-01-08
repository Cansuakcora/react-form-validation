import React from 'react';
import { Formik , useFormik} from 'formik';
import validationSchema from './Validation';

function Signup() {
  
    const{handleSubmit, handleChange, values ,errors , touched , handleBlur} = useFormik({ //error:girilen değerde hata varsa -- touched:hata çıktığı an diğer alanlarda da çıkıyor,bunu engellemek için -- handleBlur:input alanında çıktığında kontrol yapabilmesi için yazarken direk hata vermemesi için
        initialValues:{
            email:"",
            password:"",
            extra1:"",
        },

        onSubmit:(value) => {
            console.log(values)
        },
        validationSchema,
    })
    return (
        <div>
        <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input 
        name='email' 
        onChange={handleChange} 
        value={values.email}
        onBlur={handleBlur}/>
        {errors.email && touched.email && (<div className='error-text'>{errors.email}</div>)}
        {/* hatalı veri girildiğinde uyarı verir, touched:farklı alanlarda uyarı yazısı cıkmaması için */}
        <br/> <br/> 

        <label htmlFor="password">Password</label>
        <input 
        name='password' 
        onChange={handleChange} 
        value={values.password}
        onBlur={handleBlur}/>
         {errors.password && touched.password && (<div className='error-text'>{errors.password}</div>)} 

        <br/> <br/> 

        <label htmlFor="email">Confirm Password</label>
        <input 
        name='extra1' 
        onChange={handleChange} 
        value={values.extra1}
        onBlur={handleBlur}/>
        {errors.extra1 && touched.extra1 && (<div className='error-text'>{errors.extra1}</div>)}

        <br/> <br/> 


        <button type="submit">Submit</button>

        <br/><br/>
        {JSON.stringify(values)}
      </form>
        </div>
    )
}

export default Signup;
