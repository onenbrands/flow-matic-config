# flow-matic-config

Flow-Matic (ve gelecekteki grok-matic, meta-matic vb. platform eklentileri) için
canlı DOM selector konfigürasyonu. Bu repo **sadece veri** içerir — CSS selector'ları,
buton metinleri, path parçaları. Kod veya sır içermez, bu yüzden public.

Google Flow arayüzünde bir değişiklik eklentiyi kırarsa, `config/selectors.json`
dosyası burada düzenlenip push edilir; eklenti en geç 1 saat içinde (cache TTL)
değişikliği otomatik alır — Chrome Web Store review beklemeye gerek kalmaz.

Şema, `packages/flow/src/content/index.ts` içindeki `isValidSelectorsConfig()`
tarafından sıkı doğrulanır (fail-closed): eksik/bozuk bir alan varsa eklenti
sessizce mevcut değerde/fallback'te kalır, asla bozuk veri kullanmaz.
