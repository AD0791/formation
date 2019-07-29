# parent or base class
class Animal:
    def __init__(self):
        self.age = 1

    def eat(self):
        print("EAT")

# childrens of animal


class Mammal(Animal):

    def walk(self):
        print('WALK')


class Fish(Animal):
    def swim(self):
        print('SWIM')
