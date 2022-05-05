/*
 * myfuncs.c
 *
 * Linux C Programming Success Essentials - Example Program
 */
#include <stdio.h>
#include <stdlib.h>

void printHelloWorld(void) { printf("Hello World\n"); }

void promptAndPrint(void) {
  int iNumber = 0;
  int myAge = 26;
  printf("%s %s %d || Your age is: %d\n", __FILE__, __FUNCTION__, __LINE__,
         myAge);

  printf("Enter an integer please: ");
  scanf("%d", &iNumber);
  printf("You entered: %d\n", iNumber);
}

int addTwo(int number) { return number + 2; }

void ifStatementExample(void) {
  int a = 5;
  int *b = NULL;

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

void loopExample(void) {
  int a = 0;
  int b = 7;
  int i = 0;
  while (a < 10) {
    if (a == b)
      break;
    printf("a = %d\n", a);
    a++;
  }
  for (i = a; i < 10; i++) {
    printf("i = %d\n", i);
  }
  int c = 0;
  do {
    printf("this always runs at least once, c = %d\n", c);
    c = c + 2;
  } while (c < i);

  int d = 0;
  for (d = 0; d < 5; d++){
    if ( d == 3 ) 
      continue;
    printf("d = 3 does not get printed, d = %d\n", d);
  }
}
