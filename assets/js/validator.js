
// function Validator(formSelect){

//     function getParent(element, selector) {
//         while (element.parentElement){
//             if(element.parentElement.matches(selector)){
//                 return element.parentElement;
//             }
//             element = element.parentElement;
//         }
//     }

//     //RULES :
//     // - IF Error : return error message
//     // - IF NO Errot : return undefined
//     var formRules = {};
//     var validatorRules = {                      
//         required: function(value) {
//             return value ? undefined : `Please must be not empty`;
//         },
//         email: function(value) {
//             var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//             return regex.test(value) ? undefined : 'Please input your email';
//         },
//         min: function(min){
//             return function (value) {
//                 return value.length >= min ? undefined : `Please input at least ${min} number`;
//             }
//         },
//         max: function(max){
//             return function (value) {
//                 return value.length <= max ? undefined : `Please input most ${max} number`;
//             }
//         }
//     };
//     // Select form element in DOM with `formSelector`
//     var formElement = document.querySelector(formSelect);
//     // Exist excute when element in DOM
//     if(formElement){
//         var inputs = formElement.querySelectorAll('[name][rules]');
//         for (var input of inputs)
//         {  
//             var ruleInfo;
//             var rules = input.getAttribute('rules').split('|');
//             for(var rule of rules)
//             {
//                 var isRuleHasValue = rule.includes(':');

//                 if(rule.includes(':')){
//                     ruleInfo = rule.split(':');
//                     rule = ruleInfo[0];
//                 }

//                 var ruleFunc = validatorRules[rule];

//                 if(isRuleHasValue){
//                     ruleFunc = ruleFunc();
//                 }

//                 if (Array.isArray(formRules[input.name])){
//                     formRules[input.name].push(ruleFunc);
//                 } else {
//                     formRules[input.name] = [ruleFunc];
//                 }
//             }
//             // Listen event validate (blur,change,..)
//             input.onblur = handleValidate;
//             input.onblur = handleClearError;
//         }
//         // Excute Valid Function
//         function handleValidate(event){
//             var rules = formRules[event.target.name];
//             var errorMessage;
//             rules.find(function (rule){
//                 errorMessage =  rule(event.target.value);
//                 return errorMessage;    
//             });

//             // If have error case -> view on UI
//             if(errorMessage){
//                 var formGroup = getParent(event.target,'.form-group');

//                 if(formGroup){
//                     var formMessage = formGroup.querySelector('.form-message');
//                     if(formMessage){
//                         formMessage.innerText = errorMessage;
//                     }
//                 } 
//             }
//         }
//         // Function Clear Message Error
//         function handleClearError(event){
//             var formGroup = getParent(event.target,'.form-group');
//             if (formGroup.classList.contains('invalid')){
//                 formGroup.classList.remove('invalid');

//                 var formMessage = formGroup.querySelectorAll('.form-message');

//                 if (formMessage) {
//                     formMessage.innerText = '';
//                 }
//             }
//         }
//     }

//     // Execute Submit Form 
//     formElement.onsubmit = function (event) {
//         event.preventDefault();

//         var inputs = formElement.querySelectorAll('[name][rules]');
//         for (var input of inputs){
//             console.log(input);
//         }
//     }
// }