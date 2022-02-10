//initialize elements
const   Ver1Inputs          = document.querySelectorAll('.v-1'),
        Ver2Inputs          = document.querySelectorAll('.v-2'),
        Hor1Inputs          = document.querySelectorAll('.h-1'),
        Hor2Inputs          = document.querySelectorAll('.h-2'),

        HorizontalOptions   = document.querySelectorAll('.horizontal'),
        VerticalOptions     = document.querySelectorAll('.vertical'),

        HorizontalAnswers   = ['sector', 'onix'],
        VerticalAnswers     = ['violin', 'oil'];



//sort inputs by line
ReadInputs = function(inputs, number, axis) {
    --number;
    inputs.forEach((input)=> {
        input.addEventListener('input', ()=> {
            let letters = [];
            let word = '';
            inputs.forEach((letter)=> {
                letters.push(...letter.value);
            });
            letters.forEach((element)=> {
                word = word + element;
            });
            CheckList(word, number, axis);
        });
    })
}

//check whether right/false
CheckList = function(word, number, axis) {
    if (axis == 'v') {
        VerticalAnswers.forEach((answer, id)=> {
            if (id == number) {
                if (answer == word) {
                    VerticalOptions.forEach((option ,OptId)=> {
                        if (number == OptId) {
                            option.style.color = 'blue';
                        }
                    });
                } else {
                    VerticalOptions.forEach((option ,OptId)=> {
                        if (number == OptId) {
                            option.style.color = 'black';
                        }
                    });
                }
            } 
        });
    } else {
        HorizontalAnswers.forEach((answer, id)=> {
            if (id == number) {
                if (answer == word) {
                    HorizontalOptions.forEach((option,OptId)=> {
                        if (OptId == id) {
                            option.style.color = 'blue';
                        }
                    });
                } else {
                    HorizontalOptions.forEach((option,OptId)=> {
                        if (OptId == id) {
                            option.style.color = 'black';
                        }
                    });
                }
            } 
        });
    }
}
ReadInputs(Ver1Inputs, 1, 'v');
ReadInputs(Ver2Inputs, 2, 'v');
ReadInputs(Hor1Inputs, 1, 'h');
ReadInputs(Hor2Inputs, 2, 'h');

// FirstV.forEach((input, id) => {
//     input.addEventListener('input', ()=> {
//         FirstVV = '';
//         FirstVArr.length = 0;
//         FirstV.forEach((input)=> {
//             FirstVArr.push(...input.value);
//         });
//         FirstVArr.forEach((value)=> {
//             FirstVV = FirstVV + value;
//         })
//         if (FirstVV == 'blazer') {
//             ErstPunkt.style.color = 'blue';
//         } else {
//             ErstPunkt.style.color = 'red';
//         }
//         console.log(FirstVV);
//     })
// });


