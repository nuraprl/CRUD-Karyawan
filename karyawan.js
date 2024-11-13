const daftarKaryawan = [
    {
    nama: "Devyn Ramirez",
    masaKerja: "10",
    nomorInduk: "1",
    gaji: "7.000.000"
},
{
    nama: "Harmony Duncan",
    masaKerja: "5",
    nomorInduk: "2",
    gaji: "4.000.000"
},
{
    nama: "Clarissa Burgess",
    masaKerja: "8",
    nomorInduk: "3",
    gaji: "7.000.000"
},
{
    nama: "Reilly Blanchard",
    masaKerja: "7",
    nomorInduk: "4",
    gaji: "7.000.000"
},
{
    nama: "Zion Brooks",
    masaKerja: "4",
    nomorInduk: "5",
    gaji: "4.000.000"
},
{
    nama: "Jovanny Mays",
    masaKerja: "10",
    nomorInduk: "6",
    gaji: "7.000.000"
},
{
    nama: "Cindy Chase",
    masaKerja: "9",
    nomorInduk: "7",
    gaji: "7.000.000"
},
{
    nama: "Kristin Mcdaniel",
    masaKerja: "8",
    nomorInduk: "8",
    gaji: "7.000.000"
},
{
    nama: "Macey Sanford",
    masaKerja: "7",
    nomorInduk: "9",
    gaji: "7.000.000"
},
{
    nama: "Alfredo Faulkner",
    masaKerja: "10",
    nomorInduk: "10",
    gaji: "7.000.000"
},
]

let mode = 'tambah'

//  arrow function
const tampilkanKaryawan = () => {
    // mengakses dom
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>NoInduk</th><th>MasaKerja</th><th>Gaji</th><th>Edit</th><th>Hapus</th></tr>`

    for (let idx in daftarKaryawan) {
        console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} dengan nomor induk ${daftarKaryawan[idx].nomorInduk} bekerja selama ${daftarKaryawan[idx].masaKerja} tahun dengan gaji ${daftarKaryawan[idx].gaji}`)

    // menambah isinya
    tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}.</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].nomorInduk}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].gaji}</td><td><button class="btn btn-warning" onclick = "editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td><td><button class="btn btn-danger" onclick = "hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`

}
}

    

const tambahKaryawan = () => {
    const nama = document.getElementById('txtnama').value
    const nomorInduk = document.getElementById('txtnomorInduk').value
    const masaKerja = document.getElementById('txtmasaKerja').value
    const gaji = document.getElementById('txtgaji').value

    const karyawanBaru = {
        nama: nama,
        nomorInduk: nomorInduk,
        masaKerja: masaKerja,
        gaji: gaji,
    }
    
    // jika tambah 
    if (mode =='tambah') {
        daftarKaryawan.push(karyawanBaru)
     } else {
        // jika edit
        daftarKaryawan[mode] = karyawanBaru
    }
    // daftarKaryawan.push(karyawanBaru)   

    document.getElementById('txtnama').value = ""
    document.getElementById('txtnomorInduk').value = ""
    document.getElementById('txtmasaKerja').value = ""
    document.getElementById('txtgaji').value = ""

    mode = 'tambah'
    
    tampilkanKaryawan()
}


const cariKaryawan = (nama) => {
    // tampilkan index jika nama karyawan === nama
    for (let i = 0; i < daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama == nama)
           return i
    }
    return -1
}


const hapusKaryawan = (target) => {
    const karyawanDihapus = cariKaryawan(target)
 // menghapus element dari dalam array
 if (karyawanDihapus !== -1){
    daftarKaryawan.splice(karyawanDihapus,1 ) 
    tampilkanKaryawan() 
   
    } 
}


// const cariKaryawan = (nomorInduk) => {
//     for (let i = 0; i < 9; i++) {
//         if (daftarKaryawan[i].nomorInduk == nomorInduk)
//            return i
//     }
// }


const editKaryawan = (target) => {   
    const karyawanEdit = cariKaryawan(target);
    const karyawanDiedit = daftarKaryawan[karyawanEdit];

    const nama = document.getElementById('txtnama').value = target
    const nomorInduk = document.getElementById('txtnomorInduk').value = karyawanDiedit.nomorInduk
    const masaKerja = document.getElementById('txtmasaKerja').value = karyawanDiedit.masaKerja
    const gaji = document.getElementById('txtgaji').value = karyawanDiedit.gaji

    mode = karyawanEdit

    

    // daftarKaryawan[indexEdit] = {
    //     nama: namaBaru,
    //     masaKerja: masaKerjaBaru,
    //     nomorInduk: nomorIndukBaru,
    //     gaji: gajiBaru
    // }

}

const cancel = (target) => {
    const nama = document.getElementById('txtnama').value = ""
    const nomorInduk = document.getElementById('txtnomorInduk').value = ""
    const masaKerja = document.getElementById('txtmasaKerja').value = ""
    const gaji = document.getElementById('txtgaji').value = ""
    mode = 'tambah'
}

