import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import './Notice.css';

function Notice() {
  return (
    <div className="Main">
        <Header />
        <div className="content">
            <h2>주의 사항</h2>
            <p>1. 이 앱은 전문적인 의학 앱이 아닙니다. 이 앱은 의심되는 증상을 간단히 알아보는 앱입니다.</p>
            <p>2. 전문적인 진료는 반드시 그에맞는 병원을 찾아야 합니다.</p>
            <p>3. ai를 이용해 병을 유추하는 앱이므로 정확한 증상은 유추하지 못합니다.</p>
        </div>
    </div>
  );
}

export default Notice;