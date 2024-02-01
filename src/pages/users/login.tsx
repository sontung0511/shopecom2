import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { userLogin } from '../../redux/users/login-slice';




type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.login);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (userInfo) return navigate("/");
  }, [userInfo]);


  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
          <label>username</label>

          <Form.Control
            type='text'
            placeholder='Enter username'
            {...register('username')}
            className={errors.username?.message && 'is-invalid'}
          />
          {/* <p className='invalid-feedback'>{errors.email?.message}</p>
         */}

        
          <label>password </label>
          <input
            type='password'
            placeholder='*******'
            {...register('password')}
            className={errors.password?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.password?.message}</p>
          <Link to='/register' className='float-end me-2 mt-1'>
            Dont have an Account ? Register
          </Link>
        <Button
          type='submit'
          className='mt-4 w-full'
          style={{ backgroundColor: '#e03a3c', color: '#fff' }}
          variant='outline-none'
        >
          Submit
        </Button>
      </Form>
    
  );
};

export default Login;
