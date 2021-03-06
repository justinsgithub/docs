/*
 * myprogram.c
 *
 * Linux C Programming Success Essentials - Example Program
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "myfuncs.h"

extern int myProgramCount; // allows using variables from other files
extern int numOfStates;


int main(void) {

  enumExample();
  printf("my program count = %d\n", myProgramCount);
  staticExample();
  staticExample();
  // typeCastingExample();
  // datatypeExample();

  return 0;
}

/*
int main(void) {

  int ret = -1;

  ret = gotoExample();

  datatypeExample();

  switch(ret){
    case -2: {
      printf("invalid name\n");
      break;
    }
    case -3: {
      printf("invalid age\n");
      break;
    }
    case -4: {
      printf("invalid occupation\n");
      break;
    }
    default: {
      printf("function returned successfully\n");
    }
  }

  return 0;
}

int main(int argc, char *argv[])
{
  loopExample();
  switchExample();
  int twoPlusFifty;

  if (argc != 3)
  {
    printf("invalid number of arguments, expected 2\n");
    return -1;
  }

  twoPlusFifty = addTwo(50);
  printf("twoPlusFifty = %d\n", twoPlusFifty);

        printHelloWorld();

        // promptAndPrint();

  ifStatementExample();
        return 0;
}
*/
