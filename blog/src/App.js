/* eslint-disable */
import './App.css';
import { useState } from 'react';
import Footer from '../src/components/page/footer';


function App() {

  let [title, setTitle] = useState(['1번째 글 제목 입니다.','2번째 글 제목 입니다.','3번째 글 제목 입니다.']);
  let [date, setDate] = useState(['2022-12-02 | 10시 10분','2022-12-03 | 10시 30분','2022-12-04 | 10시 40분']);
  let [content, setContent] = useState(['1번째 글 내용 입니다.','2번째 글 내용 입니다.','3번째 글 내용 입니다.']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [state,setState] = useState(0);
  let [addTitle, setAddTitle] = useState('');

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



  return (
    <div className="App">
     <div className="black-nav">
      <h4 style={{color : 'red', fontSize:'16px'}}>React Blog</h4>
     </div>
     {
     /* <button onClick={changeTitle}>Title Change</button>
     <button onClick={changeSort}>Sort</button> */
     }
    {
        title.map((x,i) => {
            return(
                <div key={i}>
                    <div className="likeList">
                        <span onClick={(e) =>  {e.stopPropagation(); likePlus(i)}}>👍</span>
                        <span onClick={(e) =>  {e.stopPropagation(); likeMinus(i)}}>👎</span>
                        {like[i]}
                    </div>
                    <div onClick={(e) =>{ setModal(!modal); setState(i);} } className="list">
                        <h4>{title[i]}</h4>
                        <p>{content[i]}</p>
                        <p>{date[i]}</p>
                        <button onClick={(e) =>  {e.stopPropagation(); deleteContent(i)}}>삭제</button>
                    </div>
                </div>
            )
        })
    }
        <input onChange={(e) => {setAddTitle(e.target.value)}}/><button onClick={() => create(content.length + 1)}>글등록</button>
    {
        modal ? <Modal title={title} content={content} state={state} changeTitle={changeTitle} color={'skyblue'} />  : null
    }
      <Footer/>
    </div>
  );
}


const Modal = (props) => {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.state]}</h4>
      <p>{props.content[props.state]}</p>
      <p>날짜</p>
      <button onClick={props.changeTitle}>글 수정</button>
    </div>
  )
}

export default App;
