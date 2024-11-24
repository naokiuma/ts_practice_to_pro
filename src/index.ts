import {createInterface}from 'readline';

const rl = createInterface({
	input:process.stdin,
	output:process.stdout,
})
rl.question('文字列を入力して:',(line) =>{
	console.log(`${line}が入力されました`)
	const testbig:bigint = 3n;
	console.log(testbig);

	const input1 = "123"
	console.log(!input1);

	rl.close();
})

const message:string = "hello.world!";
console.log(message)