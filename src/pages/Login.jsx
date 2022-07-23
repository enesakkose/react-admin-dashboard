import React, {useEffect, useRef, useState} from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import './Login.scss'

function Login() {
    const ref = useRef()
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ show, setShow ] = useState(false)
    
    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
        total = images.length,
        current = 0
        const imageSlider = () => {
            if(current > 0) {
                images[current - 1].classList.add('opacity')
            }else{
                images[total - 1].classList.add('opacity')
            }
            images[current].classList.remove('opacity')
            if(current === total - 1) {
                current = 0
            } else{
                current += 1
            }
        }
        imageSlider()
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <main className='login'>
        <div className="login__img">
            <div className="login__img__onPhone" ref={ref}>
                <img className='opacity' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" />
                <img className='opacity' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png" alt="" />
                <img className='opacity' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png" alt="" />
            </div>
        </div>
        <div>
        <div className="login__form">
            <div className='login__form__logo'>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </div>
            

            <form onSubmit={handleSubmit} className="login__form__inputs">
                <label>
                   <input className={username && 'activeInput'} type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                   <small className={username && 'active'} >Telefon numarası, kullanıcı adı veya e-posta</small>
                </label>

               <div className='login__form__inputs__password'>
                <label className='login__form__inputs__password__input'>
                   <input className={ password && 'activeInput'} style={{border: 0}} 
                   type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                   <small className={password && 'active'} >Şifre</small>
                </label>
                   {password && 
                   <div className="btn">
                        <button onClick={() => setShow(!show)}>
                        {show ? 'Gizle' : 'Göster'}
                    </button>
                   </div>
                   }
                </div>
                
                <Button disabled={!password || !username} classname='formBtn'>
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
            </form>
            
        </div>
            <div className="login__newUser">
                Hesabın yok mu?   <Link to='/'>  Kaydol</Link>
            </div>

            <div className="login__download">
                <span>Uygulamayı indir</span>
                <div className="login__download__logo">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt=""/>
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt="" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login