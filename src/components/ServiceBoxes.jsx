import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import './ServiceBoxes.css';

import find_store from '../assets/find-store.png';
import gift from '../assets/gift.png';
import event from '../assets/event.png';
import delivery from '../assets/delivery.png';
import icon_subLeft from '../assets/icon_subLeft.svg';
import quick_order from '../assets/quick-order.png';
import take_out from '../assets/take-out.png';

function ServiceBoxes() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트에 따라 버튼 보이기 여부 업데이트
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 부드럽게 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className='SubBannerWrap'>
        <div className='SubBanner'>
          <div className='SbanBox color1 Cpointer'>
            <span>
              가까운 네네치킨 매장을
              <br /> 찾아보세요
            </span>
            <img src={find_store} className='find-store' alt='네네치킨 매장찾기' />
          </div>
          <div className='SbanBox color2 Cpointer'>
            <span>
              모바일교환권/금액권으로 마음을
              <br /> 선물하세요
            </span>
            <img src={gift} className='gift' alt='선물하기' />
          </div>
          <div className='SbanBox color3 Cpointer'>
            <span>
              다양한 이벤트 재미를
              <br /> 경험해보세요!
            </span>
            <img src={event} className='event' alt='이벤트정보보기' />
          </div>
        </div>
      </div>

      <div className='SubProcess'>
        <div className='ProcessBox'>
          <div className='ProcessList'>
            <div>
              <img src={delivery} alt='배달주문' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>배달</span>주문
                </div>
                <span className='ticon' />
                <img src={icon_subLeft} alt='' />
              </div>
            </div>
            <div className='PS_Stitle'>원하는 곳에서 받아 보세요</div>
          </div>

          <div className='ProcessList'>
            <div>
              <img src={take_out} alt='포장주문' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>포장</span>주문
                </div>
                <span className='ticon' />
                <img src={icon_subLeft} alt='' />
              </div>
            </div>
          </div>

          <div className='ProcessList quick'>
            <div>
              <img src={quick_order} alt='퀵오더' />
            </div>
            <div className='PS_title'>
              <div className='tBox'>
                <div style={{ flex: 1 }}>
                  <span className='PStype'>퀵</span>오더
                </div>
                <span className='ticon' />
                <img src={icon_subLeft} alt='' />
              </div>
            </div>
            {/* PS_title 닫는 태그 추가 */}
            <div className='PS_Stitle'>
              자주 주문하는 메뉴를 <br />
              빠르게 주문해요
            </div>
          </div>
        </div>
      </div>

      <div id='btnTop'>
        {isVisible && (
          <button onClick={scrollToTop} className='scroll-button'>
            ▲
          </button>
        )}
      </div>
    </>
  );
}

export default ServiceBoxes;
