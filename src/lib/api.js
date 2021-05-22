import axios from "axios";

const url = "http://13.125.249.7:5000/api";

const apiService = {};

apiService.getAuctions = async () => {
  try {
    const auctions = await axios.get(url + "/auction");
    console.log(auctions);
    return auctions.data; // rawData의 console을 찍어보시면 data 아래의 data가 저희가 원하는 데이터입니다
  } catch (e) {
    console.log("[FAIL] GET card data");
    return e;
  }
};

export default apiService;
