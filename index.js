const fs = require("fs");
const readline = require("readline");
const rInter = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const questions = [`what is your fullname? `,`what project are you working on currently?`,`what language are you using? `,`what is your stack?`, `when did you start coding? `]

rInter.question(questions[0], response0 =>{
    if(!response0){
        console.log('what is your Fullname');
    }
    rInter.question(questions[1], response1 =>{
        if (!response1) {
            console.log('what project are you working on currently?');
        }
        rInter.question(questions[2], response2 => {
            if (!response2) {
                console.log('what language are you using?');
            }
            rInter.question(questions[3], response3 => {
                if (!response3) {
                    console.log('what is your stack?');
                }

                rInter.question(questions[4], response4 => {
                    if (!response4) {
                        console.log('when did you start coding?');
                    }
                    const both = [`${questions[0]}:\n ${response0}`, `${questions[1]}:\n ${response1}`, `${questions[2]}:\n ${response2}`, `${questions[3]}:\n ${response3}`,`${questions[4]}:\n ${response4}`]
                    var wstream = fs.createWriteStream('readme.md');
                    wstream.on('error', console.error);
                    both.forEach((str) => {
                        wstream.write(str + '\n');
                    });
                    wstream.end();
                    rInter.close();

                });
            });

        });
    });
    
})