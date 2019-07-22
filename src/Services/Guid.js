import { encode } from 'base-64';
export var guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


export var base64Token = (uid, token) => {
  return encode(`${uid}:${token}`)
}