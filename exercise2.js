// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output

// Jawaban:
var arr = [31, 9, 54, 11, 43, 6, 67]
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
   
}

console.log(min);