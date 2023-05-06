export const realgame = [
    {
        id: 0,
        isTutorial: true,
        title: '주문할 곳 고르기',
        content: [
            {
                id: '1',
                desc: '배달받을 주소를 선택한다.',
                img: '/assets/realgame/rg-1-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '<strong className="emphasis">검색창</strong>을 누른다.',
                img: '/assets/realgame/rg-1-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '검색창에 원하는 음식이나 가게를 검색한다.',
                img: '/assets/realgame/rg-1-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '마음에 드는 가게를 선택한다.',
                img: '/assets/realgame/rg-1-4.jpg',
                alt: '',
            },
        ],
        moreInfo : `
            <div className="realgame_moreInfo_group">
                <h3>필터 사용하기</h3>
                <div className="realgame_more_flexbox">
                    <img className="realgame_more_flexbox__img" src="/assets/realgame/rg-1-5-filter.jpg" alt="">
                    <div className="realgame_more_flexbox__div">
                        <div className="realgame_desc_group">
                            <p>필터를 선택하면 내가 원하는 조건의 가게만 모아 볼 수 있다.</p>
                            <p>배민1, 쿠폰, 1인분, 배달팁, 별점, 최소주문금액 필터를 선택할 수 있다.</p>
                            <p>맨 처음에는 항상 기본순으로 되어 있다.</p>
                        </div>
                        <ul>
                            <li><strong className="emphasis">배민1</strong>배달 시간이 빠른 가게만 모아볼 수 있다.</li>
                            <li><strong className="emphasis">쿠폰</strong>할인 쿠폰을 제공하는 가게만 모아 볼 수 있다.</li>
                            <li><strong className="emphasis">1인분</strong>1인분을 배달해주는 가게만 모아 볼 수 있다.</li>
                            <li><strong className="emphasis">배달팁</strong>배달팁 금액이 싼 가게만 모아 볼 수 있다.</li>
                            <li><strong className="emphasis">별점</strong>별점이 높은 가게만 모아 볼 수 있다.</li>
                            <li><strong className="emphasis">최소주문금액</strong>최소주문금액이 싼 가게만 모아 볼 수 있다.</li>
                        </ul>
                    </div>
                </div>
            </div>       
            <div className="realgame_moreInfo_group">
                <h3>가게 정보 보기</h3>
                <div className="realgame_more_flexbox">
                    <img className="realgame_more_flexbox__img" src="/assets/realgame/rg-1-6-info.jpg" alt="">
                    <div className="realgame_more_flexbox__div">
                        <ol>
                            <li><b className="emphasis_ol">1. </b>가게이름</li>
                            <li><b className="emphasis_ol">2. </b>새로 생긴 가게</li>
                            <li><b className="emphasis_ol">3. </b>쿠폰 주는 가게</li>
                            <li><b className="emphasis_ol">4. </b>바로 사용할 수 있는 쿠폰을 주는 가게</li>
                            <li><b className="emphasis_ol">5. </b>별점, 리뷰 개수</li>
                            <li><b className="emphasis_ol">6. </b>가장 인기 있는 메뉴</li>
                            <li><b className="emphasis_ol">7. </b>우리 집 주변에 있는 집들만 들러서 배달하는 가게</li>
                            <li><b className="emphasis_ol">8. </b>우리집으로 바로 배달해 주는 가게</li>
                            <li><b className="emphasis_ol">9. </b>음식이 도착하는 데 걸리는 시간</li>
                            <li><b className="emphasis_ol">10.</b> 배달비</li>
                            <li><b className="emphasis_ol">11.</b> 최소 주문 금액</li>
                            <li><b className="emphasis_ol">12.</b> 깨끗하다고 인정받은 가게</li>
                            <li><b className="emphasis_ol">13.</b> 포장할 수 있는 가게</li>
                            <li><b className="emphasis_ol">14.</b> 예약할 수 있는 가게</li>                            
                        </ol>
                    </div>
                </div>
            </div>       
        `,
    },
    {
        id: 1,
        isTutorial: true,
        title: '메뉴 담기',
        content: [
            {
                id: '1',
                desc: '메뉴를 확인한다. 손가락으로 화면을 아래로 내리면 <br className="only-mobile">메뉴를 전부 볼 수 있다.',
                img: '/assets/realgame/rg-2-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '원하는 메뉴를 선택한다.',
                img: '/assets/realgame/rg-2-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '무엇을 시킬지 선택하고, 몇 개 시킬지 수량을 정한 후 <strong className="emphasis">담기</strong>를 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;맛, 소스, 토핑 등을 선택할 수 있다.</p>',
                img: '/assets/realgame/rg-2-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '<strong className="emphasis">장바구니에 메뉴를 추가했습니다</strong>라는 메시지가 뜨고, <br className="only-mobile">장바구니에 숫자가 생긴다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;선택한 음식 개수만큼 장바구니에 숫자로 표시된다.</p>',
                img: '/assets/realgame/rg-2-4.jpg',
                alt: '',
            },
        ],
        moreInfo : 
        `
        <div className="realgame_moreInfo_options">
            <h3>메뉴 옵션 선택하기</h3>
            <p>선택한 메뉴의 맛을 고르거나 소스 등을 추가할 수 있다.</p>
        </div>
        <img className="realgame_moreInfo_options_img" src="/assets/realgame/rg-2-option.jpg" alt="">        
        <p className="caption realgame_moreInfo_options_caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;사이드 메뉴 : 식사 메뉴와 같이 먹으면 좋은 음식. 식사 메뉴보다 양이 적은 편이다.</p>        
        `,
    },
    {
        id: 2,
        isTutorial: true,
        title: '결제하기',
        content: [
            {
                id: '1',
                desc: '장바구니를 누른다.',
                img: '/assets/realgame/rg-3-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '주문하려는 메뉴, 개수, 가격이 맞는지 확인하고 <strong className="emphasis"><br className="only-mobile">배달 주문하기</strong>를 누른다.',
                img: '/assets/realgame/rg-3-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '배달받을 주소와 전화번호를 꼼꼼하게 확인한다.',
                img: '/assets/realgame/rg-3-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '화면 맨 아래로 내려간다. <br className="only-mobile">결제 수단에서 신용/체크카드를 선택하고 <strong className="emphasis">결제하기</strong>를 누른다.',
                img: '/assets/realgame/rg-3-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '결제수단이 신용/체크카드인지 확인하고<br className="only-mobile"> <strong className="emphasis">본인 확인 후 결제하기</strong>를 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;첫 주문이 아니라면 바로 결제할 수 있다.</p>',
                img: '/assets/realgame/rg-3-5.jpg',
                alt: '',
            },
            {
                id: '6',
                desc: '<strong className="emphasis">휴대폰 인증하기</strong>를 누른다.',
                img: '/assets/realgame/rg-3-6.jpg',
                alt: '',
            },
            {
                id: '7',
                desc: '사용하고 있는 휴대폰의 통신사를 선택한다.',
                img: '/assets/realgame/rg-3-7.jpg',
                alt: '',
            },
            {
                id: '8',
                desc: '나의 정보를 입력하고 <strong className="emphasis">인증번호 요청</strong>을 누른다.',
                img: '/assets/realgame/rg-3-8.jpg',
                alt: '',
            },
            {
                id: '9',
                desc: '문자로 온 인증번호 4자리를 입력하고 <strong className="emphasis">확인</strong>을 누른다.',
                img: '/assets/realgame/rg-3-9.jpg',
                alt: '',
            },
            {
                id: '10',
                desc: '<i className="bi bi-check-circle-fill"></i>&nbsp;를 모두 눌러 동의하고 다음을 누른다.',
                img: '/assets/realgame/rg-3-10.jpg',
                alt: '',
            },
            {
                id: '11',
                desc: '<strong className="emphasis">완료</strong>를 누른다.',
                img: '/assets/realgame/rg-3-11.jpg',
                alt: '',
            },
            {
                id: '12',
                desc: '주문금액과 배달팁이 맞는지 확인하고 <strong className="emphasis">결제하기</strong>를 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;주문 후 취소하려면 어렵고 복잡하다. 주문은 신중하게!</p>',
                img: '/assets/realgame/rg-3-12.jpg',
                alt: '',
            },
            {
                id: '13',
                desc: '이용약관에 <strong className="emphasis">전체동의</strong>를 체크한 후, <br className="only-mobile">결제에 사용할 카드를 선택한다.',
                img: '/assets/realgame/rg-3-13.jpg',
                alt: '',
            },
            {
                id: '14',
                desc: '끝!',
                img: '/assets/realgame/rg-3-14.jpg',
                alt: '',
            },
        ],
        moreInfo : ``,
    },
];