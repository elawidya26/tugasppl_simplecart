/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require('../helpers.js')
// hasil jumlah
test('Qty 1 jika ditambahkan 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});
// hasil jumlah +1
test('Qty 1 jika ditambahkan "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});
// penghitungan ulang total bayar
test('Subtotal dari 25000 dan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(25000, 2)).toBe(50000);
});
// inputan angka penjumlahan ulang dengan string
test('subtotal dengan inputan string', () => {
    expect(recalculateSubtotal('25000', 4)).toBe(100000);
});
// pengurangan jumlah
test('decrementQty bisa berkurang', () => {
    expect(decrementQty(2)).toBe(1);
});
// tidak boleh kurang dari 1
test('decrementQty tidak boleh berkurang ketika qty > 0', () => {
    expect(decrementQty(1)).toBe(1);
});
// cek perubahan subtotal setelah diskon
test('subtotal dengan discount', () => {
    expect(recalculateSubtotal(50000, 3, 50)).toBe(75000);
});