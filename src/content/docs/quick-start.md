---
title: "Quick Start"
date: 2020-04-05T19:23:50+07:00
draft: false
---

Pada bagian ini, Anda akan melihat dasar penggunaan SkuyJS.
Agar terbiasa dengan proses pembuatan aplikasi menggunakan
SkuyJS, kita akan membuat operasi dasar CRUD menggunakan REST API
dengan fitur-fitur yang melibatkan hal-hal dasar.

{{< h 3 Prasyarat >}}
Sebelum memulai, pastikan Anda sudah menginstall alat di bawah ini.
* [NodeJS](https://nodejs.org) versi 10.13.0 atau lebih tinggi.
* Pengedit Kode

Agar lebih lancar, sedikit pengetahuan tentang teknologi
di bawah ini akan sangat mendukung.
* Javascript
* NodeJS
* REST API

{{< h 3 "Pengaturan Awal" >}}

Buatlah struktur direktori seperti di bawah ini.
{{< rawhtml >}}
<div class="tree">
  <ul>
    <li>
      <span><i class="fa fa-folder"></i> skuyjs-project</span>
      <ul>
        <li>
          <span>
            <i class="fa fa-folder"></i> models
          </span>
          <ul>
            <li><span><i class="devicon-javascript-plain"></i> index.js</span></li>
          </ul>
        </li>
        <li>
          <span><i class="fa fa-folder"></i> controllers</span>
          <ul>
            <li><span><i class="devicon-javascript-plain"></i> index.js</span></li>
          </ul>
        </li>
        <li>
          <span><i class="devicon-javascript-plain"></i> index.js</span>
        </li>
      </ul>
    </li>
  </ul>
</div>
{{< /rawhtml >}}

Kemudian buatlah file **package.json** agar direktori **skuyjs-project** menjadi
paket npm dengan menjalankan perintah berikut.
```bash
$ npm init -y
```

Selanjutnya instalasi modul HTTP dari SkuyJS dengan menjalankan perintah berikut.
```bash
$ npm i @skuyjs/http-server
```

Pada tahap ini, Anda dapat melihat pada file **package.json** di
bagian **dependencies** terdapat **@skuyjs/http-server** bersama
dengan versinya. Artinya, Anda sudah berhasil menginstalasi modul
yang paling utama dari SkuyJS ini.

Selanjutnya, mari kita mulai menulis kode!

{{< h 3 "Menulis Kode" >}}
Kode yang pertama kali harus dibuat adalah pada file **index.js**. Ketikkan kode
berikut ini pada file tersebut.

```javascript
const Server = require('@skuyjs/http-server');
const server = new Server();

server.get('/', (req, res) => {
  res.send('hello');
});

server.listen(8080, () => {
  console.log('SkuyJS sedang berjalan ...');
});
```

Pastikan Anda menyimpan kode tersebut. Setelah itu, jalankan perintah di bawah ini.
```bash
$ node index
```

Sampai di sini, kita sudah berhasil menjalankan SkuyJS. Selanjutnya, buka web
browser kesukaan Anda, bisa Firefox, Chrome, atau lainnya. Kemudian akses URL
**http://localhost:8080/**.
