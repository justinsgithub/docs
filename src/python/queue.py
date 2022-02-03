import random
class Queue:

    def __init__(self):
        self.items = []

    def enqueue(self, item):
        """
        inserts an item at the 0 index in a list

        running time is 0(n) or linear time because inserting into the 0th index of a list
        forces all the other items in the list to move one index to the right
        """
        self.items.insert(0, item)

    def dequeue(self):
        """
        returns and removes the front-most item of the Queue, which is represented by the last item in the list

        The run time is 0(1), or constant time because indexing to the end of a list happens in constant time
        """

        if self.items:
            return self.items.pop()
        return None

    def peek(self):
        """ Returns the last item in the list, which represents the front-most item in the Queue

            The runtime is constant because we are just indexing the last item of the list, and returning the value found there 
        """
        if self.items:
            return self.items[-1]
        return None

    def size(self):
        """returns the size of the Queue, which is represented by the length of the list

            the runtime is 0(1) because we are simply returning the length
        """
        return len(self.items)

    def is_empty(self):
        """ returns a Boolean value based on whether or not the list representing the queue is empty

        a simple check for equality here will run in constant time"""
        return self.items == []


class Job:
    def __init__(self):
        self.pages = random.randint(1, 10)

    def check_complete(self):
        return self.pages == 0

    def print_page(self):
        if not self.check_complete():
            self.pages -= 1


class Printer:
    def __self__(self):
        self.current_job = None

    def get_job(self, print_queue):
        try:
            self.current_job = print_queue.dequeue()
        except IndexError:
            return "no more jobs to print"

    def print_job(self, job):
        while job.pages > 0:
            job.print_page()

        if job.check_complete():
            return "printing complete"

        else:
            return "an error occured"


job1 = Job()
print_q = Queue()
printer = Printer()


print("job 1 has this many pages ", job1.pages)

print_q.enqueue(job1)
print_q.enqueue(job1)

print("print_q has this many items in queue ", print_q.size())

printer.get_job(print_q)

print(print_q.items)
