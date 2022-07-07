#include <stdio.h>
#include <stdlib.h>

void memoryAllocationExample(void) {

  int a = 50; // static memory allocation, which is automatically stored in Stack Memory
  int * b = NULL; // NULL since we do not know where it is going to point to yet

  b = (int*) malloc(sizeof(int)); // dynamic memory allocation (heap memory), allocates 4 bytes, the size of an int, returns a pointer 
  // check to make sure it returns a pointer 
  if (!b) {
    printf("failed to allocate memory from heap!\n");
    return;
  }

  *b = 50;

  printf("a = %d, b = %d", a, *b);

}
