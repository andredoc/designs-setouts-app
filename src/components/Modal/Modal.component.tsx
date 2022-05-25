import closeIcon from './../../images/x.svg'

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: ()=>void;
    children: any;
}

const Modal = ({title, isOpen, onClose, children }:ModalProps)=>{
    <div className={'modal'}>
        <div className={'modal__overlay'} />
        <div className={'modal__box'}>
            <div className={'modal__close-btn'}>
                <img src={closeIcon} alt={'close modal'} />
            </div>
            <div className={'modal__title'}>
                {title}
            </div>
            <div className={'modal__content'}>
                {children}
            </div>
        </div>
    </div>
}

export default Modal