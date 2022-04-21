/*
 * myfuncs.c
 *
 * Linux C Programming Success Essentials - Example Program
 */
#include <stdio.h>
#include <stdlib.h>

void printHelloWorld(void)
{
	printf("Hello World\n");
}

void promptAndPrint(void)
{
	int iNumber = 0;
	printf("Enter an integer please: ");
	scanf("%d", &iNumber);
	printf("You entered: %d", iNumber);
}
