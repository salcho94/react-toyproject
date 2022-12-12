/* eslint-disable */
import './Modal.css';

const CreateModal = (props) => {

    const closeModal = () => {
        props.setCreateModal(!props.creatModal);
    }
    const createModal = () => {
        props.create(props.index + 1);
        closeModal();
        props.setAddTitle('');
    }

    return (
        <div id="layer" className="pop-layer">
            <div className="pop-container">
                <div className="pop-conts">
                    <div className="firstArea">
                        <label>글 제목</label>
                        <span><input type="text" onChange={(e) => {props.setAddTitle(e.target.value)}}/></span>
                    </div>
                    <div>
                        <label>글 내용</label>
                        <textarea onChange={(e) => {props.setAddContent(e.target.value)}}></textarea>
                    </div>
                    <div className="btn-r">
                        <a href="#" onClick={closeModal} className="btn-layerClose">Close</a>
                        <a href="#" onClick={createModal} className="btn-layerCreate">글 작성</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateModal;