// Client-side persistent storage for high-resolution infographic images using IndexedDB
// IndexedDB avoids localStorage's ~5MB quota limit, allowing multiple full-resolution posters.

const DB_NAME = 'borahae_images_db';
const STORE_NAME = 'slides_store';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function storeImageInDB(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Fallback saving image to localStorage', err);
    try {
      localStorage.setItem(`img_${key}`, dataUrl);
    } catch {
      // Storage full
    }
  }
}

export async function getImageFromDB(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return localStorage.getItem(`img_${key}`);
  }
}

export async function getAllImagesFromDB(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const records: Record<string, string> = {};
      const req = store.openCursor();

      req.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest).result as IDBCursorWithValue | null;
        if (cursor) {
          records[cursor.key as string] = cursor.value;
          cursor.continue();
        } else {
          resolve(records);
        }
      };
      req.onerror = () => resolve({});
    });
  } catch {
    const records: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('img_')) {
        records[k.replace('img_', '')] = localStorage.getItem(k) || '';
      }
    }
    return records;
  }
}

export async function removeImageFromDB(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => {
        localStorage.removeItem(`img_${key}`);
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    localStorage.removeItem(`img_${key}`);
  }
}
