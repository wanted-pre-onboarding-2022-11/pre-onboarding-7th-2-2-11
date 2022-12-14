import adList from "../data/ad-list-data-set";
// 비동기를 연출하는 함수
export const getData = (data) =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(data), 200);
  });

export const getAds = async () => {
  return await getData(adList);
};
