/*
 * Implement all your JavaScript in this file!
 */
 $(document).ready(function(){
  var firstNum = '';
  var secondNum = '';
  var result = '';
  var operation = '';
  var lastOperation = '';
  var lastOperand = '';

  // resets all fields to empty
  function resetAll(){
    firstNum = '';
    secondNum = '';
    result = '';
    operation = '';
    lastOperand = '';
    lastOperation = '';
  }
  // only resets first and second numnbers
  function reset(){
    firstNum = '';
    secondNum = '';
  }

  function operationReset(){
    operation = '';
  }

  function resultReset(){
    result = '';
  }

  function printVal(){
    console.log('first: ' + firstNum);
    console.log('second: ' + secondNum);
    console.log('result: ' + result);
    console.log('operation: ' + operation);
    console.log('lastOperand ' + lastOperand);
    console.log('lastOperation ' + lastOperation);
  }

  function add(){
    result = Number(firstNum) + Number(secondNum);
    setLastOperation();

  }

  function subtract(){
    result = Number(firstNum) - Number(secondNum);
    setLastOperation();

  }

  function multiply(){
    result = Number(firstNum) * Number(secondNum);
    setLastOperation();

  }

  function divide(){
    result = Number(firstNum) / Number(secondNum);
    setLastOperation();
  }

  function performOp(){
    if( operation == '-'){
      subtract();
    }
    else if(operation == '+'){
      add();
    }
    else if(operation == '*'){
      multiply();
    }
    else if(operation == '/'){
      divide();
    }
  }

  function intermediateCalc(){
    performOp();
    $("#display").val(result);
    reset();
    firstNum = result;
    resultReset();
  }


  $("button[id='addButton']").click(function(){

      // if there are 2 operands and an operation, create that result first
      if(firstNum != '' && secondNum != '' && operation != ''){
        intermediateCalc();
      }
      // if there are already 2 operands, create a result reset
      else if(firstNum != '' && secondNum != ''){
        add();
        //printVal();
        reset();
        firstNum = result;
        $("#display").val(result);
        //resultReset();
      }
       // the case where a number is input without an intermediate operand
      else if(firstNum != '' && result != ''){
        resultReset();
      }

      operation = '+';
  });

  $("button[id='subtractButton']").click(function(){

      // if there are 2 operands and an operation, create that result first
      if(firstNum != '' && secondNum != '' && operation != ''){
        intermediateCalc();
      }
      // if there are already 2 operands, create a result reset
      else if(firstNum != '' && secondNum != ''){
        subtract();
        reset();
        firstNum = result;
        $("#display").val(result);
        resultReset();
      }
      // the case where a number is input without an intermediate operand
      else if(firstNum != '' && result != ''){
        resultReset();
      }
      operation = '-';
  });

  $("button[id='multiplyButton']").click(function(){

       // if there are 2 operands and an operation, create that result first
      if(firstNum != '' && secondNum != '' && operation != ''){
        intermediateCalc();
      }
      // if there are already 2 operands, create a result reset
      else if(firstNum != '' && secondNum != ''){
        multiply();
        reset();
        firstNum = result;
        $("#display").val(result);
        resultReset();
      }
      // the case where a number is input without an intermediate operand
      else if(firstNum != '' && result != ''){
        resultReset();
      }

      operation = '*';
  });

  $("button[id='divideButton']").click(function(){

      // if there are 2 operands and an operation, create that result first
      if(firstNum != '' && secondNum != '' && operation != ''){
        intermediateCalc();
      }
      // if there are already 2 operands, create a result reset
      if(firstNum != '' && secondNum != ''){
        divide();
        reset();
        firstNum = result;
        $("#display").val(result);
        resultReset();
      }
      // the case where a number is input without an intermediate operand
      else if(firstNum != '' && result != ''){
        resultReset();
      }
      operation = '/';
  });

  $("button[id='equalsButton']").click(function(){
    // if we are adding a result and firstNum,
    // this means we are combining a result and firstNum
    //printVal();
    if( secondNum == '' ){
      //if(result != ''){
        result = firstNum;
      //}
      // if no operation, repeat last operation
     if( operation == ''){
        operation = lastOperation;
        secondNum = lastOperand;
        performOp();
      }
      else if(operation != ''){
        // do nothing
        return;
      }
    }
    // addition
    else if(operation == '+'){
      add();
    }
    // subtraction
    else if(operation == '-'){
      subtract();
    }
    // multiplication
    else if(operation == '*'){
      multiply();
    }
    // division
    else if(operation == '/'){
      divide();
    }

    $("#display").val(result);

    // set the last operation in memory
    setLastOperation();
    reset();
    operationReset();
    firstNum = result;
    //printVal();
  });

  function setLastOperation(){
    lastOperand = secondNum;
    lastOperation = operation;
  }

  function buttonLogic(thisValue){
    // if there is not an operation, we need to fill firstNum
    if(operation == '' && result == ''){
      firstNum += String(thisValue);
      $("#display").val(firstNum);
    }

    // if there is an operation, we may be:
    // 1. overwriting the result with a new firstNum
    else if(operation == '' && result != ''){
      firstNum = String(thisValue);
      resultReset();
      $("#display").val(firstNum);
    }

    // 2. combining a second number
    else{
      secondNum += String(thisValue);
      $("#display").val(secondNum);
    }

  }

  // displaying numbers in the display field
  $("button[id='button1']").click(function(){
    buttonLogic($(this).val());
  });

   // displaying numbers in the display field
  $("button[id='button2']").click(function(){
    buttonLogic($(this).val());
  });

   // displaying numbers in the display field
  $("button[id='button3']").click(function(){
     buttonLogic($(this).val());
  });

   // displaying numbers in the display field
  $("button[id='button4']").click(function(){
     buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button5']").click(function(){
    buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button6']").click(function(){
     buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button7']").click(function(){
    buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button8']").click(function(){
    buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button9']").click(function(){
     buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='button0']").click(function(){
    buttonLogic($(this).val());
  });

  // displaying numbers in the display field
  $("button[id='clearButton']").click(function(){
    // display number in input box
    var thisValue = $(this).val();
    // reset to clear
    resetAll();

    $("#display").val(firstNum);
  });

});