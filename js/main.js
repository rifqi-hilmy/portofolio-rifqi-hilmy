
var PROJECTS = [
{
  id:"los", cat:"fintech", catLabel:"Fintech", year:"2025 — 2026",
  title:"Loan Origination System (LOS) — Microservices",
  company:"PT. Padepokan Tujuh Sembilan",
  short:"Sistem pengajuan & persetujuan pinjaman digital berbasis microservices — saya berperan sebagai Full Stack Developer & System Analyst, dari analisis proses bisnis dan pemodelan BPMN sampai pengembangan layanannya.",
  stack:["Java Spring Boot","Next.js","SQL Server","Apache Kafka","Redis","BPMN · Camunda","ANTLR","Microservices","System Analysis"],
  problem:"Proses origination pinjaman — dari pengajuan sampai persetujuan — membutuhkan alur digital yang transparan dan bisa diskalakan. Sistem yang sudah berjalan memiliki logika bisnis legacy yang harus dimodernisasi tanpa menghentikan operasional dan tanpa mematahkan perilaku yang sudah teruji.",
  role:["Berperan ganda sebagai Full Stack Developer & System Analyst pada proyek ini","Sebagai System Analyst: menganalisis codebase dan proses bisnis eksisting untuk memahami perilaku sistem, interaksi antar-service, dan alur operasional","Sebagai System Analyst: mengekstrak & mendokumentasikan metadata sistem — skema database, tabel, kolom, endpoint API, struktur payload, dan mapping response — menggunakan ANTLR","Sebagai System Analyst: menerjemahkan temuan teknis menjadi dokumentasi proses bisnis dan model BPMN untuk mendukung modernisasi workflow","Sebagai developer: mengembangkan & meningkatkan layanan backend dengan Java Spring Boot dan frontend dengan Next.js","Mengintegrasikan workflow berbasis BPMN ke microservices eksisting dengan Camunda Engine, tetap kompatibel dengan logika legacy","Berkolaborasi lintas tim untuk meningkatkan skalabilitas, maintainability, dan transparansi proses"],
  arch:["Next.js Frontend","API / Services — Spring Boot","Camunda BPMN Workflow","Apache Kafka (Async)","Redis (Cache)","SQL Server"],
  results:["Workflow BPMN berhasil diintegrasikan ke arsitektur microservices yang sudah berjalan, dengan kompatibilitas terhadap logika bisnis legacy tetap terjaga","Metadata sistem terdokumentasi secara sistematis — skema database, endpoint, dan mapping payload/response — menjadi fondasi modernisasi berikutnya","Komunikasi asynchronous dan caching ditangani Kafka & Redis untuk mendukung skalabilitas layanan"],
  lessons:"Modernisasi sistem legacy paling aman dilakukan bertahap: pahami dan dokumentasikan perilaku sistem yang ada dulu (termasuk dengan tooling seperti ANTLR), baru ubah workflow-nya — bukan sebaliknya."
},
{
  id:"payroll", cat:"agency", catLabel:"Agency & Internal", year:"2024",
  title:"Sistem Payroll & Bonus TikTok Live Host",
  company:"CB Agency",
  short:"Sistem payroll dan bonus untuk TikTok Live Host dengan perhitungan kompensasi otomatis berbasis metrik performa dan kebijakan perusahaan.",
  stack:["Laravel","Livewire","Tailwind CSS","MySQL"],
  problem:"Perhitungan gaji dan bonus host live bergantung pada metrik performa dan kebijakan perusahaan yang beragam. Jika dihitung manual, prosesnya lambat dan rawan kesalahan — padahal menyangkut penghasilan banyak host.",
  role:["Membangun sistem payroll & manajemen bonus sebagai aplikasi web internal","Mengimplementasikan perhitungan kompensasi otomatis berdasarkan metrik performa dan kebijakan perusahaan","Berkolaborasi dengan stakeholder untuk menggali kebutuhan, mengimplementasikan fitur, dan mengoptimalkan pengalaman pengguna","Memelihara dan mengembangkan aplikasi internal lain yang mendukung operasional agensi"],
  arch:["Livewire UI (Laravel)","Logika Perhitungan Kompensasi","MySQL","Kebijakan & Metrik Performa"],
  results:["Perhitungan kompensasi host menjadi otomatis mengikuti metrik performa dan kebijakan perusahaan, menggantikan proses manual","Sistem dipakai sebagai tools internal untuk mendukung operasional dan layanan klien agensi"],
  lessons:"Sistem payroll yang baik bukan cuma soal rumus — aturan bisnisnya harus diterjemahkan persis dari kebijakan perusahaan, dan proses penggalian kebutuhan dengan stakeholder menentukan benar-salahnya hasil hitung."
},
{
  id:"company-profile", cat:"agency", catLabel:"Agency & Internal", year:"2024",
  title:"Website Company Profile CB Agency",
  company:"CB Agency",
  short:"Website profil perusahaan yang responsif untuk memperkuat kehadiran digital dan branding agensi.",
  stack:["Laravel","Tailwind CSS","MySQL"],
  problem:"Sebagai agensi digital, CB Agency membutuhkan wajah online yang merepresentasikan layanan dan kredibilitasnya — website profil yang responsif dan mudah dikelola sebagai bagian dari branding.",
  role:["Membangun website company profile yang responsif dari sisi pengembangan web","Bekerja bersama stakeholder untuk memastikan konten dan tampilan selaras dengan branding agensi","Ikut memelihara aplikasi web internal lain di lingkungan agensi yang sama"],
  arch:["Laravel","Blade / Frontend Responsif","Tailwind CSS"],
  results:["Website company profile yang responsif berhasil dibangun untuk memperkuat digital presence dan branding agensi"],
  lessons:"Website profil yang efektif ditentukan oleh kejelasan pesan dan kecepatan akses di semua perangkat — teknisnya mengikuti kebutuhan branding, bukan sebaliknya."
},
{
  id:"sso", cat:"edukasi", catLabel:"Edukasi · Enterprise", year:"2023",
  title:"Platform Single Sign-On (SSO) Universitas",
  company:"PT. Arkatama Multi Solusindo",
  short:"Platform SSO yang memusatkan autentikasi lintas berbagai layanan universitas — satu akun untuk semua sistem kampus.",
  stack:["Laravel","CodeIgniter 3","PostgreSQL"],
  problem:"Universitas memiliki banyak layanan digital yang masing-masing mengelola login sendiri. Pengguna harus mengingat banyak akun, dan pengelolaan akses menjadi tersebar dan sulit dikontrol.",
  role:["Mengembangkan platform Single Sign-On sebagai bagian dari tim pengembangan aplikasi enterprise","Memusatkan autentikasi agar satu identitas bisa dipakai lintas layanan universitas","Menjaga kualitas kode, reliabilitas sistem, dan praktik pengembangan terbaik selama proses development & deployment"],
  arch:["Layanan Universitas A / B / C","SSO — Autentikasi Terpusat","PostgreSQL"],
  results:["Autentikasi berbagai layanan universitas berhasil dipusatkan dalam satu platform SSO","Pengembangan dilakukan mengikuti standar kualitas kode dan reliabilitas untuk aplikasi enterprise"],
  lessons:"Autentikasi terpusat adalah fondasi: sekali SSO beres, layanan-layanan lain — termasuk marketplace dan SIAKAD — bisa tumbuh di atas identitas yang sama."
},
{
  id:"marketplace", cat:"edukasi", catLabel:"Edukasi", year:"2023",
  title:"Marketplace Pembelajaran Online",
  company:"PT. Arkatama Multi Solusindo",
  short:"Marketplace kursus online tempat instruktur bisa membuat, mengelola, dan menjual kursus dengan pembayaran terintegrasi.",
  stack:["Laravel","CodeIgniter 3","PostgreSQL"],
  problem:"Instruktur membutuhkan kanal untuk menjual keahliannya secara online, dan pembelajar membutuhkan cara yang mudah untuk menemukan dan membeli kursus — termasuk proses pembayaran yang menyatu dalam satu platform.",
  role:["Membangun marketplace pembelajaran online sebagai bagian dari tim full-stack","Mengimplementasikan alur instruktur: membuat, mengelola, dan menjual kursus","Mengintegrasikan fungsi pembayaran ke dalam alur pembelian kursus","Berkolaborasi memastikan kualitas kode dan reliabilitas sistem enterprise"],
  arch:["Sisi Instruktur (Kelola Kursus)","Katalog & Pembelian Kursus","Pembayaran Terintegrasi","PostgreSQL"],
  results:["Marketplace berfungsi end-to-end: instruktur dapat membuat dan menjual kursus, pembelajar dapat membelinya dengan pembayaran terintegrasi"],
  lessons:"Marketplace punya dua sisi pengguna dengan kebutuhan berlawanan — kemudahan instruktur mengelola kursus dan kemudahan pembelajar bertransaksi harus dirancang sebagai satu alur yang utuh."
},
{
  id:"siakad", cat:"edukasi", catLabel:"Edukasi", year:"2023",
  title:"SIAKAD — Sistem Informasi Akademik",
  company:"PT. Arkatama Multi Solusindo",
  short:"Kontribusi pada Sistem Informasi Akademik universitas untuk manajemen akademik dan administrasi kampus.",
  stack:["Laravel","CodeIgniter 3","PostgreSQL"],
  problem:"Operasional akademik dan administrasi universitas membutuhkan sistem terpusat yang andal — data akademik yang tersebar membuat pengelolaan kampus tidak efisien.",
  role:["Berkontribusi dalam pengembangan University Information System (SIAKAD) untuk manajemen akademik dan administratif","Bekerja dalam tim dengan pendekatan full-stack development","Menjaga kualitas kode, reliabilitas sistem, dan praktik terbaik pengembangan perangkat lunak"],
  arch:["Modul Akademik","Modul Administrasi","PostgreSQL","Layanan Kampus Terpusat"],
  results:["SIAKAD mendukung pengelolaan akademik dan administrasi universitas sebagai sistem terpusat","Dikembangkan bersama ekosistem layanan kampus lain termasuk SSO dalam periode yang sama"],
  lessons:"Sistem akademik menyentuh banyak pemangku kepentingan sekaligus — konsistensi data dan reliabilitas jauh lebih penting daripada fitur yang mencolok."
},
{
  id:"webinar", cat:"edukasi", catLabel:"Edukasi", year:"2020 — 2021",
  title:"Platform Manajemen Webinar SEAMEO QITEP",
  company:"SEAMEO QITEP in Science",
  short:"Platform webinar untuk program pelatihan guru se-Asia Tenggara: event, registrasi peserta, publikasi konten, dan administrasi.",
  stack:["CodeIgniter 3","MySQL","Bootstrap"],
  problem:"Program pelatihan guru berskala regional membutuhkan cara yang terorganisir untuk mengelola webinar — dari penjadwalan event, pendaftaran peserta, sampai publikasi materi dan administrasi kegiatan.",
  role:["Berkontribusi dalam tim yang merancang, mengembangkan, menguji, dan men-deploy platform manajemen webinar","Mengimplementasikan fitur manajemen event, registrasi peserta, publikasi konten, dan administrasi webinar","Membantu memelihara dan meningkatkan fungsionalitas sistem untuk pengalaman pengguna dan efisiensi operasional yang lebih baik"],
  arch:["Manajemen Event","Registrasi Peserta","Publikasi Konten","Administrasi Webinar","MySQL"],
  results:["Platform mendukung penyelenggaraan program pelatihan guru SEAMEO QITEP di kawasan Asia Tenggara","Fitur event, registrasi, dan administrasi berjalan sebagai satu sistem berbasis web"],
  lessons:"Pengalaman profesional pertama saya — dan pelajaran paling awal: sistem yang dipakai panitia setiap hari harus sederhana dioperasikan, karena penggunanya bukan orang teknis."
}
];

