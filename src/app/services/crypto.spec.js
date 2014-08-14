/* global describe, it, expect, afterEach, beforeEach, module, inject, should, chaiAsPromised */

(function(testData) {
  // Here we would test that the proton.Crypto module is able
  // to manipulate the message provided here as testMessage and
  // reproduce the expected result.

  describe("crypto provider", function() {
    var crypto, $rootScope;

    beforeEach(function() {
      module("ng");
      module("proton.Crypto");

      inject(['crypto', '$rootScope', function (crypto_, $rootScope_) {
        crypto = crypto_;
        $rootScope = $rootScope_;
      }]);
    });

    it("should accept a correct password", function () {
      this.timeout(5000);

      var didSetPwd = crypto.setMailboxPassword(testData.publicKey, testData.encPrivateKey, testData.password);
      expect(didSetPwd).to.be.true;
    });

    it("should reject an incorrect password", function () {
      this.timeout(5000);

      var didSetPwd = crypto.setMailboxPassword(testData.publicKey, testData.encPrivateKey, "wrong");
      expect(didSetPwd).to.be.false;
    });

    it("should decrypt a encrypted message correctly", function () {
      this.timeout(5000);

      crypto.setMailboxPassword(testData.publicKey, testData.encPrivateKey, testData.password);
      var message = crypto.decryptPackage(testData.encPrivateKey, testData.encryptedMessage.encPackage, testData.encryptedMessage.messageTime);
      expect(message).to.be.equal(testData.encryptedMessage.decrypted);
    });
  });
})({
  publicKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: OpenPGP.js v0.7.0\nComment: http://openpgpjs.org\n\nxsBNBFPNt9cBCACcQadV+Gi3UV8NiwCewn5mhC16HT5916kkueeG9A/Xq/O6\ne7+r2JmVAWsuXFGr3ihQ+RVFlganzcjwvAaZpA2+NhrCRjLJy4H6Xi7Oht/g\nguDLQCHkN5MAIGLL/15fjRnPAyb4AXA7j8x1h1Ut0BbOx5VpcuYE2alybYiA\n/FKZTc0EpEqgh/iWU8JPCx3p5ZYgKs66+3yrFP/xwK2js20V5aQI/skuko8g\navaYS/g3nL178men/UQDajiVaIcXPH2TP6EpCxHd5VvBgpBW+DytsJroD/FU\njW0oYVaiAT69VWGLyf+UQiOqsjjgGCentZROXFyx8E+js1yY1Iyr/qcVABEB\nAAHNBlVzZXJJRMLAcgQQAQgAJgUCU8234QYLCQgHAwIJEKt0aeZImxTDBBUI\nAgoDFgIBAhsDAh4BAAATzAgAhXaJpZ+xv/EzBrbr0suwYNOb07goHsOtpRIh\nXCu6kxWdn+i1ItuvrAnLH79qbF6CsXTsxbpK0y+QrQcc2mQ+OUvogn/nSUOl\nXvO7vUZ7KGBHvt75XztWVMMrpUtIYOEkY0piekrxaBoLttY7d1bflu6FMH32\nWRMAi0MhJ0fAlBuAGnr33QTP5w9pBKQuKLBDoIj58NyX+fOO8XZp56mYyIeG\nBpGUMl9zM/1MjXfXU6Bn99fA1jBYVV0Emyp8k6oJuMcpaBUTWa6rN9DCfhGj\nS52CAno6+M0KD0IHGz2x1cvjuQpEPBUP4QRB3ia55ppgRJ6wTZqX/6K7cuUt\nHj0Y0M7ATQRTzbfhAQgAp8yRFirqR7CIqBsAS23O926aJZIIRaUb6G3EM8P2\nPoEhRQmufZBxhIofHpndc3+ZQkQX+JqG6EBBF7t0rSJIMsrtYKOX+WzSJrmx\nMAxQmqpLNBEgCI2/CfSaXoqH76Qy9lAgGAKfyni+LT3FxqgvU0+vQWwmI0EW\n0bBVIg8ni2BuehI89T+z1ldO64BoUYF/dlBI2Pv5l0v5TV5wt3c4POdeMIhQ\nNXwoVa8OjxFBUJ0gVqb1Ak0zRfXNnxK0xPftxU9DaYPgbfhEruMompEOzcal\ng/CBIrXNu3zG1B+jXtQGY5KmjYRG1GFaipRpfUXLZ8AjMEHAZjFxmk9cbQPO\nzQARAQABwsBfBBgBCAATBQJTzbfmCRCrdGnmSJsUwwIbDAAA17AH/ihIVjxa\nmrW3sm0FpypDVGLsBCXtcNk6vDHi+QGVvs00EKzqYMr55wD9Y+2HkYSE9r+x\nOqqb9WGBrAkU7bzVBvFdiHwuXdOQLQNimVnSjLvPWSCs8JZG+UDYSgirc8LS\n+NxFWmsbT7RgSDqi1r4WrhEMmZf3PaIq2lxWeAu9SwVZSay3WCsTAj8/puFT\njwnOSamFbtHOVy7oEhfvcC/SexXfj1lZ7MSnMnkPxY3PIc3ivGXlz2YdojPj\nYHPLUuob7Q3qZU3SMcdB5Q75pURdqF7Zf3Bx45WTlG0CkMiQkFfFNRa+CXJQ\nfUjfcbnrl+Q55Z80iNxM4Obf40lXx0uQ7C0=\n=Ukjk\n-----END PGP PUBLIC KEY BLOCK-----\n\n",
  encPrivateKey: "-----BEGIN PGP PRIVATE KEY BLOCK-----\nVersion: OpenPGP.js v0.7.0\nComment: http://openpgpjs.org\n\n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\nSN9xueuX5DnlnzSI3Ezg5t/jSVfHS5DsLQ==\n=WWLj\n-----END PGP PRIVATE KEY BLOCK-----\n",
  password: "uumF2PZCyR6C",
  encryptedMessage: {
    encPackage: "---BEGIN ENCRYPTED MESSAGE---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---END ENCRYPTED MESSAGE---||---BEGIN ENCRYPTED RANDOM KEY--------BEGIN PGP MESSAGE-----\nVersion: OpenPGP.js v0.7.0\nComment: http://openpgpjs.org\n\nwcBMA4gROZbmqOj+AQf+NV7I8d7o28rX+7+4yy96lxe2XJ9sHRoUXWOfAHy+\nHL6Plk4FHU1pHLgih9Y41jmJdFNSFBrCuHDua8oIxQptDhOw7fnHs6e4JAAZ\n6D6fp05GZgYd0rlg1zRDat5hRth+RfH/Y1lP48yQV7TuLz3v5e+0ynW9oCQh\nnpjfyFa6qxlE4qplq8ftlZ0qEyg5xwgySCwwumkk8npLacpLGCwLt9vTdNZ6\nFObFECsmjrri75pJkuee9a9jR/5WM/BHZJwcTszhUeSPpWy5s6EyK92BbazQ\nlnZa/bPPnHtrmYUsC81FrLzlr2J+OYpt7kPcMTmC4fNbqtHQLqQdYgAVBWZs\nf9KAAa7gsFQjhGeQrWjmlbN6hG/oP+1F+f/isM51/foseh4S6xASgDfXlAOs\n/JpdCIHOiXKt7d0XTjpRbULg8LcTR8lEhmkA6j/o4AXiKmpxlZw9X/5oq0oj\n9t54g2XZkV2uFNOlSYjMyQMkwQV7t1iYPYBgN2lxHvI0yWs3oNC3BT4=\n=GRO1\n-----END PGP MESSAGE-----\n---END ENCRYPTED RANDOM KEY---",
    messageTime: "1405991035",
    decrypted: "Why not!?<br><br><br>Sent from <a target=\"_blank\" rel=\"nofollow\" href=\"https://protonmail.ch\">ProtonMail</a>, encrypted email based in Switzerland.<br><br><br><span>-------- Original Message --------<br>Subject: Re: This is a test!<br>Time (GMT): Jul 22 2014 01:05:42<br>From: mathieu@damours.org<br>To: mathieu.damours@protonmail.ch<br><br>Well, not so good ...<br><div>\n<div><div><br><b>md ∙</b>&nbsp;<a target=\"_blank\" rel=\"nofollow\">matt@damours.org</a><br><br></div></div>\n</div>\n<br><div><div>On Jul 21, 2014, at 21:03, mathieu.damours &lt;<a target=\"_blank\" rel=\"nofollow\">mathieu.damours@protonmail.ch</a>&gt; wrote:</div><br><span>Hello there!<br><br>How are you <b>doing</b>?<br><br>Sent from <a target=\"_blank\" rel=\"nofollow\" href=\"https://protonmail.ch/\">ProtonMail</a>, encrypted email based in Switzerland.<br><br><br></span></div><br></span>"
  }
});
