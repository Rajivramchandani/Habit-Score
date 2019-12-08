const answers = ["a","a","a","a","a","b"];
const rep = ["Brush your teeth first, ", "Excersise once a day, ","Take a bath dude!, ","gotta have just 2 meanls a day, ","make your own meals often, ","Take a cycle save the enviromnent"]
let form = document.querySelector(".form-check");

form.addEventListener('submit', e => {
    e.preventDefault();
    const useranswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value];
    console.log(answers);
    let i = 0;
    useranswers.forEach((ans,index) =>{
        if(ans===answers[index])
        {
            i += Math.round(100/6);
        }
       
        if(i===102)
        {
            document.querySelector('em').textContent=`You're Perfect because you got 100`;
        }
        else if(i>50)
        {
            document.querySelector('em').textContent="You're almost there, Your score is "+i;
        }
        else{
            document.querySelector('em').textContent="You've gotta imporve, Your score is "+i;
        }

    })
});
