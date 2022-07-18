import React, { useState, useRef } from 'react';
import CareerList from './CareerList';

function Career() {
  const [inputs, setInputs] = useState({
    startDate: '',
    endDate: '',
    company: '',
    position: '',
    comment: '',
  });

  const { startDate, endDate, company, position, comment } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [careers, setCareers] = useState([]);

  const nextId = useRef(0);

  // 등록
  const onCreate = () => {
    const career = {
      id: nextId.current,
      startDate,
      endDate,
      company,
      position,
      comment,
    };
    setCareers(careers.concat(career));

    setInputs({
      startDate: '',
      endDate: '',
      company: '',
      position: '',
      comment: '',
    });
    nextId.current += 1;
  };

  // 삭제
  const onRemove = (id) => {
    setCareers(careers.filter((career) => career.id !== id));
  };

  return (
    <div>
      <input
        type="date"
        name="startDate"
        value={startDate}
        placeholder="입사일"
        onChange={onChange}
      />
      <input
        type="date"
        name="endDate"
        value={endDate}
        placeholder="퇴사일"
        onChange={onChange}
      />
      <input
        type="text"
        name="company"
        value={company}
        placeholder="회사명"
        onChange={onChange}
      />
      <input
        type="text"
        name="position"
        value={position}
        placeholder="직무"
        onChange={onChange}
      />
      <input
        type="text"
        name="comment"
        value={comment}
        placeholder="비고"
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
      <CareerList careers={careers} onRemove={onRemove} />
    </div>
  );
}

export default Career;