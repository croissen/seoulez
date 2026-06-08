import React from 'react';
import * as S from './Contact.styles'; // Contact.styles를 재활용할 수 있어요!

const DonationSection = () => {
  return (
    <div>
      <S.SectionTitle>💖 Donation</S.SectionTitle>
      <S.SectionText>
        To help our project grow and create even better content,
        even a small contribution makes a big difference! 
        Thank you so much! 🙏
      </S.SectionText>

      {/* Ko-fi 버튼 */}
      <S.DonationInfo>
        <p>Or support us via Ko-fi:</p>
        <S.KofiButton
          href="https://ko-fi.com/seoulez"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕ Support on Ko-fi
        </S.KofiButton>
      </S.DonationInfo>

      <S.SectionText small>
        * We sincerely thank everyone who supports us! You are amazing! 👍
      </S.SectionText>
    </div>
  );
};

export default DonationSection;