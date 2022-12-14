import React, { useRef } from 'react';

const AddMarkInput = ({ onSubmitHandler }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(inputRef.current?.value);
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit}>
        <input
          className='my-1 w-full'
          type='text'
          placeholder='URL을 입력하세요'
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default AddMarkInput;
