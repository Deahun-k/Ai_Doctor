import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Result({ location }) {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(true); // 초기에 로딩 상태로 설정

  useEffect(() => {
    const inputValue = location?.state?.inputValue; // Main.jsx에서 전달한 입력값을 가져옴

    if (inputValue) {
      fetch('http://localhost:8080/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputValue }), // 입력값을 서버로 전송
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('서버 응답 오류');
          }
          return response.json();
        })
        .then((result) => {
          if (result.content && result.content.length > 0) {
            setGeneratedText(result.content[0]); // 첫 번째 'content' 필드 값 사용
          } else {
            setGeneratedText('검색 결과가 없습니다.');
          }
        })
        .catch((error) => {
          console.error('API 호출 중 오류:', error);
          setGeneratedText('API 호출 중 오류가 발생했습니다.');
        })
        .finally(() => {
          setIsLoading(false); // 로딩 완료
        });
    }
  }, [location]);

  return (
    <div className="Main">
      <div className="Head">
        <h1>Ai Doctor</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>검색 결과:</h2>
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;