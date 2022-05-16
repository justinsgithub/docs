/*
 * myfuncs.c
 *
 * Linux C Programming Success Essentials - Example Program
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "myfuncs.h"

static int thisFileCount =
    0; // this variable is only available inside of this file

int myProgramCount = 0;
const int numOfStates = 50;

// before compilation, preprocessor replaces all instances of NUM_OF_STATES with
// specified value does not take up space in memory, should be used instead of
// global const
#define NUM_OF_STATES = 50;

// needs to be declared before it is implemented, or you can put prototype at
// the top of the file
static int staticFunction(void) {
  return 1;
} // this function is only available inside of this file. Not put in header file

void enumExample(void) {
  Day today = MONDAY;
  switch (today) {
    case SUNDAY: {
      printf("today is sunday\n");
      break;
    }
    case MONDAY: {
      printf("today is monday\n");
      break;
    }
    default: 
      printf("today is not sunday or monday\n");
  }
}

void staticExample(void) {

  char states[numOfStates]; // sets states to be an array of characters equal to
                            // num of states

  static int32 count = 0; // persists value of 0 everytime this function is ran

  count = count + staticFunction();
  thisFileCount = thisFileCount + staticFunction();

  printf("count is %d\n", count);
  printf("this file count is %d\n", thisFileCount);
}

void typeCastingExample(void) {
  int myint = 80001;
  int myint2 = 5000;

  // 2's complement is a computer science technique to store a negative number
  // in memory
  char mychar = -1; // 2's complement to represent negative numbers

  /*
   * 0000 0001
   * 1111 1110 // converts all 0's and 1's to the opposite, (compliment)
   * 1111 1111 // adds a 1 to the outcome of the compliment, this is how -1 is
   * represented in C, which equals 255 type casting does not change the value
   * in memory, it just represents it differently
   */

  // integer is 4 bytes / 32 bits, short is only 2 bytes / 16 bits, so casting
  // to short will only look at the first 16 digits / bits
  printf("myint cast to short = %d\n", (short)myint);
  printf("myint2 cast to short = %d\n", (short)myint2);
  printf("myint cast to unsigned int = %d\n", (unsigned int)myint);
  printf("myint cast to unsigned long = %1d\n", (unsigned long)myint);
  printf("myint cast to unsigned char = %d\n", (unsigned char)mychar);
}

void datatypeExample(void) {
  int myint;
  unsigned int myuint;
  short myshort;
  unsigned short myushort;
  char mychar;
  unsigned char myuchar;
  long mylong;
  unsigned long myulong;

  float myfloat;
  double mydouble;

  char mychar2 = 65;

  struct user myself;

  memset(&myself, 0, sizeof(myself));

  myself.userid = 1;
  strncpy(myself.username, "justin", strlen("justin"));
  myself.age = 26;
  strncpy(myself.occupation, "developer", strlen("developer"));

  printf("myself.userid = %d myself.username = %s myself.age = %u "
         "myself.occupation = %s\n",
         myself.userid, myself.username, myself.age, myself.occupation);

  printf("sizeof(myint) = %1d\n", sizeof(myint));
  printf("sizeof(myuint) = %1d\n", sizeof(myuint));
  printf("sizeof(myshort) = %1d\n", sizeof(myshort));
  printf("sizeof(myushort) = %1d\n", sizeof(myushort));
  printf("sizeof(mychar) = %1d\n", sizeof(mychar));
  printf("sizeof(myuchar) = %1d\n", sizeof(myuchar));
  printf("sizeof(mylong) = %1d\n", sizeof(mylong));
  printf("sizeof(myulong) = %1d\n", sizeof(myulong));
  printf("sizeof(myfloat) = %1d\n", sizeof(myfloat));
  printf("sizeof(mydouble) = %1d\n", sizeof(mydouble));

  printf("mychar2 as integer = %d\n", mychar2);
  printf("mychar2 as character = %c\n", mychar2);
}

int gotoExample(void) {
  // this function checks a user's identity
  // returns 0 for success, or other error codes depending on the reason for
  // failure goto can be used in place of early return statements for better
  // code coverage

  char *name = "Justin";
  int age = -26;
  char *occupation = "software developer";
  int ret = -1;

  if (!name) {
    ret = -2;
    goto error;
  }

  if (age < 0) {
    ret = -3;
    goto error;
  }

  if (!occupation) {
    ret = -4;
    goto error;
  }

  ret = 0;

error:
  return ret;
}

void switchExample(void) {
  char selector = 'c';

  switch (selector) {
  case 'a': {
    printf("apple\n");
    break;
  }
  case 'b': {
    printf("banana\n");
    break;
  }
  case 'c': {
    printf("carrot\n");
    break;
  }
  case '1':
  case '2':
  case '3':
  case '4': {
    printf("it was 1, 2, 3, or 4\n");
    break;
  }
  default: {
    printf("was not a, b, or c\n");
  }
  }
}

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
  for (d = 0; d < 5; d++) {
    if (d == 3)
      continue;
    printf("d = 3 does not get printed, d = %d\n", d);
  }
}
