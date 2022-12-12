/* eslint-disable */
import './App.css';
import { useState } from 'react';
import Modal from '../src/components/modal/modal';
import CreateModal from '../src/components/modal/createModal';
import Footer from '../src/components/page/footer';


function App() {
  let [mode ,setMode] = useState("");
  let [title, setTitle] = useState([]);
  let [date, setDate] = useState([]);
  let [content, setContent] = useState([]);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [createModal, setCreateModal] = useState(false);
  let [updateModal, setUpdateModal] = useState(false);
  let [state,setState] = useState(0);
  let [addTitle, setAddTitle] = useState('');
  let [addContent, setAddContent] = useState('');

  const create = (num) => {
      let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
      let time = {
          year: today.getFullYear(),  //현재 년도
          month: today.getMonth() + 1, // 현재 월
          date: today.getDate(), // 현제 날짜
          hours: today.getHours(), //현재 시간
          minutes: today.getMinutes(), //현재 분
      };
      let timestring = `${time.year}-${time.month}-${time.date} | ${time.hours}시${time.minutes}분`;

      if(addTitle){
        let newTitle = [...title];
        like.push(0);
        date.push(timestring);
        content.push(addContent);
        content.push(num + '번째 글 내용 입니다.');
        newTitle.unshift(addTitle);
        setTitle(newTitle);
      }else{
       alert('글 내용을 입력해 주세요 !!');
       return false;
      }

  }
  const likePlus = (num) => {
     let likeList = [...like];
     likeList[num] = Number(like[num]) + 1;
     setLike(likeList);
  }

  const likeMinus = (num) => {
    if(like[num] > 0){
      let likeList = [...like];
      likeList[num] = Number(like[num]) - 1;
      setLike(likeList);
    }else{
        alert('싫어요는 0이하가 될수 없습니다!');
        return false;
    }
  }

  const changeTitle = () => {
    let copy = [...title];
    copy[0] = '여자 코트 추천';
    setTitle(copy);
  }

  const deleteContent = (num) => {
      let delTitle = [...title];
      delTitle.splice(num, 1)
      setTitle(delTitle);
    }

  const changeSort = () => {
    let copy = [...title.sort()];
    setTitle(copy);
  }


    const showModal = () => {
      return  < Modal mode = {'write'}/>
    }
  return (
    <div className="App">
    <div className="black-nav">
     <span >
      <h4>React Blog</h4>
     </span>
     <span style={{float : 'right'}}>
        <a href="#" onClick={(e) => {setCreateModal(!createModal)}}  title="write" className="button btnPush btnBlueGreen">글 작성</a>
     </span>
    </div>
    <button onClick={changeTitle}>Title Change</button>
    <button onClick={changeSort}>Sort</button>
    {
        title.map((x,i) => {
            return(
                <div key={i}  className="list">
                    <div className="container">
                        <div onClick={(e) =>{setMode('view'); setModal(!modal); setState(i);} }>
                            <div className="likeList">
                                <span onClick={(e) =>  {e.stopPropagation(); likePlus(i)}}>👍</span>
                                <span onClick={(e) =>  {e.stopPropagation(); likeMinus(i)}}>👎</span>
                                {like[i]}
                            </div>
                            <h4>{title[i]}</h4>
                            <p>{content[i]}</p>
                            <p>{date[i]}</p>
                        </div>
                        <div className="btnList">
                            <a href="#" onClick={(e) =>  {e.stopPropagation(); deleteContent(i)}} title="Button push purple" className="button btnPush btnOrange">수정</a>
                            <a href="#" onClick={(e) =>  {e.stopPropagation(); deleteContent(i)}} title="Button push purple" className="button btnPush btnPurple">삭제</a>
                        </div>
                        {/*
                        <a href="" title="Button push blue/green" className="button btnPush btnBlueGreen">Push</a>
                        <a href="" title="Button push lightblue" className="button btnPush btnLightBlue">Push</a>
                        <a href="" title="Button push orange" className="button btnPush btnOrange">Push</a>
                        */}
                        <div className="clear"></div>
                    </div>
                </div>
            )
        })
    }

        {
        modal ? <Modal date={date} setModal={setModal} modal={modal} title={title} content={content} state={state} changeTitle={changeTitle}  />  : null
        }
        {
        createModal  ? <CreateModal setAddContent = {setAddContent} index={content.length} create={create} setAddTitle={setAddTitle} creatModal={createModal} setCreateModal ={setCreateModal} />  : null
        }
      <Footer/>
    </div>
  );
}






export default App;
