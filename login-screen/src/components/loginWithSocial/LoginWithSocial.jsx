import style from './LoginWithSocial.module.css';
import DefaultBtn from '../defaultBtn/DefaultBtn';

function LoginWithSocial(params) {
    return(

        <section className={style.LoginSocialArea}>
           <DefaultBtn></DefaultBtn>
           <DefaultBtn></DefaultBtn>
        </section>


    );
}

export default LoginWithSocial;