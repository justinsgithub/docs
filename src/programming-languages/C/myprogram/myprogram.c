/*
 * myprogram.c
 *
 * Linux C Programming Success Essentials - Example Program
 */

#include <stdio.h>
#include <stdlib.h>

#include "myfuncs.h"

int main(void) {
  loopExample();
  return 0;
}

/*
int main(int argc, char *argv[])
{
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
