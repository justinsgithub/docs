/*
 * myprogram.c
 *
 * Linux C Programming Success Essentials - Example Program
 */

#include <stdio.h>
#include <stdlib.h>

#include "myfuncs.h"

int main(void)
{
  int twoPlusFifty;

  twoPlusFifty = addTwo(50);
  printf("twoPlusFifty = %d\n", twoPlusFifty);

	printHelloWorld();

	promptAndPrint();
	return 0;
}
