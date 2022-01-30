export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/ts-rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  PrivateKey: `devprivatekey`,
  PublicKey: `devpublickey`,
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
