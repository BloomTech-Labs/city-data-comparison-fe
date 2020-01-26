import React from 'react';

import PrivacyPolicy from '../legal/PrivacyPolicy';

//modal
import Modal from "../modal/modal";
import useModal from "../modal/useModal";

//styling
import './privacypolicyform.scss'; 

const PrivacySection = props => {
    //for modal
    const {isShowing, toggle} = useModal();
    const [modalState, setModalState] = useState();

    return(
        <>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                component={modalState}
            />

            <div className="tos">
                <input className="checkbox" type="checkbox" name="tos"></input>
                <p>
                    Please accept our 
                    <span className="tos-text" onClick={() => (setModalState(<PrivacyPolicy/>), toggle())} style={{cursor: "pointer"}}> 
                        privacy policy
                    </span>
                </p>
            </div>
        </>
    )
}

export default PrivacySection; 