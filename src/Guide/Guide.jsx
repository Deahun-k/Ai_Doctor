import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import './Guide.css';

function Guide() {
  return (
    <div className="Main">
        <Header />
        <div className="content">
            <h2>사용 가이드</h2>
            <p>1. 사용자의 증상을 간단하게 입력합니다.(에 : 기침과 두통)</p>
            <p>2. 검색 버튼을 누릅니다.</p>
            <p>3. 결과를 확인후, 그에맞는 병원을 찾습니다.</p>
        </div>
    </div>
  );
}

export default Guide;