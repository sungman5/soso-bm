export const basic = [
    {
        id: 0,
        isTutorial: false,
        title: '쉬운 배달앱 사용법',
        content: [
            {
                id: '1',
                desc: '플레이 스토어를 연다.',
                img: '',
                alt: '',
            },
        ],
        moreInfo:
            `
        <p className="basic_moreInfo__intro">
            장애, 나이 상관없이 누구나 배달앱을 사용할 수 있도록 어려운 용어는 쉽게 바꾸고,<br>설명이 필요한 부분은 친절하게 안내했습니다.<br>사람들에게 많이 알려져있는 배달앱 <img id="bm-logo" src="../assets/basic_imgs/bm-logo.png" alt="배달의민족">을 기준으로 만들어졌습니다.
        </p>
        <ul className="basic_moreInfo__wrap">
            <li className="basic_moreInfo__flexbox">
                <h4 className="basic_moreInfo__h4 basic_moreInfo__primary">준비하기</h4> <p>배달의민족 회원가입하기, 로그인하기, 주소 등록하기를 안내합니다.</p>
            </li>
            <li className="basic_moreInfo__flexbox">
                <h4 className="basic_moreInfo__h4 basic_moreInfo__green">이용하기</h4> <p>배달의민족 음식 주문하기, 결제하기를 안내합니다.</p>
            </li>
            <li className="basic_moreInfo__flexbox">
                <h4 className="basic_moreInfo__h4 basic_moreInfo__yellow">활용하기</h4> <p>배달의민족을 상황에 맞게 더 잘 사용하는 법을 안내합니다.</p>
            </li>                    
        </ul>
        <div className="basic_intro_qr">
            <img className="basic_qr" src="../assets/basic_imgs/qr.jpg" alt="쉬운배달앱사용법 다운로드받기 QR코드">
            <p className="basic_moreInfo_caption">휴대폰 카메라로 찍어보세요!</p>
            <h4 className="basic_download">쉬운 배달앱 사용법</h4>
            <a className="basic_download_btn" href="https://mandao-prod-cdn.baemin.com/assets/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1X%EC%86%8C%EC%86%8C%ED%95%9C%EC%86%8C%ED%86%B5_%EC%89%AC%EC%9A%B4%EB%B0%B0%EB%8B%AC%EC%95%B1%EC%82%AC%EC%9A%A9%EB%B2%95_20211203.pdf">앱 다운로드 받기</a>            
            <p className="basic_moreInfo_caption">이 자료는 삼성, LG 등 안드로이드 스마트폰을 기준으로 설명합니다.</p>
        </div>
            
        `,
    },
    {
        id: 1,
        isTutorial: false,
        title: '배달앱 용어사전',
        content: [
            {
                id: '1',
                desc: '',
                img: '',
                alt: '',
            },
        ],

        moreInfo:
            `
                <div className="dictionary">
                    <h3 className="dictionary__title">배달팁</h3>
                    고객이 내는 배달비. 음식값에 더해져서 한 번에 결제된다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"피자가 2만 원, 배달팁이 2천 원이니까 모두 2만 2천 원이네."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">최소주문금액</h3>
                    배달시킬 때 꼭 채워야 하는 주문금액. 가게마다 최소주문금액이 다르다. 최소주문금액보다 많이 주문해야 배달시킬 수 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"최소주문금액이 8천 원이니까 만 원 정도 주문해야겠다."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">찜</h3>
                    마음에 드는 가게를 골라놓는 것. 마음에 드는 가게를 빨리 찾을 수 있어서 편하다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"이 집 맛있네. 다음에 배달시키게 찜해야겠다."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">리뷰</h3>
                    가게에서 음식을 시켜본 다음 나의 느낌이나 생각을 적는 것. 음식이 맛있었는지, 직원이 친절했는지 자유롭게 적을 수 있다. 사진을 함께 올릴 수 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"리뷰가 좋은데? 여기서 시켜 먹어야겠다."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">별점</h3>
                    가게의 음식을 먹어보고 만족한 만큼 별로 점수를 주는 것. 1점부터 5점까지 줄 수 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"별점이 4.8점이면 엄청 높네! 여기 맛집인가 봐."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">배민페이</h3>
                    배달의민족 앱에서 계좌나 카드 정보를 연결하는 결제 서비스. 한 번 연결해두면 다른 결제 방법보다 쉽고 빠르게 결제할 수 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"배민페이 등록하니까 결제할 때마다 정보를 입력하지 않아도 돼서 편해."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">배민1</h3>
                    일반배달보다 빠르게 배달하는 서비스. 한집배달, 알뜰배달 2가지 종류가 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"배민1으로 주문했더니 배달이 엄청 빨리 왔네."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">한집배달</h3>
                    한 번에 한 집만 배달하는 것. 여러 집을 들르지 않고 우리 집으로 바로 음식을 배달해준다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"배고프니까 한집배달로 빨리 받아 봐야지!"</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">알뜰배달</h3>
                    우리 집 주변의 가까운 여러 개의 집들을 모아 배달하는 것. 배달팁이 싸다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"알뜰배달로 주문해서 배달팁을 조금 아껴볼까?"</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">소스</h3>
                    음식을 더 맛있게 먹기 위해 찍어 먹거나 뿌려 먹는 것.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"순살치킨을 양념 소스에 찍어 먹으면 더 맛있어!"</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">토핑</h3>
                    음식을 더 맛있게 먹기 위해 추가하는 음식 재료. 치즈, 고기,  과일 등의 토핑이 있다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"닭갈비에 치즈 토핑을 추가해서 치즈 닭갈비를 먹어야지."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">사이드 메뉴</h3>
                    주로 시키는 음식 말고 곁들여 먹는 적은 양의 음식. 햄버거 세트의 감자튀김, 짜장면의 군만두가 사이드 메뉴다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"피자를 시킬 때 사이드 메뉴로 스파게티를 시키면 좋아."</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">닉네임</h3>
                    배달의민족 앱에서 사용하는 내 별명. 꼭 진짜 이름을 쓰지 않아도 된다. 리뷰를 쓸 때 표시된다.<p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"재밌는 닉네임으로 좋은 리뷰를 달면 사장님이 답글을 써주시겠지?"</p>
                </div>
                <div className="dictionary">
                    <h3 className="dictionary__title">랜덤</h3>
                    정하지 않고 아무 것이나 뽑는 것. 어떤 것이 뽑힐지 알 수 없다. <p className="caption dictionary__caption"><i className="bi bi-emoji-smile-fill"></i>&nbsp;"리뷰를 써준 분들에게 무료 음료수를 랜덤으로 드립니다."</p>
                </div>
            `,
    },
    {
        id: 2,
        isTutorial: true,
        title: '배달앱 설치하기',
        content: [
            {
                id: '1',
                desc: '플레이 스토어를 연다.',
                img: '../assets/basic_imgs/b-3-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '검색창을 찾는다.',
                img: '../assets/basic_imgs/b-3-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '<strong className="emphasis">배달의 민족</strong>을 입력하고 <i className="bi bi-search"></i>돋보기를 누른다.',
                img: '../assets/basic_imgs/b-3-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '<strong className="emphasis">설치</strong>를 누른다.',
                img: '../assets/basic_imgs/b-3-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '<strong className="emphasis">끝!</strong>',
                img: '../assets/basic_imgs/b-3-5.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },

    {
        id: 3,
        isTutorial: true,
        title: '주소 설정하기',
        content: [
            {
                id: '1',
                desc: '배달앱을 연다',
                img: '../assets/basic_imgs/b-4-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '위치기반 서비스 동의에 체크한다.<br className="only-mobile"> 마케팅 정보 알림에 동의하면 체크하고 <strong className="emphasis">시작하기</strong>를 누른다.',
                img: '../assets/basic_imgs/b-4-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '배달받을 주소를검색한다. <p class="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;&#96;서울시 중구 소소로 123, 101호&#96;면, 소소로 123만 입력한다.</p>',
                img: '../assets/basic_imgs/b-4-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc: '상세 주소를 입력하고 <strong className="emphasis">완료</strong>를 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;상세주소: 건물 이름이나 동, 호 등 주소의 뒷부분</p>',
                img: '../assets/basic_imgs/b-4-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '끝!',
                img: '../assets/basic_imgs/b-4-5.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 4,
        isTutorial: true,
        title: '회원가입 하기',
        content: [
            {
                id: '1',
                desc: '첫 화면에서 <img src="" alt="">를 눌러 My배민으로 들어간다.',
                img: '../assets/basic_imgs/b-5-1.jpg',
                alt: '',
            },
            {
                id: '2',
                desc: '<strong className="emphasis">로그인해주세요</strong>를 누른다.',
                img: '../assets/basic_imgs/b-5-2.jpg',
                alt: '',
            },
            {
                id: '3',
                desc: '<strong className="emphasis">이메일 회원가입</strong>을 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;페이스북, 네이버, 애플 아이디와 앱이 있다면 더 빨리 가입할 수 있다.</p>',
                img: '../assets/basic_imgs/b-5-3.jpg',
                alt: '',
            },
            {
                id: '4',
                desc:
                `
                동의하는 내용에 체크하고 <strong className="emphasis">시작하기</strong>를 누른다.
                <div>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[필수]배달의민족 이용약관 동의</b>배달의민족 앱을 이용하는 규칙에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[필수]전자금융거래 이용약관 동의</b>온라인으로 주문하는 서비스 이용 규칙에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[필수]개인정보 수집 이용 동의</b>나에 대한 개인정보를 가져가 쓰는 것에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[선택]개인정보 수집 이용 동의</b>나에 대한 개인정보를 다른 곳에 알려주는 것에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[선택]마케팅정보 메일, SMS 수신동의</b>문자, 메일 등으로 광고를 주고 받는 것에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"><i className="bi bi-check"></i>[선택]개인정보 제3자 제공 동의</b>나에 대한 개인정보를 다른 곳에 알려주는 것에 동의한다.</p>
                    <p className="caption make_account_caption"><b className="emphasis_b"></b>[필수]를 확인하고 꼭 체크해야 배달의 민족을 사용할 수 있다.<br> [선택]을 확인하고 체크하고 싶으면 체크한다.</p>
                </div>
                `,
                img: '../assets/basic_imgs/b-5-4.jpg',
                alt: '',
            },
            {
                id: '5',
                desc: '이름, 생년월일, 휴대전화 번호를 쓰고 <strong className="emphasis">인증번호 요청</strong>을 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;인증번호: 실제로 사용하는 전화인지 확인하는 숫자. 문자로 받는다.</p>',
                img: '../assets/basic_imgs/b-5-5.jpg',
                alt: '',
            },
            {
                id: '6',
                desc: '문자로 온 인증번호 4자리를 입력하고 <strong className="emphasis">확인</strong>을 누른다.',
                img: '../assets/basic_imgs/b-5-6.jpg',
                alt: '',
            },
            {
                id: '7',
                desc: '이메일 주소를 입력하고 <strong className="emphasis">중복확인</strong>을 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;회원가입을 하려면 이메일 주소가 있어야 한다.</p>',
                img: '../assets/basic_imgs/b-5-7.jpg',
                alt: '',
            },
            {
                id: '8',
                desc: '닉네임, 비밀번호, 생년월일을 입력하고 <strong className="emphasis">완료</strong>를 누른다. <p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;비밀번호는 10자보다 길게 만든다. 영어, 숫자, 특수문자 중 2가지 종류를 섞는다.</p>',
                img: '../assets/basic_imgs/b-5-8.jpg',
                alt: '',
            },
            {
                id: '9',
                desc: '끝!',
                img: '../assets/basic_imgs/b-5-9.jpg',
                alt: '',
            },
        ],
        moreInfo: ``,
    },
    {
        id: 5,
        isTutorial: false,
        title: '첫 화면 이해하기',
        content: [
            {
                id: '1',
                desc: '',
                img: '',
                alt: '',
            },
        ],
        moreInfo:
            `
        <div className="basic_5_container">
            <img className="basic_5_container__img" src="../assets/basic_imgs/first-page.jpg" alt="배달의민족 앱 메인화면">
            <ul>
                <li><strong className="emphasis basic_5_item">1. 주소 정하기</strong> 배달 받을 곳을 주문할 때 정할 수 있다. 주소를 우리집, 회사 등의 이름으로 정하면 편하다.</li>
                <li><strong className="emphasis basic_5_item">2. 서비스 전체보기</strong> 배달의민족 앱에서 이용할 수 있는 모든 서비스를 볼 수 있다.</li>
                <li><strong className="emphasis basic_5_item">3. 알림센터</strong> 여러 가지 알림을 확인할 수 있다. 빨간점이 떴다면 새로운 알림이 도착했다는 뜻이다.</li>
                <li><strong className="emphasis basic_5_item">4. My배민</strong> 내가 찜한 가게, 내 주문내역 등 나와 관련된 정보를 볼 수 있다.</li>
                <li><strong className="emphasis basic_5_item">5. 검색하기</strong> 원하는 메뉴나 가게를 검색해 바로 찾을 수 있다.</li>
                <li><strong className="emphasis basic_5_item">6. 빠른 배달시키기</strong> 오른쪽의 배달보다 빠르게 받을 수 있다.<p className="caption"><i className="bi bi-exclamation-octagon-fill"></i>&nbsp;지역에 따라 배민1과 배달의 위치가 다르며 배민1이 안 보일 수 있다.</p></li>
                <li><strong className="emphasis basic_5_item">7. 배달시키기</strong></li>
                <li><strong className="emphasis basic_5_item">8. 포장</strong> 주문하기 직접 가지러 가서 배달팁을 아낄 수 있다.</li>
                <li><strong className="emphasis basic_5_item">9. B마트(비마트)</strong> 마트에서 파는 물건도 음식처럼 주문하고 배달받을 수 있다.</li>
            </ul>
        </div>
        `,
    },
];