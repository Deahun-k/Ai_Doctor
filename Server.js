const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();

app.use(cors());

// API 요청 핸들러
app.use(express.json()); // JSON 파싱 미들웨어 추가

app.post('/api/search', async (req, res) => {
  try {
    // 요청에서 사용자 입력값을 가져옴
    const { question } = req.body;

    // barddata.py를 호출하여 결과를 얻음
    exec(`python barddata.py ${question}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`barddata.py 실행 오류: ${error.message}`);
        res.status(500).json({ error: '서버 오류 발생' });
        return;
      }
      if (stderr) {
        console.error(`barddata.py 오류: ${stderr}`);
        res.status(500).json({ error: '서버 오류 발생' });
        return;
      }

      // barddata.py의 결과를 클라이언트로 반환
      res.json({ text: stdout });
    });
  } catch (error) {
    console.error('API 요청 중 오류:', error);
    res.status(500).json({ error: '서버 오류 발생' });
  }
});

// 서버 실행
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});