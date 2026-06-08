import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 7rem 6% 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: #fafafa;

  @media (max-width: 768px) {
    padding: 5rem 4% 4rem;
    gap: 3rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Eyebrow = styled.div`
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 600;
  color: #FF5A5F;
`;

export const TopContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const ContentBlock = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 3.5rem 2rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${(p) =>
    p.bgImg ? `url(${p.bgImg}) center/cover no-repeat` : "#f9f9f9"};
  color: ${(p) => (p.bgImg ? "white" : "inherit")};
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    display: ${(p) => (p.bgImg ? "block" : "none")};
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.15) 0%,
      rgba(0,0,0,0.45) 60%,
      rgba(0,0,0,0.75) 100%
    );
    z-index: 0;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(0,0,0,0.16);
  }

  h2, p, button {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: clamp(1.3rem, 2vw, 1.7rem);
    font-weight: 800;
    letter-spacing: -0.01em;
    margin: 0 0 0.5rem;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    margin: 0 0 1.5rem;
    color: ${(p) => (p.bgImg ? "rgba(255,255,255,0.92)" : "#555")};
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    min-height: 260px;
    padding: 2.5rem 1.5rem;
  }
`;

export const Button = styled.button`
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: #FF5A5F;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #e04b50;
    transform: translateY(-1px);
  }
`;

export const AboutMeSection = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  padding: 3rem 3rem 2.5rem;
  text-align: center;
  line-height: 1.8;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 2rem;
  }
`;

export const AboutMeText = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 0 0 1.75rem;
  white-space: pre-wrap;
  text-align: left;
  line-height: 1.85;
`;

export const DonationButton = styled(Button)`
  padding: 0.95rem 2rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  align-self: center;
`;

export const GoogleFormNote = styled.p`
  font-size: 0.85rem;
  color: #777;
  margin: 1.25rem 0 0;
  line-height: 1.6;
`;

export const GoogleFormLink = styled.a`
  color: #FF5A5F;
  text-decoration: none;
  font-weight: 600;
  margin-left: 4px;
  &:hover { text-decoration: underline; }
`;

export const ClosingRemark = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin-top: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: #1a1a1a;
  margin: 0 0 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
`;
