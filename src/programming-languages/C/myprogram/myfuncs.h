/*
 * myfuncs.h
 *
 * Linux C Programming Success Essentials - Example Program
 */

struct user {
  int userid;
  char username[64];
  unsigned int age;
  char occupation[64];
};

// defines a data type which can only be one of the specified values 
// automatically will start at 0 if no other number is defined and increment by 1
typedef enum dayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
} Day;

// typedef keyword gives a type a new name / alias
typedef int int32;
typedef unsigned int uint32;
typedef short int16;
typedef unsigned short uint16;
typedef char int8;
typedef unsigned char uint8;
typedef long int64;
typedef unsigned long uint64;

typedef struct user userinfo;


void printHelloWorld(void);

void promptAndPrint(void);

int addTwo(int number);

void ifStatementExample(void);

void loopExample(void);

void switchExample(void);

int gotoExample(void);

void datatypeExample(void);

void typeCastingExample(void);

void staticExample(void);

void enumExample(void);
