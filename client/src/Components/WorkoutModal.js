import React from 'react';


const WorkoutModal = ({ showModal, closeModal, saveChanges }) => {
    return (
        <div id="" className={`modal ${showModal ? 'd-block' : ''}`}>
            <div id="WorkoutModal">
                <div id="ModalHeader" className="modal-header">
                    <h5 className="modal-title">Edit Profile</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <div className="ModalTextInput">
                        <label htmlFor="age">Idk</label>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn" onClick={closeModal}>
                        Close
                    </button>
                    <button type="button" className="btn" onClick={saveChanges}>
                        Save Changes
                    </button>
                </div>
            </div>

        </div>
    );
};

export default WorkoutModal;
