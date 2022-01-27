export const transformToGraphqlString = (obj: Object) => {
  let res = "";

  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      res += ` ${key} `;
      return;
    }
    if (typeof obj[`${key}`] === "object") {
      res += ` ${key} ${transformToGraphqlString(obj[key])} `;
    }
  });
  return `{ ${res} }`;
};

// 处理nginx反向代理图片地址
export const resolveProxyImg = (url: string) => {
  // 'http://www.pmtcgo.com/img/card/default/SWSH5_9.png'

  const _nginxProxyImgUrl = "/ptcg/proxy/img/";
  if (url.indexOf("http://www.pmtcgo.com/") == 0) {
    return `https://kiritosa.com${_nginxProxyImgUrl}${url.slice(22)}`;
  }

  console.warn("未知地址，不进行反向代理设置");
  return url;
};
