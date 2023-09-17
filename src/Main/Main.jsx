import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Header from '../Header/Header.jsx';

function Main() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
  
      // 사용자 입력을 가져와 question 생성
      const question = inputValue;
  
      const response = await fetch('http://localhost:8080/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }), // 증상을 서버로 전송
      });
  
      if (!response.ok) {
        throw new Error('서버 응답 오류');
      }
  
      navigate('/Result', { state: { inputValue } }); // 결과 페이지로 이동하면서 입력값 전달
    } catch (error) {
      setErrorMessage('네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Main">
      <Header />
      <Form className="search">
        <Form.Group controlId="Form">
          <Form.Label>증상</Form.Label>
          <Form.Control
            type="text"
            placeholder="증상을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? <Spinner animation="border" size="sm" /> : '검색'}
        </Button>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      </Form>
    </div>
  );
}

export default Main;