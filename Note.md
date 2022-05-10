npm init > di enter aja terus

npm install --save-dev jest

di package.json > devDependencies : edit script-nya jadi :
{
 "scripts": {
 ...
 "test": "jest --verbose"
 }
}

only : jika di tambah only, maka hanya 1 test ini yang di jalankan, onliy bisa untuk lebih dari 1 test

todo : membuat test seakan lancar
skip : cuma test dengan tanda ini yang tidak di jalankan

Untuk menjalanjan 1 file test : npm run -- num.test.js (nama file test-nya) 
atau klik pada pada file testnya > copy relative path

npm test -- --coverage : untuk mengetahui test kita sudah mengcover apa saja

//---------------------------------------------------------------------------------------------------------------------//

app.js (ini file yang utama) ada di server
> buat test nya di server - handlers - _test_ 
> buat functionnya di server - handlers
> buat function utamanya di > storage - models - math.modek.js