import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileInfoModal = ({ showModal, closeModal, saveChanges}) => {
    const modalDisplayClass = showModal ? 'modal d-block' : 'modal';

    return (
        <div className={modalDisplayClass} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={saveChanges}>  Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfoModal;
