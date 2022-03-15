class Deque:
    
    def __init__(self):
        self.items = []

    def add_front(self, item):
        """takes item as a paramater and inserts it at the 0th index of the list that is representing the deque 

        the runtime is linear or 0(n) because every time you insert into the front of a list every item needs to shift over one position to the right"""

        self.items.insert(item)

    def add_rear(self, item):
        """takes an item as a parameter and appends that item to the end of the list that is reperesenting the deque

        the runtime is constant because appending to the end of a list happens in constant time"""
        
        self.items.append(item)

    def remove_front(self):
        """removes and returns the0th index of the list, which represents the front of the Deque

        the runtime is linear / 0(n) because when we remove the 0th index, all other items on the list have to shift 1 spot to the left"""
        if self.items:
            return self.items.pop(0)
        return None

    def remove_rear(self):
        """removes and returns the last item of the list, which represents the rear of a queue the runtime is constant because all we are doing is indexing to the end of the list"""
        if self.items:
            return self.items.pop()
        return None

    def peek_front(self):
        """returns the value found as 0th index in list representing front of deque, constant time because it is indexing to front of list"""
        if self.items:
            return self.items[0]

        return None

    def peek_rear(self):
        """returns the value found as last index in list representing rear of deque, constant time because it is indexing to back of list"""
        if self.items:
            return self.items[-1]

        return None

    def is_empty(self):
        return self.items == []
        
    def size(self):
        return len(self.items)


def check_palindrome(my_string):

    d = Deque()

    for x in my_string:
        d.add_rear(x)

    while d.size() >= 2:
        if not d.remove_front() == d.remove_rear():
            return False

    return True

print(check_palindrome("defnot"))

print(check_palindrome("racecar"))
