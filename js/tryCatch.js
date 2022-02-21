try {
    console.log('Normal');
    console.log(a)
    console.log('res')
} catch(e) {
    console.log(e.message)
    console.log('error')
} finally {
    console.log('run always')
}

console.log('Still normal')