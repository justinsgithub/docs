# ----------------------------------------------------------------------------------------
#
# Makefile for c programming class
#
# ----------------------------------------------------------------------------------------

MYPROG=myprogram

CC=gcc
CFLAGS=-g -O0 -Wall

MYOBJS= myfuncs.o myprogram.o

all: $(MYPROG)

$(MYPROG): $(MYOBJS)
	$(CC) $(CFLAGS) $(MYOBJS) -o $(MYPROG)

myprogram.o:
	$(CC) $(CFLAGS) -c myprogram.c 

myfuncs.o:
	$(CC) $(CFLAGS) -c myfuncs.c
			
clean:
	rm -rf $(MYPROG) $(MYOBJS)
