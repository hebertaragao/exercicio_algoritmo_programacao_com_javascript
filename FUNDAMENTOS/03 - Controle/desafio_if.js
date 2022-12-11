/**
 * A ENTRE 9.0 E 10.0
 * B ENTRE 7.0 E 8.9
 * C ENTRE 5.0 E 6.9
 * D ENTRE 4.5 E 4.9
 * F ABAIXO DE 4.5
 */

const nota = 2;


if (nota <= 10 && nota >= 9) {
    console.log('A');
}
if (nota < 9 && nota >= 7) {
    console.log('B');
}
if (nota < 7 && nota >= 5) {
    console.log('C');
}
if (nota < 5 && nota >= 4.5) {
    console.log('D');
}
if (nota >= 0 && nota < 4.5) {
    console.log('F')
}