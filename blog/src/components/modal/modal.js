/* eslint-disable */
import './Modal.css';

const Modal = (props) => {

    const closeModal = () => {
        props.setModal(!props.modal);
    }


    return (
        <div id="layer" className="pop-layer">
            <div className="pop-container">
                <div className="pop-conts">
                    <table>
                        <colgroup>
                            <col width="90px"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th></th><td><strong>{props.state + 1} 번째 게시글입니다.</strong></td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <th>글 제목</th><td>{props.title[props.state]}</td>
                        </tr>
                        <tr>
                            <th>글 내용</th><td>{props.content[props.state]}</td>
                        </tr>
                        <tr>
                            <th>작성일</th><td><small>{props.date[props.state]}</small></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="btn-r">
                        <a href="#" onClick={closeModal} className="btn-layerClose">Close</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;