import style from './DefaultBtn.module.css';
import googleIco from '../../assets/googleIco.png';

function DefaultBtn(params) {
    return(

        <button className={style.defaultBtn}>
            <img className={style.googleIco} src={googleIco} alt="" />
        </button>
    );
}

export default DefaultBtn;