import { sha256 } from 'js-sha256';

export function generateCodeVerifier() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return arrayToString(array);
}

export async function generateCodeChallenge(codeVerifier) {
  return base64URLEncode(sha256(codeVerifier));
}

function arrayToString(buffer) {
  const chars = [];
  for (let i = 0; i < buffer.length; ++i) {
    chars.push(('00' + buffer[i].toString(16)).slice(-2));
  }
  return chars.join('');
}

function base64URLEncode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}


