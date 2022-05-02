# ----------------------------------------------------------------------------------------
#
# Makefile for c programming class
#
# ----------------------------------------------------------------------------------------

MYPROG=myprogram

CC=gcc
CFLAGS=-g -O0 -Wall # options for debugging, -O is optimization level, 0 is good for debugging

MYOBJS= myfuncs.o myprogram.o

# makefile is setup in stages 

# [name of your stage]: [dependencies]
#		[ your build commands (such as gcc $my-files ) ] 
#		[unix commands such as ls]

# all is a special, default stage, is triggered when you do not specify stages in your makefile
# when you do not specify a stage to the 'make' command, it will automatically default to 'all'
# since all has the dependency of MYPROG, it has to execute this first, which is another stage 
all: $(MYPROG)

# MYPROG has the dependencies stored in the variable MYOBJS, which is myprogram.o and myfuncs.o, which have instructions to follow 
$(MYPROG): $(MYOBJS)
	$(CC) $(CFLAGS) $(MYOBJS) -o $(MYPROG)

# does not have any dependencies, so will run first
myprogram.o:
	$(CC) $(CFLAGS) -c myprogram.c 

# technically myfuncs.c is a dependency so it can be put as one
myfuncs.o: myfuncs.c
	$(CC) $(CFLAGS) -c myfuncs.c
			
# make clean will run rm -rf the binary and object files that were used to build the main program
clean:
	rm -rf $(MYPROG) $(MYOBJS)
