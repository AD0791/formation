class Employee:
    def greet(self):
        print("Employee Greet")


class Person:
    def speak(self):
        print("Person speak")

# multi-level inheritance


class Manager(Employee, Person):
    pass


man = Manager()
