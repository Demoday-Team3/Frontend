import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../Badge";
import Modal from "react-modal";
import "./style.css";

//그룹 상세 정보 조회 api 호출

const GroupDetail = ({ groups }) => {
  // URL 파라미터에서 그룹 ID를 가져옴
  const { id } = useParams();
  // 그룹 목록에서 해당 ID를 가진 그룹을 찾음
  const group = groups.find((group) => group.id === id);

  // 상태 변수 설정: 공감 수, 모달 열림 상태, 그룹 정보 등
  const [likeCount, setLikeCount] = useState(group?.likeCount || 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [groupName, setGroupName] = useState(group.className);
  const [groupDescription, setGroupDescription] = useState(group.description);
  const [groupImage, setGroupImage] = useState(group.image);
  const [isPublic, setisPublic] = useState(group.isPublic);
  const [password, setPassword] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  // 그룹이 존재하지 않을 경우 메시지 출력
  if (!group) {
    return <p>그룹을 찾을 수 없습니다.</p>;
  }

  // 공감 버튼 클릭 시 호출되는 함수
  const handleLike = () => {
    setLikeCount(likeCount + 1);
    // 여기서 서버에 공감 수를 업데이트하는 api 호출
  };

  // 그룹 정보 수정 모달 열기
  const handleOpenModal = () => setIsModalOpen(true);

  // 그룹 정보 수정 모달 닫기
  const handleCloseModal = () => setIsModalOpen(false);

  // 그룹 삭제 모달 열기
  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);

  // 그룹 삭제 모달 닫기
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setGroupImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 그룹 정보 저장 버튼 클릭 시 호출되는 함수
  const handleSaveChanges = () => {
    // 그룹 등록 시 입력한 비밀번호와 현재 입력한 비밀번호를 비교
    if (password === group.password) {
      console.log("그룹 정보 수정:", {
        groupName,
        groupDescription,
        groupImage,
        isPublic,
        password,
      });
      // 그룹 정보를 수정하는 API 호출

      handleCloseModal();
    } else {
      // 비밀번호가 일치하지 않을 경우 처리
      console.log("비밀번호가 일치하지 않습니다.");
      alert("비밀번호가 일치하지 않습니다. 다시 시도해 주세요.");
    }
  };

  // 그룹 삭제 버튼 클릭 시 호출되는 함수
  const handleDeleteGroup = () => {
    // 그룹 등록 시 입력한 비밀번호와 현재 입력한 비밀번호를 비교
    if (deletePassword === group.password) {
      console.log("그룹 삭제 성공");
      // 그룹 삭제 API 호출

      handleCloseDeleteModal();
    } else {
      // 비밀번호가 일치하지 않을 경우 처리
      console.log("비밀번호가 틀렸습니다.");
      alert("비밀번호가 일치하지 않습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="group-detail-container">
      <div className="group-detail-header">
        <img src={group.image} alt={group.className} className="group-image" />
        <div className="group-info">
          <div className="group-meta-actions">
            <div className="group-meta">
              <span>D+{group.dDay}</span>
              <span> | </span>
              <span>{group.isPublic ? "비공개" : "공개"}</span>
            </div>
            <div className="group-actions">
              <button className="edit-group-button" onClick={handleOpenModal}>
                그룹 정보 수정하기
              </button>
              <button
                className="delete-group-button"
                onClick={handleOpenDeleteModal}
              >
                그룹 삭제하기
              </button>
            </div>
          </div>
          <h1>{group.className}</h1>
          <div className="group-stats-inline">
            <span>추억 {group.memoryCount}</span>
            <span>그룹 공감 {likeCount}</span>
          </div>
          <p>{group.description}</p>
        </div>
      </div>

      {/* 획득 배지와 공감 보내기 버튼 */}
      <div className="group-badges">
        <div className="badge-list">
          <span>획득 배지</span>
          <span></span>
        </div>
        <Badge badgeIds={group.badgeIds} />
        <button className="like-button" onClick={handleLike}>
          공감 보내기
        </button>
      </div>

      {/* 추억 목록 */}
      <div className="memories-list">
        <div className="memories-header">
          <h2>추억 목록</h2>
          <button className="upload-button">추억 올리기</button>
        </div>
        {group.memories && group.memories.length > 0 ? (
          group.memories.map((memory, index) => (
            <div key={index} className="memory-item">
              <p>공감 수: {memory.likeCount}</p>
              {/* 필요에 따라 다른 메모리 정보를 여기에 추가할 수 있음 */}
            </div>
          ))
        ) : (
          <p>게시된 추억이 없습니다.</p>
        )}
      </div>

      {/* 그룹 정보 수정 모달 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="그룹 정보 수정"
        className="group-modal"
        overlayClassName="group-modal-overlay"
      >
        <h2>그룹 정보 수정</h2>
        <button onClick={handleCloseModal} className="close-modal-button">
          X
        </button>
        <form className="edit-group-form">
          <label>그룹명</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <label>대표 이미지</label>
          <div className="image-upload">
            <input type="text" value={groupImage} readOnly />
            <button
              type="button"
              className="file-select-button"
              onClick={() => document.querySelector("#fileInput").click()}
            >
              파일 선택
            </button>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <label>그룹 소개</label>
          <textarea
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
          />
          <label>그룹 공개 선택</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={() => setisPublic(!isPublic)}
            />
            <span>{isPublic ? "비공개" : "공개"}</span>
          </div>
          <label>수정 권한 인증</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="save-button"
            onClick={handleSaveChanges}
          >
            수정하기
          </button>
        </form>
      </Modal>

      {/* 그룹 삭제 모달 */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        contentLabel="그룹 삭제 확인"
        className="group-modal"
        overlayClassName="group-modal-overlay"
      >
        <h2>그룹 삭제</h2>
        <button onClick={handleCloseDeleteModal} className="close-modal-button">
          X
        </button>
        <form className="delete-group-form">
          <label>삭제 권한 인증</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={deletePassword}
            onChange={(e) => setDeletePassword(e.target.value)}
          />
          <button
            type="button"
            className="delete-button"
            onClick={handleDeleteGroup}
          >
            삭제하기
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default GroupDetail;
