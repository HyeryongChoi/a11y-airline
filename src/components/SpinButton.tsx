import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => {
      setMessage(`성인 승객 추가 ${prevCount + 1}`);
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      setMessage(`성인 승객 감소 ${prevCount - 1}`);
      return prevCount - 1;
    });
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label htmlFor='adultCount'>성인</label>
          <div className='helpIcon' onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            ?{isTooltipVisible && <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>}
          </div>
        </div>
        <button
          onClick={decrement}
          className='spinButton'
          aria-label='성인 탑승자 한명 줄이기'
          disabled={count <= 0 ? true : false}
        >
          -
        </button>
        <input
          id='adultCount'
          type='text'
          role='spinbutton'
          readOnly
          className='spinButtonInput'
          value={count}
          max={3}
        />
        <div
          aria-live='polite'
          aria-relevant='additions'
          aria-atomic='true'
          className='visually-hidden'
        >
          {message}
        </div>
        <button
          onClick={increment}
          className='spinButton'
          aria-label='성인 탑승자 한명 늘리기'
          disabled={count >= 3 ? true : false}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
