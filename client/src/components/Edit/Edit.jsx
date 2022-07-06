import React, { useState } from 'react';
import Section from './Section';

import '../../pages/Edit.css';

const sectionName = [
  { id: 1, name: '한 줄 소개', isToggle: false },
  { id: 2, name: '보유 기술 스택', isToggle: false },
  { id: 3, name: '경력', isToggle: false },
  { id: 4, name: '학력', isToggle: false },
  { id: 5, name: '교육 및 기타 이력', isToggle: false },
  { id: 6, name: '프로젝트', isToggle: false },
  { id: 7, name: '수상', isToggle: false },
  { id: 8, name: '시험 및 자격증', isToggle: false },
  { id: 9, name: '외국어', isToggle: false },
  { id: 10, name: '포트폴리오/웹사이트', isToggle: false },
];

function Edit() {
  const [data, setData] = useState(sectionName);

  const addComponent = (event) => {
    console.log(`${event.target.innerHTML} 컴포넌트 추가`);
  };

  return (
    <div className="edit">
      <div className="edit-bar">
        <div className="edit-option">
          <button type="button">섹션 추가</button>
        </div>
        <div className="edit-option">
          <button type="button">디자인 변경</button>
        </div>
      </div>
      <div className="section-bar">
        <ul>
          {data.map((el) => (
            <li>
              <SectionChoiceButton
                id={el.id}
                name={el.name}
                isToggle={el.isToggle}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="section-info">
        <Section sectionName={sectionName} />
      </div>
    </div>
  );
}

// 섹션 요소 버튼
function SectionChoiceButton(prop) {
  const { id, name, isToggle } = prop;
  const [toggle, setToggle] = useState(isToggle);

  // 버튼 클릭 시 토글하여 색 변경
  const onChangeColor = (event) => {
    setToggle(!toggle);
    console.log(`${event.target.innerHTML} 컴포넌트 추가`);
  };
  return (
    <button
      type="button"
      id={id}
      onClick={onChangeColor}
      className={toggle ? 'section-button toggle' : 'section-button'}
    >
      {name}
    </button>
  );
}
export default Edit;