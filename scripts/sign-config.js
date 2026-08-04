#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const [, , privateKeyPath, jsonPath] = process.argv

if (!privateKeyPath || !jsonPath) {
  console.error('Kullanım: node scripts/sign-config.js <private-key-pem-dosya-yolu> <imzalanacak-json-dosya-yolu>')
  process.exit(1)
}

const privateKeyPem = fs.readFileSync(privateKeyPath)
const rawText = fs.readFileSync(jsonPath, 'utf8')
const signature = crypto.sign('sha256', Buffer.from(rawText, 'utf8'), {
  key: privateKeyPem,
  dsaEncoding: 'ieee-p1363',
})
const signaturePath = path.format({
  ...path.parse(jsonPath),
  base: undefined,
  ext: '.sig',
})
fs.writeFileSync(signaturePath, signature.toString('base64'))

console.log(`İmzalandı: ${jsonPath}`)
console.log(`İmza dosyası: ${signaturePath}`)
