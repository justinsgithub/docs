export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/ts-rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCkUqBnWpHgLhpnGpIhukwashU53M7o33wVdWjsE4ChJ2yERNtH
HfeAuc4hC1Z/bKJpKfm2Q6MB4NLyrH4uRAXI5q01iw/cabTiypAjIAA93WFELnjr
nw3nhDJVcwbNZzb6zgqJiKj4DgZGDUYmxrCiQ+O/K6F1ZNa6uwgfQrkG7wIDAQAB
AoGANxVfoeXRerXZsfBNRjMeKeDCjsf/MD8iaEsYZfLPrrX5gYlXfEqGWkdu2tLj
Jwnyk5A3niqkLRABhsnd7oJs8XWvgiGKttPFGCHmfUGrEVFz3FuAnH/Dx896phX4
kip6BTDm4idQa5mLG0+6P3AUXPadKucRERqx2oW2gOyjyCECQQDtYfZCCtKO/dGL
UP9JaiOJu1JVtfLmLQj2Q3ppxxFUe1803XDpvRE9r6D0HT3mTK5clego27cJxegH
XfUAFlHxAkEAsTXO57t+VHbclpO2zSHU3r7TW9sUxxduwS02+CiISaN6kEjCXVU7
bNO9PqnheSMvos62secImS/r+1Q64xwG3wJBAJP6W170DCojQ7sLNPj490pmwX64
u8CNFmcdzXOfKsh1V/ZGjJrIx7SihT1n9SxZZOBGesDtpn6rJmdhRNdXEqECQQCl
gpYexXU2OlXIpWoEqWaCLESH9FSxpmchMbO3j1PLQ07D19EBDwwTlqeYEV6vn3ds
Xhkwi5HyUVncQU1GtPSNAkB+WVyhIYrqkT5NIEI4CXV8fj0aNUTZpGLQHpVLFvpW
qIYk0h1KuFhzetopv7WASLTK27naAPRC794+9/QuA0rF
-----END RSA PRIVATE KEY-----`,
  privateKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkUqBnWpHgLhpnGpIhukwashU5
3M7o33wVdWjsE4ChJ2yERNtHHfeAuc4hC1Z/bKJpKfm2Q6MB4NLyrH4uRAXI5q01
iw/cabTiypAjIAA93WFELnjrnw3nhDJVcwbNZzb6zgqJiKj4DgZGDUYmxrCiQ+O/
K6F1ZNa6uwgfQrkG7wIDAQAB
-----END PUBLIC KEY-----`,
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
