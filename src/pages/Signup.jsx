import React from 'react'
import Button from '../components/Button'
import { AiFillFacebook } from 'react-icons/ai'
import Or from '../components/Or'
import { Formik , Form } from 'formik'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import SignupOrLogin from '../components/SignupOrLogin'
import './Signup.scss'
import Download from '../components/Download'


function Signup() {
  return (
    <div className='signup'>
        <div className="signup__form">
        <div className='signup__form__logo'>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </div>

            <h4 className='signup__form__title'>
                Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
            </h4>
            <Button classname='signup__form__facebook__logo'>
                <AiFillFacebook size={18}/>
                Facebook ile Giriş Yap
            </Button>
            <Or/>

            <Formik
                initialValues={{
                    telOrMail: '',
                    name: '',
                    username: '',
                    password: ''
                }}
            >
                {({isSubmitting, values}) => (
                    <Form className='signup__form__inputs'>
                        <Input name='telOrMail' className={values.telOrMail && 'activeInput'}>
                            <small className={values.telOrMail && 'active'} >Cep Telefonu Numarası veya e-posta</small>
                        </Input>
                        <Input name='name' className={values.name && 'activeInput'}>
                            <small className={values.name && 'active'} >Adı Soyadı</small>
                        </Input>
                        <Input name='username' className={values.username && 'activeInput'}>
                            <small className={values.username && 'active'} >Kullanıcı Adı</small>
                        </Input>

                        <div className="form__inputs__password">
                            <Input type='password' name='password' style={{border: 0}} className={values.password && 'activeInput'} valuesPassword={values.password}>
                                <small className={values.password && 'active'} >Şifre</small>
                            </Input>
                        </div>
                        <div className="signup__form__inputs__bottom">
                            <h6>
                            Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a yüklemiş olabilir. Daha Fazla Bilgi Al
                            </h6>
                            <h6>
                            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                            </h6>
                        </div>
                        <Button type='submit' disabled={!values.password || !values.username || !values.name || !values.telOrMail || isSubmitting}>Kaydol</Button>
                    </Form>
                )}
            </Formik>
        </div>
        <SignupOrLogin>
                Hesabın var mı?<Link to='/auth/login'>Giriş Yap</Link>
        </SignupOrLogin>
        
        <Download/>
    </div>
  )
}

export default Signup