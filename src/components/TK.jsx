import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TK.styles";

function TK() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/tastykorea.json")
      .then(res => res.json())
      .then(data => setFoods(data.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  const goDetail = (id) => {
    navigate(`/tasty-korea-detail/${id}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goTastyKoreaPage = () => {
    navigate("/tasty-korea");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <S.Section>
      <S.TitleWrapper>
        <S.HeaderTextBlock>
          <S.Eyebrow>02 · Taste</S.Eyebrow>
          <S.SectionTitle>Tasty Korea</S.SectionTitle>
        </S.HeaderTextBlock>
        <S.ReadMore onClick={goTastyKoreaPage}>See all →</S.ReadMore>
      </S.TitleWrapper>
      <S.SubTitle>Check out Korea's representative foods and their prices!</S.SubTitle>

      <S.PlacesWrapper>
        {foods.map((food) => (
          <S.FoodCard key={food.id} onClick={() => goDetail(food.id)}>
            <S.FoodImg src={process.env.PUBLIC_URL + food.img} alt={food.name} />
            <S.FoodMeta>
              <S.FoodName>{food.name}</S.FoodName>
              {food.price && <S.FoodPrice>{food.price}</S.FoodPrice>}
            </S.FoodMeta>
          </S.FoodCard>
        ))}
      </S.PlacesWrapper>
    </S.Section>
  );
}

export default TK;
