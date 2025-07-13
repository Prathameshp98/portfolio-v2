// Must be exactly 32 chars for 256-bit AES
const RAW_KEY = 'portfolio-v2-key-32-characters-long!!';
const ENCRYPTION_KEY = RAW_KEY.padEnd(32, '!').slice(0, 32);

async function getKey() {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    enc.encode(ENCRYPTION_KEY),
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

export async function encryptData(data: any): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey();
  const enc = new TextEncoder();
  const encoded = enc.encode(JSON.stringify(data));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoded
  );
  // Store IV with ciphertext (base64)
  const ivStr = btoa(String.fromCharCode.apply(null, Array.from(iv)));
  const ctStr = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(ciphertext))));
  return `${ivStr}:${ctStr}`;
}

export async function decryptData(encrypted: string): Promise<any> {
  const [ivStr, ctStr] = encrypted.split(':');
  const iv = Uint8Array.from(atob(ivStr), c => c.charCodeAt(0));
  const ciphertext = Uint8Array.from(atob(ctStr), c => c.charCodeAt(0));
  const key = await getKey();
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );
  const dec = new TextDecoder();
  return JSON.parse(dec.decode(decrypted));
} 