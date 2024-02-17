export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const PROFILE_IMG_URL =
  "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXMrBpySF8XZ8sCkWvT8aguR_wkRNG3R8T7iwBTsIkMyYwlB6it3SFUkQreUS4BP7yzuo542K7ZoPtOd13o6SbNT3mRrFQA.png?r=6a6";

export const LOGIN_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY; 