/**
 * Execute node loop.js
 * stdin number and get stdout 
 */
process.stdin.on('data', function (data) {
    main(+(data));
});

function main(input) {
    for (var i = 1; i <= input; i++) {
        process.stdout.write(i + " ");
    }
}