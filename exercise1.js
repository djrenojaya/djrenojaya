// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip" 
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri

// Buatlah logic dari statement diatas
// Tidak boleh langsung print expected output
 
// Jawaban:
// function hipHura (bilangan) 
{
     for(i=0;i<15;) {
            console.log((++i%3?'':'hip')+(i%5?'':'hura')||i)
         }
   
}

// console.log(hipHura(15))