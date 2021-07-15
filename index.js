// #!/usr/bin/env node

//Gives the information of Commands
// console.log(process.argv);

const program = require('commander');
const clipboardy = require('clipboardy')
const chalk = require('chalk')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Genereator');

// program.command('generate').action(() =>{
//     console.log("Generated!")
// })
//  .parse();

program
 .option('-l,--length <number>','length of password',8)
 .option('-s,--save','save password to password.txt')
 .option('-nn,--no-numbers' ,'remove numbers')
 .option('-ns,--no-symbols' ,'remove symbols')

 .parse()
 
// console.log(program.opts());
const {length,save,numbers,symbols} = program.opts();

//Get generated password
const generatedPassword = createPassword(length,numbers,symbols)

//Save to files
if(save){
    savePassword(generatedPassword)
}
//copy to clipboard
clipboardy.writeSync(generatedPassword);
 
console.log(chalk.red('Genenrated Password: ') + chalk.bold(generatedPassword))
console.log(chalk.yellow('Password copied to clipboard'))