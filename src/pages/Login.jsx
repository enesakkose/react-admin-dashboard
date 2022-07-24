import React, {useEffect, useRef, useState} from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import Input from '../components/Input'
import { useNavigate, useLocation } from 'react-router-dom'
import { login } from '../firebase'
import { Formik, Form } from 'formik'
import { LoginSchema } from '../validation'
import './Login.scss'

function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const ref = useRef()

    const [ show, setShow ] = useState(false)
    
    const images = [
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
    ]

    const appImages = [
        "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png",
        "https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
    ]

    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 0
        
        const imageSlider = () => {

            images[(current > 0 ? current : total) - 1].classList.add('opacity')
            images[current].classList.remove('opacity')
            current = current === total - 1 ? 0 : current + 1 

        }
        imageSlider()
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])
    
    const handleSubmit = async(values, actions) => {
        
        await login(values.username,values.password)
        navigate(location.state?.return_url || '/', {replace: true})  
    }

  return (
    <main className='login'>
        <div className="login__img">
            <div className="login__img__onPhone" ref={ref}>
                {images.map((image,key) => (
                   <img key={key} className='opacity' src={image} alt="" /> 
                ))}
            </div>
        </div>

        <div>
        <div className="login__form">
            <div className='login__form__logo'>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </div>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
                {({isSubmitting, values}) => (
                <Form className="login__form__inputs">
                    
                    <Input name='username' label="Telefon numarası, kullanıcı adı veya e-posta" className={values.username && 'activeInput'}>
                    <small className={values.username && 'active'} >Telefon numarası, kullanıcı adı veya e-posta</small>
                    </Input>

                    <div className='login__form__inputs__password'>
                    <Input type={show ? 'text' : 'password'} name='password' label="Şifre" style={{border: 0}} className={values.password && 'activeInput'}>
                    <small className={values.password && 'active'} >Şifre</small>
                    {values.password && 
                        <div className="btn">
                            <button type='button' onClick={() => setShow(!show)}>
                                {show ? 'Gizle' : 'Göster'}
                            </button>    
                        </div>
                    }
                    </Input>
                    </div>
                    
                     <Button type='submit' disabled={!values.password || !values.username || isSubmitting} classname='formBtn'>
                        Giriş Yap
                     </Button>

                     <div className="login__form__or">
                        <div className="login__form__or__before"></div>
                        <div className="login__form__or__text">YA DA</div>
                        <div className="login__form__or__after"></div>
                     </div>

                     <Link to='/' className="login__form__facebook">
                        <AiFillFacebook size={20}/>
                        <span>Facebook ile Giriş Yap</span>
                     </Link>

                     <Link to='/' className="login__form__reset__password">
                        Şifreni mi unuttun?
                     </Link>                       
                </Form>
                )}
            </Formik>


            
        </div>
            <div className="login__newUser">
                Hesabın yok mu?   <Link to='/'>  Kaydol</Link>
            </div>

            <div className="login__download">
                <span>Uygulamayı indir</span>
                <div className="login__download__logo">
                    {appImages.map((item, key) => (
                        <img key={key} src={item} alt=""/>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login