function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function chipHTML(arr){return arr.map(function(c){return '<span class="chip">'+esc(c)+'</span>'}).join('');}

function renderProjects(filter){
  var grid=document.getElementById('projGrid');
  var list=PROJECTS.filter(function(p){return filter==='all'||p.cat===filter;});
  grid.innerHTML=list.map(function(p){
    return '<button class="proj-card" onclick="openProject(\''+p.id+'\')">'
      +'<span class="proj-top"><span class="cat '+(p.cat==='fintech'?'fintech':'')+'">'+esc(p.catLabel)+'</span><span class="year">'+esc(p.year)+'</span></span>'
      +'<h3>'+esc(p.title)+'</h3><span class="company">'+esc(p.company)+'</span>'
      +'<p>'+esc(p.short)+'</p>'
      +'<span class="chips">'+p.stack.slice(0,4).map(function(c){return '<span class="chip">'+esc(c)+'</span>'}).join('')+(p.stack.length>4?'<span class="chip">+'+(p.stack.length-4)+'</span>':'')+'</span>'
      +'<span class="proj-foot"><span class="detail-link">Baca detail proyek →</span><span class="mono" style="font-size:11px;color:var(--faint)">CASE STUDY</span></span>'
      +'</button>';
  }).join('');
}

function openProject(id){
  var p=null;
  for(var i=0;i<PROJECTS.length;i++){if(PROJECTS[i].id===id)p=PROJECTS[i];}
  if(!p)return;
  var arch=p.arch.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i>→</i>');
  var others=PROJECTS.filter(function(x){return x.id!==id;}).slice(0,3);
  document.getElementById('detailView').innerHTML=
    '<button class="btn btn-ghost btn-sm backbtn" onclick="closeProject()">← Kembali ke semua proyek</button>'
    +'<div class="detail-hero"><span class="cat">'+esc(p.catLabel)+' · '+esc(p.year)+'</span>'
    +'<h2>'+esc(p.title)+'</h2><p style="font-weight:700">'+esc(p.company)+'</p><p>'+esc(p.short)+'</p>'
    +'<div class="chips" style="margin-top:14px">'+p.stack.map(function(c){return '<span class="chip" style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.2);color:inherit">'+esc(c)+'</span>'}).join('')+'</div></div>'
    +'<div class="detail-grid">'
    +'<div class="detail-card"><h3>Masalah Bisnis</h3><p>'+esc(p.problem)+'</p></div>'
    +'<div class="detail-card"><h3>Peran Saya</h3><ul>'+p.role.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ul></div>'
    +'<div class="detail-card full"><h3>Arsitektur & Alur Sistem</h3><div class="arch">'+arch+'</div><p style="margin-top:14px">Tech stack: <b style="color:var(--ink)">'+esc(p.stack.join(' · '))+'</b></p></div>'
    +'<div class="detail-card"><h3>Hasil</h3><ul>'+p.results.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ul></div>'
    +'<div class="detail-card"><h3>Pelajaran</h3><p>'+esc(p.lessons)+'</p></div>'
    +'</div>'
    +'<div style="margin-top:22px"><h3 style="font-size:15px;margin:0 0 12px">Proyek lainnya</h3><div class="tl-projects">'
    +others.map(function(o){return '<button onclick="openProject(\''+o.id+'\')">'+esc(o.title)+' →</button>'}).join('')
    +'</div></div>';
  document.getElementById('listView').style.display='none';
  var dv=document.getElementById('detailView'); dv.classList.add('open');
  document.getElementById('proyek').scrollIntoView({behavior:'smooth'});
}
function closeProject(){
  document.getElementById('detailView').classList.remove('open');
  document.getElementById('detailView').innerHTML='';
  document.getElementById('listView').style.display='block';
  document.getElementById('proyek').scrollIntoView({behavior:'smooth'});
}

