import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* 이미지 위에 어두운 그라데이션 오버레이 → 텍스트 가독성 ↑ */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.55) 0%,
      rgba(0,0,0,0.25) 40%,
      rgba(0,0,0,0.55) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const Panorama = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(p) => (p.isActive ? 1 : 0)};
  transform: scale(${(p) => (p.isActive ? 1.04 : 1)});
  transition: opacity 1.2s ease-in-out, transform 7s ease-out;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 24px;
  z-index: 2;
`;

export const Eyebrow = styled.div`
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 18px;
  color: #FF5A5F;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 0.25em;
    margin-bottom: 14px;
  }
`;

export const SlideTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 18px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.6);
`;

export const SlideSubtitle = styled.p`
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  max-width: 600px;
  margin: 0;
  color: rgba(255,255,255,0.95);
  text-shadow: 0 2px 10px rgba(0,0,0,0.6);
  line-height: 1.6;
`;

/* 슬라이드 인디케이터 (점 3개) */
export const Dots = styled.div`
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;

  @media (max-width: 768px) { bottom: 130px; }
`;

export const Dot = styled.button`
  width: ${(p) => (p.$active ? "28px" : "8px")};
  height: 8px;
  border-radius: 100px;
  border: none;
  background: ${(p) => (p.$active ? "#FF5A5F" : "rgba(255,255,255,0.6)")};
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
  padding: 0;

  &:hover { background: ${(p) => (p.$active ? "#FF5A5F" : "white")}; }
`;

export const ScrollDown = styled.div`
  color: white;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.85;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: bounce 2s infinite;

  &::after {
    content: '';
    width: 1px;
    height: 30px;
    background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0));
  }

  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, 6px); }
  }

  @media (max-width: 768px) { bottom: 60px; }
`;
