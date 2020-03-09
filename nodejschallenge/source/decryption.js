'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const _crypto = require("crypto");
exports.decrypt = function (encdata, masterkey) {
    // base64 decoding
    const bData = Buffer.from(encdata, 'base64');
    // convert data to buffers
    const salt = bData.slice(0, 64);
    const iv = bData.slice(64, 80).toString('hex'); //iv.toString('hex').slice(0, 16);
    const tag = bData.slice(80, 96);
    const text = bData.slice(96);
    // derive key using; 32 byte key length
    const key = _crypto.pbkdf2Sync(masterkey, salt, 2145, 32, 'sha512');
    // AES 256 GCM Mode
    const decipher = _crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);
    // encrypt the given text
    const decrypted = decipher.update(text, 'binary', 'utf8') + decipher.final('utf8');
    return decrypted;
};
exports.decrypt4 = function (dataBuffer, keyBuffer) {
    const ivSize = Buffer.from(dataBuffer, 'base64').readUInt8(0);
    const iv = dataBuffer.slice(1, ivSize + 1);
    // The authTag is by default 16 bytes in AES-GCM
    const authTag = dataBuffer.slice(ivSize + 1, ivSize + 17);
    const decipher = _crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv);
    decipher.setAuthTag(authTag);
    const decrypted = Buffer.concat([decipher.update(dataBuffer.slice(ivSize + 17)), decipher.final()]);
    //const decrypted = decipher.update(dataBuffer.slice(ivSize + 17)), decipher.final();
    return decrypted.toString('utf8');
};
exports.decrypt3 = function (encdata, masterkey) {
    var iv = new Buffer(_crypto.randomBytes(16));
    var ivstring = iv.toString('hex').slice(0, 16);
    let textParts = encdata.split(':');
    //let cipher = _crypto.createCipheriv('aes-256-cbc', key, ivstring)
    var decipher = _crypto.createDecipheriv('aes-256-cbc', masterkey, ivstring);
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    //cipher.update(plaintext, 'utf8', 'base64');
    const decrypted = decipher.update(encryptedText, 'binary', 'utf8') + decipher.final('utf8');
    return decrypted;
};
exports.decrypt2 = function (encdata, masterkey) {
    let textParts = encdata.split(':');
    //let iv = Buffer.from(textParts.shift(), 'hex').slice(0, 16);
    //var ivstring = iv.toString('hex').slice(0, 16);
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = _crypto.createDecipheriv('aes-256-cbc', Buffer.from(masterkey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};
//# sourceMappingURL=decryption.js.map