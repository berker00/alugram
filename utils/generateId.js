/**
 * UUID benzeri ID'ler oluşturmak için yardımcı fonksiyon
 * crypto.randomUUID() kullanılamadığında alternatif olarak kullanılabilir
 * @returns {string} Rastgele oluşturulmuş ID
 */
export const generateId = () => {
  // Basit bir UUID benzeri string oluştur
  return 'id-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString(36);
};

/**
 * crypto.randomUUID() fonksiyonunun taklidini yapar
 * Bu fonksiyon yoksa alternatif çözüm sunar
 * @returns {string} UUID formatında bir string 
 */
export const safeRandomUUID = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  
  // Basit bir UUID format taklidi
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export default generateId; 