document.querySelectorAll('.filter-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active')});
    btn.classList.add('active');
    closeProjectSilent();
    renderProjects(btn.getAttribute('data-filter'));
  });
});
function closeProjectSilent(){
  document.getElementById('detailView').classList.remove('open');
  document.getElementById('detailView').innerHTML='';
  document.getElementById('listView').style.display='block';
}
renderProjects('all');

var burger=document.getElementById('burger'), mm=document.getElementById('mobileMenu');
burger.addEventListener('click',function(){
  var open=mm.classList.toggle('open');
  burger.setAttribute('aria-expanded',open?'true':'false');
  burger.textContent=open?'✕':'☰';
});
mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mm.classList.remove('open');burger.textContent='☰';});});

function showToast(msg){
  var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  setTimeout(function(){t.classList.remove('show')},2600);
}
function copyEmail(){
  var email='muhamadrifqi240@gmail.com';
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(email).then(function(){showToast('Email tersalin: '+email)},function(){showToast(email)});
  }else{showToast(email);}
}
document.getElementById('mailForm').addEventListener('submit',function(e){
  e.preventDefault();
  var name=document.getElementById('fName').value.trim();
  var subj=document.getElementById('fSubject').value;
  var msg=document.getElementById('fMsg').value.trim();
  var body='Halo Rifqi,\n\n'+msg+'\n\n— '+name;
  var link=document.createElement('a');
  link.href='mailto:muhamadrifqi240@gmail.com?subject='+encodeURIComponent('[Portofolio] '+subj+' — dari '+name)+'&body='+encodeURIComponent(body);
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  showToast('Membuka aplikasi email kamu…');
});
