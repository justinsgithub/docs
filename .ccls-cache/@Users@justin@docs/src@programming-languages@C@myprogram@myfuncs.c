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
  int myAge = 26;
  printf("%s %s %d || Your age is: %d\n", __FILE__, __FUNCTION__, __LINE__, myAge);

	printf("Enter an integer please: ");
	scanf("%d", &iNumber);
	printf("You entered: %d\n", iNumber);
}

int addTwo(int number)
{
  return number + 2;
}

void ifStatementExample(void)
{
  int a = 5;
  int * b = NULL;

  if (a > 2)
    printf("a is greater than 2, a = %d\n", a);
  else
    printf("a is not greater than 2, a = %d\n", a);

  a = -5;
  if (a)
    printf("a is not 0, it is %d\n", a);
  
  if (b) 
    printf("b is not zero\n");
  else 
    printf("b is NULL\n");
  
}
