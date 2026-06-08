import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 8rem 6% 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f4ede4; /* 따뜻한 베이지, 음식 섹션 무드 */

  @media (max-width: 768px) {
    padding: 5rem 4% 3rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
`;

export const HeaderTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Eyebrow = styled.div`
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 600;
  color: #FF5A5F;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0 0 2rem;
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
`;

export const PlacesWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem 0 1.5rem;
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
  scroll-snap-type: x mandatory;

  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.15) transparent;
  &::-webkit-scrollbar { height: 6px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 100px; }
`;

export const FoodCard = styled.div`
  flex: 0 0 calc(25% - 0.94rem);
  background: #ffffff;
  border-radius: 16px;
  padding: 0.75rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  cursor: pointer;
  scroll-snap-align: start;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.12);
  }

  @media (max-width: 1024px) {
    flex: 0 0 calc(33.33% - 0.84rem);
  }

  @media (max-width: 768px) {
    flex: 0 0 78%;
  }
`;

export const FoodImg = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
`;

export const FoodMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 0.3rem 0.5rem;
  gap: 0.5rem;
`;

export const FoodName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
  letter-spacing: -0.01em;
`;

export const FoodPrice = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: #FF5A5F;
  background: rgba(255,90,95,0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  white-space: nowrap;
`;

export const ReadMore = styled.button`
  font-size: 12px;
  letter-spacing: 0.05em;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.12);
  color: #1a1a1a;
  cursor: pointer;
  padding: 0.55rem 1rem;
  border-radius: 100px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #FF5A5F;
    color: white;
    border-color: #FF5A5F;
  }
`;
