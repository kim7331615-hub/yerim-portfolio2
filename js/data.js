/*
 * 작품을 추가하거나 순서를 바꾸는 파일입니다.
 * 1. 이미지를 img/works/ 폴더에 넣습니다.
 * 2. 아래 items에 { title, image, alt, note } 항목을 추가합니다.
 * 3. 프로젝트에는 url을 넣으면 웹사이트 링크로도 사용할 수 있습니다.
 * 서버, npm, 별도 라이브러리 없이 동작하도록 일반 JavaScript를 사용합니다.
 */
window.PORTFOLIO_DATA = {
  email: "kim7331615@naver.com",
  slideSpeed: 42, // 초당 이동 거리(px). 작을수록 천천히 흐릅니다.
  categories: {
    popup: {
      title: "POPUP",
      autoplay: true,
      items: [
        { title: "NIKE — JUST DO IT", image: "img/works/popup-nike-red.png", alt: "빨간 배경과 나이키 운동화를 활용한 프로모션 팝업", note: "프로모션 팝업 · 500 × 750" },
        { title: "투썸플레이스 — 딸기 케이크", image: "img/works/popup-twosome.png", alt: "핑크색 딸기 케이크를 중심으로 구성한 투썸플레이스 팝업", note: "프로모션 팝업 · 500 × 750" },
        { title: "OLIVE YOUNG — 마녀공장", image: "img/works/popup-oliveyoung.png", alt: "노란 배경의 마녀공장 클렌징 오일 올리브영 팝업", note: "프로모션 팝업 · 500 × 750" },
        { title: "NIKE — Basketball", image: "img/works/popup-nike-orange.png", alt: "농구 선수와 운동화를 배치한 주황색 나이키 팝업", note: "프로모션 팝업 · 500 × 750" }
      ]
    },
    poster: {
      title: "POSTER",
      autoplay: true,
      items: [
        { title: "Glow Mood — Lip & Cheek", image: "img/works/poster-lip.png", alt: "피치 색조의 립 앤 치크 화장품 포스터", note: "포스터 · 500 × 750" },
        { title: "VOVA LAB — Wireless Charging", image: "img/works/poster-vova.png", alt: "파스텔 배경에 세 가지 색상의 보조배터리를 배치한 포스터", note: "포스터 · 500 × 750" },
        { title: "Onnono — 2026 Collection", image: "img/works/poster-onnono.png", alt: "오렌지색 소파를 강조한 Onnono 가구 포스터", note: "포스터 · 500 × 750" }
      ]
    },
    detail: {
      title: "DETAIL PAGE",
      autoplay: false,
      // 현재 Figma의 Detail Page 폴더에는 작품이 배치되어 있지 않습니다.
      // 실제 파일을 추가한 후 아래 예시의 주석을 해제해 사용하세요.
      items: [
        // { title: "내추럴 브리즈 이불세트", image: "img/works/detail-bedding.png", alt: "침구 상세페이지", note: "상세페이지 · 클릭하면 전체 이미지" }
      ]
    },
    projects: {
      title: "PROJECTS",
      autoplay: false,
      // 현재 파일에 프로젝트 이미지와 실제 배포 주소가 없습니다.
      // 확인된 이미지와 주소를 받은 뒤 아래 형태로 추가하세요.
      items: [
        // { title: "프로젝트명", image: "img/works/project-cover.png", alt: "프로젝트 대표 화면", note: "직접 담당한 작업", url: "https://실제-사이트-주소" }
      ]
    },
    banner: {
      title: "BANNER",
      autoplay: true,
      items: [
        { title: "NOCTE — A Scent After Midnight", image: "img/works/banner-nocte.png", alt: "달빛 아래 바위와 향수병으로 구성한 NOCTE 배너", note: "히어로 배너 · 1400 × 707" },
        { title: "POPPIE SODA", image: "img/works/banner-poppie.png", alt: "붉은 체리와 탄산음료 캔을 활용한 POPPIE SODA 배너", note: "히어로 배너 · 1400 × 701" },
        { title: "Slow Mornings, Better Days", image: "img/works/banner-bakery.png", alt: "따뜻한 햇살과 크루아상을 담은 베이커리 배너", note: "히어로 배너 · 1400 × 707" },
        { title: "GO BEYOND THE CITY", image: "img/works/banner-outdoor.png", alt: "석양이 지는 산 정상과 하이커가 있는 아웃도어 배너", note: "히어로 배너 · 1400 × 707" }
      ]
    }
  }
};
