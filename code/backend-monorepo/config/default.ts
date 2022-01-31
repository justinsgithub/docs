export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/ts-rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDY7Y7LwYBHtoeHiyXGJ9TvgMUBorkihoIzKPiGsdTzl0R1aJKl
CFd80w7gOZj68fzvkz65YJ2hhv9M8RcjJLSAsGvzxYCVDHFSzoePjSDTOYcoNbAV
qvwE+AH9tlIX5kGbfdoHhnrx2BttwMcyz7xYN8/Mof/rHzuL+sfB4dhVuQIDAQAB
AoGBANbNjSuoJR1d2iBWogXwpUKv0OSIvCg65yw/srC14PeAXzKfZS5z7yXUXJOd
lSVQf7S/qkmoKQ6sfZsz1ERhcTV0yN3VIy+AxLOfNDs8WIhqSBsD+AzyaDcC1Bfe
dtSTJrw2zU8bfI4UUe29AVg2rjQM86UIScfLz7Texo3DuKwdAkEA/1TA/hYftoQV
WANgxz+Dqc0wfhEwdzzNsb+f5lCLGFP23XdN1Q4UMfZn1lRueS7Y/bvG1g0tI0pa
qlptw+b3awJBANl/DDDKSaSR835mEOyQZzcjof7oUyWUlRspWXmWd6P0O8NHksw9
WBfbvl9gdkkXX7oMwZ5No38G6gVvIRXjxGsCQQCvBu1I/+d7WO28qIwl6Y8azhKI
yMW9Zwvl5eL5oYrIAX6/b/IFs6H6YdvqW3RjU87hmGAECYJAp86g6l5GJUTDAkAI
wgvsnwiuHs5uRY/i5sGxP7cTO6m1drE2Ycjfk4aHzJrndydbIBE/DLMyxgCdWtqY
9FCLnla6E74yr9HmPsC3AkBP0hx2lRC4HUbXauoIePeXwSCxQtjcCvueeMyc2xj/
QIe0DESCPN3t+UnjJeRNAwFon7r4wdmlR68OMtmhihA4
-----END RSA PRIVATE KEY-----`,
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDY7Y7LwYBHtoeHiyXGJ9TvgMUB
orkihoIzKPiGsdTzl0R1aJKlCFd80w7gOZj68fzvkz65YJ2hhv9M8RcjJLSAsGvz
xYCVDHFSzoePjSDTOYcoNbAVqvwE+AH9tlIX5kGbfdoHhnrx2BttwMcyz7xYN8/M
of/rHzuL+sfB4dhVuQIDAQAB
-----END PUBLIC KEY-----`,
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
