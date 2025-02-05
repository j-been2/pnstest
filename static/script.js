// 관리되는 목록 (manage.json 파일에서 불러올 예정)
const allowedUsers = ["admin", "user1", "user2"]; // 예시 목록, 실제로는 manage.json에서 불러오기

// 사용자 입력에 따른 권한 확인
document.getElementById('checkAccessBtn').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;

    if (allowedUsers.includes(userInput)) {
        alert("권한이 확인되었습니다.");
        document.getElementById('buttonContainer').style.display = 'block'; // 버튼 표시
    } else {
        alert("권한이 없습니다.");
        document.getElementById('buttonContainer').style.display = 'none'; // 버튼 숨기기
    }
});

// 페이지 이동 함수
function navigateTo(page) {
    if (page === 'product') {
        window.location.href = 'page1.html'; // 상품소개 페이지로 이동
    } else if (page === 'apply') {
        window.location.href = 'apply.html'; // 신청하기 페이지로 이동
    }
}
