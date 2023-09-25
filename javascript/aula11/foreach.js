const linguagens = ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'PHP', 'SQL'];
console.clear();

linguagens.forEach(item => {
    console.log(item);
});
console.log('\n\n');

linguagens.forEach((item, index) => {
    console.log(index, item);
});